"use client";

/**
 * Motor de gamificação.
 * Guarda quais módulos/desafios o pai já completou no localStorage do navegador.
 * Controla o que está "trancado" (locked) e o que já abriu (unlocked).
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

const STORAGE_KEY = "guia-ia-progresso-v1";
const VOCAB_KEY = "guia-ia-vocab-v1";

// Ordem dos módulos — cada um só abre quando o anterior é concluído.
export const MODULE_ORDER = [
  "intro", // 0 — sempre aberto
  "prompting", // 1
  "metaprompt", // 2
  "harness", // 3 — o Master Prompt
  "skills", // 4
  "mcps", // 5
  "research", // 6
  "bastidores", // 7
  "diploma", // 8
] as const;

export type ModuleId = (typeof MODULE_ORDER)[number];

type ProgressState = {
  done: Record<string, boolean>; // desafios concluídos por id
  ready: boolean; // já carregou do localStorage?
};

type ProgressContextValue = {
  ready: boolean;
  isDone: (challengeId: string) => boolean;
  complete: (challengeId: string) => void;
  reset: () => void;
  /** Quantos desafios de um módulo foram concluídos. */
  moduleProgress: (moduleId: ModuleId, total: number) => number;
  /** Um módulo está liberado? (o anterior precisa ter pelo menos 1 concluído) */
  isModuleUnlocked: (moduleId: ModuleId) => boolean;
  /** Total de desafios concluídos no guia inteiro. */
  totalDone: number;
  /** Vocabulário de IA desbloqueado pelo pai (palavras de insider). */
  vocab: string[];
  vocabCount: number;
  learnVocab: (termo: string) => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

// Mapeia: para cada módulo, qual o prefixo dos ids de desafio dele.
// Ex: desafios do módulo "prompting" têm id começando com "prompting:".
function moduleOf(challengeId: string): string {
  return challengeId.split(":")[0];
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>({ done: {}, ready: false });
  const [vocab, setVocab] = useState<string[]>([]);

  // Carrega do navegador na primeira renderização.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const done = raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
      setState({ done, ready: true });
      const rv = localStorage.getItem(VOCAB_KEY);
      if (rv) setVocab(JSON.parse(rv) as string[]);
    } catch {
      setState({ done: {}, ready: true });
    }
  }, []);

  const learnVocab = useCallback((termo: string) => {
    setVocab((prev) => {
      if (prev.includes(termo)) return prev;
      const next = [...prev, termo];
      try {
        localStorage.setItem(VOCAB_KEY, JSON.stringify(next));
      } catch {
        /* sem storage */
      }
      return next;
    });
  }, []);

  const persist = useCallback((done: Record<string, boolean>) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    } catch {
      /* navegador sem storage — segue o jogo sem salvar */
    }
  }, []);

  const isDone = useCallback(
    (id: string) => !!state.done[id],
    [state.done]
  );

  const complete = useCallback(
    (id: string) => {
      setState((prev) => {
        if (prev.done[id]) return prev;
        const done = { ...prev.done, [id]: true };
        persist(done);
        return { ...prev, done };
      });
    },
    [persist]
  );

  const reset = useCallback(() => {
    persist({});
    setState({ done: {}, ready: true });
  }, [persist]);

  const moduleProgress = useCallback(
    (moduleId: ModuleId) => {
      return Object.keys(state.done).filter(
        (id) => state.done[id] && moduleOf(id) === moduleId
      ).length;
    },
    [state.done]
  );

  const isModuleUnlocked = useCallback(
    (moduleId: ModuleId) => {
      const idx = MODULE_ORDER.indexOf(moduleId);
      if (idx <= 0) return true; // intro sempre aberto
      const prev = MODULE_ORDER[idx - 1];
      // o módulo anterior precisa ter pelo menos 1 desafio concluído
      const prevDone = Object.keys(state.done).some(
        (id) => state.done[id] && moduleOf(id) === prev
      );
      return prevDone;
    },
    [state.done]
  );

  const totalDone = Object.values(state.done).filter(Boolean).length;

  return (
    <ProgressContext.Provider
      value={{
        ready: state.ready,
        isDone,
        complete,
        reset,
        moduleProgress: (m, _t) => moduleProgress(m),
        isModuleUnlocked,
        totalDone,
        vocab,
        vocabCount: vocab.length,
        learnVocab,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress precisa estar dentro de ProgressProvider");
  return ctx;
}

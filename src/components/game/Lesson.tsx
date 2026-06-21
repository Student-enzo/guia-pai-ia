"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "@/lib/config";
import { useProgress } from "@/lib/progress";
import { Step, passosJogaveis, ehJogavel } from "@/lib/game/types";
import { dispararConfete } from "@/lib/fun";
import { ChunkyButton, Hearts, ProgressSegments, Mascote } from "./atoms";
import { StepView } from "./steps";

type FB = { ok: boolean; comentario: string } | null;

const ELOGIOS = ["Mandou bem! ⚓", "Isso, capitão! 🎉", "Navegando liso! ⛵", "Mar de almirante! 🌊", "Tá voando! 🦜"];

export function Lesson({
  slug,
  moduleId,
  steps,
  proximo,
}: {
  slug: string;
  moduleId: string;
  steps: Step[];
  proximo: string | null;
}) {
  const router = useRouter();
  const { complete } = useProgress();
  const total = useMemo(() => passosJogaveis(steps), [steps]);

  const [idx, setIdx] = useState(0);
  const [vidas, setVidas] = useState(3);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [erros, setErros] = useState(0);
  const [resolvidos, setResolvidos] = useState(0); // jogáveis concluídos
  const [fb, setFb] = useState<FB>(null);
  const [fim, setFim] = useState(false);

  const step = steps[idx];

  const responder = (ok: boolean, comentario: string) => {
    if (fb) return;
    if (ok) {
      setXp((x) => x + 10 + streak * 2);
      setStreak((s) => s + 1);
      setFb({ ok: true, comentario: comentario || pick(ELOGIOS, idx) });
    } else {
      setErros((e) => e + 1);
      setStreak(0);
      setVidas((v) => {
        const nv = v - 1;
        return nv <= 0 ? 3 : nv; // o mar dá mais uma chance (não trava o iniciante)
      });
      setFb({ ok: false, comentario });
    }
  };

  const avancar = () => {
    const eraJogavel = ehJogavel(step.kind);
    setFb(null);
    if (eraJogavel) setResolvidos((r) => r + 1);
    if (idx >= steps.length - 1) {
      setFim(true);
      dispararConfete();
      complete(`${moduleId}:done`);
    } else {
      setIdx((i) => i + 1);
    }
  };

  if (fim) {
    return <Conquista xp={xp} erros={erros} proximo={proximo} onMapa={() => router.push("/")} onProx={() => proximo && router.push(`/modulo/${proximo}`)} />;
  }

  const segAtual = step.kind === "fala" || step.kind === "premio" ? resolvidos : resolvidos;

  return (
    <div className="world-bg" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* topo: sair + progresso + vidas (pílula branca) */}
      <div style={{ position: "sticky", top: 52, zIndex: 20, padding: "14px 16px 8px" }}>
        <div
          style={{
            maxWidth: 600,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "#fff",
            borderRadius: 999,
            padding: "9px 14px",
            boxShadow: "0 8px 22px -10px rgba(20,58,94,0.4)",
            border: "1px solid #E2EEF7",
          }}
        >
          <Link href="/" style={{ fontSize: 20, color: C.textMuted, textDecoration: "none", fontWeight: 900, lineHeight: 1 }} aria-label="Sair">
            ✕
          </Link>
          <ProgressSegmentsWrap total={total} atual={segAtual} />
          <Hearts restantes={vidas} />
        </div>
      </div>

      {/* corpo — dentro do "palco" */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", width: "100%", padding: "12px 18px 170px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              className="stage"
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.28, type: "spring", stiffness: 260, damping: 24 }}
              style={{ padding: "26px 22px 24px" }}
            >
              <StepView step={step} onResponder={responder} onAdvance={avancar} locked={!!fb} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* barra de feedback */}
      <AnimatePresence>
        {fb && (
          <div
            className="slide-up"
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 40,
              background: fb.ok ? "#E4F4EC" : "#FCE9E7",
              borderTop: `3px solid ${fb.ok ? C.green : "#E2574C"}`,
              padding: "18px 22px 26px",
            }}
          >
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <span style={{ fontSize: 26 }}>{fb.ok ? "✅" : "🤚"}</span>
                <span
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 900,
                    fontSize: 19,
                    color: fb.ok ? C.greenDeep : "#B33A30",
                  }}
                >
                  {fb.ok ? "Boa, capitão!" : "Ó o Ô!"}
                </span>
              </div>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 600, color: C.ink, margin: "0 0 14px", lineHeight: 1.45 }}>
                {fb.comentario}
              </p>
              <ChunkyButton full cor={fb.ok ? C.green : "#E2574C"} onClick={avancar}>
                Continuar →
              </ChunkyButton>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProgressSegmentsWrap({ total, atual }: { total: number; atual: number }) {
  return (
    <div style={{ flex: 1, height: 11, display: "flex" }}>
      <ProgressSegments total={total} atual={atual} />
    </div>
  );
}

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

// ── Tela de ILHA CONQUISTADA ──
function Conquista({
  xp,
  erros,
  proximo,
  onMapa,
  onProx,
}: {
  xp: number;
  erros: number;
  proximo: string | null;
  onMapa: () => void;
  onProx: () => void;
}) {
  const estrelas = erros === 0 ? 3 : erros <= 2 ? 2 : 1;
  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(${C.ink}, ${C.navy})`, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 220, damping: 16 }} style={{ textAlign: "center", maxWidth: 420 }}>
        <Mascote humor="festa" tamanho={120} />
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, color: "#fff", margin: "18px 0 6px", fontWeight: 700 }}>
          Ilha Conquistada!
        </h2>
        <div style={{ fontSize: 40, margin: "6px 0 18px", letterSpacing: 4 }}>
          {["⭐", "⭐", "⭐"].map((s, i) => (
            <span key={i} style={{ opacity: i < estrelas ? 1 : 0.2 }}>{s}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 26 }}>
          <Placar rotulo="XP ganho" valor={`+${xp}`} cor={C.brass} />
          <Placar rotulo="Erros" valor={String(erros)} cor={erros === 0 ? C.green : C.sea} />
        </div>
        {proximo ? (
          <ChunkyButton full cor={C.brass} onClick={onProx}>Próxima ilha →</ChunkyButton>
        ) : (
          <ChunkyButton full cor={C.green} onClick={onMapa}>🎉 Terminei a travessia!</ChunkyButton>
        )}
        <button onClick={onMapa} style={{ marginTop: 14, background: "none", border: "none", color: "#A9B6C9", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
          Voltar ao mapa
        </button>
      </motion.div>
    </div>
  );
}

function Placar({ rotulo, valor, cor }: { rotulo: string; valor: string; cor: string }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 14, padding: "12px 22px", minWidth: 96 }}>
      <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 12, color: "#A9B6C9", fontWeight: 700, letterSpacing: "0.08em" }}>{rotulo.toUpperCase()}</div>
      <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: 28, fontWeight: 900, color: cor }}>{valor}</div>
    </div>
  );
}

/**
 * Os tipos de "passo" de uma lição-jogo.
 * Variedade = sensação de jogo (não só quiz).
 */

export type Opcao = {
  texto: string;
  certa: boolean;
  /** comentário engraçado mostrado no feedback (piada de pai / elogio) */
  comentario: string;
};

export type Step =
  // Mascote falando — info curtinha (1-2 frases). Tap pra continuar.
  | {
      kind: "fala";
      mascote?: "feliz" | "pensando" | "festa";
      titulo?: string;
      texto: string;
    }
  // Escolha múltipla — clica na resposta certa
  | {
      kind: "escolha";
      pergunta: string;
      contexto?: string; // ex: "O hóspede mandou esta mensagem..."
      opcoes: Opcao[];
    }
  // Mito ou Verdade — dois botões grandes
  | {
      kind: "mito";
      afirmacao: string;
      ehVerdade: boolean;
      comentarioCerto: string; // quando acerta
      comentarioErrado: string; // quando erra
    }
  // Monte o prompt — toca nas peças na ordem certa
  | {
      kind: "monte";
      instrucao: string;
      // peças embaralhadas; "ordem" é a sequência correta (índices de `pecas`)
      pecas: string[];
      ordem: number[];
      dica?: string;
      sucesso: string; // comentário ao montar certo
    }
  // Ligue os pares — associa ferramenta ↔ função
  | {
      kind: "ligue";
      instrucao: string;
      pares: { esquerda: string; direita: string }[];
      sucesso: string;
    }
  // Ache o bom — toca no ÚNICO prompt bom entre vários
  | {
      kind: "ache";
      instrucao: string;
      itens: Opcao[]; // exatamente um com certa:true
    }
  // Recompensa / fim de mini-sessão (cartão de baú)
  | {
      kind: "premio";
      titulo: string;
      texto: string;
      emoji: string;
    }
  // Tesouro: um prompt pronto pra copiar (preserva a utilidade dentro do jogo)
  | {
      kind: "tesouro";
      titulo: string;
      texto: string;
      prompt: string;
    };

export type Licao = {
  slug: string;
  steps: Step[];
};

/** quantos passos "valem ponto" (não são fala/premio) — usado pro placar */
export function passosJogaveis(steps: Step[]): number {
  return steps.filter(
    (s) => s.kind !== "fala" && s.kind !== "premio" && s.kind !== "tesouro"
  ).length;
}

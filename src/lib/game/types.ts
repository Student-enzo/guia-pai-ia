/**
 * Os tipos de "passo" de uma lição-jogo.
 * Variedade = sensação de jogo (não só quiz).
 *
 * Dois grupos:
 *  - JOGÁVEIS (valem ponto/erro): escolha, ache, mito, monte, ligue, construir, caca
 *  - EXPLORAÇÃO (sem pass/fail, só descobrir): fala, premio, tesouro, simulador, dial, swarm
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
      mascote?: "feliz" | "pensando" | "festa" | "triste";
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
  // ─────────── NOVOS: INTERATIVOS QUE "RENDERIZAM" ───────────
  // SIMULADOR — chat de verdade: o pai toca num pedido e vê a IA DIGITANDO a resposta.
  // Sem pass/fail — é pra SENTIR a diferença entre um pedido fraco e um forte.
  | {
      kind: "simulador";
      titulo?: string;
      instrucao: string;
      pedidos: {
        rotulo: string; // texto do botão que ele envia
        resposta: string; // o que a IA "digita" de volta
        bom: boolean; // true = pedido forte (resposta ótima)
        etiqueta?: string; // selo curto, ex: "pedido fraco" / "pedido forte"
      }[];
      sucesso: string;
    }
  // DIAL — gira o "esforço" da IA (rápido → máximo) e vê a resposta mudar ao vivo.
  | {
      kind: "dial";
      instrucao: string;
      niveis: { rotulo: string; resposta: string }[]; // do mais baixo ao mais alto
      sucesso: string;
    }
  // CONSTRUIR — monta o pedido com blocos coloridos, toca ENVIAR, e a IA responde lindo.
  | {
      kind: "construir";
      instrucao: string;
      blocos: { etiqueta: string; texto: string; cor?: string }[]; // tocar na ordem
      resposta: string; // resposta da IA ao pedido montado
      sucesso: string;
    }
  // CAÇA — ache a invenção: a IA "respondeu" e um pedaço é mentira (alucinação). Toca nele.
  | {
      kind: "caca";
      instrucao: string;
      contexto?: string; // a pergunta que foi feita à IA
      pedacos: { texto: string; mentira?: boolean }[]; // exatamente um com mentira:true
      explicacao: string; // mostrado ao achar
    }
  // SWARM — vê a frota de agentes (barquinhos) trabalhando em PARALELO. Só assistir e entender.
  | {
      kind: "swarm";
      instrucao: string;
      tarefas: string[]; // cada barco faz uma
      sucesso: string;
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

export type StepKind = Step["kind"];

export type Licao = {
  slug: string;
  steps: Step[];
};

// Passos de exploração: não valem ponto nem erro (não têm "resposta certa").
const NAO_JOGAVEIS = new Set<StepKind>([
  "fala",
  "premio",
  "tesouro",
  "simulador",
  "dial",
  "swarm",
]);

/** true se o passo vale ponto/erro (entra no placar e na barra de progresso). */
export function ehJogavel(kind: StepKind): boolean {
  return !NAO_JOGAVEIS.has(kind);
}

/** quantos passos "valem ponto" — usado pro placar e barra de progresso */
export function passosJogaveis(steps: Step[]): number {
  return steps.filter((s) => ehJogavel(s.kind)).length;
}

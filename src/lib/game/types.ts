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
  // CHAT — Conversa Viva: chat imersivo onde a IA "digita" letra por letra.
  // O pai toca pra enviar cada mensagem e vê a resposta surgir ao vivo.
  | {
      kind: "chat";
      titulo?: string;
      instrucao: string;
      turnos: { de: "voce" | "ia"; texto: string }[]; // alternam; ia anima digitando
      sucesso: string;
    }
  // MEDIDOR — Medidor de Contexto: toca chips de contexto, o medidor vai de
  // VERMELHO a VERDE e a resposta da IA se transforma de genérica pra perfeita ao vivo.
  | {
      kind: "medidor";
      titulo?: string;
      instrucao: string;
      chips: string[]; // pedaços de contexto pra adicionar
      respostaFraca: string; // resposta com pouco contexto
      respostaForte: string; // resposta com contexto cheio
      sucesso: string;
    }
  // BOSS — Boss Battle "O Cliente Difícil": um cliente bravo tem uma barra de
  // irritação. O pai monta a resposta com os ingredientes certos e drena a barra até o sorriso.
  | {
      kind: "boss";
      titulo?: string;
      cliente: string; // nome do "boss", ex: "Cliente Bravo"
      reclamacao: string; // a mensagem irritada
      ingredientes: { etiqueta: string; bom: boolean }[]; // bons drenam a irritação, ruins são armadilha
      respostaVitoria: string; // a resposta montada quando vence
      sucesso: string;
    }
  // CORRIDA — Corrida do Swarm: um barco sozinho (tarefas em fila, devagar) corre
  // contra uma frota em paralelo (rápida). O pai larga a corrida e vê o swarm ganhar.
  | {
      kind: "corrida";
      instrucao: string;
      tarefas: string[]; // as tarefas que ambos precisam fazer
      sucesso: string;
    }
  // TRANSFORMA — "conserta o pedido": liga ingredientes e vê o pedido fraco virar forte ao vivo,
  // com a resposta da IA mudando. Mecânica nova: toggles aditivos + medidor + antes/depois.
  | {
      kind: "transforma";
      instrucao: string;
      base: string; // pedido fraco inicial
      ingredientes: { etiqueta: string; texto: string }[]; // ligar pra melhorar
      respostaFraca: string; // resposta ao pedido fraco
      respostaForte: string; // resposta ao pedido completo
      sucesso: string;
    }
  // PRATICAR — "Faça Agora": camada de IMPLEMENTAÇÃO. Passo a passo que o pai
  // faz DE VERDADE no app de IA dele, com checklist e prompt pra copiar.
  | {
      kind: "praticar";
      titulo: string;
      intro: string;
      passos: string[]; // cada passo é uma ação real (toca pra marcar feito)
      prompt?: string; // prompt pronto pra copiar e colar
      fechamento: string;
    }
  // EXPERIMENTO — "Faça e Conta": missão prática de verdade no app de IA dele.
  // Ele FAZ a ação, depois toca em "o que aconteceu?" e ganha uma reação/insight.
  // NÃO é quiz (sem certo/errado) — é laboratório: faça, teste, conte o resultado.
  | {
      kind: "experimento";
      titulo: string;
      missao: string; // o que ele deve fazer DE VERDADE (1-2 frases diretas)
      ondeFazer?: string; // ex: "no ChatGPT, Claude ou Gemini"
      prompt?: string; // prompt pronto pra copiar
      pergunta?: string; // ex: "E aí, o que a IA fez?"
      resultados: {
        rotulo: string; // botão: "Ela me fez várias perguntas"
        reacao: string; // reação do Loro + o insight do que isso ensina
        ideal?: boolean; // true = resultado esperado (celebra)
      }[];
      fechamento: string;
    }
  // BAU — "Baú Misterioso": o pai abre e ganha UM tesouro ALEATÓRIO (prompt bônus).
  // Recompensa variável (Octalysis Mystery Box #72 / Eyal Rewards of the Hunt).
  | {
      kind: "bau";
      titulo: string;
      intro: string;
      tesouros: { prompt: string; nota: string }[];
      sucesso: string;
    }
  // VOCAB — "Decodificador": revela uma palavra de IA (insider) e a adiciona ao
  // vocabulário do pai. Mecânica de pertencimento (Godin/Cialdini): você agora fala a língua.
  | {
      kind: "vocab";
      termo: string;
      significado: string;
      insider: string; // "você agora é dos poucos que sabe isso"
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
  "chat",
  "medidor",
  "boss",
  "corrida",
  "praticar",
  "experimento",
  "vocab",
  "bau",
]);

/** true se o passo vale ponto/erro (entra no placar e na barra de progresso). */
export function ehJogavel(kind: StepKind): boolean {
  return !NAO_JOGAVEIS.has(kind);
}

/** quantos passos "valem ponto" — usado pro placar e barra de progresso */
export function passosJogaveis(steps: Step[]): number {
  return steps.filter((s) => ehJogavel(s.kind)).length;
}

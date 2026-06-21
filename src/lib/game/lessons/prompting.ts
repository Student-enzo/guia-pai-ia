import { Step } from "../types";

// MÓDULO 1 — FALAR COM A IA (lição-jogo)
export const prompting: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "A regra do porão 🪣",
    texto:
      "Bom dia, capitão! A IA não lê pensamento — ela faz exatamente o que você pede. Pedido vago, resposta vaga. É igual ao barco: lixo que entra no porão, lixo que sai. Bora aprender a pedir bem.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "A receita dos 5 ingredientes 🧾",
    texto:
      "Um bom pedido tem 5 temperos: CONTEXTO (a situação), OBJETIVO (o que você quer no fim), TOM (como deve soar), FORMATO/TAMANHO (email curto? lista?) e O QUE EVITAR (preço, promessa, gíria). Decorou? Nunca mais recebe resposta sem graça.",
  },
  {
    kind: "mito",
    afirmacao: "Se eu pedir só 'escreve um email', a IA adivinha o resto e acerta.",
    ehVerdade: false,
    comentarioCerto:
      "Isso! Pedido curto demais, a IA chuta. Capriche nos 5 ingredientes e ela devolve quase pronto.",
    comentarioErrado:
      "É MITO, capitão! A IA não advinha — ela chuta. 'Escreve um email' sobre o quê? Pra quem? Sem contexto, vem genérico. Diga os detalhes e ela acerta.",
  },
  {
    kind: "escolha",
    contexto: "Um cliente fechou um passeio de domingo às 9h e você quer confirmar por email.",
    pergunta: "Qual pedido vai render o melhor email?",
    opcoes: [
      {
        texto:
          "Escreve um email simpático e curto confirmando a reserva do passeio de domingo às 9h, sem inventar preço.",
        certa: true,
        comentario:
          "Mandou bem! Tem contexto, objetivo, tom, tamanho e o que evitar. A IA devolve quase pronto pra mandar.",
      },
      {
        texto: "Escreve um email.",
        certa: false,
        comentario:
          "Curto demais! A IA não sabe sobre o quê nem pra quem. Vai vir um email genérico que você teria que refazer três vezes. ⚓",
      },
      {
        texto: "Faz aí um negócio pro cliente.",
        certa: false,
        comentario:
          "Vago demais, capitão! 'Um negócio' pode ser qualquer coisa. Diga: email, confirmação, domingo 9h. Aí ela acerta.",
      },
    ],
  },
  {
    kind: "monte",
    instrucao: "Toque nas peças na ordem certa pra montar um pedido caprichado:",
    pecas: [
      "Escreva um email",
      "curto e caloroso",
      "confirmando a reserva",
      "do passeio de barco",
      "de amanhã",
    ],
    ordem: [0, 1, 2, 3, 4],
    dica: "Comece pela ação (o que fazer), depois o tom, e termine com o detalhe do passeio.",
    sucesso:
      "Perfeito, capitão! Ação + tom + detalhe. Esse pedido a IA confirma sem você nem revisar. 🛥️",
  },
  {
    kind: "ache",
    instrucao: "Só UM destes pedidos vai trazer uma resposta boa. Ache o bom:",
    itens: [
      {
        texto: "responde o cliente",
        certa: false,
        comentario: "Responde o quê? Como? A IA fica no escuro. Faltam os ingredientes.",
      },
      {
        texto:
          "Responda este hóspede de forma gentil, explicando que o passeio do sábado está cheio e oferecendo o domingo. Mensagem curta de WhatsApp.",
        certa: true,
        comentario:
          "Esse é o bom! Tem situação, objetivo, tom e formato. A IA sabe exatamente o que fazer. 💬",
      },
      {
        texto: "fala alguma coisa boa pro pessoal",
        certa: false,
        comentario: "'Alguma coisa boa'? A IA não sabe o que é bom pra você. Seja específico.",
      },
    ],
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "Três truques de ouro 💎",
    texto:
      "1) Diga tudo ANTES, no primeiro pedido — não fique consertando depois. 2) Peça a VERDADE, não elogio: 'me dá o feedback sem filtro'. 3) Pra decidir, peça os DOIS lados: o a favor E o contra, depois a opinião.",
  },
  {
    kind: "escolha",
    pergunta: "Você quer saber se vale comprar outro barco. Qual o melhor jeito de pedir?",
    opcoes: [
      {
        texto:
          "Me dá o melhor argumento PRA comprar e o melhor argumento PRA NÃO comprar, depois sua opinião.",
        certa: true,
        comentario:
          "Esse! Pedindo os dois lados, a IA não fica só concordando com o que você já queria ouvir. Decisão de capitão de verdade. 🧭",
      },
      {
        texto: "Me convence que comprar outro barco é uma boa ideia.",
        certa: false,
        comentario:
          "Cuidado! Pedindo só um lado, a IA puxa seu saco e esconde os riscos. Peça o a favor E o contra pra enxergar o mar inteiro.",
      },
    ],
  },
  {
    kind: "premio",
    emoji: "🧾",
    titulo: "Você ganhou a Receita de Ouro!",
    texto:
      "Agora você manda os 5 ingredientes, pede a verdade e olha os dois lados. Pedido caprichado, resposta caprichada. Já manda melhor que muita gente, capitão!",
  },
];

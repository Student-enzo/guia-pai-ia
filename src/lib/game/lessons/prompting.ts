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
    titulo: "A receita de 4 blocos 🧾",
    texto:
      "Todo pedido bom tem 4 blocos, nesta ordem: PAPEL (quem a IA deve ser), TAREFA (o que fazer), DETALHES (a situação) e FORMATO (como deve sair). Vou te deixar montar um agora — é mais fácil do que parece.",
  },
  {
    kind: "construir",
    instrucao:
      "Toque nos blocos na ordem — Papel, Tarefa, Detalhes, Formato — e depois envie. Veja a IA responder.",
    blocos: [
      { etiqueta: "PAPEL", texto: "Você é meu assistente do charter", cor: "#B0894F" },
      { etiqueta: "TAREFA", texto: "escreva um email", cor: "#6FA8AD" },
      { etiqueta: "DETALHES", texto: "confirmando o passeio de domingo às 9h", cor: "#4A9B7F" },
      { etiqueta: "FORMATO", texto: "curto e caloroso, sem inventar preço", cor: "#8A6FB0" },
    ],
    resposta:
      "Olá! Passando pra confirmar com alegria o seu passeio neste domingo, às 9h da manhã. 🌊 Estaremos prontos pra te receber a bordo com mar calmo e muito sol. Qualquer dúvida até lá, é só chamar. Até domingo!",
    sucesso:
      "Perfeito, capitão! Papel + Tarefa + Detalhes + Formato. Esse email saiu pronto pra mandar. 🛥️",
  },
  {
    kind: "mito",
    afirmacao: "Se eu pedir só 'escreve um email', a IA adivinha o resto e acerta.",
    ehVerdade: false,
    comentarioCerto:
      "Isso! Pedido curto demais, a IA chuta. Capriche nos 4 blocos e ela devolve quase pronto.",
    comentarioErrado:
      "É MITO, capitão! A IA não adivinha — ela chuta. 'Escreve um email' sobre o quê? Pra quem? Sem contexto, vem genérico.",
  },
  {
    kind: "ache",
    instrucao: "Só UM destes pedidos vai trazer uma resposta boa. Ache o bom:",
    itens: [
      {
        texto: "responde o cliente",
        certa: false,
        comentario: "Responde o quê? Como? A IA fica no escuro. Faltam os blocos.",
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
    kind: "tesouro",
    titulo: "Tesouro: seu modelo de resposta",
    texto: "Cola isso em qualquer IA, troca o que está entre [colchetes], e manda ver.",
    prompt:
      "Você é meu assistente do meu negócio de charter de barcos.\nResponda este hóspede: [cole a mensagem dele].\nObjetivo: [confirmar / remarcar / agradecer].\nTom: caloroso e profissional. Formato: mensagem curta de WhatsApp.\nNão invente preço nem prometa o que eu não disse.",
  },
  {
    kind: "premio",
    emoji: "🧾",
    titulo: "Você ganhou a Receita de Ouro!",
    texto:
      "Agora você monta os 4 blocos, pede a verdade e olha os dois lados. Pedido caprichado, resposta caprichada. Já manda melhor que muita gente, capitão!",
  },
];

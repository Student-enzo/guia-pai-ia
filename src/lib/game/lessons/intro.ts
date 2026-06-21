import { Step } from "../types";

// MÓDULO 0 — O Grande Segredo (lição-jogo)
export const intro: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Oi, eu sou o Loro! 🦜",
    texto:
      "Vou ser seu co-piloto nessa travessia, capitão. Relaxa: você não precisa entender de tecnologia. Só precisa aprender a conversar — e isso você faz a vida inteira.",
  },
  {
    kind: "simulador",
    titulo: "Olha a IA trabalhando 👀",
    instrucao:
      "Um hóspede mandou mensagem sobre o passeio de amanhã. Toque nos dois jeitos de pedir e veja a IA responder. Sinta a diferença.",
    pedidos: [
      {
        rotulo: "responde esse cliente aí",
        etiqueta: "pedido fraco",
        bom: false,
        resposta:
          "Claro! Aqui está uma resposta:\n\n“Olá, obrigado pela sua mensagem. Entraremos em contato em breve.”\n\n(genérico, sem alma — porque eu tive que adivinhar tudo 🤷)",
      },
      {
        rotulo:
          "Responde o hóspede confirmando o passeio amanhã às 9h, tom caloroso e em inglês",
        etiqueta: "pedido forte",
        bom: true,
        resposta:
          "Good morning, James! 🌅 All set for tomorrow — we’ll welcome you aboard at 9 AM sharp. Calm seas, sunshine, and a captain who knows every cove. Bring a hat and your sense of adventure! Any questions before we set sail?",
      },
    ],
    sucesso: "Mesma IA, pedidos diferentes — resultados de outro mundo.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "O segredo que quase ninguém conta:",
    texto:
      "Viu? Não é a ferramenta, é o JEITO de pedir. Quem ganha com IA não é quem aperta o botão mágico — é quem aprende a falar com ela. E é isso que vou te ensinar, passo a passo.",
  },
  {
    kind: "mito",
    afirmacao: "Pra usar Inteligência Artificial, eu preciso saber programar.",
    ehVerdade: false,
    comentarioCerto:
      "Isso! Você conversa com a IA em português normal, igual mandar um zap. Zero código.",
    comentarioErrado:
      "Na verdade é MITO! Você fala em português comum. Se sabe mandar mensagem no WhatsApp, já sabe o essencial.",
  },
  {
    kind: "escolha",
    pergunta: "A IA é melhor descrita como…",
    opcoes: [
      {
        texto: "Um assistente genial que trabalha de graça e nunca cansa",
        certa: true,
        comentario: "Exato! Pensa nela como o melhor funcionário do mundo, 24h, sem mau humor.",
      },
      {
        texto: "Um robô que vai tomar o meu lugar",
        certa: false,
        comentario:
          "Calma! Ela é ferramenta, não chefe. Quem usa IA passa na frente de quem não usa — você no comando.",
      },
      {
        texto: "Coisa de gente nova, não é pra mim",
        certa: false,
        comentario: "Que nada! É justamente pra quem tem experiência e sabe o que quer. Bora.",
      },
    ],
  },
  {
    kind: "mito",
    afirmacao: "No mundo da IA, um dia de novidade equivale a quase um ano de antigamente.",
    ehVerdade: true,
    comentarioCerto:
      "Verdade! Por isso não adianta decorar ferramenta — elas mudam toda semana. A gente aprende a PENSAR, que não sai de moda.",
    comentarioErrado:
      "É VERDADE, viu? A IA corre absurdamente rápido. Por isso focamos em habilidade, não em decorar botão.",
  },
  {
    kind: "praticar",
    titulo: "Sua primeira conversa com a IA",
    intro:
      "Chega de teoria — bora fazer de verdade, capitão. Leva 2 minutos. Eu espero aqui. 🦜",
    passos: [
      "Abra o ChatGPT (chatgpt.com) ou o Claude (claude.ai) no celular ou no computador.",
      "Toque na caixa de escrever, lá embaixo.",
      "Cole o pedido abaixo e mande (aperte Enter ou a setinha).",
      "Leia a resposta. Pronto — você acabou de usar IA. 🎉",
    ],
    prompt:
      "Você é um assistente simpático. Me explique, em 3 frases curtas e simples, o que você consegue fazer por um dono de negócio de passeios de barco. Sem termos técnicos.",
    fechamento: "Viu como é fácil? É só conversar.",
  },
  {
    kind: "vocab",
    termo: "Prompt",
    significado: "É só o nome chique do seu PEDIDO. Toda vez que você escreve algo pra IA, isso é um 'prompt'. Pronto, desmistificado.",
    insider: "Agora, quando alguém soltar 'prompt' no jantar, você sabe — e a maioria não faz ideia.",
  },
  {
    kind: "premio",
    emoji: "🧭",
    titulo: "Você ganhou a Bússola!",
    texto:
      "Primeira lição no bolso: não é a ferramenta, é o jeito de pedir. Agora bora aprender a falar com a IA de verdade.",
  },
];

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
    kind: "mito",
    afirmacao: "Pra usar Inteligência Artificial, eu preciso saber programar.",
    ehVerdade: false,
    comentarioCerto:
      "Isso! Você conversa com a IA em português normal, igual mandar um zap. Zero código.",
    comentarioErrado:
      "Na verdade é MITO! Você fala em português comum. Se sabe mandar mensagem no WhatsApp, já sabe o essencial.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "O segredo que quase ninguém conta:",
    texto:
      "Não é a ferramenta, é o SISTEMA. Quem ganha com IA não é quem escreve o pedido mais bonito — é quem monta um jeito repetível de trabalhar. É isso que vou te ensinar.",
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
    kind: "escolha",
    contexto: "Claude, ChatGPT e Gemini — qual a real?",
    pergunta: "Qual frase está certa sobre as diferentes IAs?",
    opcoes: [
      {
        texto: "São barcos diferentes pro mesmo mar — cada uma é boa numa coisa",
        certa: true,
        comentario:
          "Isso! Claude escreve e raciocina lindo, ChatGPT é versátil e faz imagem, Gemini é rápido com textão. E o que você aprende serve em TODAS.",
      },
      {
        texto: "Só uma presta, o resto é ruim",
        certa: false,
        comentario:
          "Nada disso! Nenhuma é ‘ruim’ — cada uma brilha numa tarefa. A habilidade que você ganha aqui viaja entre todas.",
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
    kind: "premio",
    emoji: "🧭",
    titulo: "Você ganhou a Bússola!",
    texto:
      "Primeira lição no bolso: não é a ferramenta, é o sistema. Agora bora aprender a falar com a IA de verdade.",
  },
];

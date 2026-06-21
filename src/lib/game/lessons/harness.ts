import { MASTER_PROMPT } from "@/lib/masterPrompt";
import { Step } from "../types";

// MÓDULO 3 — O Prompt Mágico (o harness). O baú que vale o jogo inteiro.
export const harness: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Chegamos no tesouro, capitão! 🪄",
    texto:
      "Tudo até aqui foi pra você chegar nesta lição. Agora vou te dar UM prompt mágico que, colado uma vez, transforma a IA na sua professora particular. Pra sempre. Sem mais remo, só vela.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "O pulo do gato:",
    texto:
      "Em vez de você suar pra escrever o pedido perfeito, você cola este prompt. Aí é só dizer o que quer — e a IA te diz COMO pedir, FAZ a tarefa, e ainda te ENSINA. É um copiloto que também é professor de bordo.",
  },
  {
    kind: "escolha",
    pergunta: "O que esse Prompt Mágico faz por você?",
    contexto: "Pensa nele como o manual de bordo do barco.",
    opcoes: [
      {
        texto:
          "Te ensina a pedir, faz a tarefa, e explica o que você aprendeu",
        certa: true,
        comentario:
          "Isso, capitão! Ele monta o pedido por você, entrega, e ainda te deixa mais esperto. Três num só.",
      },
      {
        texto: "Programa o computador no seu lugar",
        certa: false,
        comentario:
          "Que nada! Zero código. Ele só conversa com você em português e organiza o trabalho.",
      },
      {
        texto: "Substitui você no comando do barco",
        certa: false,
        comentario:
          "Nunca! O leme é seu. Ele é o copiloto — você é o capitão que dá as ordens.",
      },
    ],
  },
  {
    kind: "escolha",
    pergunta: "Onde você cola o Prompt Mágico?",
    contexto: "Tem hora certa pra içar a vela.",
    opcoes: [
      {
        texto: "No começo de uma conversa NOVA, antes de pedir qualquer coisa",
        certa: true,
        comentario:
          "Perfeito! Cola primeiro, igual a checklist antes de zarpar. Conversa muito longa? Abre outra e cola de novo.",
      },
      {
        texto: "No meio da conversa, depois que já bagunçou tudo",
        certa: false,
        comentario:
          "Melhor no início, capitão. Cola ANTES de pedir as coisas, assim ele já entra no comando do começo.",
      },
    ],
  },
  {
    kind: "mito",
    afirmacao: "Esse prompt só funciona numa IA específica — nas outras não rola.",
    ehVerdade: false,
    comentarioCerto:
      "Isso! É MITO. Funciona em qualquer barco: Claude, ChatGPT, Gemini. Cola e usa onde quiser.",
    comentarioErrado:
      "Na verdade é MITO! Ele funciona em TODAS — Claude, ChatGPT, Gemini. O mesmo tesouro vale em qualquer mar.",
  },
  {
    kind: "tesouro",
    titulo: "O Prompt Mágico",
    texto:
      "Aqui está, capitão. Copia tudo, cola no começo de uma conversa nova, e veja a IA virar sua professora. 🦜",
    prompt: MASTER_PROMPT,
  },
  {
    kind: "simulador",
    titulo: "Depois de colar o Prompt Mágico 🪄",
    instrucao:
      "Com ele colado, é só dizer o que quer. Toque e veja a professora trabalhar.",
    pedidos: [
      {
        rotulo: "preciso responder um hóspede chateado com a chuva no passeio",
        etiqueta: "você pede simples",
        bom: true,
        resposta:
          "Entendi, capitão. Antes, deixa eu te mostrar COMO vou pedir (pra você aprender):\n• Papel: assistente do charter\n• Tom: empático, sem prometer reembolso\n\nAgora a mensagem:\n“Sentimos muito pela chuva de hoje! O mar manda, mas a gente cuida de você: que tal remarcar sem custo pro próximo dia de sol? 🌤️”\n\nReparou? Eu pedi por você, fiz, e te expliquei. 🦜",
      },
    ],
    sucesso: "Isso é o harness: ele pede, faz e ensina — tudo de uma vez.",
  },
  {
    kind: "praticar",
    titulo: "Ative o Prompt Mágico agora",
    intro:
      "Vamos transformar a IA na sua professora particular. É colar uma vez só.",
    passos: [
      "Abra uma conversa NOVA no ChatGPT ou Claude.",
      "Copie o Prompt Mágico do baú acima e cole como a PRIMEIRA mensagem.",
      "Mande. A partir daí, é só dizer o que você quer, do seu jeito.",
      "Teste: peça 'me ajuda a responder um cliente sobre o passeio de domingo'.",
    ],
    fechamento: "Pronto — agora ela te ensina, faz e explica. Pra sempre.",
  },
  {
    kind: "premio",
    emoji: "🏆",
    titulo: "Você desenterrou o Baú!",
    texto:
      "O Prompt Mágico agora é seu. Guarda com carinho, usa em qualquer IA, e nunca mais navegue sozinho. Bem-vindo ao comando, capitão.",
  },
];

import { Step } from "../types";

// MÓDULO 4 — Skills & Comandos "/" (lição-jogo)
export const skills: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Salvar o jeito de fazer 🧰",
    texto:
      "Capitão, imagina um marinheiro novo. Na primeira vez você ensina a amarrar o barco no cais. Na décima vez... cansa, né? Pois é: dá pra ensinar UMA vez e nunca mais explicar.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "Isso tem nome chique: skill",
    texto:
      "Uma skill é só um comportamento SALVO. Você ensina o jeito de fazer uma vez, dá um nome, e depois é só chamar. O marinheiro já sabe a rotina inteira.",
  },
  {
    kind: "mito",
    afirmacao:
      "Se eu repito as mesmas instruções pra IA toda semana, isso já é uma skill.",
    ehVerdade: true,
    comentarioCerto:
      "A regra de ouro! Se você cola o mesmo textão de novo e de novo, pare: aquilo merece virar atalho. Salve uma vez, economize o resto da vida.",
    comentarioErrado:
      "É VERDADE, viu? Repetiu a mesma explicação? Já é uma skill esperando pra nascer. Não cole a mesma coisa pela terceira vez — salve.",
  },
  {
    kind: "escolha",
    contexto: "Você digita só uma barra / na conversa…",
    pergunta: "O que aparece quando você digita / ?",
    opcoes: [
      {
        texto: "Um menu de superpoderes já prontos pra usar",
        certa: true,
        comentario:
          "Isso! A barra / abre o baú de comandos. São uns cem, mas relaxa: você só precisa de uns poucos.",
      },
      {
        texto: "Um erro — a IA não entende barra",
        certa: false,
        comentario:
          "Que nada! A / é justamente o atalho pros superpoderes. Digita uma barra e espia o menu.",
      },
      {
        texto: "Ela apaga tudo que você escreveu",
        certa: false,
        comentario:
          "Calma, capitão! A / só abre o menu de comandos. Não some com nada.",
      },
    ],
  },
  {
    kind: "ligue",
    instrucao: "Ligue cada comando / ao que ele faz na prática:",
    pares: [
      { esquerda: "/help", direita: "mostra tudo que existe" },
      { esquerda: "/deep-research", direita: "pesquisa pesada com fontes" },
      { esquerda: "/clear", direita: "limpa a memória da conversa" },
      { esquerda: "/model", direita: "troca o cérebro da IA" },
    ],
    sucesso:
      "Mandou bem! Quatro superpoderes no bolso. E o melhor: você nunca precisa decorar — é só digitar / e espiar o menu.",
  },
  {
    kind: "escolha",
    pergunta:
      "Você quer começar a explorar os comandos. Por qual deles começar?",
    opcoes: [
      {
        texto: "/help — porque ele lista o que existe DE VERDADE",
        certa: true,
        comentario:
          "Perfeito! O /help é a fonte da verdade. Começou perdido? Digita /help e ele te mostra o mapa inteiro.",
      },
      {
        texto: "O mais misterioso, pra parecer hacker",
        certa: false,
        comentario:
          "Ha! Deixa o mistério pra novela. Comece pelo /help — ele mostra o que realmente existe.",
      },
    ],
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Você pode criar a SUA própria skill",
    texto:
      "No fundo, uma skill é só um arquivinho de texto descrevendo o comportamento que você quer. O campo mais importante é a DESCRIÇÃO — é por ela que a IA decide sozinha quando usar a skill. Caprichou na descrição, ganhou o jogo.",
  },
  {
    kind: "mito",
    afirmacao:
      "Vi na internet um comando mágico tipo /godmode. Vou usar que deixa a IA mais poderosa!",
    ehVerdade: false,
    comentarioCerto:
      "Boa, capitão esperto! Esses comandos mágicos da internet quase sempre são invenção — não existem. Se não está no /help, desconfie.",
    comentarioErrado:
      "Cuidado! /godmode e parecidos são lenda da internet, não existem de verdade. A fonte confiável é só uma: o /help.",
  },
  {
    kind: "premio",
    emoji: "🗝️",
    titulo: "Você ganhou a Chave dos Atalhos!",
    texto:
      "Se você repete, vira skill. Digitou /, abriu o baú. Caprichou na descrição, a IA te obedece sozinha. Agora você não é só capitão — é capitão que delega. ⚓",
  },
];

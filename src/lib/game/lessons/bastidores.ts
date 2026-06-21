import { Step } from "../types";

// MODULO 7 - Os Bastidores (licao pratica, mao na massa)
// Desmistifica as palavras "assustadoras" indo ver elas no mundo real.
export const bastidores: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Bora aprender a gíria dos piratas 🏴‍☠️",
    texto:
      "Capitão, o mundo da IA tem umas palavras esquisitas que parecem grego. Spoiler: quase toda elas é uma ideia simples de terno e gravata. Hoje você não vai decorar nada: vai VER cada uma no mundo real e nunca mais se assustar.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "GitHub, repo, em português de gente",
    texto:
      "GitHub é um Google Drive gigante, só que pra guardar código. Cada projeto mora numa pasta com nome chique: REPOSITÓRIO, ou 'repo' pros íntimos. Ouviu 'tá no repo'? É só 'tá na pasta do projeto'. Vamos ver um de verdade agora.",
  },
  {
    kind: "experimento",
    titulo: "Experimento: visite um repo de verdade",
    missao: "Abra o navegador e vá em github.com/anthropics/claude-code. Esse é o repo do Claude Code. Dá uma olhada na cara dele, sem medo.",
    ondeFazer: "no navegador",
    pergunta: "O que você viu na página?",
    resultados: [
      {
        rotulo: "Um monte de arquivos e um texto explicando",
        reacao: "Isso mesmo! A lista são os arquivos do projeto, e aquele texto grandão embaixo (o README) é o manual. Viu? Repo é só uma pasta de projeto com manual junto.",
        ideal: true,
      },
      {
        rotulo: "Vi um número com uma estrelinha ⭐",
        reacao: "Ótimo olho! Essa estrela é o 'joinha' do GitHub. Quanto mais estrelas, mais gente confia. Mas calma, estrela sozinha engana, no próximo experimento te mostro a regra completa.",
        ideal: true,
      },
      {
        rotulo: "Achei confuso, muita coisa",
        reacao: "Normal no começo, capitão! Não precisa entender os arquivos. Só de saber 'isso é a pasta de um projeto, com manual', você já traduziu a palavra. Missão cumprida.",
      },
    ],
    fechamento: "Beleza, repo desmistificado →",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "A regra das 3 perguntas pra um repo",
    texto:
      "Pra saber se um projeto presta, não olhe só a estrela. Use 3 perguntas, igual escolher barco: 1) tem muitas estrelas (o povo recomenda)? 2) foi atualizado recente (ainda navega)? 3) tem manual (o README)? Passou nas três, é gente boa.",
  },
  {
    kind: "experimento",
    titulo: "Experimento: julgue um repo como capitão",
    missao: "Ainda naquele repo do Claude Code, ache as 3 coisas: o número de estrelas (no topo), a data do último 'commit' (tipo 'last week'), e o texto do README embaixo.",
    ondeFazer: "no navegador",
    pergunta: "Passou nas 3 perguntas?",
    resultados: [
      {
        rotulo: "Sim: muitas estrelas, recente e com manual",
        reacao: "Aprovado, capitão! Esse é um barco que navega. Agora você sabe avaliar qualquer projeto em 10 segundos, sem entender uma linha de código. Isso é olho de capitão.",
        ideal: true,
      },
      {
        rotulo: "Achei as estrelas mas me perdi no resto",
        reacao: "Tranquilo! Só de bater o olho na estrela e procurar a data você já faz melhor que muita gente. A prática vem rápido. O importante é saber as 3 perguntas.",
      },
    ],
    fechamento: "Aprendi a julgar um repo →",
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "A tela preta de filme de hacker",
    texto:
      "Aquela tela preta cheia de texto onde o pessoal digita? É o CLI, ou terminal. Parece coisa de hacker invadindo o Pentágono, mas é só conversar com o PC por texto: você escreve o que quer e dá Enter. Drama zero. E um AGENTE é uma IA que FAZ a tarefa, não só responde.",
  },
  {
    kind: "corrida",
    instrucao:
      "Swarm é uma frota de agentes trabalhando ao mesmo tempo. Largue a corrida: 1 barco sozinho (em fila) contra a frota (em paralelo). Veja quem chega primeiro.",
    tarefas: [
      "pesquisar o assunto",
      "escrever o rascunho",
      "conferir os erros",
      "formatar bonito",
    ],
    sucesso: "A frota chegou primeiro! Esse é o poder do swarm: várias IAs ao mesmo tempo.",
  },
  {
    kind: "vocab",
    termo: "Harness",
    significado: "É o 'arnês', o colete que você bota NA IA pra ela trabalhar do seu jeito, sozinha. O Prompt Mágico que você montou já foi o seu primeiro harness.",
    insider: "Quem fala 'harness' está na crista da onda. Você já montou um, então já é desse grupo.",
  },
  {
    kind: "vocab",
    termo: "Swarm",
    significado: "Uma FROTA de IAs (agentes) trabalhando juntas ao mesmo tempo, cada uma num pedaço. 'Enxame', em inglês. É o que você viu os barquinhos fazendo.",
    insider: "Termo de quem está na crista da onda da IA. Você agora fala essa língua.",
  },
  {
    kind: "premio",
    emoji: "🗝️",
    titulo: "Você ganhou o Decodificador!",
    texto:
      "Da próxima vez que alguém soltar 'swarm', 'repo' ou 'harness' numa conversa, você dá aquele sorriso de quem já sabe. Não decorou: você foi lá e VIU. E isso, capitão, é ganhar o jogo. ⚓",
  },
];

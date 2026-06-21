import { Step } from "../types";

// MÓDULO 7 — Os Bastidores (lição-jogo)
// Desmistifica as palavras "assustadoras". Não é pra decorar — é pra reconhecer.
export const bastidores: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Bora aprender a gíria dos piratas 🏴‍☠️",
    texto:
      "Capitão, o mundo da IA tem umas palavras esquisitas que parecem grego. Spoiler: quase toda elas é uma ideia simples de terno e gravata. Vou te entregar a tradução — e você NÃO precisa decorar nada, só reconhecer.",
  },
  {
    kind: "escolha",
    contexto: "Alguém solta na conversa: 'tá lá no GitHub'.",
    pergunta: "O que é o GitHub, em português de gente?",
    opcoes: [
      {
        texto: "Um Google Drive gigante, só que pra guardar código",
        certa: true,
        comentario:
          "Isso! É onde o código mora, guardadinho e com todas as versões antigas salvas. Se a casa cair, o projeto continua são e salvo.",
      },
      {
        texto: "Uma rede social de gatinhos programadores",
        certa: false,
        comentario:
          "Hahaha não, capitão. É um Google Drive gigante pra código. (O 'Hub' do nome não é de gatinho, juro.)",
      },
      {
        texto: "Um banco onde você guarda dinheiro digital",
        certa: false,
        comentario:
          "Quase a mesma ideia de 'guardar', mas o que ele guarda é código, não grana. Pensa: Drive gigante de projetos.",
      },
    ],
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "Duas palavras que andam juntas:",
    texto:
      "Dentro desse Drive gigante, cada projeto vive numa pasta. Essa pasta tem nome chique: REPOSITÓRIO, ou só 'repo' pros íntimos. Ouviu 'tá no repo'? É só 'tá na pasta do projeto'. Pronto, traduzido. ⚓",
  },
  {
    kind: "ligue",
    instrucao:
      "Liga cada palavra-chique do lado esquerdo com a tradução simples do lado direito:",
    pares: [
      { esquerda: "Repositório (repo)", direita: "Uma pasta de projeto" },
      { esquerda: "CLI / terminal", direita: "Conversar com o PC digitando" },
      { esquerda: "Agente", direita: "IA que FAZ a tarefa (não só responde)" },
      { esquerda: "Swarm (enxame)", direita: "Vários agentes = uma tripulação" },
    ],
    sucesso:
      "Mandou bem, capitão! Quatro palavras na ponta da língua. Você já fala 'piratês' melhor que muito programador.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "Aquela tela preta de filme de hacker:",
    texto:
      "Quando você vê alguém digitando numa tela preta cheia de texto — isso é o CLI (ou terminal). Parece coisa de hacker invadindo o Pentágono, mas no fundo é só conversar com o PC por texto: você escreve o que quer e dá Enter. Drama zero.",
  },
  {
    kind: "mito",
    afirmacao:
      "Pra saber se um projeto presta, basta olhar se ele tem MUITAS estrelas (o 'joinha').",
    ehVerdade: false,
    comentarioCerto:
      "Boa! Estrela é só UMA das pistas. A regra de bolso são TRÊS perguntas: tem muitas estrelas? foi atualizado recentemente? tem manual (documentação)? Passou nas três, é gente boa.",
    comentarioErrado:
      "Pegadinha! Estrela sozinha engana. Use a regra das 3 perguntas: 1) muitas estrelas? 2) atualizado recente? 3) tem manual? É igual escolher barco: vê se navegou recente, se o povo recomenda, e se veio com manual.",
  },
  {
    kind: "escolha",
    contexto: "Te falaram: 'monta um harness pra essa IA'.",
    pergunta: "O que é um 'harness'?",
    opcoes: [
      {
        texto: "O sistema que você monta em volta da IA pra ela trabalhar do seu jeito",
        certa: true,
        comentario:
          "Exato! Harness é 'arnês', o colete. O Prompt Mágico já é o seu primeiro harness: você prendeu a IA no colete certo e ela passou a trabalhar do seu jeito, sozinha.",
      },
      {
        texto: "Um tipo novo de IA mais cara",
        certa: false,
        comentario:
          "Nada disso! Não é uma IA — é o colete que você bota NA IA pra ela trabalhar do seu jeito. Você já montou um: o Prompt Mágico.",
      },
    ],
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "E os 'capatazes' do navio:",
    texto:
      "Ruflo e GSD são ferramentas que organizam enxames de agentes — os capatazes que põem a tripulação inteira pra trabalhar junto e em ordem. Você não precisa entender como funcionam por dentro. Ouviu o nome? Já sabe: 'ah, são os organizadores'.",
  },
  {
    kind: "swarm",
    instrucao:
      "Swarm é isto: vários agentes (a tripulação) fazendo pedaços diferentes ao mesmo tempo, organizados por um capataz.",
    tarefas: [
      "Agente 1: pesquisa o assunto",
      "Agente 2: escreve o rascunho",
      "Agente 3: confere os erros",
      "Agente 4: formata bonito",
    ],
    sucesso: "Agora 'swarm' não assusta mais",
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
      "Da próxima vez que alguém soltar 'swarm', 'repo' ou 'harness' numa conversa, você dá aquele sorriso de quem já sabe. Não decorou — reconheceu. E isso, capitão, é ganhar o jogo. ⚓",
  },
];

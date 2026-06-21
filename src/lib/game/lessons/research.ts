import { Step } from "../types";

// MÓDULO 6 — Pesquisa Profunda (lição-jogo)
// A IA deixa de ser um marinheiro no cais e vira uma tripulação inteira de pesquisa.
export const research: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Solta as amarras, capitão! ⚓",
    texto:
      "Até agora você fazia uma perguntinha e a IA respondia na hora, igual perguntar uma coisa pro marinheiro ali do cais. Hoje a gente vai mandar uma TRIPULAÇÃO INTEIRA pesquisar pra você.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "Pergunta pequena x pergunta grande",
    texto:
      "Pergunta do dia a dia (uma data, um nome)? Resposta rápida resolve. Mas pergunta GRANDE — tipo ‘quanto cobrar pelo passeio comparado aos concorrentes?’ — pede um modo mais pesado: a Pesquisa Profunda (Deep Research). Ela lê dezenas de fontes e volta com um relatório completo.",
  },
  {
    kind: "swarm",
    instrucao:
      "É isso que a Pesquisa Profunda faz por dentro: solta uma tripulação inteira, cada um numa fonte, ao mesmo tempo.",
    tarefas: [
      "Vasculha o preço dos concorrentes",
      "Lê as avaliações no Google",
      "Compara os roteiros e paradas",
      "Confere a reputação de cada um",
      "Junta tudo numa tabela",
    ],
    sucesso: "Pronto, relatório na mesa",
  },
  {
    kind: "mito",
    afirmacao:
      "Pra toda pergunta vale a pena ligar a Pesquisa Profunda e esperar o relatão.",
    ehVerdade: false,
    comentarioCerto:
      "Isso! Pra coisa rápida seria como mandar a tripulação toda só pra buscar um café. ☕ Use o canhão só pra alvo grande.",
    comentarioErrado:
      "É MITO! Só vale a tripulação inteira quando a DECISÃO depende dela — mercado, preço, regras. Pra perguntinha rápida, a resposta normal já serve.",
  },
  {
    kind: "escolha",
    contexto: "Você precisa decidir o preço dos seus passeios pra próxima temporada.",
    pergunta: "Qual situação MERECE a Pesquisa Profunda?",
    opcoes: [
      {
        texto: "Comparar preço, roteiro e reputação de todos os concorrentes da região",
        certa: true,
        comentario:
          "Perfeito! Decisão de dinheiro e estratégia = vale soltar a tripulação inteira no cais. 🚢",
      },
      {
        texto: "Saber que horas o sol se põe hoje",
        certa: false,
        comentario:
          "Essa é rapidinha, capitão! Pergunta normal responde na hora. Canhão pra matar mosquito, não. 🦟",
      },
      {
        texto: "Traduzir ‘bom dia’ pro inglês",
        certa: false,
        comentario: "Hahaha, pra isso até o papagaio aqui resolve. Pergunta direta basta!",
      },
    ],
  },
  {
    kind: "escolha",
    pergunta: "Como você LIGA a Pesquisa Profunda no Claude ou ChatGPT?",
    opcoes: [
      {
        texto: "Clico no botão ‘Deep Research’ — ou escrevo /deep-research no começo da mensagem",
        certa: true,
        comentario:
          "Isso aí! Botão ou ‘/deep-research’. Aí faz uma pergunta bem clara e pede pra citar as fontes. Pronto, ela pesquisa sozinha.",
      },
      {
        texto: "Tenho que instalar um programa difícil e saber programar",
        certa: false,
        comentario:
          "Que nada! É só um botão (ou um comando curtinho). Zero código, capitão. Você já sabe o essencial.",
      },
    ],
  },
  {
    kind: "mito",
    afirmacao:
      "A IA fala tudo com segurança, então o número que ela der já está conferido e certo.",
    ehVerdade: false,
    comentarioCerto:
      "Exato! Confiança não é prova. 🕵️ Por isso sempre diga ‘não invente números, cite as fontes’ — e VOCÊ abre pelo menos uma fonte pra conferir.",
    comentarioErrado:
      "Cuidado: é MITO! IA confiante também erra. Sempre peça ‘não invente números, cite as fontes’ e confira você mesmo pelo menos uma fonte. Esse é o pulo do gato.",
  },
  {
    kind: "tesouro",
    titulo: "Seu prompt pronto: mapear o mercado de barcos 🛥️",
    texto:
      "Copie isto, ligue a Pesquisa Profunda e troque o que estiver entre colchetes. Ele já pede a tabela, as fontes e o nível de confiança de cada dado. Guarde no bolso, capitão.",
    prompt: `Use Pesquisa Profunda (Deep Research).

Objetivo: me ajudar a decidir o preço e o roteiro dos meus passeios de barco em [MINHA REGIÃO], comparando com os concorrentes.

Faça um estudo do mercado de passeios e charter de barco na minha área. Compare os concorrentes nestes pontos:
- preço do passeio;
- roteiros e paradas;
- tamanho dos grupos;
- o que os turistas mais gostam;
- reputação (avaliações recentes).

Me entregue no final:
- uma TABELA comparativa dos concorrentes;
- os pontos onde eu posso me destacar;
- uma recomendação simples do que mudar primeiro;
- a FONTE de cada informação e o nível de confiança (alta/média/baixa).

Regra importante: NÃO invente números (preço, receita, quantidade). Se não tiver certeza, diga que não tem certeza e mostre de onde tirou cada dado.`,
  },
  {
    kind: "praticar",
    titulo: "Rode uma Pesquisa Profunda de verdade",
    intro:
      "Vamos mapear seus concorrentes — decisão de dinheiro merece o canhão.",
    passos: [
      "No ChatGPT ou Claude, ligue o 'Deep Research' (botão) ou escreva /deep-research.",
      "Cole o prompt do tesouro acima e troque [MINHA REGIÃO] pela sua.",
      "Mande e espere — ela lê dezenas de fontes (leva uns minutos).",
      "Abra pelo menos UMA fonte que ela citar pra conferir. Confiança não é prova.",
    ],
    fechamento: "Relatório do mercado na mão — com fontes. Decisão de capitão.",
  },
  {
    kind: "vocab",
    termo: "Alucinação",
    significado: "É quando a IA inventa um dado com cara de verdade absoluta. Não é mentira de propósito — ela só 'chuta com confiança'. Por isso a gente confere as fontes.",
    insider: "Saber essa palavra é saber o maior risco da IA. Pouquíssima gente da sua idade sabe.",
  },
  {
    kind: "premio",
    emoji: "🔍",
    titulo: "Você ganhou a Luneta de Pesquisa!",
    texto:
      "Agora você sabe quando soltar a tripulação inteira — e que IA confiante também erra, então sempre confere as fontes. Bom proveito, capitão. ⚓",
  },
];

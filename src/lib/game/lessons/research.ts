import { Step } from "../types";

// MÓDULO 6 - Pesquisa Profunda (lição prática, mão na massa)
// A IA deixa de ser o marinheiro do cais e vira uma tripulação inteira de pesquisa.
export const research: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Hoje a tripulação inteira vai pesquisar 🔍",
    texto:
      "Sem teoria, capitão. Você vai abrir uma IA e ligar um modo especial: a Pesquisa Profunda. Em vez de chutar na hora, ela lê dezenas de fontes de verdade e volta com um relatório, com os links de onde tirou cada coisa. Bora provar isso fazendo.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 1: a pergunta grande sem o modo certo",
    missao:
      "Abra uma IA e faça esta pergunta grande do jeitinho normal, sem ligar nenhum modo especial. Veja o que volta.",
    ondeFazer: "no ChatGPT, Claude ou Gemini",
    prompt:
      "Quais são as 5 melhores práticas de marketing pra charter de barcos de luxo no Brasil em 2026?",
    pergunta: "E aí, o que a IA te respondeu?",
    resultados: [
      {
        rotulo: "Veio rápido, mas sem dizer de onde tirou",
        reacao:
          "Exato! No modo normal ela responde de cabeça, na base do palpite. Pode até soar bem, mas você não tem como conferir nada. Pra decisão de dinheiro, isso é pouco. Agora liga o canhão.",
        ideal: true,
      },
      {
        rotulo: "Veio uma lista bonita e segura",
        reacao:
          "Cuidado com a beleza, capitão. Confiança não é prova. Sem fontes, é só um chute bem escrito. No próximo passo você vai sentir a diferença de verdade.",
      },
      {
        rotulo: "Ela perguntou mais detalhes antes",
        reacao:
          "Ótimo sinal! Já mostra que a pergunta é grande. Pergunta grande pede o modo pesado, que é justamente o que a gente vai ligar agora.",
      },
    ],
    fechamento: "Guardei. Agora o canhão de verdade →",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "Pergunta pequena x pergunta grande 🧭",
    texto:
      "Perguntinha do dia a dia (uma data, um nome, uma tradução)? Resposta rápida resolve, e mandar a tripulação inteira seria como soltar a frota só pra buscar um café. Mas pergunta GRANDE, tipo quanto cobrar comparado aos concorrentes, pede a Pesquisa Profunda: ela lê dezenas de fontes e volta com tudo citado.",
  },
  {
    kind: "swarm",
    instrucao:
      "É isto que a Pesquisa Profunda faz por dentro quando você liga: solta uma tripulação inteira, cada marinheiro numa fonte, ao mesmo tempo.",
    tarefas: [
      "Vasculha o preço dos concorrentes",
      "Lê as avaliações no Google",
      "Compara os roteiros e as paradas",
      "Confere a reputação de cada um",
      "Junta tudo numa tabela com os links",
    ],
    sucesso: "Pronto, relatório na mesa, com fontes.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 2: liga a Pesquisa Profunda",
    missao:
      "Na mesma IA, ligue o botão 'Deep Research' (Pesquisa Profunda), ou escreva /deep-research no começo, e mande de novo a mesma pergunta do mercado de charter. Espere: ela vai demorar uns minutos, porque está lendo de verdade.",
    ondeFazer: "na mesma IA, agora com o modo ligado",
    prompt:
      "Pesquise as 5 melhores práticas de marketing pra charter de barcos de luxo no Brasil em 2026. Use fontes reais e recentes e cite o link de cada uma. Não invente nada.",
    pergunta: "Como ficou diferente do primeiro?",
    resultados: [
      {
        rotulo: "Demorou mais, mas veio com links que eu pude conferir",
        reacao:
          "É ISSO, capitão! Sentiu? Ela parou, foi ler dezenas de páginas e voltou mostrando de onde tirou cada coisa. Demorou de propósito: trabalho sério leva tempo. Esse relatório você pode defender numa reunião.",
        ideal: true,
      },
      {
        rotulo: "Veio um relatório bem mais completo",
        reacao:
          "Pois é! Mesma IA, mesma pergunta. O que mudou foi você ter ligado o modo certo. Pergunta grande, ferramenta grande. Esse é o pulo do gato do módulo.",
        ideal: true,
      },
      {
        rotulo: "Não achei o botão de Pesquisa Profunda",
        reacao:
          "Sem stress. Costuma ficar perto da caixa de mensagem (às vezes num menu de '+' ou 'ferramentas'), ou você escreve /deep-research no começo. Acha ele e roda de novo: vale muito a pena ver a diferença.",
      },
    ],
    fechamento: "Vi a diferença com meus olhos →",
  },
  {
    kind: "vocab",
    termo: "Alucinação",
    significado:
      "É quando a IA inventa um dado com cara de verdade absoluta. Não é mentira de propósito, ela só chuta com confiança. Por isso a gente sempre confere as fontes.",
    insider:
      "Saber essa palavra é saber o maior risco da IA. Pouquíssima gente da sua idade sabe disso.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 3: o detetive confere a fonte",
    missao:
      "Volte no relatório do experimento 2 e escolha UMA fonte que ela citou. Clique no link (ou copie e cole no navegador) e veja se a página existe mesmo e fala daquilo. Você é o detetive agora.",
    ondeFazer: "no relatório que você acabou de gerar",
    pergunta: "E aí, detetive, o que você achou ao abrir a fonte?",
    resultados: [
      {
        rotulo: "Abri o link e a página existe e bate com o que ela disse",
        reacao:
          "BRAVO, capitão! Isso é o que separa quem usa IA de qualquer jeito de quem usa IA com cabeça. Você não acreditou na palavra dela, você CONFERIU. Pode confiar nesse dado.",
        ideal: true,
      },
      {
        rotulo: "Abri e a página não falava bem daquilo (ou nem abriu)",
        reacao:
          "PEGOU UMA! Viu como é importante conferir? Esse é o risco que a gente chamou de alucinação. Agora é só pedir: 'esse link não confere, me dê outra fonte real pra esse dado'. Você está no comando.",
        ideal: true,
      },
      {
        rotulo: "Ela não tinha posto link nenhum",
        reacao:
          "Então faltou a parte mais importante! Responda na mesma conversa: 'cite a fonte (com link) de cada afirmação e não invente'. Relatório sem fonte é só opinião bonita.",
      },
    ],
    fechamento: "Agora eu confiro, não engulo →",
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "A regra de ouro da pesquisa 💎",
    texto:
      "Sempre que pedir pesquisa séria, diga três coisas: 1) 'use fontes reais e recentes', 2) 'cite o link de cada uma', 3) 'não invente números, se não tiver certeza, avise'. E você, capitão, abre pelo menos uma fonte pra conferir. Confiança não é prova.",
  },
  {
    kind: "tesouro",
    titulo: "Seu prompt pronto: mapear o mercado de barcos 🛥️",
    texto:
      "Ligue a Pesquisa Profunda, cole isto e troque o que está entre colchetes. Ele já pede a tabela, os links e o nível de confiança de cada dado. Guarde no bolso, capitão.",
    prompt: `Use Pesquisa Profunda (Deep Research).

Objetivo: me ajudar a decidir o preco e o roteiro dos meus passeios de barco em [MINHA REGIAO], comparando com os concorrentes.

Faca um estudo do mercado de passeios e charter de barco na minha area. Compare os concorrentes nestes pontos:
- preco do passeio;
- roteiros e paradas;
- tamanho dos grupos;
- o que os turistas mais gostam;
- reputacao (avaliacoes recentes).

Me entregue no final:
- uma TABELA comparativa dos concorrentes;
- os pontos onde eu posso me destacar;
- uma recomendacao simples do que mudar primeiro;
- a FONTE (com link) de cada informacao e o nivel de confianca (alta, media ou baixa).

Regra importante: use fontes reais e recentes e NAO invente numeros. Se nao tiver certeza, diga que nao tem certeza e mostre de onde tirou cada dado.`,
  },
  {
    kind: "experimento",
    titulo: "Missão final: uma pesquisa de verdade, hoje",
    missao:
      "Pense numa decisão real que você precisa tomar no charter (preço, um barco novo, um novo roteiro). Ligue a Pesquisa Profunda, use o tesouro acima com a sua situação real, rode, e confira UMA fonte. Não é treino: é trabalho de capitão.",
    ondeFazer: "na sua IA, com a Pesquisa Profunda ligada",
    pergunta: "Saiu um relatório que te ajuda a decidir?",
    resultados: [
      {
        rotulo: "Saiu, e já conferi uma fonte!",
        reacao:
          "ISSO, capitão! Você acabou de mandar uma tripulação inteira pesquisar e ainda conferiu o trabalho dela. Decisão de capitão é assim: dados na mão e fontes conferidas. Orgulho de você. ⚓",
        ideal: true,
      },
      {
        rotulo: "Saiu, mas ainda vou refinar a pergunta",
        reacao:
          "Perfeito. Refinar é parte do jogo: 'foca só no Rio', 'compara só barcos pequenos', 'me dá mais fontes'. Ela pesquisa de novo. Você nunca fica preso na primeira versão.",
        ideal: true,
      },
    ],
    fechamento: "Feito! Pesquisa de capitão ⚓",
  },
  {
    kind: "premio",
    emoji: "🔍",
    titulo: "Você ganhou a Luneta de Pesquisa!",
    texto:
      "Você não decorou nada: você FEZ. Rodou uma pergunta no modo normal, ligou a Pesquisa Profunda, viu a diferença e conferiu as fontes como um detetive. Agora você decide com dados de verdade, não com palpite. Bom proveito, capitão. ⚓",
  },
];

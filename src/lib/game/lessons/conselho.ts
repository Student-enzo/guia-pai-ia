import { Step } from "../types";

// BONUS - O Conselho de Especialistas (nugget de mestre, mao na massa)
export const conselho: Step[] = [
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "Nugget de mestre, capitão 🎩",
    texto:
      "Esse aqui é avançado, guarde pra quando crescer. Tem um segredo sobre a IA que quase ninguém te conta, e ele muda como você toma decisões grandes no negócio. Hoje você vai SENTIR ele na pele.",
  },
  {
    kind: "experimento",
    titulo: "Experimento: pegue a IA puxando seu saco",
    missao: "Abra uma IA e mande uma ideia sua meio duvidosa de propósito, perguntando se é boa. Tipo: 'Quero gastar todo meu caixa em um barco novo agora. Boa ideia, né?'",
    ondeFazer: "no ChatGPT, Claude ou Gemini",
    prompt: "Quero gastar todo o meu caixa num barco novo agora, mesmo na baixa temporada. É uma boa ideia, né?",
    pergunta: "Como a IA reagiu?",
    resultados: [
      {
        rotulo: "Ela meio que concordou comigo",
        reacao: "PEGOU ela no flagra! Viu como ela puxou seu saco? Você já entregou que queria ouvir 'sim', e ela te deu o 'sim'. Pra decisão grande isso é um vazamento no casco. A solução vem agora.",
        ideal: true,
      },
      {
        rotulo: "Ela deu uns poréns, mas foi mansa",
        reacao: "Reparou que ela amaciou? Mesmo com ressalvas, ela tende a te agradar porque você já mostrou pra que lado quer ir. Imagina numa decisão de verdade. Bora consertar isso.",
        ideal: true,
      },
    ],
    fechamento: "Entendi o problema. Qual a solução? →",
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "A solução é um CONSELHO",
    texto:
      "Toda IA é treinada pra te agradar. A solução não é um prompt mágico: é montar um CONSELHO de especialistas reais, uma diretoria que debate entre si e te QUESTIONA antes de você decidir. Tipo chamar os capitães mais experientes do porto pra discutir a rota antes de zarpar.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "A ordem de ouro do Conselho",
    texto:
      "Passo 1: jogue o contexto cru, SEM dizer pra que lado você pende (se entregar sua opinião, contamina tudo). Passo 2: monte o conselho de gente real, com trabalho rastreável. Passo 3: eles criam 3 planos bons e 3 não-go, e DISCORDAM entre si. Passo 4: só no fim entra a sua experiência. Passo 5: você sai com um caminho sem viés.",
  },
  {
    kind: "simulador",
    titulo: "O Conselho debatendo 🎩",
    instrucao: "Toque pra ver o conselho discutir a sua decisão sem concordar fácil.",
    pedidos: [
      {
        rotulo: "devo comprar um segundo barco pra dobrar os passeios?",
        etiqueta: "decisão grande",
        bom: true,
        resposta:
          "🎩 Conselheiro do Crescimento: dobra a frota, dobra a receita, vai fundo.\n⚓ Conselheiro do Risco: e se a temporada for fraca? Dois barcos parados afundam o caixa.\n📊 Conselheira dos Números: qual sua taxa de ocupação hoje? Abaixo de 70%, é cedo demais.\n\nNão concordamos, de propósito. Qual desses pontos você ainda não tinha pensado?",
      },
    ],
    sucesso: "Sentiu o atrito? Isso é ouro. Espelho que concorda não serve.",
  },
  {
    kind: "experimento",
    titulo: "Missão: rode o Conselho na sua decisão de verdade",
    missao: "Pense numa decisão real que está te tirando o sono. Copie o prompt do Conselho abaixo, cole numa IA, e troque os colchetes pela sua situação. Deixe ela te entrevistar antes de qualquer plano.",
    ondeFazer: "na sua IA",
    prompt: `Você é meu copiloto de decisão. Conduza nesta ordem, um passo de cada vez. Não adiante.

PASSO 1 - CONTEXTO (só contexto):
Meu objetivo: [DESCREVA O RESULTADO EXATO QUE VOCÊ QUER].
Me faça perguntas pra coletar o contexto. Não me deixe colocar minha opinião nem pra que lado pendo. Pare antes de perguntar o que eu acho.

PASSO 2 - CONSELHO DE ESPECIALISTAS REAIS:
Monte um conselho de especialistas reais na área (ou me sugira quem). Use o trabalho real e rastreável deles, com citações. Nunca Wikipedia ou Reddit.

PASSO 3 - OS PLANOS:
Pelo menos 3 membros debatem e DISCORDAM, com os Seis Chapéus. Rode um red team. Entregue 3 planos bons e 3 não-go. Eu escolho 1.

PASSO 4 - MINHA EXPERIÊNCIA:
Eu pico o plano com minha experiência. Você manda o conselho revisar e refina.

PASSO 5 - RESULTADO:
Me entregue um caminho forte e sem viés.`,
    pergunta: "O que o Conselho fez de diferente?",
    resultados: [
      {
        rotulo: "Me fez perguntas e não puxou meu saco",
        reacao: "ISSO, capitão! Sentiu a diferença? Em vez de concordar, ela cavou o contexto e se preparou pra te dar a verdade. Esse é o método que separa decisão de capitão de decisão no chute.",
        ideal: true,
      },
      {
        rotulo: "O conselho discordou entre si",
        reacao: "PERFEITO! O atrito é o ouro. Quando os especialistas discordam, aparecem os pontos cegos que você sozinho nunca veria. Foi exatamente pra isso que você montou o conselho.",
        ideal: true,
      },
      {
        rotulo: "Saiu meio bagunçado, vou refinar",
        reacao: "Tranquilo! É só dizer 'volte pro passo 1' ou 'só contexto por enquanto'. Você conduz o conselho. Quanto mais você usa, mais afiado fica.",
      },
    ],
    fechamento: "Convoquei meu Conselho ⚓",
  },
  {
    kind: "tesouro",
    titulo: "🎩 O Prompt do Conselho de Especialistas",
    texto:
      "Guarde o prompt completo no baú. Da próxima decisão grande, é só puxar daqui, preencher e colar. Esse é o nugget de mestre.",
    prompt: `Você é meu copiloto de decisão. Conduza nesta ordem, um passo de cada vez. Não adiante.

PASSO 1 - CONTEXTO (só contexto):
Meu objetivo: [DESCREVA O RESULTADO EXATO QUE VOCÊ QUER].
Me faça perguntas pra coletar o contexto da minha situação.
Não faça perguntas enviesadas que me deixem colocar minha opinião, crença ou estratégia.
Seja tão específico que revele contextos que eu nem percebi, coisas que escondo de mim mesmo por ego, drama ou medo de falhar.
PARE antes de perguntar o que eu acho. Esta fase é só contexto.

PASSO 2 - CONSELHO DE ESPECIALISTAS REAIS:
Monte um conselho de especialistas reais na área do meu contexto (ou me sugira quem).
Pesquise o trabalho real, factual e rastreável dessas pessoas e aja com base nas ações reais delas, não no que você acha que diriam. Se a decisão for importante, traga citações pra eu conferir.
NUNCA use Wikipedia, Reddit ou sites duvidosos. Só material oficial.

PASSO 3 - OS PLANOS:
Pelo menos 3 membros do conselho debatem e DISCORDAM entre si, nos princípios, usando os Seis Chapéus do Pensamento e jogando cenários.
Rode um red team em todos os planos. Entregue 3 planos bons e 3 não-go (com o que pode dar errado em cada não-go). Eu escolho 1 dos 3 melhores.

PASSO 4 - MINHA EXPERIÊNCIA:
Eu entro com minha experiência real, pico o plano (o que gosto, o que não gosto, bem descritivo). Você manda o conselho rodar o mesmo sistema de revisão e refina.

PASSO 5 - RESULTADO:
Me entregue um caminho forte e sem viés.`,
  },
  {
    kind: "premio",
    emoji: "🏆",
    titulo: "Você desbloqueou o Conselho!",
    texto:
      "Nugget de mestre no bolso, capitão. Da próxima decisão grande, um preço novo, contratar alguém, um investimento, não pergunte pra IA: convoque o Conselho. A verdade vale mais que o elogio.",
  },
];

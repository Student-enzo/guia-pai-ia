import { Step } from "../types";

// MÓDULO 5 - MCPs & Connectors (lição prática, mão na massa)
export const mcps: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Hoje a IA sai do quarto 🚪",
    texto:
      "Até agora sua IA só conversava, capitão. Era um imediato genial trancado num quarto sem janela: sabia de tudo, mas não tocava em nada seu. Hoje a gente abre a porta. Você vai plugar um cabo de verdade e deixar a IA olhar suas coisas reais. Pega um café e bora.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "O cabo tem um nome chique 🔌",
    texto:
      "Esse cabo se chama 'connector' (ou MCP, a versão de gente nerd). É o plugue que liga a IA nas suas ferramentas: Gmail, Google Calendar, Drive. A galera chama de 'USB-C da IA': um encaixe só que serve pra tudo. Plugou, e ela passa a FAZER coisas, não só falar.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 1: ache o cabo",
    missao:
      "Abra sua IA e procure perto da caixa de escrever um ícone de '+', uma chave de configurações, ou a palavra 'Connectors'. Não precisa ligar nada ainda. Só ache onde mora.",
    ondeFazer: "no ChatGPT, Claude ou Gemini",
    pergunta: "Conseguiu encontrar a área de Connectors?",
    resultados: [
      {
        rotulo: "Achei! Vi a lista de apps pra ligar",
        reacao:
          "É isso, capitão! Esse é o painel de cabos do seu barco. Cada item ali (Gmail, Calendar, Drive) é um plugue esperando. Você acabou de achar a sala de máquinas.",
        ideal: true,
      },
      {
        rotulo: "Achei algo parecido, mas não tenho certeza",
        reacao:
          "Tranquilo. Procure por um '+' ou um ícone de tomada perto de onde você digita. Os nomes mudam um pouquinho de app pra app, mas a ideia é sempre a mesma: é ali que se ligam as ferramentas.",
      },
      {
        rotulo: "Não achei essa opção no meu app",
        reacao:
          "Sem crise. Nem todo app tem connectors ainda, e em alguns só aparece na versão paga. O importante é você saber que isso existe. Quando aparecer, você já vai saber o que é.",
      },
    ],
    fechamento: "Achei a sala de máquinas →",
  },
  {
    kind: "vocab",
    termo: "Connector",
    significado:
      "O cabo de 1 clique que liga a IA num app seu (Gmail, Calendar, Drive). MCP é o nome técnico do mesmo cabo. Mesma coisa, nome diferente.",
    insider:
      "Quando alguém soltar 'MCP' na sua frente achando que vai te assustar, você traduz numa palavra: cabo. 😎",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "A regra de ouro antes de plugar ⚓",
    texto:
      "Atenção, capitão, isto vale ouro: SEMPRE comece em 'somente leitura'. Nessa opção a IA só OLHA, não envia, não apaga, não mexe. Marinheiro novo primeiro observa o mar, depois assume o leme. Quase todo perrengue acontece quando alguém libera tudo no dia um. Você não vai cair nessa.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 2: ligue o Calendar (só leitura)",
    missao:
      "Na área de Connectors, ligue o Google Calendar. Na hora de autorizar, escolha a opção de SOMENTE LEITURA se ela aparecer. Depois pergunte: 'tenho alguma janela livre de 2 horas essa semana?'",
    ondeFazer: "no Claude.ai ou ChatGPT",
    prompt: "Olhando minha agenda, tenho alguma janela livre de 2 horas essa semana? Só me mostre, não marque nada.",
    pergunta: "E aí, o que aconteceu?",
    resultados: [
      {
        rotulo: "Ativei e funcionou! Ela leu minha agenda",
        reacao:
          "UAU, sentiu o clique? Pela primeira vez a IA olhou pra SUA vida real e respondeu com os SEUS horários. Isso não é mais conversa: é a IA trabalhando com as suas coisas. E olha que linda: ela só leu, não marcou nada. Exatamente como manda o capitão.",
        ideal: true,
      },
      {
        rotulo: "Não achei a opção de ligar o Calendar",
        reacao:
          "Calma, isso é comum. Em alguns apps o Calendar só aparece na versão paga, ou está num menu de 'configurações'. Anota como missão: da próxima vez que abrir, procura de novo. Você já sabe o que procurar, e isso é metade do caminho.",
      },
      {
        rotulo: "Vou ativar depois, com calma",
        reacao:
          "Decisão de capitão prudente, e eu aplaudo. Ligar connector mexe com seus dados, então fazer com calma é o certo. Quando ligar, lembra: comece em somente leitura. O cabo fica aqui te esperando.",
      },
    ],
    fechamento: "A IA olhou minha agenda →",
  },
  {
    kind: "simulador",
    titulo: "Agora imagina com o Gmail 📧",
    instrucao:
      "Mesma ideia, outro cabo. Com o Gmail ligado em só leitura, a IA OLHA seus emails. Toque no pedido e veja o que ela faz.",
    pedidos: [
      {
        rotulo: "tem algum email de hóspede sobre o passeio de sábado?",
        etiqueta: "ela vai buscar",
        bom: true,
        resposta:
          "Achei 2 emails sobre sábado:\n• James (10h): pergunta se pode levar as crianças 👨‍👩‍👧\n• Marina (ontem): quer remarcar por causa do vento\n\nQuer que eu rascunhe uma resposta pra cada? (Eu só LEIO. Não envio nada sem você mandar.)",
      },
    ],
    sucesso:
      "Viu o padrão? Calendar, Gmail, Drive: cabos diferentes, mesma jogada. Plugou, ela passa a trabalhar com as suas coisas, sempre olhando primeiro.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 3: peça pra ela NÃO agir",
    missao:
      "Esse é o experimento mais importante de todos. Com qualquer connector ligado, peça algo e termine com a frase mágica: 'mas só me mostre, não faça nada ainda'. Veja se ela respeita o freio.",
    ondeFazer: "na IA com um connector ligado",
    prompt: "Liste os emails sem resposta dos últimos 3 dias. Só me mostre a lista, não responda nem apague nada ainda.",
    pergunta: "Ela respeitou o freio?",
    resultados: [
      {
        rotulo: "Sim! Só mostrou, não tocou em nada",
        reacao:
          "PERFEITO, capitão. Você acabou de aprender o comando mais valioso de todos: 'só me mostre, não faça nada ainda'. Com essa frase no bolso, você pluga qualquer cabo sem medo. Você está no leme, ela só rema.",
        ideal: true,
      },
      {
        rotulo: "Ela quis logo responder os emails",
        reacao:
          "Olha que importante isso aconteceu agora e não num dia corrido! É por isso que a gente começa em somente leitura: aí ela NÃO CONSEGUE agir mesmo querendo. Sempre confira antes de soltar o leme. Você no comando, sempre.",
      },
    ],
    fechamento: "Aprendi a frase do freio →",
  },
  {
    kind: "praticar",
    titulo: "Seu checklist de capitão pra plugar qualquer cabo",
    intro:
      "Guarde esta sequência. Serve pra Gmail, Calendar, Drive, qualquer connector que aparecer na sua frente, hoje ou daqui a um ano.",
    passos: [
      "Ache a área de Connectors (o '+' ou a tomada perto de onde você escreve).",
      "Escolha o app e ligue na opção de SOMENTE LEITURA.",
      "Peça algo simples e termine com 'só me mostre, não faça nada ainda'.",
      "Confira o que ela trouxe. Só depois de confiar, considere liberar mais.",
    ],
    prompt: "Olhe meus dados e me dê um resumo do que encontrou. Só me mostre, não envie, não apague e não marque nada ainda.",
    fechamento:
      "Esse é o jeito seguro de morar com a IA conectada. Observa, confere, depois assume o leme.",
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Um cabo, todas as tomadas 🔌",
    texto:
      "O melhor de tudo: o que você aprendeu hoje vale igualzinho em qualquer IA. O cabo do Claude funciona igual no ChatGPT e no Gemini. Aprendeu uma vez, vale pra todas. Igual saber dar nó de marinheiro: serve em qualquer barco.",
  },
  {
    kind: "tesouro",
    titulo: "Tesouro: o pedido seguro pra estrear qualquer connector",
    texto:
      "Cole isto na primeira vez que ligar um cabo novo. Ele já avisa a IA pra ficar no modo observador. Troque o [APP] pelo que você ligou.",
    prompt:
      "Acabei de te conectar ao meu [APP] (Gmail, Calendar ou Drive).\nPor enquanto, voce esta em modo SOMENTE LEITURA: so olha, nao envia, nao apaga, nao marca, nao altera nada.\n\nFaca o seguinte:\n1. Me diga, em uma frase, o que voce consegue ver ai dentro.\n2. Me traga um resumo curto do que tem de mais importante.\n\nNao tome nenhuma acao. Eu confiro tudo antes de qualquer passo.",
  },
  {
    kind: "experimento",
    titulo: "Missão final: um cabo de verdade, hoje",
    missao:
      "Escolha UM connector pra ligar de verdade agora (Calendar é o mais fácil e seguro pra começar). Ligue em só leitura, use o tesouro acima, e veja a IA olhar uma coisa real da sua vida. Não é treino: é o primeiro cabo do seu barco.",
    ondeFazer: "na sua IA preferida",
    pergunta: "Conseguiu ligar um cabo e ver algo seu?",
    resultados: [
      {
        rotulo: "Liguei! A IA olhou minha vida real",
        reacao:
          "ISSO, CAPITÃO! Esse é um marco. Hoje sua IA deixou de ser só uma conversa e virou uma ajudante que enxerga as suas coisas. E você fez do jeito certo: cabo plugado, modo observador, você no comando. Orgulho de bordo. ⚓",
        ideal: true,
      },
      {
        rotulo: "Liguei, mas ainda estou cismado",
        reacao:
          "Cisma saudável é coisa de bom capitão. Fica em só leitura o tempo que quiser, dias ou semanas. A IA não vai além do que você permitir. Confiança se constrói devagar, igual amizade de porto.",
        ideal: true,
      },
      {
        rotulo: "Vou ligar com mais calma outro dia",
        reacao:
          "Sem problema nenhum. O importante é que agora você SABE como faz e por que começa em só leitura. O conhecimento já é seu. O cabo espera o tempo que você precisar.",
      },
    ],
    fechamento: "Feito! Plugado e no comando →",
  },
  {
    kind: "premio",
    emoji: "🔌",
    titulo: "Você ganhou o Cabo Universal!",
    texto:
      "Você não decorou teoria: você plugou. Achou a sala de máquinas, ligou um cabo em só leitura, e aprendeu a frase do freio. Agora sua IA não só conversa, ela trabalha com as suas coisas, sempre sob o seu comando. Bora pro próximo porto, capitão.",
  },
];

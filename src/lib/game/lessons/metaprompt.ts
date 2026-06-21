import { Step } from "../types";

// MODULO 2 (A IA te ajuda a pedir): meta-prompting, licao pratica
export const metaprompt: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "O segredo dos preguiçosos espertos 🎩",
    texto:
      "Capitão, e se você nunca mais precisasse escrever o pedido perfeito? A sacada de hoje é simples: jogue a sua ideia torta na IA e mande ela transformar isso num pedido bem feito. A IA escreve o pedido pra você. Bora provar na prática, sem teoria.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 1: jogue a ideia torta",
    missao:
      "Abra uma IA e cole este pedido bagunçado, do jeitinho que sairia da sua cabeça. Não tente arrumar nada. Só mande e veja o que volta.",
    ondeFazer: "no ChatGPT, Claude ou Gemini",
    prompt:
      "preciso falar com um cliente chato que reclamou do passeio mas quero manter ele. transforme isso num pedido bem feito pra escrever a mensagem e me mostre o pedido antes de fazer.",
    pergunta: "E aí, o que a IA te devolveu?",
    resultados: [
      {
        rotulo: "Ela me devolveu um pedido bonito e organizado",
        reacao:
          "É ISSO, capitão! Você falou torto e ela devolveu redondo. Reparou que ela transformou 'cliente chato' num pedido com tom, objetivo e cuidado? Esse pedido pronto é ouro: agora é só mandar ela executar.",
        ideal: true,
      },
      {
        rotulo: "Ela já saiu escrevendo a mensagem direto",
        reacao:
          "Acontece. Aí é só insistir: 'espera, me mostra primeiro o PEDIDO bem feito, não a mensagem'. Você está no comando do barco. A graça é ver o pedido nascer antes da resposta.",
      },
      {
        rotulo: "Ela me fez perguntas antes",
        reacao:
          "Olha que esperto! Quando a ideia está torta demais, a IA cava o contexto antes. Isso é ótimo: responda as perguntas e o pedido que ela monta fica ainda mais afiado.",
      },
    ],
    fechamento: "Vi a mágica acontecer →",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "A frase mágica 🪄",
    texto:
      "Guarde esta frase no bolso do colete: 'transforme isso num pedido bem feito e me mostre antes de fazer'. Cole sua ideia solta, diga isso, e a IA arruma a casa por você. Trabalho difícil é dela, capitão.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 2: deixa ela te mostrar o plano antes",
    missao:
      "Agora mande este pedido. A diferença: você pede pra IA mostrar COMO entendeu e perguntar se pode seguir, antes de executar. É como confirmar a rota antes de soltar a âncora.",
    ondeFazer: "na mesma IA",
    prompt:
      "quero criar uma promoção de passeio de barco pro feriado mas não sei bem o que oferecer. transforme isso num pedido bem feito, me mostre como você entendeu e me pergunte se pode seguir antes de escrever qualquer coisa.",
    pergunta: "O que ela fez antes de executar?",
    resultados: [
      {
        rotulo: "Ela resumiu o plano e perguntou se podia seguir",
        reacao:
          "PERFEITO! Esse é o truque dos profissionais. Você viu a rota ANTES, e se ela tivesse entendido errado, você corrigia ali, de graça. Confirmar antes economiza um monte de retrabalho.",
        ideal: true,
      },
      {
        rotulo: "Ela montou o pedido mas já foi escrevendo junto",
        reacao:
          "Sem crise. É só responder 'para, só me mostra o plano e espera meu ok'. Você manda no leme. Pedir o plano antes é o que separa o amador do capitão.",
      },
    ],
    fechamento: "Confirmei a rota antes de zarpar →",
  },
  {
    kind: "transforma",
    instrucao:
      "Veja na prática: ligue os ingredientes e o pedido fraco vira forte ao vivo. Depois envie e compare as respostas.",
    base: "Escreve um post pro Instagram do barco.",
    ingredientes: [
      { etiqueta: "+ Papel", texto: "Você é meu social media." },
      { etiqueta: "+ Detalhe", texto: "Sobre o passeio ao pôr do sol de sábado." },
      { etiqueta: "+ Tom", texto: "Animado e caloroso, com 1 emoji." },
      { etiqueta: "+ Formato", texto: "Curto, com uma chamada pra reservar." },
    ],
    respostaFraca: "Venha passear de barco. Reserve já.",
    respostaForte:
      "🌅 Sábado tem magia no mar: passeio ao pôr do sol, brisa leve e o céu pegando fogo de laranja. Poucas vagas, chama no direct e garanta a sua antes que zarpe! ⛵",
    sucesso:
      "Sentiu? Cada ingrediente deixou o pedido mais forte. E o melhor: você nem precisa montar isso na mão, é só pedir pra IA fazer pra você.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 3: mande a IA fazer o pedido difícil",
    missao:
      "Esse é o pulo do gato. Em vez de você montar os 4 blocos (papel, tarefa, contexto, formato), peça pra IA montar pra você. Cole este pedido e veja ela trabalhar no seu lugar.",
    ondeFazer: "na sua IA",
    prompt:
      "quero um pedido bem feito pra você criar um email de desculpas pro cliente João, que esperou 30 minutos no píer porque o barco atrasou. monte esse pedido pra mim com papel, tarefa, contexto e formato bem definidos, me mostre o pedido pronto, e só depois pergunte se pode escrever o email.",
    pergunta: "E o pedido que ela montou, ficou bom?",
    resultados: [
      {
        rotulo: "Ficou completo, com papel, tom e tudo certinho",
        reacao:
          "ISSO, capitão! Você acabou de delegar a parte mais chata: montar o pedido perfeito. Ela colocou papel, contexto e formato sozinha. Agora você só revisa e aprova. Trabalho de capitão é comandar, não remar.",
        ideal: true,
      },
      {
        rotulo: "Veio bom, mas eu mudaria uma coisa",
        reacao:
          "Perfeito! E ajustar é facílimo: 'deixa o tom mais pessoal' ou 'tira a parte do desconto'. Ela refaz o pedido na hora. Você nunca fica preso na primeira versão.",
        ideal: true,
      },
      {
        rotulo: "Veio meio raso",
        reacao:
          "Tudo bem, é só cobrar: 'capricha mais no contexto e no tom'. Quanto mais você exige, melhor ela monta. Lembre: você é o cliente exigente, ela é o seu imediato.",
      },
    ],
    fechamento: "Deleguei o trabalho difícil →",
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Dois bordões que valem ouro 💎",
    texto:
      "Decora esses dois e você está feito: 1) 'transforme isso num pedido bem feito e me mostre antes de fazer'. 2) 'monte o pedido com papel, contexto e formato pra mim'. Com essas duas frases, você nunca mais trava na frente da tela em branco.",
  },
  {
    kind: "tesouro",
    titulo: "Tesouro: o pedido que faz o pedido",
    texto:
      "Cole isto quando não souber por onde começar. Troque o [colchete] pela sua ideia torta e a IA monta o pedido perfeito pra você.",
    prompt:
      "Tenho uma ideia ainda crua: [SUA IDEIA TORTA AQUI].\n\nNao escreva o resultado ainda. Primeiro, transforme isso num pedido bem feito, com papel, contexto e formato bem definidos. Me mostre esse pedido pronto e me pergunte se pode seguir antes de fazer qualquer coisa.",
  },
  {
    kind: "experimento",
    titulo: "Missão final: um pedido de verdade, hoje",
    missao:
      "Pense numa coisa real que você precisa resolver no charter hoje (uma mensagem, um anúncio, uma resposta a alguém). Use o tesouro acima, cole sua ideia torta de verdade, e deixe a IA montar o pedido. Não é treino, é trabalho feito.",
    ondeFazer: "na sua IA",
    pergunta: "A IA montou um pedido pronto pra você usar?",
    resultados: [
      {
        rotulo: "Sim, e o resultado ficou pronto pra usar!",
        reacao:
          "ISSO, capitão! Você resolveu um problema real sem suar pra escrever o pedido. Falou torto, ela arrumou, mostrou o plano, você aprovou. Isso é navegar com a IA remando por você. ⚓",
        ideal: true,
      },
      {
        rotulo: "Montou, e ainda vou dar uns ajustes",
        reacao:
          "Perfeito. Ajustar é parte da manobra: 'mais curto', 'mais formal', 'tira isso'. Ela refaz quantas vezes precisar. Você está no comando do leme do começo ao fim.",
        ideal: true,
      },
    ],
    fechamento: "Feito! Mandei ver ⚓",
  },
  {
    kind: "premio",
    emoji: "🎩",
    titulo: "Você ganhou a Cartola!",
    texto:
      "Você não decorou teoria: você FEZ. Jogou a ideia torta, mandou a IA montar o pedido, pediu o plano antes de executar e resolveu uma coisa real. Agora você sabe o truque que poucos sabem. Próxima parada: Prompt Mágico, onde você ensina isso pra IA fazer sozinha pra sempre!",
  },
];

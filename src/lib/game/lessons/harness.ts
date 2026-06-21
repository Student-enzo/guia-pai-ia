import { Step } from "../types";

// MÓDULO 3 - O Prompt Mágico (o harness). O baú que vale o jogo inteiro.
// Aqui o pai NÃO responde quiz: ele FAZ. Cola o Prompt Mágico numa conversa
// nova, diz um pedido simples do dia a dia, e vê a IA virar professora.
export const harness: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Chegamos no tesouro, capitão! 🪄",
    texto:
      "Hoje você não vai decorar nada. Vai colar UM prompt mágico numa conversa de IA e, a partir daí, é só dizer o que quer. A IA passa a te entrevistar, escreve o pedido perfeito por você, faz a tarefa e ainda te ensina. Bora provar isso na prática agora.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "O pulo do gato 🐱",
    texto:
      "Em vez de você suar pra escrever o pedido certo, você cola este texto UMA vez no começo da conversa. Aí a IA vira seu copiloto e professor de bordo: você fala simples, ela faz o trabalho pesado. Vamos pegar o prompt agora.",
  },
  {
    kind: "tesouro",
    titulo: "O Prompt Mágico (copie tudo) 🦜",
    texto:
      "Este é o baú. Copie o texto inteiro. No próximo passo você vai colar ele numa conversa NOVA de IA. Guarde com carinho: é o mesmo em qualquer barco (ChatGPT, Claude ou Gemini).",
    prompt:
      "Você é meu PROFESSOR E COPILOTO DE IA. Eu sou iniciante e trabalho com charter de barcos de luxo (Atlantic Yacht Charter). Fale comigo em português, simples, sem jargão.\n\nQuando eu te der um objetivo, conduza NESTA ordem, um passo de cada vez:\n\n1. CONTEXTO: Antes de tudo, ME FAÇA perguntas pra entender minha situação. Só fatos, nunca minha opinião. Pare quando o contexto estiver completo.\n\n2. PEDIDO PRONTO: Escreva o pedido perfeito no meu lugar e me mostre, pra eu aprender como se pede.\n\n3. ENTREGA: Faça a tarefa de verdade, direto ao ponto, sem enrolação.\n\n4. ENSINO: No fim, me dê 1 a 3 dicas do que tornou isso bom, pra eu repetir sozinho.\n\nNunca invente número, fonte ou fato. Se não souber, diga que não sabe.\n\nComece respondendo só com: Pronto, capitão. Qual é o seu objetivo hoje?",
  },
  {
    kind: "experimento",
    titulo: "Experimento 1: cole e veja a mágica acordar",
    missao:
      "Abra uma conversa NOVA de IA. Cole o Prompt Mágico do baú acima como a PRIMEIRA mensagem e envie. Não peça mais nada ainda, só cole e mande.",
    ondeFazer: "no ChatGPT, Claude ou Gemini",
    pergunta: "E aí, o que a IA respondeu logo de cara?",
    resultados: [
      {
        rotulo: "Disse: 'Pronto, capitão. Qual é o seu objetivo hoje?'",
        reacao:
          "PERFEITO, capitão! Sentiu? Ela não despejou um textão. Ela parou e esperou VOCÊ. A partir de agora, quem manda é você, e ela já entrou no papel de professora. A vela está içada.",
        ideal: true,
      },
      {
        rotulo: "Respondeu parecido, do jeito dela",
        reacao:
          "Funcionou! Cada IA tem o seu jeitinho, mas o importante aconteceu: ela entendeu que é a sua professora e está esperando seu objetivo. Pode seguir.",
        ideal: true,
      },
      {
        rotulo: "Já saiu fazendo um monte de coisa",
        reacao:
          "Sem crise. Algumas IAs são afobadas. É só responder: 'me faça as perguntas primeiro, um passo de cada vez'. Você está no comando do leme, não ela.",
      },
    ],
    fechamento: "Colei e ela acordou! Agora vou pedir algo →",
  },
  {
    kind: "experimento",
    titulo: "Experimento 2: diga um pedido bem simples",
    missao:
      "Na MESMA conversa, agora digite só uma frase simples, do seu jeito, sem capricho nenhum. Algo de verdade do seu dia. Mande e veja o que ela faz.",
    ondeFazer: "na mesma conversa",
    prompt: "preciso organizar minha semana de passeios de barco",
    pergunta: "O que a IA fez ao receber esse pedido simples?",
    resultados: [
      {
        rotulo: "Me fez várias perguntas antes de fazer qualquer coisa",
        reacao:
          "É ISSO! Você jogou uma frase de 6 palavras e ela, em vez de chutar, te ENTREVISTOU: quantos barcos? quantos passeios? que dias? Esse é o segredo todo. O contexto sai de você sem você precisar saber escrever pedido bom.",
        ideal: true,
      },
      {
        rotulo: "Me perguntou uma ou duas coisas só",
        reacao:
          "Já valeu o ouro! Mesmo uma pergunta já mostra que ela está cavando o contexto antes de produzir. Responde que ela continua. Quanto mais você conta, melhor fica o resultado.",
        ideal: true,
      },
      {
        rotulo: "Saiu fazendo uma agenda na hora",
        reacao:
          "Aconteceu, mas você pode melhorar: responda 'espera, me pergunte o contexto primeiro'. Aí ela volta pro trilho. Você nunca é obrigado a aceitar a primeira resposta.",
      },
    ],
    fechamento: "Ela me entrevistou! Bora responder →",
  },
  {
    kind: "experimento",
    titulo: "Experimento 3: responda e deixe ela montar o pedido",
    missao:
      "Responda as perguntas dela com a sua situação real (mesmo que sejam respostas curtas). Depois das respostas, repare se ela te mostra o PEDIDO PRONTO antes de entregar.",
    ondeFazer: "na mesma conversa",
    pergunta: "Depois que você respondeu, o que ela mostrou?",
    resultados: [
      {
        rotulo: "Me mostrou um 'pedido pronto' antes de fazer",
        reacao:
          "Olha que joia! Ela escreveu o pedido perfeito no SEU lugar e te mostrou. É como ver o profissional montando a isca antes de jogar. Você está aprendendo a pescar sozinho sem nem perceber.",
        ideal: true,
      },
      {
        rotulo: "Já me entregou a agenda prontinha",
        reacao:
          "Maravilha! O resultado veio com a sua cara porque ela já tinha o contexto. Se quiser, peça: 'me mostra como você montou esse pedido?' e ela te ensina a receita.",
        ideal: true,
      },
      {
        rotulo: "Veio meia-boca, faltou coisa",
        reacao:
          "Normal, e fácil de consertar: 'faltou o domingo' ou 'separa por barco'. Ela refaz na hora. Conversa, não comando único. Você lapida até ficar do seu jeito.",
      },
    ],
    fechamento: "Vi ela montar o pedido por mim →",
  },
  {
    kind: "simulador",
    titulo: "Pra você ver o ciclo inteiro de uma vez 🔁",
    instrucao:
      "Toque no pedido simples abaixo e veja, ali do lado, como a professora pede, faz e ensina, tudo numa resposta só.",
    pedidos: [
      {
        rotulo: "preciso responder um hóspede chateado com a chuva no passeio",
        etiqueta: "você fala simples",
        bom: true,
        resposta:
          "Boa, capitão. Antes deixa eu te mostrar COMO vou pedir (pra você aprender):\n• Papel: assistente do charter\n• Tom: empático, sem prometer reembolso\n\nAgora a mensagem pronta:\n“Sentimos muito pela chuva de hoje! O mar manda, mas a gente cuida de você: que tal remarcar sem custo pro próximo dia de sol? 🌤️”\n\nO QUE VOCÊ APRENDEU: pedidos com tom definido saem prontos pra mandar. Repare que eu pedi, fiz e expliquei, tudo de uma vez. 🦜",
      },
    ],
    sucesso: "Isso é o harness inteiro: ele entrevista, monta o pedido, faz e ensina.",
  },
  {
    kind: "vocab",
    termo: "Harness",
    significado:
      "É o 'colete' que você bota na IA pra ela trabalhar do SEU jeito. O Prompt Mágico que você acabou de colar é o seu primeiro harness.",
    insider:
      "Palavra de gente que mexe com IA de verdade. Você já tem um na manga e já usou hoje.",
  },
  {
    kind: "praticar",
    titulo: "Faça Agora: cole de novo numa tarefa de verdade",
    intro:
      "Conversa muito longa fica zonza. O truque dos profissionais: abrir uma conversa nova e colar o Prompt Mágico de novo, sempre que for atacar uma tarefa importante. Vamos firmar esse hábito.",
    passos: [
      "Abra uma conversa NOVA de IA.",
      "Cole o Prompt Mágico (o do baú lá em cima) como primeira mensagem.",
      "Quando ela perguntar seu objetivo, diga uma tarefa real de hoje, do seu jeito simples.",
      "Responda as perguntas de contexto dela e deixe ela fazer.",
    ],
    fechamento:
      "Pronto. Esse vira seu ritual: conversa nova, cola o prompt, fala simples, deixa ela trabalhar.",
  },
  {
    kind: "experimento",
    titulo: "Missão final: delegue uma tarefa real, hoje",
    missao:
      "Pense numa coisa que você precisa resolver no charter hoje (um email, uma agenda, uma resposta de cliente). Numa conversa com o Prompt Mágico colado, diga o objetivo e leve até o fim. Não é treino: é trabalho de verdade.",
    ondeFazer: "na sua IA, com o prompt colado",
    pergunta: "Conseguiu resolver algo de verdade?",
    resultados: [
      {
        rotulo: "Sim! Saiu pronto pra usar",
        reacao:
          "ISSO, capitão! Você acabou de delegar trabalho de verdade. Falou simples, ela cavou o contexto, fez e te ensinou. Isso é ser capitão: você comanda, a IA rema.",
        ideal: true,
      },
      {
        rotulo: "Saiu, mas ainda vou dar um ajuste",
        reacao:
          "Perfeito. Ajustar é parte do jogo: 'mais curto', 'mais formal', 'tira isso'. Ela refaz quantas vezes precisar. Você nunca fica preso na primeira versão.",
        ideal: true,
      },
      {
        rotulo: "Travou no meio do caminho",
        reacao:
          "Sem problema, marujo. É só dizer 'volta um passo' ou 'me explica isso mais simples'. A professora é paciente. Tenta de novo amanhã: na segunda vez já flui.",
      },
    ],
    fechamento: "Feito! Mandei ver ⚓",
  },
  {
    kind: "premio",
    emoji: "🏆",
    titulo: "Você desenterrou o Baú!",
    texto:
      "Você não decorou teoria: você FEZ. Colou o Prompt Mágico, viu a IA te entrevistar, deixou ela montar o pedido e delegou trabalho de verdade. Agora você tem um copiloto que também é professor. Bem-vindo ao comando, capitão.",
  },
];

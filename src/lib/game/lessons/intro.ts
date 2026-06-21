import { Step } from "../types";

// MÓDULO 0 - O Grande Segredo (lição-jogo, mão na massa)
export const intro: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Oi, eu sou o Loro! 🦜",
    texto:
      "Vou ser seu co-piloto nessa travessia, capitão. Relaxa: você não precisa entender de tecnologia. Se sabe mandar mensagem no WhatsApp, já tem tudo. Hoje a gente não decora teoria, a gente faz de verdade. Cola comigo aqui do lado.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 1: sua primeira palavra com a IA",
    missao:
      "Abra um site de IA. Toque na caixa de escrever lá embaixo, cole o pedido e mande (Enter ou a setinha). É só isso. Eu espero aqui.",
    ondeFazer: "abra chatgpt.com, claude.ai ou gemini.google.com",
    prompt: "Oi! Me explica em 1 frase o que voce faz.",
    pergunta: "E aí, o que aconteceu?",
    resultados: [
      {
        rotulo: "Funcionou, ela me respondeu!",
        reacao:
          "É ISSO, capitão! Você acabou de conversar com uma Inteligência Artificial. Olha que indolor. Quem nunca tinha aberto, agora abriu. Esse barco já saiu do porto. ⚓",
        ideal: true,
      },
      {
        rotulo: "Pediram pra eu fazer login antes",
        reacao:
          "Normal! É de graça: cria a conta com seu email (ou entra com o Google) e volta. Acontece uma vez só, depois é livre. Aí manda o pedido de novo.",
      },
      {
        rotulo: "Travei, não achei onde escrever",
        reacao:
          "Calma, sem vergonha nenhuma. A caixa fica sempre na parte de baixo da tela, com um 'Pergunte alguma coisa' escrito clarinho. Toca nela, escreve e manda. Tenta de novo que você pega.",
      },
    ],
    fechamento: "Pronto, quebrei o gelo →",
  },
  {
    kind: "fala",
    mascote: "festa",
    titulo: "Olha você usando IA! 🎉",
    texto:
      "Sério, parabéns. Muita gente passa a vida com medo de abrir isso e você acabou de fazer. A partir daqui é só ficar melhor. E o melhor: o que eu vou te ensinar não é sobre apertar botão, é sobre saber PEDIR. Vem ver por quê.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 2: o pedido preguiçoso",
    missao:
      "Na mesma IA, manda este pedido bem vago, do jeito preguiçoso, sem dar nenhum detalhe. Repara no que volta.",
    ondeFazer: "na mesma IA que você abriu",
    prompt: "Escreve um email pra um cliente.",
    pergunta: "Que email a IA te deu?",
    resultados: [
      {
        rotulo: "Veio genérico, sem a minha cara",
        reacao:
          "Exato! Sem detalhe, a IA CHUTA. Email pra qual cliente? Sobre o quê? Que tom? Ela inventou tudo e saiu sem graça. Esse é o erro que quase todo mundo comete, e que você não vai mais cometer.",
        ideal: true,
      },
      {
        rotulo: "Ela me fez perguntas antes",
        reacao:
          "Olha que esperta! Algumas IAs pedem mais detalhe quando o pedido é vago demais. Isso já entrega o segredo de hoje: quanto mais contexto você dá, melhor ela responde.",
      },
      {
        rotulo: "Veio até bonzinho",
        reacao:
          "Pode ter vindo decente, mas aposto que não serve pro seu caso real nem tem a sua cara. No próximo experimento você vai sentir a diferença na pele.",
      },
    ],
    fechamento: "Agora vou pedir do jeito certo →",
  },
  {
    kind: "experimento",
    titulo: "Experimento 3: o mesmo pedido, recheado",
    missao:
      "Mesma IA, mesma tarefa. Mas agora manda ESTE pedido, cheio de detalhe. Depois compara com o email careta de antes.",
    ondeFazer: "na mesma IA",
    prompt:
      "Voce e meu assistente do Atlantic Yacht Charter, uma empresa de charter de barcos de luxo. Escreva um email curto e caloroso pro cliente VIP Joao, confirmando o passeio de domingo as 9h no barco Atlantis II, para 6 pessoas. O pagamento ja foi feito. Nao invente preco nem detalhe que eu nao dei. No maximo 4 linhas.",
    pergunta: "Como ficou esse, comparado com o primeiro?",
    resultados: [
      {
        rotulo: "Saiu pronto pra mandar!",
        reacao:
          "É ISSO, capitão! Mesma IA, mas agora ela sabia QUEM, O QUÊ, QUANDO e o TOM. Não mudou a ferramenta, mudou o que VOCÊ deu pra ela. Esse é o grande segredo do jogo inteiro.",
        ideal: true,
      },
      {
        rotulo: "Muito melhor que o primeiro",
        reacao:
          "Pois é! A diferença toda foi o detalhe que você deu. A IA é a mesma do pedido preguiçoso. O que mudou foi o capitão no comando: você.",
        ideal: true,
      },
      {
        rotulo: "Bom, mas eu mudaria uma coisinha",
        reacao:
          "Perfeito, e olha que truque: é só responder 'deixa mais curto' ou 'tira tal parte' que ela refaz na hora. É conversa, não é comando único. Você nunca fica preso na primeira versão.",
      },
    ],
    fechamento: "Senti o poder do contexto →",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "O segredo que quase ninguém conta:",
    texto:
      "Viu com seus próprios olhos? Não é a ferramenta, é o JEITO de pedir. Quem ganha com IA não é quem descobre o botão mágico, é quem aprende a conversar com ela. E adivinha quem já começou a aprender? Você, capitão.",
  },
  {
    kind: "vocab",
    termo: "Prompt",
    significado:
      "É só o nome chique do seu PEDIDO. Toda vez que você escreve algo pra IA, isso é um 'prompt'. Pronto, desmistificado. Os três experimentos que você fez? Foram três prompts.",
    insider:
      "Agora, quando alguém soltar 'prompt' no jantar, você sabe o que é, e a maioria da mesa não faz a menor ideia. 🦜",
  },
  {
    kind: "chat",
    titulo: "Como é conversar com a IA 💬",
    instrucao: "É igual mandar mensagem no WhatsApp. Toque pra ver a conversa rolar ao vivo.",
    turnos: [
      { de: "voce", texto: "Oi! Preciso de uma legenda curta pro post do passeio de domingo." },
      { de: "ia", texto: "Claro! Me conta rapidinho: qual o clima do passeio, mais família ou mais romântico? E tem alguma vaga sobrando?" },
      { de: "voce", texto: "Romântico, pôr do sol, sobraram 2 vagas." },
      { de: "ia", texto: "🌅 Domingo pede dois corações a bordo: passeio ao pôr do sol, taça na mão e o céu pegando fogo. Sobraram só 2 vagas, garanta a sua! ⛵ Quer que eu faça mais 2 versões?" },
    ],
    sucesso: "Viu? Conversa de ida e volta, igual com uma pessoa. Sem segredo.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 4: conheça as três IAs",
    missao:
      "Cada IA tem um ponto forte. Manda esta MESMA pergunta de apresentação numa que você ainda não testou (se abriu o ChatGPT, abra o Claude ou o Gemini agora). Sinta o estilo de cada uma.",
    ondeFazer: "em outra das três: ChatGPT, Claude ou Gemini",
    prompt: "Em 2 frases, qual e o seu ponto forte e pra que tipo de tarefa voce e melhor?",
    pergunta: "Conseguiu abrir uma segunda e comparar?",
    resultados: [
      {
        rotulo: "Sim, cada uma tem um jeito",
        reacao:
          "Boa! Resumindo o que cada uma faz de melhor: ChatGPT é o pau pra toda obra, ótimo no dia a dia. Claude é craque em escrever bonito e em textos longos. Gemini é forte em buscar e juntar informação. Três barcos na sua frota.",
        ideal: true,
      },
      {
        rotulo: "Só testei uma por enquanto",
        reacao:
          "Tranquilo, uma já basta pra começar! Mas guarda esta dica de capitão: vale ter as três no celular. Cada uma brilha numa coisa, e todas têm um plano de graça pra você ir testando.",
      },
    ],
    fechamento: "Conheci minha frota de IAs →",
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Por que a gente não decora ferramenta 🚤",
    texto:
      "No mundo da IA, um único dia de novidade vale quase um ano dos nossos. Elas mudam, ganham nome novo, aparece uma melhor toda semana. Por isso a gente não decora botão: a gente aprende a PENSAR e a PEDIR. Isso aqui não sai de moda nunca, e é exatamente o que você está treinando.",
  },
  {
    kind: "experimento",
    titulo: "Missão final: um pedido seu, de verdade",
    missao:
      "Pensa numa coisinha real que você faria hoje (um recado, uma lista, uma ideia pro charter). Pede pra IA, com detalhe, do seu jeito. Não é treino: é a primeira vez que ela trabalha PRA você.",
    ondeFazer: "na IA que você preferir",
    pergunta: "Conseguiu fazer a IA te ajudar com algo seu?",
    resultados: [
      {
        rotulo: "Sim, me ajudou de verdade!",
        reacao:
          "ISSO, capitão! Você fez tudo num dia: abriu pela primeira vez, descobriu o poder do contexto, conheceu as três IAs e já botou uma pra trabalhar pra você. Esse é o espírito: você comanda, a IA rema. 🦜",
        ideal: true,
      },
      {
        rotulo: "Saiu, mas ainda vou caprichar mais",
        reacao:
          "Perfeito! Caprichar é o jogo: 'mais curto', 'mais formal', 'adiciona tal coisa'. Ela refaz quantas vezes você quiser. Você nunca fica preso na primeira tentativa. Bora pro próximo módulo afiar isso.",
        ideal: true,
      },
    ],
    fechamento: "Feito! Mandei ver ⚓",
  },
  {
    kind: "premio",
    emoji: "🧭",
    titulo: "Você ganhou a Bússola!",
    texto:
      "Num módulo só, você saiu do zero: abriu uma IA, sentiu que não é a ferramenta e sim o jeito de pedir, conheceu sua frota de três IAs e fez uma trabalhar pra você. Agora você usa IA melhor que muita gente que mexe com isso o dia inteiro. Próxima parada: virar mestre em pedir.",
  },
];

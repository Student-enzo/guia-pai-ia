import { Step } from "../types";

// MÓDULO 1 - FALAR COM A IA (lição prática, mão na massa)
export const prompting: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Hoje você põe a mão na massa 🛠️",
    texto:
      "Sem teoria chata, capitão. Você vai abrir uma IA de verdade e fazer experimentos comigo aqui do lado. A regra de ouro de tudo: quanto mais contexto você dá, melhor a resposta. Bora provar isso na prática.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 1: o pedido preguiçoso",
    missao: "Abra uma IA e mande só isto, do jeitinho preguiçoso, sem dar contexto nenhum. Veja o que volta.",
    ondeFazer: "no ChatGPT, Claude ou Gemini",
    prompt: "Escreve um email pra um cliente.",
    pergunta: "E aí, que email a IA te deu?",
    resultados: [
      {
        rotulo: "Veio genérico, sem cara de mim",
        reacao: "Exato! Sem contexto, a IA CHUTA. Email pra qual cliente? Sobre o quê? Que tom? Ela inventou tudo e saiu careta. Esse é o erro que 99% das pessoas comete.",
        ideal: true,
      },
      {
        rotulo: "Ela me fez perguntas antes",
        reacao: "Olha que interessante! Algumas IAs pedem contexto quando o pedido é vago demais. Isso já é uma dica do que vem agora: contexto é tudo.",
      },
      {
        rotulo: "Veio até que bom",
        reacao: "Pode até ter vindo decente, mas aposto que não tem a sua cara nem serve pro seu caso real. No próximo experimento você vai sentir a diferença de verdade.",
      },
    ],
    fechamento: "Guardei. Agora o contrário →",
  },
  {
    kind: "experimento",
    titulo: "Experimento 2: o pedido com contexto",
    missao: "Agora manda este, recheado de contexto. Mesma IA, mesma tarefa, mundo de diferença.",
    ondeFazer: "na mesma IA",
    prompt:
      "Você é meu assistente do Atlantic Yacht Charter. Escreva um email curto e caloroso pro cliente VIP João confirmando o passeio de domingo às 9h, no barco Atlantis II, pra 6 pessoas. O pagamento já foi feito. Não invente preço nem detalhe que eu não dei. 4 linhas no máximo.",
    pergunta: "Compara com o primeiro. Como ficou?",
    resultados: [
      {
        rotulo: "Saiu pronto pra mandar!",
        reacao: "É ISSO, capitão! Mesma IA, mas agora ela sabia QUEM, O QUÊ, QUANDO e o TOM. O contexto fez ela escrever como se fosse você. Sentiu o poder?",
        ideal: true,
      },
      {
        rotulo: "Bem melhor que o primeiro",
        reacao: "Pois é! A diferença toda foi o contexto. Não mudou a IA, mudou o que VOCÊ deu pra ela. Esse é o segredo do jogo inteiro.",
        ideal: true,
      },
      {
        rotulo: "Quase, mas mudaria uma coisa",
        reacao: "Perfeito! E aqui vai outro truque: é só responder 'deixa mais curto' ou 'adiciona tal coisa' que ela refaz na hora. Conversa, não comando único.",
      },
    ],
    fechamento: "Entendi o poder do contexto →",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "A receita de 4 blocos 🧾",
    texto:
      "Todo pedido bom tem 4 blocos: PAPEL (quem a IA deve ser), TAREFA (o que fazer), CONTEXTO (a situação completa, capricha aqui!) e FORMATO (como deve sair). Você acabou de usar os quatro no experimento 2. Vamos montar um do zero agora.",
  },
  {
    kind: "medidor",
    titulo: "Sinta o poder do contexto 🔥",
    instrucao: "Adicione os pedaços de contexto um por um e veja o medidor ir do vermelho ao verde, e a resposta da IA se transformar ao vivo.",
    chips: [
      "cliente Ana, antiga",
      "passeio de sábado",
      "remarcar pro domingo por causa do tempo",
      "tom cuidadoso, WhatsApp curto",
    ],
    respostaFraca: "Olá, segue uma mensagem sobre o passeio. Atenciosamente.",
    respostaForte:
      "Oi Ana! Tudo bem? 🌊 O tempo no sábado não vai colaborar, e pra garantir sua segurança queria remarcar pro domingo no mesmo horário. Pode ser? Qualquer coisa me chama!",
    sucesso: "Medidor no verde! Viu como o contexto transformou a resposta? 🛥️",
  },
  {
    kind: "experimento",
    titulo: "Experimento 3: deixa a IA te entrevistar",
    missao: "Mande este pedido. Em vez de você adivinhar tudo, a IA vai TE fazer perguntas de contexto antes de escrever. Responda e veja o resultado.",
    ondeFazer: "na sua IA",
    prompt:
      "Quero escrever um anúncio pra divulgar meus passeios de barco. Antes de escrever, me faça de 3 a 5 perguntas pra entender meu contexto (meu público, meu diferencial, o tom). Só pergunte sobre fatos, não sobre minha opinião. Depois escreva.",
    pergunta: "O que a IA fez primeiro?",
    resultados: [
      {
        rotulo: "Me fez perguntas antes de escrever",
        reacao: "PERFEITO! Esse é o truque dos profissionais: deixar a IA cavar o contexto antes de produzir. O anúncio que vem depois é 10x melhor, porque ela já sabe tudo que precisa.",
        ideal: true,
      },
      {
        rotulo: "Já saiu escrevendo direto",
        reacao: "Acontece. Aí é só insistir: 'espera, me faça as perguntas primeiro'. Você está no comando. Fazer a IA te entrevistar é o que separa pedido amador de profissional.",
      },
    ],
    fechamento: "Adorei deixar ela me entrevistar →",
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Três truques que mudam o jogo 💎",
    texto:
      "1) Diga TUDO no primeiro pedido, ou deixe a IA te entrevistar. 2) Peça a VERDADE, não elogio: 'me dá o feedback sem filtro'. 3) Pra decisão grande, peça os DOIS lados: o a favor E o contra. Você acabou de praticar o truque 1, o mais importante.",
  },
  {
    kind: "boss",
    titulo: "Boss: O Cliente Bravo 😡",
    cliente: "Sr. Almeida (cliente bravo)",
    reclamacao: "O passeio de ontem atrasou 40 minutos e ninguém me avisou! Quero meu dinheiro de volta!",
    ingredientes: [
      { etiqueta: "Reconhecer o erro e pedir desculpa", bom: true },
      { etiqueta: "Explicar o que houve, sem desculpa esfarrapada", bom: true },
      { etiqueta: "Oferecer um agrado (taça de espumante no próximo)", bom: true },
      { etiqueta: "Tom caloroso e humano", bom: true },
      { etiqueta: "Dizer que a culpa foi dele", bom: false },
      { etiqueta: "Ignorar e mandar um preço novo", bom: false },
    ],
    respostaVitoria:
      "Sr. Almeida, sinto muito de verdade pelo atraso e por não termos avisado, isso não é o nosso padrão. Houve um imprevisto com a maré, mas a falha de comunicação foi nossa. Gostaria de te receber no próximo passeio com uma taça de espumante por conta da casa. Posso remarcar?",
    sucesso: "Resposta montada com contexto e cuidado. Cliente acalmado!",
  },
  {
    kind: "tesouro",
    titulo: "Tesouro: seu modelo de contexto",
    texto: "Cola isto no início de qualquer conversa importante. Troca os [colchetes] e a IA já começa sabendo tudo.",
    prompt:
      "CONTEXTO DO MEU NEGOCIO:\n- Empresa: Atlantic Yacht Charter (charter de barcos de luxo)\n- Perfil do cliente: [DESCREVA]\n- Tom de comunicacao: caloroso, profissional, sem inventar informacoes\n\nO QUE EU QUERO:\n[DESCREVA A TAREFA]\n\nAntes de responder, me faca ate 3 perguntas de CONTEXTO que melhorem sua resposta. Nao pergunte minha opiniao, so fatos.",
  },
  {
    kind: "experimento",
    titulo: "Missão final: um email de verdade, hoje",
    missao: "Pense num email real que você precisa mandar pro charter hoje. Use o tesouro acima, preencha com a sua situação real, e mande. Não é treino: é trabalho de verdade feito por você.",
    ondeFazer: "na sua IA",
    pergunta: "Conseguiu um email pronto pra usar?",
    resultados: [
      {
        rotulo: "Sim, vou mandar pro cliente!",
        reacao: "ISSO, capitão! Você acabou de delegar trabalho de verdade pra IA, com contexto, do seu jeito. Isso é ser capitão: você comanda, a IA rema.",
        ideal: true,
      },
      {
        rotulo: "Saiu, mas ainda vou ajustar",
        reacao: "Perfeito. Ajustar é parte do jogo: 'mais curto', 'mais formal', 'tira isso'. Ela refaz quantas vezes precisar. Você nunca fica preso na primeira versão.",
        ideal: true,
      },
    ],
    fechamento: "Feito! Mandei ver ⚓",
  },
  {
    kind: "premio",
    emoji: "🧾",
    titulo: "Você dominou o contexto!",
    texto:
      "Você não decorou teoria: você FEZ. Pediu mal de propósito, pediu bem, deixou a IA te entrevistar e escreveu um email de verdade. Agora você usa IA melhor que muita gente que mexe com isso o dia inteiro.",
  },
];

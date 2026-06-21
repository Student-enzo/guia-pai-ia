import { Step } from "../types";

// MÓDULO 2 — A IA te ajuda a pedir (meta-prompting, lição-jogo)
export const metaprompt: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Sacada de profissional 🎩",
    texto:
      "Capitão, você travou tentando escrever o pedido perfeito pra IA? Relaxa: você NÃO precisa. A própria IA escreve o pedido pra você. É só pedir.",
  },
  {
    kind: "mito",
    afirmacao: "Eu tenho que escrever o pedido perfeito sozinho, senão a IA não entende.",
    ehVerdade: false,
    comentarioCerto:
      "Isso! Joga a ideia bagunçada e manda a IA arrumar. Falar mal e ser entendido já basta — ela faz o resto.",
    comentarioErrado:
      "É MITO! Você fala a ideia torta, do seu jeito, e pede pra IA transformar num pedido bem feito. Ela é o seu imediato.",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "A frase mágica:",
    texto:
      "“Transforme isso num pedido bem feito e me mostre antes de fazer.” Cole sua ideia solta, diga isso, e a IA arruma a casa por você.",
  },
  {
    kind: "simulador",
    titulo: "A frase mágica em ação ✨",
    instrucao:
      "Nem sabe escrever o pedido? Joga a ideia torta e manda a IA arrumar. Toque e veja.",
    pedidos: [
      {
        rotulo:
          "quero avisar os hóspedes do passeio de amanhã, mas não sei escrever — transforma isso num pedido bem feito e me mostra antes de fazer",
        etiqueta: "ideia torta",
        bom: true,
        resposta:
          "Boa! Entendi. Aqui está o pedido pronto pra você usar:\n\n“Escreva uma mensagem curta e calorosa de WhatsApp avisando os hóspedes do passeio de amanhã: horário, ponto de encontro e o que levar. Sem inventar preço.”\n\nQuer que eu já escreva a mensagem com esse pedido? ✅",
      },
    ],
    sucesso: "Viu? Você falou torto, ela devolveu redondo. Esse é o truque.",
  },
  {
    kind: "escolha",
    contexto: "Você quer avisar os hóspedes do passeio de amanhã, mas não sabe escrever o pedido.",
    pergunta: "Qual é o jeito esperto de fazer?",
    opcoes: [
      {
        texto:
          "Escrever pra IA: “quero avisar os hóspedes de amanhã — transforme isso num pedido bem feito e me mostre antes de fazer”",
        certa: true,
        comentario:
          "Perfeito! Você joga a ideia crua, ela devolve o pedido redondo. Trabalho difícil é dela, capitão. ⚓",
      },
      {
        texto: "Passar uma hora tentando escrever o pedido perfeito sozinho antes de mandar",
        certa: false,
        comentario:
          "Pra quê suar? A IA escreve o pedido melhor e mais rápido que você. Deixa ela montar a manobra.",
      },
      {
        texto: "Desistir porque não sei explicar direito o que eu quero",
        certa: false,
        comentario:
          "Nada de abandonar o barco! Mande a ideia torta mesmo — ela entende e organiza. Tenta de novo.",
      },
    ],
  },
  {
    kind: "ache",
    instrucao:
      "Toque no ÚNICO pedido que manda a IA mostrar o plano ANTES de executar (o jeito seguro).",
    itens: [
      {
        texto: "“Escreva o e-mail e já manda pros clientes.”",
        certa: false,
        comentario:
          "Esse sai correndo sem te mostrar nada. Se ela entender errado, já era. Sempre confira a rota antes.",
      },
      {
        texto:
          "“Transforme minha ideia num pedido bem feito, me mostre como entendeu e pergunte se pode seguir antes de fazer.”",
        certa: true,
        comentario:
          "Esse é o ouro! Ela resume o que entendeu, você confere, e só então ela faz. Âncora confirmada. ⚓",
      },
      {
        texto: "“Faz aí qualquer coisa sobre o passeio.”",
        certa: false,
        comentario:
          "Vago demais e sem checagem. A IA chuta e você nem vê antes. Peça o plano primeiro.",
      },
    ],
  },
  {
    kind: "mito",
    afirmacao: "Pedir pra IA mostrar o plano antes de executar faz ela acertar mais.",
    ehVerdade: true,
    comentarioCerto:
      "Verdade! É como confirmar a rota antes de soltar a âncora. Você corrige a ideia ANTES, não depois de pronto.",
    comentarioErrado:
      "É VERDADE, viu? Ver o plano antes deixa você consertar o rumo cedo. Economiza tempo e evita resultado torto.",
  },
  {
    kind: "fala",
    mascote: "festa",
    titulo: "Spoiler da próxima ilha 🪄",
    texto:
      "E se você nunca mais precisasse colar essa frase? Na ilha do Prompt Mágico você cola UMA vez e a IA passa a fazer isso sozinha, pra sempre. Mas primeiro, comemora essa conquista.",
  },
  {
    kind: "premio",
    emoji: "🎩",
    titulo: "Você ganhou a Cartola!",
    texto:
      "Agora você sabe o truque dos profissionais: deixe a IA escrever o pedido por você e peça o plano antes de executar. Próxima parada: Prompt Mágico!",
  },
];

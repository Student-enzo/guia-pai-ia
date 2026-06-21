import { Step } from "../types";

// MÓDULO 5 — MCPs & Connectors (lição-jogo)
export const mcps: Step[] = [
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "Sabe o que a IA NÃO faz ainda?",
    texto:
      "Até agora, capitão, sua IA só sabe conversar. Ela é um imediato genial trancado num quarto sem janela: sabe de tudo, mas não toca em nada seu. Não vê seu email, nem sua agenda.",
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Aí entra o cabo 🔌",
    texto:
      "Um connector (ou MCP) é o CABO que liga a IA nas suas ferramentas de verdade. Plugou o cabo, e de repente ela FAZ coisas: lê email, olha agenda, cria foto pro Instagram do barco.",
  },
  {
    kind: "simulador",
    titulo: "A IA plugada no seu Gmail 📧",
    instrucao:
      "Com o cabo do Gmail ligado, a IA OLHA seus emails (só leitura). Toque e veja.",
    pedidos: [
      {
        rotulo: "tem algum email de hóspede sobre o passeio de sábado?",
        etiqueta: "ela vai buscar",
        bom: true,
        resposta:
          "Achei 2 emails sobre sábado:\n• James (10h): pergunta se pode levar as crianças 👨‍👩‍👧\n• Marina (ontem): quer remarcar por causa do vento\n\nQuer que eu rascunhe uma resposta pra cada? (Eu só LEIO — não envio nada sem você mandar.)",
      },
    ],
    sucesso: "Viu? Plugou o cabo, ela passou a trabalhar com as suas coisas.",
  },
  {
    kind: "escolha",
    contexto: "A galera chama o MCP de 'USB-C pra IA'.",
    pergunta: "Por que comparam com o USB-C?",
    opcoes: [
      {
        texto: "Porque é um plugue universal — um encaixe só que liga a IA em qualquer ferramenta",
        certa: true,
        comentario:
          "Isso! Igual aquele plugue que carrega o celular, liga no monitor, no fone — tudo. Um cabo pra tudo.",
      },
      {
        texto: "Porque precisa comprar caro numa loja de eletrônicos",
        certa: false,
        comentario:
          "Que nada! Não é cabo de loja. É a ideia de um encaixe ÚNICO que serve pra tudo. Liga e pronto.",
      },
      {
        texto: "Porque só funciona em celular novo",
        certa: false,
        comentario:
          "Nada disso, capitão. É o conceito de plugue universal — serve pra IA inteira, em qualquer aparelho.",
      },
    ],
  },
  {
    kind: "ligue",
    instrucao: "Ligue cada cabo (ferramenta) ao que ele faz pelo seu charter:",
    pares: [
      { esquerda: "📧 Gmail", direita: "lê e rascunha seus emails" },
      { esquerda: "📅 Google Calendar", direita: "cuida da sua agenda" },
      { esquerda: "🖼️ Gerador de imagem", direita: "cria fotos pro Instagram do barco" },
      { esquerda: "📁 Google Drive", direita: "puxa seus documentos" },
    ],
    sucesso:
      "Caixa de cabos dominada! Cada plugue tem seu serviço — igual saber qual cabo é da âncora e qual é do rádio.",
  },
  {
    kind: "mito",
    afirmacao:
      "Quando eu plugo um connector, posso já mandar a IA enviar e apagar emails de cara, no primeiro dia.",
    ehVerdade: false,
    comentarioCerto:
      "Isso, MITO! Comece SEMPRE em 'somente leitura': a IA só OLHA. A maioria dos perrengues acontece no dia 1, quando alguém libera tudo de uma vez.",
    comentarioErrado:
      "Olha, é MITO! Comece em 'somente leitura' — ela só olha, não mexe. Quase todo acidente é no dia 1. Primeiro o marinheiro observa, depois assume o leme.",
  },
  {
    kind: "escolha",
    contexto: "Você acabou de plugar o Gmail pela primeira vez.",
    pergunta: "Qual é a jogada de capitão esperto?",
    opcoes: [
      {
        texto: "Deixar em 'somente leitura' uns dias, ver como ela se comporta, depois liberar mais",
        certa: true,
        comentario:
          "Perfeito! Primeiro ela observa, você confere, e só então solta o leme. Calma vence pressa no mar.",
      },
      {
        texto: "Dar acesso total na hora e mandar 'organiza tudo aí'",
        certa: false,
        comentario:
          "Opa, freia! Isso é deixar um marinheiro novo pilotar no primeiro dia. Comece em somente leitura, sempre.",
      },
    ],
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Um plugue, todas as tomadas",
    texto:
      "O melhor: connector é a mesma ideia em qualquer IA. O cabo que você aprende no Claude serve igualzinho no ChatGPT. São intercambiáveis — aprendeu uma vez, vale pra todas.",
  },
  {
    kind: "mito",
    afirmacao: "Connector e MCP são duas coisas totalmente diferentes que eu preciso decorar.",
    ehVerdade: false,
    comentarioCerto:
      "Isso, MITO! São a mesma coisa. O MCP é o padrão por baixo; o connector é só a versão de 1 clique dele. Não esquenta com o nome.",
    comentarioErrado:
      "É MITO, capitão! São a mesma coisa — connector é só o MCP em versão de 1 clique. O nome assusta, mas é só um cabo que não enferruja. 😄",
  },
  {
    kind: "praticar",
    titulo: "Ligue o Gmail (só leitura) hoje",
    intro:
      "Sem pressa e seguro: a IA vai só OLHAR seus emails, não mexer em nada.",
    passos: [
      "No ChatGPT ou Claude, ache o ícone '+' ou 'Connectors' perto da caixa de escrever.",
      "Escolha o Gmail e autorize — comece na opção 'somente leitura'.",
      "Peça: 'tem algum email de cliente sobre passeio essa semana?'",
      "Veja ela buscar e resumir. Você confere tudo antes de qualquer resposta.",
    ],
    fechamento: "Ela virou seu imediato de bordo — começando pela observação.",
  },
  {
    kind: "premio",
    emoji: "🔌",
    titulo: "Você ganhou o Cabo Universal!",
    texto:
      "Agora sua IA não só conversa — ela trabalha. Lembrou da regra de ouro? Sempre começa em somente leitura. Bora pro próximo passo, capitão.",
  },
];

import { Step } from "../types";

// MÓDULO 8 (final) — A Formatura (lição-jogo)
// Ilha celebratória: um quiz de recap que junta tudo que o capitão aprendeu
// pelas ilhas anteriores. Termina com o Diploma de Navegador de IA. 🎓
export const diploma: Step[] = [
  {
    kind: "fala",
    mascote: "festa",
    titulo: "Chegamos no porto, capitão! 🎉",
    texto:
      "Você atravessou o guia inteiro. Antes de te entregar o diploma, deixa o Loro testar uma coisinha: você lembra dos truques? Relaxa, é a prova mais fácil da sua vida — e ainda é Dia dos Pais. 🦜",
  },
  {
    kind: "mito",
    afirmacao: "O segredo da IA é achar a ferramenta perfeita.",
    ehVerdade: false,
    comentarioCerto:
      "Isso, capitão! Não é a ferramenta, é o SISTEMA. Quem ganha é quem monta um jeito repetível de trabalhar — não quem tem o app mais bonito.",
    comentarioErrado:
      "Quase! É MITO. Lembra da Bússola: não é a ferramenta, é o sistema. As ferramentas mudam toda semana; o jeito de pensar fica.",
  },
  {
    kind: "escolha",
    pergunta: "Um pedido BOM pra IA leva quais ingredientes?",
    contexto: "A receita que você aprendeu lá no comecinho da travessia.",
    opcoes: [
      {
        texto: "Contexto + objetivo + tom + formato + o que evitar",
        certa: true,
        comentario:
          "Perfeito! É a receita completa. Com esses cinco ingredientes a IA sai do escuro e te entrega exatamente o que você quer.",
      },
      {
        texto: "Palavras difíceis e bem técnicas pra ela te respeitar",
        certa: false,
        comentario:
          "Que nada! A IA não liga pra palavra chique. Ela quer CLAREZA: contexto, objetivo, tom, formato e o que evitar.",
      },
      {
        texto: "Quanto mais curto o pedido, melhor",
        certa: false,
        comentario:
          "Cuidado! Curto demais deixa a IA adivinhando. Dá os cinco ingredientes — contexto, objetivo, tom, formato e o que evitar.",
      },
    ],
  },
  {
    kind: "escolha",
    pergunta: "Você travou e não sabe nem como pedir. E agora?",
    contexto: "Aquela hora em que a folha em branco assusta.",
    opcoes: [
      {
        texto: "Peço pra própria IA montar o pedido pra mim",
        certa: true,
        comentario:
          "Exato! Esse é o truque que salva. Fala o que você quer no português torto mesmo, e pede: 'monta o pedido perfeito pra mim'. Ela faz.",
      },
      {
        texto: "Desisto, isso não é pra mim",
        certa: false,
        comentario:
          "Nem pensar, capitão! O truque é justamente esse: não sabe pedir? Pede pra IA montar o pedido. Folha em branco nunca mais.",
      },
    ],
  },
  {
    kind: "mito",
    afirmacao: "Se você faz a mesma tarefa toda semana, dá pra transformar isso num atalho salvo (uma Skill).",
    ehVerdade: true,
    comentarioCerto:
      "Verdade! Se você REPETE, vira Skill. Ensina a IA uma vez e ela guarda o jeito — igual treinar um tripulante novo. E o Prompt Mágico? Cola sempre no começo da conversa.",
    comentarioErrado:
      "É VERDADE! Tudo que você repete pode virar uma Skill, um atalho salvo. E não esquece de colar o Prompt Mágico no início de cada conversa.",
  },
  {
    kind: "escolha",
    pergunta: "Pra uma DECISÃO grande e séria, qual a jogada certa?",
    contexto: "Tipo escolher um fornecedor, um investimento, um caminho importante.",
    opcoes: [
      {
        texto: "Uso a Pesquisa Profunda e confiro as fontes que ela citar",
        certa: true,
        comentario:
          "Isso, capitão experiente! Decisão grande pede Pesquisa Profunda — e SEMPRE confira as fontes. Você no comando, a IA remando.",
      },
      {
        texto: "Aceito a primeira resposta de olhos fechados",
        certa: false,
        comentario:
          "Devagar! Pra decisão grande, use a Pesquisa Profunda e confira as fontes. A IA ajuda, mas quem dá a última palavra é o capitão.",
      },
      {
        texto: "Ligo pra IA nas minhas ferramentas com acesso total na hora",
        certa: false,
        comentario:
          "Calma com o leme! Connectors a gente sempre começa em SOMENTE-LEITURA — a IA olha, mas não mexe. Segurança primeiro.",
      },
    ],
  },
  {
    kind: "mito",
    afirmacao: "Tudo que você aprendeu aqui só funciona numa IA específica.",
    ehVerdade: false,
    comentarioCerto:
      "Isso mesmo! A habilidade é INTERCAMBIÁVEL. Aprendeu a conversar com a máquina? Serve no Claude, no ChatGPT, no Gemini e em qualquer IA que inventarem. Você está pronto, capitão.",
    comentarioErrado:
      "É MITO, e que bom! O que você aprendeu vale em QUALQUER IA. A habilidade viaja entre todas — não decorou botão, aprendeu a navegar.",
  },
  {
    kind: "premio",
    emoji: "🎓",
    titulo: "Diploma de Navegador de IA! ⚓",
    texto:
      "Conferido com muito orgulho ao capitão: você oficialmente fala a língua das máquinas. Aprendeu a navegar num mar novo — e a maioria nem sai do porto. Feliz Dia dos Pais! 💛",
  },
];

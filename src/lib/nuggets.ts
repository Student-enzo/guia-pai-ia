// "Dicas de Ouro" — nuggets de insider. O jeito que o Enzo pensa, condensado.
export type Nugget = {
  titulo: string;
  corpo: string;
  exemplo?: string;
};

export const NUGGETS: Nugget[] = [
  {
    titulo: "“Você é um [papel]” é a frase mais poderosa da IA",
    corpo:
      "Antes de pedir qualquer coisa, diga quem a IA deve ser. Isso muda o vocabulário e o nível inteiro da resposta.",
    exemplo: "“Você é um capitão experiente explicando pra um cliente leigo…”",
  },
  {
    titulo: "Sempre peça 3 opções, nunca 1",
    corpo:
      "Uma resposta é uma aposta. Três te dão escolha — e a melhor ideia raramente é a primeira que ela gera.",
    exemplo: "“Me dá 3 jeitos diferentes de responder, com prós e contras.”",
  },
  {
    titulo: "Peça a verdade, não o elogio",
    corpo:
      "A IA tende a concordar com você. Pra decisão grande, peça o lado contra também — senão você só ouve o eco da sua voz.",
    exemplo: "“Argumente CONTRA essa ideia. O que pode dar errado?”",
  },
  {
    titulo: "Travou? A própria IA escreve o pedido",
    corpo:
      "Não precisa do pedido perfeito. Joga a ideia torta e diga: ‘transforma isso num pedido bem feito e me mostra antes de fazer’.",
  },
  {
    titulo: "Nunca confie em fato sem conferir",
    corpo:
      "Ela inventa dados com confiança total (chamam de ‘alucinação’). Pra saúde, dinheiro e lei, sempre confirme numa fonte.",
  },
  {
    titulo: "Se você repete, vira atalho (uma Skill)",
    corpo:
      "Colou o mesmo textão pela terceira vez? Salve uma vez e nunca mais reexplique. A IA passa a fazer do seu jeito sozinha.",
  },
];

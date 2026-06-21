/**
 * Configuração central do guia.
 * Troque o nome aqui num lugar só e ele muda no site inteiro.
 */

// 👤 Nome do pai e como ele é chamado nos exercícios.
export const PAI = {
  nome: "Enisson Godoy",
  primeiroNome: "Enisson",
  comoChamar: "Capitão", // apelido carinhoso, no tema náutico
  negocio: "Atlantic Yacht Charter", // o negócio de yacht charter dele
  negocioCurto: "charter de barcos",
};

// 🎨 Paleta — ESCURA estilo Atlantic Yacht Charters (carta náutica noturna).
// Quase-preto com curvas de nível + brilho teal + dados em teal/dourado/verde/coral.
export const C = {
  // superfícies (escuras)
  bg: "#0B0C0E", // base quase-preta (página)
  card: "#15181D", // cartão primário
  card2: "#1E232B", // cartão elevado / inputs
  line: "rgba(255,255,255,0.08)", // bordas
  lineStrong: "rgba(255,255,255,0.14)",

  // tokens escuros legados (fundos profundos, blocos de código, telas de vitória)
  ink: "#0A0B0D", // mais escuro — bg profundo
  inkSoft: "#14171C",
  navy: "#070809",
  paper: "#0B0C0E", // ex-fundo claro → agora base escura
  paper2: "#1E232B", // ex-superfície clara → agora superfície escura elevada
  sky: "#15181D",
  skyDeep: "#0E1013",

  // mar / teal (assinatura AYC, links, destaques)
  sea: "#90C4CF",
  seaDeep: "#5E97A0",
  seaLight: "#B6DCE3",

  // sucesso (verde-mar AYC)
  green: "#4ADE80",
  greenDeep: "#34D399",

  // ouro / XP / nuggets
  brass: "#FBBF24",
  brassLight: "#FCD34D",

  // sol (CTA) e coral (erro)
  sun: "#F7C948",
  sunDeep: "#D4901A",
  coral: "#F87171",
  coralDeep: "#EF4444",
  purple: "#A78BFA",

  // texto (claro sobre escuro)
  text: "#E8ECF1", // corpo (quase branco)
  textMuted: "#94A0AD",
  onDark: "#E8ECF1",
};

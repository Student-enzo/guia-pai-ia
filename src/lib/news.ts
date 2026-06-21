// "O Ritmo da IA" — briefing de insider. Notícias explicadas em português de gente.
// Cor: teal | gold | green | coral | purple. categoria = label-caps.

export type NewsItem = {
  cor: "teal" | "gold" | "green" | "coral" | "purple";
  categoria: string;
  titulo: string;
  resumo: string;
  porque: string; // "por que te importa, capitão"
};

export const NEWS: NewsItem[] = [
  {
    cor: "gold",
    categoria: "modelo · maio 2026",
    titulo: "Claude Opus 4.8 assume o leme",
    resumo:
      "A nova geração da Anthropic ficou mais honesta: admite quando não tem certeza e pega os próprios erros em vez de inventar.",
    porque: "Pra você: menos resposta enrolada, mais confiança no que ela te entrega.",
  },
  {
    cor: "teal",
    categoria: "recurso · o grande salto",
    titulo: "Cowork — a IA trabalha sozinha nos seus arquivos",
    resumo:
      "Você dá um objetivo e ela executa a tarefa inteira: lê seus documentos, organiza, e te devolve pronto. Não é mais pergunta-e-resposta.",
    porque: "Imagine soltar 'organiza a papelada do charter' e voltar com tudo arrumado.",
  },
  {
    cor: "green",
    categoria: "conexões · USB-C da IA",
    titulo: "Connectors ligam a IA nas suas ferramentas",
    resumo:
      "Um clique e a IA passa a ver seu Gmail, sua agenda, seu Drive — e a trabalhar com eles de verdade (começando só na leitura).",
    porque: "Ela para de ser um gênio trancado num quarto e vira seu imediato de bordo.",
  },
  {
    cor: "purple",
    categoria: "agentes · a tripulação",
    titulo: "Swarms: uma frota de IAs em paralelo",
    resumo:
      "Em vez de uma IA fazendo tudo em fila, várias trabalham ao mesmo tempo — cada uma num pedaço — e juntam o resultado.",
    porque: "O que levaria horas de uma pessoa, a frota faz em segundos.",
  },
  {
    cor: "teal",
    categoria: "velocidade · esforço sob controle",
    titulo: "Você escolhe o quanto a IA 'pensa'",
    resumo:
      "Do modo rápido ao máximo: pergunta simples não gasta o canhão; decisão de negócio vale subir o esforço.",
    porque: "Mais controle no leme — rápido quando dá, profundo quando importa.",
  },
  {
    cor: "gold",
    categoria: "o mar inteiro",
    titulo: "A habilidade viaja entre todas as IAs",
    resumo:
      "Claude, ChatGPT, Gemini — barcos diferentes pro mesmo mar. O jeito de conversar que você aprende aqui serve em qualquer uma.",
    porque: "Você não decora um botão; aprende a navegar. Isso não sai de moda.",
  },
];

// "O Universo da IA" — notícias e conceitos explicados em português de gente.

export type NewsItem = {
  cor: "teal" | "gold" | "green" | "coral" | "purple";
  categoria: string;
  titulo: string;
  resumo: string;
  porque: string;
};

export const NEWS: NewsItem[] = [
  {
    cor: "gold",
    categoria: "modelos · 2026",
    titulo: "Claude 4.8, GPT-4o e Gemini 2.0 Flash — os novos cérebros",
    resumo: "As três grandes IAs lançaram versões mais honestas, rápidas e capazes. Claude admite quando não sabe. GPT conecta em tempo real. Gemini integra todo o Google.",
    porque: "Você não precisa escolher só uma. O que você aprende em qualquer uma serve em todas — a habilidade é universal.",
  },
  {
    cor: "teal",
    categoria: "autonomia · a virada",
    titulo: "IA que trabalha sozinha nos seus arquivos",
    resumo: "Você dá um objetivo, ela executa a tarefa inteira: lê documentos, organiza, analisa, redige, e te devolve pronto. Não é mais pergunta-e-resposta — é delegação de verdade.",
    porque: "Imagine falar 'organiza toda a documentação de contratos deste mês' e voltar com tudo arrumado.",
  },
  {
    cor: "green",
    categoria: "conexões · mcp",
    titulo: "MCP: o USB-C que conecta qualquer IA em qualquer app",
    resumo: "MCP (Model Context Protocol) é um padrão aberto que permite à IA se conectar diretamente nos seus aplicativos — Gmail, Calendar, Drive, Slack, bancos de dados.",
    porque: "A IA para de ser um chatbot isolado e vira um assistente que realmente acessa e trabalha nos seus sistemas.",
  },
  {
    cor: "purple",
    categoria: "agentes · o futuro",
    titulo: "Swarms: uma frota de IAs trabalhando em paralelo",
    resumo: "Em vez de uma IA em fila, dezenas trabalham simultâneo — uma pesquisa, outra redige, outra revisa — e entregam o resultado completo em segundos.",
    porque: "O que levaria horas de uma pessoa, o swarm faz em minutos. Delegação em escala.",
  },
  {
    cor: "teal",
    categoria: "controle · esforço",
    titulo: "Você decide o quanto a IA 'pensa'",
    resumo: "Do modo rápido ao máximo: perguntas simples não gastam o canhão. Decisão de negócio? Sobe o esforço e ela raciocina fundo antes de responder.",
    porque: "Mais controle no leme — rápido quando dá, profundo quando importa.",
  },
  {
    cor: "gold",
    categoria: "habilidade · universal",
    titulo: "O que você aprende aqui serve em qualquer IA",
    resumo: "Claude, ChatGPT, Gemini — barcos diferentes pro mesmo mar. A habilidade de dar boas instruções, criar contexto e delegar tarefas serve em todas elas.",
    porque: "Você não aprende um produto, aprende a navegar. Isso não sai de moda.",
  },
];

// Conceitos do universo da IA — explicados para quem nunca viu isso antes.
export type Conceito = {
  emoji: string;
  titulo: string;
  categoria: string;
  cor: "teal" | "gold" | "green" | "coral" | "purple";
  oQueE: string;
  analogia: string;
  naPratica: string;
  ias: string[];
};

export const CONCEITOS: Conceito[] = [
  {
    emoji: "💬",
    titulo: "Chat de IA",
    categoria: "o básico — por onde todo mundo começa",
    cor: "teal",
    oQueE: "É a janela de conversa que você já conhece. Você escreve em português, a IA responde. Funciona em claude.ai, chat.openai.com, gemini.google.com.",
    analogia: "Igual WhatsApp, mas do outro lado tem uma IA superinteligente que sabe de tudo, nunca se cansa e nunca fica de mau humor.",
    naPratica: "Você digita: 'Escreve um email confirmando reserva do veleiro pra sábado, tom caloroso e profissional.' Em 10 segundos você tem o email perfeito. Só copiar e colar.",
    ias: ["Claude", "ChatGPT", "Gemini"],
  },
  {
    emoji: "📁",
    titulo: "Projetos & Memória",
    categoria: "organização — a IA aprende sobre você",
    cor: "purple",
    oQueE: "Um Projeto é um espaço onde você guarda documentos, instruções e contexto sobre um assunto. A IA usa tudo isso em cada conversa dentro do projeto — ela não esquece.",
    analogia: "É como contratar um funcionário e dar a pasta completa do negócio pra ele ler no primeiro dia. Dali pra frente ele já sabe tudo — nunca mais você explica do zero.",
    naPratica: "Cria um Projeto 'Atlantic Yacht Charter'. Coloca lá: lista de barcos, preços, tom de comunicação, perfil dos clientes VIP. Toda conversa nesse Projeto começa sabendo tudo isso.",
    ias: ["Claude", "ChatGPT"],
  },
  {
    emoji: "🔌",
    titulo: "MCP — O USB-C da IA",
    categoria: "conexões — ligar a IA nos seus sistemas",
    cor: "green",
    oQueE: "MCP (Model Context Protocol) é um padrão que permite à IA se conectar diretamente a qualquer aplicativo — Gmail, Calendar, Drive, banco de dados, sistema interno. Um padrão, infinitas conexões.",
    analogia: "Antes de USB-C, cada aparelho tinha um cabo diferente — uma bagunça. USB-C padronizou tudo. MCP fez o mesmo pra IA: um padrão único que conecta em qualquer sistema.",
    naPratica: "Com MCP, você fala: 'Vê meu Gmail, encontra todos os clientes com email sem resposta essa semana e me dá um resumo com prioridades.' A IA lê seu email de verdade e executa.",
    ias: ["Claude"],
  },
  {
    emoji: "🔗",
    titulo: "Connectors — Ligar nos Seus Apps",
    categoria: "conexões — um clique e a IA acessa tudo",
    cor: "gold",
    oQueE: "Connectors são ligações prontas entre a IA e seus aplicativos mais usados. Gmail, Google Calendar, Google Drive, Slack, Notion — você ativa com um clique e a IA começa a trabalhar com eles.",
    analogia: "É como dar as chaves de casa pra um mordomo de confiança. Ele pode entrar, buscar, organizar e trazer exatamente o que você precisa — sem você mexer um dedo.",
    naPratica: "Ativa o Connector do Google Calendar. Agora você pergunta: 'Tenho alguma janela livre de 2h essa semana pra inspeção do barco?' A IA vê sua agenda real e te diz exatamente quando.",
    ias: ["Claude", "ChatGPT", "Gemini"],
  },
  {
    emoji: "⌨️",
    titulo: "Claude Code — A IA na Linha de Comando",
    categoria: "avançado — o mais poderoso de todos",
    cor: "teal",
    oQueE: "O terminal (ou CLI) é uma janela preta onde você conversa com o computador por texto, sem clique nenhum. Claude Code é a versão do Claude que vive lá dentro — ela pode criar e modificar qualquer arquivo do seu computador.",
    analogia: "Imagina ter um engenheiro de elite morando dentro do seu computador. Você descreve o que quer em português e ele constrói — site, sistema, automação, tudo.",
    naPratica: "Esse guia que você está lendo foi criado assim. O Enzo abriu o terminal, disse 'faz um guia de IA gamificado pro meu pai' e o Claude Code construiu esse site inteiro — design, código, conteúdo.",
    ias: ["Claude"],
  },
  {
    emoji: "⚙️",
    titulo: "Skills & Harnesses — Atalhos Treinados",
    categoria: "superpoderes — você ensina uma vez, ela faz pra sempre",
    cor: "coral",
    oQueE: "Uma Skill é um conjunto de instruções salvas que define exatamente como a IA deve se comportar numa situação específica. Você cria uma vez com um nome e chama quando precisar.",
    analogia: "Você treina um marinheiro novo só UMA vez no protocolo do barco. Depois é só ligar: 'faz o procedimento de atracagem' e ele executa perfeito. Skill é isso — treinamento gravado para sempre.",
    naPratica: "Você cria uma Skill 'Relatório Semanal'. Todo domingo você digita esse nome e ela monta automaticamente: clientes da semana, receita, pendências, próximas reservas — no seu formato exato.",
    ias: ["Claude", "ChatGPT"],
  },
  {
    emoji: "🐝",
    titulo: "Agents & Swarms — A Tripulação de IAs",
    categoria: "o futuro — várias IAs trabalhando ao mesmo tempo",
    cor: "purple",
    oQueE: "Um Agent é uma IA que toma decisões e executa tarefas por conta própria. Um Swarm é várias delas trabalhando em paralelo — cada uma numa parte diferente — e entregando tudo junto.",
    analogia: "É uma tripulação de navio: navegador cuida da rota, maquinista do motor, cozinheiro da galinha — todos ao mesmo tempo, sem um esperar o outro. Swarm é isso, mas de IAs.",
    naPratica: "Você pede: 'Monta proposta completa pro grupo que quer alugar o veleiro por 3 dias.' O Swarm: uma IA pesquisa preços do mercado, outra cria o itinerário, outra escreve o email — tudo em 30 segundos.",
    ias: ["Claude"],
  },
];

// As IAs do mercado — quem é quem
export type IAItem = {
  emoji: string;
  nome: string;
  fabricante: string;
  cor: string;
  descricao: string;
  diferenciais: string[];
};

export const AIS: IAItem[] = [
  {
    emoji: "🤖",
    nome: "Claude",
    fabricante: "Anthropic",
    cor: "#90C4CF",
    descricao: "A IA mais honesta e cuidadosa. Excelente em textos longos, raciocínio profundo e análise delicada. Criada com foco em segurança.",
    diferenciais: ["Honesta sobre o que não sabe", "Contexto de conversa longo", "Melhor em textos e análise"],
  },
  {
    emoji: "💬",
    nome: "ChatGPT",
    fabricante: "OpenAI",
    cor: "#4ADE80",
    descricao: "A IA mais famosa do mundo. Versátil, rápida e com busca na internet em tempo real. A mais conhecida entre o público geral.",
    diferenciais: ["Busca na web em tempo real", "Enorme biblioteca de GPTs", "Interface mais familiar"],
  },
  {
    emoji: "✨",
    nome: "Gemini",
    fabricante: "Google",
    cor: "#FBBF24",
    descricao: "A IA do Google. Integra naturalmente com Gmail, Docs, Drive e toda a suíte Google. Excelente pra quem já usa o ecossistema Google.",
    diferenciais: ["Integrado ao Google Workspace", "Acesso a histórico do Gmail e Drive", "Multimodal (voz, imagem, texto)"],
  },
];

import { Step } from "../types";

// MODULO 4: Skills e Comandos "/" (licao pratica, mao na massa)
export const skills: Step[] = [
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Ensine uma vez, nunca mais repita 🧰",
    texto:
      "Capitão, imagina um marinheiro novo. Na primeira vez você ensina a amarrar o barco no cais. Na décima vez, cansa, né? Hoje você vai aprender a ensinar a IA UMA vez só e nunca mais explicar. E não é só num app: vale pra qualquer IA. Bora pôr a mão na massa.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 1: o textão que você repete",
    missao: "Abra sua IA e mande um pedido que você já fez várias vezes este mês, com toda a explicação que você sempre cola junto. Por exemplo, um email de confirmação de passeio. Repare no tamanho do texto que você teve que escrever.",
    ondeFazer: "no Claude.ai, ChatGPT ou Gemini",
    prompt:
      "Você é meu assistente do Atlantic Yacht Charter. Escreva um email caloroso confirmando o passeio do cliente: nome, dia, horário, barco Atlantis II, número de pessoas. Tom profissional e amigável, sem inventar preço. Curto, 4 linhas. Cliente: João, domingo 9h, 6 pessoas.",
    pergunta: "E aí, deu trabalho escrever toda essa explicação de novo?",
    resultados: [
      {
        rotulo: "Tive que explicar tudo outra vez",
        reacao: "Pois é! E você vai fazer isso de novo na semana que vem, e na outra. Toda vez o mesmo textão. Guarda essa sensação de cansaço, porque o próximo passo acaba com ela pra sempre.",
        ideal: true,
      },
      {
        rotulo: "Colei de uma conversa antiga",
        reacao: "Esperto! Mas procurar a conversa antiga, copiar, colar, isso ainda é trabalho. Dá pra ter o pedido SALVO num lugar fixo, pronto pra chamar. É o que vem agora.",
        ideal: true,
      },
      {
        rotulo: "O email saiu bonito!",
        reacao: "Saiu mesmo! Mas o ponto não é o email, é a explicação que você teve que escrever pra chegar nele. Imagina não precisar nunca mais digitar tudo isso. Segura essa ideia.",
      },
    ],
    fechamento: "Tô cansado de repetir, me ajuda →",
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "A regra de ouro 🪙",
    texto:
      "Se você repete o mesmo tipo de pedido, PARE de repetir. Salve uma vez como um comportamento reutilizável, dê um nome, e depois é só chamar. Tem nome chique: skill (comportamento salvo). E o melhor: toda IA grande tem o jeito dela de fazer isso.",
  },
  {
    kind: "vocab",
    termo: "Skill (comportamento salvo)",
    significado:
      "Um conjunto de instruções que você ensina UMA vez à IA e guarda com um nome. Depois é só chamar pelo nome, sem reexplicar. Cada IA tem o apelido dela: no Claude.ai chama Skill, no ChatGPT chama GPT, no Gemini chama Gem.",
    insider:
      "Você agora sabe que Skill, GPT e Gem são a MESMA ideia com nomes diferentes. Muita gente acha que são coisas separadas. Você não cai nessa.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 2: crie seu primeiro comportamento salvo",
    missao:
      "Hora de criar de verdade, sem terminal nenhum, tudo no clique. Escolha o caminho da SUA IA: no Claude.ai abra o menu e procure Skills. No ChatGPT abra Explorar GPTs e clique em Criar. No Gemini abra Gems e clique em Novo Gem. Crie um chamado 'Email de Confirmação' e cole as instruções de confirmar passeios do charter.",
    ondeFazer: "Claude.ai (Skills), ChatGPT (Criar GPT) ou Gemini (Gems)",
    prompt:
      "Você é o assistente de confirmações do Atlantic Yacht Charter. Sempre que eu te der nome do cliente, dia, horário e número de pessoas, escreva um email caloroso e profissional confirmando o passeio no barco Atlantis II. Tom amigável, 4 linhas, nunca invente preço nem detalhe que eu não dei.",
    pergunta: "Conseguiu salvar seu comportamento com nome e tudo?",
    resultados: [
      {
        rotulo: "Salvei! Já aparece na lista",
        reacao: "ISSO, capitão! Você acabou de ensinar a IA pra sempre, sem digitar uma linha de código. Esse comportamento agora mora lá, esperando você chamar. Bem-vindo ao clube dos que delegam de verdade.",
        ideal: true,
      },
      {
        rotulo: "Achei o menu mas vou terminar depois",
        reacao: "Perfeito, o importante é que você ACHOU o caminho. Skills no Claude, Criar GPT no ChatGPT, Gems no Gemini. Quando voltar, é só colar as instruções e dar o nome. O baú já está aberto.",
        ideal: true,
      },
      {
        rotulo: "Me perdi no menu",
        reacao: "Calma, é normal na primeira vez. Dica de ouro: pergunte pra própria IA 'onde eu crio uma Skill aqui?' (ou GPT, ou Gem). Ela te guia clique a clique. A IA é o seu manual.",
      },
    ],
    fechamento: "Criei meu primeiro comportamento →",
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "O segredo está na DESCRIÇÃO 📝",
    texto:
      "Quando você cria uma Skill, GPT ou Gem, o campo mais importante é a descrição: é por ela que a IA decide sozinha quando usar. Capriche aqui. 'Use isto sempre que eu pedir um email de confirmação de passeio.' Quanto mais clara a descrição, mais a IA te obedece sem você nem chamar pelo nome.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 3: REUSE o que você salvou",
    missao:
      "Agora a parte mágica. Volte e chame o comportamento que você criou. No ChatGPT/Gemini, abra o seu GPT ou Gem e mande só os dados, sem explicar nada. No Claude.ai, é só pedir e a Skill entra sozinha. Mande: 'Maria, sábado, 14h, 4 pessoas'. Só isso.",
    ondeFazer: "na sua Skill, GPT ou Gem recém-criado",
    prompt: "Maria, sábado, 14h, 4 pessoas.",
    pergunta: "Com tão pouca coisa, o que a IA te entregou?",
    resultados: [
      {
        rotulo: "Veio o email completo, do meu jeito!",
        reacao: "SENTIU O PODER, capitão? Você escreveu cinco palavras e veio um email inteiro, com o seu tom, do seu charter. A explicação ficou salva. Isso é trabalho de uma vez que rende pra sempre.",
        ideal: true,
      },
      {
        rotulo: "Veio bom, mas ajustei uma coisa",
        reacao: "Perfeito! E aqui vai o truque: volte na Skill e melhore a instrução. Ajustou uma vez, fica ajustado pra todas as próximas. Você está esculpindo um assistente do seu jeitinho.",
        ideal: true,
      },
      {
        rotulo: "Não puxou as instruções salvas",
        reacao: "Acontece. Confira se você está DENTRO do GPT/Gem que criou (não numa conversa nova qualquer), ou se a descrição da Skill está clara. Ajeitou a descrição, ela passa a entrar sozinha.",
      },
    ],
    fechamento: "Reusei e economizei tempo →",
  },
  {
    kind: "simulador",
    titulo: "Um comportamento salvo trabalhando 🧰",
    instrucao:
      "Imagina que você salvou a sua 'Voz do Capitão'. Agora é só chamar, sem reexplicar nada. Toque e veja.",
    pedidos: [
      {
        rotulo: "Voz do Capitão: post do passeio ao pôr do sol",
        etiqueta: "comportamento salvo",
        bom: true,
        resposta:
          "🌅 Pôr do sol no mar não se explica, se vive. Suba a bordo do Atlantis II e deixe o céu fazer o show enquanto a gente cuida do resto. Vagas pra esta semana, chama no direct! ⛵\n\n(saiu já no SEU tom, sem você reexplicar nada)",
      },
    ],
    sucesso:
      "Uma vez salvo, o comportamento repete o seu jeito pra sempre. Email, post, resposta de WhatsApp: cada repetição vira uma Skill.",
  },
  {
    kind: "experimento",
    titulo: "Experimento 4: ache os comandos / (bônus)",
    missao:
      "Esse é pra quem usa o app de computador. Na caixa de escrever, digite só uma barra: /. Em apps que têm isso (como o Claude no computador), abre um menu de atalhos prontos. Não tem? Sem problema, suas Skills e GPTs já são o seu menu de superpoderes.",
    ondeFazer: "na caixa de mensagem da sua IA",
    pergunta: "Apareceu algum menu quando você digitou a barra?",
    resultados: [
      {
        rotulo: "Apareceu um menu de comandos!",
        reacao: "Olha o baú! Esses são atalhos prontos. Role e leia os nomes. Você nunca precisa decorar, é só digitar / e espiar. E lembre: se um comando da internet não aparece aqui, ele provavelmente não existe.",
        ideal: true,
      },
      {
        rotulo: "Não apareceu nada",
        reacao: "Tudo certo! Nem todo app tem a barra /. O que importa de verdade você já tem: o comportamento salvo (Skill, GPT ou Gem) que criou hoje. Esse é o superpoder que vale em qualquer IA.",
        ideal: true,
      },
    ],
    fechamento: "Espiei o menu de atalhos →",
  },
  {
    kind: "praticar",
    titulo: "Sua próxima Skill, hoje",
    intro:
      "Pense numa tarefa que você repete toda semana no charter. Vamos transformá-la num comportamento salvo agora.",
    passos: [
      "Pense num pedido que você cola na IA toda semana (resposta de orçamento, post, lembrete).",
      "Abra Skills (Claude.ai), Criar GPT (ChatGPT) ou Gems (Gemini).",
      "Dê um nome claro e cole suas instruções de sempre.",
      "Capriche na descrição: diga QUANDO a IA deve usar isso.",
      "Teste mandando só os dados, sem reexplicar. Veja a mágica.",
    ],
    prompt:
      "Você é meu assistente do Atlantic Yacht Charter. Sempre que eu pedir [TIPO DE TAREFA], faça assim: [SUAS INSTRUCOES DE SEMPRE]. Tom caloroso e profissional. Nunca invente informacao que eu nao dei.",
    fechamento:
      "Cada coisa que você repete merece virar Skill. Ensine uma vez, colha pra sempre.",
  },
  {
    kind: "tesouro",
    titulo: "Tesouro: o molde da Skill perfeita",
    texto:
      "Cole este molde ao criar qualquer Skill, GPT ou Gem. Troque os [colchetes] e a IA já sabe quem ser, o que fazer e quando agir.",
    prompt:
      "QUEM VOCE E:\nMeu assistente do Atlantic Yacht Charter (charter de barcos de luxo).\n\nQUANDO USAR ISTO:\nSempre que eu pedir [TIPO DE TAREFA, ex: email de confirmacao].\n\nO QUE FAZER:\n[PASSO A PASSO DO JEITO QUE VOCE QUER]\n\nREGRAS:\n- Tom caloroso e profissional.\n- Nunca invente preco nem detalhe que eu nao dei.\n- Seja curto e pronto pra usar.",
  },
  {
    kind: "premio",
    emoji: "🗝️",
    titulo: "Você ganhou a Chave dos Atalhos!",
    texto:
      "Você não decorou teoria: você FEZ. Sentiu o cansaço de repetir, criou um comportamento salvo (Skill, GPT ou Gem), reusou com cinco palavras e ainda espiou os comandos /. Agora você não é só capitão: é capitão que ensina a IA uma vez e nunca mais repete. ⚓",
  },
];

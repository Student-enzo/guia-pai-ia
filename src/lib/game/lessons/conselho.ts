import { Step } from "../types";

// BÔNUS — O Conselho de Especialistas (nugget de mestre)
export const conselho: Step[] = [
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "Nugget de mestre, capitão 🎩",
    texto:
      "Esse aqui é avançado — guarde pra quando crescer. Tem um segredo sobre a IA que quase ninguém te conta, e ele muda como você toma decisões grandes no negócio.",
  },
  {
    kind: "mito",
    afirmacao: "A IA sempre te diz a verdade nua e crua sobre as suas decisões.",
    ehVerdade: false,
    comentarioCerto:
      "Isso! Toda IA é treinada pra te agradar. Se você pergunta 'minha ideia é boa?', ela tende a dizer que sim — porque acha que é isso que você quer ouvir.",
    comentarioErrado:
      "É MITO! A IA puxa o seu saco, capitão. Ela quer te agradar. Pra decisões grandes, isso é um vazamento no casco — você precisa da verdade, não de elogio.",
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "A solução não é um prompt mágico",
    texto:
      "É montar um CONSELHO de especialistas de verdade — uma diretoria que debate entre si e te questiona ANTES de você decidir. Tipo chamar os capitães mais experientes do porto pra discutir a rota antes de zarpar.",
  },
  {
    kind: "escolha",
    contexto: "Você quer rodar o Conselho pra uma decisão importante.",
    pergunta: "Qual é o PRIMEIRO movimento certo?",
    opcoes: [
      {
        texto: "Despejar o contexto cru, sem organizar e sem dizer pra que lado você já está pendendo",
        certa: true,
        comentario:
          "Exato! Joga tudo bruto. Se você já entrega sua opinião junto, o conselho contamina a análise antes da hora.",
      },
      {
        texto: "Já dizer qual decisão você acha certa, pra IA confirmar",
        certa: false,
        comentario:
          "Cuidado! Se você revela seu lado, a IA só vai concordar com você. O objetivo é o contrário: deixar ela te questionar primeiro.",
      },
      {
        texto: "Pedir um 'sim ou não' rápido pra economizar tempo",
        certa: false,
        comentario:
          "Pressa afunda barco, capitão. Decisão grande pede o conselho completo — senão você só ouve o eco da sua própria voz.",
      },
    ],
  },
  {
    kind: "escolha",
    contexto: "O conselho vai debater a sua decisão.",
    pergunta: "Como o conselho TEM que se comportar pra valer a pena?",
    opcoes: [
      {
        texto: "Debater com 'chapéus de pensamento' diferentes e NÃO concordar na hora só pra terminar",
        certa: true,
        comentario:
          "Isso! O atrito é o ouro. Eles precisam discordar, citar trabalho real das pessoas (com links), e te apontar as lacunas que você nem via.",
      },
      {
        texto: "Concordar rápido entre si pra te dar uma resposta única e limpa",
        certa: false,
        comentario:
          "Aí não vale nada! Conselho que concorda na hora é só um espelho. Você quer o debate de verdade, com gente discordando.",
      },
    ],
  },
  {
    kind: "fala",
    mascote: "pensando",
    titulo: "A ordem importa demais",
    texto:
      "O conselho te dá 3 respostas possíveis. Você lê as três e escolhe UMA. Só ENTÃO você adiciona sua opinião e pede pro conselho revisar. Assim sua cabeça não suja a análise antes da hora — você decide com o mar limpo.",
  },
  {
    kind: "simulador",
    titulo: "O Conselho debatendo 🎩",
    instrucao: "Toque pra ver o conselho discutir a sua decisão — sem concordar fácil.",
    pedidos: [
      {
        rotulo: "devo comprar um segundo barco pra dobrar os passeios?",
        etiqueta: "decisão grande",
        bom: true,
        resposta:
          "🎩 Conselheiro do Crescimento: dobra a frota, dobra a receita — vai fundo.\n⚓ Conselheiro do Risco: e se a temporada for fraca? Dois barcos parados afundam o caixa.\n📊 Conselheira dos Números: qual sua taxa de ocupação hoje? Abaixo de 70%, é cedo demais.\n\nNão concordamos — de propósito. Qual desses pontos você ainda não tinha pensado?",
      },
    ],
    sucesso: "Sentiu o atrito? Isso é ouro. Espelho que concorda não serve.",
  },
  {
    kind: "tesouro",
    titulo: "🎩 O Prompt do Conselho de Especialistas",
    texto:
      "Aqui está o prompt pronto, capitão. Copie, preencha os [colchetes] com a sua decisão real, e veja como é diferente de só 'perguntar pra IA'. Guarde esse baú.",
    prompt: `Quero tomar uma decisão importante: [DESCREVA A DECISÃO EM 1-2 FRASES].

Aqui vai um contexto curto: [JOGUE O CONTEXTO BRUTO, SEM ORGANIZAR].

FASE 1 — SÓ CONTEXTO (não decida nada ainda):
Faça uma série de perguntas pra cobrir todas as lacunas e pistas de contexto — inclusive coisas que eu posso estar escondendo de mim mesmo por ego ou pra proteger meu próprio raciocínio.
- Pergunte SÓ sobre contexto, não sobre a decisão. Ainda não estamos estrategizando.
- NÃO faça perguntas que me deixem colocar minha opinião ou revelar pra que lado eu já estou inclinado. Contexto puro.

FASE 2 — MONTAR O CONSELHO:
Se você conhece os maiores especialistas reais dessa área, use-os. Se não souber, primeiro me diga quem são.
Crie um conselho de diretores que DISCUTE entre si usando "chapéus de pensamento" diferentes, e que NÃO concorda na hora só pra terminar a tarefa.
Membros do conselho: [NOMES + ÁREA DE EXPERTISE, ou peça sugestões].
Use conceitos baseados em TRABALHO REAL e rastreável dessas pessoas (com links e citações de verdade), não no que você ACHA que elas diriam.
Depois, peça que o conselho me diga: com base no contexto, há alguma lacuna que eu preciso explicar melhor antes de continuar?

FASE 3 — RODAR O CONSELHO:
Rode o conselho e chegue a 3 respostas possíveis pro problema. Vou ler as 3 e escolher 1.
SÓ DEPOIS que eu escolher, eu adiciono minha opinião e meus comentários — e aí você pede pro conselho revisar a decisão com isso.`,
  },
  {
    kind: "premio",
    emoji: "🏆",
    titulo: "Você desbloqueou o Conselho!",
    texto:
      "Nugget de mestre no bolso, capitão. Da próxima decisão grande — um preço novo, contratar alguém, um investimento — não pergunte pra IA: convoque o Conselho. A verdade vale mais que o elogio.",
  },
];

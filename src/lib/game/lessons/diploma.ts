import { Step } from "../types";

// MODULO 8 (final) - A Formatura (licao pratica, volta da vitoria)
// Ilha celebratoria: em vez de quiz, o capitao faz uma volta da vitoria
// juntando tudo na pratica. Termina com o Diploma de Navegador de IA.
export const diploma: Step[] = [
  {
    kind: "fala",
    mascote: "festa",
    titulo: "Chegamos no porto, capitão! 🎉",
    texto:
      "Você atravessou o guia inteiro. Sem prova chata: a formatura é uma volta da vitória, fazendo de verdade tudo que você aprendeu. Bora fechar com chave de ouro. 🦜",
  },
  {
    kind: "fala",
    mascote: "feliz",
    titulo: "Tudo que você carrega agora",
    texto:
      "Olha o tamanho do que você aprendeu: não é a ferramenta, é o sistema. Pedido bom tem contexto, objetivo, tom, formato e o que evitar. Travou? A IA monta o pedido. Repetiu? Vira Skill. Decisão grande? Conselho e fontes. E tudo isso funciona em QUALQUER IA.",
  },
  {
    kind: "construir",
    instrucao:
      "Volta da vitória 1: monte um pedido perfeito de uma vez só. Papel, Tarefa, Contexto, Formato, e envie.",
    blocos: [
      { etiqueta: "PAPEL", texto: "Você é meu assistente do charter", cor: "#B0894F" },
      { etiqueta: "TAREFA", texto: "escreva um anúncio", cor: "#6FA8AD" },
      { etiqueta: "CONTEXTO", texto: "do passeio ao pôr do sol de sábado, poucas vagas", cor: "#4A9B7F" },
      { etiqueta: "FORMATO", texto: "curto e animado pro Instagram", cor: "#8A6FB0" },
    ],
    resposta:
      "🌅 Sábado tem magia: passeio ao pôr do sol, mar calmo e o céu pegando fogo de laranja. Poucas vagas, garanta a sua e venha ver o dia se despedir do melhor lugar. ⛵ #charter #pordosol",
    sucesso: "Pedido perfeito, de primeira. Formatura merecida! 🎓",
  },
  {
    kind: "experimento",
    titulo: "Volta da vitória 2: você sozinho, do zero",
    missao: "Sem ajuda dos blocos agora. Abra uma IA, pense numa tarefa real do charter pra hoje, e escreva o pedido inteiro do seu jeito, com contexto. Mande e veja o resultado.",
    ondeFazer: "no ChatGPT, Claude ou Gemini",
    pergunta: "E aí, capitão, como foi voar sozinho?",
    resultados: [
      {
        rotulo: "Saiu ótimo, fiz sem pensar muito",
        reacao: "É ESSA a sensação de formatura, capitão! O que era assustador virou natural. Você não decorou, você APRENDEU. Tô orgulhoso demais.",
        ideal: true,
      },
      {
        rotulo: "Deu certo, dei uns ajustes no caminho",
        reacao: "Perfeito! Ajustar conversando é exatamente o jeito profissional de usar IA. Você está no comando do leme, e isso não tem mais volta.",
        ideal: true,
      },
      {
        rotulo: "Ainda olho o tesouro pra me guiar",
        reacao: "E não tem problema nenhum! Capitão experiente também consulta a carta de navegação. O que importa é que você sabe o caminho. A prática faz o resto.",
      },
    ],
    fechamento: "Voei sozinho! Quero meu prêmio →",
  },
  {
    kind: "bau",
    titulo: "Seu presente de formatura",
    intro:
      "Você atravessou o mar inteiro, capitão. Abra o baú: tem um prompt de presente lá dentro. E cada vez que voltar, sai um diferente.",
    tesouros: [
      { nota: "🎁 O resumidor de email", prompt: "Resuma este email em 3 tópicos curtos e me diga se precisa de resposta urgente:\n[cole o email]" },
      { nota: "🎁 O tradutor de bordo", prompt: "Traduza esta mensagem pro inglês, tom caloroso e profissional, pronta pra mandar pro hóspede:\n[cole a mensagem]" },
      { nota: "🎁 O planejador de post", prompt: "Você é meu social media. Crie 3 legendas curtas e animadas pro Instagram do passeio de [DIA], com 1 emoji cada e uma chamada pra reservar." },
      { nota: "🎁 O conselheiro franco", prompt: "Me dê o melhor argumento A FAVOR e o melhor CONTRA [sua decisão], sem puxar meu saco, e depois sua opinião sincera." },
    ],
    sucesso: "Guardado! Volte sempre, o baú dá um tesouro diferente cada vez.",
  },
  {
    kind: "premio",
    emoji: "🎓",
    titulo: "Diploma de Navegador de IA! ⚓",
    texto:
      "Conferido com muito orgulho ao capitão: você oficialmente fala a língua das máquinas. Aprendeu a navegar num mar novo, e a maioria nem sai do porto. Feliz Dia dos Pais! 💛",
  },
];

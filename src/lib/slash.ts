// Comandos "/" — o baú de superpoderes. Explicado em português de gente.
export type Slash = { cmd: string; oQueFaz: string; saida: string };

export const SLASHES: Slash[] = [
  { cmd: "/help", oQueFaz: "Mostra TUDO que existe. Perdeu? Digite isso primeiro.", saida: "Listando todos os comandos disponíveis na sua sessão… (é a fonte da verdade)" },
  { cmd: "/clear", oQueFaz: "Limpa a conversa e começa do zero — quando ela embolou os assuntos.", saida: "Conversa limpa. Memória zerada. Pode recomeçar, capitão. 🧹" },
  { cmd: "/compact", oQueFaz: "Resume uma conversa longa pra liberar espaço sem perder o fio.", saida: "Histórico comprimido num resumo. Espaço liberado, contexto preservado. ✅" },
  { cmd: "/model", oQueFaz: "Troca o 'cérebro' da IA — mais rápido, ou mais esperto.", saida: "Escolha o modelo: rápido (leve) ↔ máximo (raciocínio profundo)." },
  { cmd: "/effort", oQueFaz: "Ajusta o quanto a IA pensa: do rápido ao máximo.", saida: "Esforço definido. Pergunta simples = rápido; decisão grande = máximo. ⚙️" },
  { cmd: "/plan", oQueFaz: "Ela te mostra o PLANO antes de fazer. Você confere, depois ela executa.", saida: "Aqui está minha abordagem antes de mexer em qualquer coisa: 1)… 2)… Aprova?" },
  { cmd: "/deep-research", oQueFaz: "Pesquisa pesada com fontes — pra decisão grande, não pergunta rápida.", saida: "Soltando a tripulação: lendo dezenas de fontes, montando relatório com citações… 🔍" },
  { cmd: "/schedule", oQueFaz: "Tarefa que roda sozinha — ex: um briefing toda manhã.", saida: "Tarefa agendada. Vai rodar sozinha no horário marcado. ⏰" },
];

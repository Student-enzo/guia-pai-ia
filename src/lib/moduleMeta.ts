/**
 * Metadados dos módulos (dados puros, sem componentes).
 * Alimenta o mapa de jornada (/) e as páginas individuais (/modulo/[slug]).
 * A ordem aqui é a ordem visual da jornada.
 */
import { ModuleId } from "./progress";
import { IMG_IDS } from "./images";

export type ModMeta = {
  slug: string;
  moduleId: ModuleId | "conselho"; // "conselho" é bônus (não trava nada)
  num: string; // rótulo mostrado (ex "0", "1", "★")
  emoji: string;
  titulo: string;
  subtitulo: string;
  imgId: number;
  isBonus?: boolean;
  /** quantos desafios o módulo tem (pra mostrar XP no mapa) */
  desafios: number;
};

export const MODULOS: ModMeta[] = [
  {
    slug: "intro",
    moduleId: "intro",
    num: "0",
    emoji: "🧭",
    titulo: "O Grande Segredo",
    subtitulo: "Não é a ferramenta, é o sistema.",
    imgId: IMG_IDS.intro,
    desafios: 1,
  },
  {
    slug: "prompting",
    moduleId: "prompting",
    num: "1",
    emoji: "💬",
    titulo: "Falar com a IA",
    subtitulo: "A receita do pedido perfeito.",
    imgId: IMG_IDS.prompting,
    desafios: 2,
  },
  {
    slug: "metaprompt",
    moduleId: "metaprompt",
    num: "2",
    emoji: "🎩",
    titulo: "A IA te ajuda a pedir",
    subtitulo: "Deixe a IA escrever o pedido por você.",
    imgId: IMG_IDS.metaprompt,
    desafios: 1,
  },
  {
    slug: "harness",
    moduleId: "harness",
    num: "3",
    emoji: "🪄",
    titulo: "O Prompt Mágico",
    subtitulo: "Cole uma vez e a IA vira sua professora.",
    imgId: IMG_IDS.harness,
    desafios: 1,
  },
  {
    slug: "conselho",
    moduleId: "conselho",
    num: "★",
    emoji: "⚖️",
    titulo: "O Conselho de Especialistas",
    subtitulo: "Bônus de mestre: decisões sem puxa-saquismo.",
    imgId: IMG_IDS.conselho,
    isBonus: true,
    desafios: 1,
  },
  {
    slug: "skills",
    moduleId: "skills",
    num: "4",
    emoji: "🧰",
    titulo: "Skills & Comandos /",
    subtitulo: "Salvar o seu jeito de fazer.",
    imgId: IMG_IDS.skills,
    desafios: 2,
  },
  {
    slug: "mcps",
    moduleId: "mcps",
    num: "5",
    emoji: "🔌",
    titulo: "MCPs & Connectors",
    subtitulo: "Plugar a IA nas suas ferramentas.",
    imgId: IMG_IDS.mcps,
    desafios: 2,
  },
  {
    slug: "research",
    moduleId: "research",
    num: "6",
    emoji: "🔍",
    titulo: "Pesquisa Profunda",
    subtitulo: "Relatórios de verdade, com fontes.",
    imgId: IMG_IDS.research,
    desafios: 1,
  },
  {
    slug: "bastidores",
    moduleId: "bastidores",
    num: "7",
    emoji: "⚙️",
    titulo: "Os Bastidores",
    subtitulo: "GitHub, repos, swarms, harnesses — sem medo.",
    imgId: IMG_IDS.bastidores,
    desafios: 1,
  },
  {
    slug: "diploma",
    moduleId: "diploma",
    num: "🎓",
    emoji: "🎓",
    titulo: "Diploma",
    subtitulo: "Sua formatura + cola de bolso.",
    imgId: IMG_IDS.diploma,
    desafios: 1,
  },
];

export const SLUGS = MODULOS.map((m) => m.slug);

export function metaBySlug(slug: string): ModMeta | undefined {
  return MODULOS.find((m) => m.slug === slug);
}

export function nextSlug(slug: string): string | null {
  const i = MODULOS.findIndex((m) => m.slug === slug);
  return i >= 0 && i < MODULOS.length - 1 ? MODULOS[i + 1].slug : null;
}
export function prevSlug(slug: string): string | null {
  const i = MODULOS.findIndex((m) => m.slug === slug);
  return i > 0 ? MODULOS[i - 1].slug : null;
}

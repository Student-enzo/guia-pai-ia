import { Step } from "../types";
import { intro } from "./intro";
import { prompting } from "./prompting";
import { metaprompt } from "./metaprompt";
import { harness } from "./harness";
import { conselho } from "./conselho";
import { skills } from "./skills";
import { mcps } from "./mcps";
import { research } from "./research";
import { bastidores } from "./bastidores";
import { diploma } from "./diploma";

// Registro de lições-jogo por slug. Cada slug casa com um módulo em moduleMeta.
export const LESSONS: Record<string, Step[]> = {
  intro,
  prompting,
  metaprompt,
  harness,
  conselho,
  skills,
  mcps,
  research,
  bastidores,
  diploma,
};

export function getLesson(slug: string): Step[] | null {
  return LESSONS[slug] ?? null;
}

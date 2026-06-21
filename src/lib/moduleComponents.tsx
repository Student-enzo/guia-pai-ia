"use client";

/** Mapa slug → componente de conteúdo do módulo. */
import { ComponentType } from "react";
import { ModIntro } from "@/components/ModIntro";
import { ModPrompting } from "@/components/ModPrompting";
import { ModMetaprompt } from "@/components/ModMetaprompt";
import { ModHarness } from "@/components/ModHarness";
import { BonusConselho } from "@/components/BonusConselho";
import { ModSkills } from "@/components/ModSkills";
import { ModMcps } from "@/components/ModMcps";
import { ModResearch } from "@/components/ModResearch";
import { ModBastidores } from "@/components/ModBastidores";
import { ModDiploma } from "@/components/ModDiploma";

export const MOD_COMPONENTS: Record<string, ComponentType> = {
  intro: ModIntro,
  prompting: ModPrompting,
  metaprompt: ModMetaprompt,
  harness: ModHarness,
  conselho: BonusConselho,
  skills: ModSkills,
  mcps: ModMcps,
  research: ModResearch,
  bastidores: ModBastidores,
  diploma: ModDiploma,
};

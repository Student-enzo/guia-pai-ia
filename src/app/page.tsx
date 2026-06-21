"use client";

import { motion } from "framer-motion";
import { C, PAI } from "@/lib/config";
import { ProgressProvider, useProgress } from "@/lib/progress";
import { ModIntro } from "@/components/ModIntro";
import { ModPrompting } from "@/components/ModPrompting";
import { ModMetaprompt } from "@/components/ModMetaprompt";
import { ModHarness } from "@/components/ModHarness";
import { ModSkills } from "@/components/ModSkills";
import { ModMcps } from "@/components/ModMcps";
import { ModResearch } from "@/components/ModResearch";
import { ModBastidores } from "@/components/ModBastidores";
import { ModDiploma } from "@/components/ModDiploma";

const TOTAL_DESAFIOS = 12; // total de desafios no guia inteiro

export default function Page() {
  return (
    <ProgressProvider>
      <BarraTopo />
      <Hero />
      <ModIntro />
      <ModPrompting />
      <ModMetaprompt />
      <ModHarness />
      <ModSkills />
      <ModMcps />
      <ModResearch />
      <ModBastidores />
      <ModDiploma />
      <Rodape />
    </ProgressProvider>
  );
}

// ── Barra de progresso fixa no topo ──
function BarraTopo() {
  const { totalDone } = useProgress();
  const pct = Math.min(100, Math.round((totalDone / TOTAL_DESAFIOS) * 100));
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 6,
        background: C.paper2,
      }}
    >
      <motion.div
        animate={{ width: `${pct}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{ height: "100%", background: C.brass }}
      />
    </div>
  );
}

// ── Hero ──
function Hero() {
  return (
    <header
      className="hero-photo"
      style={{
        minHeight: "82vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 22px 60px",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="tracking-luxe"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 13,
            color: "#F1EEE7",
            letterSpacing: "0.3em",
            marginBottom: 22,
          }}
        >
          FELIZ DIA DOS PAIS
        </div>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(40px, 9vw, 86px)",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.02,
            margin: "0 0 18px",
            textShadow: "0 2px 30px rgba(0,0,0,0.35)",
          }}
        >
          IA do Zero
          <br />
          <span style={{ fontFamily: "'Pinyon Script', cursive", fontWeight: 400 }}>
            pra Você, {PAI.comoChamar}
          </span>
        </h1>
        <p
          style={{
            fontSize: 19,
            color: "#F1EEE7",
            maxWidth: 560,
            margin: "0 auto 36px",
            lineHeight: 1.6,
            textShadow: "0 1px 12px rgba(0,0,0,0.4)",
          }}
        >
          Um curso curto, divertido e sem enrolação pra você aprender a usar Inteligência
          Artificial — mesmo nunca tendo mexido nisso. Sem pressa, no seu ritmo. ⛵
        </p>
        <motion.a
          href="#harness"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: "inline-block",
            background: C.brass,
            color: "#fff",
            padding: "16px 38px",
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0.04em",
            textDecoration: "none",
            boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
          }}
        >
          Começar a aventura →
        </motion.a>
      </motion.div>
    </header>
  );
}

function Rodape() {
  return (
    <footer
      style={{
        background: C.ink,
        color: C.onDark,
        textAlign: "center",
        padding: "50px 22px",
      }}
    >
      <p
        style={{
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 30,
          margin: "0 0 8px",
          color: C.brassLight,
        }}
      >
        Feito com carinho
      </p>
      <p style={{ fontSize: 14, color: "#A7AEA8", margin: 0 }}>
        Feliz Dia dos Pais 🎁 — agora você fala a língua das máquinas.
      </p>
    </footer>
  );
}

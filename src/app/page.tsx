"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { C, PAI } from "@/lib/config";
import { IMG } from "@/lib/images";
import { useProgress } from "@/lib/progress";
import { MODULOS, ModMeta } from "@/lib/moduleMeta";
import { useDadJoke } from "@/lib/fun";

export default function Home() {
  return (
    <>
      <Hero />
      <Mapa />
      <Rodape />
    </>
  );
}

// ───────────────────────── HERO ─────────────────────────
function Hero() {
  const { totalDone } = useProgress();
  const router = useRouter();
  const primeiro = useFirstIncomplete();

  return (
    <header
      style={{
        position: "relative",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 22px",
        backgroundImage: `linear-gradient(180deg, rgba(15,32,64,0.55), rgba(15,32,64,0.8)), url(${IMG.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 640 }}
      >
        <div
          className="tracking-luxe"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 13,
            color: "#D9E2EF",
            letterSpacing: "0.3em",
            marginBottom: 20,
          }}
        >
          FELIZ DIA DOS PAIS
        </div>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(42px, 9vw, 88px)",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1.02,
            margin: "0 0 18px",
            textShadow: "0 2px 30px rgba(0,0,0,0.4)",
          }}
        >
          A Jornada da IA
          <br />
          <span style={{ fontFamily: "'Pinyon Script', cursive", fontWeight: 400 }}>
            do Capitão {PAI.primeiroNome}
          </span>
        </h1>
        <p
          style={{
            fontSize: 19,
            color: "#E6ECF4",
            maxWidth: 520,
            margin: "0 auto 34px",
            lineHeight: 1.6,
            textShadow: "0 1px 12px rgba(0,0,0,0.5)",
          }}
        >
          Aprender Inteligência Artificial do zero, no seu ritmo — como navegar de
          uma ilha pra outra. Cada parada destrava a próxima. ⛵
        </p>
        <motion.button
          onClick={() => router.push(`/modulo/${primeiro}`)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: C.brass,
            color: "#fff",
            border: "none",
            padding: "16px 40px",
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0.04em",
            cursor: "pointer",
            boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
          }}
        >
          {totalDone > 0 ? "Continuar a viagem →" : "Zarpar →"}
        </motion.button>
        <div style={{ marginTop: 18, fontSize: 14, color: "#C2CEDD" }}>
          ⭐ {totalDone} de {MODULOS.reduce((a, m) => a + m.desafios, 0)} conquistas
        </div>
      </motion.div>
      <a
        href="#mapa"
        style={{
          position: "absolute",
          bottom: 22,
          color: "#fff",
          fontSize: 26,
          textDecoration: "none",
          opacity: 0.8,
        }}
        aria-label="Ver o mapa"
      >
        ↓
      </a>
    </header>
  );
}

// ───────────────────────── MAPA ─────────────────────────
function Mapa() {
  const { provocar, node } = useDadJoke();
  const atual = useFirstIncomplete();

  return (
    <section
      id="mapa"
      style={{
        background: C.paper,
        padding: "70px 0 90px",
        backgroundImage: `linear-gradient(${C.paper}, ${C.paper2})`,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 50, padding: "0 22px" }}>
        <div
          className="divider-emblem"
          style={{ marginBottom: 18, color: C.seaDeep }}
        >
          <span style={{ fontSize: 20 }}>🗺️</span>
        </div>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 6vw, 44px)",
            color: C.ink,
            margin: 0,
            fontWeight: 600,
          }}
        >
          O Mapa da Viagem
        </h2>
        <p style={{ color: C.textMuted, fontSize: 17, marginTop: 6 }}>
          Toque numa ilha pra começar. As trancadas abrem conforme você avança.
        </p>
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: 560,
          margin: "0 auto",
          padding: "0 22px",
        }}
      >
        {/* linha da rota (tracejada) */}
        <div
          style={{
            position: "absolute",
            top: 40,
            bottom: 40,
            left: "50%",
            width: 0,
            borderLeft: `3px dashed ${C.seaLight}`,
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        />
        {MODULOS.map((m, i) => (
          <No
            key={m.slug}
            meta={m}
            lado={i % 2 === 0 ? "left" : "right"}
            ehAtual={m.slug === atual}
            onLocked={provocar}
          />
        ))}
      </div>
      {node}
    </section>
  );
}

function No({
  meta,
  lado,
  ehAtual,
  onLocked,
}: {
  meta: ModMeta;
  lado: "left" | "right";
  ehAtual: boolean;
  onLocked: () => void;
}) {
  const { isModuleUnlocked, moduleProgress, ready } = useProgress();
  const router = useRouter();

  const unlocked =
    !ready ||
    meta.moduleId === "conselho" ||
    isModuleUnlocked(meta.moduleId as never);
  const feitos = moduleProgress(meta.moduleId as never, meta.desafios);
  const done = feitos >= meta.desafios && ready;

  const cor = done ? C.green : ehAtual ? C.brass : unlocked ? C.sea : "#B7C0CE";
  const corFundo = done ? C.green : ehAtual ? C.brass : unlocked ? C.paper : "#E2E7EE";

  const irPro = () => {
    if (unlocked) router.push(`/modulo/${meta.slug}`);
    else onLocked();
  };

  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        margin: "26px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: lado === "left" ? "row" : "row-reverse",
          alignItems: "center",
          gap: 16,
          width: "100%",
          maxWidth: 460,
        }}
      >
        {/* nó (círculo) */}
        <motion.button
          onClick={irPro}
          whileHover={unlocked ? { scale: 1.08 } : { rotate: [0, -8, 8, -6, 0], x: [0, -6, 6, 0] }}
          whileTap={unlocked ? { scale: 0.94 } : undefined}
          style={{
            flexShrink: 0,
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: `4px solid ${cor}`,
            background: corFundo,
            color: done || ehAtual ? "#fff" : C.ink,
            fontSize: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: unlocked ? "pointer" : "not-allowed",
            boxShadow: ehAtual
              ? `0 0 0 6px rgba(176,137,79,0.25), 0 10px 24px rgba(0,0,0,0.18)`
              : "0 8px 20px rgba(20,39,74,0.14)",
            position: "relative",
          }}
        >
          {done ? "✓" : unlocked ? meta.emoji : "🔒"}
          {ehAtual && (
            <span
              className="pulse-dot"
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                border: `2px solid ${C.brass}`,
              }}
            />
          )}
        </motion.button>

        {/* cartão de texto */}
        <button
          onClick={irPro}
          style={{
            flex: 1,
            textAlign: lado === "left" ? "left" : "right",
            background: "transparent",
            border: "none",
            cursor: unlocked ? "pointer" : "not-allowed",
            padding: 0,
          }}
        >
          {ehAtual && (
            <span
              style={{
                display: "inline-block",
                background: C.brass,
                color: "#fff",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.12em",
                padding: "3px 9px",
                borderRadius: 999,
                marginBottom: 5,
              }}
            >
              VOCÊ ESTÁ AQUI
            </span>
          )}
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 11,
              letterSpacing: "0.14em",
              color: meta.isBonus ? C.brass : C.textMuted,
              marginBottom: 2,
            }}
          >
            {meta.isBonus ? "★ BÔNUS" : `PARADA ${meta.num}`}
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 600,
              color: unlocked ? C.ink : "#9AA6B6",
              lineHeight: 1.1,
            }}
          >
            {meta.titulo}
          </div>
          <div style={{ fontSize: 13.5, color: C.textMuted, marginTop: 2 }}>
            {unlocked ? meta.subtitulo : "🔒 Termine a parada anterior"}
          </div>
        </button>
      </div>
    </div>
  );
}

// primeiro módulo não-concluído e desbloqueado (pra "você está aqui" e o CTA)
function useFirstIncomplete(): string {
  const { isModuleUnlocked, moduleProgress, ready } = useProgress();
  if (!ready) return MODULOS[0].slug;
  for (const m of MODULOS) {
    const unlocked =
      m.moduleId === "conselho" || isModuleUnlocked(m.moduleId as never);
    const done = moduleProgress(m.moduleId as never, m.desafios) >= m.desafios;
    if (unlocked && !done) return m.slug;
  }
  return MODULOS[MODULOS.length - 1].slug;
}

// ───────────────────────── RODAPÉ ─────────────────────────
function Rodape() {
  return (
    <footer
      style={{
        background: C.ink,
        color: C.onDark,
        textAlign: "center",
        padding: "54px 22px",
      }}
    >
      <p
        style={{
          fontFamily: "'Pinyon Script', cursive",
          fontSize: 32,
          margin: "0 0 8px",
          color: C.brassLight,
        }}
      >
        Feito com carinho
      </p>
      <p style={{ fontSize: 14, color: "#A9B6C9", margin: "0 0 14px" }}>
        Feliz Dia dos Pais, Capitão {PAI.primeiroNome} 🎁
      </p>
      <Link
        href="/modulo/intro"
        style={{ color: C.seaLight, fontSize: 14, textDecoration: "none", fontWeight: 600 }}
      >
        Começar do início →
      </Link>
    </footer>
  );
}

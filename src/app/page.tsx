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
      className="world-bg"
      style={{
        padding: "70px 0 90px",
        backgroundImage: `linear-gradient(180deg, ${C.sky} 0%, ${C.skyDeep} 60%, ${C.seaLight} 100%)`,
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
            fontFamily: "'Nunito', sans-serif",
            fontSize: "clamp(30px, 7vw, 46px)",
            color: C.ink,
            margin: 0,
            fontWeight: 900,
            letterSpacing: "-0.01em",
          }}
        >
          O Mapa da Viagem
        </h2>
        <p style={{ color: C.text, fontSize: 17, marginTop: 6, fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
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
        {/* linha da rota (cordame náutico) */}
        <div
          style={{
            position: "absolute",
            top: 40,
            bottom: 40,
            left: "50%",
            width: 8,
            borderRadius: 999,
            background: `repeating-linear-gradient(${C.seaDeep} 0 10px, transparent 10px 20px)`,
            opacity: 0.55,
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
            width: 82,
            height: 82,
            borderRadius: "50%",
            border: `5px solid #fff`,
            background: corFundo,
            color: done || ehAtual ? "#fff" : C.ink,
            fontSize: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: unlocked ? "pointer" : "not-allowed",
            boxShadow: ehAtual
              ? `0 0 0 7px rgba(229,166,54,0.28), 0 8px 0 0 ${C.brassLight}, 0 16px 26px rgba(14,42,71,0.28)`
              : done
              ? `0 7px 0 0 ${C.greenDeep}, 0 14px 22px rgba(14,42,71,0.2)`
              : unlocked
              ? `0 7px 0 0 ${C.seaDeep}, 0 14px 22px rgba(14,42,71,0.2)`
              : "0 6px 0 0 #AEB9C7, 0 10px 18px rgba(14,42,71,0.14)",
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
              fontFamily: "'Nunito', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.1em",
              color: meta.isBonus ? C.sunDeep : C.seaDeep,
              marginBottom: 2,
            }}
          >
            {meta.isBonus ? "★ BÔNUS" : `ILHA ${meta.num}`}
          </div>
          <div
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 21,
              fontWeight: 900,
              color: unlocked ? C.ink : "#8595A8",
              lineHeight: 1.12,
            }}
          >
            {meta.titulo}
          </div>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: C.textMuted, marginTop: 2, fontFamily: "'Nunito', sans-serif" }}>
            {unlocked ? meta.subtitulo : "🔒 Termine a ilha anterior"}
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

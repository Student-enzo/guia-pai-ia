"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import { C, PAI } from "@/lib/config";
import { useProgress } from "@/lib/progress";
import { MODULOS, ModMeta } from "@/lib/moduleMeta";
import { useDadJoke } from "@/lib/fun";
import { NEWS, NewsItem } from "@/lib/news";
import { NUGGETS } from "@/lib/nuggets";

const ACCENT: Record<NewsItem["cor"], string> = {
  teal: C.sea,
  gold: C.brass,
  green: C.green,
  coral: C.coral,
  purple: C.purple,
};

const wrap: React.CSSProperties = { maxWidth: 1080, margin: "0 auto", padding: "0 22px" };

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  return (
    <div className="ayc-bg" style={{ minHeight: "100vh" }}>
      {/* barra de progresso de scroll */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
          position: "fixed",
          top: 52,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${C.sea}, ${C.green})`,
          zIndex: 49,
        }}
      />
      <Hero />
      <Ritmo />
      <Nuggets />
      <Mapa />
      <Climax />
      <Rodape />
    </div>
  );
}

// ── título de seção reutilizável ──
function SectionHead({ kicker, titulo, sub, live }: { kicker: string; titulo: string; sub?: string; live?: boolean }) {
  return (
    <Reveal>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 10 }}>
          {live && <span className="pulse-dot-live" style={{ width: 8, height: 8, borderRadius: "50%", background: C.green, boxShadow: `0 0 0 0 ${C.green}` }} />}
          <span className="label-caps" style={{ color: live ? C.green : C.sea }}>{kicker}</span>
        </div>
        <h2 className="font-display" style={{ fontSize: "clamp(28px,5vw,40px)", fontWeight: 700, color: C.text, margin: 0, letterSpacing: "-0.01em" }}>
          {titulo}
        </h2>
        {sub && <p className="font-body" style={{ color: C.textMuted, fontSize: 16, marginTop: 8, maxWidth: 540, marginInline: "auto", lineHeight: 1.6 }}>{sub}</p>}
      </div>
    </Reveal>
  );
}

// ── reveal on scroll ──
function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ───────────────────────── HERO / INDUÇÃO ─────────────────────────
function Hero() {
  const { totalDone } = useProgress();
  const router = useRouter();
  const primeiro = useFirstIncomplete();

  return (
    <header style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "90px 22px 60px", overflow: "hidden" }}>
      {/* bússola gigante de fundo */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", fontSize: "min(70vw, 560px)", opacity: 0.04, userSelect: "none", lineHeight: 1 }}
      >
        🧭
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: 720, position: "relative" }}>
        <div className="label-caps" style={{ color: C.brass, marginBottom: 22 }}>Presente de Dia dos Pais · pra você, Capitão {PAI.primeiroNome}</div>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 7vw, 68px)", fontWeight: 800, color: C.text, lineHeight: 1.06, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
          Entre no grupo dos{" "}
          <span style={{ background: `linear-gradient(90deg, ${C.sea}, ${C.green})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>poucos</span>{" "}
          que entendem IA antes de todo mundo.
        </h1>
        <p className="font-body" style={{ fontSize: 18, color: C.textMuted, maxWidth: 540, margin: "0 auto 32px", lineHeight: 1.65 }}>
          A bússola pra navegar o mar da Inteligência Artificial — feita pra quem comanda grandes travessias. Sem código, no seu ritmo, de ilha em ilha.
        </p>
        <motion.button
          onClick={() => router.push(`/modulo/${primeiro}`)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{ background: C.brass, color: "#0A0B0D", border: "none", padding: "16px 38px", borderRadius: 999, fontSize: 16, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer", boxShadow: `0 16px 40px -12px ${C.brass}66` }}
        >
          {totalDone > 0 ? "Continuar a travessia →" : "Começar a travessia →"}
        </motion.button>
        {/* chips de stats */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
          {[`${MODULOS.length} ilhas`, "0 código", "2 min por lição", `${totalDone} conquistas`].map((t) => (
            <span key={t} className="label-caps" style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 999, padding: "8px 14px", color: C.textMuted }}>{t}</span>
          ))}
        </div>
      </motion.div>
      <a href="#ritmo" style={{ position: "absolute", bottom: 22, color: C.textMuted, fontSize: 24, textDecoration: "none" }} aria-label="Descer">↓</a>
    </header>
  );
}

// ───────────────────────── O RITMO DA IA (NEWS) ─────────────────────────
function Ritmo() {
  return (
    <section id="ritmo" style={{ padding: "72px 0" }}>
      <div style={wrap}>
        <SectionHead live kicker="ao vivo · briefing de bordo" titulo="O Ritmo da IA" sub="O que está acontecendo no mar da IA — explicado em português de gente. Saber disso já te coloca à frente da maioria." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 16 }}>
          {NEWS.map((n, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <article className="card-ayc hoverable" style={{ padding: 20, height: "100%", display: "flex", flexDirection: "column", borderTop: `3px solid ${ACCENT[n.cor]}` }}>
                <span className="label-caps" style={{ color: ACCENT[n.cor], marginBottom: 10 }}>{n.categoria}</span>
                <h3 className="font-display" style={{ fontSize: 19, fontWeight: 700, color: C.text, margin: "0 0 8px", lineHeight: 1.25 }}>{n.titulo}</h3>
                <p className="font-body" style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.55, margin: "0 0 14px", flex: 1 }}>{n.resumo}</p>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start", borderTop: `1px solid ${C.line}`, paddingTop: 12 }}>
                  <span style={{ color: ACCENT[n.cor], fontSize: 13, flexShrink: 0 }}>⚓</span>
                  <span className="font-body" style={{ fontSize: 13, color: C.sea, fontWeight: 500, lineHeight: 1.45 }}>{n.porque}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── GOLDEN NUGGETS ─────────────────────────
function Nuggets() {
  return (
    <section style={{ padding: "20px 0 72px" }}>
      <hr className="contour-divider" style={{ ...wrap, marginBottom: 60, border: 0 }} />
      <div style={wrap}>
        <SectionHead kicker="como o Enzo pensa" titulo="Dicas de Ouro" sub="Os atalhos que levei meses pra aprender — condensados. Guarde esses." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {NUGGETS.map((n, i) => (
            <Reveal key={i} delay={(i % 3) * 0.06}>
              <article className="card-ayc hoverable" style={{ padding: 20, height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ color: C.brass, fontSize: 16 }}>★</span>
                  <span className="label-caps" style={{ color: C.brass }}>Nugget {String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: C.text, margin: "0 0 8px", lineHeight: 1.3 }}>{n.titulo}</h3>
                <p className="font-body" style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.55, margin: 0 }}>{n.corpo}</p>
                {n.exemplo && (
                  <p className="font-body" style={{ marginTop: 12, fontSize: 13, color: C.green, background: "rgba(74,222,128,0.08)", border: `1px solid rgba(74,222,128,0.2)`, borderRadius: 10, padding: "9px 11px", lineHeight: 1.45 }}>
                    {n.exemplo}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── A JORNADA (MAPA) ─────────────────────────
function Mapa() {
  const { provocar, node } = useDadJoke();
  const atual = useFirstIncomplete();
  return (
    <section id="mapa" style={{ padding: "20px 0 80px" }}>
      <hr className="contour-divider" style={{ ...wrap, marginBottom: 60, border: 0 }} />
      <SectionHead kicker="sua carta de navegação" titulo="O Mapa da Viagem" sub="Toque numa ilha pra começar. Cada parada destrava a próxima." />
      <div style={{ position: "relative", maxWidth: 560, margin: "0 auto", padding: "0 22px" }}>
        <div style={{ position: "absolute", top: 40, bottom: 40, left: "50%", width: 6, borderRadius: 999, background: `repeating-linear-gradient(${C.sea} 0 9px, transparent 9px 18px)`, opacity: 0.4, transform: "translateX(-50%)", zIndex: 0 }} />
        {MODULOS.map((m, i) => (
          <No key={m.slug} meta={m} lado={i % 2 === 0 ? "left" : "right"} ehAtual={m.slug === atual} onLocked={provocar} />
        ))}
      </div>
      {node}
    </section>
  );
}

function No({ meta, lado, ehAtual, onLocked }: { meta: ModMeta; lado: "left" | "right"; ehAtual: boolean; onLocked: () => void }) {
  const { isModuleUnlocked, moduleProgress, ready } = useProgress();
  const router = useRouter();
  const unlocked = !ready || meta.moduleId === "conselho" || isModuleUnlocked(meta.moduleId as never);
  const feitos = moduleProgress(meta.moduleId as never, meta.desafios);
  const done = feitos >= meta.desafios && ready;
  const cor = done ? C.green : ehAtual ? C.brass : unlocked ? C.sea : "#3A3F47";
  const irPro = () => (unlocked ? router.push(`/modulo/${meta.slug}`) : onLocked());

  return (
    <Reveal>
      <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", margin: "22px 0" }}>
        <div style={{ display: "flex", flexDirection: lado === "left" ? "row" : "row-reverse", alignItems: "center", gap: 16, width: "100%", maxWidth: 460 }}>
          <motion.button
            onClick={irPro}
            whileHover={unlocked ? { scale: 1.08 } : { rotate: [0, -8, 8, -6, 0] }}
            whileTap={unlocked ? { scale: 0.94 } : undefined}
            style={{
              flexShrink: 0, width: 76, height: 76, borderRadius: "50%",
              border: `2px solid ${done || ehAtual ? cor : C.line}`,
              background: done ? C.green : ehAtual ? C.brass : unlocked ? C.card2 : C.card,
              color: done || ehAtual ? "#0A0B0D" : unlocked ? C.text : C.textMuted,
              fontSize: 30, display: "flex", alignItems: "center", justifyContent: "center",
              cursor: unlocked ? "pointer" : "not-allowed",
              boxShadow: ehAtual ? `0 0 0 6px ${C.brass}22, 0 0 30px ${C.brass}55` : done ? `0 0 22px ${C.green}44` : "0 16px 30px -16px rgba(0,0,0,0.9)",
              position: "relative",
            }}
          >
            {done ? "✓" : unlocked ? meta.emoji : "🔒"}
            {ehAtual && <span className="pulse-dot" style={{ position: "absolute", inset: -4, borderRadius: "50%", border: `2px solid ${C.brass}` }} />}
          </motion.button>
          <button onClick={irPro} style={{ flex: 1, textAlign: lado === "left" ? "left" : "right", background: "transparent", border: "none", cursor: unlocked ? "pointer" : "not-allowed", padding: 0 }}>
            {ehAtual && <span className="label-caps" style={{ display: "inline-block", background: C.brass, color: "#0A0B0D", padding: "3px 9px", borderRadius: 999, marginBottom: 6, fontWeight: 700 }}>Você está aqui</span>}
            <div className="label-caps" style={{ color: meta.isBonus ? C.brass : C.seaDeep, marginBottom: 3 }}>{meta.isBonus ? "★ Bônus" : `Ilha ${meta.num}`}</div>
            <div className="font-display" style={{ fontSize: 20, fontWeight: 700, color: unlocked ? C.text : "#5A6470", lineHeight: 1.15 }}>{meta.titulo}</div>
            <div className="font-body" style={{ fontSize: 13.5, color: C.textMuted, marginTop: 3 }}>{unlocked ? meta.subtitulo : "🔒 Termine a ilha anterior"}</div>
          </button>
        </div>
      </div>
    </Reveal>
  );
}

function useFirstIncomplete(): string {
  const { isModuleUnlocked, moduleProgress, ready } = useProgress();
  if (!ready) return MODULOS[0].slug;
  for (const m of MODULOS) {
    const unlocked = m.moduleId === "conselho" || isModuleUnlocked(m.moduleId as never);
    const dn = moduleProgress(m.moduleId as never, m.desafios) >= m.desafios;
    if (unlocked && !dn) return m.slug;
  }
  return MODULOS[MODULOS.length - 1].slug;
}

// ───────────────────────── CLÍMAX CTA ─────────────────────────
function Climax() {
  const router = useRouter();
  const primeiro = useFirstIncomplete();
  return (
    <section style={{ padding: "40px 0 80px" }}>
      <div style={wrap}>
        <Reveal>
          <div className="card-ayc" style={{ padding: "48px 28px", textAlign: "center", background: `radial-gradient(120% 100% at 50% 0%, rgba(144,196,207,0.12), #16181D 60%)` }}>
            <div className="label-caps" style={{ color: C.sea, marginBottom: 14 }}>Erga as velas</div>
            <h2 className="font-display" style={{ fontSize: "clamp(26px,5vw,38px)", fontWeight: 800, color: C.text, margin: "0 0 12px", letterSpacing: "-0.01em" }}>
              No fim, você vai ser o capitão que a família chama quando tem dúvida de IA.
            </h2>
            <p className="font-body" style={{ color: C.textMuted, fontSize: 16, maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.6 }}>
              A maioria nem sai do porto. Você vai atravessar o mar inteiro — uma ilha de cada vez.
            </p>
            <motion.button onClick={() => router.push(`/modulo/${primeiro}`)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{ background: C.sea, color: "#0A0B0D", border: "none", padding: "16px 38px", borderRadius: 999, fontSize: 16, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer", boxShadow: `0 16px 40px -12px ${C.sea}66` }}>
              Zarpar agora →
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ───────────────────────── RODAPÉ ─────────────────────────
function Rodape() {
  return (
    <footer style={{ borderTop: `1px solid ${C.line}`, textAlign: "center", padding: "54px 22px" }}>
      <p style={{ fontFamily: "'Pinyon Script', cursive", fontSize: 34, margin: "0 0 8px", color: C.brassLight }}>Feito com carinho</p>
      <p className="font-body" style={{ fontSize: 14, color: C.textMuted, margin: "0 0 14px" }}>Feliz Dia dos Pais, Capitão {PAI.primeiroNome} 🎁</p>
      <Link href="/modulo/intro" style={{ color: C.sea, fontSize: 14, textDecoration: "none", fontWeight: 600, fontFamily: "'Hanken Grotesk', sans-serif" }}>Começar do início →</Link>
    </footer>
  );
}

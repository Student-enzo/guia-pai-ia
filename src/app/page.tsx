"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { C, PAI } from "@/lib/config";
import { useProgress } from "@/lib/progress";
import { MODULOS } from "@/lib/moduleMeta";
import { useDadJoke } from "@/lib/fun";
import { NEWS, CONCEITOS, AIS } from "@/lib/news";
import { SLASHES, SLASH_CATS, INSTALACAO_PASSOS } from "@/lib/slash";
import { montarMasterPrompt, montarPromptPesquisa, perguntasGeradas, montarPromptFinal, PERGUNTAS_CONTEXTO, PERGUNTAS_VIES } from "@/lib/masterPrompt";

const ACCENT: Record<string, string> = {
  teal: C.sea, gold: C.brass, green: C.green, coral: C.coral, purple: C.purple,
};

// Logos oficiais das IAs (svg em /public/logos)
const LOGOS: Record<string, string> = {
  Claude: "/logos/claude.svg",
  ChatGPT: "/logos/openai.svg",
  Gemini: "/logos/gemini.svg",
};

// Ilustrações geradas por cor de destaque (/public/concepts)
const CONCEPT_IMG: Record<string, string> = {
  teal: "/concepts/teal.png",
  gold: "/concepts/gold.png",
  green: "/concepts/green.png",
  coral: "/concepts/coral.png",
  purple: "/concepts/purple.png",
};

const wrap: React.CSSProperties = { maxWidth: 1080, margin: "0 auto", padding: "0 22px" };

function rankOf(n: number): { nome: string; emoji: string } {
  if (n >= 10) return { nome: "Capitão de IA", emoji: "🧭" };
  if (n >= 7)  return { nome: "Navegador de IA", emoji: "⚓" };
  if (n >= 4)  return { nome: "Timoneiro de IA", emoji: "🛞" };
  if (n >= 1)  return { nome: "Marinheiro de IA", emoji: "⛵" };
  return { nome: "Iniciante a bordo", emoji: "🪢" };
}

export default function Home() {
  return (
    <div className="ayc-bg" style={{ minHeight: "100vh" }}>
      <Hero />
      <Ritmo />
      <Conselho />
      <MasterPromptVivo />
      <ImplementacaoOS />
      <Slash />
      <Mapa />
      <Climax />
      <Rodape />
    </div>
  );
}

// ── helpers ──────────────────────────────────────────────────────────────────
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

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

// ── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { totalDone } = useProgress();
  const descer = () => document.getElementById("ritmo")?.scrollIntoView({ behavior: "smooth" });
  return (
    <header style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "90px 22px 60px", overflow: "hidden" }}>
      <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", fontSize: "min(70vw, 560px)", opacity: 0.04, userSelect: "none", lineHeight: 1 }}>🧭</motion.div>
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
        <motion.button onClick={descer} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          style={{ background: C.brass, color: "#0A0B0D", border: "none", padding: "16px 38px", borderRadius: 999, fontSize: 16, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer", boxShadow: `0 16px 40px -12px ${C.brass}66` }}>
          {totalDone > 0 ? "Continuar a travessia ↓" : "Começar a travessia ↓"}
        </motion.button>
        <div style={{ marginTop: 24 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `${C.brass}1A`, border: `1px solid ${C.brass}55`, borderRadius: 999, padding: "7px 16px" }}>
            <span style={{ fontSize: 16 }}>{rankOf(totalDone).emoji}</span>
            <span className="label-caps" style={{ color: C.brassLight, fontWeight: 600 }}>Seu nível: {rankOf(totalDone).nome}</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
          {[`${MODULOS.length} ilhas`, "0 código", "2 min por lição", `${totalDone} conquistas`].map((t) => (
            <span key={t} className="label-caps" style={{ background: C.card, border: `1px solid ${C.line}`, borderRadius: 999, padding: "8px 14px", color: C.textMuted }}>{t}</span>
          ))}
        </div>
      </motion.div>
      <a href="#ritmo" style={{ position: "absolute", bottom: 22, color: C.textMuted, fontSize: 24, textDecoration: "none" }} aria-label="Descer">↓</a>
    </header>
  );
}

// ── RITMO DA IA ───────────────────────────────────────────────────────────────
function Ritmo() {
  const [activeTab, setActiveTab] = useState<"briefing" | "conceitos">("conceitos");
  return (
    <section id="ritmo" style={{ padding: "72px 0" }}>
      <div style={wrap}>
        <SectionHead live kicker="ao vivo · universo da ia" titulo="O Universo da IA" sub="Tudo que está acontecendo — e tudo que você pode fazer com IA agora. Explicado como se você tivesse 5 anos." />

        {/* Tab toggle */}
        <Reveal>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 40 }}>
            {[{ id: "briefing", label: "📡 Notícias do Mar" }, { id: "conceitos", label: "🧭 O que é cada coisa" }].map((t) => (
              <button key={t.id} onClick={() => setActiveTab(t.id as never)}
                style={{ padding: "10px 22px", borderRadius: 999, border: `1px solid ${activeTab === t.id ? C.sea : C.line}`, background: activeTab === t.id ? `${C.sea}18` : "transparent", color: activeTab === t.id ? C.sea : C.textMuted, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'Hanken Grotesk', sans-serif", transition: "all 150ms" }}>
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {activeTab === "briefing" && (
          <>
            {/* AI Comparison */}
            <Reveal>
              <div style={{ marginBottom: 32 }}>
                <p className="label-caps" style={{ color: C.brass, textAlign: "center", marginBottom: 16 }}>as três grandes · diferentes barcos, mesmo mar</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
                  {AIS.map((ai) => (
                    <div key={ai.nome} className="card-ayc hoverable" style={{ padding: 22, borderTop: `3px solid ${ai.cor}`, position: "relative", overflow: "hidden" }}>
                      {/* glow de fundo da marca */}
                      <div aria-hidden style={{ position: "absolute", top: -40, right: -40, width: 140, height: 140, borderRadius: "50%", background: `radial-gradient(circle, ${ai.cor}22 0%, transparent 70%)`, pointerEvents: "none" }} />
                      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14, position: "relative" }}>
                        <div style={{ width: 54, height: 54, borderRadius: 15, display: "grid", placeItems: "center", flexShrink: 0, background: `${ai.cor}14`, border: `1px solid ${ai.cor}38`, boxShadow: `inset 0 0 18px ${ai.cor}18, 0 6px 18px rgba(0,0,0,0.35)` }}>
                          <img src={LOGOS[ai.nome]} alt={`Logo ${ai.nome}`} width={30} height={30} style={{ display: "block", filter: `drop-shadow(0 0 7px ${ai.cor}66)` }} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: 19, color: C.text, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{ai.nome}</div>
                          <div className="label-caps" style={{ color: C.textMuted }}>{ai.fabricante}</div>
                        </div>
                      </div>
                      <p className="font-body" style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.55, margin: "0 0 14px" }}>{ai.descricao}</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                        {ai.diferenciais.map((d) => (
                          <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                            <span style={{ color: ai.cor, fontSize: 12, flexShrink: 0, marginTop: 2 }}>▸</span>
                            <span className="font-body" style={{ fontSize: 13, color: C.text, lineHeight: 1.4 }}>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* News grid — bigger, richer cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
              {NEWS.map((n, i) => (
                <Reveal key={i} delay={(i % 3) * 0.06}>
                  <article className="card-ayc hoverable" style={{ padding: 24, height: "100%", display: "flex", flexDirection: "column", borderTop: `3px solid ${ACCENT[n.cor]}` }}>
                    <span className="label-caps" style={{ color: ACCENT[n.cor], marginBottom: 12 }}>{n.categoria}</span>
                    <h3 className="font-display" style={{ fontSize: 20, fontWeight: 700, color: C.text, margin: "0 0 10px", lineHeight: 1.2 }}>{n.titulo}</h3>
                    <p className="font-body" style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.6, margin: "0 0 16px", flex: 1 }}>{n.resumo}</p>
                    <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: 14, display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <span style={{ color: ACCENT[n.cor], fontSize: 14, flexShrink: 0, marginTop: 1 }}>⚓</span>
                      <span className="font-body" style={{ fontSize: 13.5, color: C.sea, fontWeight: 500, lineHeight: 1.5 }}>{n.porque}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </>
        )}

        {activeTab === "conceitos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {CONCEITOS.map((c, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="card-ayc" style={{ overflow: "hidden", borderLeft: `4px solid ${ACCENT[c.cor]}` }}>
                  <div className="split-2 concept">
                    {/* Left visual panel — ilustração gerada */}
                    <div className="concept-left" style={{ position: "relative", borderRight: `1px solid ${C.line}`, minHeight: 240, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                      <img src={CONCEPT_IMG[c.cor]} alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                      <div aria-hidden style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, rgba(14,16,20,0.05) 25%, rgba(14,16,20,0.55) 62%, rgba(14,16,20,0.94) 100%)` }} />
                      <div style={{ position: "relative", padding: "20px 22px" }}>
                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 21, color: C.text, lineHeight: 1.15, marginBottom: 11, textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}>{c.titulo}</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {c.ias.map((ia) => (
                            <span key={ia} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11.5, padding: "4px 10px 4px 6px", borderRadius: 999, background: "rgba(8,9,11,0.55)", border: `1px solid ${ACCENT[c.cor]}66`, color: C.text, fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 600, backdropFilter: "blur(6px)" }}>
                              {LOGOS[ia] && <img src={LOGOS[ia]} alt="" width={14} height={14} style={{ display: "block" }} />}
                              {ia}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Right text panel */}
                    <div style={{ padding: "28px 28px" }}>
                      <span className="label-caps" style={{ color: ACCENT[c.cor], display: "block", marginBottom: 8 }}>{c.categoria}</span>
                      <p className="font-body" style={{ fontSize: 15.5, color: C.text, lineHeight: 1.65, margin: "0 0 14px" }}>{c.oQueE}</p>
                      <div style={{ background: `${ACCENT[c.cor]}10`, border: `1px solid ${ACCENT[c.cor]}30`, borderRadius: 10, padding: "12px 14px", marginBottom: 14 }}>
                        <span style={{ fontSize: 12, color: ACCENT[c.cor], fontWeight: 700, fontFamily: "'Hanken Grotesk', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}>💡 É como se fosse:</span>
                        <p className="font-body" style={{ fontSize: 14.5, color: C.text, lineHeight: 1.6, margin: "6px 0 0", fontStyle: "italic" }}>{c.analogia}</p>
                      </div>
                      <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: 12 }}>
                        <span style={{ fontSize: 12, color: C.sea, fontWeight: 700, fontFamily: "'Hanken Grotesk', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}>⚓ Na prática:</span>
                        <p className="font-body" style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.6, margin: "6px 0 0" }}>{c.naPratica}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ── CONSELHO (board of decisions) — o método de 5 passos do Enzo ──────────────
const PASSOS_DECISAO = [
  {
    num: "01",
    cor: C.sea,
    titulo: "Contexto puro",
    resumo: "Diga seu objetivo específico. Depois mande a IA te fazer perguntas pra coletar contexto.",
    detalhe: "Sem perguntas enviesadas: ela não pode te deixar colocar opinião, crença ou estratégia. Ela tem que cavar fundo, até revelar contextos que você esconde de si mesmo por ego, drama ou medo de falhar. E ela PARA antes de perguntar o que você acha. Toda IA é treinada pra te dizer o que você quer ouvir. Essa fase é só contexto.",
  },
  {
    num: "02",
    cor: C.brass,
    titulo: "Conselho de especialistas reais",
    resumo: "Não conserte a IA pra ela parar de ser puxa-saco. Monte um conselho de experts de verdade.",
    detalhe: "Mudar o system prompt geral pra ela 'parar de concordar' é amplo demais, não funciona pra toda situação. Em vez disso, monte um conselho. Jeito ERRADO: 'pense como o fulano'. Jeito CERTO: pesquise o trabalho real, factual e rastreável dessas pessoas e aja com base nas ações reais delas, com citações pra conferir. Nunca Wikipedia ou Reddit. Só material oficial.",
  },
  {
    num: "03",
    cor: C.purple,
    titulo: "Os planos (eles discordam)",
    resumo: "O conselho cria 3 planos bons e 3 que são não-vai-de-jeito-nenhum. E discorda no caminho.",
    detalhe: "Pelo menos 3 membros debatem e discordam, indo e voltando nos princípios. Usam os Seis Chapéus do Pensamento e jogam cenários. Roda /red-team em todos os planos. Você anota o que pode dar errado nos 3 não-go e escolhe 1 dos 3 melhores.",
  },
  {
    num: "04",
    cor: C.green,
    titulo: "Sua experiência entra",
    resumo: "Agora você pica o plano em pedaços com sua experiência real de trabalho.",
    detalhe: "Veja onde o conselho está falando besteira. O que você gosta, o que não gosta — seja muito descritivo. Devolve tudo pro conselho e manda ele rodar o mesmo sistema de revisão (debate + red team) pra refinar. Sua opinião entra DEPOIS, pra refinar, nunca antes, pra não enviesar.",
  },
  {
    num: "05",
    cor: C.coral,
    titulo: "O caminho sem viés",
    resumo: "Você termina com um primeiro caminho forte, sem a IA puxando seu saco.",
    detalhe: "Esse mesmo método também funciona pra autoconhecimento e decisões pessoais. Não é mágica: é processo. Contexto limpo, conselho real, debate de verdade, sua experiência por cima.",
  },
];

// As .md skills que ele pode baixar e usar direto no chat.
const SKILLS_DOWNLOAD = [
  { arquivo: "00-decisao-completa.md", nome: "Decisão Completa", desc: "O método dos 5 passos inteiro. Cola no chat e a IA conduz tudo.", destaque: true },
  { arquivo: "01-contexto.md", nome: "Contexto Puro", desc: "Só o passo 1: coletar contexto sem viés." },
  { arquivo: "02-conselho.md", nome: "Conselho", desc: "Passo 2: montar o conselho de especialistas reais." },
  { arquivo: "03-planos.md", nome: "Os Planos", desc: "Passo 3: debate, red team e os 3+3 planos." },
  { arquivo: "04-sua-experiencia.md", nome: "Sua Experiência", desc: "Passo 4: você refina com sua experiência." },
];

// O conselho que o Enzo costuma usar — pessoas REAIS, com trabalho rastreável pra citar.
const CONSELHEIROS = [
  { emoji: "🏦", nome: "Warren Buffett", area: "Valor de longo prazo", fonte: "Cartas da Berkshire Hathaway" },
  { emoji: "🔄", nome: "Charlie Munger", area: "Inversão e modelos mentais", fonte: "Poor Charlie's Almanack" },
  { emoji: "💰", nome: "Alex Hormozi", area: "Oferta e aquisição", fonte: "$100M Offers / $100M Leads" },
  { emoji: "🎯", nome: "Simon Sinek", area: "Propósito e cultura", fonte: "Comece pelo Porquê" },
  { emoji: "🚀", nome: "Elon Musk", area: "Primeiro princípio", fonte: "Entrevistas e biografia (Isaacson)" },
  { emoji: "📊", nome: "Mentalidade PE", area: "Capital e saída", fonte: "Frameworks KKR / Blackstone" },
  { emoji: "🧠", nome: "Andrew Huberman", area: "Energia e foco", fonte: "Huberman Lab (Stanford)" },
  { emoji: "💪", nome: "David Goggins", area: "Verdade dura", fonte: "Can't Hurt Me" },
  { emoji: "🎭", nome: "Chase Hughes", area: "Comportamento e influência", fonte: "The Behavior Ops Manual" },
];

// Linha do tempo ANIMADA e interativa dos 5 passos.
function PassosTimeline() {
  const [ativo, setAtivo] = useState(0);
  return (
    <div style={{ position: "relative", marginBottom: 36, paddingLeft: 8 }}>
      {/* trilho vertical que se desenha */}
      <motion.div aria-hidden
        initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        style={{ position: "absolute", left: 30, top: 24, bottom: 24, width: 3, transformOrigin: "top", background: `linear-gradient(${C.sea}, ${C.brass}, ${C.purple}, ${C.green}, ${C.coral})`, borderRadius: 999, opacity: 0.5 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {PASSOS_DECISAO.map((p, i) => {
          const open = ativo === i;
          return (
            <motion.div key={p.num}
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative", display: "flex", gap: 18, alignItems: "flex-start" }}>
              {/* nó numerado */}
              <motion.button onClick={() => setAtivo(i)}
                whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}
                animate={open ? { boxShadow: `0 0 0 5px ${p.cor}22, 0 0 22px ${p.cor}66` } : { boxShadow: `0 6px 16px -8px rgba(0,0,0,0.8)` }}
                style={{ flexShrink: 0, width: 46, height: 46, borderRadius: "50%", border: `2px solid ${p.cor}`, background: open ? p.cor : C.card, color: open ? "#0A0B0D" : p.cor, fontFamily: "'Cinzel', serif", fontWeight: 700, fontSize: 18, cursor: "pointer", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {p.num.replace(/^0/, "")}
              </motion.button>

              {/* cartão */}
              <button onClick={() => setAtivo(i)}
                style={{ flex: 1, textAlign: "left", cursor: "pointer", background: open ? `${p.cor}0E` : C.card, border: `1px solid ${open ? p.cor + "55" : C.line}`, borderRadius: 16, padding: "16px 20px", transition: "all 200ms" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                  <div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: open ? p.cor : C.text }}>{p.titulo}</div>
                  <motion.span animate={{ rotate: open ? 90 : 0 }} style={{ color: p.cor, fontSize: 16, flexShrink: 0 }}>›</motion.span>
                </div>
                <p className="font-body" style={{ fontSize: 14.5, color: C.text, lineHeight: 1.55, margin: "6px 0 0", fontWeight: 500 }}>{p.resumo}</p>
                <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0, marginTop: open ? 10 : 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
                  <p className="font-body" style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>{p.detalhe}</p>
                </motion.div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function Conselho() {
  const [aberto, setAberto] = useState(false);
  return (
    <section id="conselho" style={{ padding: "20px 0 72px", scrollMarginTop: 70 }}>
      <hr className="contour-divider" style={{ ...wrap, marginBottom: 60, border: 0 }} />
      <div style={wrap}>
        <SectionHead
          kicker="o método de decisão do Enzo"
          titulo="O Conselho de Decisões"
          sub="Como tomar qualquer decisão grande com IA sem ela puxar seu saco. Cinco passos, sempre na mesma ordem."
        />

        {/* The trap */}
        <Reveal>
          <div className="card-ayc" style={{ padding: "26px 26px 22px", marginBottom: 32, borderLeft: `4px solid ${C.coral}` }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <span style={{ fontSize: 34, flexShrink: 0 }}>🪝</span>
              <div>
                <h3 className="font-display" style={{ fontSize: 19, fontWeight: 700, color: C.coral, margin: "0 0 8px" }}>
                  A armadilha do puxa-saco
                </h3>
                <p className="font-body" style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>
                  Toda IA é treinada pra te dizer o que você quer ouvir. Pergunte "minha ideia é boa?" e ela tende a dizer que sim. Os gurus dizem pra você consertar o "cérebro" da IA pra ela parar de concordar. Isso é amplo demais — é como usar um nó de marinheiro só pra toda ocasião. O jeito certo é este método de 5 passos.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The 5 steps — animated interactive timeline */}
        <Reveal>
          <p className="label-caps" style={{ color: C.sea, textAlign: "center", marginBottom: 18 }}>toque em cada passo pra abrir</p>
        </Reveal>
        <PassosTimeline />

        {/* The board the Enzo usually uses */}
        <Reveal>
          <div className="card-ayc" style={{ padding: "24px 24px 20px", marginBottom: 36, borderTop: `3px solid ${C.brass}` }}>
            <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: C.brassLight, margin: "0 0 6px" }}>🎩 O conselho que o Enzo costuma usar</h3>
            <p className="font-body" style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6, margin: "0 0 18px" }}>
              Pessoas reais, com trabalho rastreável. A IA não deve "fingir ser" elas — deve buscar o que elas realmente escreveram e fizeram (a fonte está em cada cartão) e citar. Troque por especialistas da sua área quando o assunto pedir.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 10 }}>
              {CONSELHEIROS.map((m, i) => (
                <motion.div key={m.nome}
                  initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }} whileHover={{ y: -3 }}
                  style={{ background: C.card2, border: `1px solid ${C.line}`, borderRadius: 12, padding: "13px 15px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                    <span style={{ fontSize: 19 }}>{m.emoji}</span>
                    <span className="font-display" style={{ fontSize: 14.5, fontWeight: 700, color: C.text }}>{m.nome}</span>
                  </div>
                  <div className="label-caps" style={{ color: C.brassLight, marginBottom: 6 }}>{m.area}</div>
                  <div style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12, color: C.sea, display: "flex", gap: 5, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0 }}>📚</span>
                    <span style={{ fontStyle: "italic", lineHeight: 1.4 }}>{m.fonte}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Expandable full prompt */}
        <Reveal>
          <button
            onClick={() => setAberto(!aberto)}
            style={{ width: "100%", background: `${C.brass}18`, border: `1px solid ${C.brass}44`, borderRadius: 14, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", color: C.brassLight, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 32 }}>
            <span>🎩 Ver o prompt completo dos 5 passos</span>
            <span style={{ transform: aberto ? "rotate(180deg)" : "none", transition: "transform 200ms" }}>↓</span>
          </button>
          {aberto && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: -20, marginBottom: 32 }}>
              <div style={{ background: "#0A0B0D", border: `1px solid ${C.line}`, borderRadius: 14, padding: "20px 20px", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 13, color: "#90C4CF", lineHeight: 1.7, overflowX: "auto", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
{`Você é meu copiloto de decisão. Conduza nesta ordem, um passo de cada vez. Não adiante.

PASSO 1 — CONTEXTO (só contexto):
Vou te dar meu objetivo específico. Me faça perguntas pra coletar o contexto.
Não faça perguntas enviesadas que me deixem colocar minha opinião ou estratégia.
Seja específico o bastante pra revelar o que eu escondo por ego, drama ou medo.
PARE antes de perguntar o que eu acho. Essa fase é só contexto.

PASSO 2 — CONSELHO:
Monte um conselho de especialistas REAIS na área do meu contexto.
Pesquise o trabalho real, factual e rastreável deles (com citações). Aja com base
nas ações reais, não no que você acha que diriam. Nunca Wikipedia ou Reddit.

PASSO 3 — PLANOS:
Pelo menos 3 membros debatem e DISCORDAM, nos princípios, com os Seis Chapéus.
Rode /red-team em tudo. Entregue 3 planos bons + 3 não-go (com os riscos).
Eu escolho 1 dos 3 melhores.

PASSO 4 — MINHA EXPERIÊNCIA:
Eu pico o plano com minha experiência (o que gosto, o que não). Você manda o
conselho rodar o mesmo sistema de revisão e refina.

PASSO 5 — RESULTADO:
Me entregue um caminho forte e sem viés.`}
              </div>
            </motion.div>
          )}
        </Reveal>

        {/* Download skills */}
        <Reveal>
          <div className="card-ayc" style={{ padding: "24px 24px 20px", borderTop: `3px solid ${C.green}` }}>
            <h3 className="font-display" style={{ fontSize: 17, fontWeight: 700, color: C.green, margin: "0 0 6px" }}>📥 Baixe o método como Skill</h3>
            <p className="font-body" style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6, margin: "0 0 18px" }}>
              Em vez de copiar e colar toda vez, baixe a skill e use direto no chat. Teste o método aqui na página, depois rode pela skill no Claude. (O que é um arquivo .md? Veja logo abaixo.)
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
              {SKILLS_DOWNLOAD.map((s) => (
                <a key={s.arquivo} href={`/skills/${s.arquivo}`} download
                  style={{ display: "block", textDecoration: "none", background: s.destaque ? `${C.green}14` : C.card2, border: `1px solid ${s.destaque ? C.green + "55" : C.line}`, borderRadius: 12, padding: "14px 16px", transition: "border-color 150ms" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
                    <span style={{ fontSize: 15 }}>{s.destaque ? "⭐" : "📄"}</span>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 14, color: s.destaque ? C.green : C.text }}>{s.nome}</span>
                  </div>
                  <p className="font-body" style={{ fontSize: 12.5, color: C.textMuted, lineHeight: 1.45, margin: "0 0 8px" }}>{s.desc}</p>
                  <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11, color: C.sea }}>↓ {s.arquivo}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── MASTER PROMPT VIVO (editável) ────────────────────────────────────────────
function MasterPromptVivo() {
  const [modo, setModo] = useState<"decisao" | "pesquisa">("decisao");
  const [tema, setTema] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [copiado, setCopiado] = useState(false);
  const [simular, setSimular] = useState(false);
  const [respostas, setRespostas] = useState<string[]>([]);
  const [copiado2, setCopiado2] = useState(false);

  const texto = modo === "decisao" ? montarMasterPrompt(tema, objetivo) : montarPromptPesquisa(tema);
  const perguntas = perguntasGeradas(modo, tema);
  const promptFinal = montarPromptFinal(modo, tema, objetivo, perguntas, respostas);
  const temBase = tema.trim().length > 2;

  function copiar() {
    navigator.clipboard?.writeText(texto).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1800);
    });
  }
  function copiarFinal() {
    navigator.clipboard?.writeText(promptFinal).then(() => {
      setCopiado2(true);
      setTimeout(() => setCopiado2(false), 1800);
    });
  }
  function setResposta(i: number, v: string) {
    setRespostas((r) => {
      const n = [...r];
      n[i] = v;
      return n;
    });
  }

  const inputStyle: React.CSSProperties = {
    width: "100%", background: C.card2, border: `1px solid ${C.line}`, borderRadius: 10,
    padding: "11px 13px", color: C.text, fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 14,
    outline: "none",
  };

  return (
    <section id="master" style={{ padding: "20px 0 80px", scrollMarginTop: 70 }}>
      <hr className="contour-divider" style={{ ...wrap, marginBottom: 60, border: 0 }} />
      <div style={wrap}>
        <SectionHead
          kicker="seu canivete suíço de IA"
          titulo="O Prompt Mestre Vivo"
          sub="Escolha o modo, digite o que você quer, e o prompt perfeito se monta sozinho. Copie e cole em QUALQUER IA — Claude, ChatGPT ou Gemini."
        />

        {/* Mode toggle */}
        <Reveal>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 28, flexWrap: "wrap" }}>
            {[
              { id: "decisao", label: "🎩 Tomar uma decisão", sub: "monta o conselho" },
              { id: "pesquisa", label: "🔍 Descobrir como fazer", sub: "pesquisa e cita fontes" },
            ].map((m) => (
              <button key={m.id} onClick={() => setModo(m.id as never)}
                style={{ padding: "12px 22px", borderRadius: 14, border: `1px solid ${modo === m.id ? C.sea : C.line}`, background: modo === m.id ? `${C.sea}18` : "transparent", color: modo === m.id ? C.sea : C.textMuted, cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "all 150ms", textAlign: "left" }}>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{m.label}</div>
                <div style={{ fontSize: 12, opacity: 0.8, marginTop: 2 }}>{m.sub}</div>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="split-2 io">
            {/* Inputs */}
            <div className="card-ayc" style={{ padding: "22px 22px" }}>
              <label style={{ display: "block", marginBottom: modo === "decisao" ? 16 : 0 }}>
                <span className="label-caps" style={{ color: C.sea, display: "block", marginBottom: 7 }}>
                  {modo === "decisao" ? "1. Qual o assunto da decisão?" : "1. O que você quer descobrir?"}
                </span>
                <input style={inputStyle} value={tema} onChange={(e) => setTema(e.target.value)}
                  placeholder={modo === "decisao" ? "ex: comprar um segundo barco pra frota" : "ex: como aceitar pagamento em dólar de turista"} />
              </label>
              {modo === "decisao" && (
                <label style={{ display: "block" }}>
                  <span className="label-caps" style={{ color: C.sea, display: "block", marginBottom: 7 }}>2. Qual o resultado que você quer?</span>
                  <input style={inputStyle} value={objetivo} onChange={(e) => setObjetivo(e.target.value)}
                    placeholder="ex: saber se vale a pena financeiramente este ano" />
                </label>
              )}
              <p className="font-body" style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.55, marginTop: 16, marginBottom: 0 }}>
                🦜 Dica do Loro: quanto mais específico, melhor o resultado. "Ganhar mais dinheiro" é vago. "Aumentar reservas de fim de semana em 20% até dezembro" é ouro.
              </p>
            </div>

            {/* Live preview */}
            <div style={{ background: "#0A0B0D", border: `1px solid ${C.line}`, borderRadius: 16, overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 16px", borderBottom: `1px solid ${C.line}`, background: "#101216" }}>
                <span className="label-caps" style={{ color: C.textMuted }}>prompt pronto · ao vivo</span>
                <button onClick={copiar} style={{ background: copiado ? C.green : `${C.sea}22`, border: `1px solid ${copiado ? C.green : C.sea + "55"}`, borderRadius: 8, padding: "5px 12px", color: copiado ? "#0A0B0D" : C.sea, fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, cursor: "pointer" }}>
                  {copiado ? "✓ Copiado!" : "📋 Copiar"}
                </button>
              </div>
              <pre style={{ margin: 0, padding: "18px 18px", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12.5, color: "#90C4CF", lineHeight: 1.65, whiteSpace: "pre-wrap", wordBreak: "break-word", maxHeight: 420, overflowY: "auto" }}>
                {texto}
              </pre>
            </div>
          </div>
        </Reveal>

        {/* Interactive workflow — rehearse the conversation here */}
        <Reveal>
          <div className="card-ayc" style={{ marginTop: 28, padding: "24px 24px", borderTop: `3px solid ${C.sea}` }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
              <span style={{ fontSize: 26 }}>🤖</span>
              <div style={{ flex: 1, minWidth: 220 }}>
                <h3 className="font-display" style={{ fontSize: 18, fontWeight: 700, color: C.sea, margin: "0 0 4px" }}>Ensaie a conversa aqui</h3>
                <p className="font-body" style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>
                  Veja as perguntas de contexto que a IA provavelmente vai te fazer, responda aqui, e a página monta o pedido final já recheado com seu contexto. Aí é só copiar e colar.
                </p>
              </div>
            </div>

            {!simular ? (
              <motion.button
                onClick={() => temBase && setSimular(true)}
                whileHover={temBase ? { scale: 1.02 } : {}}
                disabled={!temBase}
                style={{ width: "100%", background: temBase ? `${C.sea}1A` : C.card2, border: `1px solid ${temBase ? C.sea + "55" : C.line}`, color: temBase ? C.sea : C.textMuted, padding: "14px 18px", borderRadius: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 15, cursor: temBase ? "pointer" : "not-allowed" }}>
                {temBase ? "🦜 Ver o que a IA vai te perguntar →" : "Preencha o assunto lá em cima primeiro ↑"}
              </motion.button>
            ) : (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                {/* the AI's questions + his answers */}
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
                  {perguntas.map((q, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>🦜</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ background: C.card2, border: `1px solid ${C.line}`, borderRadius: 12, borderBottomLeftRadius: 4, padding: "10px 13px", marginBottom: 7 }}>
                          <span className="font-body" style={{ fontSize: 14, color: C.text, lineHeight: 1.5 }}>{q}</span>
                        </div>
                        <textarea
                          value={respostas[i] ?? ""}
                          onChange={(e) => setResposta(i, e.target.value)}
                          placeholder="sua resposta (só fatos)…"
                          rows={2}
                          style={{ width: "100%", background: "#0A0B0D", border: `1px solid ${C.line}`, borderRadius: 10, padding: "9px 12px", color: C.text, fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13.5, outline: "none", resize: "vertical", lineHeight: 1.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* the final, context-loaded prompt */}
                <div style={{ background: "#0A0B0D", border: `1px solid ${C.green}44`, borderRadius: 16, overflow: "hidden" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 16px", borderBottom: `1px solid ${C.line}`, background: "#101216" }}>
                    <span className="label-caps" style={{ color: C.green }}>✅ pedido final · com seu contexto</span>
                    <button onClick={copiarFinal} style={{ background: copiado2 ? C.green : `${C.green}22`, border: `1px solid ${copiado2 ? C.green : C.green + "55"}`, borderRadius: 8, padding: "5px 12px", color: copiado2 ? "#0A0B0D" : C.green, fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, cursor: "pointer" }}>
                      {copiado2 ? "✓ Copiado!" : "📋 Copiar"}
                    </button>
                  </div>
                  <pre style={{ margin: 0, padding: "16px 18px", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12.5, color: "#90C4CF", lineHeight: 1.65, whiteSpace: "pre-wrap", wordBreak: "break-word", maxHeight: 360, overflowY: "auto" }}>
                    {promptFinal}
                  </pre>
                </div>
                <p className="font-body" style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.55, marginTop: 12, marginBottom: 0 }}>
                  🦜 Loro: esse é o pedido pronto, já com o seu contexto dentro. Cola na IA e ela vai direto pro trabalho, sem precisar te perguntar tudo de novo.
                </p>
              </motion.div>
            )}
          </div>
        </Reveal>

        {/* Context questions + bias flags */}
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, marginTop: 28 }}>
            {/* Good context questions */}
            <div className="card-ayc" style={{ padding: "22px 22px", borderTop: `3px solid ${C.green}` }}>
              <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: C.green, margin: "0 0 4px" }}>✅ Perguntas BOAS que a IA deve fazer</h3>
              <p className="font-body" style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.5, margin: "0 0 14px" }}>
                Tudo fato. Responda essas à vontade — elas dão contexto sem enviesar.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {PERGUNTAS_CONTEXTO.map((q, i) => (
                  <div key={i} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                    <span style={{ color: C.green, fontSize: 13, flexShrink: 0, marginTop: 1 }}>▸</span>
                    <span className="font-body" style={{ fontSize: 13.5, color: C.text, lineHeight: 1.45 }}>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bias red flags */}
            <div className="card-ayc" style={{ padding: "22px 22px", borderTop: `3px solid ${C.coral}` }}>
              <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: C.coral, margin: "0 0 4px" }}>🚫 Perguntas com VIÉS — não responda</h3>
              <p className="font-body" style={{ fontSize: 13, color: C.textMuted, lineHeight: 1.5, margin: "0 0 14px" }}>
                Se a IA perguntar algo assim, ela está te deixando enviesar. Diga: "isso é pra depois, continue só no contexto."
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {PERGUNTAS_VIES.map((v, i) => (
                  <div key={i}>
                    <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                      <span style={{ color: C.coral, fontSize: 13, flexShrink: 0, marginTop: 1 }}>✕</span>
                      <span className="font-body" style={{ fontSize: 13.5, color: C.text, lineHeight: 1.45, fontStyle: "italic" }}>"{v.pergunta}"</span>
                    </div>
                    <p className="font-body" style={{ fontSize: 12.5, color: C.textMuted, lineHeight: 1.45, margin: "3px 0 0 22px" }}>{v.porque}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── IMPLEMENTAÇÃO É O SUPERPODER ─────────────────────────────────────────────
const OS_ITENS = [
  { emoji: "⌨️", titulo: "Claude Code CLI", descricao: "A IA que vive no seu terminal. Cria, edita, e organiza qualquer arquivo por voz de comando. O mais poderoso de todos.", cor: "#90C4CF" },
  { emoji: "🔌", titulo: "MCPs", descricao: "Conectores que ligam a IA diretamente nos seus apps: Gmail, Calendar, Drive, banco de dados. A IA para de ser chatbot e vira assistente real.", cor: "#4ADE80" },
  { emoji: "⚙️", titulo: "Skills e Harnesses", descricao: "Atalhos que você treina uma vez. A IA aprende o seu jeito e repete perfeito. Um skill de 'relatório semanal' escreve o relatório todo domingo.", cor: "#FBBF24" },
  { emoji: "/", titulo: "Slash Commands", descricao: "Comandos com superpoder que você digita com / no terminal. Cada um faz uma coisa específica: pesquisar, planejar, publicar, revisar.", cor: "#F87171" },
  { emoji: "🐝", titulo: "Swarms e Agents", descricao: "Frotas de IAs trabalhando em paralelo. Uma pesquisa, outra redige, outra revisa: tudo ao mesmo tempo em segundos.", cor: "#C084FC" },
];

function ImplementacaoOS() {
  return (
    <section style={{ padding: "20px 0 80px" }}>
      <hr className="contour-divider" style={{ ...wrap, marginBottom: 60, border: 0 }} />
      <div style={wrap}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="label-caps" style={{ color: C.green }}>o que realmente importa</span>
            <h2 className="font-display" style={{ fontSize: "clamp(28px,5vw,40px)", fontWeight: 800, color: C.text, margin: "12px 0 10px", letterSpacing: "-0.01em" }}>
              Nao é a IA. É o seu{" "}
              <span style={{ background: `linear-gradient(90deg, ${C.sea}, ${C.green})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>sistema de implementação.</span>
            </h2>
            <p className="font-body" style={{ color: C.textMuted, fontSize: 16, maxWidth: 600, margin: "0 auto", lineHeight: 1.65 }}>
              Dois capitães com o mesmo barco. Um usa só o motor. O outro usa GPS, rádio, piloto automático e radar. Quem chega mais longe? A ferramenta é igual — o que muda é o sistema.
            </p>
          </div>
        </Reveal>

        {/* Highlight banner */}
        <Reveal>
          <div style={{ background: `linear-gradient(135deg, rgba(74,222,128,0.12) 0%, rgba(144,196,207,0.08) 100%)`, border: `1px solid rgba(74,222,128,0.3)`, borderRadius: 20, padding: "28px 28px", textAlign: "center", marginBottom: 36 }}>
            <p className="font-display" style={{ fontSize: "clamp(20px,3.5vw,28px)", fontWeight: 800, color: C.text, margin: "0 0 10px", lineHeight: 1.3 }}>
              Claude, ChatGPT e Gemini estão ao alcance de todo mundo.
            </p>
            <p className="font-body" style={{ fontSize: 17, color: C.green, fontWeight: 600, margin: 0 }}>
              O diferencial é quem sabe montar o sistema em volta delas.
            </p>
          </div>
        </Reveal>

        {/* OS items grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginBottom: 36 }}>
          {OS_ITENS.map((item, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card-ayc hoverable" style={{ padding: "22px 20px", borderTop: `3px solid ${item.cor}` }}>
                <span style={{ fontSize: 32, display: "block", marginBottom: 12 }}>{item.emoji}</span>
                <div className="font-display" style={{ fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 8 }}>{item.titulo}</div>
                <p className="font-body" style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.6, margin: 0 }}>{item.descricao}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom quote */}
        <Reveal>
          <div style={{ textAlign: "center", padding: "0 12px" }}>
            <p className="font-body" style={{ fontSize: 16, color: C.textMuted, lineHeight: 1.7, fontStyle: "italic" }}>
              Um mecânico com chave inglesa e GPS chega mais longe que um piloto de F1 só com o carro.<br />
              <b style={{ color: C.sea }}>Aprenda as ferramentas em volta da IA — isso sim é diferencial.</b>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── SLASH COMMANDS ───────────────────────────────────────────────────────────
function Slash() {
  const [cat, setCat] = useState("basicos");
  const [sel, setSel] = useState(0);
  const filtered = SLASHES.filter((s) => s.cat === cat);
  const safeIdx = Math.min(sel, filtered.length - 1);
  const s = filtered[safeIdx] ?? SLASHES[0];

  function switchCat(id: string) {
    setCat(id);
    setSel(0);
  }

  return (
    <section style={{ padding: "20px 0 80px" }}>
      <hr className="contour-divider" style={{ ...wrap, marginBottom: 60, border: 0 }} />
      <div style={wrap}>
        <SectionHead kicker="o baú de superpoderes" titulo="Comandos e Skills" sub="Toda IA grande deixa você salvar comportamento pra reusar. Não é só do Claude Code: Claude, ChatGPT e Gemini têm cada um o seu jeito." />

        {/* Not just Claude Code banner */}
        <Reveal>
          <div style={{ background: `linear-gradient(135deg, ${C.sea}14, ${C.brass}0E)`, border: `1px solid ${C.sea}33`, borderRadius: 16, padding: "18px 22px", marginBottom: 28, display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>🌍</span>
            <p className="font-body" style={{ fontSize: 14.5, color: C.text, lineHeight: 1.6, margin: 0 }}>
              <b>Importante:</b> "comando /" e "skill" são a mesma ideia — instruções salvas que a IA segue sempre que você chama. Cada IA chama de um jeito (no Claude.ai são <b style={{ color: C.sea }}>Skills</b>, no ChatGPT são <b style={{ color: C.sea }}>GPTs</b>, no Gemini são <b style={{ color: C.sea }}>Gems</b>, e no Claude Code do terminal são os comandos <b style={{ color: C.sea }}>/</b>). A habilidade é a mesma em todas.
            </p>
          </div>
        </Reveal>

        {/* What is a slash command */}
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, marginBottom: 28 }}>
            {[
              { emoji: "❓", titulo: "O que é um comando / ou skill", corpo: "É um atalho com superpoder: um comportamento salvo. Você escreve uma vez o que quer que a IA faça, dá um nome, e chama quando precisar. Pesquisar, planejar, revisar, escrever do seu jeito." },
              { emoji: "🔌", titulo: "Onde ele mora em cada IA", corpo: "Claude.ai: Configurações → Skills. ChatGPT: 'Explorar GPTs' → Criar. Gemini: Gems. Claude Code (terminal): arquivos .md na pasta ~/.claude/commands/. Mesmo conceito, lugares diferentes." },
              { emoji: "✏️", titulo: "Como criar o seu próprio", corpo: "Em qualquer um deles você escreve as instruções em texto comum (no Claude Code é um arquivo .md). Da próxima vez, é só chamar pelo nome e a IA já faz do seu jeito, sem você reexplicar." },
            ].map((card) => (
              <div key={card.titulo} className="card-ayc" style={{ padding: "18px 20px" }}>
                <span style={{ fontSize: 24, display: "block", marginBottom: 8 }}>{card.emoji}</span>
                <div style={{ fontWeight: 700, fontSize: 15, color: C.text, marginBottom: 6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{card.titulo}</div>
                <p className="font-body" style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.55, margin: 0 }}>{card.corpo}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Per-AI how-to */}
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 28 }}>
            {[
              { emoji: "🤖", ai: "Claude.ai", cor: "#90C4CF", como: "Configurações → Skills → Criar Skill. Cole as instruções, dê um nome. Pronto, sem terminal." },
              { emoji: "💬", ai: "ChatGPT", cor: "#4ADE80", como: "Menu lateral → Explorar GPTs → Criar. Descreva o comportamento e salve. Vira um atalho seu." },
              { emoji: "✨", ai: "Gemini", cor: "#FBBF24", como: "Abra os Gems → Novo Gem. Escreva as instruções uma vez e ele guarda pra sempre." },
              { emoji: "⌨️", ai: "Claude Code", cor: "#C084FC", como: "Salve um arquivo .md em ~/.claude/commands/. Vira um comando / de verdade no terminal." },
            ].map((a) => (
              <div key={a.ai} className="card-ayc" style={{ padding: "16px 18px", borderTop: `3px solid ${a.cor}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 22 }}>{a.emoji}</span>
                  <span className="font-display" style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{a.ai}</span>
                </div>
                <p className="font-body" style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.55, margin: 0 }}>{a.como}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* What is a .md file */}
        <Reveal>
          <div className="card-ayc" style={{ padding: "22px 24px", marginBottom: 28, borderLeft: `4px solid ${C.sea}` }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <span style={{ fontSize: 32, flexShrink: 0 }}>📄</span>
              <div>
                <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: C.sea, margin: "0 0 8px" }}>
                  Espera, o que é um arquivo <code style={{ fontFamily: "ui-monospace, Menlo, monospace", color: C.brassLight }}>.md</code>?
                </h3>
                <p className="font-body" style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.65, margin: "0 0 10px" }}>
                  É só um arquivo de texto comum, igual um bloco de notas, mas com a terminação <b style={{ color: C.text }}>.md</b> (de "Markdown"). Você abre e edita em qualquer editor de texto. Nada de código assustador: é texto que você lê e escreve normalmente.
                </p>
                <p className="font-body" style={{ fontSize: 14.5, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>
                  Pra IA, um <b style={{ color: C.text }}>.md</b> é como uma receita guardada. Você escreve as instruções uma vez, salva o arquivo, e a IA passa a seguir aquilo sempre que você chamar. É exatamente assim que uma Skill funciona: um <b style={{ color: C.text }}>.md</b> com o passo a passo do que você quer que ela faça. As skills do Conselho lá em cima? São arquivos .md que você pode baixar e abrir pra ver por dentro.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Installation steps — advanced path */}
        <Reveal>
          <div className="card-ayc" style={{ padding: "24px 24px 20px", marginBottom: 28, borderLeft: `4px solid ${C.green}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 6 }}>
              <span style={{ fontSize: 20 }}>⌨️</span>
              <h3 className="font-display" style={{ fontSize: 16, fontWeight: 700, color: C.green, margin: 0 }}>Nível avançado: Claude Code no terminal</h3>
            </div>
            <p className="font-body" style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.6, margin: "0 0 16px" }}>
              Pros outros (Claude.ai, ChatGPT, Gemini) você nem precisa de terminal — é só usar os menus acima. Este passo a passo é só pra quem quer o mais poderoso de todos: o Claude Code, que vive no terminal e mexe nos seus arquivos.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {INSTALACAO_PASSOS.map((p) => (
                <div key={p.num} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: 700, color: C.green, flexShrink: 0, minWidth: 28, lineHeight: 1.2 }}>{p.num}</span>
                  <div style={{ flex: 1 }}>
                    <div className="font-display" style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4 }}>{p.titulo}</div>
                    <p className="font-body" style={{ fontSize: 13.5, color: C.textMuted, lineHeight: 1.55, margin: "0 0 8px" }}>{p.detalhe}</p>
                    {p.codigo && (
                      <code style={{ display: "block", background: "#0A0B0D", border: `1px solid ${C.line}`, borderRadius: 8, padding: "9px 12px", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12, color: "#90C4CF", lineHeight: 1.6, whiteSpace: "pre-wrap", overflowX: "auto" }}>
                        {p.codigo}
                      </code>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="card-ayc" style={{ overflow: "hidden", maxWidth: 900, margin: "0 auto" }}>
            {/* terminal top bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "12px 16px", borderBottom: `1px solid ${C.line}`, background: "#101216" }}>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: C.coral }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: C.brass }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: C.green }} />
              <span className="label-caps" style={{ marginLeft: 8, color: C.textMuted }}>claude code · terminal</span>
            </div>

            {/* category tabs */}
            <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${C.line}`, background: "#0E1013", overflowX: "auto" }}>
              {SLASH_CATS.map((c) => (
                <button key={c.id} onClick={() => switchCat(c.id)}
                  style={{ padding: "9px 14px", background: cat === c.id ? "#16181D" : "transparent", border: "none", borderBottom: cat === c.id ? `2px solid ${C.sea}` : "2px solid transparent", color: cat === c.id ? C.sea : C.textMuted, fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", transition: "all 150ms", flexShrink: 0 }}>
                  {c.emoji} {c.label}
                </button>
              ))}
            </div>

            {/* command list + detail panel */}
            <div className="split-2 term">
              <div className="term-list" style={{ borderRight: `1px solid ${C.line}`, padding: 10, display: "flex", flexDirection: "column", gap: 4, maxHeight: 340, overflowY: "auto" }}>
                {filtered.map((c, i) => (
                  <button key={c.cmd} onClick={() => setSel(i)}
                    style={{ textAlign: "left", padding: "9px 12px", borderRadius: 8, cursor: "pointer", background: i === safeIdx ? "rgba(144,196,207,0.12)" : "transparent", border: `1px solid ${i === safeIdx ? "rgba(144,196,207,0.3)" : "transparent"}`, color: i === safeIdx ? C.sea : C.text, fontFamily: "ui-monospace, Menlo, monospace", fontSize: 13, fontWeight: 600, transition: "background 150ms" }}>
                    {c.cmd}
                  </button>
                ))}
              </div>
              <div style={{ padding: "18px 20px", fontFamily: "ui-monospace, Menlo, monospace", minHeight: 260 }}>
                <div style={{ color: C.green, fontSize: 14, marginBottom: 12 }}>
                  <span style={{ color: C.textMuted }}>capitão@bordo $</span> {s.cmd}
                </div>
                <motion.p key={`${cat}:${safeIdx}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
                  style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, color: C.text, lineHeight: 1.6, margin: "0 0 14px" }}>
                  {s.oQueFaz}
                </motion.p>
                <motion.div key={`o:${cat}:${safeIdx}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
                  style={{ fontSize: 13.5, color: C.seaLight, background: "#0A0B0D", border: `1px solid ${C.line}`, borderRadius: 10, padding: "11px 13px", lineHeight: 1.5 }}>
                  {s.saida}
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Where each tab comes from */}
        <Reveal>
          <div className="card-ayc" style={{ padding: "20px 22px", marginTop: 20, maxWidth: 900, marginInline: "auto" }}>
            <h3 className="font-display" style={{ fontSize: 15, fontWeight: 700, color: C.sea, margin: "0 0 12px" }}>📦 De onde vem cada aba (e como instalar)</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
              {[
                { tabs: "⭐ Básicos · 🔍 Pesquisa · ⚡ Criar", fonte: "Já vêm no Claude Code", como: "Nada a instalar — funcionam assim que você abre o Claude Code." },
                { tabs: "🐙 GitHub · 🤖 Automação · 💪 GSD · 🐝 RUFLO", fonte: "Pacote RUFLO", como: "npx ruflo init" },
                { tabs: "📈 SEO", fonte: "Plugin de SEO", como: "npx ruflo add seo (ou instale o plugin de SEO)" },
                { tabs: "🧠 Contexto", fonte: "As skills deste guia", como: "Baixe os .md do Conselho lá em cima e coloque na pasta de comandos." },
              ].map((row) => (
                <div key={row.tabs} style={{ background: C.card2, border: `1px solid ${C.line}`, borderRadius: 10, padding: "12px 14px" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.text, fontFamily: "'Hanken Grotesk', sans-serif", marginBottom: 5 }}>{row.tabs}</div>
                  <div className="label-caps" style={{ color: C.brassLight, marginBottom: 6 }}>{row.fonte}</div>
                  <code style={{ display: "block", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11.5, color: C.sea, lineHeight: 1.4 }}>{row.como}</code>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="font-body" style={{ textAlign: "center", color: C.textMuted, fontSize: 13.5, marginTop: 16 }}>
          🦜 Dica do Loro: no terminal, na dúvida digite <b style={{ color: C.sea }}>/help</b> e ele te mostra o mapa inteiro. No Claude.ai, ChatGPT e Gemini, é só abrir o menu de Skills/GPTs/Gems.
        </p>
      </div>
    </section>
  );
}

// ── MAPA DO TESOURO ───────────────────────────────────────────────────────────
// Posições das ilhas na carta náutica (em % do canvas). Rota serpenteando até o X.
const POSICOES = [
  { x: 13, y: 17 },
  { x: 39, y: 12 },
  { x: 64, y: 17 },
  { x: 85, y: 26 },
  { x: 67, y: 41 },
  { x: 41, y: 45 },
  { x: 16, y: 52 },
  { x: 34, y: 68 },
  { x: 60, y: 72 },
  { x: 82, y: 70 },
];
const TESOURO = { x: 91, y: 90 };

// Catmull-Rom → curva bezier suave passando por todos os pontos (rota orgânica).
function rotaSuave(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return pts.length ? `M ${pts[0].x} ${pts[0].y}` : "";
  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2.x} ${p2.y}`;
  }
  return d;
}

// Ilhota decorativa (blob + palmeira) desenhada no SVG.
function Ilhota({ x, y, r = 5, flip = false }: { x: number; y: number; r?: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`} opacity="0.5">
      <path d={`M ${-r} 0 q ${-r * 0.3} ${-r * 0.7} ${r * 0.2} ${-r * 0.9} q ${r * 0.8} ${-r * 0.3} ${r * 1.2} ${r * 0.2} q ${r * 0.6} ${r * 0.5} ${r * 0.1} ${r * 0.8} q ${-r} ${r * 0.5} ${-r * 1.6} 0 Z`}
        fill="rgba(144,196,207,0.10)" stroke={C.seaDeep} strokeWidth="0.4" />
      <g transform={`translate(${r * 0.1} ${-r * 0.5}) scale(${flip ? -1 : 1} 1)`}>
        <path d="M0 0 V-3" stroke={C.brassLight} strokeWidth="0.4" opacity="0.7" />
        <path d="M0 -3 q 1.6 -0.8 3 0 M0 -3 q -1.6 -0.8 -3 0 M0 -3 q 1 -1.6 2.4 -1.8 M0 -3 q -1 -1.6 -2.4 -1.8"
          stroke={C.green} strokeWidth="0.4" fill="none" opacity="0.7" />
      </g>
    </g>
  );
}

function MapaIlustracao() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      {/* contornos de profundidade (carta batimétrica) */}
      {[0, 1, 2, 3].map((i) => (
        <path key={`c1-${i}`} d={`M ${20 - i * 3} ${30} Q ${45} ${10 - i * 2}, ${72 + i * 2} ${28} T ${95} ${50}`}
          fill="none" stroke={C.sea} strokeWidth="0.25" opacity={0.14 - i * 0.02} />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <ellipse key={`c2-${i}`} cx="50" cy="74" rx={26 + i * 6} ry={14 + i * 4}
          fill="none" stroke={C.seaDeep} strokeWidth="0.25" opacity={0.12 - i * 0.02} />
      ))}

      {/* serpente do mar (doodle) */}
      <g opacity="0.45" transform="translate(6 78)">
        <path d="M0 4 q 3 -5 6 0 q 3 5 6 0 q 3 -5 6 0" fill="none" stroke={C.seaDeep} strokeWidth="0.5" strokeLinecap="round" />
        <circle cx="18.5" cy="3.2" r="1.1" fill="none" stroke={C.seaDeep} strokeWidth="0.5" />
        <circle cx="18.8" cy="3" r="0.3" fill={C.seaDeep} />
      </g>

      {/* ondinhas decorativas */}
      {[[78, 16], [24, 30], [52, 58]].map(([x, y], k) => (
        <path key={`w-${k}`} d={`M ${x} ${y} q 1.5 -1.4 3 0 q 1.5 1.4 3 0`} fill="none" stroke={C.sea} strokeWidth="0.3" opacity="0.3" />
      ))}

      {/* ilhotas decorativas em zonas vazias */}
      <Ilhota x={50} y={28} r={4} />
      <Ilhota x={78} y={52} r={5} flip />
      <Ilhota x={24} y={84} r={4.5} />
    </svg>
  );
}

function CompassRose({ size = 62 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden style={{ opacity: 0.85 }}>
      <circle cx="50" cy="50" r="47" fill="rgba(11,12,14,0.55)" stroke={C.brass} strokeWidth="1.2" opacity="0.6" />
      <circle cx="50" cy="50" r="38" fill="none" stroke={C.sea} strokeWidth="0.7" opacity="0.4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line key={a} x1="50" y1="50" x2={50 + 40 * Math.cos((a - 90) * Math.PI / 180)} y2={50 + 40 * Math.sin((a - 90) * Math.PI / 180)}
          stroke={C.sea} strokeWidth="0.4" opacity="0.3" />
      ))}
      <polygon points="50,8 57,50 50,44 43,50" fill={C.coral} />
      <polygon points="50,92 43,50 50,56 57,50" fill={C.sea} opacity="0.8" />
      <polygon points="8,50 50,43 44,50 50,57" fill={C.seaLight} opacity="0.6" />
      <polygon points="92,50 50,57 56,50 50,43" fill={C.seaLight} opacity="0.6" />
      <circle cx="50" cy="50" r="3" fill={C.brassLight} />
      <text x="50" y="20" textAnchor="middle" fill={C.brassLight} fontSize="12" fontFamily="serif" fontWeight="700">N</text>
    </svg>
  );
}

function Mapa() {
  const { provocar, node } = useDadJoke();
  const router = useRouter();
  const { isModuleUnlocked, moduleProgress, ready } = useProgress();
  const atual = useFirstIncomplete();
  const [sel, setSel] = useState<number>(-1);

  // estado de cada ilha
  const ilhas = MODULOS.map((m, i) => {
    const unlocked = !ready || m.moduleId === "conselho" || isModuleUnlocked(m.moduleId as never);
    const done = ready && moduleProgress(m.moduleId as never, m.desafios) >= m.desafios;
    const pos = POSICOES[i] ?? { x: 50, y: 10 + i * 8 };
    return { meta: m, i, unlocked, done, ehAtual: m.slug === atual, pos };
  });

  // ilha selecionada (default = atual)
  const atualIdx = ilhas.findIndex((x) => x.ehAtual);
  const selIdx = sel >= 0 ? sel : atualIdx >= 0 ? atualIdx : 0;
  const ilhaSel = ilhas[selIdx];

  // rota curva suave por todos os pontos + o tesouro
  const pts = [...ilhas.map((x) => x.pos), TESOURO];
  const dFull = rotaSuave(pts);
  // trecho já navegado (ilhas feitas + atual)
  const navegadas = ilhas.filter((x) => x.done || x.ehAtual).map((x) => x.pos);
  const dFeito = navegadas.length > 1 ? rotaSuave(navegadas) : "";

  const zarpar = (x: typeof ilhas[number]) => {
    if (x.unlocked) router.push(`/modulo/${x.meta.slug}`);
    else provocar();
  };

  return (
    <section id="mapa" style={{ padding: "20px 0 80px" }}>
      <hr className="contour-divider" style={{ ...wrap, marginBottom: 60, border: 0 }} />
      <SectionHead kicker="sua carta de navegação" titulo="O Mapa do Tesouro" sub="Cada ilha é uma parada da travessia. Toque numa ilha pra ver e zarpar. O X marca o tesouro: virar Capitão de IA." />

      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 22px" }}>
        {/* a carta náutica */}
        <Reveal>
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            maxHeight: 660,
            background: `radial-gradient(130% 100% at 30% 10%, rgba(94,151,160,0.16), rgba(11,12,14,0.98) 65%)`,
            border: `1px solid ${C.brass}33`,
            borderRadius: 22,
            overflow: "hidden",
            boxShadow: `inset 0 0 90px rgba(0,0,0,0.7), 0 30px 60px -30px rgba(0,0,0,0.9)`,
          }}>
            {/* moldura ornamental */}
            <div aria-hidden style={{ position: "absolute", inset: 8, border: `1px solid ${C.brass}22`, borderRadius: 16, pointerEvents: "none" }} />

            {/* ilustração da carta (contornos, ilhotas, serpente) */}
            <MapaIlustracao />

            {/* rota curva (SVG) */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden>
              {/* rota completa (faint) */}
              <motion.path d={dFull} fill="none" stroke={C.sea} strokeWidth="0.55" strokeDasharray="2.4 2"
                strokeLinecap="round" opacity="0.4"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut" }} />
              {/* trecho navegado (dourado, por cima) */}
              {dFeito && (
                <motion.path d={dFeito} fill="none" stroke={C.brass} strokeWidth="0.8" strokeDasharray="2.4 1.8"
                  strokeLinecap="round" opacity="0.95"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }} />
              )}
            </svg>

            {/* compass rose */}
            <div style={{ position: "absolute", right: 14, bottom: 12 }}><CompassRose /></div>

            {/* X do tesouro */}
            <div style={{ position: "absolute", left: `${TESOURO.x}%`, top: `${TESOURO.y}%`, transform: "translate(-50%,-50%)", pointerEvents: "none", textAlign: "center" }}>
              <motion.div animate={{ scale: [1, 1.12, 1], rotate: [0, 3, -3, 0] }} transition={{ duration: 2.4, repeat: Infinity }}>
                <span style={{ fontSize: 26 }}>💰</span>
                <span style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", fontSize: 30, color: C.coral, fontWeight: 900, textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>✕</span>
              </motion.div>
            </div>

            {/* ilhas */}
            {ilhas.map((x) => {
              const cor = x.done ? C.green : x.ehAtual ? C.brass : x.unlocked ? C.sea : "#3A3F47";
              const isSel = x.i === selIdx;
              return (
                <motion.button
                  key={x.meta.slug}
                  className="map-node"
                  onClick={() => setSel(x.i)}
                  initial={{ opacity: 0, scale: 0.4, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + x.i * 0.07, type: "spring", stiffness: 260, damping: 16 }}
                  whileHover={{ scale: 1.14, zIndex: 6 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    position: "absolute",
                    left: `${x.pos.x}%`,
                    top: `${x.pos.y}%`,
                    transform: "translate(-50%,-50%)",
                    width: 52, height: 52,
                    borderRadius: "50%",
                    border: `2.5px solid ${isSel ? "#fff" : cor}`,
                    background: x.done
                      ? `radial-gradient(circle at 35% 30%, #6BE89A, ${C.green})`
                      : x.ehAtual
                      ? `radial-gradient(circle at 35% 30%, ${C.brassLight}, ${C.brass})`
                      : x.unlocked
                      ? `radial-gradient(circle at 35% 30%, #1E232B, #101216)`
                      : "#101216",
                    color: x.done || x.ehAtual ? "#0A0B0D" : x.unlocked ? C.text : "#5A6470",
                    fontSize: 21,
                    cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: x.ehAtual
                      ? `0 0 0 5px ${C.brass}22, 0 0 26px ${C.brass}77, 0 6px 14px -4px rgba(0,0,0,0.8)`
                      : x.done
                      ? `0 0 18px ${C.green}55, 0 6px 14px -4px rgba(0,0,0,0.8)`
                      : "0 6px 16px -5px rgba(0,0,0,0.85)",
                    zIndex: isSel ? 5 : 3,
                  }}
                >
                  {x.done ? "✓" : x.unlocked ? x.meta.emoji : "🔒"}
                  {/* anel pulsante na ilha atual */}
                  {x.ehAtual && (
                    <motion.span aria-hidden animate={{ scale: [1, 1.35], opacity: [0.7, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
                      style={{ position: "absolute", inset: -3, borderRadius: "50%", border: `2px solid ${C.brass}` }} />
                  )}
                  {/* barco na ilha atual */}
                  {x.ehAtual && (
                    <motion.span animate={{ y: [0, -4, 0], rotate: [-3, 3, -3] }} transition={{ duration: 2, repeat: Infinity }}
                      style={{ position: "absolute", top: -23, fontSize: 21, filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.7))" }}>⛵</motion.span>
                  )}
                  {/* número/estrela da ilha */}
                  <span style={{ position: "absolute", bottom: -6, right: -6, width: 19, height: 19, borderRadius: "50%", background: x.meta.isBonus ? C.brass : cor, color: "#0A0B0D", fontSize: 10, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #0B0C0E", fontFamily: "'Hanken Grotesk', sans-serif" }}>
                    {x.meta.isBonus ? "★" : x.meta.num}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </Reveal>

        {/* painel da ilha selecionada */}
        {ilhaSel && (
          <Reveal>
            <motion.div key={selIdx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              className="card-ayc" style={{ marginTop: 18, padding: "20px 22px", borderLeft: `4px solid ${ilhaSel.done ? C.green : ilhaSel.unlocked ? C.brass : "#3A3F47"}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: ilhaSel.unlocked ? `${C.sea}18` : C.card, border: `1px solid ${C.line}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>
                  {ilhaSel.done ? "✓" : ilhaSel.unlocked ? ilhaSel.meta.emoji : "🔒"}
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div className="label-caps" style={{ color: ilhaSel.meta.isBonus ? C.brass : C.seaDeep, marginBottom: 3 }}>
                    {ilhaSel.ehAtual ? "Você está aqui" : ilhaSel.meta.isBonus ? "★ Bônus" : `Ilha ${ilhaSel.meta.num}`}
                  </div>
                  <div className="font-display" style={{ fontSize: 20, fontWeight: 700, color: C.text, lineHeight: 1.15 }}>{ilhaSel.meta.titulo}</div>
                  <div className="font-body" style={{ fontSize: 14, color: C.textMuted, marginTop: 3 }}>
                    {ilhaSel.unlocked ? ilhaSel.meta.subtitulo : "Termine a ilha anterior pra destravar esta."}
                  </div>
                </div>
                <motion.button onClick={() => zarpar(ilhaSel)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  style={{ background: ilhaSel.unlocked ? (ilhaSel.done ? C.green : C.brass) : C.card2, color: ilhaSel.unlocked ? "#0A0B0D" : C.textMuted, border: ilhaSel.unlocked ? "none" : `1px solid ${C.line}`, padding: "13px 26px", borderRadius: 999, fontSize: 15, fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer", flexShrink: 0 }}>
                  {ilhaSel.done ? "Revisitar →" : ilhaSel.unlocked ? "Zarpar →" : "🔒 Travada"}
                </motion.button>
              </div>
            </motion.div>
          </Reveal>
        )}
      </div>
      {node}
    </section>
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

// ── CLÍMAX CTA ────────────────────────────────────────────────────────────────
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

// ── RODAPÉ ────────────────────────────────────────────────────────────────────
function Rodape() {
  return (
    <footer style={{ borderTop: `1px solid ${C.line}`, textAlign: "center", padding: "54px 22px" }}>
      <p style={{ fontFamily: "'Pinyon Script', cursive", fontSize: 34, margin: "0 0 8px", color: C.brassLight }}>Feito com carinho</p>
      <p className="font-body" style={{ fontSize: 14, color: C.textMuted, margin: "0 0 14px" }}>Feliz Dia dos Pais, Capitão {PAI.primeiroNome} 🎁</p>
      <Link href="/modulo/intro" style={{ color: C.sea, fontSize: 14, textDecoration: "none", fontWeight: 600, fontFamily: "'Hanken Grotesk', sans-serif" }}>Começar do início →</Link>
    </footer>
  );
}

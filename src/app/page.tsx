"use client";

import { useState } from "react";

// ─── colour tokens (mirrors CSS variables) ───────────────────────────────────
const C = {
  navyDeep: "#0F2040",
  navy: "#1C3F6E",
  navyDark: "#152E52",
  seafoam: "#4A9B7F",
  seafoamLight: "#5BB893",
  gold: "#F59E0B",
  goldLight: "#FCD34D",
  offWhite: "#F4F7FA",
  muted: "#93b8d4",
};

// ─── reusable styles ─────────────────────────────────────────────────────────
const card: React.CSSProperties = {
  background: C.navy,
  borderRadius: 12,
  padding: "28px 28px",
  position: "relative",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(28px, 5vw, 44px)",
  fontWeight: 700,
  color: C.offWhite,
  marginBottom: 8,
};

const label: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: C.seafoam,
  marginBottom: 12,
};

// ─── data ─────────────────────────────────────────────────────────────────────

const TICKER_TEXT =
  "  ★  GPT-4o fala, vê e ouve ao mesmo tempo  ★  Claude escreve código melhor que a maioria dos devs  ★  Gemini processa 1 hora de vídeo em segundos  ★  24h em IA = 3–5 anos de progresso tecnológico  ★  Agentes autônomos já trabalham enquanto você dorme  ★  Em 2025 um swarm de agentes construiu um app inteiro sem intervenção humana  ★";

const MODULES = [
  { id: "modulo1", num: "01", title: "O Que É IA", sub: "Conceito, analogias e limites", dif: "Iniciante", pct: 100 },
  { id: "modulo2", num: "02", title: "Slash Commands", sub: "Os atalhos secretos do Enzo", dif: "Iniciante", pct: 100 },
  { id: "modulo3", num: "03", title: "Claude vs ChatGPT vs Gemini", sub: "Qual usar em cada situação", dif: "Básico", pct: 100 },
  { id: "modulo4", num: "04", title: "MCPs, Skills & Harnesses", sub: "A pirâmide de poder", dif: "Intermediário", pct: 100 },
  { id: "modulo5", num: "05", title: "Agentes & Swarms", sub: "IA que trabalha sozinha", dif: "Avançado", pct: 100 },
  { id: "modulo6", num: "06", title: "Exercícios Práticos", sub: "Coloque a mão na massa", dif: "Todos os níveis", pct: 100 },
];

const DIF_COLOR: Record<string, string> = {
  "Iniciante": C.seafoam,
  "Básico": C.seafoamLight,
  "Intermediário": C.gold,
  "Avançado": "#E05252",
  "Todos os níveis": C.muted,
};

const NUGGETS = [
  {
    n: 3,
    title: "\"Você é um [papel]\" é a frase mais poderosa",
    body: "Antes de qualquer pedido, defina o papel da IA. Isso ativa um \"modo mental\" específico com anos de treinamento concentrado.",
    ex: 'Você é um especialista em contratos náuticos. Revise este termo...',
  },
  {
    n: 4,
    title: "Sempre peça 3 opções, nunca 1",
    body: "A primeira resposta da IA é um ponto de partida, não uma resposta definitiva. Pedir 3 opções força ela a explorar o espaço de soluções.",
    ex: 'Me dê 3 versões diferentes desta mensagem para o cliente.',
  },
  {
    n: 5,
    title: "Contexto mata ambiguidade. Ambiguidade mata resultado.",
    body: "Quanto mais contexto você der, melhor a resposta. A IA não sabe que você tem um cliente VIP, que o prazo é amanhã, ou que o tom deve ser formal.",
    ex: 'Contexto: cliente pagou R$50k, quer resposta hoje, estilo formal...',
  },
  {
    n: 6,
    title: "Primeira resposta = rascunho. Sempre refine.",
    body: "Nunca aceite a primeira resposta como final. Diga \"melhore X\", \"seja mais direto\", \"adicione Y\". Refinamento é onde a mágica acontece.",
    ex: 'Bom. Agora torne mais conciso e adicione um call-to-action no final.',
  },
  {
    n: 7,
    title: "Framework PAPEL — 5 ingredientes de um prompt perfeito",
    body: "Papel + Ação + Público + Estilo + Limite. Cada ingrediente que você adiciona melhora o resultado exponencialmente.",
    ex: '[Papel] Você é corretor [Ação] escreva [Público] para cliente exec [Estilo] formal [Limite] máx 3 parágrafos',
  },
  {
    n: 8,
    title: '"Pense passo a passo" — 2 palavras que valem ouro',
    body: "Essa instrução força a IA a usar raciocínio encadeado, reduzindo erros em problemas complexos em até 40%.",
    ex: 'Pense passo a passo antes de responder: qual é o risco desta cláusula?',
  },
  {
    n: 9,
    title: "Peça para questionar, não só executar",
    body: "A IA tende a fazer exatamente o que você pede, mesmo que o pedido seja ruim. Diga explicitamente para ela desafiar suas premissas.",
    ex: 'Se achar que minha abordagem está errada, me diga antes de executar.',
  },
  {
    n: 10,
    title: "Nunca confie em fatos sem checar",
    body: "IAs \"alucinam\" — inventam referências, datas, nomes. Para fatos, use /deep-research ou peça fontes verificáveis explicitamente.",
    ex: 'Cite apenas fontes verificáveis. Se não tiver certeza, diga "não sei".',
  },
];

const SLASH_COMMANDS = [
  { cmd: "/gsd-do", desc: "Executa uma tarefa complexa com planejamento automático" },
  { cmd: "/gsd-plan-phase", desc: "Planeja uma fase inteira de desenvolvimento" },
  { cmd: "/gsd-debug", desc: "Investiga e corrige bugs com método científico" },
  { cmd: "/gsd-code-review", desc: "Revisa código buscando bugs e melhorias" },
  { cmd: "/gsd-ui-phase", desc: "Constrói interfaces com design system completo" },
  { cmd: "/gsd-ship", desc: "Prepara e faz o deploy do projeto" },
  { cmd: "/deep-research", desc: "Pesquisa profunda com múltiplas fontes verificadas" },
  { cmd: "/code-review --fix", desc: "Revisa E já corrige os problemas encontrados" },
  { cmd: "/ui-ux-pro-max", desc: "Gera paleta, tipografia e sistema de design" },
  { cmd: "/sparc:architect", desc: "Projeta a arquitetura de software do zero" },
  { cmd: "/gsd-security-review", desc: "Auditoria de segurança do código" },
  { cmd: "/gsd-progress", desc: "Relatório do progresso do projeto" },
];

const MCP_CARDS = [
  { name: "Gmail", icon: "✉", desc: "Lê, escreve e organiza e-mails" },
  { name: "Google Calendar", icon: "📅", desc: "Cria e gerencia eventos" },
  { name: "Higgsfield", icon: "🎬", desc: "Gera vídeos com IA" },
  { name: "Motion", icon: "▶", desc: "Cria e edita vídeos automaticamente" },
  { name: "Computer Use", icon: "🖥", desc: "Controla o mouse e teclado do Mac" },
  { name: "Supabase", icon: "🗄", desc: "Gerencia banco de dados" },
  { name: "Stitch", icon: "🎨", desc: "Gera mockups e telas de app" },
  { name: "Nano Banana", icon: "🖼", desc: "Gera imagens com Gemini" },
  { name: "Vercel", icon: "▲", desc: "Faz deploy de sites na nuvem" },
  { name: "Claude Flow", icon: "⚡", desc: "Orquestra agentes e swarms" },
  { name: "21st Magic", icon: "✦", desc: "Componentes de UI prontos" },
  { name: "Microsoft 365", icon: "📊", desc: "Word, Excel, Teams integrados" },
];

const EXERCISES_BASIC = [
  "Acesse claude.ai e escreva: \"Você é um especialista em iatismo. Explique o que é um catamarã para alguém que nunca viu o mar.\"",
  "Peça para a IA criar 3 versões de uma mensagem de boas-vindas para hóspedes do barco.",
  "Diga: \"Pense passo a passo: quais são os 5 maiores riscos de um charter de 7 dias nas Bahamas?\"",
  "Peça um checklist de preparação para um charter e depois diga: \"Agora refine: adicione estimativas de tempo para cada item.\"",
];

const EXERCISES_MID = [
  "Use o framework PAPEL: defina o papel, ação, público, estilo e limite em um único prompt.",
  "Peça à IA para questionar uma decisão sua antes de executar: \"Se minha abordagem estiver errada, me avise.\"",
  "Peça 3 estratégias de marketing para o seu negócio e depois peça: \"Compare as 3 em uma tabela com prós e contras.\"",
  "Teste a diferença entre Claude e ChatGPT: faça a mesma pergunta técnica nos dois e compare as respostas.",
];

const EXERCISES_ADV = [
  "Experimente o /deep-research com uma pergunta de negócio real (ex: \"Qual o mercado de charter de luxo no Caribe em 2025?\").",
  "Crie um prompt com mais de 200 palavras de contexto e compare o resultado com um prompt de 10 palavras.",
  "Descreva um processo repetitivo do seu negócio e peça: \"Como um agente de IA poderia automatizar isso?\"",
  "Peça à IA para simular uma negociação difícil com um cliente e pratique suas respostas.",
];

// ─── components ───────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p style={label}>{children}</p>;
}

function GoldNuggetCard({ n, title, body, ex }: { n: number; title: string; body: string; ex: string }) {
  return (
    <div
      className="nugget-top card-lift"
      style={{
        ...card,
        borderTop: "none",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 14 }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 36,
            fontWeight: 700,
            color: C.gold,
            lineHeight: 1,
            minWidth: 40,
          }}
        >
          #{n}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            fontWeight: 600,
            color: C.offWhite,
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
      </div>
      <p style={{ fontSize: 17, lineHeight: 1.65, color: C.muted, marginBottom: 14 }}>{body}</p>
      <div
        style={{
          background: C.navyDark,
          borderRadius: 8,
          padding: "12px 16px",
          fontFamily: "var(--font-mono)",
          fontSize: 14,
          color: C.seafoamLight,
          lineHeight: 1.5,
        }}
      >
        {ex}
      </div>
    </div>
  );
}

function ExerciseList({
  items,
  done,
  toggle,
  offset,
}: {
  items: string[];
  done: Record<number, boolean>;
  toggle: (i: number) => void;
  offset: number;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((item, idx) => {
        const key = offset + idx;
        const isDone = done[key] ?? false;
        return (
          <button
            key={key}
            onClick={() => toggle(key)}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              background: isDone ? "rgba(74,155,127,0.12)" : C.navyDark,
              border: `1px solid ${isDone ? C.seafoam : "transparent"}`,
              borderRadius: 10,
              padding: "16px 18px",
              textAlign: "left",
              cursor: "pointer",
              transition: "all 200ms ease",
              minHeight: 44,
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,
                minWidth: 24,
                borderRadius: 6,
                border: `2px solid ${isDone ? C.seafoam : C.muted}`,
                background: isDone ? C.seafoam : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 1,
                transition: "all 200ms ease",
              }}
            >
              {isDone && (
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5l3.5 3.5L11 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span
              style={{
                fontSize: 17,
                lineHeight: 1.55,
                color: isDone ? C.seafoamLight : C.offWhite,
                textDecoration: isDone ? "line-through" : "none",
                opacity: isDone ? 0.7 : 1,
              }}
            >
              {item}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [done, setDone] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setDone((d) => ({ ...d, [i]: !d[i] }));

  const totalExercises = EXERCISES_BASIC.length + EXERCISES_MID.length + EXERCISES_ADV.length;
  const doneCount = Object.values(done).filter(Boolean).length;

  return (
    <div style={{ background: C.navyDeep, minHeight: "100vh", color: C.offWhite }}>

      {/* ─── STICKY NAV ──────────────────────────────────────────────── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(15,32,64,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid rgba(74,155,127,0.2)`,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
          gap: 16,
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            fontWeight: 700,
            color: C.offWhite,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Do Zero ao Enzo 🤝
        </a>
        <div
          style={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          {[
            ["#modulo1", "O que é"],
            ["#slash", "Ferramentas"],
            ["#nuggets", "Nuggets"],
            ["#modulo3", "IAs"],
            ["#exercicios", "Exercícios"],
          ].map(([href, text]) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: C.muted,
                textDecoration: "none",
                padding: "6px 10px",
                borderRadius: 6,
                transition: "color 150ms",
                minHeight: 44,
                display: "flex",
                alignItems: "center",
              }}
            >
              {text}
            </a>
          ))}
        </div>
      </nav>

      {/* ─── TICKER ──────────────────────────────────────────────────── */}
      <div
        style={{
          background: C.gold,
          overflow: "hidden",
          height: 40,
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          className="ticker-anim"
          style={{
            whiteSpace: "nowrap",
            fontWeight: 700,
            fontSize: 14,
            color: C.navyDeep,
            letterSpacing: "0.03em",
          }}
        >
          {TICKER_TEXT}
        </p>
      </div>

      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          padding: "96px 24px 80px",
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p style={{ ...label, textAlign: "center", marginBottom: 20 }}>Feliz Dia dos Pais — com amor do Enzo</p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 8vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Do Zero ao Enzo{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            em IA
          </span>
        </h1>
        <p
          style={{
            fontSize: "clamp(18px, 2.5vw, 22px)",
            lineHeight: 1.65,
            color: C.muted,
            maxWidth: 680,
            margin: "0 auto 40px",
          }}
        >
          Tudo que o Enzo usa todo dia — explicado do jeito que faz sentido pra você. Sem jargão, com exemplos reais do mundo dos yachts.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
          {[
            { href: "#modulo1", label: "Começar do Zero", primary: true },
            { href: "#nuggets", label: "Ver Nuggets de Ouro", primary: false },
            { href: "#ritmo", label: "Por que IA é urgente?", primary: false },
          ].map(({ href, label: l, primary }) => (
            <a
              key={href}
              href={href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 52,
                padding: "0 28px",
                borderRadius: 10,
                fontWeight: 600,
                fontSize: 17,
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 200ms ease",
                ...(primary
                  ? { background: C.seafoam, color: "#fff" }
                  : { background: C.navy, color: C.offWhite, border: `1px solid rgba(74,155,127,0.3)` }),
              }}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 16,
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          {[
            ["6", "Módulos"],
            ["12", "Golden Nuggets"],
            ["20+", "Exercícios"],
            ["∞", "Possibilidades"],
          ].map(([num, lbl]) => (
            <div key={lbl} style={{ ...card, textAlign: "center", padding: "24px 16px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 44,
                  fontWeight: 700,
                  color: C.gold,
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {num}
              </p>
              <p style={{ fontSize: 16, color: C.muted, fontWeight: 500 }}>{lbl}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── RITMO DA IA ─────────────────────────────────────────────── */}
      <section id="ritmo" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Por que isso importa agora</SectionLabel>
        <h2 style={sectionTitle}>O Ritmo da IA</h2>
        <p style={{ fontSize: 19, color: C.muted, maxWidth: 640, lineHeight: 1.65, marginBottom: 48 }}>
          IA não evolui como tecnologia normal. Ela acelera dentro dela mesma.
        </p>

        {/* Big card */}
        <div
          style={{
            ...card,
            background: C.navyDark,
            border: `1px solid rgba(245,158,11,0.3)`,
            marginBottom: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ ...label, fontSize: 13 }}>A equação que mudou tudo</p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 4vw, 38px)",
                fontWeight: 700,
                color: C.offWhite,
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              24 horas em IA
              <br />
              <span style={{ color: C.gold }}>= quantos anos?</span>
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: C.muted }}>
              Em tecnologia convencional, 24 horas é 24 horas. Em IA, 24 horas de avanço equivalem a <strong style={{ color: C.goldLight }}>3 a 5 anos</strong> de progresso tecnológico tradicional.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Tecnologia normal (celular, TV...)", pct: 15, color: C.muted },
              { label: "Software tradicional", pct: 35, color: C.seafoam },
              { label: "1 dia em IA", pct: 95, color: C.gold },
            ].map(({ label: l, pct, color }) => (
              <div key={l}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 15, color: C.offWhite }}>{l}</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color }}>{pct}%</span>
                </div>
                <div style={{ height: 10, background: "rgba(255,255,255,0.08)", borderRadius: 5 }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${pct}%`,
                      background: color,
                      borderRadius: 5,
                      transition: "width 600ms ease",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {[
            { date: "Nov 2022", event: "ChatGPT lançado", note: "1 milhão de usuários em 5 dias" },
            { date: "Mar 2023", event: "GPT-4 passa em exames de medicina e direito", note: "Top 10% dos melhores alunos" },
            { date: "2024", event: "Agentes autônomos surgem", note: "IAs que tomam decisões sozinhas" },
            { date: "2025", event: "Swarms de agentes", note: "Times de IAs trabalhando juntas 24/7" },
          ].map(({ date, event, note }) => (
            <div key={date} style={{ ...card, borderLeft: `3px solid ${C.seafoam}`, padding: "20px 20px" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: C.seafoam, marginBottom: 6, letterSpacing: "0.05em" }}>
                {date}
              </p>
              <p style={{ fontSize: 17, fontWeight: 600, color: C.offWhite, marginBottom: 6, lineHeight: 1.3 }}>{event}</p>
              <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.5 }}>{note}</p>
            </div>
          ))}
        </div>

        {/* Key insight */}
        <div
          className="glow-seafoam"
          style={{
            ...card,
            background: "rgba(74,155,127,0.1)",
            border: `1px solid ${C.seafoam}`,
            padding: "28px 32px",
          }}
        >
          <p style={{ ...label, color: C.seafoam }}>A estratégia do Enzo</p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 600,
              color: C.offWhite,
              lineHeight: 1.4,
            }}
          >
            "Aprendo conceitos, não ferramentas. As ferramentas mudam todo mês. Os conceitos ficam."
          </p>
          <p style={{ fontSize: 18, color: C.muted, marginTop: 12, lineHeight: 1.6 }}>
            Entender como formular um bom prompt, quando usar um agente, e como estruturar contexto — isso vale em qualquer IA, hoje e daqui a 5 anos.
          </p>
        </div>
      </section>

      {/* ─── MODULE MAP ──────────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Roteiro de aprendizado</SectionLabel>
        <h2 style={sectionTitle}>Os 6 Módulos</h2>
        <p style={{ fontSize: 19, color: C.muted, marginBottom: 40, lineHeight: 1.65 }}>
          Clique em qualquer módulo para ir direto ao conteúdo.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {MODULES.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="card-lift"
              style={{
                ...card,
                textDecoration: "none",
                display: "block",
                borderLeft: `4px solid ${DIF_COLOR[m.dif] ?? C.muted}`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.15)",
                  }}
                >
                  {m.num}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: DIF_COLOR[m.dif] ?? C.muted,
                    background: "rgba(0,0,0,0.25)",
                    padding: "3px 10px",
                    borderRadius: 20,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {m.dif}
                </span>
              </div>
              <p style={{ fontSize: 20, fontWeight: 600, color: C.offWhite, marginBottom: 4, lineHeight: 1.3 }}>
                {m.title}
              </p>
              <p style={{ fontSize: 16, color: C.muted, marginBottom: 16, lineHeight: 1.5 }}>{m.sub}</p>
              <div style={{ height: 4, background: "rgba(255,255,255,0.08)", borderRadius: 2 }}>
                <div
                  style={{
                    height: "100%",
                    width: `${m.pct}%`,
                    background: DIF_COLOR[m.dif] ?? C.muted,
                    borderRadius: 2,
                  }}
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── MÓDULO 1 ────────────────────────────────────────────────── */}
      <section id="modulo1" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Módulo 01 — Iniciante</SectionLabel>
        <h2 style={sectionTitle}>O Que É Inteligência Artificial?</h2>

        {/* Analogy */}
        <div style={{ ...card, marginBottom: 24, background: C.navyDark }}>
          <p style={{ ...label, color: C.gold }}>A melhor analogia</p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 600,
              color: C.offWhite,
              lineHeight: 1.4,
              marginBottom: 16,
            }}
          >
            Imagine um funcionário que leu todos os livros, artigos, sites e contratos que existem — e está disponível 24 horas por dia para responder qualquer pergunta.
          </p>
          <p style={{ fontSize: 18, color: C.muted, lineHeight: 1.65 }}>
            Ele não "pensa" como humano, mas reconhece padrões em bilhões de textos e gera a resposta mais provável. É um espelho gigante do conhecimento humano — muito bom em algumas coisas, muito ruim em outras.
          </p>
        </div>

        {/* Two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 32 }}>
          <div style={{ ...card, borderTop: `3px solid ${C.seafoam}` }}>
            <p style={{ fontWeight: 700, fontSize: 18, color: C.seafoam, marginBottom: 16 }}>IA é boa em...</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Escrever e reescrever textos",
                "Resumir documentos longos",
                "Responder perguntas com base em contexto",
                "Gerar código funcional",
                "Traduzir idiomas",
                "Brainstorm de ideias",
                "Analisar padrões e dados",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 10, fontSize: 17, color: C.offWhite, alignItems: "flex-start" }}>
                  <span style={{ color: C.seafoam, fontWeight: 700, minWidth: 16 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ ...card, borderTop: `3px solid #E05252` }}>
            <p style={{ fontWeight: 700, fontSize: 18, color: "#E05252", marginBottom: 16 }}>IA NÃO é boa em...</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Fatos recentes (tem data de corte)",
                "Contas matemáticas complexas sem verificação",
                "Conhecimento do seu negócio específico",
                "Acessar a internet em tempo real (sem plugins)",
                "Memória entre conversas (sem configuração)",
                "Decisões que exigem julgamento ético real",
                "Inventar fatos — ela tenta mas erra",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: 10, fontSize: 17, color: C.offWhite, alignItems: "flex-start" }}>
                  <span style={{ color: "#E05252", fontWeight: 700, minWidth: 16 }}>✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nugget #1 and #2 inline */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          <div className="nugget-top" style={{ ...card, overflow: "hidden" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, color: C.gold, lineHeight: 1 }}>
                #1
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: C.offWhite, lineHeight: 1.3 }}>
                IA não sabe o que não te disseram
              </h3>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: C.muted }}>
              A IA só tem acesso ao que está na conversa. Ela não sabe que você tem um barco de 18m, 3 funcionários, e um cliente VIP chegando na sexta. Você precisa contar isso a ela.
            </p>
          </div>
          <div className="nugget-top" style={{ ...card, overflow: "hidden" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, color: C.gold, lineHeight: 1 }}>
                #2
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: C.offWhite, lineHeight: 1.3 }}>
                Lixo entra, lixo sai
              </h3>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: C.muted }}>
              A qualidade da sua pergunta determina a qualidade da resposta. Um prompt vago gera resposta vaga. Um prompt detalhado, com papel, contexto e objetivo, gera resultado profissional.
            </p>
          </div>
        </div>
      </section>

      {/* ─── GOLDEN NUGGETS FEED ─────────────────────────────────────── */}
      <section id="nuggets" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Os segredos do ofício</SectionLabel>
        <h2 style={sectionTitle}>Golden Nuggets de IA</h2>
        <p style={{ fontSize: 19, color: C.muted, marginBottom: 48, lineHeight: 1.65, maxWidth: 640 }}>
          Estes são os princípios que o Enzo aplica em cada conversa com IA. Cada um levou tempo para descobrir. Agora são seus.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {NUGGETS.map((ng) => (
            <GoldNuggetCard key={ng.n} {...ng} />
          ))}
        </div>
      </section>

      {/* ─── MÓDULO 2: SLASH COMMANDS ────────────────────────────────── */}
      <section id="slash" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Módulo 02 — Iniciante</SectionLabel>
        <h2 style={sectionTitle}>Slash Commands</h2>
        <div
          style={{
            ...card,
            background: C.navyDark,
            marginBottom: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ ...label, color: C.gold }}>A analogia certa</p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(20px, 3vw, 26px)",
                fontWeight: 600,
                color: C.offWhite,
                lineHeight: 1.4,
                marginBottom: 12,
              }}
            >
              Pense nos combos secretos de videogame dos anos 90.
            </p>
            <p style={{ fontSize: 18, color: C.muted, lineHeight: 1.65 }}>
              Em vez de digitar uma instrução longa, o Enzo criou atalhos chamados slash commands. Digitar{" "}
              <code
                style={{
                  fontFamily: "var(--font-mono)",
                  background: C.navy,
                  padding: "2px 8px",
                  borderRadius: 4,
                  fontSize: 15,
                  color: C.seafoamLight,
                }}
              >
                /gsd-debug
              </code>{" "}
              dispara automaticamente um agente especializado que investiga o problema com método científico.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <p style={{ fontSize: 16, color: C.muted, marginBottom: 8 }}>Sem slash command:</p>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: "#E05252",
                background: "rgba(224,82,82,0.1)",
                padding: "12px 16px",
                borderRadius: 8,
                lineHeight: 1.6,
              }}
            >
              "Você pode verificar meu código, encontrar o bug, sugerir uma solução e explicar por que aconteceu?"
            </div>
            <p style={{ fontSize: 16, color: C.muted, margin: "8px 0" }}>Com slash command:</p>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: C.seafoamLight,
                background: "rgba(74,155,127,0.1)",
                padding: "12px 16px",
                borderRadius: 8,
                lineHeight: 1.6,
              }}
            >
              /gsd-debug
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
          {SLASH_COMMANDS.map(({ cmd, desc }) => (
            <div
              key={cmd}
              className="card-lift"
              style={{
                ...card,
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <code
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: C.seafoamLight,
                }}
              >
                {cmd}
              </code>
              <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MÓDULO 3: IAs ───────────────────────────────────────────── */}
      <section id="modulo3" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Módulo 03 — Básico</SectionLabel>
        <h2 style={sectionTitle}>Claude vs ChatGPT vs Gemini</h2>
        <p style={{ fontSize: 19, color: C.muted, marginBottom: 40, lineHeight: 1.65 }}>
          São ferramentas diferentes para tarefas diferentes — como um alicate, uma faca e uma chave de fenda.
        </p>

        {/* Comparison table */}
        <div style={{ overflowX: "auto", marginBottom: 32 }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 17, minWidth: 560 }}>
            <thead>
              <tr>
                {["", "Claude", "ChatGPT", "Gemini"].map((h, i) => (
                  <th
                    key={h}
                    style={{
                      padding: "14px 18px",
                      textAlign: "left",
                      fontWeight: 700,
                      fontSize: 16,
                      color: i === 1 ? C.seafoam : i === 2 ? "#10A37F" : i === 3 ? "#4285F4" : C.muted,
                      borderBottom: `2px solid rgba(255,255,255,0.08)`,
                      background: C.navyDark,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Melhor para", "Código & raciocínio longo", "Multimodal & plugins", "Pesquisa em tempo real"],
                ["Tom", "Direto e preciso", "Conversacional", "Informativo"],
                ["Acesso à web", "Limitado", "Sim (Plus)", "Sim (sempre)"],
                ["Imagens", "Não gera", "Gera (DALL·E)", "Gera (Imagen)"],
                ["Contexto longo", "Excelente (200k tokens)", "Bom (128k)", "Excelente (1M)"],
                ["Uso ideal", "Trabalho técnico, documentos", "Criatividade, plugins", "Notícias, dados recentes"],
              ].map(([row, c, g, gm], ri) => (
                <tr key={row} style={{ background: ri % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                  <td
                    style={{
                      padding: "14px 18px",
                      fontWeight: 600,
                      color: C.muted,
                      fontSize: 16,
                      borderBottom: `1px solid rgba(255,255,255,0.05)`,
                    }}
                  >
                    {row}
                  </td>
                  {[c, g, gm].map((val, ci) => (
                    <td
                      key={ci}
                      style={{
                        padding: "14px 18px",
                        color: C.offWhite,
                        fontSize: 16,
                        lineHeight: 1.5,
                        borderBottom: `1px solid rgba(255,255,255,0.05)`,
                      }}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nugget #11 */}
        <div className="nugget-top" style={{ ...card, overflow: "hidden", marginBottom: 24 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 12 }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, color: C.gold, lineHeight: 1 }}>#11</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: C.offWhite, lineHeight: 1.3 }}>
              Quando ficou sem créditos em um, usa o outro
            </h3>
          </div>
          <p style={{ fontSize: 18, color: C.muted, lineHeight: 1.65, marginBottom: 24 }}>
            O Enzo usa os três, dependendo da tarefa. Não existe lealdade de ferramenta — existe o resultado certo.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { ia: "Claude", uso: "Código, documentos longos, análise técnica", color: C.seafoam },
              { ia: "ChatGPT", uso: "Geração de imagens, conversas criativas, plugins", color: "#10A37F" },
              { ia: "Gemini", uso: "Pesquisa com dados de hoje, notícias, Google Workspace", color: "#4285F4" },
            ].map(({ ia, uso, color }) => (
              <div key={ia} style={{ background: C.navyDark, borderRadius: 8, padding: "16px 18px", borderTop: `3px solid ${color}` }}>
                <p style={{ fontWeight: 700, fontSize: 17, color, marginBottom: 6 }}>{ia}</p>
                <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.5 }}>{uso}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MÓDULO 4: MCPs ──────────────────────────────────────────── */}
      <section id="modulo4" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Módulo 04 — Intermediário</SectionLabel>
        <h2 style={sectionTitle}>MCPs, Skills & Harnesses</h2>
        <p style={{ fontSize: 19, color: C.muted, marginBottom: 40, lineHeight: 1.65, maxWidth: 640 }}>
          A IA sozinha é poderosa. Mas com plugins e extensões, ela se transforma em uma plataforma completa.
        </p>

        {/* Pyramid */}
        <div
          style={{
            ...card,
            background: C.navyDark,
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          <p style={{ ...label, textAlign: "center" }}>A pirâmide de poder</p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
            {[
              { label: "Harnesses", sub: "Configurações avançadas de comportamento", w: "30%", color: C.gold },
              { label: "Skills", sub: "Slash commands e capacidades especializadas", w: "50%", color: C.seafoam },
              { label: "MCPs", sub: "Conexões com apps externos (Gmail, Supabase, etc.)", w: "70%", color: C.muted },
              { label: "IA Base", sub: "Claude, ChatGPT ou Gemini", w: "90%", color: C.navy },
            ].map(({ label: l, sub, w, color }) => (
              <div
                key={l}
                style={{
                  width: w,
                  background: color,
                  padding: "14px 16px",
                  marginBottom: 2,
                  borderRadius: 4,
                  transition: "all 200ms",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: 16, color: l === "IA Base" ? C.offWhite : C.navyDeep }}>
                  {l}
                </p>
                <p style={{ fontSize: 13, color: l === "IA Base" ? C.muted : "rgba(15,32,64,0.7)", marginTop: 2 }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MCP grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, marginBottom: 32 }}>
          {MCP_CARDS.map(({ name, icon, desc }) => (
            <div
              key={name}
              className="card-lift"
              style={{ ...card, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}
            >
              <span style={{ fontSize: 28, minWidth: 36 }}>{icon}</span>
              <div>
                <p style={{ fontSize: 17, fontWeight: 600, color: C.offWhite, marginBottom: 4 }}>{name}</p>
                <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Nugget #12 */}
        <div className="nugget-top" style={{ ...card, overflow: "hidden" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 12 }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, color: C.gold, lineHeight: 1 }}>#12</span>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: C.offWhite, lineHeight: 1.3 }}>
                Esses conceitos existem em TODA IA com nomes diferentes
              </h3>
              <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.65, marginTop: 10 }}>
                MCP, Skills, Harnesses — isso é como o Claude chama. Outras IAs chamam de "plugins", "tools", "extensions", "integrations". O conceito é o mesmo: <strong style={{ color: C.offWhite }}>conexão da IA com o mundo real</strong>. Quando você entende o conceito, não importa qual IA — você sabe usar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MÓDULO 5: AGENTS & SWARMS ───────────────────────────────── */}
      <section id="modulo5" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Módulo 05 — Avançado</SectionLabel>
        <h2 style={sectionTitle}>Agentes & Swarms</h2>
        <p style={{ fontSize: 19, color: C.muted, marginBottom: 40, lineHeight: 1.65, maxWidth: 640 }}>
          O futuro não é uma IA respondendo perguntas. É times de IAs executando projetos inteiros.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 32 }}>
          <div style={{ ...card, borderTop: `3px solid ${C.seafoam}` }}>
            <p style={{ ...label, color: C.seafoam }}>O que é um Agente?</p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 600,
                color: C.offWhite,
                marginBottom: 12,
                lineHeight: 1.3,
              }}
            >
              Uma IA que age, não só responde.
            </p>
            <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.65 }}>
              Um agente recebe um objetivo, planeja os passos, usa ferramentas, toma decisões e executa — sem você precisar guiar cada passo. É como contratar um funcionário que entende a tarefa e vai até o fim.
            </p>
          </div>
          <div style={{ ...card, borderTop: `3px solid ${C.gold}` }}>
            <p style={{ ...label, color: C.gold }}>O que é um Swarm?</p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 600,
                color: C.offWhite,
                marginBottom: 12,
                lineHeight: 1.3,
              }}
            >
              Um time de agentes coordenados.
            </p>
            <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.65 }}>
              Em vez de um agente fazer tudo, um swarm divide o trabalho. Um pesquisa, outro escreve, outro revisa, outro faz o deploy — todos ao mesmo tempo, em paralelo. Reduz horas de trabalho para minutos.
            </p>
          </div>
        </div>

        {/* Enzo's rule */}
        <div
          style={{
            ...card,
            background: C.navyDark,
            border: `1px solid rgba(245,158,11,0.25)`,
          }}
        >
          <p style={{ ...label, color: C.gold }}>A regra do Enzo: quando usar swarm vs solo</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: 18, color: C.seafoam, marginBottom: 12 }}>Use um agente solo quando:</p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Tarefa simples, arquivo único",
                  "Pergunta ou resposta rápida",
                  "Edição de 1-2 linhas",
                  "Atualização de documentação",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 17, color: C.offWhite }}>
                    <span style={{ color: C.seafoam }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: 18, color: C.gold, marginBottom: 12 }}>Use um swarm quando:</p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "3+ arquivos sendo modificados",
                  "Nova feature de ponta a ponta",
                  "Refatoração cross-module",
                  "Mudanças de API, segurança, performance",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 17, color: C.offWhite }}>
                    <span style={{ color: C.gold }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXERCÍCIOS PRÁTICOS ─────────────────────────────────────── */}
      <section id="exercicios" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel>Módulo 06 — Mão na massa</SectionLabel>
        <h2 style={sectionTitle}>Exercícios Práticos</h2>
        <p style={{ fontSize: 19, color: C.muted, marginBottom: 16, lineHeight: 1.65 }}>
          Ler sobre IA não é o suficiente. É preciso praticar. Marque cada exercício conforme completar.
        </p>

        {/* Progress bar */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 16, color: C.muted }}>Progresso total</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: C.seafoam }}>
              {doneCount}/{totalExercises} concluídos
            </span>
          </div>
          <div style={{ height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 4 }}>
            <div
              style={{
                height: "100%",
                width: `${totalExercises > 0 ? (doneCount / totalExercises) * 100 : 0}%`,
                background: C.seafoam,
                borderRadius: 4,
                transition: "width 400ms ease",
              }}
            />
          </div>
        </div>

        {/* Beginner */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: `${C.seafoam}22`,
              border: `1px solid ${C.seafoam}`,
              borderRadius: 8,
              padding: "6px 16px",
              marginBottom: 20,
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 15, color: C.seafoam }}>Iniciante</span>
          </div>
          <ExerciseList items={EXERCISES_BASIC} done={done} toggle={toggle} offset={0} />
        </div>

        {/* Intermediate */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: `${C.gold}22`,
              border: `1px solid ${C.gold}`,
              borderRadius: 8,
              padding: "6px 16px",
              marginBottom: 20,
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 15, color: C.gold }}>Intermediário</span>
          </div>
          <ExerciseList items={EXERCISES_MID} done={done} toggle={toggle} offset={EXERCISES_BASIC.length} />
        </div>

        {/* Advanced */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: `rgba(224,82,82,0.15)`,
              border: `1px solid #E05252`,
              borderRadius: 8,
              padding: "6px 16px",
              marginBottom: 20,
            }}
          >
            <span style={{ fontWeight: 700, fontSize: 15, color: "#E05252" }}>Avançado</span>
          </div>
          <ExerciseList
            items={EXERCISES_ADV}
            done={done}
            toggle={toggle}
            offset={EXERCISES_BASIC.length + EXERCISES_MID.length}
          />
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────── */}
      <footer
        style={{
          background: C.navyDark,
          borderTop: `1px solid rgba(74,155,127,0.15)`,
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            color: C.offWhite,
            marginBottom: 16,
          }}
        >
          Feliz Dia dos Pais ❤️
        </p>
        <p style={{ fontSize: 19, color: C.muted, lineHeight: 1.65, maxWidth: 560, margin: "0 auto 32px" }}>
          Obrigado por todo o apoio, por acreditar na tecnologia, e por deixar o Enzo compartilhar o que aprendeu. Agora é sua vez de explorar.
        </p>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: C.navy,
            borderRadius: 8,
            padding: "12px 20px",
            fontSize: 15,
            color: C.muted,
          }}
        >
          Feito com Claude (Anthropic) — com muito amor do Enzo
        </div>
      </footer>
    </div>
  );
}

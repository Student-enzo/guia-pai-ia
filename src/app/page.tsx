"use client";

import { useState } from "react";

/* ════════════════════════════════════════════════════════════
   DO ZERO AO ENZO — Guia de IA do Pai
   Design baseado em atlanticyc.com (charcoal + creme + teal,
   serifas elegantes, editorial náutico de luxo)
   ════════════════════════════════════════════════════════════ */

const C = {
  ink: "#242424",
  inkSoft: "#2E2E2E",
  paper: "#FBFAF7",
  paper2: "#F1EEE7",
  sea: "#6FA8AD",
  seaDeep: "#4E868C",
  seaLight: "#A9CDCF",
  brass: "#B0894F",
  brassLight: "#C9A56A",
  text: "#242424",
  muted: "#6B6B6B",
  onDark: "#FBFAF7",
  onDarkMuted: "#A7AEA8",
};

/* ── Small reusable bits ── */
function Kicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className="font-sans tracking-luxe"
      style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", color: dark ? C.seaLight : C.seaDeep, marginBottom: 14 }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2 className="font-display" style={{ fontSize: "clamp(30px,5vw,46px)", fontWeight: 600, letterSpacing: "0.04em", color: dark ? C.onDark : C.ink, lineHeight: 1.1 }}>
      {children}
    </h2>
  );
}

function Divider() {
  return (
    <div className="divider-emblem" style={{ margin: "0 auto", maxWidth: 1100 }}>
      <span style={{ color: C.seaDeep, fontSize: 26, lineHeight: 1 }}>⚓</span>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════ */
export default function Page() {
  return (
    <div style={{ background: C.paper, color: C.text }}>
      <Nav />
      <Ticker />
      <Hero />

      <main>
        <RitmoIA />
        <DividerBand />
        <ModuleMap />
        <DividerBand />
        <Modulo1 />
        <Nuggets />
        <DividerBand />
        <Modulo2 />
        <DividerBand />
        <Modulo3 />
        <DividerBand />
        <Modulo4 />
        <DividerBand />
        <Modulo5 />
        <Exercicios />
      </main>

      <Footer />
    </div>
  );
}

function DividerBand() {
  return (
    <div style={{ padding: "10px 24px", background: C.paper }}>
      <Divider />
    </div>
  );
}

/* ── NAV ── */
function Nav() {
  const links: [string, string][] = [
    ["Ritmo da IA", "#ritmo"],
    ["Módulos", "#modulos"],
    ["Nuggets", "#nuggets"],
    ["As IAs", "#ias"],
    ["Exercícios", "#exercicios"],
  ];
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(36,36,36,0.97)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${C.inkSoft}` }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <span style={{ color: C.sea, fontSize: 22 }}>✺</span>
          <span className="font-display" style={{ color: C.onDark, fontSize: 18, fontWeight: 600, letterSpacing: "0.18em" }}>
            DO ZERO AO ENZO
          </span>
        </a>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map(([label, href]) => (
            <a key={href} href={href} className="font-sans nav-link-item" style={{ color: C.onDarkMuted, fontSize: 14, textDecoration: "none", letterSpacing: "0.03em" }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ── TICKER (notícias reais de junho/2026) ── */
function Ticker() {
  const news = [
    "Claude Opus 4.8 assume o 1º lugar em inteligência — primeiro modelo a passar de 60 no índice da Artificial Analysis",
    "Google lança Gemini Omnia — cria a partir de qualquer entrada, começando por vídeo",
    "Apple coloca o Claude como opção no iPhone e Siri com Gemini",
    "Gemini 3.5 Flash: 284 tokens por segundo, 4x mais rápido que os concorrentes de ponta",
    "Microsoft lança MAI-Code-1 — descreva em texto, ele escreve o código",
    "Grok 4 lidera o benchmark de programação SWE-bench com 75%",
    "24h em IA equivalem a 3-5 anos de progresso tecnológico tradicional",
  ];
  const doubled = news.concat(news);
  return (
    <div style={{ overflow: "hidden", background: C.brass, padding: "9px 0", borderBottom: `1px solid ${C.brassLight}` }}>
      <div className="ticker-anim" style={{ display: "inline-flex", gap: 44, whiteSpace: "nowrap", color: "#2A2208", fontSize: 13, fontWeight: 500 }}>
        {doubled.map((n, i) => (
          <span key={i}>✦ {n}</span>
        ))}
      </div>
    </div>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <header id="top" className="hero-photo" style={{ position: "relative", borderBottom: `1px solid ${C.seaDeep}` }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "110px 24px 96px", textAlign: "center" }}>
        <div className="font-script" style={{ color: "#EAF4F4", fontSize: 34, lineHeight: 1, marginBottom: 6 }}>
          Feliz Dia dos Pais
        </div>
        <div className="font-sans tracking-luxe" style={{ color: "#DDEAEA", fontSize: 12, fontWeight: 600, textTransform: "uppercase", marginBottom: 26 }}>
          Com amor, do Enzo
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(42px,8vw,78px)", fontWeight: 600, color: "#fff", letterSpacing: "0.05em", lineHeight: 1.06, textShadow: "0 2px 30px rgba(0,0,0,0.3)" }}>
          DO ZERO AO ENZO<br />
          <span style={{ color: C.brassLight }}>EM INTELIGÊNCIA ARTIFICIAL</span>
        </h1>
        <p className="font-serif" style={{ fontSize: "clamp(19px,2.6vw,24px)", color: "#EAF4F4", maxWidth: 620, margin: "22px auto 0", lineHeight: 1.6, fontWeight: 400 }}>
          O jeito que eu uso IA todo dia — explicado do jeito que faz sentido pra você.
          Sem jargão, com exemplos reais do mundo dos yachts.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, marginTop: 38 }}>
          <a href="#modulos" style={btnPrimary}>Começar do Módulo 1</a>
          <a href="#nuggets" style={btnGhost}>Ver os Golden Nuggets</a>
          <a href="#ritmo" style={btnGhost}>Por que IA importa agora</a>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 0, marginTop: 56, borderTop: "1px solid rgba(255,255,255,0.25)", paddingTop: 30 }}>
          {([["6", "Módulos"], ["12", "Golden Nuggets"], ["20+", "Exercícios"], ["∞", "Possibilidades"]] as [string, string][]).map(([n, l], i) => (
            <div key={i} style={{ padding: "0 26px", borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.22)" }}>
              <div className="font-display" style={{ fontSize: 40, fontWeight: 600, color: "#fff" }}>{n}</div>
              <div className="font-sans tracking-wide2" style={{ fontSize: 11, color: "#DDEAEA", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

const btnPrimary: React.CSSProperties = {
  background: C.brass, color: "#fff", padding: "14px 30px", fontSize: 14, fontWeight: 600,
  textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 2,
  fontFamily: "var(--font-sans)",
};
const btnGhost: React.CSSProperties = {
  background: "rgba(255,255,255,0.10)", color: "#fff", padding: "14px 30px", fontSize: 14, fontWeight: 600,
  textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase", borderRadius: 2,
  border: "1px solid rgba(255,255,255,0.45)", fontFamily: "var(--font-sans)",
};

/* ── RITMO DA IA ── */
function RitmoIA() {
  const timeline: [string, string, string][] = [
    ["NOV 2022", "ChatGPT é lançado", "100 milhões de usuários em 2 meses — recorde histórico. O mundo descobriu que IA funciona."],
    ["MAR 2023", "GPT-4 passa em exames de medicina, direito e MBA", "Top 10% no exame da OAB americana. Melhor que a maioria dos humanos em testes padronizados."],
    ["2024", "Agentes autônomos — IA que age sozinha", "IA que pesquisa, programa, testa e publica sem supervisão. O 'clicar e executar' começa a sumir."],
    ["MAI 2026", "Claude Opus 4.8 quebra a barreira dos 60 pontos", "Primeiro modelo a passar de 60 no índice de inteligência. Quatro IAs de ponta agora competem de igual pra igual."],
  ];
  return (
    <section id="ritmo" style={{ maxWidth: 1180, margin: "0 auto", padding: "84px 24px 40px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
        <span className="pulse-dot" style={{ width: 9, height: 9, borderRadius: "50%", background: "#C0392B", display: "inline-block" }} />
        <Kicker>O ritmo da inteligência artificial</Kicker>
      </div>
      <SectionTitle>A IA não muda por ano. Muda por hora.</SectionTitle>
      <p className="font-serif" style={{ fontSize: 21, color: C.muted, marginTop: 14, maxWidth: 680, lineHeight: 1.6 }}>
        Entender o ritmo é o primeiro passo. Você não está atrasado — está começando na hora certa.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 24, marginTop: 40 }} className="grid-2">
        <div className="nugget-line" style={{ position: "relative", background: C.ink, padding: 38, borderRadius: 3 }}>
          <div className="font-script" style={{ color: C.brassLight, fontSize: 26, marginBottom: 8 }}>Golden Nugget №1</div>
          <h3 className="font-display" style={{ fontSize: 30, color: C.onDark, fontWeight: 600, letterSpacing: "0.03em", lineHeight: 1.2, marginBottom: 14 }}>
            24 HORAS EM IA<br />= QUANTOS ANOS?
          </h3>
          <p className="font-serif" style={{ color: C.onDarkMuted, fontSize: 19, lineHeight: 1.6 }}>
            A internet levou 20 anos para mudar o mundo. A IA está fazendo o mesmo em 2. Cada dia que passa, o jogo muda.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ background: C.paper2, border: `1px solid ${C.seaLight}`, padding: 24, borderRadius: 3, textAlign: "center" }}>
            <div className="font-display" style={{ fontSize: 44, color: C.seaDeep, fontWeight: 700 }}>≈ 3-5 anos</div>
            <div className="font-sans" style={{ color: C.muted, fontSize: 14, marginTop: 6 }}>de progresso tecnológico tradicional<br />por cada 24h em IA</div>
          </div>
          <div style={{ background: C.paper2, border: `1px solid ${C.seaLight}`, padding: "14px 20px", borderRadius: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="font-sans" style={{ color: C.text, fontSize: 14 }}>Do ChatGPT até hoje</span>
            <span className="font-display" style={{ color: C.seaDeep, fontSize: 16, fontWeight: 600 }}>≈ 3,5 anos</span>
          </div>
          <div style={{ background: C.paper2, border: `1px solid ${C.seaLight}`, padding: "14px 20px", borderRadius: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="font-sans" style={{ color: C.text, fontSize: 14 }}>Equivalente em software</span>
            <span className="font-display" style={{ color: C.seaDeep, fontSize: 16, fontWeight: 600 }}>≈ 50 anos</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 28, background: C.paper, border: `1px solid ${C.paper2}`, borderRadius: 3, padding: 34 }}>
        <h3 className="font-display tracking-wide2" style={{ color: C.ink, fontSize: 18, fontWeight: 600, marginBottom: 24, textTransform: "uppercase", letterSpacing: "0.12em" }}>Linha do tempo — do nada ao impossível</h3>
        {timeline.map(([date, title, desc], i) => (
          <div key={i} style={{ display: "flex", gap: 18, paddingBottom: i === timeline.length - 1 ? 0 : 22 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: i === timeline.length - 1 ? C.brass : C.sea, marginTop: 5, flexShrink: 0 }} />
              {i !== timeline.length - 1 && <div style={{ width: 1, flex: 1, background: C.seaLight }} />}
            </div>
            <div>
              <div className="font-sans tracking-wide2" style={{ color: i === timeline.length - 1 ? C.brass : C.seaDeep, fontSize: 12, fontWeight: 700, marginBottom: 3 }}>{date}</div>
              <div className="font-serif" style={{ color: C.ink, fontSize: 19, fontWeight: 600 }}>{title}</div>
              <div className="font-sans" style={{ color: C.muted, fontSize: 15, marginTop: 3, lineHeight: 1.6 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 22, background: C.paper2, borderLeft: `3px solid ${C.sea}`, padding: "20px 24px", borderRadius: "0 3px 3px 0" }}>
        <p className="font-serif" style={{ color: C.ink, fontSize: 19, lineHeight: 1.6, margin: 0 }}>
          <strong style={{ color: C.seaDeep }}>A estratégia do Enzo:</strong> não aprenda ferramentas — aprenda conceitos. Ferramentas mudam todo mês. Mas saber o que é um bom prompt, um agente, um swarm, isso transfere para qualquer IA dos próximos anos.
        </p>
      </div>
    </section>
  );
}

/* ── MODULE MAP ── */
function ModuleMap() {
  const mods: [string, string, string, string, string, string][] = [
    ["01", "O que é IA", "A mentalidade certa para começar", "Iniciante · 5 min", "#mod1", C.sea],
    ["02", "Como Promptar", "O jeito do Enzo de pedir resultados", "Iniciante · 10 min", "#mod2", C.sea],
    ["03", "As IAs de Ponta", "Claude, ChatGPT, Gemini, Grok", "Básico · 8 min", "#mod3", C.sea],
    ["04", "MCPs & Harnesses", "IA que age no mundo real", "Intermediário · 10 min", "#mod4", C.sea],
    ["05", "Agentes & Swarms", "Equipes de IA trabalhando juntas", "Avançado · 12 min", "#mod5", C.sea],
    ["06", "Exercícios", "Mão na massa — faça agora", "Prático · 20 min", "#exercicios", C.brass],
  ];
  return (
    <section id="modulos" style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 24px 40px" }}>
      <Kicker>Seu roteiro</Kicker>
      <SectionTitle>Seis módulos, do conceito ao resultado</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16, marginTop: 36 }}>
        {mods.map(([num, title, sub, meta, href, accent]) => (
          <a key={num} href={href} className="card-lift" style={{ textDecoration: "none", background: C.paper, border: `1px solid ${C.paper2}`, borderTop: `3px solid ${accent}`, borderRadius: 3, padding: 26 }}>
            <div className="font-display" style={{ fontSize: 30, color: accent, fontWeight: 700, letterSpacing: "0.05em" }}>{num}</div>
            <div className="font-serif" style={{ color: C.ink, fontSize: 22, fontWeight: 600, marginTop: 6 }}>{title}</div>
            <div className="font-sans" style={{ color: C.muted, fontSize: 15, marginTop: 4 }}>{sub}</div>
            <div className="font-sans tracking-wide2" style={{ color: accent === C.brass ? C.brass : C.seaDeep, fontSize: 11, marginTop: 14, textTransform: "uppercase", fontWeight: 600 }}>{meta}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ── MÓDULO 1 ── */
function Modulo1() {
  const goodAt = ["Escrever, reescrever e resumir textos", "Programar e resolver bugs", "Pesquisar e sintetizar informações", "Traduzir e adaptar linguagem", "Analisar documentos e contratos", "Criar imagens, vídeos e áudios", "Automatizar tarefas repetitivas"];
  const tips: [string, string][] = [
    ["Confirme fatos críticos", "Para saúde, dinheiro e lei, a IA dá o rascunho — você confirma na fonte."],
    ["Dê contexto", "Ela não sabe quem você é. Quanto mais você explica, menos ela adivinha."],
    ["Seja específico", "Pedido vago = resposta vaga. Pedido claro = ouro."],
    ["Cada IA tem um forte", "Uma escreve melhor, outra programa, outra pesquisa. Veja no Módulo 3."],
  ];
  return (
    <section id="mod1" style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 24px 40px" }}>
      <ModHeader num="01" tag="Iniciante" title="O Que É IA — A Mentalidade Certa" />

      <div style={{ background: C.ink, borderRadius: 3, padding: 40, marginBottom: 22 }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 26, alignItems: "start" }} className="grid-analogy">
          <div style={{ fontSize: 52, color: C.sea }}>✺</div>
          <div>
            <h3 className="font-serif" style={{ color: C.onDark, fontSize: 26, fontWeight: 600, marginBottom: 12 }}>A melhor analogia: um funcionário que leu tudo</h3>
            <p className="font-serif" style={{ color: C.onDarkMuted, fontSize: 19, lineHeight: 1.75, marginBottom: 12 }}>
              Imagine alguém que leu <strong style={{ color: C.onDark }}>absolutamente tudo</strong> — todos os livros, manuais, contratos, receitas e códigos que existem. E lembra de tudo.
            </p>
            <p className="font-serif" style={{ color: C.onDarkMuted, fontSize: 19, lineHeight: 1.75 }}>
              Esse funcionário não dorme, não fica de mau humor, e responde em segundos. Mas <strong style={{ color: C.sea }}>só age quando você pede</strong> — e age muito melhor quando você é específico.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 22 }} className="grid-2">
        <div style={{ background: C.paper, border: `1px solid ${C.paper2}`, borderRadius: 3, padding: 26 }}>
          <h4 className="font-sans tracking-wide2" style={{ color: C.seaDeep, fontWeight: 700, fontSize: 13, textTransform: "uppercase", marginBottom: 12 }}>Onde a IA brilha</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {goodAt.map((t, i) => (
              <li key={i} className="font-sans" style={{ color: C.text, fontSize: 16, padding: "6px 0", borderBottom: i === goodAt.length - 1 ? "none" : `1px solid ${C.paper2}` }}>
                <span style={{ color: C.sea, marginRight: 10 }}>✓</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: C.paper, border: `1px solid ${C.paper2}`, borderRadius: 3, padding: 26 }}>
          <h4 className="font-sans tracking-wide2" style={{ color: C.brass, fontWeight: 700, fontSize: 13, textTransform: "uppercase", marginBottom: 12 }}>Como usar com inteligência</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {tips.map(([t, d], i) => (
              <li key={i} style={{ padding: "9px 0", borderBottom: i === tips.length - 1 ? "none" : `1px solid ${C.paper2}` }}>
                <div className="font-sans" style={{ color: C.text, fontSize: 16, fontWeight: 600 }}><span style={{ color: C.brass, marginRight: 10 }}>◆</span>{t}</div>
                <div className="font-sans" style={{ color: C.muted, fontSize: 14, marginTop: 2, marginLeft: 24 }}>{d}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <NuggetBig num="№2" title="Lixo entra, lixo sai. Ouro entra, ouro sai." body="O maior erro de iniciante é jogar uma pergunta vaga e culpar a IA pela resposta ruim. A IA é tão boa quanto o que você pede. Isso muda completamente no próximo módulo." />
    </section>
  );
}

function ModHeader({ num, tag, title }: { num: string; tag: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
      <div className="font-display" style={{ width: 56, height: 56, borderRadius: "50%", border: `1px solid ${C.sea}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.seaDeep, fontWeight: 700, fontSize: 20, flexShrink: 0 }}>{num}</div>
      <div>
        <span className="font-sans tracking-wide2" style={{ color: C.seaDeep, fontSize: 11, fontWeight: 700, textTransform: "uppercase", border: `1px solid ${C.seaLight}`, padding: "3px 10px", borderRadius: 2 }}>Módulo {num} · {tag}</span>
        <h2 className="font-display" style={{ fontSize: "clamp(26px,4.5vw,40px)", fontWeight: 600, color: C.ink, marginTop: 8, letterSpacing: "0.03em" }}>{title}</h2>
      </div>
    </div>
  );
}

function NuggetBig({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="nugget-line" style={{ position: "relative", background: C.ink, borderRadius: 3, padding: 30 }}>
      <div className="font-script" style={{ color: C.brassLight, fontSize: 26, marginBottom: 6 }}>Golden Nugget {num}</div>
      <h3 className="font-serif" style={{ color: C.onDark, fontSize: 24, fontWeight: 600, lineHeight: 1.4, marginBottom: 8 }}>“{title}”</h3>
      <p className="font-sans" style={{ color: C.onDarkMuted, fontSize: 16, lineHeight: 1.65, margin: 0 }}>{body}</p>
    </div>
  );
}

/* ── GOLDEN NUGGETS FEED ── */
function Nuggets() {
  const nuggets: [string, string, string, string, string][] = [
    ["№3", "Prompting", "“Você é um [papel]” é a frase mais poderosa da IA", "Antes de qualquer pedido, defina quem o Claude é. Isso altera o vocabulário, o nível técnico e o foco da resposta inteira.", "“Você é um cardiologista experiente explicando para um leigo de 60 anos…”"],
    ["№4", "Resultado", "Sempre peça 3 opções, nunca 1", "Uma resposta é uma aposta. Três opções te dão escolha. A melhor ideia raramente é a primeira.", "“Me dê 3 abordagens diferentes, com prós e contras de cada”"],
    ["№5", "Contexto", "Contexto mata ambiguidade. Ambiguidade mata resultado.", "A IA não sabe quem você é nem o que você quer. Quanto mais explica, menos ela adivinha.", "“Tenho 60 anos, sou dono de charter, e preciso de X porque Y…”"],
    ["№6", "Iteração", "Primeira resposta = rascunho. Sempre refine.", "O Claude lembra toda a conversa. Use isso: ‘encurta’, ‘mais formal’, ‘adiciona exemplo’.", "“Bom. Agora deixa mais direto e termina com uma pergunta”"],
    ["№7", "Framework", "O Framework PAPEL que uso em tudo", "Papel + Ação + Público + Estilo + Limite. Pensar nesses 5 elementos muda tudo.", "Papel · Ação · Público · Estilo · Limite"],
    ["№8", "Pensamento", "“Pense passo a passo” — 2 palavras que valem ouro", "Forçar a IA a raciocinar em etapas antes de responder reduz drasticamente os erros.", "“Antes de responder, pense passo a passo e me mostre o raciocínio”"],
    ["№9", "Criatividade", "Peça para questionar, não só executar", "A IA pode ser o ‘advogado do diabo’ das suas ideias — valioso antes de decisões importantes.", "“Argumente contra essa ideia. O que pode dar errado? Quais pontos cegos tenho?”"],
    ["№10", "Verificação", "Confirme fatos importantes em outra fonte", "A IA às vezes inventa dados com confiança. Para saúde, dinheiro e lei, sempre confirme.", "Regra: IA para rascunho e raciocínio · fonte oficial para fatos definitivos"],
  ];
  return (
    <section id="nuggets" style={{ background: C.paper2, padding: "70px 0", borderTop: `1px solid ${C.seaLight}`, borderBottom: `1px solid ${C.seaLight}` }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div className="font-script" style={{ color: C.brass, fontSize: 30, marginBottom: 2 }}>Como o Enzo pensa</div>
        <SectionTitle>Golden Nuggets</SectionTitle>
        <p className="font-serif" style={{ fontSize: 21, color: C.muted, marginTop: 12, maxWidth: 640, lineHeight: 1.6 }}>
          Os insights que levei meses aprendendo — condensados em cards. Guarda esses.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))", gap: 16, marginTop: 36 }}>
          {nuggets.map(([num, cat, title, body, ex]) => (
            <div key={num} className="card-lift nugget-line" style={{ position: "relative", background: C.ink, borderRadius: 3, padding: 26 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span className="font-script" style={{ color: C.brassLight, fontSize: 24 }}>Nugget {num}</span>
                <span className="font-sans tracking-wide2" style={{ color: C.sea, fontSize: 10, fontWeight: 700, textTransform: "uppercase" }}>{cat}</span>
              </div>
              <h3 className="font-serif" style={{ color: C.onDark, fontSize: 21, fontWeight: 600, lineHeight: 1.35, marginBottom: 10 }}>{title}</h3>
              <p className="font-sans" style={{ color: C.onDarkMuted, fontSize: 15, lineHeight: 1.65, marginBottom: 14 }}>{body}</p>
              <div style={{ background: "rgba(111,168,173,0.10)", border: "1px solid rgba(111,168,173,0.25)", borderRadius: 2, padding: "10px 12px" }}>
                <p className="font-sans" style={{ color: C.seaLight, fontSize: 12.5, margin: 0, fontStyle: "italic" }}>{ex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── MÓDULO 2 ── */
function Modulo2() {
  const cmds: [string, string][] = [
    ["/gsd-new-project", "Cria um projeto do zero com roadmap e fases automáticas"],
    ["/gsd-debug", "Investiga bugs com método científico — hipótese, teste, solução"],
    ["/deep-research [tema]", "Pesquisa multi-fonte com verificação e relatório citado"],
    ["/code-review --fix", "Revisa e já corrige o código automaticamente"],
    ["/gsd-next", "Pergunta qual o próximo passo e já executa"],
    ["/ui-ux-pro-max", "Ativa o sistema de design completo para criar sites"],
  ];
  return (
    <section id="mod2" style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 24px 40px" }}>
      <ModHeader num="02" tag="O Jeito do Enzo" title="Como Promptar de Verdade" />

      <div style={{ background: C.paper, border: `1px solid ${C.paper2}`, borderRadius: 3, padding: 30, marginBottom: 22 }}>
        <h3 className="font-display tracking-wide2" style={{ color: C.ink, fontSize: 16, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Prompt fraco vs. prompt forte</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-2">
          <div style={{ borderLeft: `3px solid ${C.brass}`, paddingLeft: 16 }}>
            <div className="font-sans tracking-wide2" style={{ color: C.brass, fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Fraco</div>
            <p className="font-serif" style={{ color: C.text, fontSize: 18, fontStyle: "italic", margin: "0 0 6px" }}>“Me escreve um e-mail para o cliente”</p>
            <p className="font-sans" style={{ color: C.muted, fontSize: 14, margin: 0 }}>Genérico, formal demais, sem contexto.</p>
          </div>
          <div style={{ borderLeft: `3px solid ${C.sea}`, paddingLeft: 16 }}>
            <div className="font-sans tracking-wide2" style={{ color: C.seaDeep, fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Forte</div>
            <p className="font-serif" style={{ color: C.text, fontSize: 18, fontStyle: "italic", margin: "0 0 6px" }}>“Você é um consultor. Escreva um e-mail ao Sr. Marcos, dono de marina, agradecendo a reunião sobre o charter de 80ft. Tom caloroso e profissional, máx. 150 palavras, terminando com o próximo passo.”</p>
            <p className="font-sans" style={{ color: C.muted, fontSize: 14, margin: 0 }}>Personalizado, útil, pronto para enviar.</p>
          </div>
        </div>
      </div>

      <div style={{ background: C.paper, border: `1px solid ${C.paper2}`, borderRadius: 3, padding: 30 }}>
        <h3 className="font-serif" style={{ color: C.ink, fontSize: 22, fontWeight: 600, marginBottom: 6 }}>Slash Commands — os atalhos turbo</h3>
        <p className="font-sans" style={{ color: C.muted, fontSize: 16, marginBottom: 20, lineHeight: 1.6 }}>
          No Claude Code (versão profissional), você digita <code style={codeChip}>/comando</code> e ativa um fluxo inteiro com uma palavra. É como combos de videogame.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 12 }}>
          {cmds.map(([cmd, desc]) => (
            <div key={cmd} style={{ background: C.paper2, borderRadius: 2, padding: 16 }}>
              <code style={{ color: C.seaDeep, fontSize: 14, fontWeight: 500, fontFamily: "ui-monospace, monospace" }}>{cmd}</code>
              <p className="font-sans" style={{ color: C.muted, fontSize: 14, margin: "6px 0 0", lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const codeChip: React.CSSProperties = { background: C.paper2, color: C.seaDeep, padding: "2px 8px", borderRadius: 2, fontSize: 14, fontFamily: "ui-monospace, monospace" };

/* ── MÓDULO 3 — AS IAS (benchmark junho 2026) ── */
function Modulo3() {
  const ais = [
    {
      name: "Claude", maker: "Anthropic", icon: "✦", accent: C.seaDeep, bg: "rgba(111,168,173,0.08)", border: C.sea,
      crown: "Nº 1 em inteligência geral (jun/2026)",
      best: ["Escrita com voz e tom — o melhor", "Código do zero ao avançado", "Seguir instruções à risca", "Agentes e automações", "Análise de documentos longos", "Contexto muito longo"],
    },
    {
      name: "ChatGPT", maker: "OpenAI · GPT-5.5", icon: "◐", accent: "#10A37F", bg: "rgba(16,163,127,0.06)", border: "rgba(16,163,127,0.4)",
      crown: "Generalista mais versátil e popular",
      best: ["Geração de imagens", "Programação (SWE-bench ~75%)", "Apps e plugins integrados", "Navegação na internet", "Análise de imagens e PDF", "Mais material de ajuda online"],
    },
    {
      name: "Gemini", maker: "Google · 3.5", icon: "◆", accent: "#4285F4", bg: "rgba(66,133,244,0.06)", border: "rgba(66,133,244,0.4)",
      crown: "O mais rápido e o melhor em raciocínio",
      best: ["Raciocínio (GPQA 94%)", "Velocidade — 284 tokens/s, 4x mais rápido", "Contexto gigante (1M+ tokens)", "Vídeo e multimodal (Gemini Omnia)", "Integração com Google (Drive, Docs)", "Versão gratuita generosa"],
    },
    {
      name: "Grok", maker: "xAI · Grok 4", icon: "✕", accent: "#5B5B5B", bg: "rgba(91,91,91,0.06)", border: "rgba(91,91,91,0.4)",
      crown: "Líder em programação bruta",
      best: ["Código (SWE-bench 75% — o topo)", "Informação em tempo real do X", "Tom direto e sem rodeios", "Forte em matemática e lógica"],
    },
  ];
  const useCases: [string, string, string][] = [
    ["Precisa escrever ou codar", "Claude", C.sea],
    ["Precisa de imagens", "ChatGPT", "#10A37F"],
    ["Precisa pesquisa de hoje", "Gemini", "#4285F4"],
  ];
  return (
    <section id="ias" style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 24px 40px" }}>
      <ModHeader num="03" tag="Básico" title="As IAs de Ponta — Cada Uma Brilha em Algo" />
      <p className="font-serif" style={{ fontSize: 21, color: C.muted, marginTop: -8, marginBottom: 30, maxWidth: 760, lineHeight: 1.6 }}>
        Segundo os benchmarks de junho de 2026, quatro modelos de ponta competem de igual pra igual — e <strong style={{ color: C.ink }}>nenhum vence em tudo</strong>. A escolha depende do que você precisa fazer.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16 }}>
        {ais.map((ai) => (
          <div key={ai.name} style={{ borderRadius: 3, overflow: "hidden", border: `1px solid ${ai.border}` }}>
            <div style={{ background: ai.bg, padding: "20px 18px", textAlign: "center", borderBottom: `1px solid ${ai.border}` }}>
              <div style={{ fontSize: 28, color: ai.accent, marginBottom: 4 }}>{ai.icon}</div>
              <h3 className="font-display" style={{ color: ai.accent, fontSize: 22, fontWeight: 700, letterSpacing: "0.05em" }}>{ai.name}</h3>
              <p className="font-sans" style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>{ai.maker}</p>
            </div>
            <div style={{ background: C.paper, padding: 18 }}>
              <div className="font-sans" style={{ background: C.paper2, borderRadius: 2, padding: "8px 10px", fontSize: 12.5, color: C.ink, fontWeight: 600, marginBottom: 14, textAlign: "center" }}>★ {ai.crown}</div>
              <div className="font-sans tracking-wide2" style={{ color: ai.accent, fontSize: 10, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>Melhor em</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {ai.best.map((b, i) => (
                  <li key={i} className="font-sans" style={{ color: C.text, fontSize: 14, padding: "5px 0", lineHeight: 1.4 }}>
                    <span style={{ color: ai.accent, marginRight: 8 }}>✓</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="nugget-line" style={{ position: "relative", background: C.ink, borderRadius: 3, padding: 30, marginTop: 24 }}>
        <div className="font-script" style={{ color: C.brassLight, fontSize: 26, marginBottom: 6 }}>Golden Nugget №11</div>
        <h3 className="font-serif" style={{ color: C.onDark, fontSize: 24, fontWeight: 600, marginBottom: 16 }}>Acabou o crédito de uma? Usa a outra.</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 }}>
          {useCases.map(([need, ai, col], i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 2, padding: 16, textAlign: "center" }}>
              <p className="font-sans" style={{ color: C.onDarkMuted, fontSize: 13, margin: "0 0 6px" }}>{need}</p>
              <p className="font-display" style={{ color: col, fontSize: 18, fontWeight: 600, margin: 0, letterSpacing: "0.05em" }}>→ {ai}</p>
            </div>
          ))}
        </div>
        <p className="font-sans" style={{ color: C.onDarkMuted, fontSize: 15, marginTop: 16, marginBottom: 0, lineHeight: 1.6 }}>
          As IAs são intercambiáveis para tarefas gerais. A habilidade de promptar bem transfere para qualquer uma. Aprenda a pensar em IA, não em um produto.
        </p>
      </div>
    </section>
  );
}

/* ── MÓDULO 4 — MCPs / Skills / Harnesses ── */
function Modulo4() {
  const layers: [string, string, string, string][] = [
    ["✺", "Harness — o arnês", C.brass, "Uma estrutura que segura tudo junto: prompts, ferramentas e fluxos organizados para uma tarefa complexa. Como um chicote de fiação — cada fio tem função, todos conectados."],
    ["✦", "Skill — a habilidade pronta", C.sea, "Um harness pré-construído, como uma receita pronta. /gsd-new-project ativa 20 etapas já programadas. Você não monta — só chama."],
    ["◆", "MCP — a tomada no mundo real", C.seaDeep, "Enquanto skill é conhecimento, MCP é ação. O Gmail MCP deixa o Claude realmente enviar e-mail. Sem MCP, ele só fala. Com MCP, ele age."],
  ];
  const mcps: [string, string, string][] = [
    ["Gmail", "E-mail", "Lê e escreve e-mails. Você revisa e envia."],
    ["Google Calendar", "Agenda", "Consulta e cria eventos, verifica conflitos."],
    ["Higgsfield", "Vídeo & Imagem", "Gera vídeos, fotos e modelos 3D de texto."],
    ["Motion", "Vídeo Pro", "Cria vídeos de marketing a partir de um briefing."],
    ["Computer Use", "Controle do PC", "Vê a tela, clica e digita por você."],
    ["Supabase", "Banco de Dados", "Consulta e analisa os dados dos projetos."],
    ["Stitch", "Design de Tela", "Gera mockups visuais antes de codar."],
    ["Nano Banana", "Imagem (Gemini)", "Cria ilustrações, banners e avatares."],
    ["Vercel", "Publicar Sites", "Publica e monitora sites na internet."],
    ["Claude Flow", "Agentes", "Coordena vários agentes em paralelo."],
    ["21st Magic", "Componentes", "Insere componentes prontos de alta qualidade."],
    ["Microsoft 365", "Office", "Conecta Word, Excel, Outlook e OneDrive."],
  ];
  return (
    <section id="mod4" style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 24px 40px" }}>
      <ModHeader num="04" tag="Intermediário" title="MCPs, Skills e Harnesses" />
      <p className="font-serif" style={{ fontSize: 21, color: C.muted, marginTop: -8, marginBottom: 28, maxWidth: 720, lineHeight: 1.6 }}>
        Três conceitos em camadas — e existem em toda IA moderna, só com nomes diferentes.
      </p>

      <div style={{ background: C.paper, border: `1px solid ${C.paper2}`, borderRadius: 3, padding: 30, marginBottom: 22 }}>
        {layers.map(([icon, title, col, desc], i) => (
          <div key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start", paddingBottom: i === 2 ? 0 : 20, marginBottom: i === 2 ? 0 : 20, borderBottom: i === 2 ? "none" : `1px solid ${C.paper2}` }}>
            <div style={{ width: 44, height: 44, borderRadius: 2, border: `1px solid ${col}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: col, flexShrink: 0 }}>{icon}</div>
            <div>
              <h4 className="font-serif" style={{ color: C.ink, fontSize: 20, fontWeight: 600, marginBottom: 4 }}>{title}</h4>
              <p className="font-sans" style={{ color: C.muted, fontSize: 15.5, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-display tracking-wide2" style={{ color: C.ink, fontSize: 16, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>As 12 ferramentas que eu conecto</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12, marginBottom: 22 }}>
        {mcps.map(([name, cat, desc]) => (
          <div key={name} className="card-lift" style={{ background: C.paper, border: `1px solid ${C.paper2}`, borderLeft: `3px solid ${C.sea}`, borderRadius: 2, padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span className="font-serif" style={{ color: C.ink, fontSize: 17, fontWeight: 600 }}>{name}</span>
              <span className="font-sans tracking-wide2" style={{ color: C.seaDeep, fontSize: 9, fontWeight: 700, textTransform: "uppercase" }}>{cat}</span>
            </div>
            <p className="font-sans" style={{ color: C.muted, fontSize: 13.5, margin: "6px 0 0", lineHeight: 1.5 }}>{desc}</p>
          </div>
        ))}
      </div>

      <NuggetBig num="№12" title="Esses conceitos existem em TODA IA — com nomes diferentes" body="Claude chama de MCPs, Skills e Claude Flow. ChatGPT chama de Plugins, GPTs e Agents. Gemini chama de Extensions, Gems e Flows. Aprenda o conceito, não o nome — ele vai com você para qualquer IA." />
    </section>
  );
}

/* ── MÓDULO 5 — Agentes & Swarms ── */
function Modulo5() {
  const swarmYes = ["3 ou mais arquivos envolvidos", "Nova funcionalidade completa", "Refatoração de módulo inteiro", "Auditoria de segurança ou performance", "Pesquisa extensa multi-fonte"];
  const swarmNo = ["Edição de 1-2 linhas", "Pergunta simples", "Atualização de documento", "Mudança de configuração", "Conversa ou explicação"];
  return (
    <section id="mod5" style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 24px 40px" }}>
      <ModHeader num="05" tag="Avançado" title="Agentes & Swarms" />
      <p className="font-serif" style={{ fontSize: 21, color: C.muted, marginTop: -8, marginBottom: 28, maxWidth: 720, lineHeight: 1.6 }}>
        De uma IA conversando → para uma equipe de IAs agindo. É aqui que a coisa fica séria.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 22 }} className="grid-2">
        <div style={{ background: C.paper, border: `1px solid ${C.paper2}`, borderRadius: 3, padding: 26 }}>
          <h3 className="font-serif" style={{ color: C.ink, fontSize: 21, fontWeight: 600, marginBottom: 10 }}>O que é um Agente</h3>
          <p className="font-sans" style={{ color: C.muted, fontSize: 15.5, lineHeight: 1.7, marginBottom: 14 }}>Uma IA que <strong style={{ color: C.ink }}>age de forma autônoma</strong> — não só responde, mas executa etapas, usa ferramentas, decide e reporta.</p>
          <div style={{ background: C.paper2, borderRadius: 2, padding: 14 }}>
            <p className="font-sans" style={{ color: C.text, fontSize: 14, lineHeight: 1.6, margin: 0 }}><strong>Exemplo:</strong> “pesquise os melhores fornecedores, compare preços e me dê os top 3 com análise” — ele faz tudo sozinho.</p>
          </div>
        </div>
        <div style={{ background: C.paper, border: `1px solid ${C.paper2}`, borderRadius: 3, padding: 26 }}>
          <h3 className="font-serif" style={{ color: C.ink, fontSize: 21, fontWeight: 600, marginBottom: 10 }}>O que é um Swarm</h3>
          <p className="font-sans" style={{ color: C.muted, fontSize: 15.5, lineHeight: 1.7, marginBottom: 14 }}>Uma <strong style={{ color: C.ink }}>colmeia de agentes</strong> em paralelo — como contratar 10 especialistas ao mesmo tempo.</p>
          <div style={{ background: C.paper2, borderRadius: 2, padding: 14 }}>
            <p className="font-sans" style={{ color: C.text, fontSize: 14, lineHeight: 1.6, margin: 0 }}><strong>Exemplo:</strong> revisar um site — um agente vê segurança, outro performance, outro bugs, outro design. Tudo ao mesmo tempo, em minutos.</p>
          </div>
        </div>
      </div>

      <div style={{ background: C.ink, borderRadius: 3, padding: 28 }}>
        <h3 className="font-display tracking-wide2" style={{ color: C.onDark, fontSize: 16, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 18 }}>A regra do Enzo: swarm ou solo?</h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="grid-2">
          <div>
            <div className="font-sans tracking-wide2" style={{ color: C.sea, fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>Use swarm quando</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {swarmYes.map((t, i) => (
                <li key={i} className="font-sans" style={{ color: C.onDarkMuted, fontSize: 15, padding: "5px 0" }}><span style={{ color: C.sea, marginRight: 8 }}>→</span>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-sans tracking-wide2" style={{ color: C.brassLight, fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 10 }}>Faça solo quando</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {swarmNo.map((t, i) => (
                <li key={i} className="font-sans" style={{ color: C.onDarkMuted, fontSize: 15, padding: "5px 0" }}><span style={{ color: C.brassLight, marginRight: 8 }}>→</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── EXERCÍCIOS (interativo) ── */
function Exercicios() {
  const exercises: [string, string, string, string][] = [
    ["1", "Primeiro Prompt com PAPEL", "Abra o Claude (claude.ai) e escreva: “Você é um professor de culinária. Explique como fazer arroz perfeito para alguém que nunca cozinhou, passo a passo, sem termos técnicos.”", "Ver como definir um papel muda a resposta"],
    ["1", "Refine uma Resposta", "Depois do exercício anterior, responda: “Boa. Agora encurta para 5 passos, adiciona um emoji em cada e termina com uma dica de ouro.”", "Praticar iteração em cima da mesma resposta"],
    ["1", "Peça 3 Opções", "Pense em algo que precisa decidir. Diga: “Você é um consultor. Me dê 3 abordagens para [sua situação], com prós e contras de cada em 2 linhas.”", "Nunca aceitar só uma opção"],
    ["2", "Use o Framework PAPEL completo", "Escreva um prompt usando os 5 elementos: Papel + Ação + Público + Estilo + Limite. Pode ser para qualquer coisa do dia a dia.", "Internalizar o framework"],
    ["2", "Peça para questionar sua ideia", "Pense numa decisão recente. Diga: “Você é um estrategista. Minha ideia é [descreva]. Me dê 5 riscos que posso não estar vendo, e como mitigar cada um.”", "Usar a IA como advogado do diabo"],
    ["2", "Pesquisa com verificação", "Escolha um tema. Diga: “Pesquise [tema] e me dê 3 fatos surpreendentes, 2 tendências atuais e 1 controvérsia. Cite as fontes quando souber.”", "Aprendizado estruturado com IA"],
    ["3", "Crie uma rotina de IA pra sua vida", "Diga: “Quero usar você todo dia. Sou dono de charter. Me sugira 5 situações do meu dia onde você me economizaria tempo, com o prompt exato de cada.”", "Criar seus próprios hábitos de uso"],
    ["3", "Compare as IAs no mesmo prompt", "Copie o mesmo prompt forte e cole no Claude, ChatGPT e Gemini. Compare lado a lado. Você vai sentir na prática quando cada uma brilha.", "Construir julgamento próprio"],
  ];
  const [done, setDone] = useState<boolean[]>(() => Array(exercises.length).fill(false));
  const toggle = (i: number) => setDone((d) => d.map((v, j) => (j === i ? !v : v)));
  const count = done.filter(Boolean).length;
  const levels: Record<string, string> = { "1": "Nível 1 · Iniciante", "2": "Nível 2 · Intermediário", "3": "Nível 3 · Avançado" };
  const levelColor: Record<string, string> = { "1": C.sea, "2": C.seaDeep, "3": C.brass };

  return (
    <section id="exercicios" style={{ background: C.paper2, padding: "70px 0", borderTop: `1px solid ${C.seaLight}` }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}>
        <ModHeader num="06" tag="Mão na Massa" title="Exercícios Práticos" />
        <p className="font-serif" style={{ fontSize: 21, color: C.muted, marginTop: -8, marginBottom: 18, maxWidth: 720, lineHeight: 1.6 }}>
          Baby steps. Cada um leva 5-10 minutos. Faça um por dia e em uma semana você já pensa como eu.
        </p>

        <div style={{ background: C.paper, border: `1px solid ${C.seaLight}`, borderRadius: 3, padding: "16px 20px", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <span className="font-sans" style={{ color: C.ink, fontSize: 15, fontWeight: 600 }}>{count} de {exercises.length} concluídos</span>
          <div style={{ flex: 1, height: 6, background: C.paper2, borderRadius: 99, overflow: "hidden", minWidth: 160, maxWidth: 400 }}>
            <div style={{ height: "100%", width: `${(count / exercises.length) * 100}%`, background: C.sea, transition: "width .3s" }} />
          </div>
          {count === exercises.length && <span className="font-script" style={{ color: C.brass, fontSize: 22 }}>Parabéns!</span>}
        </div>

        {(["1", "2", "3"] as const).map((lvl) => (
          <div key={lvl} style={{ marginBottom: 24 }}>
            <div className="font-sans tracking-wide2" style={{ display: "inline-block", color: levelColor[lvl], fontSize: 11, fontWeight: 700, textTransform: "uppercase", border: `1px solid ${levelColor[lvl]}`, padding: "4px 12px", borderRadius: 2, marginBottom: 12 }}>{levels[lvl]}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {exercises.map((ex, i) => ex[0] === lvl ? (
                <button key={i} onClick={() => toggle(i)} style={{ textAlign: "left", background: done[i] ? "rgba(111,168,173,0.10)" : C.paper, border: `1px solid ${done[i] ? C.sea : C.paper2}`, borderRadius: 3, padding: 18, display: "flex", gap: 14, alignItems: "flex-start", cursor: "pointer", width: "100%", transition: "all .2s", font: "inherit" }}>
                  <span style={{ width: 24, height: 24, borderRadius: 4, border: `2px solid ${done[i] ? C.sea : C.seaLight}`, background: done[i] ? C.sea : "transparent", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0, marginTop: 2 }}>{done[i] ? "✓" : ""}</span>
                  <div>
                    <h4 className="font-serif" style={{ color: C.ink, fontSize: 18, fontWeight: 600, margin: "0 0 6px", textDecoration: done[i] ? "line-through" : "none", opacity: done[i] ? 0.6 : 1 }}>{ex[1]}</h4>
                    <p className="font-sans" style={{ color: C.muted, fontSize: 15, margin: "0 0 8px", lineHeight: 1.6 }}>{ex[2]}</p>
                    <span className="font-sans" style={{ color: C.seaDeep, fontSize: 12.5, fontWeight: 600 }}>◎ Objetivo: {ex[3]}</span>
                  </div>
                </button>
              ) : null)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer style={{ background: C.ink, padding: "70px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: C.sea, fontSize: 30, marginBottom: 14 }}>✺</div>
        <div className="font-script" style={{ color: C.brassLight, fontSize: 38, marginBottom: 6 }}>Feliz Dia dos Pais</div>
        <h2 className="font-display" style={{ color: C.onDark, fontSize: 30, fontWeight: 600, letterSpacing: "0.06em", marginBottom: 16 }}>DO ZERO AO ENZO</h2>
        <p className="font-serif" style={{ color: C.onDarkMuted, fontSize: 20, maxWidth: 540, margin: "0 auto 8px", lineHeight: 1.7 }}>
          Feito com carinho pelo seu filho — que usa tudo isso todo dia para construir coisas incríveis. Agora você tem o mapa do tesouro.
        </p>
        <p className="font-sans" style={{ color: C.onDarkMuted, fontSize: 15, marginBottom: 28 }}>Se tiver dúvida, me chama. Vou adorar explicar pessoalmente.</p>
        <div className="divider-emblem" style={{ maxWidth: 300, margin: "0 auto 24px" }}>
          <span style={{ color: C.sea }}>⚓</span>
        </div>
        <p className="font-sans tracking-wide2" style={{ color: "#6B6B6B", fontSize: 12, textTransform: "uppercase" }}>Feito com Claude Opus 4.8 · Anthropic · 2026</p>
      </div>
    </footer>
  );
}

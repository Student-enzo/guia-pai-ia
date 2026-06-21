"use client";

import { C, PAI } from "@/lib/config";
import { ModuleShell, Desafio } from "./Shell";
import { NuggetCard, TenteVoce } from "@/lib/ui";
import { dispararConfete } from "@/lib/fun";

// MÓDULO 0 — O GRANDE SEGREDO. Mentalidade antes de qualquer ferramenta.
export function ModIntro() {
  return (
    <ModuleShell
      id="intro"
      numero={0}
      emoji="🧭"
      titulo="O Grande Segredo"
      subtitulo="Antes de aprender a usar a IA, deixa eu te contar o segredo que quase ninguém sabe."
      totalDesafios={1}
    >
      {/* ── Boas-vindas ── */}
      <p style={{ fontSize: 18, lineHeight: 1.75, color: C.text, marginBottom: 14 }}>
        Bem-vindo a bordo, {PAI.comoChamar}. 🚢 Respira fundo, porque eu vou começar tirando um
        peso das suas costas: <b>você não precisa ser bom de tecnologia</b>. Sério. Você só precisa
        aprender a <i>conversar</i> com a IA — e conversar é uma coisa que o senhor faz a vida
        inteira.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.75, color: C.text, marginBottom: 14 }}>
        Pensa na IA como o assistente mais inteligente do mundo, que trabalha de graça, não tira
        férias, não fica de mau humor na segunda-feira e nunca, <i>nunca</i> reclama. Ele só tem um
        probleminha: ele entende exatamente o que você manda — nem mais, nem menos. Então o truque
        não é apertar botão certo. É saber <b>pedir</b>.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.75, color: C.text, marginBottom: 28 }}>
        E olha que beleza: pedir bem é uma habilidade de gente, não de máquina. Se o senhor sabe dar
        ordem clara pra um marinheiro novato, o senhor já sabe metade disso aqui. ⚓
      </p>

      {/* ── A GRANDE IDEIA ── */}
      <div
        style={{
          background: C.ink,
          color: C.onDark,
          borderRadius: 16,
          padding: "26px 26px 24px",
          marginBottom: 28,
          boxShadow: "0 16px 40px rgba(36,36,36,0.2)",
        }}
      >
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 12,
            letterSpacing: "0.18em",
            color: C.brassLight,
            marginBottom: 12,
          }}
        >
          ⭐ A GRANDE IDEIA
        </div>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(26px, 5vw, 34px)",
            fontWeight: 600,
            lineHeight: 1.15,
            margin: "0 0 14px",
          }}
        >
          Não é a ferramenta. É o sistema.
        </h3>
        <p style={{ fontSize: 16.5, lineHeight: 1.7, margin: "0 0 12px", color: "#E8E4DC" }}>
          As pessoas que ganham com IA não são as que escrevem o pedido mais bonito. São as que
          montam um <b>sistema</b> em volta dela — atalhos que se repetem, comportamentos salvos,
          conexões com os apps que já usam. Elas configuram uma vez e colhem pra sempre.
        </p>
        <p style={{ fontSize: 16.5, lineHeight: 1.7, margin: 0, color: "#E8E4DC" }}>
          É a diferença entre remar com os braços toda viagem e instalar um motor no barco. 🛥️ Este
          guia não vai te ensinar truques soltos — vai te ensinar a construir o <i>seu</i> sistema,
          do seu jeito, pro {PAI.negocioCurto}.
        </p>
      </div>

      {/* ── Claude vs ChatGPT vs Gemini ── */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "clamp(24px, 5vw, 30px)",
          fontWeight: 600,
          color: C.ink,
          margin: "0 0 12px",
        }}
      >
        Claude, ChatGPT e Gemini — qual é o melhor?
      </h3>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 14 }}>
        Resposta curta: o melhor é o que estiver na sua frente. 😄 Cada um é craque em alguma coisa —
        e nenhum é &ldquo;ruim&rdquo; em nada. Pensa neles como barcos diferentes pra águas
        diferentes:
      </p>
      <ul style={{ margin: "0 0 14px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
        <li style={{ fontSize: 16.5, lineHeight: 1.65, color: C.text }}>
          <b style={{ color: C.seaDeep }}>Claude</b> — o veleiro elegante. Brilha pra escrever do
          zero, programar, raciocinar com cuidado e te dar respostas honestas (te fala quando você
          tá errado, sem puxar saco).
        </li>
        <li style={{ fontSize: 16.5, lineHeight: 1.65, color: C.text }}>
          <b style={{ color: C.seaDeep }}>ChatGPT</b> — a lancha versátil do dia a dia. Ótimo pra
          gerar imagens, ajudar em qualquer coisa rápida e conversar por voz.
        </li>
        <li style={{ fontSize: 16.5, lineHeight: 1.65, color: C.text }}>
          <b style={{ color: C.seaDeep }}>Gemini</b> — o cargueiro veloz. Voa na velocidade e
          engole documentos gigantes e pesquisas enormes sem suar.
        </li>
      </ul>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 28 }}>
        E aqui tá a melhor parte, {PAI.comoChamar}: <b>são intercambiáveis</b>. As habilidades que
        você vai aprender aqui funcionam em <i>todos</i> eles. Aprendeu a pilotar um barco, sabe
        pilotar a frota. 🧭
      </p>

      {/* ── O que significa 24h no mundo da IA ── */}
      <TenteVoce>
        <b>O que significa &ldquo;24 horas&rdquo; no mundo da IA?</b>
        <br />
        No mar, um dia é um dia. No mundo da IA, um dia de avanço é o que antigamente levava um ano.
        🤯 A coisa muda tão rápido que, se você tentar <i>decorar</i> as ferramentas, vai estar
        sempre desatualizado — é igual tentar memorizar as ondas: na hora que decorou, já mudaram.
        Por isso a gente não decora. A gente aprende a <b>navegar</b> — e navegar nunca sai de moda.
      </TenteVoce>

      {/* ── Nuggets de ouro ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: "28px 0" }}>
        <NuggetCard numero={1} titulo="Não decore ferramentas — aprenda a pensar">
          As ferramentas mudam toda semana. O jeito de <b>pedir bem</b>, de dar contexto e de
          conversar com a IA não muda. Invista no que dura. Esse barco navega em qualquer maré.
        </NuggetCard>
        <NuggetCard numero={2} titulo="A IA é intercambiável — a habilidade viaja com você">
          Claude hoje, ChatGPT amanhã, sei lá o quê no ano que vem. Tanto faz. A habilidade que você
          carrega na cabeça funciona em qualquer um deles — e essa, ninguém tira de você. ⚓
        </NuggetCard>
      </div>

      {/* ── Primeiro desafio: zarpar ── */}
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, margin: "0 0 4px" }}>
        Chega de conversa. Bora soltar a primeira amarra. 🪢
      </p>
      <Desafio id="intro:zarpar" onComplete={dispararConfete}>
        <b>Seu primeiro contato com a tripulação 🚢</b>
        <br />
        Abra o Claude ou o ChatGPT e simplesmente escreva:{" "}
        <i>
          &ldquo;oi, me explique de forma simples o que você consegue fazer por mim, que sou dono de
          um negócio de {PAI.negocioCurto}&rdquo;
        </i>
        . Leia a resposta com calma — sem pressa, sem medo de errar (a IA não morde). Quando fizer,
        volte aqui e marque embaixo. É o seu primeiro voo solo, {PAI.comoChamar}. 🎉
      </Desafio>
    </ModuleShell>
  );
}

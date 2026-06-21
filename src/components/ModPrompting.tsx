"use client";

import { C, PAI } from "@/lib/config";
import { ModuleShell, Desafio } from "./Shell";
import { NuggetCard, TenteVoce, PromptBox } from "@/lib/ui";
import { dispararConfete } from "@/lib/fun";

// MÓDULO 1 — FALAR COM A IA. O básico de como pedir bem.
export function ModPrompting() {
  return (
    <ModuleShell
      id="prompting"
      numero={1}
      emoji="💬"
      titulo="Falar com a IA"
      subtitulo="A IA é só tão boa quanto o seu pedido. Bom pedido, boa resposta."
      totalDesafios={2}
    >
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 14 }}>
        Vamos começar do começo, {PAI.comoChamar}. A IA não lê pensamento. Ela faz exatamente o que
        você pede — então se o pedido for vago, a resposta vem vaga. É a velha regra do barco:{" "}
        <b>se você joga lixo no porão, o que sai de lá é lixo</b>. Pedido meia-boca, resposta
        meia-boca. 🪣
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 24 }}>
        A boa notícia: tem uma receita simples pra um pedido caprichado. Cinco ingredientes. Decora
        eles e você nunca mais recebe resposta sem graça.
      </p>

      {/* A receita de 5 ingredientes */}
      <div
        style={{
          background: C.paper2,
          borderRadius: 16,
          padding: "22px 24px 18px",
          marginBottom: 8,
        }}
      >
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 12,
            letterSpacing: "0.16em",
            color: C.brass,
            fontWeight: 600,
            marginBottom: 14,
          }}
        >
          🧾 OS 5 INGREDIENTES DE UM BOM PEDIDO
        </div>
        {[
          ["CONTEXTO", "O que a IA precisa saber? (quem é você, qual o barco, qual a situação)"],
          ["OBJETIVO", "O que você quer no final? (um email pronto, uma lista, uma resposta)"],
          ["TOM", "Como deve soar? (formal, casual, simpático, firme)"],
          ["FORMATO/TAMANHO", "Email curto? Lista de 3 itens? Mensagem de WhatsApp?"],
          ["O QUE EVITAR", "O que ela NÃO pode fazer ou dizer (preço, promessa, gírias)"],
        ].map(([nome, desc]) => (
          <div
            key={nome}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              padding: "10px 0",
              borderTop: `1px solid ${C.paper}`,
            }}
          >
            <span
              style={{
                flexShrink: 0,
                fontFamily: "'Cinzel', serif",
                fontSize: 12,
                fontWeight: 700,
                color: C.seaDeep,
                letterSpacing: "0.06em",
                width: 138,
              }}
            >
              {nome}
            </span>
            <span style={{ fontSize: 15.5, lineHeight: 1.55, color: C.text }}>{desc}</span>
          </div>
        ))}
      </div>

      {/* Antes & Depois */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 28,
          fontWeight: 600,
          color: C.ink,
          margin: "34px 0 14px",
        }}
      >
        Veja a diferença na prática 🔍
      </h3>

      <div
        style={{
          background: "#FBF1EE",
          border: "1px solid #E8CFC8",
          borderRadius: 12,
          padding: "16px 20px",
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 700, color: "#A65A47", marginBottom: 6 }}>
          ❌ PEDIDO FRACO (a IA vai chutar)
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.5, color: C.text, margin: 0, fontStyle: "italic" }}>
          &ldquo;escreve um email&rdquo;
        </p>
      </div>

      <div style={{ fontSize: 14, color: C.textMuted, marginBottom: 8 }}>
        Agora o mesmo pedido, com os 5 ingredientes — copie e teste com o {PAI.negocioCurto}:
      </div>

      <PromptBox
        copyText={`CONTEXTO: Eu cuido de um negócio de charter de barcos (${PAI.negocio}). Um cliente fechou um passeio de domingo às 9h.
OBJETIVO: Escrever um email confirmando a reserva dele.
TOM: Simpático e profissional, como um bom anfitrião.
FORMATO: Email curto, no máximo 6 linhas, com saudação e despedida.
O QUE EVITAR: Não inventar preço nem prometer nada que eu não pedi.`}
      >
        {`CONTEXTO: Eu cuido de um negócio de charter de barcos (${PAI.negocio}). Um cliente fechou um passeio de domingo às 9h.
OBJETIVO: Escrever um email confirmando a reserva dele.
TOM: Simpático e profissional, como um bom anfitrião.
FORMATO: Email curto, no máximo 6 linhas, com saudação e despedida.
O QUE EVITAR: Não inventar preço nem prometer nada que eu não pedi.`}
      </PromptBox>

      <p style={{ fontSize: 16, lineHeight: 1.65, color: C.text, margin: "8px 0 30px" }}>
        Sentiu? O segundo dá trabalho de escrever, mas a IA devolve algo que você quase não precisa
        mexer. O primeiro, você ia ter que refazer três vezes. 😉
      </p>

      {/* Os 3 nuggets */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 28,
          fontWeight: 600,
          color: C.ink,
          margin: "0 0 18px",
        }}
      >
        Três truques de ouro 💎
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 30 }}>
        <NuggetCard numero={1} titulo="Diga o que quer ANTES, não depois">
          Carregue todas as suas exigências no <b>primeiro</b> pedido, em vez de ficar corrigindo
          depois. &ldquo;Curto, formal, sem mencionar preço&rdquo; — fala tudo de uma vez. Sai mais
          rápido do que ir consertando frase por frase, como ajustar a vela antes de zarpar e não no
          meio da tempestade. ⛵
        </NuggetCard>

        <NuggetCard numero={2} titulo="Peça a verdade, não elogio">
          A IA tende a concordar com você pra te agradar. Quando quiser a real, <b>peça a real</b>.
          Frases como <i>&ldquo;me dá o feedback sem filtro&rdquo;</i> ou{" "}
          <i>&ldquo;qual o furo disso?&rdquo;</i> puxam uma resposta honesta em vez de só puxar saco.
        </NuggetCard>

        <NuggetCard numero={3} titulo="Para decidir, peça os DOIS lados">
          Antes de tomar uma decisão, peça o <b>caso a favor</b> e o <b>caso contra</b> — e só depois
          a recomendação. <i>&ldquo;Me dá o melhor argumento pra comprar outro barco E o melhor
          argumento pra não comprar, depois a sua opinião.&rdquo;</i> Assim a IA não fica só
          concordando com o que você já queria ouvir.
        </NuggetCard>
      </div>

      {/* Desafio 1 — reescrever um pedido fraco */}
      <Desafio id="prompting:receita">
        <b>Capriche no pedido 🧾</b>
        <br />
        Pegue este pedido preguiçoso: <i>&ldquo;escreve um post&rdquo;</i>. Reescreva ele usando os{" "}
        <b>5 ingredientes</b> pra um post sobre o {PAI.negocioCurto}. Abra o Claude ou o ChatGPT,
        monte o pedido e veja o que volta.
        <TenteVoce>
          Preencha cada linha antes de mandar:
          <br />• <b>Contexto:</b> sobre o quê é o post? (um passeio novo? uma promoção de domingo?)
          <br />• <b>Objetivo:</b> um post pro Instagram pronto pra publicar.
          <br />• <b>Tom:</b> animado e convidativo.
          <br />• <b>Formato:</b> 3 a 4 linhas + uns emojis.
          <br />• <b>O que evitar:</b> nada de inventar preço.
          <br />
          Mandou e voltou um post decente? Marque o desafio. ✅
        </TenteVoce>
      </Desafio>

      {/* Desafio 2 — pedir feedback honesto */}
      <Desafio id="prompting:verdade" onComplete={dispararConfete}>
        <b>Peça a verdade nua e crua 🪞</b>
        <br />
        Escolha algo seu — um texto, uma ideia de passeio, uma mensagem que você ia mandar pra um
        cliente — e peça pra IA um feedback <b>sem filtro</b>. Cole o prompt abaixo, troque a parte
        entre colchetes pelo que é seu, e mande ver:
        <PromptBox
          copyText={`Quero feedback honesto e sem filtro sobre o seguinte: [cole aqui sua ideia, texto ou mensagem].
Não puxe meu saco. Me diga o que está fraco, o que eu deveria mudar, e qual o maior furo. Seja direto como um amigo sincero.`}
        >
          {`Quero feedback honesto e sem filtro sobre o seguinte: [cole aqui sua ideia, texto ou mensagem].
Não puxe meu saco. Me diga o que está fraco, o que eu deveria mudar, e qual o maior furo. Seja direto como um amigo sincero.`}
        </PromptBox>
        Recebeu uma crítica honesta de verdade (e não só elogio)? Então você já manda melhor que
        muita gente. Marque aqui e solte os fogos! 🎉
      </Desafio>
    </ModuleShell>
  );
}

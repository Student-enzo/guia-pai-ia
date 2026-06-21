"use client";

import { C, PAI } from "@/lib/config";
import { MASTER_PROMPT, MINI_PROMPT } from "@/lib/masterPrompt";
import { CopyButton } from "@/lib/ui";
import { ModuleShell, Desafio } from "./Shell";
import { dispararConfete } from "@/lib/fun";

// MÓDULO 3 — O HARNESS (Master Prompt). A peça central do guia.
export function ModHarness() {
  return (
    <ModuleShell
      id="harness"
      numero={3}
      emoji="🪄"
      titulo="O Prompt Mágico"
      subtitulo="Cole isto uma vez e a IA vira sua professora particular. Pra sempre."
      totalDesafios={1}
    >
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 8 }}>
        Esse é o segredo que vale o guia inteiro, {PAI.comoChamar}. Em vez de você aprender a
        escrever pedidos perfeitos pra IA (o que leva tempo), você cola <b>este prompt mágico</b> uma
        vez no começo da conversa — e a IA passa a fazer <i>esse trabalho por você</i>.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 18 }}>
        Depois de colar, você só fala o que quer (tipo &ldquo;preciso responder esse cliente&rdquo;)
        e a IA te diz <b>como pedir do jeito certo</b>, <b>faz a tarefa</b>, e ainda <b>te ensina</b>{" "}
        o que você aprendeu. É como ter um copiloto que também é professor.
      </p>

      <div
        style={{
          background: C.brass,
          color: C.onDark,
          borderRadius: 14,
          padding: "16px 20px",
          marginBottom: 16,
          fontSize: 15,
          lineHeight: 1.55,
        }}
      >
        🧭 <b>Regra de bolso:</b> funciona em <b>qualquer</b> IA — Claude, ChatGPT, Gemini. Cole no
        início de uma conversa nova. Quando a conversa ficar muito longa, abra outra e cole de novo.
      </div>

      {/* O prompt grande */}
      <div
        style={{
          background: C.ink,
          borderRadius: 16,
          padding: "22px 22px 20px",
          boxShadow: "0 16px 40px rgba(36,36,36,0.2)",
        }}
      >
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 12,
            letterSpacing: "0.18em",
            color: C.brassLight,
            marginBottom: 14,
          }}
        >
          ⭐ O PROMPT MÁGICO (copie tudo)
        </div>
        <pre
          style={{
            color: "#E8E4DC",
            fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
            fontSize: 13.5,
            lineHeight: 1.62,
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            margin: "0 0 18px",
            maxHeight: 280,
            overflowY: "auto",
          }}
        >
          {MASTER_PROMPT}
        </pre>
        <CopyButton text={MASTER_PROMPT} label="Copiar o Prompt Mágico" />
      </div>

      {/* Mini versão */}
      <div
        style={{
          background: C.paper2,
          borderRadius: 14,
          padding: "18px 20px",
          margin: "18px 0",
        }}
      >
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 12,
            letterSpacing: "0.16em",
            color: C.brass,
            marginBottom: 10,
          }}
        >
          🪶 VERSÃO DE BOLSO (pra um empurrão rápido)
        </div>
        <p
          style={{
            fontFamily: "ui-monospace, monospace",
            fontSize: 13,
            lineHeight: 1.6,
            color: C.text,
            margin: "0 0 14px",
          }}
        >
          {MINI_PROMPT}
        </p>
        <CopyButton text={MINI_PROMPT} label="Copiar versão curta" />
      </div>

      <Desafio id="harness:colar" onComplete={dispararConfete}>
        <b>Seu primeiro voo solo 🚀</b>
        <br />
        Abra o Claude ou o ChatGPT, cole o Prompt Mágico, e depois escreva algo simples como:{" "}
        <i>&ldquo;preciso escrever uma mensagem de boas-vindas pros hóspedes do barco&rdquo;</i>.
        Veja a mágica acontecer — ela vai montar o pedido por você. Quando testar, marque aqui.
      </Desafio>
    </ModuleShell>
  );
}

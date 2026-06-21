"use client";

import { C, PAI } from "@/lib/config";
import { CopyButton } from "@/lib/ui";
import { ModuleShell, Desafio } from "./Shell";
import { dispararConfete } from "@/lib/fun";
import { motion } from "framer-motion";
import { useProgress } from "@/lib/progress";

// As 8 lições do guia inteiro, condensadas pra ele dar print e guardar no celular.
const COLA = [
  { emoji: "🔑", texto: "O grande segredo: não é a ferramenta, é o sistema." },
  { emoji: "🎯", texto: "Pra pedir bem: contexto + objetivo + tom + formato + o que evitar." },
  { emoji: "🤲", texto: "Não sabe pedir? Peça pra IA montar o pedido por você." },
  { emoji: "🪄", texto: "Cole o Prompt Mágico no início de toda conversa." },
  { emoji: "⚡", texto: "Se você repete algo, vira uma Skill (atalho salvo)." },
  { emoji: "🔌", texto: "Connectors plugam a IA nas suas ferramentas (comece em somente-leitura)." },
  { emoji: "🔭", texto: "Pra decisões grandes: Pesquisa Profunda + confira as fontes." },
  { emoji: "🔁", texto: "A habilidade é intercambiável — funciona em qualquer IA." },
];

// Texto da cola pronto pra copiar (caso ele prefira colar num bloco de notas).
const COLA_TEXTO = COLA.map((c) => `${c.emoji} ${c.texto}`).join("\n");

// MÓDULO 8 (final) — Diploma & Cola de Bolso. A formatura do capitão.
export function ModDiploma() {
  const { totalDone } = useProgress();

  return (
    <ModuleShell
      id="diploma"
      numero={8}
      emoji="🎓"
      titulo="Diploma & Cola de Bolso"
      subtitulo="Você chegou ao fim, capitão. Agora você fala a língua das máquinas."
      totalDesafios={1}
    >
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 14 }}>
        Olha só pra você, {PAI.comoChamar}. Começou achando que &ldquo;isso de IA&rdquo; era coisa de
        outro mundo — e atravessou o guia inteiro. Você já marcou <b>{totalDone}</b>{" "}
        {totalDone === 1 ? "desafio" : "desafios"} pelo caminho. Isso não é sorte de principiante,
        é tripulação treinada. 🧭
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 18 }}>
        E o melhor: você não decorou botão nenhum. Você aprendeu a <i>conversar</i> com a máquina —
        e isso vale pra qualquer IA que inventarem daqui pra frente. Sabe o que isso te faz? Um cara
        que aprendeu a navegar num mar novo depois dos 60. A maioria nem sai do porto.
      </p>

      <div
        style={{
          background: C.brass,
          color: C.onDark,
          borderRadius: 14,
          padding: "16px 20px",
          marginBottom: 24,
          fontSize: 15,
          lineHeight: 1.55,
        }}
      >
        😄 <b>Piadinha de pai obrigatória:</b> qual o barco preferido da inteligência artificial? O
        <i> data</i>-marã. (Eu avisei que ia ter piada ruim. Faz parte do diploma.)
      </div>

      {/* ── COLA DE BOLSO ── um resumão do curso pra dar print ── */}
      <div
        style={{
          background: C.paper2,
          borderRadius: 16,
          padding: "24px 24px 22px",
          marginBottom: 28,
          border: `1px solid ${C.seaLight}`,
        }}
      >
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 12,
            letterSpacing: "0.18em",
            color: C.brass,
            fontWeight: 600,
            marginBottom: 4,
          }}
        >
          📋 COLA DE BOLSO
        </div>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 21,
            color: C.ink,
            margin: "0 0 18px",
            fontStyle: "italic",
          }}
        >
          O curso inteiro num cartão. Dá um print e guarda no celular.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px" }}>
          {COLA.map((c, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                fontSize: 16,
                lineHeight: 1.55,
                color: C.text,
                padding: "10px 0",
                borderBottom: i < COLA.length - 1 ? `1px solid ${C.paper}` : "none",
              }}
            >
              <span style={{ fontSize: 20, flexShrink: 0, lineHeight: 1.4 }}>{c.emoji}</span>
              <span>{c.texto}</span>
            </li>
          ))}
        </ul>

        <CopyButton text={COLA_TEXTO} label="Copiar a cola inteira" />
      </div>

      {/* ── O DIPLOMA ── certificado em estilo náutico ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 18 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          background: C.paper,
          border: `3px double ${C.brass}`,
          borderRadius: 14,
          padding: "34px 28px 30px",
          textAlign: "center",
          marginBottom: 28,
          boxShadow: "0 16px 40px rgba(176,137,79,0.18)",
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 8 }}>⚓</div>
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 11,
            letterSpacing: "0.28em",
            color: C.brass,
            marginBottom: 12,
          }}
        >
          CERTIFICADO OFICIAL
        </div>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(26px, 5vw, 36px)",
            fontWeight: 600,
            color: C.ink,
            margin: "0 0 14px",
            lineHeight: 1.1,
          }}
        >
          Diploma de Navegador de IA
        </h3>
        <p style={{ fontSize: 15, color: C.textMuted, margin: "0 0 6px" }}>
          conferido com orgulho a
        </p>
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(22px, 4.5vw, 30px)",
            fontWeight: 600,
            color: C.seaDeep,
            margin: "0 0 16px",
            letterSpacing: "0.04em",
          }}
        >
          {PAI.comoChamar}
        </p>
        <div
          style={{
            width: 60,
            height: 2,
            background: C.brass,
            margin: "0 auto 16px",
            opacity: 0.6,
          }}
        />
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 19,
            fontStyle: "italic",
            color: C.ink,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Oficialmente fala a língua das máquinas. 🎓
        </p>
      </motion.div>

      {/* ── A formatura: ensinar é fixar ── */}
      <Desafio id="diploma:formatura" onComplete={dispararConfete}>
        <b>Sua formatura 🎓</b>
        <br />
        Ensine <b>uma</b> coisa que você aprendeu aqui pra alguém da família — um filho, a esposa, um
        neto, quem for. Pode ser só o Prompt Mágico, ou o truque de pedir pra IA montar o pedido.
        Ensinar é a melhor forma de fixar de vez (e de mostrar que o capitão aprendeu coisa nova).
        Quando fizer, marque aqui e solte os fogos. 🎉
      </Desafio>

      <p
        style={{
          fontSize: 18,
          lineHeight: 1.7,
          color: C.text,
          textAlign: "center",
          marginTop: 28,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: "italic",
        }}
      >
        Esse guia foi feito com muito carinho pra você. Obrigado por toda a navegação até aqui,{" "}
        {PAI.comoChamar}. Que esse seja só o começo do mar novo. ⛵ <b>Feliz Dia dos Pais.</b> 💛
      </p>
    </ModuleShell>
  );
}

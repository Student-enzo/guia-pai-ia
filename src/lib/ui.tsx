"use client";

/**
 * Peças de interface reutilizadas no guia inteiro.
 */

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { C } from "./config";

// ── Botão de copiar (essencial: o pai vai COPIAR prompts o tempo todo) ──
export function CopyButton({ text, label = "Copiar" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          /* alguns navegadores bloqueiam — ignora */
        }
      }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        background: copied ? C.seaDeep : C.ink,
        color: C.onDark,
        border: "none",
        borderRadius: 999,
        padding: "9px 18px",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.03em",
        cursor: "pointer",
        transition: "background 200ms ease",
      }}
    >
      {copied ? "✓ Copiado!" : `📋 ${label}`}
    </button>
  );
}

// ── Caixa de prompt (mono, com botão copiar) ──
export function PromptBox({ children, copyText }: { children: ReactNode; copyText: string }) {
  return (
    <div
      style={{
        background: C.ink,
        borderRadius: 14,
        padding: "20px 22px",
        margin: "14px 0",
        boxShadow: "0 10px 30px rgba(36,36,36,0.14)",
      }}
    >
      <pre
        style={{
          color: "#E8E4DC",
          fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
          fontSize: 14,
          lineHeight: 1.65,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          margin: "0 0 16px",
        }}
      >
        {children}
      </pre>
      <CopyButton text={copyText} label="Copiar esse prompt" />
    </div>
  );
}

// ── Card de Golden Nugget ──
export function NuggetCard({
  numero,
  titulo,
  children,
}: {
  numero: number;
  titulo: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className="nugget-line card-lift"
      style={{
        background: C.paper,
        border: `1px solid ${C.paper2}`,
        borderRadius: 16,
        padding: "26px 24px 24px",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 13,
            letterSpacing: "0.18em",
            color: C.brass,
            fontWeight: 600,
          }}
        >
          NUGGET #{numero}
        </span>
        <span style={{ fontSize: 18 }}>💎</span>
      </div>
      <h4
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 25,
          fontWeight: 600,
          color: C.ink,
          margin: "0 0 10px",
          lineHeight: 1.2,
        }}
      >
        {titulo}
      </h4>
      <div style={{ fontSize: 16, lineHeight: 1.65, color: C.text }}>{children}</div>
    </motion.div>
  );
}

// ── Bloco de prática passo-a-passo (numeração automática) ──
export function Passos({ steps }: { steps: ReactNode[] }) {
  return (
    <ol
      style={{
        listStyle: "none",
        padding: 0,
        margin: "8px 0",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {steps.map((step, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
            fontSize: 16,
            lineHeight: 1.6,
            color: C.text,
          }}
        >
          <span
            style={{
              flexShrink: 0,
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: C.sea,
              color: C.onDark,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 14,
              fontFamily: "'Cinzel', serif",
            }}
            aria-hidden
          >
            {i + 1}
          </span>
          <span style={{ paddingTop: 3 }}>{step}</span>
        </li>
      ))}
    </ol>
  );
}

// ── Selo "Tente você mesmo" — caixa de destaque ──
export function TenteVoce({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: C.paper2,
        borderLeft: `4px solid ${C.brass}`,
        borderRadius: "0 12px 12px 0",
        padding: "18px 20px",
        margin: "16px 0",
      }}
    >
      <div
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 12,
          letterSpacing: "0.16em",
          color: C.brass,
          fontWeight: 600,
          marginBottom: 8,
        }}
      >
        🎯 TENTE VOCÊ MESMO
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.6, color: C.text }}>{children}</div>
    </div>
  );
}

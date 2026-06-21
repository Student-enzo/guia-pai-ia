"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { C } from "@/lib/config";
import { ModuleId, useProgress } from "@/lib/progress";

// ── Casca de um módulo: número, título, subtítulo, e corpo ──
export function ModuleShell({
  id,
  numero,
  emoji,
  titulo,
  subtitulo,
  totalDesafios,
  children,
}: {
  id: ModuleId;
  numero: number;
  emoji: string;
  titulo: string;
  subtitulo: string;
  totalDesafios: number;
  children: ReactNode;
}) {
  const { isModuleUnlocked, moduleProgress, ready } = useProgress();
  const unlocked = !ready || isModuleUnlocked(id);
  const feitos = moduleProgress(id, totalDesafios);
  const completo = totalDesafios > 0 && feitos >= totalDesafios;

  return (
    <section
      id={id}
      style={{
        scrollMarginTop: 80,
        padding: "64px 0",
        borderTop: `1px solid ${C.paper2}`,
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 22px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 12,
              letterSpacing: "0.2em",
              color: C.brass,
              fontWeight: 600,
            }}
          >
            MÓDULO {numero}
          </span>
          {completo && (
            <span style={{ fontSize: 12, color: C.seaDeep, fontWeight: 600 }}>✓ Concluído</span>
          )}
          {totalDesafios > 0 && !completo && (
            <span style={{ fontSize: 12, color: C.textMuted }}>
              {feitos}/{totalDesafios} desafios
            </span>
          )}
        </div>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(30px, 6vw, 46px)",
            fontWeight: 600,
            color: C.ink,
            margin: "0 0 8px",
            lineHeight: 1.08,
          }}
        >
          <span style={{ marginRight: 12 }}>{emoji}</span>
          {titulo}
        </h2>
        <p
          style={{
            fontSize: 18,
            color: C.textMuted,
            fontStyle: "italic",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            margin: "0 0 28px",
          }}
        >
          {subtitulo}
        </p>

        {unlocked ? (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        ) : (
          <TravadoBanner />
        )}
      </div>
    </section>
  );
}

function TravadoBanner() {
  return (
    <div
      style={{
        background: C.paper2,
        border: `2px dashed ${C.brass}`,
        borderRadius: 16,
        padding: "40px 28px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 44, marginBottom: 10 }}>🔒</div>
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22,
          color: C.ink,
          margin: "0 0 6px",
        }}
      >
        Esse módulo ainda tá ancorado, capitão!
      </p>
      <p style={{ fontSize: 15, color: C.textMuted, margin: 0 }}>
        Complete pelo menos um desafio do módulo anterior pra soltar a âncora. ⚓
      </p>
    </div>
  );
}

// ── Desafio: botão que marca como concluído (com confete) ──
export function Desafio({
  id,
  children,
  onComplete,
}: {
  id: string;
  children: ReactNode;
  onComplete?: () => void;
}) {
  const { isDone, complete } = useProgress();
  const done = isDone(id);

  return (
    <div
      style={{
        background: done ? "#EAF2F1" : C.paper,
        border: `2px solid ${done ? C.seaDeep : C.paper2}`,
        borderRadius: 16,
        padding: "22px 22px 20px",
        margin: "20px 0",
        transition: "all 250ms ease",
      }}
    >
      <div style={{ fontSize: 16, lineHeight: 1.6, color: C.text, marginBottom: 16 }}>
        {children}
      </div>
      <button
        onClick={() => {
          if (!done) {
            complete(id);
            onComplete?.();
          }
        }}
        disabled={done}
        style={{
          background: done ? C.seaDeep : C.brass,
          color: C.onDark,
          border: "none",
          borderRadius: 999,
          padding: "11px 24px",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "0.03em",
          cursor: done ? "default" : "pointer",
        }}
      >
        {done ? "✓ Desafio concluído!" : "Marcar como feito ✓"}
      </button>
    </div>
  );
}

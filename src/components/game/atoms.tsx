"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { C } from "@/lib/config";

// ── Botão 3D gordinho (claymorphism) ──
export function ChunkyButton({
  children,
  onClick,
  disabled,
  cor = C.brass,
  edge,
  textColor = "#fff",
  className = "",
  full,
  style,
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  cor?: string;
  edge?: string;
  textColor?: string;
  className?: string;
  full?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`clay ${className}`}
      style={{
        background: cor,
        color: textColor,
        ["--clay-edge" as string]: edge ?? shade(cor),
        padding: "15px 24px",
        fontSize: 17,
        width: full ? "100%" : undefined,
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

// escurece uma cor hex p/ a "borda de baixo" 3D
function shade(hex: string): string {
  try {
    const n = parseInt(hex.replace("#", ""), 16);
    const r = Math.max(0, ((n >> 16) & 255) - 38);
    const g = Math.max(0, ((n >> 8) & 255) - 38);
    const b = Math.max(0, (n & 255) - 38);
    return `rgb(${r},${g},${b})`;
  } catch {
    return "rgba(0,0,0,0.2)";
  }
}

// ── Vidas (corações) ──
export function Hearts({ total = 3, restantes }: { total?: number; restantes: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }} aria-label={`${restantes} vidas`}>
      {Array.from({ length: total }).map((_, i) => (
        <motion.span
          key={i}
          animate={i >= restantes ? { scale: [1, 1.4, 1], opacity: [1, 0.3, 0.25] } : {}}
          transition={{ duration: 0.5 }}
          style={{ fontSize: 20, filter: i >= restantes ? "grayscale(1)" : "none" }}
        >
          {i >= restantes ? "🤍" : "❤️"}
        </motion.span>
      ))}
    </div>
  );
}

// ── Barra de progresso segmentada ──
export function ProgressSegments({ total, atual }: { total: number; atual: number }) {
  return (
    <div style={{ display: "flex", gap: 5, flex: 1 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: 11,
            borderRadius: 999,
            background: i < atual ? C.green : "rgba(255,255,255,0.22)",
            transition: "background 300ms ease",
          }}
        />
      ))}
    </div>
  );
}

// ── Mascote: Loro, o papagaio co-piloto ──
const CARAS = { feliz: "🦜", pensando: "🦜", festa: "🥳", triste: "🫣" };
export function Mascote({
  humor = "feliz",
  balao,
  tamanho = 92,
}: {
  humor?: "feliz" | "pensando" | "festa" | "triste";
  balao?: ReactNode;
  tamanho?: number;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
      <div
        className="bob"
        style={{
          width: tamanho,
          height: tamanho,
          flexShrink: 0,
          borderRadius: "50%",
          background: C.seaLight,
          border: `3px solid ${C.sea}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: tamanho * 0.5,
          boxShadow: "0 6px 0 0 rgba(78,134,140,0.5)",
        }}
      >
        {CARAS[humor]}
      </div>
      {balao && (
        <div
          style={{
            position: "relative",
            background: "#fff",
            border: `2px solid ${C.paper2}`,
            borderRadius: 16,
            padding: "12px 16px",
            fontFamily: "'Nunito', sans-serif",
            fontSize: 16,
            fontWeight: 700,
            color: C.ink,
            boxShadow: "0 4px 0 0 rgba(0,0,0,0.06)",
            maxWidth: 280,
          }}
        >
          {balao}
          <span
            style={{
              position: "absolute",
              left: -9,
              bottom: 14,
              width: 0,
              height: 0,
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
              borderRight: `9px solid #fff`,
            }}
          />
        </div>
      )}
    </div>
  );
}

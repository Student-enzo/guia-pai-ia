"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { C } from "@/lib/config";
import { ProgressProvider, useProgress } from "@/lib/progress";

const TOTAL_DESAFIOS = 10; // 10 ilhas (módulos)

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ProgressProvider>
      <TopoFixo />
      <div style={{ paddingTop: 52 }}>{children}</div>
    </ProgressProvider>
  );
}

function TopoFixo() {
  const { totalDone } = useProgress();
  const pct = Math.min(100, Math.round((totalDone / TOTAL_DESAFIOS) * 100));
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(11,12,14,0.86)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: `1px solid ${C.line}`,
      }}
    >
      {/* barra de progresso */}
      <div style={{ height: 4, background: "rgba(255,255,255,0.1)" }}>
        <motion.div
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{ height: "100%", background: `linear-gradient(90deg, ${C.sun}, ${C.brassLight})` }}
        />
      </div>
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            textDecoration: "none",
            color: C.onDark,
          }}
        >
          <span style={{ fontSize: 18 }}>⛵</span>
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 13,
              letterSpacing: "0.16em",
              fontWeight: 600,
            }}
          >
            GUIA DE IA
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 13, color: "#C9C4BB" }}>
            🏝️ {totalDone} <span style={{ opacity: 0.6 }}>/ {TOTAL_DESAFIOS} ilhas</span>
          </span>
          <Link
            href="/"
            style={{
              fontSize: 13,
              color: C.brassLight,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            🗺️ Mapa
          </Link>
        </div>
      </div>
    </header>
  );
}

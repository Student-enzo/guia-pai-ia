"use client";

/**
 * Os detalhes que fazem rir.
 * - RunawayButton: foge do mouse quando o desafio ainda está trancado.
 * - DadJokePopup: aparece com uma piada de pai quando ele tenta "colar".
 * - dispararConfete: confete na conclusão.
 */

import { ReactNode, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Piadas de pai (o pai é o público — então as piadas têm que ser as MAIS sem graça possível) ──
export const PIADAS_DE_PAI = [
  "Calma, marinheiro! 🚢 Termine o desafio anterior antes de zarpar pra esse.",
  "Ó o Ô! Esse botão tá ancorado. Complete o passo de cima primeiro. ⚓",
  "Pegadinha do papai! 😎 Esse aqui ainda tá trancado a sete chaves.",
  "Devagar com o andor que o santo é de barro! Falta terminar o anterior. 🛟",
  "Ei! Você quer pular a fila? No barco a gente respeita a ordem de embarque. 🎫",
  "Hahaha te peguei! 🤣 Esse desafio só abre depois do anterior.",
  "Esse botão é igual peixe escorregadio — não dá pra pegar ainda! 🐟",
  "Opa! Tá querendo trapacear com o capitão? Termine o passo de cima. 🧭",
  "Esse aqui tá de molho. Volta um passo, capitão. ⛵",
  "Ó, ó, ó... sem furar fila! O mar não tem atalho. 🌊",
];

let piadaIndex = 0;
function proximaPiada() {
  const p = PIADAS_DE_PAI[piadaIndex % PIADAS_DE_PAI.length];
  piadaIndex++;
  return p;
}

// ── Confete ──
export async function dispararConfete() {
  if (typeof window === "undefined") return;
  const mod = await import("canvas-confetti");
  const confetti = mod.default;
  const fim = Date.now() + 900;
  const cores = ["#6FA8AD", "#B0894F", "#FBFAF7", "#4E868C"];
  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: cores,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: cores,
    });
    if (Date.now() < fim) requestAnimationFrame(frame);
  })();
}

// ── Popup de piada de pai ──
export function useDadJoke() {
  const [joke, setJoke] = useState<string | null>(null);
  const provocar = useCallback(() => setJoke(proximaPiada()), []);
  const fechar = useCallback(() => setJoke(null), []);
  const node = (
    <AnimatePresence>
      {joke && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={fechar}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(36,36,36,0.55)",
            padding: 20,
            cursor: "pointer",
          }}
        >
          <motion.div
            initial={{ scale: 0.6, rotate: -6, y: 30 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            exit={{ scale: 0.6, y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FBFAF7",
              border: "2px solid #B0894F",
              borderRadius: 18,
              maxWidth: 380,
              padding: "32px 28px",
              textAlign: "center",
              boxShadow: "0 24px 60px rgba(36,36,36,0.35)",
            }}
          >
            <div style={{ fontSize: 46, marginBottom: 10 }}>🤚😄</div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 22,
                lineHeight: 1.35,
                color: "#242424",
                margin: "0 0 20px",
              }}
            >
              {joke}
            </p>
            <button
              onClick={fechar}
              style={{
                background: "#242424",
                color: "#FBFAF7",
                border: "none",
                borderRadius: 999,
                padding: "11px 26px",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.04em",
                cursor: "pointer",
              }}
            >
              Tá bom, capitão 🫡
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  return { provocar, node };
}

// ── Botão que foge do mouse quando trancado ──
export function RunawayButton({
  children,
  locked,
  onClick,
  onTease,
  style,
}: {
  children: ReactNode;
  locked: boolean;
  onClick?: () => void;
  onTease?: () => void; // chama o popup de piada
  style?: React.CSSProperties;
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const fugas = useRef(0);

  const handleEnter = () => {
    if (!locked) return;
    fugas.current += 1;
    // foge pra um lado aleatório (mas determinístico o suficiente pra ser engraçado)
    const dir = fugas.current % 2 === 0 ? 1 : -1;
    const dist = 70 + (fugas.current % 4) * 22;
    setOffset({
      x: dir * dist,
      y: (fugas.current % 3) * 18 - 18,
    });
    // depois de fugir 3x, ele "cansa" e solta a piada
    if (fugas.current % 3 === 0) onTease?.();
  };

  const handleClick = () => {
    if (locked) {
      onTease?.();
      return;
    }
    onClick?.();
  };

  return (
    <motion.button
      onMouseEnter={handleEnter}
      onClick={handleClick}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 500, damping: 22 }}
      style={{
        cursor: locked ? "not-allowed" : "pointer",
        opacity: locked ? 0.55 : 1,
        position: "relative",
        ...style,
      }}
    >
      {locked ? `🔒 ${typeof children === "string" ? children : ""}` : children}
    </motion.button>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { C } from "@/lib/config";
import { Step } from "@/lib/game/types";
import { ChunkyButton, Mascote } from "./atoms";
import { Simulador, Dial, Construir, Caca, SwarmViz } from "./interactive";
import { CopyButton } from "@/lib/ui";

type RespFn = (ok: boolean, comentario: string) => void;

export function StepView({
  step,
  onResponder,
  onAdvance,
  locked,
}: {
  step: Step;
  onResponder: RespFn;
  onAdvance: () => void;
  locked: boolean;
}) {
  switch (step.kind) {
    case "fala":
      return <Fala step={step} onAdvance={onAdvance} />;
    case "premio":
      return <Premio step={step} onAdvance={onAdvance} />;
    case "tesouro":
      return <Tesouro step={step} onAdvance={onAdvance} />;
    case "escolha":
      return <Escolha step={step} onResponder={onResponder} locked={locked} />;
    case "ache":
      return <Ache step={step} onResponder={onResponder} locked={locked} />;
    case "mito":
      return <Mito step={step} onResponder={onResponder} locked={locked} />;
    case "monte":
      return <Monte step={step} onResponder={onResponder} locked={locked} />;
    case "ligue":
      return <Ligue step={step} onResponder={onResponder} />;
    case "simulador":
      return <Simulador step={step} onAdvance={onAdvance} />;
    case "dial":
      return <Dial step={step} onAdvance={onAdvance} />;
    case "construir":
      return <Construir step={step} onResponder={onResponder} locked={locked} />;
    case "caca":
      return <Caca step={step} onResponder={onResponder} locked={locked} />;
    case "swarm":
      return <SwarmViz step={step} onAdvance={onAdvance} />;
  }
}

const tituloStyle: React.CSSProperties = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 800,
  fontSize: 23,
  color: C.text,
  lineHeight: 1.25,
  marginBottom: 16,
};

// ── FALA (mascote conta algo) ──
function Fala({ step, onAdvance }: { step: Extract<Step, { kind: "fala" }>; onAdvance: () => void }) {
  return (
    <div>
      <Mascote humor={step.mascote ?? "feliz"} balao={step.titulo ? <b>{step.titulo}</b> : null} />
      <p
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: 18,
          lineHeight: 1.55,
          color: C.text,
          margin: "20px 4px 0",
          fontWeight: 600,
        }}
      >
        {step.texto}
      </p>
      <div style={{ marginTop: 26 }}>
        <ChunkyButton full cor={C.sea} onClick={onAdvance}>
          Continuar →
        </ChunkyButton>
      </div>
    </div>
  );
}

// ── PRÊMIO (baú) ──
function Premio({ step, onAdvance }: { step: Extract<Step, { kind: "premio" }>; onAdvance: () => void }) {
  return (
    <div style={{ textAlign: "center", padding: "10px 0" }}>
      <motion.div
        initial={{ scale: 0.4, rotate: -12 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 14 }}
        style={{ fontSize: 76, marginBottom: 8 }}
      >
        {step.emoji}
      </motion.div>
      <h3 style={{ ...tituloStyle, textAlign: "center", color: C.brass }}>{step.titulo}</h3>
      <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 17, color: C.text, fontWeight: 600 }}>
        {step.texto}
      </p>
      <div style={{ marginTop: 24 }}>
        <ChunkyButton full cor={C.brass} onClick={onAdvance}>
          Pegar o prêmio 🏴‍☠️
        </ChunkyButton>
      </div>
    </div>
  );
}

// ── TESOURO (prompt pronto pra copiar) ──
function Tesouro({ step, onAdvance }: { step: Extract<Step, { kind: "tesouro" }>; onAdvance: () => void }) {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <motion.div initial={{ scale: 0.5, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 260, damping: 14 }} style={{ fontSize: 56 }}>
          🧰
        </motion.div>
      </div>
      <h3 style={{ ...tituloStyle, textAlign: "center", color: C.brass }}>{step.titulo}</h3>
      <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, color: C.text, fontWeight: 600, textAlign: "center", marginBottom: 16 }}>
        {step.texto}
      </p>
      <div style={{ background: "#08090B", borderRadius: 16, padding: "16px 16px 14px", border: `1px solid ${C.line}` }}>
        <pre style={{ color: C.seaLight, fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12.5, lineHeight: 1.55, whiteSpace: "pre-wrap", wordBreak: "break-word", margin: "0 0 14px", maxHeight: 200, overflowY: "auto" }}>
          {step.prompt}
        </pre>
        <CopyButton text={step.prompt} label="Copiar o tesouro" />
      </div>
      <div style={{ marginTop: 20 }}>
        <ChunkyButton full cor={C.brass} onClick={onAdvance}>Guardar no baú 🏴‍☠️</ChunkyButton>
      </div>
    </div>
  );
}

// ── ESCOLHA / ACHE (multipla escolha) ──
function OpcoesLista({
  opcoes,
  onResponder,
  locked,
}: {
  opcoes: { texto: string; certa: boolean; comentario: string }[];
  onResponder: RespFn;
  locked: boolean;
}) {
  const [escolhida, setEscolhida] = useState<number | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {opcoes.map((o, i) => {
        const sel = escolhida === i;
        const mostra = locked && escolhida !== null;
        const cor = mostra && sel ? (o.certa ? C.green : C.coral) : C.card2;
        const txt = mostra && sel ? "#fff" : C.text;
        return (
          <button
            key={i}
            disabled={locked}
            onClick={() => {
              if (locked) return;
              setEscolhida(i);
              onResponder(o.certa, o.comentario);
            }}
            className={`clay ${sel && !o.certa && mostra ? "shake" : ""} ${sel && o.certa && mostra ? "pop" : ""}`}
            style={{
              background: cor,
              color: txt,
              textAlign: "left",
              padding: "16px 18px",
              fontSize: 17,
              fontWeight: 700,
              border: `2px solid ${sel ? "transparent" : C.line}`,
            }}
          >
            {o.texto}
          </button>
        );
      })}
    </div>
  );
}

function Escolha({ step, onResponder, locked }: { step: Extract<Step, { kind: "escolha" }>; onResponder: RespFn; locked: boolean }) {
  return (
    <div>
      {step.contexto && (
        <div
          style={{
            background: C.paper2,
            borderRadius: 14,
            padding: "12px 16px",
            marginBottom: 14,
            fontStyle: "italic",
            fontFamily: "'Nunito', sans-serif",
            fontSize: 15,
            color: C.textMuted,
          }}
        >
          “{step.contexto}”
        </div>
      )}
      <h3 style={tituloStyle}>{step.pergunta}</h3>
      <OpcoesLista opcoes={step.opcoes} onResponder={onResponder} locked={locked} />
    </div>
  );
}

function Ache({ step, onResponder, locked }: { step: Extract<Step, { kind: "ache" }>; onResponder: RespFn; locked: boolean }) {
  return (
    <div>
      <h3 style={tituloStyle}>{step.instrucao}</h3>
      <OpcoesLista opcoes={step.itens} onResponder={onResponder} locked={locked} />
    </div>
  );
}

// ── MITO OU VERDADE ──
function Mito({ step, onResponder, locked }: { step: Extract<Step, { kind: "mito" }>; onResponder: RespFn; locked: boolean }) {
  const [clicou, setClicou] = useState<boolean | null>(null);
  const responder = (escolhaVerdade: boolean) => {
    if (locked) return;
    setClicou(escolhaVerdade);
    const ok = escolhaVerdade === step.ehVerdade;
    onResponder(ok, ok ? step.comentarioCerto : step.comentarioErrado);
  };
  return (
    <div>
      <div
        style={{
          background: C.card2,
          border: `1px solid ${C.line}`,
          borderRadius: 18,
          padding: "22px 20px",
          marginBottom: 20,
          fontFamily: "'Nunito', sans-serif",
          fontSize: 20,
          fontWeight: 800,
          color: C.text,
          textAlign: "center",
          boxShadow: "0 4px 0 0 rgba(0,0,0,0.05)",
        }}
      >
        “{step.afirmacao}”
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <ChunkyButton full cor={clicou === false ? C.coral : C.card2} textColor={clicou === false ? "#fff" : C.text} disabled={locked} onClick={() => responder(false)} className={clicou === false ? "shake" : ""}>
          ✋ Mito
        </ChunkyButton>
        <ChunkyButton full cor={clicou === true ? C.green : C.card2} textColor={clicou === true ? "#fff" : C.text} disabled={locked} onClick={() => responder(true)} className={clicou === true ? "pop" : ""}>
          ✅ Verdade
        </ChunkyButton>
      </div>
    </div>
  );
}

// ── MONTE O PROMPT (toca as peças na ordem) ──
function Monte({ step, onResponder, locked }: { step: Extract<Step, { kind: "monte" }>; onResponder: RespFn; locked: boolean }) {
  const [seq, setSeq] = useState<number[]>([]);
  const usados = new Set(seq);
  const confirmar = () => {
    const ok = seq.length === step.ordem.length && seq.every((v, i) => v === step.ordem[i]);
    const certo = step.ordem.map((idx) => step.pecas[idx]).join(" ");
    onResponder(ok, ok ? step.sucesso : `Quase! A ordem certa fica: “${certo}”. Sem pressa, capitão. ⛵`);
  };
  return (
    <div>
      <h3 style={tituloStyle}>{step.instrucao}</h3>
      {/* área de montagem */}
      <div
        style={{
          minHeight: 58,
          background: C.paper2,
          borderRadius: 14,
          border: `2px dashed ${C.seaLight}`,
          padding: 10,
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 14,
        }}
      >
        {seq.length === 0 && (
          <span style={{ color: C.textMuted, fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: 14, padding: 6 }}>
            Toque nas peças abaixo na ordem…
          </span>
        )}
        {seq.map((idx, pos) => (
          <Chip key={pos} texto={step.pecas[idx]} onClick={() => !locked && setSeq(seq.slice(0, pos))} cor={C.sea} />
        ))}
      </div>
      {/* peças disponíveis */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
        {step.pecas.map((p, i) =>
          usados.has(i) ? null : <Chip key={i} texto={p} onClick={() => !locked && setSeq([...seq, i])} />
        )}
      </div>
      {step.dica && <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 14, fontFamily: "'Nunito',sans-serif" }}>💡 {step.dica}</p>}
      <ChunkyButton full cor={C.brass} disabled={locked || seq.length === 0} onClick={confirmar}>
        Confirmar ✓
      </ChunkyButton>
    </div>
  );
}

function Chip({ texto, onClick, cor = "" }: { texto: string; onClick: () => void; cor?: string }) {
  return (
    <button
      onClick={onClick}
      className="clay"
      style={{
        background: cor || C.card2,
        color: cor ? "#fff" : C.text,
        padding: "9px 14px",
        fontSize: 15,
        fontWeight: 700,
        border: `1px solid ${C.line}`,
        boxShadow: "0 3px 0 0 rgba(0,0,0,0.4)",
      }}
    >
      {texto}
    </button>
  );
}

// ── LIGUE OS PARES ──
function Ligue({ step, onResponder }: { step: Extract<Step, { kind: "ligue" }>; onResponder: RespFn }) {
  const dir = useState(() => embaralhar(step.pares.map((p, i) => ({ texto: p.direita, par: i }))))[0];
  const [selE, setSelE] = useState<number | null>(null);
  const [feitos, setFeitos] = useState<Set<number>>(new Set());
  const [erro, setErro] = useState<number | null>(null);

  const tentar = (parDireita: number) => {
    if (selE === null) return;
    if (selE === parDireita) {
      const novo = new Set(feitos).add(selE);
      setFeitos(novo);
      setSelE(null);
      if (novo.size === step.pares.length) onResponder(true, step.sucesso);
    } else {
      setErro(parDireita);
      setTimeout(() => setErro(null), 450);
      setSelE(null);
    }
  };

  return (
    <div>
      <h3 style={tituloStyle}>{step.instrucao}</h3>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          {step.pares.map((p, i) => (
            <button
              key={i}
              disabled={feitos.has(i)}
              onClick={() => setSelE(i)}
              className="clay"
              style={{
                background: feitos.has(i) ? C.green : selE === i ? C.brass : C.card2,
                color: feitos.has(i) || selE === i ? "#0A0B0D" : C.text,
                padding: "12px 12px",
                fontSize: 14,
                fontWeight: 700,
                border: `1px solid ${C.line}`,
                opacity: feitos.has(i) ? 0.6 : 1,
              }}
            >
              {p.esquerda}
            </button>
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          {dir.map((d) => (
            <button
              key={d.par}
              disabled={feitos.has(d.par)}
              onClick={() => tentar(d.par)}
              className={`clay ${erro === d.par ? "shake" : ""}`}
              style={{
                background: feitos.has(d.par) ? C.green : C.card2,
                color: feitos.has(d.par) ? "#0A0B0D" : C.text,
                padding: "12px 12px",
                fontSize: 14,
                fontWeight: 700,
                border: `1px solid ${C.line}`,
                opacity: feitos.has(d.par) ? 0.6 : 1,
              }}
            >
              {d.texto}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function embaralhar<T>(arr: T[]): T[] {
  const a = [...arr];
  // embaralho determinístico simples (sem Math.random p/ evitar mismatch SSR)
  for (let i = a.length - 1; i > 0; i--) {
    const j = (i * 7 + 3) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

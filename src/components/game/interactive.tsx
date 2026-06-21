"use client";

/**
 * Passos INTERATIVOS que renderizam coisa de verdade (não é só texto):
 *  - Simulador: chat com a IA "digitando" a resposta
 *  - Dial: gira o esforço e vê a resposta mudar
 *  - Construir: monta o pedido com blocos e ENVIA → a IA responde
 *  - Caca: ache a invenção (alucinação) na resposta da IA
 *  - SwarmViz: a frota de agentes trabalhando em paralelo
 */

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "@/lib/config";
import { Step } from "@/lib/game/types";
import { ChunkyButton } from "./atoms";

type RespFn = (ok: boolean, comentario: string) => void;

const tituloStyle: React.CSSProperties = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 800,
  fontSize: 22,
  color: C.text,
  lineHeight: 1.25,
  marginBottom: 6,
};
const subStyle: React.CSSProperties = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 600,
  fontSize: 15,
  color: C.textMuted,
  marginBottom: 16,
};

// ════════════════ Máquina de escrever (efeito de digitação) ════════════════
function useTyped(text: string, active: boolean, speed = 16) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, active, speed]);
  return { shown: text.slice(0, n), done: n >= text.length };
}

// três pontinhos "..." enquanto a IA "pensa"
function Pensando() {
  return (
    <div style={{ display: "flex", gap: 5, padding: "4px 2px" }}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
          style={{ width: 8, height: 8, borderRadius: "50%", background: C.sea, display: "block" }}
        />
      ))}
    </div>
  );
}

// bolha de chat (eu = pai, à direita; IA = à esquerda, com o Loro)
function Bolha({ from, children }: { from: "eu" | "ia"; children: React.ReactNode }) {
  const eu = from === "eu";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      style={{ display: "flex", justifyContent: eu ? "flex-end" : "flex-start", gap: 8, alignItems: "flex-end" }}
    >
      {!eu && (
        <div style={{ width: 30, height: 30, borderRadius: "50%", background: C.seaLight, border: `2px solid ${C.sea}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>
          🦜
        </div>
      )}
      <div
        style={{
          maxWidth: "78%",
          background: eu ? C.sea : C.card2,
          color: eu ? "#fff" : C.text,
          border: eu ? "none" : `1px solid ${C.line}`,
          borderRadius: 18,
          borderBottomRightRadius: eu ? 4 : 18,
          borderBottomLeftRadius: eu ? 18 : 4,
          padding: "11px 15px",
          fontFamily: "'Nunito', sans-serif",
          fontSize: 15.5,
          fontWeight: 600,
          lineHeight: 1.5,
          boxShadow: "0 3px 0 0 rgba(0,0,0,0.05)",
          whiteSpace: "pre-wrap",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

// moldura de "celular" pro chat
function Telinha({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: C.paper2,
        borderRadius: 22,
        border: `2px solid ${C.seaLight}`,
        padding: 14,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        minHeight: 180,
        boxShadow: "inset 0 2px 8px rgba(20,39,74,0.06)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8, paddingBottom: 8, borderBottom: `1px solid ${C.seaLight}` }}>
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: C.green }} />
        <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, color: C.seaDeep }}>IA · online</span>
      </div>
      {children}
    </div>
  );
}

// ════════════════ SIMULADOR (chat) ════════════════
export function Simulador({ step, onAdvance }: { step: Extract<Step, { kind: "simulador" }>; onAdvance: () => void }) {
  type Msg = { from: "eu" | "ia"; texto: string; typing?: boolean };
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [usados, setUsados] = useState<Set<number>>(new Set());
  const [pensando, setPensando] = useState(false);
  const fimRef = useRef<HTMLDivElement>(null);

  const tentouBom = step.pedidos.some((p, i) => p.bom && usados.has(i));

  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgs, pensando]);

  const enviar = (i: number) => {
    if (usados.has(i) || pensando) return;
    const p = step.pedidos[i];
    setUsados((u) => new Set(u).add(i));
    setMsgs((m) => [...m, { from: "eu", texto: p.rotulo }]);
    setPensando(true);
    setTimeout(() => {
      setPensando(false);
      setMsgs((m) => [...m, { from: "ia", texto: p.resposta, typing: true }]);
    }, 650);
  };

  return (
    <div>
      <h3 style={tituloStyle}>{step.titulo ?? "Fala com a IA"}</h3>
      <p style={subStyle}>{step.instrucao}</p>
      <Telinha>
        {msgs.length === 0 && !pensando && (
          <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, color: C.textMuted, textAlign: "center", padding: "16px 0", fontWeight: 600 }}>
            👇 Toque num pedido pra enviar
          </p>
        )}
        {msgs.map((m, k) =>
          m.from === "eu" ? (
            <Bolha key={k} from="eu">{m.texto}</Bolha>
          ) : (
            <RespostaIA key={k} texto={m.texto} ativa={m.typing && k === msgs.length - 1} />
          )
        )}
        {pensando && (
          <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: C.seaLight, border: `2px solid ${C.sea}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🦜</div>
            <div style={{ background: C.card2, border: `1px solid ${C.line}`, borderRadius: 18, borderBottomLeftRadius: 4, padding: "12px 16px" }}><Pensando /></div>
          </div>
        )}
        <div ref={fimRef} />
      </Telinha>

      {/* pedidos pra enviar */}
      <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 14 }}>
        {step.pedidos.map((p, i) => (
          <button
            key={i}
            disabled={usados.has(i) || pensando}
            onClick={() => enviar(i)}
            className="clay"
            style={{
              background: usados.has(i) ? C.paper2 : C.card2,
              color: C.text,
              opacity: usados.has(i) ? 0.55 : 1,
              textAlign: "left",
              padding: "13px 15px",
              fontSize: 15,
              fontWeight: 700,
              border: `1px solid ${p.bom ? C.green : C.line}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>“{p.rotulo}”</span>
            {p.etiqueta && (
              <span style={{ fontSize: 11, fontWeight: 800, color: p.bom ? C.greenDeep : C.textMuted, background: p.bom ? "#E4F4EC" : C.paper2, padding: "3px 8px", borderRadius: 999, whiteSpace: "nowrap" }}>
                {p.etiqueta}
              </span>
            )}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {tentouBom && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 18 }}>
            <ChunkyButton full cor={C.green} onClick={onAdvance}>Sentiu a diferença? Continuar →</ChunkyButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RespostaIA({ texto, ativa }: { texto: string; ativa?: boolean }) {
  const { shown, done } = useTyped(texto, !!ativa);
  return (
    <Bolha from="ia">
      {ativa ? (
        <>
          {shown}
          {!done && <span style={{ opacity: 0.5 }}>▍</span>}
        </>
      ) : (
        texto
      )}
    </Bolha>
  );
}

// ════════════════ DIAL (esforço) ════════════════
export function Dial({ step, onAdvance }: { step: Extract<Step, { kind: "dial" }>; onAdvance: () => void }) {
  const max = step.niveis.length - 1;
  const [v, setV] = useState(0);
  const [mexeu, setMexeu] = useState(false);
  const nivel = step.niveis[v];

  return (
    <div>
      <h3 style={tituloStyle}>Gira o esforço da IA</h3>
      <p style={subStyle}>{step.instrucao}</p>

      {/* mostrador */}
      <div style={{ background: C.card2, border: `1px solid ${C.line}`, borderRadius: 18, padding: "18px 18px 20px", marginBottom: 16, boxShadow: "0 8px 24px -12px rgba(0,0,0,0.7)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 900, fontSize: 18, color: C.brass }}>{nivel.rotulo}</span>
          {/* barrinha de qualidade */}
          <div style={{ display: "flex", gap: 4 }}>
            {step.niveis.map((_, i) => (
              <div key={i} style={{ width: 14, height: 18, borderRadius: 4, background: i <= v ? C.green : C.paper2, transition: "background 200ms" }} />
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={v}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15.5, fontWeight: 600, color: C.text, lineHeight: 1.5, margin: 0, minHeight: 66 }}
          >
            {nivel.resposta}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* slider */}
      <input
        type="range"
        min={0}
        max={max}
        value={v}
        onChange={(e) => { setV(Number(e.target.value)); setMexeu(true); }}
        className="dial-range"
        style={{ width: "100%" }}
        aria-label="Nível de esforço"
      />
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Nunito',sans-serif", fontSize: 12.5, fontWeight: 800, color: C.textMuted, marginTop: 4 }}>
        <span>⚡ rápido</span>
        <span>🧠 máximo</span>
      </div>

      <AnimatePresence>
        {mexeu && v === max && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 18 }}>
            <ChunkyButton full cor={C.green} onClick={onAdvance}>Continuar →</ChunkyButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ════════════════ CONSTRUIR (monta e envia) ════════════════
const BLOCO_CORES = ["#B0894F", "#6FA8AD", "#4A9B7F", "#8A6FB0", "#C77B5A"];

export function Construir({ step, onResponder, locked }: { step: Extract<Step, { kind: "construir" }>; onResponder: RespFn; locked: boolean }) {
  const [seq, setSeq] = useState<number[]>([]);
  const [enviado, setEnviado] = useState(false);
  const usados = new Set(seq);
  const completo = seq.length === step.blocos.length;
  const ordemCerta = completo && seq.every((v, i) => v === i);
  const { shown, done } = useTyped(step.resposta, enviado);

  useEffect(() => {
    if (enviado && done) {
      const t = setTimeout(() => onResponder(true, step.sucesso), 350);
      return () => clearTimeout(t);
    }
  }, [enviado, done, onResponder, step.sucesso]);

  const enviar = () => {
    if (!ordemCerta) {
      onResponder(false, "Quase! A ordem é: Papel → Tarefa → Detalhes → Formato. Tenta de novo, capitão. ⛵");
      setSeq([]);
      return;
    }
    setEnviado(true);
  };

  return (
    <div>
      <h3 style={tituloStyle}>Monta o pedido e envia</h3>
      <p style={subStyle}>{step.instrucao}</p>

      {/* linha de montagem */}
      <div style={{ minHeight: 56, background: C.paper2, borderRadius: 14, border: `2px dashed ${C.seaLight}`, padding: 10, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14, alignItems: "center" }}>
        {seq.length === 0 && <span style={{ color: C.textMuted, fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 14, padding: 4 }}>Toque nos blocos na ordem…</span>}
        {seq.map((idx, pos) => {
          const b = step.blocos[idx];
          const cor = b.cor ?? BLOCO_CORES[idx % BLOCO_CORES.length];
          return (
            <motion.button
              key={pos}
              layout
              onClick={() => !enviado && setSeq(seq.slice(0, pos))}
              className="clay"
              style={{ background: cor, color: "#fff", padding: "8px 13px", fontSize: 14, fontWeight: 800, border: "none", boxShadow: "0 3px 0 0 rgba(0,0,0,0.18)" }}
            >
              {b.texto}
            </motion.button>
          );
        })}
      </div>

      {/* blocos disponíveis */}
      {!enviado && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          {step.blocos.map((b, i) =>
            usados.has(i) ? null : (
              <button
                key={i}
                onClick={() => !locked && setSeq([...seq, i])}
                className="clay"
                style={{ background: C.card2, color: C.text, padding: "9px 13px", fontSize: 14, fontWeight: 800, border: `2px solid ${b.cor ?? BLOCO_CORES[i % BLOCO_CORES.length]}`, boxShadow: "0 3px 0 0 rgba(0,0,0,0.1)" }}
              >
                <span style={{ color: b.cor ?? BLOCO_CORES[i % BLOCO_CORES.length], fontSize: 11, display: "block", letterSpacing: "0.04em" }}>{b.etiqueta}</span>
                {b.texto}
              </button>
            )
          )}
        </div>
      )}

      {/* resposta da IA aparecendo */}
      <AnimatePresence>
        {enviado && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 8 }}>
            <Telinha>
              <Bolha from="eu">{step.blocos.map((b) => b.texto).join(" ")}</Bolha>
              <Bolha from="ia">{shown}{!done && <span style={{ opacity: 0.5 }}>▍</span>}</Bolha>
            </Telinha>
          </motion.div>
        )}
      </AnimatePresence>

      {!enviado && (
        <ChunkyButton full cor={completo ? C.brass : C.paper2} textColor={completo ? "#fff" : C.textMuted} disabled={locked || !completo} onClick={enviar}>
          📨 Enviar à IA
        </ChunkyButton>
      )}
    </div>
  );
}

// ════════════════ CAÇA (ache a alucinação) ════════════════
export function Caca({ step, onResponder, locked }: { step: Extract<Step, { kind: "caca" }>; onResponder: RespFn; locked: boolean }) {
  const [achou, setAchou] = useState<number | null>(null);
  const [errou, setErrou] = useState<number | null>(null);

  const tocar = (i: number) => {
    if (locked || achou !== null) return;
    const p = step.pedacos[i];
    if (p.mentira) {
      setAchou(i);
      onResponder(true, step.explicacao);
    } else {
      setErrou(i);
      setTimeout(() => setErrou(null), 450);
      onResponder(false, "Essa parte tá certinha! A invenção é outra. Procura o detalhe que soa específico demais. 🔍");
    }
  };

  return (
    <div>
      <h3 style={tituloStyle}>Caça à invenção</h3>
      <p style={subStyle}>{step.instrucao}</p>
      {step.contexto && (
        <div style={{ marginBottom: 12 }}>
          <Bolha from="eu">{step.contexto}</Bolha>
        </div>
      )}
      <div style={{ background: C.card2, border: `1px solid ${C.line}`, borderRadius: 18, padding: "16px 16px", lineHeight: 2.1 }}>
        <span style={{ fontSize: 18, marginRight: 4 }}>🦜</span>
        {step.pedacos.map((p, i) => {
          const ok = achou === i;
          const bad = errou === i;
          return (
            <span
              key={i}
              onClick={() => tocar(i)}
              className={bad ? "shake" : ""}
              style={{
                fontFamily: "'Nunito',sans-serif",
                fontSize: 16,
                fontWeight: ok ? 800 : 600,
                color: ok ? "#0A0B0D" : C.text,
                background: ok ? C.coral : bad ? "rgba(248,113,113,0.18)" : "transparent",
                borderRadius: 6,
                padding: "2px 3px",
                cursor: locked || achou !== null ? "default" : "pointer",
                textDecoration: ok ? "line-through" : "none",
                transition: "background 150ms",
              }}
            >
              {p.texto}{" "}
            </span>
          );
        })}
      </div>
      <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 13, color: C.textMuted, fontWeight: 700, marginTop: 12, textAlign: "center" }}>
        👆 Toque na parte que a IA <b>inventou</b>
      </p>
    </div>
  );
}

// ════════════════ SWARM (frota de agentes em paralelo) ════════════════
export function SwarmViz({ step, onAdvance }: { step: Extract<Step, { kind: "swarm" }>; onAdvance: () => void }) {
  const [feitos, setFeitos] = useState(0);
  const total = step.tarefas.length;

  useEffect(() => {
    if (feitos >= total) return;
    const id = setTimeout(() => setFeitos((f) => f + 1), 700 + feitos * 120);
    return () => clearTimeout(id);
  }, [feitos, total]);

  const prontos = feitos >= total;

  return (
    <div>
      <h3 style={tituloStyle}>A frota trabalhando junta</h3>
      <p style={subStyle}>{step.instrucao}</p>

      <div style={{ background: `linear-gradient(180deg, ${C.seaLight}33, ${C.paper2})`, borderRadius: 18, border: `2px solid ${C.seaLight}`, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        {/* capitão */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 10, borderBottom: `1px dashed ${C.sea}` }}>
          <motion.span animate={{ rotate: [0, -6, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ fontSize: 26 }}>🧭</motion.span>
          <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 14, color: C.seaDeep }}>
            Capitão divide a missão entre os barcos →
          </span>
        </div>
        {step.tarefas.map((t, i) => {
          const feito = i < feitos;
          const ativo = i === feitos;
          return (
            <motion.div
              key={i}
              animate={ativo ? { x: [0, 4, 0] } : {}}
              transition={{ duration: 0.8, repeat: ativo ? Infinity : 0 }}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <span style={{ fontSize: 22, filter: feito ? "none" : ativo ? "none" : "grayscale(0.6) opacity(0.5)" }}>⛵</span>
              <div style={{ flex: 1, background: feito ? "rgba(74,222,128,0.14)" : C.card2, border: `1px solid ${feito ? C.green : ativo ? C.brass : C.line}`, borderRadius: 12, padding: "9px 12px", fontFamily: "'Nunito',sans-serif", fontWeight: 700, fontSize: 14, color: C.text, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{t}</span>
                {feito ? <span style={{ color: C.green, fontWeight: 900 }}>✓</span> : ativo ? <Pensando /> : <span style={{ color: C.textMuted, fontSize: 12 }}>aguardando…</span>}
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {prontos && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 16 }}>
            <div style={{ textAlign: "center", fontFamily: "'Nunito',sans-serif", fontWeight: 800, color: C.greenDeep, marginBottom: 12 }}>
              ⚡ Tudo ao mesmo tempo — o que levaria horas, levou segundos!
            </div>
            <ChunkyButton full cor={C.green} onClick={onAdvance}>{step.sucesso} →</ChunkyButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

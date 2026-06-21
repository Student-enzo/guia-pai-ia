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

// ════════════════ TRANSFORMA (conserta o pedido — toggles + rewrite ao vivo) ════════════════
export function Transforma({ step, onResponder, locked }: { step: Extract<Step, { kind: "transforma" }>; onResponder: RespFn; locked: boolean }) {
  const [on, setOn] = useState<Set<number>>(new Set());
  const [enviado, setEnviado] = useState(false);
  const total = step.ingredientes.length;
  const todos = on.size === total;
  const { shown, done } = useTyped(step.respostaForte, enviado);

  useEffect(() => {
    if (enviado && done) {
      const t = setTimeout(() => onResponder(true, step.sucesso), 350);
      return () => clearTimeout(t);
    }
  }, [enviado, done, onResponder, step.sucesso]);

  const toggle = (i: number) => {
    if (enviado || locked) return;
    setOn((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });
  };

  const promptAtual =
    step.base + step.ingredientes.filter((_, i) => on.has(i)).map((g) => " " + g.texto).join("");

  return (
    <div>
      <h3 style={tituloStyle}>Conserta o pedido</h3>
      <p style={subStyle}>{step.instrucao}</p>

      {/* pedido ao vivo */}
      <div style={{ background: "#08090B", border: `1px solid ${C.line}`, borderRadius: 14, padding: "14px 15px", marginBottom: 12 }}>
        <span className="label-caps" style={{ color: C.seaDeep }}>Seu pedido agora</span>
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 15, color: C.text, lineHeight: 1.5, margin: "8px 0 0" }}>
          {step.base}
          {step.ingredientes.map((g, i) =>
            on.has(i) ? (
              <motion.span key={i} initial={{ background: "rgba(74,222,128,0.4)" }} animate={{ background: "rgba(74,222,128,0.14)" }} transition={{ duration: 0.8 }} style={{ color: C.green, borderRadius: 4, padding: "1px 3px" }}>
                {" "}{g.texto}
              </motion.span>
            ) : null
          )}
        </p>
      </div>

      {/* medidor de qualidade */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <span className="label-caps" style={{ color: C.textMuted }}>Força</span>
        <div style={{ flex: 1, display: "flex", gap: 4 }}>
          {step.ingredientes.map((_, i) => (
            <div key={i} style={{ flex: 1, height: 8, borderRadius: 999, background: i < on.size ? C.green : "rgba(255,255,255,0.08)", transition: "background 250ms" }} />
          ))}
        </div>
      </div>

      {/* ingredientes pra ligar */}
      {!enviado && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
          {step.ingredientes.map((g, i) => (
            <button key={i} onClick={() => toggle(i)} className="clay" style={{
              background: on.has(i) ? C.green : C.card2,
              color: on.has(i) ? "#0A0B0D" : C.text,
              padding: "9px 13px", fontSize: 13.5, fontWeight: 800,
              border: `1px solid ${on.has(i) ? C.green : C.line}`,
              boxShadow: "0 3px 0 0 rgba(0,0,0,0.4)",
            }}>
              {on.has(i) ? "✓ " : "+ "}{g.etiqueta}
            </button>
          ))}
        </div>
      )}

      {/* antes (preview fraco) / depois (resposta forte) */}
      {!enviado ? (
        <p style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: C.textMuted, fontStyle: "italic", marginBottom: 16, lineHeight: 1.5 }}>
          🦜 Com o pedido fraco, viria algo sem graça: “{step.respostaFraca}”
        </p>
      ) : (
        <div style={{ marginBottom: 8 }}>
          <Telinha>
            <Bolha from="eu">{promptAtual}</Bolha>
            <Bolha from="ia">{shown}{!done && <span style={{ opacity: 0.5 }}>▍</span>}</Bolha>
          </Telinha>
        </div>
      )}

      {!enviado && (
        <ChunkyButton full cor={todos ? C.brass : C.card2} textColor={todos ? "#0A0B0D" : C.textMuted} disabled={locked || !todos} onClick={() => setEnviado(true)}>
          {todos ? "📨 Enviar o pedido forte" : `Liga os ${total} ingredientes pra enviar`}
        </ChunkyButton>
      )}
    </div>
  );
}

// ════════════════ CHAT (Conversa Viva) ════════════════
export function ChatVivo({ step, onAdvance }: { step: Extract<Step, { kind: "chat" }>; onAdvance: () => void }) {
  const [visiveis, setVisiveis] = useState(0); // quantos turnos já apareceram
  const [digitando, setDigitando] = useState(false);
  const fimRef = useRef<HTMLDivElement>(null);

  const proximo = step.turnos[visiveis];
  const acabou = visiveis >= step.turnos.length;

  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [visiveis, digitando]);

  const avancar = () => {
    if (!proximo || digitando) return;
    if (proximo.de === "voce") {
      setVisiveis((v) => v + 1);
    } else {
      // a IA "pensa" e depois digita
      setDigitando(true);
      setTimeout(() => {
        setDigitando(false);
        setVisiveis((v) => v + 1);
      }, 600);
    }
  };

  const ultimoIA = step.turnos[visiveis - 1]?.de === "ia";

  return (
    <div>
      <h3 style={tituloStyle}>{step.titulo ?? "Conversa viva"}</h3>
      <p style={subStyle}>{step.instrucao}</p>
      <Telinha>
        {visiveis === 0 && !digitando && (
          <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, color: C.textMuted, textAlign: "center", padding: "16px 0", fontWeight: 600 }}>
            👇 Toque pra começar a conversa
          </p>
        )}
        {step.turnos.slice(0, visiveis).map((t, k) =>
          t.de === "voce" ? (
            <Bolha key={k} from="eu">{t.texto}</Bolha>
          ) : (
            <RespostaIA key={k} texto={t.texto} ativa={k === visiveis - 1 && ultimoIA} />
          )
        )}
        {digitando && (
          <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: C.seaLight, border: `2px solid ${C.sea}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🦜</div>
            <div style={{ background: C.card2, border: `1px solid ${C.line}`, borderRadius: 18, borderBottomLeftRadius: 4, padding: "12px 16px" }}><Pensando /></div>
          </div>
        )}
        <div ref={fimRef} />
      </Telinha>

      <div style={{ marginTop: 16 }}>
        {!acabou ? (
          <ChunkyButton full cor={C.sea} disabled={digitando} onClick={avancar}>
            {proximo?.de === "voce" ? "✍️ Enviar minha mensagem" : "👀 Ver a IA responder"}
          </ChunkyButton>
        ) : (
          <>
            <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, fontWeight: 700, color: C.green, textAlign: "center", margin: "0 0 12px" }}>{step.sucesso}</p>
            <ChunkyButton full cor={C.green} onClick={onAdvance}>Continuar →</ChunkyButton>
          </>
        )}
      </div>
    </div>
  );
}

// ════════════════ MEDIDOR (Medidor de Contexto) ════════════════
export function Medidor({ step, onAdvance }: { step: Extract<Step, { kind: "medidor" }>; onAdvance: () => void }) {
  const [ativos, setAtivos] = useState<Set<number>>(new Set());
  const total = step.chips.length;
  const pct = total === 0 ? 0 : Math.round((ativos.size / total) * 100);
  const cheio = ativos.size === total;
  const { shown, done } = useTyped(cheio ? step.respostaForte : step.respostaFraca, true, 14);

  const toggle = (i: number) =>
    setAtivos((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  // cor do medidor: vermelho → amarelo → verde
  const cor = pct < 40 ? C.coral : pct < 100 ? C.brass : C.green;
  const cara = pct < 40 ? "😐" : pct < 100 ? "🙂" : "🤩";

  return (
    <div>
      <h3 style={tituloStyle}>{step.titulo ?? "Medidor de Contexto"}</h3>
      <p style={subStyle}>{step.instrucao}</p>

      {/* medidor animado */}
      <div style={{ background: C.card2, border: `1px solid ${C.line}`, borderRadius: 16, padding: "16px 16px 14px", marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, color: C.textMuted }}>FORÇA DO CONTEXTO</span>
          <span style={{ fontSize: 24 }}>{cara}</span>
        </div>
        <div style={{ height: 18, borderRadius: 999, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
          <motion.div animate={{ width: `${pct}%`, background: cor }} transition={{ type: "spring", stiffness: 120, damping: 18 }}
            style={{ height: "100%", borderRadius: 999 }} />
        </div>
        <div style={{ textAlign: "right", marginTop: 5, fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 13, color: cor }}>
          {pct < 40 ? "FRACO" : pct < 100 ? "ESQUENTANDO" : "FORTE! ✨"}
        </div>
      </div>

      {/* chips de contexto */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {step.chips.map((c, i) => {
          const on = ativos.has(i);
          return (
            <button key={i} onClick={() => toggle(i)} className="clay"
              style={{ background: on ? C.green : C.card2, color: on ? "#0A0B0D" : C.text, border: `2px solid ${on ? "transparent" : C.line}`, padding: "9px 14px", fontSize: 14, fontWeight: 700, borderRadius: 999 }}>
              {on ? "✓ " : "+ "}{c}
            </button>
          );
        })}
      </div>

      {/* resposta da IA que se transforma */}
      <Telinha>
        <Bolha from="ia">
          {shown}{!done && <span style={{ opacity: 0.5 }}>▍</span>}
        </Bolha>
      </Telinha>

      <div style={{ marginTop: 16 }}>
        <ChunkyButton full cor={cheio ? C.green : C.card2} textColor={cheio ? "#0A0B0D" : C.textMuted} disabled={!cheio} onClick={onAdvance}>
          {cheio ? step.sucesso : "Adicione todo o contexto pra encher o medidor"}
        </ChunkyButton>
      </div>
    </div>
  );
}

// ════════════════ BOSS (O Cliente Difícil) ════════════════
export function Boss({ step, onAdvance }: { step: Extract<Step, { kind: "boss" }>; onAdvance: () => void }) {
  const [usados, setUsados] = useState<Set<number>>(new Set());
  const [tremor, setTremor] = useState(false);
  const bons = step.ingredientes.filter((g) => g.bom).length;
  const bonsUsados = step.ingredientes.filter((g, i) => g.bom && usados.has(i)).length;
  const venceu = bonsUsados === bons;
  const irritacao = Math.max(0, bons - bonsUsados); // corações de irritação restantes

  const cara = venceu ? "😄" : irritacao >= bons ? "😡" : irritacao === 0 ? "😄" : irritacao <= Math.ceil(bons / 2) ? "🙂" : "😠";

  const escolher = (i: number) => {
    if (usados.has(i) || venceu) return;
    const ing = step.ingredientes[i];
    if (ing.bom) {
      setUsados((u) => new Set(u).add(i));
    } else {
      // armadilha: treme e dá um feedback, mas não progride
      setTremor(true);
      setTimeout(() => setTremor(false), 450);
    }
  };

  return (
    <div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(248,113,113,0.12)", border: `1px solid rgba(248,113,113,0.35)`, borderRadius: 999, padding: "5px 12px", marginBottom: 12 }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: C.coral }} />
        <span className="label-caps" style={{ color: C.coral }}>Boss Battle</span>
      </div>
      <h3 style={tituloStyle}>{step.titulo ?? "O Cliente Difícil"}</h3>

      {/* o boss */}
      <motion.div animate={tremor ? { x: [0, -8, 8, -5, 0] } : {}} transition={{ duration: 0.4 }}
        style={{ background: C.card2, border: `1px solid ${venceu ? C.green + "66" : "rgba(248,113,113,0.3)"}`, borderRadius: 16, padding: "16px 16px", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <motion.span animate={{ scale: venceu ? [1, 1.3, 1] : 1 }} style={{ fontSize: 40 }}>{cara}</motion.span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 15, color: C.text }}>{step.cliente}</div>
            {/* barra de irritação (corações) */}
            <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
              {Array.from({ length: bons }).map((_, k) => (
                <motion.span key={k} animate={{ scale: k >= irritacao ? [1, 1.4, 0] : 1, opacity: k >= irritacao ? 0.25 : 1 }}
                  style={{ fontSize: 15 }}>{k >= irritacao ? "🤍" : "❤️"}</motion.span>
              ))}
            </div>
          </div>
        </div>
        <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, color: venceu ? C.text : C.textMuted, fontStyle: "italic", lineHeight: 1.5, margin: 0 }}>
          {venceu ? `🦜 "${step.respostaVitoria}"` : `"${step.reclamacao}"`}
        </p>
      </motion.div>

      {!venceu ? (
        <>
          <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 14, fontWeight: 700, color: C.textMuted, marginBottom: 10 }}>
            Monte a resposta certa pra acalmar ele (cuidado com as armadilhas):
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
            {step.ingredientes.map((g, i) => {
              const on = usados.has(i);
              return (
                <button key={i} onClick={() => escolher(i)} disabled={on} className="clay"
                  style={{ background: on ? C.green : C.card2, color: on ? "#0A0B0D" : C.text, border: `2px solid ${on ? "transparent" : C.line}`, padding: "11px 15px", fontSize: 14.5, fontWeight: 700, opacity: on ? 0.85 : 1 }}>
                  {on ? "✓ " : ""}{g.etiqueta}
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <div style={{ marginTop: 4 }}>
          <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 800, color: C.green, textAlign: "center", margin: "0 0 12px" }}>
            🏆 Boss derrotado! {step.sucesso}
          </p>
          <ChunkyButton full cor={C.green} onClick={onAdvance}>Próxima ilha →</ChunkyButton>
        </div>
      )}
    </div>
  );
}

// ════════════════ CORRIDA (Corrida do Swarm) ════════════════
export function Corrida({ step, onAdvance }: { step: Extract<Step, { kind: "corrida" }>; onAdvance: () => void }) {
  const [correndo, setCorrendo] = useState(false);
  const [soloProg, setSoloProg] = useState(0); // 0..n (tarefas concluídas em fila)
  const [swarmDone, setSwarmDone] = useState(false);
  const [acabou, setAcabou] = useState(false);
  const n = step.tarefas.length;

  const largar = () => {
    if (correndo) return;
    setCorrendo(true);
    setSoloProg(0);
    setSwarmDone(false);
    setAcabou(false);
    // swarm: todos em paralelo, termina rápido
    setTimeout(() => setSwarmDone(true), 1400);
    // solo: uma tarefa de cada vez, devagar
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setSoloProg(i);
      if (i >= n) {
        clearInterval(id);
        setAcabou(true);
      }
    }, 900);
  };

  return (
    <div>
      <h3 style={tituloStyle}>🏁 Corrida do Swarm</h3>
      <p style={subStyle}>{step.instrucao}</p>

      {/* pista do solo */}
      <Pista titulo="1 barco sozinho (em fila)" cor={C.coral}>
        <motion.span animate={{ x: `${(soloProg / n) * 88}%` }} transition={{ type: "spring", stiffness: 90, damping: 16 }} style={{ fontSize: 26, position: "absolute" }}>🚤</motion.span>
        <span style={{ position: "absolute", right: 0, fontSize: 20 }}>🏁</span>
      </Pista>
      <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: C.textMuted, margin: "4px 0 14px" }}>
        {correndo ? `Fazendo ${soloProg}/${n}: ${step.tarefas[Math.min(soloProg, n - 1)]}` : "esperando largada..."}
      </p>

      {/* pista do swarm */}
      <Pista titulo={`Swarm: ${n} barcos ao mesmo tempo`} cor={C.green}>
        {step.tarefas.map((_, k) => (
          <motion.span key={k} animate={{ x: swarmDone ? "88%" : correndo ? "88%" : "0%" }} transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ fontSize: 20, position: "absolute", top: 2 + k * 9 }}>⛵</motion.span>
        ))}
        <span style={{ position: "absolute", right: 0, fontSize: 20 }}>🏁</span>
      </Pista>
      <p style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: swarmDone ? C.green : C.textMuted, margin: "4px 0 16px" }}>
        {swarmDone ? "✓ Swarm terminou TUDO de uma vez!" : correndo ? "todos trabalhando juntos..." : "esperando largada..."}
      </p>

      {!correndo && !acabou && (
        <ChunkyButton full cor={C.brass} textColor="#0A0B0D" onClick={largar}>▶ Largar a corrida</ChunkyButton>
      )}
      {correndo && !acabou && (
        <ChunkyButton full cor={C.card2} textColor={C.textMuted} disabled onClick={() => {}}>Correndo... 🏎️</ChunkyButton>
      )}
      {acabou && (
        <>
          <p style={{ fontFamily: "'Nunito',sans-serif", fontSize: 15, fontWeight: 700, color: C.green, textAlign: "center", margin: "0 0 12px" }}>{step.sucesso}</p>
          <ChunkyButton full cor={C.green} onClick={onAdvance}>Entendi o poder do swarm →</ChunkyButton>
        </>
      )}
    </div>
  );
}

function Pista({ titulo, cor, children }: { titulo: string; cor: string; children: React.ReactNode }) {
  return (
    <div>
      <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 12.5, color: cor }}>{titulo}</span>
      <div style={{ position: "relative", height: 40, background: C.card2, border: `1px solid ${C.line}`, borderRadius: 12, marginTop: 4, padding: "0 8px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        {children}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { C, PAI } from "@/lib/config";
import { CopyButton, Passos, TenteVoce } from "@/lib/ui";
import { Desafio } from "./Shell";
import { dispararConfete } from "@/lib/fun";

// O prompt pronto da técnica do Conselho de Especialistas.
const PROMPT_CONSELHO = `Quero tomar uma decisão importante: [DESCREVA A DECISÃO EM 1-2 FRASES].

Aqui vai um contexto curto: [JOGUE O CONTEXTO BRUTO, SEM ORGANIZAR].

FASE 1 — SÓ CONTEXTO (não decida nada ainda):
Faça uma série de perguntas pra cobrir todas as lacunas e pistas de contexto — inclusive coisas que eu posso estar escondendo de mim mesmo por ego ou pra proteger meu próprio raciocínio.
- Pergunte SÓ sobre contexto, não sobre a decisão. Ainda não estamos estrategizando.
- NÃO faça perguntas que me deixem colocar minha opinião ou revelar pra que lado eu já estou inclinado. Contexto puro.

FASE 2 — MONTAR O CONSELHO:
Se você conhece os maiores especialistas reais dessa área, use-os. Se não souber, primeiro me diga quem são.
Crie um conselho de diretores que DISCUTE entre si usando "chapéus de pensamento" diferentes, e que NÃO concorda na hora só pra terminar a tarefa.
Membros do conselho: [NOMES + ÁREA DE EXPERTISE, ou peça sugestões].
Use conceitos baseados em TRABALHO REAL e rastreável dessas pessoas (com links e citações de verdade), não no que você ACHA que elas diriam.
Depois, peça que o conselho me diga: com base no contexto, há alguma lacuna que eu preciso explicar melhor antes de continuar?

FASE 3 — RODAR O CONSELHO:
Rode o conselho e chegue a 3 respostas possíveis pro problema. Vou ler as 3 e escolher 1.
SÓ DEPOIS que eu escolher, eu adiciono minha opinião e meus comentários — e aí você pede pro conselho revisar a decisão com isso.`;

// Seção BÔNUS — não é um módulo travado, é uma recompensa avançada.
export function BonusConselho() {
  return (
    <section
      id="conselho"
      style={{
        scrollMarginTop: 80,
        padding: "64px 0",
        background: C.ink,
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 22px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 12,
              letterSpacing: "0.22em",
              color: C.brassLight,
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            ⭐ NUGGET DE MESTRE (avançado — guarde pra quando crescer)
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(30px, 6vw, 46px)",
              fontWeight: 600,
              color: "#fff",
              margin: "0 0 8px",
              lineHeight: 1.08,
            }}
          >
            🎩 O Conselho de Especialistas
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#C9C4BB",
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', serif",
              margin: "0 0 24px",
            }}
          >
            O truque secreto pra decisões grandes — sem a IA puxar o seu saco.
          </p>

          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#E8E4DC", marginBottom: 16 }}>
            Tem um problema com toda IA, {PAI.comoChamar}: ela é treinada pra te agradar. Se você
            pergunta &ldquo;essa decisão é boa?&rdquo;, ela tende a dizer que sim — porque acha que é
            isso que você quer ouvir. Péssimo pra quem toca um negócio e precisa da verdade.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "#E8E4DC", marginBottom: 24 }}>
            A solução não é um &ldquo;prompt mágico&rdquo; genérico. É montar um{" "}
            <b style={{ color: C.brassLight }}>conselho de especialistas de verdade</b> que debate
            entre si e te questiona <i>antes</i> de você decidir. Funciona assim:
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(176,137,79,0.4)",
              borderRadius: 16,
              padding: "24px 24px 20px",
              color: "#E8E4DC",
            }}
          >
            <Passos
              steps={[
                <span key="1" style={{ color: "#E8E4DC" }}>
                  <b>Despeje o contexto cru</b> da decisão — sem organizar, sem dizer pra que lado
                  você já está pendendo.
                </span>,
                <span key="2" style={{ color: "#E8E4DC" }}>
                  Peça pra IA <b>te fazer perguntas só de contexto</b> — pra cobrir lacunas que até
                  você esconde de si mesmo. Proíba ela de perguntar coisas que revelem sua opinião.
                </span>,
                <span key="3" style={{ color: "#E8E4DC" }}>
                  Peça os <b>maiores especialistas reais</b> da área (se não souber, deixe a IA
                  sugerir).
                </span>,
                <span key="4" style={{ color: "#E8E4DC" }}>
                  Monte um <b>conselho que debate</b> com &ldquo;chapéus de pensamento&rdquo;
                  diferentes — e que <b>não concorda na hora</b> só pra terminar. Exija que se baseiem
                  no <b>trabalho real</b> dessas pessoas, com links e citações.
                </span>,
                <span key="5" style={{ color: "#E8E4DC" }}>
                  O conselho chega a <b>3 respostas possíveis</b>. Você lê as três e <b>escolhe uma</b>.
                </span>,
                <span key="6" style={{ color: "#E8E4DC" }}>
                  <b>Só agora</b> você adiciona sua opinião e pede pro conselho revisar. Assim sua
                  cabeça não contamina a análise antes da hora.
                </span>,
              ]}
            />
          </div>

          {/* Prompt pronto */}
          <div
            style={{
              background: "#000",
              borderRadius: 16,
              padding: "22px 22px 20px",
              margin: "22px 0",
              border: "1px solid rgba(176,137,79,0.35)",
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
              📋 O PROMPT DO CONSELHO (copie e preencha os [colchetes])
            </div>
            <pre
              style={{
                color: "#D8D3CA",
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: 13,
                lineHeight: 1.6,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                margin: "0 0 16px",
                maxHeight: 260,
                overflowY: "auto",
              }}
            >
              {PROMPT_CONSELHO}
            </pre>
            <CopyButton text={PROMPT_CONSELHO} label="Copiar o Prompt do Conselho" />
          </div>

          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: 4 }}>
            <Desafio id="conselho:mestre" onComplete={dispararConfete}>
              <span style={{ color: "#E8E4DC" }}>
                <b style={{ color: C.brassLight }}>Desafio de mestre 🏆</b>
                <br />
                Pegue uma decisão real do {PAI.negocio} (um preço novo, contratar alguém, um
                investimento) e rode o Conselho de Especialistas com o prompt acima. Veja como é
                diferente de só &ldquo;perguntar pra IA&rdquo;. Marque quando rodar.
              </span>
            </Desafio>
          </div>

          <TenteVoce>
            <span style={{ color: "#E8E4DC" }}>
              Comece pequeno: rode só a <b>Fase 1</b> (deixar a IA te questionar sobre contexto). Já
              vale ouro — ela vai apontar buracos no seu raciocínio que você nem via.
            </span>
          </TenteVoce>
        </motion.div>
      </div>
    </section>
  );
}

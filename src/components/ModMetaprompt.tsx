"use client";

import { C, PAI } from "@/lib/config";
import { NuggetCard, Passos, TenteVoce, PromptBox } from "@/lib/ui";
import { ModuleShell, Desafio } from "./Shell";
import { dispararConfete } from "@/lib/fun";

// O "compilador de briefing": a IA pega sua ideia bagunçada e devolve um pedido bem feito.
const PROMPT_COMPILADOR = `Você é meu assistente que escreve pedidos para a IA por mim.

Vou te dar uma ideia solta e bagunçada. Sua tarefa:
1. Transforme minha ideia num pedido completo e bem feito.
2. ANTES de fazer qualquer coisa, me mostre como você entendeu o pedido
   (em linguagem simples, em poucas linhas) e me pergunte se pode seguir.
3. Só depois que eu disser "pode ir", você executa.

Fale comigo como se eu fosse iniciante. Sem termos técnicos.

Minha ideia bagunçada é: `;

// MÓDULO 2 — META-PROMPTING. A ponte para o Prompt Mágico do módulo 3.
export function ModMetaprompt() {
  return (
    <ModuleShell
      id="metaprompt"
      numero={2}
      emoji="🎩"
      titulo="A IA te ajuda a falar com a IA"
      subtitulo="O truque de profissional: deixe a própria IA escrever o pedido perfeito pra você."
      totalDesafios={1}
    >
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 8 }}>
        {PAI.comoChamar}, aqui vai a sacada que muda tudo. Você ficou preocupado em aprender a
        escrever o pedido perfeito pra IA, né? Pois é o seguinte: <b>você não precisa</b>. Por que
        escrever o pedido perfeito sozinho se a própria IA pode escrever <i>por você</i>?
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 18 }}>
        É como pedir ajuda pro seu imediato antes de atracar o barco: você fala a ideia geral, e ele
        organiza a manobra direitinho. Você manda a ideia bagunçada, e a IA devolve um pedido
        redondo. Esse é o jeito que os profissionais usam. 🎩
      </p>

      <div
        style={{
          background: C.brass,
          color: C.onDark,
          borderRadius: 14,
          padding: "16px 20px",
          marginBottom: 20,
          fontSize: 15,
          lineHeight: 1.55,
        }}
      >
        🧭 <b>A frase mágica:</b> &ldquo;Transforme isso num pedido bem feito e me mostre antes de
        executar.&rdquo; Cole sua ideia solta, diga isso, e deixe a IA arrumar a casa.
      </div>

      {/* O compilador de briefing — prompt pronto pra copiar */}
      <div style={{ marginBottom: 8 }}>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 26,
            fontWeight: 600,
            color: C.ink,
            margin: "0 0 6px",
          }}
        >
          O pedido que escreve pedidos
        </h3>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: C.textMuted, margin: "0 0 6px" }}>
          Cole isso, escreva sua ideia bagunçada logo depois, e mande. A IA monta o pedido bonito e
          ainda te mostra o plano antes de fazer.
        </p>
      </div>
      <PromptBox copyText={PROMPT_COMPILADOR}>{PROMPT_COMPILADOR}</PromptBox>

      {/* Exemplo concreto: ideia bagunçada → pedido organizado → resultado */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 26,
          fontWeight: 600,
          color: C.ink,
          margin: "28px 0 12px",
        }}
      >
        Veja na prática
      </h3>

      <div
        style={{
          background: C.paper2,
          borderRadius: 14,
          padding: "18px 20px",
          marginBottom: 14,
        }}
      >
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 11,
            letterSpacing: "0.16em",
            color: C.textMuted,
            marginBottom: 8,
          }}
        >
          1️⃣ VOCÊ DIGITA (bagunçado, do seu jeito)
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: C.text, margin: 0, fontStyle: "italic" }}>
          &ldquo;quero mandar algo pros clientes sobre o passeio de amanhã&rdquo;
        </p>
      </div>

      <div
        style={{
          background: C.paper,
          border: `1px solid ${C.paper2}`,
          borderRadius: 14,
          padding: "18px 20px",
          marginBottom: 14,
        }}
      >
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 11,
            letterSpacing: "0.16em",
            color: C.brass,
            marginBottom: 8,
          }}
        >
          2️⃣ A IA DEVOLVE (pedido organizado, e pergunta antes)
        </div>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: C.text, margin: 0 }}>
          &ldquo;Entendi assim: você quer uma mensagem curta e simpática pros hóspedes do passeio de
          amanhã, lembrando o horário e o local de encontro, com um tom acolhedor do{" "}
          {PAI.negocioCurto}. Posso escrever três versões pra você escolher? <b>Posso seguir?</b>
          &rdquo;
        </p>
      </div>

      <div
        style={{
          background: "#EAF2F1",
          border: `1px solid ${C.seaLight}`,
          borderRadius: 14,
          padding: "18px 20px",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 11,
            letterSpacing: "0.16em",
            color: C.seaDeep,
            marginBottom: 8,
          }}
        >
          3️⃣ VOCÊ DIZ &ldquo;PODE IR&rdquo; → SAI O RESULTADO
        </div>
        <p style={{ fontSize: 15.5, lineHeight: 1.6, color: C.text, margin: 0 }}>
          E aí ela escreve as mensagens prontinhas, do jeito certo. Você só revisou a ideia — não
          precisou montar o pedido perfeito sozinho. A IA fez o trabalho difícil. ⚓
        </p>
      </div>

      {/* Dois nuggets */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 24 }}>
        <NuggetCard numero={1} titulo="Deixe a IA montar o pedido por você">
          Não trave tentando escrever certinho. Jogue a ideia crua — &ldquo;quero responder esse
          cliente&rdquo;, &ldquo;preciso de um aviso pro grupo&rdquo; — e peça pra ela transformar
          num pedido bem feito. Falar mal e ser entendido já basta; ela arruma o resto.
        </NuggetCard>
        <NuggetCard numero={2} titulo="Peça o plano ANTES de executar">
          Sempre diga &ldquo;me mostre como você entendeu antes de fazer&rdquo;. Assim a IA resume a
          interpretação dela e você confere se ela pegou a ideia certa — antes de gastar tempo com o
          resultado. É o seu &ldquo;confirma a rota antes de soltar a âncora&rdquo;.
        </NuggetCard>
      </div>

      {/* Ponte para o módulo 3 */}
      <div
        style={{
          background: C.ink,
          color: C.onDark,
          borderRadius: 14,
          padding: "18px 22px",
          marginBottom: 8,
          fontSize: 15.5,
          lineHeight: 1.6,
        }}
      >
        🪄 <b>Spoiler do próximo módulo:</b> e se você nunca mais precisasse colar esse compilador?
        No <b>Módulo 3</b> tem o <b>Prompt Mágico</b> — você cola uma vez e a IA passa a fazer isso{" "}
        <i>sozinha, pra sempre</i>, em toda conversa. Mas primeiro, bora testar esse truque aqui.
      </div>

      <Desafio id="metaprompt:compilador" onComplete={dispararConfete}>
        <b>Deixe a IA escrever o pedido por você 🎩</b>
        <TenteVoce>
          <Passos
            steps={[
              "Abra o Claude ou o ChatGPT numa conversa nova.",
              "Copie o compilador lá de cima (botão 📋) e cole na conversa.",
              <>
                Logo depois do prompt, escreva uma ideia bagunçada sua de verdade — tipo{" "}
                <i>&ldquo;quero agradecer os hóspedes de hoje no {PAI.negocioCurto}&rdquo;</i> — e
                mande.
              </>,
              "Veja a IA devolver o pedido organizado e perguntar se pode seguir. Responda “pode ir” e olhe o resultado sair pronto.",
            ]}
          />
        </TenteVoce>
        Quando ver a mágica acontecer, marque aqui embaixo. 🎉
      </Desafio>
    </ModuleShell>
  );
}

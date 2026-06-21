"use client";

import { C, PAI } from "@/lib/config";
import { NuggetCard, Passos, TenteVoce, PromptBox } from "@/lib/ui";
import { ModuleShell, Desafio } from "./Shell";
import { dispararConfete } from "@/lib/fun";

// Prompt de Pesquisa Profunda, adaptado pro negócio de barcos do capitão.
// Tirado do template do guia mestre, traduzido pra português de "5 anos".
const PROMPT_PESQUISA = `Use Pesquisa Profunda (Deep Research).

Objetivo: me ajudar a decidir o preço e o roteiro dos meus passeios de barco,
comparando com os concorrentes da minha região.

Por favor, faça um estudo do mercado de passeios e charter de barco na minha área.
Compare os concorrentes nesses pontos:
- preço do passeio;
- roteiros e paradas;
- tamanho dos grupos;
- o que os turistas mais gostam;
- reputação (avaliações recentes).

Me entregue no final:
- uma TABELA comparativa dos concorrentes;
- os pontos onde eu posso me destacar;
- uma recomendação simples do que mudar primeiro;
- a FONTE de cada informação e o nível de confiança (alta/média/baixa).

Regra importante: NÃO invente números (preço, receita, quantidade).
Se não tiver certeza, diga que não tem certeza e mostre de onde tirou cada dado.`;

// MÓDULO 6 — PESQUISA PROFUNDA. A IA vira uma equipe de pesquisa inteira.
export function ModResearch() {
  return (
    <ModuleShell
      id="research"
      numero={6}
      emoji="🔍"
      titulo="Pesquisa Profunda"
      subtitulo="Quando a pergunta é grande demais pra uma resposta rápida — mande a IA fazer um relatório."
      totalDesafios={1}
    >
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 8 }}>
        Até agora, {PAI.comoChamar}, você fez perguntas e a IA respondeu na hora — rápido, como
        perguntar uma coisa pra um marinheiro ali no cais. Pra perguntas do dia a dia, isso basta.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 18 }}>
        Mas às vezes a pergunta é <b>grande</b>: tipo &ldquo;quanto cobrar pelo passeio comparado
        aos concorrentes aqui da região?&rdquo;. Pra isso existe um modo mais pesado, a{" "}
        <b>Pesquisa Profunda</b> (em inglês, <i>Deep Research</i>). Ela lê <b>dezenas de fontes</b> e
        volta com um <b>relatório completo, com as fontes citadas</b>. É a diferença entre perguntar
        pra um marinheiro e mandar uma <b>tripulação inteira de pesquisa</b> bater perna no cais e
        voltar com tudo anotado. 🚢
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
        🧭 <b>Regra de bolso:</b> use Pesquisa Profunda quando a <b>decisão depende dela</b> —
        mercado, concorrentes, preço, regras. Pra coisa rápida (uma data, um nome), nem precisa:
        seria como mandar a tripulação toda só pra buscar um café. ☕
      </div>

      {/* Como ligar esse modo */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 26,
          color: C.ink,
          margin: "8px 0 12px",
        }}
      >
        Como ligar a Pesquisa Profunda 🔌
      </h3>
      <Passos
        steps={[
          <>
            Abra o <b>Claude</b> ou o <b>ChatGPT</b> numa conversa nova.
          </>,
          <>
            Procure o botão <b>&ldquo;Deep Research&rdquo;</b> (ou &ldquo;Pesquisa Profunda&rdquo;).
            Se não achar o botão, é só escrever <b>/deep-research</b> no começo da mensagem.
          </>,
          <>
            Faça uma <b>pergunta bem clara</b> e peça pra ela <b>citar as fontes</b>. Pronto — ela
            vai pesquisar sozinha e voltar com o relatório.
          </>,
        ]}
      />

      <TenteVoce>
        Antes de soltar a tripulação, a IA pode te mostrar um <b>plano</b> do que vai pesquisar.
        Dá uma olhada nesse plano. Se faltar algo importante (tipo &ldquo;também olha os preços do
        concorrente tal&rdquo;), é só pedir. Você é o capitão — quem dá o rumo é você. ⚓
      </TenteVoce>

      {/* O prompt pronto */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 26,
          color: C.ink,
          margin: "26px 0 6px",
        }}
      >
        Um prompt pronto pro seu negócio 🛥️
      </h3>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: C.text, margin: "0 0 4px" }}>
        Copie isto, cole na Pesquisa Profunda e troque o que estiver entre colchetes. Repare que ele
        já pede a <b>tabela</b>, as <b>fontes</b> e o <b>nível de confiança</b> de cada dado:
      </p>
      <PromptBox copyText={PROMPT_PESQUISA}>{PROMPT_PESQUISA}</PromptBox>

      {/* Os dois nuggets */}
      <div style={{ display: "grid", gap: 16, margin: "26px 0" }}>
        <NuggetCard numero={1} titulo="Use a Pesquisa Profunda quando a decisão depende dela">
          Vale a tripulação inteira quando o que você vai decidir mexe com{" "}
          <b>dinheiro, preço ou estratégia</b>. Pra perguntinha rápida, a resposta normal já serve —
          não gaste o canhão pra matar mosquito. 🦟
        </NuggetCard>
        <NuggetCard numero={2} titulo="Peça as fontes e confira — IA confiante também erra">
          A IA fala tudo com a maior segurança do mundo, mas pode estar <b>errada</b>. Por isso
          sempre diga <i>&ldquo;não invente números, cite as fontes&rdquo;</i> — e depois{" "}
          <b>você</b> abre pelo menos uma fonte pra conferir. Confiança não é prova. 🕵️
        </NuggetCard>
      </div>

      <Desafio id="research:mercado" onComplete={dispararConfete}>
        <b>Mande sua tripulação de pesquisa ao cais 🚢</b>
        <br />
        Abra o Claude ou o ChatGPT, ligue a Pesquisa Profunda e cole o prompt aí de cima (ajustando
        pra sua região). Quando o relatório chegar, faça duas coisinhas:{" "}
        <b>(1)</b> leia por cima a tabela comparativa, e <b>(2)</b> clique em <b>pelo menos uma
        fonte</b> pra ver se o número bate de verdade. Conferiu? Marque aqui embaixo. ⚓
      </Desafio>
    </ModuleShell>
  );
}

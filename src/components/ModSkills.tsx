"use client";

import { C, PAI } from "@/lib/config";
import { ModuleShell, Desafio } from "./Shell";
import { NuggetCard, Passos, TenteVoce, CopyButton, PromptBox } from "@/lib/ui";
import { dispararConfete } from "@/lib/fun";

// ── Tabelinha de comandos "/" — só os mais úteis pra um iniciante ──
const COMANDOS: { cmd: string; oque: string }[] = [
  { cmd: "/help", oque: "Mostra TUDO que existe de verdade. É a fonte da verdade — comece sempre por aqui." },
  { cmd: "/deep-research", oque: "Pesquisa pesada: a IA vasculha várias fontes e te traz um relatório com referências." },
  { cmd: "/code-review", oque: "Revisa um trabalho e aponta erros antes de você entregar. Como um segundo par de olhos." },
  { cmd: "/clear", oque: "Limpa a memória da conversa quando ela ficou confusa. Recomeça do zero, sem bagagem." },
  { cmd: "/compact", oque: "Resume a conversa longa pra não perder o fio. Guarda o essencial e segue." },
  { cmd: "/model", oque: "Troca o cérebro da IA — um mais rápido pra coisas simples, um mais esperto pra coisas difíceis." },
  { cmd: "/effort", oque: "Diz quanto esforço a IA coloca: mais esforço = resposta melhor, porém mais devagar." },
];

// MÓDULO 4 — SKILLS & COMANDOS "/". Salvar o jeito de fazer.
export function ModSkills() {
  return (
    <ModuleShell
      id="skills"
      numero={4}
      emoji="🧰"
      titulo="Salvar o Jeito de Fazer"
      subtitulo="Ensinou uma vez, nunca mais explica. Vira um atalho que você chama por um comando."
      totalDesafios={2}
    >
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 16 }}>
        {PAI.comoChamar}, imagina que você tem um marinheiro novo. Na primeira vez você explica
        direitinho como amarrar o barco no cais. Na segunda, na terceira... cansa, né? Aí um dia
        você ensina a rotina <b>uma vez só</b> e dá um nome pra ela. Pronto: nunca mais precisa
        repetir. É só dizer o nome e ele já sabe.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 18 }}>
        Com a IA é igual. Esse &ldquo;jeito salvo de fazer&rdquo; tem nome chique: <b>skill</b>
        {" "}(habilidade). E você chama ela digitando uma barra <code>/</code> seguida de um nome —
        é o tal do <b>comando &ldquo;/&rdquo;</b>.
      </p>

      {/* A regra de ouro, direto da fonte */}
      <div
        style={{
          background: C.brass,
          color: C.onDark,
          borderRadius: 14,
          padding: "16px 20px",
          marginBottom: 20,
          fontSize: 16,
          lineHeight: 1.55,
        }}
      >
        🪙 <b>A regra de ouro:</b> &ldquo;Se você está colando as mesmas instruções de novo e de
        novo, isso já é uma skill.&rdquo; Ou seja: aquilo que você repete merece virar um atalho.
      </div>

      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 27,
          fontWeight: 600,
          color: C.ink,
          margin: "8px 0 6px",
        }}
      >
        Os superpoderes da barra &ldquo;/&rdquo;
      </h3>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: C.text, marginBottom: 14 }}>
        Quando você digita só uma <code>/</code> na conversa, aparece um <b>menu de superpoderes</b>
        {" "}já prontos. Existem uns cem deles — mas relaxa, você só precisa de uns poucos. Aqui vão
        os mais úteis pra começar:
      </p>

      {/* Tabela enxuta de comandos */}
      <div
        style={{
          background: C.paper,
          border: `1px solid ${C.paper2}`,
          borderRadius: 16,
          padding: "8px 6px",
          margin: "8px 0 20px",
        }}
      >
        {COMANDOS.map(({ cmd, oque }, i) => (
          <div
            key={cmd}
            style={{
              display: "flex",
              gap: 14,
              alignItems: "flex-start",
              padding: "13px 16px",
              borderTop: i === 0 ? "none" : `1px solid ${C.paper2}`,
            }}
          >
            <code
              style={{
                flexShrink: 0,
                fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                fontSize: 14,
                fontWeight: 700,
                color: C.seaDeep,
                background: C.paper2,
                borderRadius: 8,
                padding: "4px 9px",
                minWidth: 116,
              }}
            >
              {cmd}
            </code>
            <span style={{ fontSize: 15, lineHeight: 1.55, color: C.text, paddingTop: 2 }}>
              {oque}
            </span>
          </div>
        ))}
      </div>

      {/* CLI — só um aviso amigável */}
      <div
        style={{
          background: C.paper2,
          borderLeft: `4px solid ${C.sea}`,
          borderRadius: "0 12px 12px 0",
          padding: "16px 20px",
          margin: "0 0 22px",
          fontSize: 15,
          lineHeight: 1.6,
          color: C.text,
        }}
      >
        ⚙️ <b>E o tal do CLI?</b> CLI é só conversar com o computador por <b>texto</b>, em vez de
        cliques. É onde moram os comandos mais poderosos. Mas é coisa de marinheiro avançado —
        totalmente <b>opcional</b>. Pode pular sem dó por enquanto.
      </div>

      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 27,
          fontWeight: 600,
          color: C.ink,
          margin: "8px 0 6px",
        }}
      >
        Criar a sua própria skill (mais fácil do que parece)
      </h3>
      <p style={{ fontSize: 16, lineHeight: 1.65, color: C.text, marginBottom: 12 }}>
        Uma skill, no fundo, é só um <b>arquivo de texto</b> (chamado <code>SKILL.md</code>) que
        descreve o comportamento que você quer. No aplicativo de chat dá pra fazer sem ver arquivo
        nenhum:
      </p>

      <Passos
        steps={[
          <>Abra o menu <b>Customize</b> (Personalizar) e vá em <b>Skills</b>.</>,
          <>Clique em <b>Create</b> (Criar).</>,
          <>
            Preencha a <b>description</b> (descrição) com capricho — é o campo mais importante! É por
            ela que a IA decide <i>quando</i> usar a skill sozinha.
          </>,
          <>Escreva, com suas palavras, o jeito que você quer que a coisa seja feita. Pronto. 🎉</>,
        ]}
      />

      <TenteVoce>
        Uma skill perfeita pro seu negócio: <b>&ldquo;Email de confirmação de reserva&rdquo;</b>. A
        descrição poderia ser: <i>&ldquo;Usar quando eu pedir pra confirmar uma reserva de barco.
        Escrever um email caloroso e profissional, no tom da {PAI.negocio}, confirmando data,
        horário e número de hóspedes, e desejando bons ventos.&rdquo;</i> Salvou isso uma vez? Nunca
        mais escreve esse email do zero.
      </TenteVoce>

      {/* Os dois nuggets de ouro */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: "24px 0" }}>
        <NuggetCard numero={1} titulo="Se você repete, vira skill">
          Toda vez que se pegar colando as mesmas instruções pela terceira vez, pare e pense:
          <i> &ldquo;isso aqui podia ser um atalho&rdquo;</i>. Porque podia. Salve uma vez e
          economize o resto da vida.
        </NuggetCard>
        <NuggetCard numero={2} titulo="Comece pelo /help — ele lista o que existe de verdade">
          O <code>/help</code> mostra a lista <b>real</b> dos comandos. Cuidado com &ldquo;comandos
          mágicos&rdquo; que aparecem na internet, tipo <code>/godmode</code> — quase sempre são
          invenção e <b>não existem</b>. Se não está no <code>/help</code>, desconfie.
        </NuggetCard>
      </div>

      {/* Desafio 1 — explorar o menu */}
      <Desafio id="skills:help">
        <b>Abra o baú de superpoderes 🧭</b>
        <br />
        Em qualquer chat de IA (ou no Claude Code), digite só uma barra <code>/</code> e leia o menu
        que aparece. Não precisa usar nada ainda — só dar uma espiada no que existe. Depois marque
        aqui.
      </Desafio>

      {/* Desafio 2 — criar uma skill de verdade, com confete */}
      <Desafio id="skills:criar" onComplete={dispararConfete}>
        <b>Crie a sua primeira skill ⚓</b>
        <br />
        Pense numa tarefa do {PAI.negocioCurto} que você faz <i>toda semana, do mesmo jeito</i> —
        confirmar reserva, responder dúvida de hóspede, mandar o roteiro do dia. Peça pra IA montar
        o <code>SKILL.md</code> pra você. Use o prompt abaixo, trocando a parte em colchetes:
        <PromptBox
          copyText={
            "Quero criar uma skill (um atalho salvo) pra uma tarefa que eu repito toda semana no meu negócio de charter de barcos.\n\n" +
            "A tarefa é: [DESCREVA AQUI — ex: escrever o email de confirmação quando um cliente fecha uma reserva].\n\n" +
            "Por favor, escreva pra mim o arquivo SKILL.md completo, com:\n" +
            "1) uma boa 'description' (pra IA saber quando usar essa skill sozinha);\n" +
            "2) as instruções do jeito que eu gosto, num tom caloroso e profissional.\n\n" +
            "Me explique em uma frase simples como eu salvo essa skill no app."
          }
        >
          {
            "Quero criar uma skill (um atalho salvo) pra uma tarefa que eu repito toda semana no meu negócio de charter de barcos.\n\n" +
            "A tarefa é: [DESCREVA AQUI — ex: escrever o email de confirmação quando um cliente fecha uma reserva].\n\n" +
            "Por favor, escreva pra mim o arquivo SKILL.md completo, com:\n" +
            "1) uma boa 'description' (pra IA saber quando usar essa skill sozinha);\n" +
            "2) as instruções do jeito que eu gosto, num tom caloroso e profissional.\n\n" +
            "Me explique em uma frase simples como eu salvo essa skill no app."
          }
        </PromptBox>
        Recebeu o arquivo? Você acabou de virar um capitão que delega. 🥳 Marque aqui!
      </Desafio>
    </ModuleShell>
  );
}

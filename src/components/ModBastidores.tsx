"use client";

import { C, PAI } from "@/lib/config";
import { NuggetCard, TenteVoce } from "@/lib/ui";
import { ModuleShell, Desafio } from "./Shell";
import { dispararConfete } from "@/lib/fun";

// MÓDULO 7 — OS BASTIDORES. Um glossário amigável das palavras "assustadoras".
// O objetivo: o pai nunca mais ficar perdido quando ouvir um termo técnico.

// ── O dicionário, em forma de array (cada palavra vira um card) ──
const TERMOS: { termo: string; emoji: string; explicacao: string }[] = [
  {
    termo: "GitHub",
    emoji: "📦",
    explicacao:
      "É um Google Drive gigante, só que feito pra projetos de programação. É onde o código mora, fica guardado e versionado (ou seja, com todas as versões antigas salvas). Se a casa cair, o projeto continua lá são e salvo.",
  },
  {
    termo: "Repositório (repo)",
    emoji: "🗂️",
    explicacao:
      "É só uma pasta de projeto lá dentro do GitHub. Um projeto = um repo. Quando alguém disser 'o repo', tá falando da pastinha onde aquele projeto vive.",
  },
  {
    termo: "Estrelas (stars) ⭐",
    emoji: "⭐",
    explicacao:
      "É o 'joinha' de um repo. Muitas estrelas = muita gente confia e usa aquilo. REGRA DE BOLSO pra saber se um projeto presta: olhe as estrelas (milhares = bem consolidado), veja se foi atualizado recentemente, e se tem um manual (documentação). Poucas estrelas + abandonado há anos = passe longe.",
  },
  {
    termo: "CLI (terminal)",
    emoji: "⌨️",
    explicacao:
      "É conversar com o computador digitando comandos, em vez de clicar com o mouse. Parece coisa de hacker de filme com a tela preta, mas no fundo é só texto — você escreve o que quer e dá Enter.",
  },
  {
    termo: "Skill / comando /",
    emoji: "/",
    explicacao:
      "É um comportamento já salvo que você chama digitando uma barra '/'. Tipo um atalho pronto pra uma tarefa que você faz sempre. (Você já viu isso lá no módulo 4.)",
  },
  {
    termo: "MCP / Connector",
    emoji: "🔌",
    explicacao:
      "É o cabo que liga a IA nas suas ferramentas — seu e-mail, sua agenda, suas planilhas. Sem o cabo, a IA só conversa; com o cabo, ela age. (Você plugou isso no módulo 5.)",
  },
  {
    termo: "Harness",
    emoji: "🦺",
    explicacao:
      "É o 'arnês', o sistema que você monta em volta da IA pra ela trabalhar do seu jeito, sozinha. O Prompt Mágico do módulo 3 já é o seu primeiro harness — você prendeu a IA no colete certo e ela passou a trabalhar do seu jeito.",
  },
  {
    termo: "Agente",
    emoji: "🤖",
    explicacao:
      "É uma IA que não só RESPONDE, mas EXECUTA. Em vez de te dizer 'abra tal arquivo', ela abre. Em vez de explicar como pesquisar, ela pesquisa e te entrega pronto. É a diferença entre um consultor e um funcionário que faz.",
  },
  {
    termo: "Swarm (enxame)",
    emoji: "🐝",
    explicacao:
      "São vários agentes trabalhando ao mesmo tempo, cada um numa parte do serviço. É a diferença entre mandar um marinheiro só fazer tudo, e ter uma tripulação inteira dividindo o trabalho. (Ferramentas como ruflo e GSD organizam esses enxames pra você.)",
  },
  {
    termo: "Loop",
    emoji: "🔁",
    explicacao:
      "É pedir pra IA repetir ou checar uma coisa de tempos em tempos, sozinha. Tipo: 'a cada 5 minutos, dá uma olhada se o serviço terminou e me avisa'. É a IA ficando de vigia pra você.",
  },
  {
    termo: "Ruflo / GSD",
    emoji: "🧭",
    explicacao:
      "São os 'capatazes' (orquestradores): ferramentas que coordenam enxames de agentes e organizam projetos grandes. Foram feitas por criadores de skills. São os bastidores que transformam uma IA solta num time inteiro trabalhando junto.",
  },
  {
    termo: "Skill creators",
    emoji: "🛠️",
    explicacao:
      "São as pessoas e comunidades que criam e compartilham essas skills e ferramentas. O melhor: você pode usar o trabalho deles de graça. Gente do mundo todo construindo peças que você só encaixa.",
  },
];

export function ModBastidores() {
  return (
    <ModuleShell
      id="bastidores"
      numero={7}
      emoji="⚙️"
      titulo="Os Bastidores"
      subtitulo="As palavras que você vai ouvir por aí — sem susto, sem decoreba."
      totalDesafios={1}
    >
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 8 }}>
        Olha só, {PAI.comoChamar}: o mundo da IA tem um monte de palavra esquisita que parece grego.
        Mas quase toda elas são ideias simples vestidas com roupa chique. Aqui embaixo tá o dicionário
        — uma palavra por vez, em português de gente.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 24 }}>
        Você <b>não precisa decorar nada</b>. É só pra quando alguém soltar uma dessas numa conversa,
        você dar aquele sorriso de quem já sabe e pensar: <i>&ldquo;ah, isso aí eu conheço&rdquo;</i>. ⚓
      </p>

      {/* Os cards do glossário */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "8px 0 28px" }}>
        {TERMOS.map(({ termo, emoji, explicacao }) => (
          <div
            key={termo}
            style={{
              background: C.paper,
              border: `1px solid ${C.paper2}`,
              borderRadius: 14,
              padding: "18px 20px",
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: 44,
                height: 44,
                borderRadius: 12,
                background: C.paper2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
              aria-hidden
            >
              {emoji}
            </span>
            <div>
              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: C.ink,
                  margin: "2px 0 6px",
                  lineHeight: 1.15,
                }}
              >
                {termo}
              </h4>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: C.text, margin: 0 }}>
                {explicacao}
              </p>
            </div>
          </div>
        ))}
      </div>

      <NuggetCard numero={1} titulo="Como saber se um projeto é bom (a regra das 3 perguntas)">
        Antes de confiar num projeto de programação, faça 3 perguntas rapidinhas:{" "}
        <b>1) Tem muitas estrelas?</b> (milhares = muita gente confia).{" "}
        <b>2) Foi atualizado recentemente?</b> (mês passado é ótimo; há 4 anos, cuidado).{" "}
        <b>3) Tem documentação?</b> (um manual de como usar). Passou nas três, é gente boa. É igual
        escolher um barco: vê se navegou recente, se o pessoal recomenda, e se veio com manual.
      </NuggetCard>

      <div style={{ height: 14 }} />

      <NuggetCard numero={2} titulo="Você não precisa decorar — só reconhecer">
        Ninguém vai te dar prova disso, {PAI.comoChamar}. O objetivo não é virar dicionário ambulante,
        é só nunca mais ficar perdido. Ouviu &ldquo;swarm&rdquo;? Você lembra: ah, é um monte de
        ajudante junto. Pronto. Já ganhou o jogo.
      </NuggetCard>

      <Desafio id="bastidores:glossario" onComplete={dispararConfete}>
        <b>Vira o jogo: faça a IA te explicar 🧠</b>
        <br />
        Escolha UMA palavra desse dicionário que ainda parece meio confusa pra você, e peça pra IA
        explicar com as <i>suas</i> próprias palavras. Quando você consegue explicar uma coisa de
        volta, é sinal de que aprendeu de verdade.
        <TenteVoce>
          Abra a IA e cole algo assim:{" "}
          <i>
            &ldquo;Me explica o que é um &lsquo;swarm&rsquo; como se eu tivesse 5 anos, usando um
            exemplo de barco. Depois me faça UMA perguntinha pra ver se eu entendi.&rdquo;
          </i>
          <br />
          <br />
          Quiser brincar mais? Peça também:{" "}
          <i>
            &ldquo;Me mostra um projeto famoso no GitHub e me diz quantas estrelas ele tem e se foi
            atualizado recentemente.&rdquo;
          </i>{" "}
          — e veja a regra das 3 perguntas funcionando na prática. Marque aqui quando testar. ⚓
        </TenteVoce>
      </Desafio>
    </ModuleShell>
  );
}

"use client";

import { C, PAI } from "@/lib/config";
import { ModuleShell, Desafio } from "./Shell";
import { NuggetCard, Passos, TenteVoce, CopyButton, PromptBox } from "@/lib/ui";
import { dispararConfete } from "@/lib/fun";

// Uma linha da tabela de connectors: nome, emoji e o que ele faz na prática.
function LinhaConnector({
  emoji,
  nome,
  exemplo,
}: {
  emoji: string;
  nome: string;
  exemplo: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        padding: "14px 0",
        borderBottom: `1px solid ${C.paper2}`,
      }}
    >
      <span style={{ fontSize: 24, flexShrink: 0, lineHeight: 1.2 }} aria-hidden>
        {emoji}
      </span>
      <div>
        <div style={{ fontWeight: 700, color: C.ink, fontSize: 16, marginBottom: 2 }}>{nome}</div>
        <div style={{ fontSize: 15, lineHeight: 1.55, color: C.text }}>{exemplo}</div>
      </div>
    </div>
  );
}

// MÓDULO 5 — Plugar ferramentas (MCPs & Connectors).
export function ModMcps() {
  const promptImagem = `Você é meu designer de marketing. Crie uma imagem promocional para o meu negócio de ${PAI.negocioCurto}, a ${PAI.negocio}.

Cena: um catamarã elegante navegando em águas azul-turquesa, ao pôr do sol, com pessoas felizes relaxando a bordo. Clima de luxo tranquilo, férias dos sonhos.
Formato: quadrado, pronto pra postar no Instagram.
Estilo: foto realista, luz dourada, cores vivas.
Deixe um espaço limpo no topo pra eu escrever o nome do passeio depois.`;

  return (
    <ModuleShell
      id="mcps"
      numero={5}
      emoji="🔌"
      titulo="Plugar ferramentas (MCPs & Connectors)"
      subtitulo="Pare de só conversar com a IA. Ligue ela nas suas ferramentas de verdade e deixe ela trabalhar."
      totalDesafios={2}
    >
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 14 }}>
        Até agora, {PAI.comoChamar}, a IA só sabe <b>conversar</b>. Ela é tipo um funcionário
        genial, mas que está trancado num quarto sem janela — sabe de tudo, mas não consegue tocar em
        nada seu. Não vê seu email, não olha sua agenda, não mexe nos seus documentos.
      </p>
      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 18 }}>
        Um <b>connector</b> (ou <b>MCP</b>) é o <b>cabo</b> que liga a IA nas suas ferramentas de
        verdade. Plugou o cabo, e de repente ela <i>faz</i> coisas: lê seu email, olha sua agenda,
        cria uma foto pro Instagram. É como dar uma chave do barco pro seu imediato — agora ele
        não só sabe navegar, ele <b>navega</b>.
      </p>

      {/* A grande analogia: USB-C */}
      <div
        style={{
          background: C.brass,
          color: C.onDark,
          borderRadius: 14,
          padding: "16px 20px",
          marginBottom: 18,
          fontSize: 15.5,
          lineHeight: 1.6,
        }}
      >
        🔌 <b>A sacada:</b> a galera chama o MCP de &ldquo;<b>USB-C pra IA</b>&rdquo;. Sabe aquele
        plugue único que serve pra carregar o celular, ligar no monitor, no fone, em tudo? Pois é —
        um plugue universal. O MCP é isso pra inteligência artificial: um encaixe só que serve pra
        ligar ela em qualquer ferramenta sua.
      </div>

      <p style={{ fontSize: 17, lineHeight: 1.7, color: C.text, marginBottom: 8 }}>
        <b>&ldquo;Mas é MCP ou connector?&rdquo;</b> São a mesma coisa, capitão — não esquenta. O
        MCP é o padrão por baixo; o connector é só a versão <b>de 1 clique</b> dele, sem complicação.
        E o melhor: o conceito é <b>o mesmo em qualquer IA</b>. O mesmo plugue serve no Claude e no
        ChatGPT. Aprendeu uma vez, vale pra todas.
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: C.textMuted, fontStyle: "italic", marginBottom: 22 }}>
        (Piada de marinheiro: o nome &ldquo;MCP&rdquo; assusta, mas é só um cabo. Você já lidou com
        cabo de âncora a vida toda — esse aqui não enferruja. 😄)
      </p>

      {/* Tabela de connectors úteis */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 26,
          fontWeight: 600,
          color: C.ink,
          margin: "8px 0 6px",
        }}
      >
        Os cabos que valem a pena ligar
      </h3>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: C.textMuted, marginBottom: 14 }}>
        Tem centenas. Esses aqui são os que mais ajudam alguém com um negócio como o seu:
      </p>
      <div
        style={{
          background: C.paper,
          border: `1px solid ${C.paper2}`,
          borderRadius: 16,
          padding: "8px 22px 14px",
          marginBottom: 24,
        }}
      >
        <LinhaConnector
          emoji="📧"
          nome="Gmail"
          exemplo='Lê e rascunha emails: "acha o email do fornecedor de combustível" ou "rascunha uma resposta pro cliente". Importante: ela cria o rascunho, não envia sozinha — você lê e aperta enviar.'
        />
        <LinhaConnector
          emoji="📅"
          nome="Google Calendar"
          exemplo='Sua agenda: "que passeios eu tenho essa semana?" ou "marca a manutenção do barco pra quinta de manhã".'
        />
        <LinhaConnector
          emoji="📁"
          nome="Google Drive"
          exemplo="Puxa seus documentos direto, sem você ter que abrir, copiar e colar. A IA lê o contrato ou a planilha de lá mesmo."
        />
        <LinhaConnector
          emoji="🖼️"
          nome="Geração de imagem (ex: Nano Banana)"
          exemplo="Cria fotos e banners pro Instagram do charter — sem fotógrafo, sem photoshop. Você descreve, ela desenha."
        />
        <LinhaConnector
          emoji="🎬"
          nome="Geração de vídeo (ex: Higgsfield / Motion)"
          exemplo="Faz um vídeo do barco navegando ao pôr do sol pra divulgação. Anúncio bonito sem equipe de filmagem."
        />
        <LinhaConnector
          emoji="🗄️"
          nome="Supabase / bancos de dados"
          exemplo="Guarda e organiza dados do negócio (clientes, reservas). Isso é mais avançado — deixa pra quando o sistema crescer."
        />
      </div>

      {/* Caixa de SEGURANÇA — a regra de ouro */}
      <div
        style={{
          background: "#FBEFE3",
          border: `2px solid ${C.brass}`,
          borderRadius: 16,
          padding: "20px 22px",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 12,
            letterSpacing: "0.16em",
            color: C.brass,
            fontWeight: 600,
            marginBottom: 10,
          }}
        >
          ⚓ A REGRA DE SEGURANÇA QUE SALVA O DIA
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: C.text, margin: "0 0 10px" }}>
          Comece <b>SEMPRE em &ldquo;somente leitura&rdquo;</b> (read-only). Isso quer dizer: a IA
          pode <i>olhar</i> seu email e sua agenda, mas <b>não pode</b> mexer, enviar ou apagar nada.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: C.text, margin: "0 0 10px" }}>
          Deixe ela trabalhar só lendo por uns dias. Vá vendo como ela se comporta. Quando você
          confiar, aí sim você libera ela pra escrever e enviar.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.65, color: C.text, margin: 0 }}>
          <b>A maioria dos perrengues acontece no dia 1</b>, quando alguém dá acesso total de cara e
          manda &ldquo;organiza tudo aí&rdquo;. É como deixar um marinheiro novo pilotar o barco no
          primeiro dia. Vai com calma — primeiro ele observa, depois assume o leme.
        </p>
      </div>

      {/* Connectors customizados — uma frase */}
      <p style={{ fontSize: 16, lineHeight: 1.65, color: C.text, marginBottom: 24 }}>
        🛠️ <b>Pra mais pra frente:</b> dá até pra embrulhar uma ferramenta interna sua (um sistema
        próprio de reservas, por exemplo) como um connector. Mas isso é avançado — coisa pra quando o
        negócio crescer e você quiser tudo conversando junto.
      </p>

      {/* Nuggets */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 8 }}>
        <NuggetCard numero={1} titulo="Comece sempre em somente-leitura">
          Deixe a IA <i>olhar</i> antes de deixar ela <i>mexer</i>. Observe uns dias, depois libere o
          resto. Quase todo acidente vem de dar acesso total no primeiro dia.
        </NuggetCard>
        <NuggetCard numero={2} titulo="O mesmo plugue serve em qualquer IA">
          Connector e MCP são a mesma ideia, e ela é <b>intercambiável</b>: o conceito que você
          aprende no Claude vale igualzinho no ChatGPT. Um plugue, todas as tomadas.
        </NuggetCard>
      </div>

      {/* DESAFIO 1 — só olhar a lista */}
      <Desafio id="mcps:conectar">
        <b>Espie a caixa de cabos 🔌</b>
        <br />
        Sem ligar nada ainda — só olhar. No claude.ai ou no ChatGPT:
        <Passos
          steps={[
            <>Abra as <b>Configurações</b> (o ⚙️) e procure por <b>Connectors</b> (no ChatGPT pode estar como <b>Apps</b>).</>,
            <>Dê uma olhada na <b>lista</b> de tudo que dá pra plugar — Gmail, Calendar, Drive e por aí vai.</>,
            <>Só reconheça quais você usaria. <b>Não clique em conectar com acesso de escrita</b> ainda — hoje é só reconhecer o terreno, capitão.</>,
          ]}
        />
        Quando tiver visto a lista, marque aqui embaixo.
      </Desafio>

      {/* DESAFIO 2 — gerar imagem promo */}
      <Desafio id="mcps:imagem" onComplete={dispararConfete}>
        <b>Crie sua primeira peça de marketing 🖼️</b>
        <br />
        Hora de ver a mágica de verdade. Vamos fazer a IA <b>criar uma imagem</b> de divulgação pro
        seu charter.
        <TenteVoce>
          Abra uma IA que gere imagens (o Nano Banana, ou o próprio ChatGPT/Gemini com geração de
          imagem ligada). Cole o prompt abaixo, aperte enviar, e espere a foto aparecer. Não gostou?
          Peça &ldquo;deixa mais clarinha&rdquo; ou &ldquo;troca o pôr do sol por manhã&rdquo; — vá
          ajustando até ficar do seu gosto.
        </TenteVoce>
        <PromptBox copyText={promptImagem}>{promptImagem}</PromptBox>
        <div style={{ marginTop: 12 }}>
          <CopyButton text={promptImagem} label="Copiar o prompt da imagem" />
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: C.textMuted, margin: "14px 0 0" }}>
          Gerou uma imagem que dava pra postar? Então você acabou de virar o departamento de
          marketing da {PAI.negocio}. Marque o desafio e solte o confete. 🎉
        </p>
      </Desafio>
    </ModuleShell>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { C } from "@/lib/config";
import { useProgress } from "@/lib/progress";
import { metaBySlug, nextSlug, prevSlug } from "@/lib/moduleMeta";
import { MOD_COMPONENTS } from "@/lib/moduleComponents";
import { IMG_IDS } from "@/lib/images";

const px = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export function ModulePageClient({ slug }: { slug: string }) {
  const meta = metaBySlug(slug);
  const Conteudo = MOD_COMPONENTS[slug];
  const { isModuleUnlocked, ready } = useProgress();

  if (!meta || !Conteudo) return null;

  const unlocked =
    !ready || meta.moduleId === "conselho" || isModuleUnlocked(meta.moduleId as never);
  const prox = nextSlug(slug);
  const ant = prevSlug(slug);

  return (
    <main style={{ background: C.paper, minHeight: "100vh" }}>
      {/* ── Banda visual com imagem ── */}
      <div
        style={{
          position: "relative",
          height: "clamp(220px, 38vh, 360px)",
          backgroundImage: `linear-gradient(180deg, rgba(36,36,36,0.25) 0%, rgba(36,36,36,0.35) 55%, ${C.paper} 100%), url(${px(
            meta.imgId
          )})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", paddingBottom: 26 }}
        >
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: "50%",
              background: C.paper,
              border: `3px solid ${C.brass}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              margin: "0 auto 14px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
            }}
          >
            {meta.emoji}
          </div>
          <div
            className="tracking-luxe"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 12,
              letterSpacing: "0.24em",
              color: "#fff",
              textShadow: "0 1px 8px rgba(0,0,0,0.6)",
            }}
          >
            {meta.isBonus ? "NUGGET DE MESTRE" : `MÓDULO ${meta.num}`}
          </div>
        </motion.div>
      </div>

      {/* ── Conteúdo do módulo (inclui gating de travamento) ── */}
      <Conteudo />

      {/* ── Aviso se travado ── */}
      {!unlocked && (
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 22px 20px" }}>
          <Link
            href="/"
            style={{
              display: "inline-block",
              color: C.seaDeep,
              fontWeight: 600,
              textDecoration: "none",
              fontSize: 15,
            }}
          >
            ← Voltar ao mapa pra desbloquear
          </Link>
        </div>
      )}

      {/* ── Navegação anterior / próximo ── */}
      <nav
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "28px 22px 70px",
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {ant ? (
          <Link href={`/modulo/${ant}`} style={navBtn(false)}>
            ← {metaBySlug(ant)?.emoji} Anterior
          </Link>
        ) : (
          <Link href="/" style={navBtn(false)}>
            ← 🗺️ Mapa
          </Link>
        )}
        {prox ? (
          <Link href={`/modulo/${prox}`} style={navBtn(true)}>
            Próximo: {metaBySlug(prox)?.titulo} →
          </Link>
        ) : (
          <Link href="/" style={navBtn(true)}>
            🎉 Voltar ao mapa
          </Link>
        )}
      </nav>
    </main>
  );
}

function navBtn(primary: boolean): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: primary ? C.brass : C.paper2,
    color: primary ? "#fff" : C.ink,
    padding: "13px 22px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: primary ? "0 8px 20px rgba(176,137,79,0.3)" : "none",
  };
}

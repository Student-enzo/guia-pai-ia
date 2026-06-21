import { notFound } from "next/navigation";
import { SLUGS, metaBySlug } from "@/lib/moduleMeta";
import { ModulePageClient } from "@/components/ModulePageClient";

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = metaBySlug(slug);
  return {
    title: m ? `${m.emoji} ${m.titulo} — Guia de IA` : "Guia de IA",
  };
}

export default async function ModuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!metaBySlug(slug)) notFound();
  return <ModulePageClient slug={slug} />;
}

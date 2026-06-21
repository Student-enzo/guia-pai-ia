import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Do Zero ao Enzo — Guia de IA do Pai 🎁",
  description: "O jeito que o Enzo usa IA todo dia — traduzido em módulos, exercícios e golden nuggets. Feliz Dia dos Pais!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}

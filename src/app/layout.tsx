import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Guia de IA do Capitão Enisson 🎁",
  description:
    "Um curso prático e divertido pra aprender Inteligência Artificial do zero — módulos, desafios e golden nuggets. Feliz Dia dos Pais!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth">
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

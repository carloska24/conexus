import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conexus | Consultoria Técnica em Produtos Eletrônicos",
  description:
    "Engenharia aplicada onde decisões técnicas encontram viabilidade industrial. Consultoria técnica integradora em produtos eletrônicos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

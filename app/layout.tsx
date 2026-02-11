import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maria Elena Munteanu - Asistent Personal AI",
  description: "Mâna ta dreaptă digitală - automatizez task-uri, gestionez comunicări și eficientizez workflow-uri pentru Gabriel Ursan și afacerile sale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

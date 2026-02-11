import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maria Elena Munteanu - AI Personal Assistant",
  description: "Your digital right hand - automating tasks, managing communications, and streamlining workflows for Gabriel Ursan and his businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

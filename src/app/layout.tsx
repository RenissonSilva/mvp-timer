import type { Metadata } from "next";
import { Inter, Righteous } from "next/font/google";
import "./globals.css";

const righteous = Righteous({ subsets: ['latin'], weight: ['400'], variable: "--font-righteous" });


export const metadata: Metadata = {
  title: "Ragnarok MVP Timer",
  description: "Marque o horário da morte dos MVPs para facilitar a caçada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center px-32 pb-4">
      <body className={`${righteous.variable}`}>{children}</body>
    </html>
  );
}

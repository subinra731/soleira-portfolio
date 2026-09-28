import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import { siteUrl } from "@/data/seo";

const cormorant = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "SOLEIRA | Artiste contemporaine", template: "%s | SOLEIRA" },
  description: "Official portfolio of SOLEIRA, a Korean contemporary artist based in France.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const language = (await headers()).get("x-soleira-language") ?? "fr";
  return (
    <html lang={language}>
      <body className={`${cormorant.variable} ${inter.variable}`}>
  <Header />
  {children}
  <Analytics />
</body>
    </html>
  );
}

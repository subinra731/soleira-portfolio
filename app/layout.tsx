import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
  title: "SOLEIRA — Contemporary Artist",
  description: "Official portfolio of SOLEIRA, a Korean contemporary artist based in France.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${inter.variable}`}>
  <Header />
  {children}
</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "WalletWhisperer - AI-Powered Blockchain Trading Bot",
  description: "Personal AI trading automation project using on-chain intelligence to analyze wallets, mirror top traders, and optimize portfolio performance.",
  keywords: ["blockchain", "trading bot", "AI", "crypto", "automation", "DeFi"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

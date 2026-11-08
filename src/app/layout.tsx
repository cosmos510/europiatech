import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EuropiaTech — European AI, Deep Tech & Sovereign Infrastructure",
  description: "Independent tech media covering European AI 2026, sovereign infrastructure, AI Act compliance and deep tech innovation.",
  keywords: "European AI 2026, sovereign infrastructure AI, AI Act compliance, deep tech Europe",
  openGraph: {
    title: "EuropiaTech — European AI & Deep Tech Analysis",
    description: "Independent technical analysis of European AI, sovereign infrastructure and deep tech innovation.",
    url: "https://europiatech.eu",
    siteName: "EuropiaTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EuropiaTech — European AI & Deep Tech Analysis",
    description: "Independent technical analysis of European AI, sovereign infrastructure and deep tech innovation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Font — Instrument Sans for brutal typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        {/* Noise texture overlay — Maximalisme */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Grid lines — Brutalisme visible */}
        <div className="grid-lines" aria-hidden="true" />
        
        {children}
      </body>
    </html>
  );
}

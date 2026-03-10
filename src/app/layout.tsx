import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Digital Company Group - Solusi IT Profesional",
  description: "Solusi Jasa IT & Pengadaan Perangkat Teknologi untuk Mendukung Operasional Bisnis Anda",
  keywords: ["IT Solutions", "CCTV", "Jaringan", "Server", "IT Support", "Bandung"],
  authors: [{ name: "Digital Company Group" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased bg-white text-gray-900`}
        style={{ fontFamily: 'var(--font-plus-jakarta), var(--font-inter), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}

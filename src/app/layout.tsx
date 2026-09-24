import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Digital Company Group — Instalasi CCTV & IT Support Bandung",
  description:
    "Jasa instalasi CCTV, jaringan komputer, server, dan pengadaan perangkat IT untuk bisnis di Bandung dan sekitarnya.",
  keywords: [
    "CCTV Bandung",
    "Instalasi Jaringan",
    "IT Support",
    "Server",
    "Pengadaan IT",
  ],
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
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

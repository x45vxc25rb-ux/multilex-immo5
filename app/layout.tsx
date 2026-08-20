import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { companyInfo } from "@/data/companyInfo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.multilex-immobilien.de"),
  title: {
    default: "Multilex Immobilien | Immobilienkompetenz mit rechtlichem Verständnis",
    template: "%s | Multilex Immobilien",
  },
  description:
    "Multilex Immobilien – professionelle Immobilienvermittlung, persönliche Beratung und kompetente Begleitung bei Immobilienentscheidungen.",
  keywords: [
    "Immobilien",
    "Immobilienmakler",
    "Immobilienvermittlung",
    "Immobilienbewertung",
    "Rechtliche Kompetenz",
  ],
  openGraph: {
    title: "Multilex Immobilien | Immobilienkompetenz mit rechtlichem Verständnis",
    description:
      "Professionelle Immobilienvermittlung, persönliche Beratung und kompetente Begleitung bei Immobilienentscheidungen.",
    url: "https://www.multilex-immobilien.de",
    siteName: companyInfo.companyName,
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

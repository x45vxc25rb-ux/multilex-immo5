import type { Metadata } from "next";
import "./globals.css";
import { companyInfo } from "@/data/companyInfo";

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
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}

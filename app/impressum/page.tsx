import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { companyInfo } from "@/data/companyInfo";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Multilex Immobilien.",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-28 md:pb-40 bg-white">
        <div className="container-lx max-w-3xl">
          <span className="text-xs uppercase tracking-[0.28em] text-mute">
            Rechtliches
          </span>
          <h1 className="mt-4 text-display-3 font-semibold text-black">
            Impressum
          </h1>

          <div className="mt-14 space-y-10 text-base leading-relaxed text-black/80">
            <section>
              <h2 className="text-sm uppercase tracking-[0.14em] text-black mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                {companyInfo.legalName}
                <br />
                {companyInfo.address.street}
                <br />
                {companyInfo.address.zip} {companyInfo.address.city}
                <br />
                {companyInfo.address.country}
              </p>
              <p className="mt-4 text-mute text-sm">
                [Handelsregister, Registergericht und Registernummer einfügen]
              </p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.14em] text-black mb-3">
                Kontakt
              </h2>
              <p>
                Telefon: {companyInfo.phoneDisplay}
                <br />
                E-Mail: {companyInfo.email}
              </p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.14em] text-black mb-3">
                Vertretungsberechtigt
              </h2>
              <p className="text-mute text-sm">
                [Name der/des Geschäftsführer:in einfügen]
              </p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.14em] text-black mb-3">
                Umsatzsteuer-ID
              </h2>
              <p className="text-mute text-sm">
                [Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG einfügen]
              </p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.14em] text-black mb-3">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="text-mute text-sm">
                [Name und Anschrift einfügen]
              </p>
            </section>

            <section>
              <h2 className="text-sm uppercase tracking-[0.14em] text-black mb-3">
                Streitschlichtung
              </h2>
              <p className="text-mute text-sm">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder
                verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>

          <Link
            href="/"
            className="mt-16 inline-flex items-center gap-3 text-sm uppercase tracking-[0.14em] border-b border-black pb-2 hover:gap-5 transition-all duration-300 ease-premium"
          >
            <span aria-hidden>←</span> Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

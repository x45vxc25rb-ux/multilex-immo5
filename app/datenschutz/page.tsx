import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { companyInfo } from "@/data/companyInfo";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Multilex Immobilien.",
};

const SECTIONS = [
  {
    title: "1. Verantwortlicher",
    text: `Verantwortlich für die Datenverarbeitung auf dieser Website ist ${companyInfo.legalName}, ${companyInfo.address.street}, ${companyInfo.address.zip} ${companyInfo.address.city}. [Weitere Angaben ergänzen]`,
  },
  {
    title: "2. Erhebung und Verarbeitung personenbezogener Daten",
    text: "Personenbezogene Daten werden erhoben, wenn Sie uns diese im Rahmen einer Kontaktaufnahme, etwa über das Kontaktformular, freiwillig mitteilen. [Detaillierte Angaben zu Zwecken, Rechtsgrundlagen und Speicherdauer ergänzen]",
  },
  {
    title: "3. Kontaktformular",
    text: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. [Angaben zu Rechtsgrundlage und Löschfristen ergänzen]",
  },
  {
    title: "4. Ihre Rechte",
    text: "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer gespeicherten personenbezogenen Daten sowie ein Widerspruchsrecht gegen die Verarbeitung und ein Recht auf Datenübertragbarkeit. [Kontaktmöglichkeit für Betroffenenanfragen ergänzen]",
  },
  {
    title: "5. Cookies und Analyse-Tools",
    text: "[Angaben zu eingesetzten Cookies, Analyse- und Trackingtools sowie deren Rechtsgrundlage ergänzen, sofern relevant]",
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40 pb-28 md:pb-40 bg-white">
        <div className="container-lx max-w-3xl">
          <span className="text-xs uppercase tracking-[0.28em] text-mute">
            Rechtliches
          </span>
          <h1 className="mt-4 text-display-3 font-semibold text-black">
            Datenschutzerklärung
          </h1>

          <div className="mt-14 space-y-10 text-base leading-relaxed text-black/80">
            {SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="text-sm uppercase tracking-[0.14em] text-black mb-3">
                  {section.title}
                </h2>
                <p className="text-mute text-sm md:text-base">{section.text}</p>
              </section>
            ))}
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

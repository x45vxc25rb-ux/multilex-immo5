"use client";

import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import PropertySlider from "./PropertySlider";
import RevealOnScroll from "./RevealOnScroll";

export default function Properties() {
  const hasProperties = properties.length > 0;

  return (
    <section id="immobilien" className="bg-white py-28 md:py-40">
      <div className="container-lx">
        <RevealOnScroll className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-mute">
              Immobilien
            </span>
            <h2 className="mt-4 text-display-2 font-semibold text-black">
              Ausgewählte
              <br />
              Immobilien
            </h2>
          </div>
          {hasProperties && (
            <p className="max-w-sm text-sm text-mute">
              Eine Auswahl aktueller Immobilienangebote von Multilex Immobilien.
            </p>
          )}
        </RevealOnScroll>
      </div>

      {hasProperties ? (
        <>
          <RevealOnScroll className="mb-20 md:mb-28" delay={0.1}>
            <PropertySlider properties={properties} />
          </RevealOnScroll>

          <div className="container-lx">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {properties.map((property, i) => (
                <RevealOnScroll key={property.id} delay={i * 0.05}>
                  <PropertyCard property={property} index={i} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="container-lx">
          <RevealOnScroll delay={0.15}>
            <div className="border-t border-b border-black/10 py-24 md:py-32 flex flex-col items-center text-center">
              <span aria-hidden className="block w-10 h-px bg-black/30 mb-8" />
              <p className="text-xl md:text-2xl font-light text-black max-w-md">
                Aktuelle Immobilienangebote werden hier veröffentlicht.
              </p>
              <p className="mt-4 text-sm text-mute max-w-sm">
                Neue Immobilien folgen in Kürze. Nehmen Sie gerne direkt Kontakt
                mit uns auf, um mehr zu erfahren.
              </p>
              <a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.14em] border-b border-black pb-2 hover:gap-5 transition-all duration-300 ease-premium"
              >
                Kontakt aufnehmen
                <span aria-hidden>→</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      )}
    </section>
  );
}

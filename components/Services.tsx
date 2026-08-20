import RevealOnScroll from "./RevealOnScroll";

const SERVICES = [
  {
    number: "01",
    title: "Immobilienverkauf",
    text: "Professionelle Vorbereitung, Positionierung und Vermarktung von Immobilien.",
  },
  {
    number: "02",
    title: "Immobilienvermittlung",
    text: "Strukturierte Vermittlung zwischen Eigentümern und qualifizierten Interessenten.",
  },
  {
    number: "03",
    title: "Immobilienbewertung",
    text: "Fundierte Einschätzung von Immobilien unter Berücksichtigung relevanter Marktbedingungen.",
  },
  {
    number: "04",
    title: "Transaktionsbegleitung",
    text: "Strukturierte Begleitung während des gesamten Immobilienprozesses.",
  },
  {
    number: "05",
    title: "Persönliche Beratung",
    text: "Individuelle Betreuung und direkte Kommunikation während jeder Phase.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-white py-28 md:py-40 border-t border-black/10">
      <div className="container-lx">
        <RevealOnScroll className="mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.28em] text-mute">
            Leistungen
          </span>
          <h2 className="mt-4 text-display-2 font-semibold text-black">
            Unsere Leistungen
          </h2>
        </RevealOnScroll>

        <div className="border-t border-black/10">
          {SERVICES.map((service, i) => (
            <RevealOnScroll key={service.number} delay={i * 0.04}>
              <div className="group border-b border-black/10 py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center transition-transform duration-500 ease-premium md:hover:translate-x-3">
                <span className="md:col-span-1 text-sm text-haze">
                  {service.number}
                </span>
                <h3 className="md:col-span-4 text-2xl md:text-3xl font-medium text-black group-hover:text-black">
                  {service.title}
                </h3>
                <p className="md:col-span-6 md:col-start-6 text-sm md:text-base text-mute">
                  {service.text}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

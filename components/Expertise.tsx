import RevealOnScroll from "./RevealOnScroll";

const PILLARS = [
  {
    number: "01",
    title: "Immobilien",
    text: "Marktkenntnis, strukturierte Vermarktung und persönliche Begleitung bei Verkauf und Vermittlung von Immobilien.",
  },
  {
    number: "02",
    title: "Rechtliche Kompetenz",
    text: "Ein fundiertes Verständnis rechtlicher Zusammenhänge schafft zusätzliche Klarheit bei komplexen Immobilienentscheidungen.",
  },
  {
    number: "03",
    title: "Persönliche Begleitung",
    text: "Direkte Kommunikation, transparente Prozesse und individuelle Betreuung stehen im Mittelpunkt unserer Arbeit.",
  },
];

export default function Expertise() {
  return (
    <section id="kompetenz" className="bg-white py-28 md:py-40 border-t border-black/10">
      <div className="container-lx">
        <RevealOnScroll className="max-w-4xl">
          <span className="text-xs uppercase tracking-[0.28em] text-mute">
            Kompetenz
          </span>
          <h2 className="mt-4 text-display-2 font-semibold text-black leading-[1.02]">
            Immobilienkompetenz trifft
            <br />
            rechtliches Verständnis.
          </h2>
        </RevealOnScroll>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <RevealOnScroll key={pillar.number} delay={i * 0.1}>
              <div
                className={[
                  "py-10 md:py-4 px-0 md:px-10",
                  i !== 0 ? "border-t md:border-t-0 md:border-l border-black/10" : "",
                ].join(" ")}
              >
                <span className="block text-5xl md:text-6xl font-light text-black/15 leading-none">
                  {pillar.number}
                </span>
                <h3 className="mt-6 text-xl md:text-2xl font-medium text-black">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-mute">
                  {pillar.text}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

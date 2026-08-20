import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="ueber-uns" className="bg-white py-28 md:py-40 border-t border-black/10">
      <div className="container-lx">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <RevealOnScroll className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.28em] text-mute">
              Über uns
            </span>
            <h2 className="mt-4 text-display-2 font-semibold text-black">
              Über
              <br />
              Multilex
              <br />
              Immobilien
            </h2>
          </RevealOnScroll>

          <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-10">
            <RevealOnScroll delay={0.05}>
              <p className="text-xl md:text-2xl font-light leading-snug text-black">
                „Immobilienentscheidungen erfordern mehr als Marktkenntnis. Sie
                verlangen Erfahrung, Struktur und ein Verständnis für die
                rechtlichen Rahmenbedingungen.“
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.12}>
              <div className="w-10 h-px bg-black/20" />
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <p className="text-base md:text-lg leading-relaxed text-black/80">
                Multilex Immobilien verbindet Immobilienkompetenz mit
                rechtlicher Expertise. Wir begleiten Eigentümer, Käufer und
                Investoren persönlich und professionell durch komplexe
                Immobilienprozesse – von der ersten Einschätzung bis zum
                erfolgreichen Abschluss.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-base md:text-lg leading-relaxed text-mute">
                Unser Anspruch ist eine klare, transparente und verlässliche
                Beratung, bei der wirtschaftliche und rechtliche Aspekte
                gleichermaßen berücksichtigt werden.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

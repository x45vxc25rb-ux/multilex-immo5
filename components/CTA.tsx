import RevealOnScroll from "./RevealOnScroll";

export default function CTA() {
  return (
    <section className="bg-white py-28 md:py-36 border-t border-black/10">
      <div className="container-lx">
        <RevealOnScroll className="max-w-3xl">
          <h2 className="text-display-3 font-semibold text-black">
            Sie möchten eine Immobilie verkaufen?
          </h2>
          <p className="mt-5 text-base md:text-lg text-mute max-w-xl">
            Sprechen wir über Ihre Immobilie. Persönlich, professionell und
            unverbindlich.
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
        </RevealOnScroll>
      </div>
    </section>
  );
}

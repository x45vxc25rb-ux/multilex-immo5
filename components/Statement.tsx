import RevealOnScroll from "./RevealOnScroll";

export default function Statement() {
  return (
    <section className="bg-black text-white py-32 md:py-48">
      <div className="container-lx">
        <RevealOnScroll y={36}>
          <p className="text-display-2 font-semibold leading-[1.02]">
            Immobilien sind mehr
            <br />
            als Quadratmeter.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15} y={20}>
          <p className="mt-8 md:mt-10 text-lg md:text-2xl font-light text-white/70 max-w-xl">
            Sie sind Werte, Entscheidungen und Perspektiven.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-white"
    >
      {/* Архитектурная фоновая композиция — линии вместо конкретного фото объекта */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ transformOrigin: "top" }}
          className="absolute left-[10%] top-0 h-full w-px bg-black/10 hidden md:block"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          style={{ transformOrigin: "bottom" }}
          className="absolute right-[10%] top-0 h-full w-px bg-black/10 hidden md:block"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="absolute bottom-[18%] left-0 w-full h-px bg-black/10"
        />
        <div className="absolute right-[6%] top-[22%] w-[38vw] max-w-[560px] aspect-[4/5] border border-black/10 hidden md:block" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-lx relative flex-1 flex flex-col justify-center pt-28 md:pt-32"
      >
        <motion.span
          variants={item}
          className="text-xs md:text-sm uppercase tracking-[0.28em] text-mute mb-6 md:mb-8"
        >
          Immobilien. Recht. Vertrauen.
        </motion.span>

        <h1 className="font-semibold text-display-1 uppercase text-black">
          <motion.span variants={item} className="block overflow-hidden">
            Multilex
          </motion.span>
          <motion.span variants={item} className="block overflow-hidden">
            Immobilien
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="mt-8 md:mt-10 max-w-xl text-xl md:text-2xl text-black/90 font-light"
        >
          Immobilien. Klar gedacht. Professionell begleitet.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-3 max-w-md text-sm md:text-base text-mute"
        >
          Immobilienkompetenz mit rechtlichem Verständnis.
        </motion.p>

        <motion.div variants={item} className="mt-10 md:mt-14">
          <a
            href="#ueber-uns"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#ueber-uns")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.14em] border-b border-black pb-2 hover:gap-5 transition-all duration-300 ease-premium"
          >
            Mehr erfahren
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="container-lx relative pb-10 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.2em] text-haze"
      >
        <span>Immobilienvermittlung &amp; Beratung</span>
        <span className="hidden sm:inline">Scroll</span>
      </motion.div>
    </section>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Property } from "@/data/properties";

function formatPrice(price?: number) {
  if (!price) return null;
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

interface PropertySliderProps {
  properties: Property[];
}

/**
 * Fullscreen / horizontal cinematic slider для объектов недвижимости.
 *
 * ВАЖНО: этот компонент ничего не рендерит, если properties.length === 0.
 * Это гарантирует, что до появления реальных объектов на сайте
 * не будут показаны пустые/фейковые слайды.
 */
export default function PropertySlider({ properties }: PropertySliderProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const count = properties.length;

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setDirection(next > index ? 1 : -1);
      setIndex(((next % count) + count) % count);
    },
    [count, index]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (count === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, next, prev]);

  if (count === 0) {
    return null;
  }

  const current = properties[index];
  const cover = current.images[0];
  const price = formatPrice(current.price);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? prev() : next();
    }
    touchStartX.current = null;
  };

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 1.02 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 1.02 }),
  };

  return (
    <div
      className="relative w-full h-[80vh] md:h-[90vh] bg-black overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Immobilien-Slider"
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {cover ? (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/40">
              Bild folgt
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 container-lx pb-10 md:pb-14 text-white">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/60">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-display-3 font-medium">{current.title}</h3>
            <p className="mt-2 text-sm md:text-base text-white/70">{current.location}</p>
            {price && (
              <p className="mt-1 text-sm md:text-base text-white/90">{price}</p>
            )}
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-[0.12em] border-b border-white/80 pb-1 hover:gap-4 transition-all duration-300 ease-premium"
            >
              Details ansehen <span aria-hidden>→</span>
            </a>
          </div>

          {/* Navigation */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              aria-label="Vorheriges Objekt"
              onClick={prev}
              className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
            >
              ←
            </button>
            <button
              aria-label="Nächstes Objekt"
              onClick={next}
              className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
            >
              →
            </button>
          </div>
        </div>

        {/* Progress dashes */}
        <div className="mt-8 flex gap-2">
          {properties.map((p, i) => (
            <button
              key={p.id}
              aria-label={`Zu Objekt ${i + 1} wechseln`}
              onClick={() => goTo(i)}
              className={`h-px flex-1 transition-colors duration-300 ${
                i === index ? "bg-white" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile nav buttons */}
      <div className="sm:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
        <button
          aria-label="Vorheriges Objekt"
          onClick={prev}
          className="w-10 h-10 border border-white/30 text-white flex items-center justify-center bg-black/30"
        >
          ←
        </button>
        <button
          aria-label="Nächstes Objekt"
          onClick={next}
          className="w-10 h-10 border border-white/30 text-white flex items-center justify-center bg-black/30"
        >
          →
        </button>
      </div>
    </div>
  );
}

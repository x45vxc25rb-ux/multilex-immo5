"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PropertyImage } from "@/data/properties";

interface PropertyGalleryProps {
  images: PropertyImage[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;

  const goTo = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

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

  const current = images[index];

  return (
    <div
      className="relative w-full h-[46vh] lg:h-[calc(100vh-6rem)] lg:sticky lg:top-24 bg-black overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Fotos der Immobilie"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-contain"
        />
      </div>

      <button
        onClick={prev}
        aria-label="Vorheriges Foto"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 text-white items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Nächstes Foto"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 text-white items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
      >
        →
      </button>
      <div className="md:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3">
        <button
          onClick={prev}
          aria-label="Vorheriges Foto"
          className="w-10 h-10 border border-white/30 text-white flex items-center justify-center bg-black/30"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Nächstes Foto"
          className="w-10 h-10 border border-white/30 text-white flex items-center justify-center bg-black/30"
        >
          →
        </button>
      </div>

      <div className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.2em] text-white/70">
        {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
      </div>

      <div className="absolute bottom-5 right-5 left-24 md:left-auto md:right-5 md:w-64 flex gap-1.5">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => goTo(i)}
            aria-label={`Zu Foto ${i + 1} wechseln`}
            className={`h-px flex-1 transition-colors duration-300 ${
              i === index ? "bg-white" : "bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

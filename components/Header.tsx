"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Immobilien", href: "#immobilien" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kompetenz", href: "#kompetenz" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium",
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-sm border-b border-black/10"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="container-lx flex items-center justify-between h-20 md:h-24">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#top");
            }}
            className="text-[0.95rem] md:text-base font-semibold tracking-[0.18em] uppercase text-black"
          >
            Multilex <span className="font-normal">Immobilien</span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm uppercase tracking-[0.1em] text-black/80 hover:text-black transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[6px]"
          >
            <span
              className={`block h-px w-6 bg-black transition-transform duration-300 ease-premium ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-black transition-transform duration-300 ease-premium ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-display-3 font-medium tracking-tight text-black py-3 border-b border-black/10"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

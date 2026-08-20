import Link from "next/link";

const NAV_ITEMS = [
  { label: "Immobilien", href: "#immobilien" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kompetenz", href: "#kompetenz" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="container-lx">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16 border-b border-white/15">
          <div>
            <span className="text-sm uppercase tracking-[0.18em]">
              Multilex Immobilien
            </span>
          </div>

          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors w-fit"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-3 md:items-end">
            <Link
              href="/impressum"
              className="text-sm text-white/70 hover:text-white transition-colors w-fit md:text-right"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-white/70 hover:text-white transition-colors w-fit md:text-right"
            >
              Datenschutz
            </Link>
          </nav>
        </div>

        <div className="pt-8 text-xs text-white/40 uppercase tracking-[0.1em]">
          © {new Date().getFullYear()} Multilex Immobilien — Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}

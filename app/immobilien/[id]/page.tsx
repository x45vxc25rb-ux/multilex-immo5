import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGallery from "@/components/PropertyGallery";
import { properties } from "@/data/properties";

interface PropertyPageProps {
  params: { id: string };
}

function formatPrice(price?: number) {
  if (!price) return null;
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export function generateMetadata({ params }: PropertyPageProps): Metadata {
  const property = properties.find((p) => p.id === params.id);
  if (!property) return {};
  return {
    title: property.title,
    description: property.description?.slice(0, 160),
  };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = properties.find((p) => p.id === params.id);
  if (!property) notFound();

  const price = formatPrice(property.price);
  const paragraphs = property.description?.split("\n\n") ?? [];

  return (
    <>
      <Header />
      <main>
        <div className="lg:flex lg:items-start">
          <div className="lg:flex-[1.4]">
            <PropertyGallery images={property.images} />
          </div>

          <div className="lg:flex-1 px-6 md:px-12 py-10 md:py-16 pt-28 lg:pt-32">
            <Link
              href="/#immobilien"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-mute hover:text-black transition-colors duration-300"
            >
              ← Alle Immobilien
            </Link>

            <span className="mt-8 block text-xs uppercase tracking-[0.3em] text-mute">
              {property.propertyType}
            </span>
            <h1 className="mt-4 text-2xl md:text-4xl font-semibold text-black leading-tight">
              {property.title}
            </h1>
            <p className="mt-2 text-base text-mute">{property.location}</p>
            {property.address && (
              <p className="mt-1 text-sm text-haze">{property.address}</p>
            )}
            {price && (
              <p className="mt-4 text-lg font-medium text-black">{price}</p>
            )}

            {property.facts && property.facts.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-black/10 pt-8">
                {property.facts.map((fact) => (
                  <div key={fact.label}>
                    <span className="block text-[0.7rem] uppercase tracking-wider text-haze mb-1">
                      {fact.label}
                    </span>
                    <span className="text-sm text-black">{fact.value}</span>
                  </div>
                ))}
              </div>
            )}

            {paragraphs.length > 0 && (
              <div className="mt-10 border-t border-black/10 pt-8 space-y-4">
                {paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-base leading-relaxed text-black/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            <a
              href="/#kontakt"
              className="group mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-wider border-b border-black pb-2 hover:gap-5 transition-all duration-300 ease-premium"
            >
              Kontakt aufnehmen
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

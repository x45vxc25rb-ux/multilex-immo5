import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/properties";

function formatPrice(price?: number) {
  if (!price) return null;
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

interface PropertyCardProps {
  property: Property;
  index: number;
}

export default function PropertyCard({ property, index }: PropertyCardProps) {
  const cover = property.images[0];
  const price = formatPrice(property.price);

  return (
    <Link href={`/immobilien/${property.id}`} className="group relative block">
      <article>
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-fog">
          {cover ? (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[900ms] ease-premium"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-haze text-sm">
              Bild folgt
            </div>
          )}
          <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.18em] text-white/90 bg-black/70 px-3 py-1">
            {String(index + 1).padStart(2, "0")}
          </div>
          {property.images.length > 1 && (
            <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs uppercase tracking-[0.1em] text-white bg-black/70 px-3 py-2">
                Alle Fotos ansehen →
              </span>
            </div>
          )}
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-medium text-black">
              {property.title}
            </h3>
            <p className="mt-1 text-sm text-mute">{property.location}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.08em] text-haze">
              <span>{property.propertyType}</span>
              {property.rooms && <span>{property.rooms} Zimmer</span>}
              {property.area && <span>{property.area} m²</span>}
            </div>
          </div>
          {price && (
            <div className="text-right shrink-0">
              <span className="text-sm md:text-base font-medium text-black">{price}</span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

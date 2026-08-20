// ============================================================================
// PROPERTIES
// ----------------------------------------------------------------------------
// Здесь хранятся все объекты недвижимости, которые отображаются в разделе
// «Immobilien» и в слайдере «PropertySlider».
//
// Массив `properties` сейчас ПУСТОЙ — это сделано намеренно.
// Реальные объекты будут добавлены позже. Сайт спроектирован так, чтобы
// пустое состояние выглядело завершённо и профессионально, а не «сломанно».
//
// Как добавить объект — см. пример ниже (закомментирован) и файл README.md.
// ============================================================================

export type PropertyType =
  | "Wohnung"
  | "Haus"
  | "Grundstück"
  | "Gewerbeimmobilie"
  | "Sonstiges";

export interface PropertyImage {
  /** Путь к изображению: локальный файл в /public/properties/... либо внешний URL */
  src: string;
  /** Альтернативный текст для доступности и SEO — всегда указывать */
  alt: string;
  /** Ориентация фотографии — влияет на то, как она вписывается в сетку/слайдер */
  orientation?: "landscape" | "portrait";
}

export interface Property {
  /** Уникальный идентификатор, например "villa-am-see" */
  id: string;
  /** Главное фото + дополнительные фотографии для галереи/слайдера */
  images: PropertyImage[];
  title: string;
  location: string;
  address?: string;
  propertyType: PropertyType;
  rooms?: number;
  area?: number; // в м²
  price?: number; // в EUR, без форматирования — форматируется в компоненте
  description?: string;
  /** Показывать ли объект как «Referenz» без активной ссылки на детали */
  isReference?: boolean;
}

// ----------------------------------------------------------------------------
// Реальные объекты недвижимости появятся здесь.
// Массив намеренно пуст — никаких выдуманных данных.
// ----------------------------------------------------------------------------
export const properties: Property[] = [
  {
    id: "kapellenweg-5",
    images: [
      { src: "/properties/kapellenweg-5/hero.jpeg", alt: "Hausansicht mit Eingang", orientation: "landscape" },
      { src: "/properties/kapellenweg-5/p1.jpeg", alt: "Ansicht des Mehrfamilienhauses", orientation: "landscape" },
      { src: "/properties/kapellenweg-5/p2.jpeg", alt: "Blick in den Garten", orientation: "landscape" },
      { src: "/properties/kapellenweg-5/p3.jpeg", alt: "Treppenhaus mit schmiedeeisernem Geländer", orientation: "portrait" },
      { src: "/properties/kapellenweg-5/p4.jpeg", alt: "Hauseingang mit Windfang", orientation: "landscape" },
      { src: "/properties/kapellenweg-5/p5.jpeg", alt: "Luftbildaufnahme des Grundstücks", orientation: "landscape" },
    ],
    title: "Mehrfamilienhaus Kapellenweg 5",
    location: "Bayerisch Gmain, Berchtesgadener Land",
    address: "Kapellenweg 5, 83457 Bayerisch Gmain",
    propertyType: "Haus",
    area: 291,
    description:
      "Freistehendes Mehrfamilienhaus mit acht Wohneinheiten in Bayerisch Gmain (Landkreis Berchtesgadener Land), unmittelbar westlich von Bad Reichenhall am Fuß des Lattengebirges gelegen. Der Standort liegt auf einer Geländeterrasse am nördlichen Alpenrand, mit überwiegend geschlossener Ein- und Zweifamilienhausbebauung sowie kleineren Mehrfamilienhäusern im Umfeld.\n\nBad Reichenhall übernimmt als Mittelzentrum die Versorgungs-, Gesundheits- und Verwaltungsfunktion für die Region; Kindergarten, Grundschule sowie weiterführende Schulen sind in Bayerisch Gmain und Bad Reichenhall vorhanden. Die Grenznähe zu Salzburg erweitert den Arbeitsmarkt und sorgt für stabile Nachfrage nach Wohnraum in der Region.\n\nDie verkehrliche Anbindung erfolgt über die B20/B21 in Richtung Bad Reichenhall–Freilassing–Berchtesgaden sowie über die Anschlussstelle Piding/Bad Reichenhall an die A8. Der Bahnhof Bayerisch Gmain liegt an der Regionalstrecke Freilassing–Bad Reichenhall–Berchtesgaden; ergänzend verkehren RVO-Buslinien nach Bad Reichenhall, Berchtesgaden und Freilassing/Salzburg.\n\nDas Gebäude wurde 1993 in massiver Bauweise mit verputzten Außenwänden errichtet und verfügt über drei Vollgeschosse, ein vollständig unterkellertes Untergeschoss sowie ein ausgebautes Satteldach mit Holztragwerk und Dachziegeleindeckung. Die Gesamtwohnfläche beträgt rund 291 m², verteilt auf acht Einheiten in Souterrain, Erdgeschoss und Obergeschoss.\n\nDie Gestaltung ist geprägt durch hölzerne Balkone auf der Hof- und Straßenseite, Fensterläden aus Holz, eine verglaste Eingangszone mit massivem Natursteinbelag sowie schmiedeeiserne Elemente an Eingangstür, Seitenteilen und Treppengeländer. Die Wärmeversorgung erfolgt über eine zentrale Ölheizung mit separatem Heizraum im Untergeschoss.\n\nBei der Objektbegehung wurden altersübliche bis erhöhte Abnutzungen festgestellt: Am Dachrand und an der Dachuntersicht zeigen sich Witterungsschäden, die hölzernen Balkonbrüstungen weisen Verwitterungsspuren auf, an den Außenbelägen im Eingangsbereich sind Setzungen erkennbar. Ein Aufzug oder ebenerdiger Zugang ist nicht vorhanden. Ein Energieausweis liegt derzeit nicht vor.",
  },
];

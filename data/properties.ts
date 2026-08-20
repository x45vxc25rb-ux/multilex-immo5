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
  // ПРИМЕР СТРУКТУРЫ ОБЪЕКТА (раскомментируйте и заполните реальными данными,
  // когда появится первый объект недвижимости):
  //
  // {
  //   id: "beispiel-immobilie",
  //   images: [
  //     { src: "/properties/beispiel/1.jpg", alt: "Wohnzimmer mit Panoramafenster", orientation: "landscape" },
  //     { src: "/properties/beispiel/2.jpg", alt: "Ansicht der Fassade", orientation: "portrait" },
  //   ],
  //   title: "Titel der Immobilie",
  //   location: "Stadt, Stadtteil",
  //   address: "Straße 1, 00000 Stadt",
  //   propertyType: "Wohnung",
  //   rooms: 3,
  //   area: 95,
  //   price: 450000,
  //   description: "Kurze, sachliche Beschreibung der Immobilie.",
  // },
];

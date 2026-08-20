// ============================================================================
// COMPANY INFO
// ----------------------------------------------------------------------------
// Единственное место для контактных данных Multilex Immobilien.
// Изменения здесь автоматически применяются во всём сайте
// (Header, Kontakt, Footer, SEO-метаданные и т.д.).
// ============================================================================

export interface CompanyInfo {
  companyName: string;
  legalName: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: {
    street: string;
    zip: string;
    city: string;
    country: string;
  };
  website: string;
}

export const companyInfo: CompanyInfo = {
  companyName: "MULTILEX IMMOBILIEN",
  legalName: "Multilex Immobilien GmbH",

  // Телефон: замените значение ниже на реальный номер компании.
  // phone — используется как href="tel:", поэтому в международном формате без пробелов.
  // phoneDisplay — то, что видит пользователь на странице.
  phone: "+49 000 0000000",
  phoneDisplay: "+49 (0) 000 000 0000",

  // E-Mail: замените значение ниже на реальный адрес компании.
  email: "info@advokat-kanzlei.de",

  address: {
    street: "[Straße und Hausnummer einfügen]",
    zip: "[PLZ]",
    city: "[Stadt einfügen]",
    country: "Deutschland",
  },

  website: "www.multilex-immobilien.de",
};

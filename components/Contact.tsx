"use client";

import { FormEvent, useState } from "react";
import { companyInfo } from "@/data/companyInfo";
import RevealOnScroll from "./RevealOnScroll";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!accepted) return;

    setStatus("submitting");

    // TODO: подключить реальную отправку формы (API-роут, e-mail-сервис и т.д.)
    // Пример: await fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) })
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="bg-white py-28 md:py-40 border-t border-black/10">
      <div className="container-lx">
        <RevealOnScroll className="mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.28em] text-mute">
            Kontakt
          </span>
          <h2 className="mt-4 text-display-2 font-semibold text-black">
            Kontakt
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10">
          {/* Form */}
          <RevealOnScroll className="lg:col-span-7" delay={0.05}>
            {status === "success" ? (
              <div className="border border-black/10 py-16 px-6 text-center">
                <p className="text-xl font-light text-black">
                  Vielen Dank für Ihre Nachricht.
                </p>
                <p className="mt-3 text-sm text-mute">
                  Wir melden uns zeitnah persönlich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field
                    label="Vorname &amp; Nachname"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                  <Field
                    label="E-Mail"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <Field
                  label="Telefonnummer"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.14em] text-mute mb-3"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border-0 border-b border-black/20 bg-transparent py-3 text-base text-black placeholder:text-haze focus:outline-none focus:border-black transition-colors duration-300 resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-mute cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 border border-black/40 accent-black shrink-0"
                  />
                  <span>
                    Ich habe die{" "}
                    <a
                      href="/datenschutz"
                      className="underline underline-offset-2 hover:text-black transition-colors"
                    >
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und akzeptiere diese.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!accepted || status === "submitting"}
                  className="self-start inline-flex items-center gap-3 text-sm uppercase tracking-[0.14em] border-b border-black pb-2 hover:gap-5 transition-all duration-300 ease-premium disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:gap-3"
                >
                  {status === "submitting" ? "Wird gesendet…" : "Nachricht senden"}
                  <span aria-hidden>→</span>
                </button>
              </form>
            )}
          </RevealOnScroll>

          {/* Company details */}
          <RevealOnScroll className="lg:col-span-4 lg:col-start-9" delay={0.15}>
            <div className="border-t border-black/10 pt-8 lg:border-t-0 lg:pt-0">
              <p className="text-sm uppercase tracking-[0.18em] text-black font-medium">
                {companyInfo.companyName}
              </p>

              <div className="mt-10 space-y-8 text-sm">
                <div>
                  <span className="block text-xs uppercase tracking-[0.14em] text-haze mb-2">
                    Telefon
                  </span>
                  <a
                    href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                    className="text-base text-black hover:underline underline-offset-2"
                  >
                    {companyInfo.phoneDisplay}
                  </a>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-[0.14em] text-haze mb-2">
                    E-Mail
                  </span>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-base text-black hover:underline underline-offset-2"
                  >
                    {companyInfo.email}
                  </a>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-[0.14em] text-haze mb-2">
                    Adresse
                  </span>
                  <p className="text-base text-black leading-relaxed">
                    {companyInfo.address.street}
                    <br />
                    {companyInfo.address.zip} {companyInfo.address.city}
                    <br />
                    {companyInfo.address.country}
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}

function Field({ label, name, type, autoComplete, required }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.14em] text-mute mb-3"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full border-0 border-b border-black/20 bg-transparent py-3 text-base text-black placeholder:text-haze focus:outline-none focus:border-black transition-colors duration-300"
      />
    </div>
  );
}

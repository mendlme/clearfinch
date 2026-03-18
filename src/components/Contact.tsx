"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Kontakt
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--color-primary-dark)" }}>
              Lassen Sie uns sprechen
            </h2>
            <p className="leading-relaxed mb-10" style={{ color: "var(--color-text-muted)" }}>
              Haben Sie Fragen oder möchten Sie ein unverbindliches Erstgespräch?
              Wir freuen uns auf Ihre Nachricht.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary)", color: "white" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--color-primary-dark)" }}>Adresse</p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    Musterstraße 42, 60311 Frankfurt am Main
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary)", color: "white" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--color-primary-dark)" }}>E-Mail</p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>info@clearfin.de</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary)", color: "white" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--color-primary-dark)" }}>Telefon</p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>+49 69 123 456 78</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "var(--color-accent)", color: "white" }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--color-primary-dark)" }}>
                    Vielen Dank!
                  </h3>
                  <p style={{ color: "var(--color-text-muted)" }}>
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-primary-dark)" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-primary-dark)" }}>
                    E-Mail
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-primary-dark)" }}>
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                    placeholder="Firmenname (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-primary-dark)" }}>
                    Nachricht
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-colors"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

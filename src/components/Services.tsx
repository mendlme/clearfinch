const services = [
  {
    title: "Finanzberatung",
    description:
      "Strategische Beratung für nachhaltige Finanzentscheidungen. Wir analysieren Ihre Situation und entwickeln passgenaue Konzepte.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Compliance & Regulierung",
    description:
      "Sicherstellung der Einhaltung aller regulatorischen Anforderungen. Von MiFID II bis DSGVO — wir halten Sie compliant.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Digitale Transformation",
    description:
      "Modernisierung Ihrer Finanzprozesse durch intelligente Digitalisierung. Automatisierung, die sich rechnet.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Risikomanagement",
    description:
      "Identifikation, Bewertung und Steuerung finanzieller Risiken. Proaktiver Schutz für Ihr Unternehmen.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Leistungen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-primary-dark)" }}>
            Was wir für Sie tun
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--color-primary)", color: "white" }}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--color-primary-dark)" }}>
                {service.title}
              </h3>
              <p style={{ color: "var(--color-text-muted)" }} className="leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

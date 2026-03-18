export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 50%, #061f35 100%)",
        }}
      />
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--color-accent-light)" }}
          >
            Finanzklarheit neu definiert
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transparente Finanzen
            <br />
            für Ihr Unternehmen
          </h1>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed">
            ClearFin GmbH unterstützt Unternehmen mit maßgeschneiderten Lösungen
            in den Bereichen Finanzberatung, Compliance und digitale
            Transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-semibold transition-colors"
              style={{ backgroundColor: "var(--color-accent)", color: "white" }}
            >
              Kostenlose Erstberatung
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-sm font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

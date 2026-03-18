export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--color-primary-dark)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-xl font-bold text-white mb-3">
              Clear<span style={{ color: "var(--color-accent)" }}>Fin</span>
            </p>
            <p className="text-sm text-blue-200 leading-relaxed">
              Transparente Finanzlösungen für moderne Unternehmen.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-4">Navigation</p>
            <div className="space-y-2">
              <a href="#services" className="block text-sm text-blue-200 hover:text-white transition-colors">
                Leistungen
              </a>
              <a href="#about" className="block text-sm text-blue-200 hover:text-white transition-colors">
                Über uns
              </a>
              <a href="#contact" className="block text-sm text-blue-200 hover:text-white transition-colors">
                Kontakt
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-4">Rechtliches</p>
            <div className="space-y-2">
              <a href="/impressum" className="block text-sm text-blue-200 hover:text-white transition-colors">
                Impressum
              </a>
              <a href="/datenschutz" className="block text-sm text-blue-200 hover:text-white transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-sm text-blue-300">
            &copy; {year} ClearFin GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}

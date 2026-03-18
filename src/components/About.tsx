const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "200+", label: "Zufriedene Kunden" },
  { value: "98%", label: "Weiterempfehlung" },
  { value: "50M+", label: "Verwaltetes Volumen" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Über uns
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--color-primary-dark)" }}>
              Klarheit schafft Vertrauen
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--color-text-muted)" }}>
              ClearFin GmbH wurde mit der Überzeugung gegründet, dass
              Finanzentscheidungen auf Transparenz und fundiertem Wissen basieren
              sollten. Unser Team aus erfahrenen Finanzexperten verbindet
              tiefgreifendes Fachwissen mit modernster Technologie.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Wir arbeiten branchenübergreifend mit mittelständischen Unternehmen
              und Konzernen zusammen — immer mit dem Ziel, nachhaltige finanzielle
              Klarheit zu schaffen.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                <p className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "var(--color-primary)" }}>
                  {stat.value}
                </p>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

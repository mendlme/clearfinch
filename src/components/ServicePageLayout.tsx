import Link from "next/link";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  overview: string;
  offerings: string[];
  whyClearfin: string;
  ctaLabel?: string;
  extraSections?: React.ReactNode;
}

export default function ServicePageLayout({
  title,
  subtitle,
  overview,
  offerings,
  whyClearfin,
  ctaLabel = "Discuss Your Project",
  extraSections,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-night-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl md:text-5xl font-bold text-cream-white">{title}</h1>
          <p className="mt-4 text-lg text-soft-lilac max-w-2xl">{subtitle}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-black/80 leading-relaxed text-lg">{overview}</p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-cream-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-8">What We Offer</h2>
          <ul className="space-y-4">
            {offerings.map((item, i) => (
              <li key={i} className="flex gap-3">
                <svg className="w-5 h-5 text-brand-purple mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-brand-black/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {extraSections}

      {/* Why ClearFin */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">Why ClearFin</h2>
          <p className="text-brand-black/80 leading-relaxed text-lg">{whyClearfin}</p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-purple text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-deep-purple transition-colors"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

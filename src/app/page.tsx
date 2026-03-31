import Link from "next/link";

const serviceCards = [
  {
    title: "Trading Application Consulting",
    description: "Murex specialists, system integration, and operational optimisation for capital markets platforms.",
    href: "/services/trading-applications",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Project & Program Management",
    description: "Structured delivery of complex initiatives — on time, on scope, on budget.",
    href: "/services/project-management",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    title: "Large-Scale Transformations",
    description: "End-to-end guidance through system migrations, mergers, and organisational change.",
    href: "/services/transformations",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: "AI Consulting & Advisory",
    description: "Strategy, implementation, and automation powered by artificial intelligence.",
    href: "/services/ai-consulting",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Data Management & Engineering",
    description: "Architecture, reconciliation, and governance for clean, reliable data.",
    href: "/services/data-management",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

const valueProps = [
  {
    title: "Expert Talent",
    description: "Hand-picked consultants with deep domain expertise in banking, trading, and AI.",
  },
  {
    title: "Flexible Delivery",
    description: "Onsite, remote, or hybrid teams scaled to your project needs.",
  },
  {
    title: "AI-Forward",
    description: "Bridging traditional finance with intelligent automation and data-driven solutions.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-night-purple overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-night-purple via-deep-purple/40 to-brand-purple/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream-white leading-tight">
              Clarity in Change,{" "}
              <span className="text-brand-purple">Expertise on Demand</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-soft-lilac leading-relaxed max-w-2xl">
              ClearFin GmbH connects you with top-tier talent in trading systems, AI, and data management.
              We deliver the right experts for your most complex challenges — onsite, remote, or hybrid.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-brand-purple text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-mid-purple transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-soft-lilac text-cream-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-cream-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((vp) => (
              <div key={vp.title} className="text-center px-6">
                <h3 className="text-lg font-bold text-brand-purple mb-2">{vp.title}</h3>
                <p className="text-sm text-brand-black leading-relaxed">{vp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">What We Do</h2>
            <p className="mt-4 text-brand-black/70 leading-relaxed">
              From trading application expertise to AI-powered transformation, ClearFin GmbH provides
              the specialists and strategic guidance financial institutions need to stay ahead.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group border border-lavender rounded-xl p-6 hover:border-brand-purple hover:shadow-lg transition-all"
              >
                <div className="text-brand-purple mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-brand-black group-hover:text-brand-purple transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-brand-black/70 leading-relaxed">{card.description}</p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-brand-purple">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Teaser */}
      <section className="bg-cream-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">Strategic Partners</h2>
            <p className="mt-4 text-brand-black/70 leading-relaxed">
              We partner with specialists who share our commitment to quality and innovation.
              Together, we deliver integrated solutions across data reconciliation, QA testing, analytics, and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white border border-lavender rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-brand-black mb-2">Finbox Solutions</h3>
              <p className="text-sm text-mid-purple mb-3">Data Reconciliation Software</p>
              <p className="text-sm text-brand-black/70">Real-time reconciliation platform trusted by major European banks.</p>
            </div>
            <div className="bg-white border border-lavender rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-brand-black mb-2">Sinext Consulting</h3>
              <p className="text-sm text-mid-purple mb-3">QA Testing Expertise</p>
              <p className="text-sm text-brand-black/70">Industrial-grade testing solutions for complex financial environments.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/partners"
              className="inline-flex items-center text-brand-purple font-semibold hover:text-deep-purple transition-colors"
            >
              Meet Our Partners
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-night-purple to-deep-purple py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cream-white">
            Ready to Find the Right Expertise?
          </h2>
          <p className="mt-4 text-lg text-soft-lilac max-w-2xl mx-auto">
            Whether you need a single specialist or a full project team, we can help.
            Let&apos;s talk about what you&apos;re building.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 bg-brand-purple text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-mid-purple transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

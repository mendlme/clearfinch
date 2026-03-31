import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strategic Partners — ClearFin GmbH",
  description:
    "ClearFin GmbH partners with Finbox Solutions, Sinext Consulting, and other industry leaders to deliver integrated consulting, data reconciliation, and QA testing solutions for financial institutions.",
};

const deliverables = [
  "Automated data reconciliation for system migrations and upgrades",
  "Non-regression testing and data validation at scale",
  "Real-time exception management and reconciliation reporting",
  "AI-enhanced data quality and matching workflows",
  "End-to-end QA strategy and test automation for platform implementations",
  "Nearshore testing delivery for cost-effective, scalable quality assurance",
  "Comprehensive Murex testing — from initial implementation to upgrades and beyond",
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-night-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl md:text-5xl font-bold text-cream-white">Strategic Partners</h1>
          <p className="mt-4 text-lg text-soft-lilac max-w-2xl">
            We collaborate with industry leaders to deliver integrated, end-to-end solutions for our clients.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-black/80 leading-relaxed text-lg">
            ClearFin GmbH believes the best outcomes come from combining deep expertise across
            complementary domains. Our partnerships extend our capabilities and give clients access
            to best-in-class tools and talent — without the complexity of managing multiple vendors.
          </p>
        </div>
      </section>

      {/* Partner Cards */}
      <section className="bg-cream-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Finbox Solutions */}
          <div className="bg-white border border-lavender rounded-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-brand-black mb-1">Finbox Solutions</h2>
                <p className="text-sm text-mid-purple mb-4">Data Reconciliation Software &middot; France &middot; Founded 2013</p>
                <p className="text-sm font-semibold text-brand-purple mb-3">Key Product: EasyRec — Real-time reconciliation platform</p>
                <p className="text-brand-black/80 leading-relaxed mb-4">
                  Finbox Solutions is a French FinTech company specialising in data migrations, integrations,
                  and reconciliations for financial institutions undergoing large-scale IT transformations.
                  Their flagship product, EasyRec, is a real-time reconciliation solution trusted by major
                  European banks including DZ Bank, Nord LB, CA CIB, and Natixis.
                </p>
                <div className="bg-cream-white rounded-lg p-4 border border-lavender">
                  <p className="text-sm font-semibold text-brand-purple mb-1">Why this partnership matters</p>
                  <p className="text-sm text-brand-black/70 leading-relaxed">
                    Data reconciliation sits at the intersection of everything ClearFin does — trading system
                    migrations, transformation programmes, data management, and AI-driven automation. Finbox
                    Solutions&apos; EasyRec platform, with its AI-guided matching and high-throughput processing,
                    is the ideal complement to our consulting services.
                  </p>
                </div>
                <a
                  href="https://www.finbox-solutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-sm font-medium text-brand-purple hover:text-deep-purple"
                >
                  Visit Finbox Solutions
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Sinext Consulting */}
          <div className="bg-white border border-lavender rounded-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-brand-black mb-1">Sinext Consulting</h2>
                <p className="text-sm text-mid-purple mb-4">QA Testing Expertise &middot; Paris, France &middot; Founded 2014</p>
                <p className="text-sm font-semibold text-brand-purple mb-3">Key Services: Test diagnostics & transformation, test automation, non-regression testing (TNR), nearshore testing</p>
                <p className="text-brand-black/80 leading-relaxed mb-4">
                  Sinext Consulting is a French consulting firm specialising in software quality assurance
                  and testing. With over 10 years of experience, 30+ certified testing specialists, and
                  more than 100 missions completed across 9 countries, Sinext delivers industrial-grade
                  testing solutions for complex environments — including capital markets platforms such as Murex.
                </p>
                <p className="text-brand-black/70 leading-relaxed text-sm mb-4">
                  Sinext&apos;s services span the full QA lifecycle: from test strategy diagnostics and
                  transformation roadmaps to automated test factories, non-regression testing, and nearshore
                  delivery models. They serve clients across financial services, insurance, software vendors,
                  and the Salesforce ecosystem.
                </p>
                <div className="bg-cream-white rounded-lg p-4 border border-lavender">
                  <p className="text-sm font-semibold text-brand-purple mb-1">Why this partnership matters</p>
                  <p className="text-sm text-brand-black/70 leading-relaxed">
                    Quality assurance is critical to every system migration, platform upgrade, and transformation
                    programme ClearFin delivers. Sinext Consulting&apos;s expertise in test automation,
                    non-regression testing, and QA strategy — particularly for Murex and capital markets
                    platforms — makes them the ideal partner to ensure that our clients&apos; deployments are
                    thoroughly validated, production-ready, and risk-free.
                  </p>
                </div>
                <a
                  href="https://www.sinext-consulting.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-sm font-medium text-brand-purple hover:text-deep-purple"
                >
                  Visit Sinext Consulting
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Together We Deliver */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-8">Together We Deliver</h2>
          <ul className="space-y-4">
            {deliverables.map((item, i) => (
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-night-purple to-deep-purple py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-cream-white">Interested in Partnering?</h2>
          <p className="mt-3 text-soft-lilac">
            We&apos;re always looking for partners who share our commitment to quality and innovation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 bg-brand-purple text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-mid-purple transition-colors"
          >
            Become a Partner
          </Link>
        </div>
      </section>
    </>
  );
}

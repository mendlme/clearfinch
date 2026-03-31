import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Management & Engineering — ClearFin GmbH",
  description:
    "Data architecture, reconciliation, and governance for financial institutions. ClearFin GmbH provides data engineers and reconciliation specialists.",
};

export default function DataManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-night-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl md:text-5xl font-bold text-cream-white">Data Management & Engineering</h1>
          <p className="mt-4 text-lg text-soft-lilac max-w-2xl">
            Clean, reliable data is the foundation of every good decision. We make sure yours is.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-black/80 leading-relaxed text-lg">
            Financial institutions generate vast amounts of data across trading, risk, finance, and operations.
            Making that data consistent, accurate, and accessible is one of the hardest challenges in the industry.
            ClearFin GmbH provides data engineers, architects, and reconciliation specialists who bring order
            to complexity — and lay the groundwork for AI and advanced analytics.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-cream-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-8">What We Offer</h2>
          <ul className="space-y-4">
            {[
              "Data architecture design and implementation",
              "Data reconciliation and quality assurance (powered by Finbox Solutions EasyRec)",
              "ETL/ELT pipeline development and optimisation",
              "Data governance frameworks and lineage tracking",
              "Migration data validation and non-regression testing",
              "Regulatory data reporting and compliance",
            ].map((item, i) => (
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

      {/* Finbox Partnership */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">The Finbox Solutions Partnership</h2>
          <p className="text-brand-black/80 leading-relaxed text-lg">
            Our partnership with Finbox Solutions gives clients access to EasyRec, a proven real-time
            reconciliation platform used by major European banks including DZ Bank, Nord LB, CA CIB,
            and Natixis. EasyRec handles large data volumes with high throughput, AI-guided matching,
            and flexible deployment — making it the ideal backbone for data reconciliation in complex environments.
          </p>
        </div>
      </section>

      {/* Why ClearFin */}
      <section className="bg-cream-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">Why ClearFin</h2>
          <p className="text-brand-black/80 leading-relaxed text-lg">
            Data is where our trading expertise, AI capabilities, and reconciliation partnerships converge.
            We don&apos;t just build pipelines — we understand the business context behind the data, which means
            better architecture, fewer errors, and faster time to value.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-purple text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-deep-purple transition-colors"
            >
              Discuss Your Data Challenges
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

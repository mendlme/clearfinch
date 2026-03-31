import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Consulting & Advisory for Financial Services — ClearFin GmbH",
  description:
    "AI strategy, process automation, and intelligent data solutions for banks and capital markets. ClearFin GmbH helps financial institutions move from AI experimentation to real impact.",
};

const subSections = [
  {
    title: "AI Strategy & Readiness",
    description:
      "We assess where AI can deliver genuine value in your organisation — not just what's technically possible, but what's operationally practical. Our assessments cover data readiness, infrastructure, skills, and governance.",
  },
  {
    title: "AI-Powered Process Automation",
    description:
      "We identify and automate high-value manual processes using AI and machine learning — reconciliation workflows, exception handling, report generation, compliance checks, and more. Our approach prioritises measurable ROI and seamless integration with existing systems.",
  },
  {
    title: "Intelligent Data Solutions",
    description:
      "Working closely with our data management practice and our partner Finbox Solutions, we apply AI to improve data quality, automate matching and reconciliation, and surface insights from complex datasets.",
  },
  {
    title: "Advisory & Implementation Support",
    description:
      "From vendor evaluation and proof-of-concept development to full-scale deployment, we provide hands-on expertise at every stage of your AI journey.",
  },
];

export default function AIConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-night-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl md:text-5xl font-bold text-cream-white">AI Consulting & Advisory</h1>
          <p className="mt-4 text-lg text-soft-lilac max-w-2xl">
            Helping financial institutions harness artificial intelligence — from strategy to production.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-black/80 leading-relaxed text-lg">
            Artificial intelligence is reshaping financial services — from automated reconciliation and anomaly
            detection to intelligent document processing and predictive analytics. But most organisations
            struggle to move from experimentation to real impact. ClearFin GmbH bridges that gap with
            practical AI strategy, hands-on implementation support, and deep domain knowledge in banking
            and capital markets.
          </p>
        </div>
      </section>

      {/* What We Offer - sub sections */}
      <section className="bg-cream-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-10">What We Offer</h2>
          <div className="space-y-10">
            {subSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-bold text-brand-purple mb-2">{section.title}</h3>
                <p className="text-brand-black/80 leading-relaxed">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ClearFin */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-6">Why ClearFin</h2>
          <p className="text-brand-black/80 leading-relaxed text-lg">
            We combine AI expertise with deep banking domain knowledge. That means we understand not
            just the technology, but the regulatory constraints, data complexities, and operational
            realities of deploying AI in financial services. We don&apos;t sell tools — we solve problems.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-brand-purple text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-deep-purple transition-colors"
            >
              Explore AI Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

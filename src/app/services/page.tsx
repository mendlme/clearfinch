import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services — ClearFin GmbH",
  description:
    "Explore ClearFin's consulting services: trading application specialists, project management, large-scale transformations, AI advisory, and data management for financial institutions.",
};

const services = [
  {
    title: "Trading Application Consulting",
    description:
      "Deep expertise in Murex and other capital markets platforms. From implementation and upgrades to day-to-day optimisation, our specialists integrate seamlessly into your teams to deliver results.",
    href: "/services/trading-applications",
  },
  {
    title: "Project & Program Management",
    description:
      "Experienced project and program managers who bring structure, clarity, and accountability to complex initiatives. We focus on communication, risk mitigation, and stakeholder alignment.",
    href: "/services/project-management",
  },
  {
    title: "Large-Scale Transformations",
    description:
      "System migrations, regulatory programmes, post-merger integration — we guide organisations through high-stakes change with minimal disruption and lasting impact.",
    href: "/services/transformations",
  },
  {
    title: "AI Consulting & Advisory",
    description:
      "From AI strategy and readiness assessments to deploying intelligent automation, we help financial institutions harness AI to improve decision-making, efficiency, and competitive advantage.",
    href: "/services/ai-consulting",
  },
  {
    title: "Data Management & Engineering",
    description:
      "Clean data is the foundation of every good decision. We design data architectures, implement reconciliation frameworks, and build pipelines that ensure accuracy, compliance, and speed.",
    href: "/services/data-management",
  },
];

const howWeWork = [
  {
    title: "Rapid deployment",
    description: "Vetted experts ready to start within weeks, not months.",
  },
  {
    title: "Flexible engagement",
    description: "Onsite, remote, or hybrid — single consultants or full teams.",
  },
  {
    title: "Domain depth",
    description: "Every consultant is a specialist, not a generalist.",
  },
  {
    title: "Partnership mindset",
    description: "We stay involved to ensure quality and continuity.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-night-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl md:text-5xl font-bold text-cream-white">
            Expertise Where It Matters Most
          </h1>
          <p className="mt-4 text-lg text-soft-lilac max-w-2xl">
            ClearFin GmbH provides highly skilled consultants and strategic advisory across five core areas.
            Whether you need hands-on delivery, expert guidance, or a full team, we tailor our approach to your challenge.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group border border-lavender rounded-xl p-8 hover:border-brand-purple hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-brand-black group-hover:text-brand-purple transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-black/70 leading-relaxed">{service.description}</p>
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

      {/* How We Work */}
      <section className="bg-cream-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">How We Work</h2>
            <p className="text-brand-black/70 leading-relaxed mb-10">
              ClearFin GmbH operates as a specialist talent partner. We don&apos;t just advise — we embed
              highly skilled professionals directly into your organisation. Our consultants work as an
              extension of your team, bringing deep domain expertise from day one.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {howWeWork.map((item) => (
                <div key={item.title} className="bg-white border border-lavender rounded-lg p-6">
                  <h4 className="font-bold text-brand-purple mb-1">{item.title}</h4>
                  <p className="text-sm text-brand-black/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

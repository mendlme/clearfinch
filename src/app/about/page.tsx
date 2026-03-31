import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About ClearFin GmbH — Founded by Markus Endl",
  description:
    "ClearFin GmbH is a Swiss consulting firm founded by Markus Endl, specialising in placing expert talent in banking, reconciliation, AI, and advisory services.",
};

const networkBenefits = [
  "A dedicated point of contact (Markus) who understands your requirements",
  "Hand-picked consultants matched to your specific challenge",
  "Ongoing quality assurance and engagement oversight",
  "Flexibility to scale up or down as your project evolves",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-night-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl md:text-5xl font-bold text-cream-white">About ClearFin</h1>
          <p className="mt-4 text-lg text-soft-lilac max-w-2xl">
            Founded on expertise. Driven by clarity.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-black/80 leading-relaxed text-lg mb-6">
            ClearFin GmbH is a Swiss consulting firm based in Baar, specialising in providing top-tier
            talent and advisory services to financial institutions. We operate at the intersection of
            trading technology, data management, and artificial intelligence — helping banks and capital
            markets firms navigate complex challenges with the right expertise at the right time.
          </p>
          <p className="text-brand-black/80 leading-relaxed text-lg">
            Our model is simple: we find, vet, and place highly skilled consultants who integrate
            seamlessly into your teams. Whether you need a Murex specialist for a platform upgrade,
            a programme manager for a multi-year transformation, or an AI strategist to shape your
            automation roadmap, ClearFin delivers.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-cream-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] w-full">
                <Image
                  src="/images/markus_endl.jpg"
                  alt="Markus Endl — Founder & Consultant, ClearFin GmbH"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  unoptimized
                />
              </div>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-xl font-bold text-brand-black">Markus Endl</h3>
                <p className="text-sm text-mid-purple">Founder & Consultant</p>
                <p className="text-xs text-brand-black/60 mt-1">Banking, Reconciliation & Advisory Services</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-brand-black/80 leading-relaxed text-lg mb-6">
                Markus Endl founded ClearFin GmbH to bridge the gap between the demand for specialist
                expertise in financial services and the highly skilled professionals who deliver it.
                With deep experience in banking, reconciliation, and advisory services, Markus brings
                a hands-on, client-first approach to every engagement.
              </p>
              <p className="text-brand-black/80 leading-relaxed text-lg mb-8">
                ClearFin reflects Markus&apos;s conviction that the best consulting outcomes come from
                placing the right people in the right roles — not from scaling headcount. Every
                consultant in the ClearFin network is personally vetted for domain expertise,
                delivery capability, and cultural fit.
              </p>
              <blockquote className="border-l-4 border-brand-purple pl-6 py-2">
                <p className="text-brand-black/80 italic leading-relaxed">
                  &ldquo;I founded ClearFin because I believe financial institutions deserve better access to
                  specialist talent — people who understand the technology, the regulation, and the business.
                  That&apos;s what we deliver.&rdquo;
                </p>
                <cite className="block mt-2 text-sm text-mid-purple not-italic">— Markus Endl, Founder</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Network */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">Our Network, Your Team</h2>
          <p className="text-brand-black/80 leading-relaxed text-lg mb-8">
            ClearFin GmbH doesn&apos;t maintain a large bench of idle consultants. Instead, we operate
            a curated network of specialists — professionals with proven track records at leading
            financial institutions across Europe. When you engage ClearFin, you get:
          </p>
          <ul className="space-y-4 mb-10">
            {networkBenefits.map((item, i) => (
              <li key={i} className="flex gap-3">
                <svg className="w-5 h-5 text-brand-purple mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-brand-black/80 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-brand-purple text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-deep-purple transition-colors"
          >
            Let&apos;s Work Together
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ClearFin GmbH",
  description: "Privacy policy for ClearFin GmbH. We collect only what is necessary, store it securely, and never sell it to third parties.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-night-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-xs uppercase tracking-widest text-soft-lilac mb-3">ClearFin GmbH</p>
          <h1 className="text-3xl md:text-5xl font-bold text-cream-white">Privacy Policy</h1>
          <p className="mt-3 text-soft-lilac italic text-sm">Last updated: 31 March 2026 · Effective: 31 March 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-cream-white border-l-4 border-brand-purple p-5 mb-10 text-sm text-brand-black/70 leading-relaxed">
            <strong className="text-brand-black">Summary:</strong> ClearFin GmbH takes the protection of your personal data seriously. We collect only what is necessary, store it securely, and never sell it to third parties.
          </div>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-12 first:mt-0">1. Controller &amp; Contact</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">The data controller responsible for processing your personal data is:</p>
          <p className="text-brand-black leading-relaxed mb-4">
            <strong>ClearFin GmbH</strong><br />
            Blegistrasse 7, 6340 Baar, Switzerland<br />
            Email: <a href="mailto:privacy@clearfin.ch" className="text-brand-purple hover:text-deep-purple">privacy@clearfin.ch</a><br />
            Website: <a href="https://www.clearfin.ch" className="text-brand-purple hover:text-deep-purple">www.clearfin.ch</a>
          </p>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">2. Applicable Law</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">This Privacy Policy is governed by the Swiss Federal Act on Data Protection (<strong className="font-semibold text-brand-black">revDSG / nFADP</strong>), which came into force on 1 September 2023, and, where applicable, the EU General Data Protection Regulation (<strong className="font-semibold text-brand-black">GDPR</strong>) for individuals in the European Economic Area.</p>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">3. Data We Collect</h2>
          <h3 className="text-base font-semibold text-brand-black italic mb-2 mt-6">3.1 When you visit our website</h3>
          <ul className="space-y-2 mb-4">
            {["IP address (anonymised after 24 hours)", "Browser type and version", "Pages visited and time of visit", "Referring URL"].map(item => (
              <li key={item} className="flex gap-3 text-brand-black/80">
                <span className="text-brand-purple font-bold flex-shrink-0">—</span>{item}
              </li>
            ))}
          </ul>
          <p className="text-brand-black/80 leading-relaxed mb-4">This data is collected automatically via server logs and is used solely to ensure technical functionality and security.</p>

          <h3 className="text-base font-semibold text-brand-black italic mb-2 mt-6">3.2 When you contact us</h3>
          <ul className="space-y-2 mb-4">
            {["Name and email address", "Company name and role (if provided)", "Content of your message"].map(item => (
              <li key={item} className="flex gap-3 text-brand-black/80"><span className="text-brand-purple font-bold flex-shrink-0">—</span>{item}</li>
            ))}
          </ul>

          <h3 className="text-base font-semibold text-brand-black italic mb-2 mt-6">3.3 When you engage our services</h3>
          <ul className="space-y-2 mb-4">
            {["Contact and billing information", "Communication history", "Data required for contractual performance and invoicing"].map(item => (
              <li key={item} className="flex gap-3 text-brand-black/80"><span className="text-brand-purple font-bold flex-shrink-0">—</span>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">4. Legal Basis for Processing</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">We process your personal data on the following legal grounds:</p>
          <ul className="space-y-2 mb-4">
            {[
              ["Contractual necessity", "to fulfil a contract or take pre-contractual steps at your request"],
              ["Legitimate interest", "for website security, analytics, and business communications"],
              ["Legal obligation", "where Swiss law requires us to retain records (e.g. VAT, commercial law)"],
              ["Consent", "where explicitly provided (e.g. newsletter subscription)"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-3 text-brand-black/80"><span className="text-brand-purple font-bold flex-shrink-0">—</span><span><strong className="font-semibold text-brand-black">{label}</strong> – {desc}</span></li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">5. How We Use Your Data</h2>
          <ul className="space-y-2 mb-4">
            {[
              "Providing and improving our financial consulting services",
              "Responding to inquiries and managing client relationships",
              "Fulfilling statutory accounting and record-keeping obligations",
              "Ensuring the security and integrity of our website",
              "Sending service-related communications",
            ].map(item => (
              <li key={item} className="flex gap-3 text-brand-black/80"><span className="text-brand-purple font-bold flex-shrink-0">—</span>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">6. Data Sharing</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">We do not sell, rent, or trade your personal data. We may share data with trusted third parties only in the following circumstances:</p>
          <ul className="space-y-2 mb-4">
            {[
              ["Service providers", "hosting, IT support, and communication tools operating under data processing agreements"],
              ["Professional advisors", "lawyers, auditors, and accountants bound by confidentiality obligations"],
              ["Authorities", "where required by Swiss law or a valid court order"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-3 text-brand-black/80"><span className="text-brand-purple font-bold flex-shrink-0">—</span><span><strong className="font-semibold text-brand-black">{label}</strong> – {desc}</span></li>
            ))}
          </ul>
          <p className="text-brand-black/80 leading-relaxed mb-4">Any third-party processors are contractually required to handle your data in accordance with applicable data protection law.</p>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">7. International Data Transfers</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">Where data is transferred outside Switzerland or the EEA, we ensure an adequate level of protection through Standard Contractual Clauses (SCCs) or by transferring only to countries recognised by the Swiss Federal Council as offering adequate protection.</p>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">8. Retention Periods</h2>
          <ul className="space-y-2 mb-4">
            {[
              ["Website logs", "30 days, then anonymised or deleted"],
              ["Contact inquiries", "Up to 2 years unless a client relationship is established"],
              ["Client and contract data", "10 years from end of contract (Swiss Code of Obligations, Art. 958f)"],
              ["Invoice records", "10 years (Swiss VAT law)"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-3 text-brand-black/80"><span className="text-brand-purple font-bold flex-shrink-0">—</span><span><strong className="font-semibold text-brand-black">{label}:</strong> {desc}</span></li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">9. Your Rights</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">Under the revDSG and, where applicable, the GDPR, you have the right to:</p>
          <ul className="space-y-2 mb-4">
            {[
              ["Access", "obtain a copy of the personal data we hold about you"],
              ["Rectification", "request correction of inaccurate data"],
              ["Erasure", "request deletion of your data, subject to legal retention obligations"],
              ["Restriction", "request that we limit processing in certain circumstances"],
              ["Portability", "receive your data in a machine-readable format"],
              ["Objection", "object to processing based on legitimate interest"],
              ["Withdraw consent", "at any time, without affecting the lawfulness of prior processing"],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-3 text-brand-black/80"><span className="text-brand-purple font-bold flex-shrink-0">—</span><span><strong className="font-semibold text-brand-black">{label}</strong> – {desc}</span></li>
            ))}
          </ul>
          <p className="text-brand-black/80 leading-relaxed mb-4">To exercise any of these rights, please contact us at <a href="mailto:privacy@clearfin.ch" className="text-brand-purple hover:text-deep-purple">privacy@clearfin.ch</a>. We will respond within 30 days.</p>
          <p className="text-brand-black/80 leading-relaxed mb-4">If you believe your rights have not been respected, you have the right to lodge a complaint with the <strong className="font-semibold text-brand-black">Swiss Federal Data Protection and Information Commissioner (FDPIC)</strong> at <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:text-deep-purple">www.edoeb.admin.ch</a>.</p>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">10. Cookies</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">Our website uses only technically necessary cookies required for basic functionality. We do not use tracking, advertising, or analytics cookies. No cookie consent banner is displayed, as no non-essential cookies are placed.</p>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">11. Data Security</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include encrypted connections (TLS/HTTPS), restricted access controls, and regular security reviews.</p>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">12. Changes to This Policy</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">We may update this Privacy Policy from time to time. The current version is always available at <a href="https://www.clearfin.ch/privacy" className="text-brand-purple hover:text-deep-purple">clearfin.ch/privacy</a>. Material changes will be communicated via email where we hold your contact details.</p>

          <div className="mt-16 pt-6 border-t border-lavender flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-brand-black/50">
            <span>© 2026 ClearFin GmbH · Switzerland</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-brand-purple">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-brand-purple transition-colors">Terms &amp; Conditions</Link>
              <Link href="/impressum" className="hover:text-brand-purple transition-colors">Impressum</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

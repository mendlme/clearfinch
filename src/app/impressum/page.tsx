import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — ClearFin GmbH",
  description: "Legal disclosure and site notice for ClearFin GmbH, Blegistrasse 7, 6340 Baar, Switzerland.",
};

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-night-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-xs uppercase tracking-widest text-soft-lilac mb-3">ClearFin GmbH</p>
          <h1 className="text-3xl md:text-5xl font-bold text-cream-white">Impressum</h1>
          <p className="mt-3 text-soft-lilac italic text-sm">Legal disclosure &amp; site notice</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-12 first:mt-0">Company Information</h2>

          <div className="bg-cream-white border-l-4 border-brand-purple p-6 md:p-8 my-6 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-mid-purple block mb-1">Company name</span>
              <p className="text-brand-black font-medium">ClearFin GmbH</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-mid-purple block mb-1">Legal form</span>
              <p className="text-brand-black">Gesellschaft mit beschränkter Haftung (GmbH) incorporated under Swiss law</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-mid-purple block mb-1">Registered address</span>
              <p className="text-brand-black">Blegistrasse 7<br />6340 Baar<br />Switzerland</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-mid-purple block mb-1">Company registration</span>
              <p className="text-brand-black">Commercial Register of the Canton of Zug<br />UID: CHE-280.048.888</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-mid-purple block mb-1">VAT number</span>
              <p className="text-brand-black">CHE-280.048.888 MWST</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-mid-purple block mb-1">Managing Director(s)</span>
              <p className="text-brand-black">Markus Endl</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">Contact</h2>
          <div className="bg-cream-white border-l-4 border-brand-purple p-6 md:p-8 my-6 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-mid-purple block mb-1">Email</span>
              <a href="mailto:info@clearfin.ch" className="text-brand-purple hover:text-deep-purple">info@clearfin.ch</a>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-mid-purple block mb-1">Website</span>
              <a href="https://www.clearfin.ch" className="text-brand-purple hover:text-deep-purple">www.clearfin.ch</a>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-mid-purple block mb-1">Phone</span>
              <a href="tel:+41783178718" className="text-brand-purple hover:text-deep-purple">+41 78 317 87 18</a>
            </div>
          </div>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">Regulatory Status</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">ClearFin GmbH provides management and technology consulting services in the financial services sector. ClearFin GmbH is <strong className="font-semibold text-brand-black">not</strong> a bank, securities firm, or financial intermediary regulated by the Swiss Financial Market Supervisory Authority (FINMA) and does not hold any authorisation to provide regulated financial services under the Swiss Financial Services Act (FinSA), Banking Act (BankA), or Collective Investment Schemes Act (CISA).</p>
          <p className="text-brand-black/80 leading-relaxed mb-4">Nothing on this website constitutes investment advice, a solicitation to buy or sell securities, or any other regulated financial service.</p>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">Responsible for Content</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">The content of this website is the responsibility of ClearFin GmbH. The person responsible for editorial content within the meaning of applicable law is:</p>
          <p className="text-brand-black leading-relaxed mb-4">
            <strong>Markus Endl</strong><br />
            ClearFin GmbH, Blegistrasse 7, 6340 Baar, Switzerland<br />
            <a href="mailto:info@clearfin.ch" className="text-brand-purple hover:text-deep-purple">info@clearfin.ch</a>
          </p>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">Liability Disclaimer</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">The content published on this website has been prepared with care and is provided for general information purposes only. ClearFin GmbH makes no warranty as to the accuracy, completeness, or timeliness of the information. ClearFin GmbH accepts no liability for any loss or damage arising from reliance on the information contained on this website.</p>
          <p className="text-brand-black/80 leading-relaxed mb-4">This website may contain links to third-party websites. ClearFin GmbH has no influence over the content of those sites and accepts no responsibility for them. The operators of linked pages are solely responsible for their content.</p>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">Copyright</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">All content on this website — including text, graphics, logos, and design — is the property of ClearFin GmbH and is protected by Swiss copyright law. Reproduction, distribution, or use of any content without prior written permission from ClearFin GmbH is prohibited.</p>

          <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">Dispute Resolution</h2>
          <p className="text-brand-black/80 leading-relaxed mb-4">ClearFin GmbH is not obligated to and does not participate in dispute resolution proceedings before a consumer arbitration board. For any disputes arising from use of this website or our services, the courts of Zug shall have exclusive jurisdiction in accordance with Swiss law.</p>

          <div className="mt-16 pt-6 border-t border-lavender flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-brand-black/50">
            <span>© 2026 ClearFin GmbH · Switzerland</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-brand-purple transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-brand-purple transition-colors">Terms &amp; Conditions</Link>
              <Link href="/impressum" className="text-brand-purple">Impressum</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

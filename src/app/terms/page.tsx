import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — ClearFin GmbH",
  description: "General terms and conditions governing all consulting and advisory engagements with ClearFin GmbH.",
};

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-brand-black/80">
      <span className="text-brand-purple font-bold flex-shrink-0">—</span>
      <span>{children}</span>
    </li>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-brand-purple border-b border-lavender pb-3 mb-5 mt-14">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-brand-black italic mb-2 mt-6">{children}</h3>;
}

export default function TermsPage() {
  return (
    <>
      <section className="bg-night-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-xs uppercase tracking-widest text-soft-lilac mb-3">ClearFin GmbH</p>
          <h1 className="text-3xl md:text-5xl font-bold text-cream-white">Terms &amp; Conditions</h1>
          <p className="mt-3 text-soft-lilac italic text-sm">Last updated: 31 March 2026 · Version 1.0</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-cream-white border-l-4 border-brand-purple p-5 mb-10 text-sm text-brand-black/70 leading-relaxed">
            <strong className="text-brand-black">Please read carefully.</strong> These Terms &amp; Conditions govern all engagements between ClearFin GmbH and its clients. By engaging our services, you agree to be bound by these terms.
          </div>

          <H2>1. Parties and Scope</H2>
          <p className="text-brand-black/80 leading-relaxed mb-4">These General Terms and Conditions (<strong className="font-semibold text-brand-black">&ldquo;Terms&rdquo;</strong>) apply to all consulting, advisory, and related services provided by:</p>
          <p className="text-brand-black leading-relaxed mb-4">
            <strong>ClearFin GmbH</strong><br />
            Blegistrasse 7, 6340 Baar, Switzerland<br />
            (<strong>&ldquo;ClearFin&rdquo;</strong>, <strong>&ldquo;we&rdquo;</strong>, or <strong>&ldquo;us&rdquo;</strong>)
          </p>
          <p className="text-brand-black/80 leading-relaxed mb-4">…to any individual, company, or organisation engaging our services (<strong className="font-semibold text-brand-black">&ldquo;Client&rdquo;</strong> or <strong className="font-semibold text-brand-black">&ldquo;you&rdquo;</strong>).</p>
          <p className="text-brand-black/80 leading-relaxed mb-4">These Terms apply to all proposals, service agreements, and engagements unless otherwise agreed in writing. They supersede any conflicting terms issued by the Client.</p>

          <H2>2. Services</H2>
          <p className="text-brand-black/80 leading-relaxed mb-4">ClearFin provides financial consulting and advisory services, which may include but are not limited to:</p>
          <ul className="space-y-2 mb-4">
            <Li>Financial systems strategy and implementation advisory</Li>
            <Li>Project management and delivery assurance</Li>
            <Li>Process analysis and optimisation</Li>
            <Li>Regulatory and compliance consulting</Li>
            <Li>Data management and reporting solutions</Li>
          </ul>
          <p className="text-brand-black/80 leading-relaxed mb-4">The specific scope, deliverables, timeline, and fees for each engagement are defined in a written <strong className="font-semibold text-brand-black">Statement of Work (SOW)</strong> or service agreement signed by both parties.</p>
          <H3>2.1 No investment advice</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">ClearFin is a management and technology consulting firm. Nothing provided by ClearFin constitutes investment advice, financial product recommendations, or regulated financial services within the meaning of the Swiss Financial Services Act (FinSA) or any other applicable regulation, unless expressly stated in writing and where ClearFin holds the requisite authorisation.</p>

          <H2>3. Proposals and Engagement</H2>
          <p className="text-brand-black/80 leading-relaxed mb-4">All proposals and quotations issued by ClearFin are valid for 30 days unless otherwise stated. An engagement is formally established upon:</p>
          <ul className="space-y-2 mb-4">
            <Li>Written acceptance of a proposal or SOW by the Client, and</Li>
            <Li>Receipt of any required advance payment or signed contract</Li>
          </ul>
          <p className="text-brand-black/80 leading-relaxed mb-4">ClearFin reserves the right to decline any engagement at its sole discretion.</p>

          <H2>4. Fees and Payment</H2>
          <H3>4.1 Fee structure</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">Fees are set out in the applicable SOW or proposal. ClearFin charges on a time-and-materials, fixed-fee, or retainer basis as agreed. All fees are quoted in Swiss Francs (CHF) exclusive of VAT unless otherwise stated.</p>
          <H3>4.2 Invoicing and payment terms</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">Invoices are issued monthly or upon completion of agreed milestones. Payment is due within <strong className="font-semibold text-brand-black">30 days</strong> of invoice date unless otherwise agreed in writing. Late payments accrue interest at <strong className="font-semibold text-brand-black">5% per annum</strong> in accordance with Swiss law.</p>
          <H3>4.3 Expenses</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">Out-of-pocket expenses (travel, accommodation, etc.) incurred with prior Client approval are reimbursed at cost and invoiced separately with supporting documentation.</p>
          <H3>4.4 Taxes</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">The Client is responsible for any applicable taxes, duties, or withholding taxes in their jurisdiction. ClearFin will charge Swiss VAT where applicable under Swiss law.</p>

          <H2>5. Client Obligations</H2>
          <p className="text-brand-black/80 leading-relaxed mb-4">The Client agrees to:</p>
          <ul className="space-y-2 mb-4">
            <Li>Provide accurate and complete information necessary for service delivery</Li>
            <Li>Grant timely access to required personnel, systems, and documentation</Li>
            <Li>Appoint a named contact person with authority to make decisions</Li>
            <Li>Review and approve deliverables within agreed timeframes</Li>
            <Li>Notify ClearFin promptly of any changes that may affect the engagement</Li>
          </ul>
          <p className="text-brand-black/80 leading-relaxed mb-4">Delays caused by the Client&apos;s failure to meet these obligations may result in revised timelines and additional fees.</p>

          <H2>6. Intellectual Property</H2>
          <H3>6.1 Pre-existing IP</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">Each party retains ownership of intellectual property it owns prior to or develops independently of the engagement (<strong className="font-semibold text-brand-black">&ldquo;Background IP&rdquo;</strong>). ClearFin&apos;s methodologies, templates, tools, and know-how constitute Background IP and are not transferred to the Client.</p>
          <H3>6.2 Deliverables</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">Upon receipt of full payment, ClearFin grants the Client a non-exclusive, non-transferable licence to use the deliverables for their internal business purposes. Unless otherwise agreed in writing, ClearFin retains copyright ownership of all deliverables.</p>
          <H3>6.3 Client data</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">All data, documents, and materials provided by the Client remain the property of the Client. ClearFin will use such materials only for the purposes of delivering the agreed services.</p>

          <H2>7. Confidentiality</H2>
          <p className="text-brand-black/80 leading-relaxed mb-4">Both parties agree to keep confidential all non-public information disclosed in connection with the engagement (<strong className="font-semibold text-brand-black">&ldquo;Confidential Information&rdquo;</strong>). This obligation:</p>
          <ul className="space-y-2 mb-4">
            <Li>Applies for the duration of the engagement and for <strong className="font-semibold text-brand-black">3 years</strong> thereafter</Li>
            <Li>Does not apply to information that is publicly available, already known, or required to be disclosed by law</Li>
            <Li>Includes any personal data, business strategies, financial data, and system architectures</Li>
          </ul>

          <H2>8. Liability</H2>
          <H3>8.1 Limitation of liability</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">To the fullest extent permitted by Swiss law, ClearFin&apos;s aggregate liability for any claim arising from or related to an engagement shall not exceed the total fees paid by the Client under that engagement in the preceding <strong className="font-semibold text-brand-black">6 months</strong>.</p>
          <H3>8.2 Exclusions</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">ClearFin is not liable for:</p>
          <ul className="space-y-2 mb-4">
            <Li>Indirect, consequential, or incidental losses</Li>
            <Li>Loss of profit, revenue, or business opportunity</Li>
            <Li>Decisions made by the Client based on ClearFin&apos;s advice</Li>
            <Li>Delays or failures caused by factors outside ClearFin&apos;s reasonable control</Li>
          </ul>
          <H3>8.3 Exceptions</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">Nothing in these Terms excludes or limits liability for fraud, wilful misconduct, or gross negligence.</p>

          <H2>9. Force Majeure</H2>
          <p className="text-brand-black/80 leading-relaxed mb-4">Neither party shall be in breach of these Terms for any failure or delay in performance caused by circumstances beyond their reasonable control, including natural disasters, pandemics, governmental actions, cyberattacks, or infrastructure failures. The affected party must notify the other promptly and take reasonable steps to mitigate the impact.</p>

          <H2>10. Term and Termination</H2>
          <H3>10.1 Term</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">Each engagement begins on the date specified in the SOW and continues until the agreed deliverables are completed or the agreement is terminated.</p>
          <H3>10.2 Termination for convenience</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">Either party may terminate an engagement with <strong className="font-semibold text-brand-black">30 days&apos; written notice</strong>. The Client shall pay for all work completed and expenses incurred up to the termination date.</p>
          <H3>10.3 Termination for cause</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">Either party may terminate immediately if the other materially breaches these Terms and fails to remedy the breach within <strong className="font-semibold text-brand-black">14 days</strong> of written notice, or becomes insolvent.</p>
          <H3>10.4 Survival</H3>
          <p className="text-brand-black/80 leading-relaxed mb-4">Clauses on confidentiality, intellectual property, liability, and governing law survive termination.</p>

          <H2>11. Governing Law and Dispute Resolution</H2>
          <p className="text-brand-black/80 leading-relaxed mb-4">These Terms are governed by and construed in accordance with <strong className="font-semibold text-brand-black">Swiss law</strong>, excluding conflict of law provisions.</p>
          <p className="text-brand-black/80 leading-relaxed mb-4">Any dispute arising from or related to these Terms shall first be referred to good-faith negotiation between the parties. If not resolved within 30 days, disputes shall be submitted to the exclusive jurisdiction of the courts of <strong className="font-semibold text-brand-black">Zug, Switzerland</strong>.</p>

          <H2>12. Amendments</H2>
          <p className="text-brand-black/80 leading-relaxed mb-4">ClearFin reserves the right to update these Terms at any time. The current version is published at <a href="https://www.clearfin.ch/terms" className="text-brand-purple hover:text-deep-purple">clearfin.ch/terms</a>. Continued engagement after notice of changes constitutes acceptance of the updated Terms.</p>

          <H2>13. Severability</H2>
          <p className="text-brand-black/80 leading-relaxed mb-4">If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>

          <H2>14. Entire Agreement</H2>
          <p className="text-brand-black/80 leading-relaxed mb-4">These Terms, together with any applicable SOW or service agreement, constitute the entire agreement between the parties with respect to the subject matter and supersede all prior communications, representations, and agreements.</p>

          <div className="mt-16 pt-6 border-t border-lavender flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-brand-black/50">
            <span>© 2026 ClearFin GmbH · Switzerland</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-brand-purple transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-brand-purple">Terms &amp; Conditions</Link>
              <Link href="/impressum" className="hover:text-brand-purple transition-colors">Impressum</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

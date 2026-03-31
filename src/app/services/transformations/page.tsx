import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Large-Scale Transformations — ClearFin GmbH",
  description:
    "End-to-end guidance through system migrations, mergers, and organisational change for financial institutions.",
};

export default function TransformationsPage() {
  return (
    <ServicePageLayout
      title="Large-Scale Transformation Initiatives"
      subtitle="Guiding financial institutions through high-stakes change with confidence and clarity."
      overview="Whether it's a core system migration, a post-merger integration, or a regulatory-driven overhaul, transformation programmes carry significant risk. ClearFin GmbH brings experienced transformation consultants who have navigated these challenges before. We help you plan, execute, and land complex change while keeping business continuity intact."
      offerings={[
        "Core platform migrations (including Murex upgrades and replacements)",
        "Post-merger technology and process integration",
        "Regulatory programme delivery (FRTB, IBOR, Basel IV)",
        "Target operating model design and implementation",
        "Change management and organisational alignment",
        "Data migration and reconciliation (with Finbox Solutions EasyRec)",
        "QA strategy, test automation, and non-regression testing (with Sinext Consulting)",
      ]}
      whyClearfin="Transformation is where everything we do comes together — trading expertise, project management discipline, data quality, QA assurance, and increasingly, AI-powered automation. We don't just manage the plan; we provide the specialists who do the work."
    />
  );
}

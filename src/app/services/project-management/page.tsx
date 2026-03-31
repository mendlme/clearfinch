import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Project & Program Management — ClearFin GmbH",
  description:
    "Experienced project and program managers for complex banking and IT initiatives. Structured delivery on time, on scope, on budget.",
};

export default function ProjectManagementPage() {
  return (
    <ServicePageLayout
      title="Project & Program Management"
      subtitle="Structured delivery for complex initiatives — keeping your programmes on track, on scope, and on budget."
      overview="Large-scale technology and transformation projects in banking demand rigorous management. ClearFin GmbH places experienced project and program managers who bring proven methodologies, clear communication, and a focus on outcomes. We ensure that complexity doesn't become chaos."
      offerings={[
        "End-to-end project and program management for IT and business initiatives",
        "PMO setup and governance frameworks",
        "Risk identification, mitigation, and escalation management",
        "Stakeholder communication and alignment across business and IT",
        "Agile, waterfall, and hybrid delivery approaches",
        "Vendor coordination and multi-stream programme oversight",
      ]}
      whyClearfin="Our project managers have led complex programmes at tier-one banks and financial institutions. They understand the regulatory environment, the technology landscape, and the organisational dynamics that can make or break a project."
    />
  );
}

import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Trading Application Consulting — ClearFin GmbH",
  description:
    "Specialist expertise in Murex and capital markets platforms — from implementation to optimisation. ClearFin GmbH provides experienced trading system consultants.",
};

export default function TradingApplicationsPage() {
  return (
    <ServicePageLayout
      title="Trading Application Consulting"
      subtitle="Specialist expertise in Murex and capital markets platforms — from implementation to optimisation."
      overview="Financial institutions depend on robust, well-integrated trading platforms to manage risk, execute trades, and meet regulatory demands. ClearFin GmbH provides experienced consultants who understand these systems inside and out. We place Murex specialists, system integrators, and functional analysts directly into your teams to accelerate delivery and reduce risk."
      offerings={[
        "Murex implementation, upgrades, and migration support",
        "Functional and technical analysis for front-to-back trading workflows",
        "System integration across trading, risk, and settlement platforms",
        "Performance tuning and operational efficiency",
        "Regulatory compliance and reporting configuration",
        "Data reconciliation for trading systems (in partnership with Finbox Solutions)",
      ]}
      whyClearfin="Our consultants are not generalists — they are seasoned Murex professionals with hands-on experience at major financial institutions across Europe. We match the right expertise to your specific challenge, whether that's a short-term upgrade sprint or a multi-year transformation programme."
    />
  );
}

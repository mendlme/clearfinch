import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ClearFin GmbH — Baar, Switzerland",
  description:
    "Get in touch with ClearFin GmbH for specialist consulting in trading systems, AI, and data management. Based in Baar, Switzerland.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

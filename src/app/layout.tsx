import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ClearFin GmbH — Expert Consulting for Trading Systems, AI & Data Management",
  description:
    "ClearFin GmbH provides specialist consultants and advisory services for financial institutions. Expertise in Murex, project management, AI consulting, and data engineering. Based in Baar, Switzerland.",
  icons: {
    icon: [
      { url: "/clearfintest/favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/clearfintest/favicon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/clearfintest/favicon_64x64.png", sizes: "64x64", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-night-purple text-cream-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/02_ClearFin_Dark.svg"
              alt="ClearFin"
              width={200}
              height={56}
              className="h-14 w-auto mb-4"
              unoptimized
            />
            <p className="text-sm text-soft-lilac leading-relaxed mt-4">
              ClearFin GmbH — Specialist consulting for financial institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-lavender mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "/services" },
                { label: "Partners", href: "/partners" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-soft-lilac hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-lavender mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Trading Applications", href: "/services/trading-applications" },
                { label: "Project Management", href: "/services/project-management" },
                { label: "Transformations", href: "/services/transformations" },
                { label: "AI Consulting", href: "/services/ai-consulting" },
                { label: "Data Management", href: "/services/data-management" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-soft-lilac hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-lavender mb-4">Contact</h4>
            <address className="not-italic text-sm text-soft-lilac space-y-2">
              <p>Blegistrasse 8</p>
              <p>6340 Baar, Switzerland</p>
              <p className="mt-3">
                <a href="tel:+41783178718" className="hover:text-white transition-colors">
                  +41 78 317 87 18
                </a>
              </p>
              <p>
                <a href="mailto:info@clearfin.ch" className="hover:text-white transition-colors">
                  info@clearfin.ch
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-deep-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-mid-purple">
            &copy; 2026 ClearFin GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-mid-purple hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-deep-purple">|</span>
            <Link href="/terms" className="text-xs text-mid-purple hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-deep-purple">|</span>
            <Link href="/impressum" className="text-xs text-mid-purple hover:text-white transition-colors">
              Impressum
            </Link>
            <a
              href="https://www.linkedin.com/company/clearfin-gmbh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mid-purple hover:text-white transition-colors ml-2"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

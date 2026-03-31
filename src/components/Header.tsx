"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  { label: "Trading Applications", href: "/services/trading-applications" },
  { label: "Project Management", href: "/services/project-management" },
  { label: "Transformations", href: "/services/transformations" },
  { label: "AI Consulting", href: "/services/ai-consulting" },
  { label: "Data Management", href: "/services/data-management" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-lavender">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/04_ClearFin_Minimal.svg"
              alt="ClearFin"
              width={160}
              height={48}
              className="h-10 md:h-12 w-auto"
              unoptimized
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-brand-black hover:text-brand-purple transition-colors">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="text-sm font-medium text-brand-black hover:text-brand-purple transition-colors flex items-center gap-1"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-white rounded-lg shadow-lg border border-lavender py-2 min-w-[240px]">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-sm text-brand-black hover:bg-cream-white hover:text-brand-purple transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/partners" className="text-sm font-medium text-brand-black hover:text-brand-purple transition-colors">
              Partners
            </Link>
            <Link href="/about" className="text-sm font-medium text-brand-black hover:text-brand-purple transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-brand-black hover:text-brand-purple transition-colors">
              Contact
            </Link>

            <Link
              href="/contact"
              className="bg-brand-purple text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-deep-purple transition-colors"
            >
              Get in Touch
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-brand-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-lavender">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" className="block py-2 text-sm font-medium text-brand-black" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="block py-2 text-sm font-medium text-brand-black" onClick={() => setMobileOpen(false)}>
              Services
            </Link>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="block py-2 pl-4 text-sm text-mid-purple" onClick={() => setMobileOpen(false)}>
                {s.label}
              </Link>
            ))}
            <Link href="/partners" className="block py-2 text-sm font-medium text-brand-black" onClick={() => setMobileOpen(false)}>
              Partners
            </Link>
            <Link href="/about" className="block py-2 text-sm font-medium text-brand-black" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block py-2 text-sm font-medium text-brand-black" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mt-3 bg-brand-purple text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

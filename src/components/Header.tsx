"use client";

import { useState } from "react";

const navLinks = [
  { href: "#services", label: "Leistungen" },
  { href: "#about", label: "Über uns" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight" style={{ color: "var(--color-primary)" }}>
          Clear<span style={{ color: "var(--color-accent)" }}>Fin</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium text-white px-5 py-2 rounded-lg transition-colors"
            style={{ backgroundColor: "var(--color-primary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-primary-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--color-primary)")}
          >
            Gespräch vereinbaren
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

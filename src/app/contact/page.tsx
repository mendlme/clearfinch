"use client";

import { useState } from "react";

const subjects = [
  "General Inquiry",
  "Trading Applications",
  "Project Management",
  "Transformations",
  "AI Consulting",
  "Data Management",
  "Partnership Inquiry",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@clearfin.ch?subject=${encodeURIComponent(formData.subject || "Website Inquiry")}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nCompany: ${formData.company}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-night-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl md:text-5xl font-bold text-cream-white">Get in Touch</h1>
          <p className="mt-4 text-lg text-soft-lilac max-w-2xl">
            Whether you&apos;re looking for specialist talent, exploring AI opportunities, or planning
            a transformation — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-1.5">
                      Name <span className="text-brand-purple">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-lavender rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-1.5">
                      Email <span className="text-brand-purple">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-lavender rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-black mb-1.5">
                      Phone <span className="text-brand-black/40">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-lavender rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-brand-black mb-1.5">
                      Company <span className="text-brand-purple">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full border border-lavender rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-black mb-1.5">
                    Subject <span className="text-brand-purple">*</span>
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-lavender rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple bg-white"
                  >
                    <option value="">Select a subject...</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-1.5">
                    Message <span className="text-brand-purple">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-lavender rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand-purple text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-deep-purple transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2">
              <div className="bg-cream-white border border-lavender rounded-xl p-8">
                <h3 className="text-lg font-bold text-brand-black mb-6">Contact Details</h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-mid-purple font-semibold mb-1">Company</p>
                    <p className="text-sm text-brand-black">ClearFin GmbH</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-mid-purple font-semibold mb-1">Address</p>
                    <p className="text-sm text-brand-black">Blegistrasse 8<br />6340 Baar, Switzerland</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-mid-purple font-semibold mb-1">Phone</p>
                    <a href="tel:+41783178718" className="text-sm text-brand-purple hover:text-deep-purple">
                      +41 78 317 87 18
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-mid-purple font-semibold mb-1">Email</p>
                    <a href="mailto:info@clearfin.ch" className="text-sm text-brand-purple hover:text-deep-purple">
                      info@clearfin.ch
                    </a>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-lavender">
                  <p className="text-sm text-brand-black/70 leading-relaxed">
                    Prefer a quick call? Reach Markus directly at{" "}
                    <a href="tel:+41783178718" className="text-brand-purple hover:text-deep-purple font-medium">
                      +41 78 317 87 18
                    </a>
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 rounded-xl overflow-hidden border border-lavender h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.0!2d8.5252!3d47.1963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa7e0c0b2b4f3%3A0x0!2sBlegistrasse%208%2C%206340%20Baar!5e0!3m2!1sen!2sch!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ClearFin GmbH office location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

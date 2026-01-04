"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import MobileNav from "@/components/MobileNav";

const services = [
  {
    id: "individual",
    title: "Individual Tax Prep",
    shortDesc: "Expert preparation for individuals and families—accurate filings, maximum deductions.",
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    fullTitle: "Individual Tax Preparation",
    description: "Whether you're filing a simple return or have a more complex situation, we're here to help you navigate tax season with confidence. Our team takes the time to understand your unique circumstances and ensure you're taking advantage of every deduction and credit available to you.",
    features: [
      "Federal and state tax return preparation",
      "W-2 and 1099 income reporting",
      "Self-employment and freelance income",
      "Rental property income and expenses",
      "Investment and dividend income",
      "Education credits and deductions",
      "Retirement contribution optimization",
      "Year-round tax planning guidance",
    ],
    process: "We start with a thorough review of your documents, then prepare your return with careful attention to detail. Before filing, we walk you through everything so you understand your return completely.",
  },
  {
    id: "business",
    title: "Business Tax & Consulting",
    shortDesc: "Strategic tax planning and preparation for businesses of all sizes.",
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    fullTitle: "Business Tax Preparation & Consulting",
    description: "Running a business is complex enough without worrying about taxes. We provide comprehensive tax services that go beyond just filing—we help you plan strategically throughout the year to minimize your tax burden and keep more money in your business.",
    features: [
      "LLC, S-Corp, C-Corp, and Partnership returns",
      "Quarterly estimated tax calculations",
      "Business expense categorization guidance",
      "Entity structure optimization",
      "Sales tax compliance assistance",
      "Year-end tax planning strategies",
      "Multi-state filing coordination",
      "IRS correspondence and notices",
    ],
    process: "We work with you year-round, not just at tax time. Regular check-ins help us identify opportunities and ensure you're never caught off guard.",
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    shortDesc: "Monthly bookkeeping with clean categorization and actionable reports.",
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    fullTitle: "Professional Bookkeeping Services",
    description: "Good bookkeeping is the foundation of a healthy business. We provide reliable, consistent bookkeeping services that give you clear visibility into your finances—so you can make informed decisions and stay focused on growing your business.",
    features: [
      "Monthly bank and credit card reconciliation",
      "Expense categorization and tracking",
      "Accounts receivable management",
      "Accounts payable oversight",
      "Monthly financial statements",
      "Cash flow monitoring and reporting",
      "QuickBooks setup and training",
      "Clean books for tax time",
    ],
    process: "Each month, we reconcile your accounts, categorize transactions, and deliver clear financial reports. You'll always know where your business stands.",
  },
  {
    id: "nonprofit",
    title: "Non-Profit Tax Prep",
    shortDesc: "Specialized preparation for 501(c)(3) and other non-profit organizations.",
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    fullTitle: "Non-Profit Tax Preparation",
    description: "Non-profit organizations have unique tax requirements and compliance obligations. We understand the intricacies of tax-exempt status and help you maintain good standing while focusing on your mission.",
    features: [
      "Form 990 and 990-EZ preparation",
      "Tax-exempt status maintenance",
      "State registration and renewals",
      "Donor acknowledgment guidance",
      "Board financial reporting",
      "Grant compliance documentation",
      "Unrelated business income tracking",
      "Annual compliance calendar",
    ],
    process: "We stay on top of deadlines and requirements so you can focus on your mission. Our team ensures your organization remains in compliance year after year.",
  },
];

export default function ServicesPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && services.find(s => s.id === hash)) {
        setOpenSection(hash);
        setTimeout(() => {
          const element = document.getElementById(`detail-${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, []);

  const handleCardClick = (id: string) => {
    setOpenSection(openSection === id ? null : id);
    setTimeout(() => {
      const element = document.getElementById(`detail-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--ap-cream)" }}>
      <header className="sticky top-0 z-40 bg-[color:var(--ap-navy)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/brand/logo-side-cream.png"
              alt="Anchor Point Accounting"
              width={200}
              height={55}
              priority
            />
          </a>
          <MobileNav currentPage="services" />
          <nav className="hidden items-center gap-7 text-[13px] font-semibold uppercase tracking-wide md:flex">
            <a href="/" className="border-b-2 border-transparent pb-0.5 text-white/70 transition-colors hover:text-white">Home</a>
            <a href="/services" className="border-b-2 border-white pb-0.5 text-white">Services</a>
            <a href="/contact" className="border-b-2 border-transparent pb-0.5 text-white/70 transition-colors hover:text-white">Contact</a>
            <a
              href="https://anchorpointaccounting.taxdome.com"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-[color:var(--ap-burgundy)] px-4 py-2 normal-case tracking-normal text-white transition-colors hover:bg-[color:var(--ap-burgundy)]/90"
            >
              Client Portal
            </a>
          </nav>
        </div>
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[color:var(--ap-burnt-orange)] to-transparent opacity-70" />
      </header>

      <main>
        <section className="bg-[color:var(--ap-navy)] py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--ap-burnt-orange)]">
                What We Offer
              </p>
              <h1
                className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Services
              </h1>
              <p className="mt-4 text-base leading-7 text-[color:var(--ap-cream)]/75">
                Comprehensive accounting services for individuals, businesses, and non-profits. Click any service to learn more.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Cards */}
        <section className="-mt-8 pb-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleCardClick(service.id)}
                  className={`group flex flex-col rounded-xl border bg-white p-5 text-left shadow-sm transition-all hover:shadow-md ${
                    openSection === service.id 
                      ? "border-[color:var(--ap-burgundy)]/30 ring-2 ring-[color:var(--ap-burgundy)]/20" 
                      : "border-[color:var(--ap-navy)]/8"
                  }`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--ap-navy)]">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-[color:var(--ap-navy)]">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--ap-navy)]/60">
                    {service.shortDesc}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ap-burgundy)] group-hover:underline">
                    Learn more <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Detail Sections */}
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-[color:var(--ap-navy)]/10" />
              <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--ap-navy)]/40">In-depth details</p>
              <div className="h-px flex-1 bg-[color:var(--ap-navy)]/10" />
            </div>

            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  id={`detail-${service.id}`}
                  className="scroll-mt-24 rounded-xl border border-[color:var(--ap-navy)]/10 bg-[color:var(--ap-cream)]/30 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenSection(openSection === service.id ? null : service.id)}
                    className="flex w-full items-center gap-4 p-5 text-left transition-colors hover:bg-[color:var(--ap-cream)]/50"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color:var(--ap-navy)]">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[color:var(--ap-navy)]">{service.fullTitle}</h3>
                      <p className="mt-0.5 text-sm text-[color:var(--ap-navy)]/60">{service.shortDesc}</p>
                    </div>
                    <div className={`shrink-0 transition-transform duration-200 ${openSection === service.id ? "rotate-180" : ""}`}>
                      <svg className="h-5 w-5 text-[color:var(--ap-navy)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${
                    openSection === service.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <div className="overflow-hidden">
                      <div className="border-t border-[color:var(--ap-navy)]/10 bg-white p-6">
                        <p className="text-sm leading-relaxed text-[color:var(--ap-navy)]/70">
                          {service.description}
                        </p>

                        <div className="mt-6">
                          <h4 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--ap-navy)]/70">
                            What's Included
                          </h4>
                          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--ap-burgundy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm text-[color:var(--ap-navy)]/70">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6 rounded-lg bg-[color:var(--ap-cream)]/50 p-4">
                          <h4 className="text-sm font-semibold text-[color:var(--ap-navy)]">Our Process</h4>
                          <p className="mt-2 text-sm leading-relaxed text-[color:var(--ap-navy)]/70">
                            {service.process}
                          </p>
                        </div>

                        <div className="mt-6">
                          <a
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ap-burgundy)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--ap-burgundy)]/90"
                          >
                            Get Started
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--ap-burgundy)] py-24 md:py-28">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2
              className="text-2xl font-semibold text-white md:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/80">
              Schedule a consultation and let us help you achieve your financial goals.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex h-11 items-center justify-center rounded bg-white px-6 text-sm font-semibold text-[color:var(--ap-burgundy)] transition-colors hover:bg-white/90"
            >
              Schedule Consultation
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[color:var(--ap-navy)]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs text-[color:var(--ap-cream)]/50">
              © {new Date().getFullYear()} Anchor Point Accounting. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-[color:var(--ap-cream)]/50">
              <a className="hover:text-white" href="/privacy">Privacy Policy</a>
              <a className="hover:text-white" href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

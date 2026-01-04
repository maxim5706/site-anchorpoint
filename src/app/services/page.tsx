import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ap-cream)" }}>
      <header className="sticky top-0 z-40 border-b border-[color:var(--ap-navy)]/20 bg-[color:var(--ap-navy)] backdrop-blur">
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
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="/" className="text-white/80 hover:text-white">Home</a>
            <a href="/services" className="text-white">Services</a>
            <a href="/contact" className="text-white/80 hover:text-white">Contact</a>
            <a
              href="https://anchorpointaccounting.taxdome.com"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center justify-center rounded-full bg-[color:var(--ap-burgundy)] px-4 py-2 text-white transition-colors hover:bg-[color:var(--ap-burgundy)]/90"
            >
              Client Portal
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-[color:var(--ap-navy)] py-16 md:py-20">
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
                We offer a comprehensive range of accounting and financial services tailored to meet your specific needs.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div id="individual" className="scroll-mt-24 rounded-xl border border-[color:var(--ap-navy)]/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--ap-navy)]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Individual Tax Preparation</h2>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ap-navy)]/70">
                Expert tax preparation for individuals and families. We ensure accurate filings, maximize your deductions, and provide clear explanations so tax season feels manageable.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--ap-navy)]/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Federal and state returns
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Deduction optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Tax planning strategies
                </li>
              </ul>
            </div>

            <div id="business" className="scroll-mt-24 rounded-xl border border-[color:var(--ap-navy)]/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--ap-navy)]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Business Tax Preparation</h2>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ap-navy)]/70">
                Comprehensive tax services for businesses of all sizes. We focus on strategy, compliance, and year-round readiness to help your business thrive.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--ap-navy)]/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  All entity types (LLC, S-Corp, C-Corp)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Quarterly estimated taxes
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Tax strategy and planning
                </li>
              </ul>
            </div>

            <div id="bookkeeping" className="scroll-mt-24 rounded-xl border border-[color:var(--ap-navy)]/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--ap-navy)]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Bookkeeping</h2>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ap-navy)]/70">
                Professional bookkeeping to keep your finances organized. Reliable monthly bookkeeping with clean categorization and reporting you can actually use.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--ap-navy)]/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Monthly reconciliation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Financial statements
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  QuickBooks setup and support
                </li>
              </ul>
            </div>

            <div id="payroll" className="scroll-mt-24 rounded-xl border border-[color:var(--ap-navy)]/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--ap-navy)]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Payroll Services</h2>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ap-navy)]/70">
                Accurate and timely payroll processing so you can focus on running your business. We handle the details so your employees are paid correctly and on time.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--ap-navy)]/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Payroll processing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Payroll tax filings
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  W-2 and 1099 preparation
                </li>
              </ul>
            </div>

            <div id="nonprofit" className="scroll-mt-24 rounded-xl border border-[color:var(--ap-navy)]/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--ap-navy)]">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Non-Profit Tax Preparation</h2>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ap-navy)]/70">
                Specialized tax preparation for 501(c)(3) organizations and other non-profits. We understand the unique requirements and help you maintain compliance.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--ap-navy)]/70">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Form 990 preparation
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Compliance guidance
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--ap-burgundy)]" />
                  Tax-exempt status support
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--ap-burgundy)] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2
              className="text-3xl font-semibold text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/80">
              Schedule a consultation to discuss your needs and learn how we can help you achieve your financial goals.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-[color:var(--ap-burgundy)] transition-colors hover:bg-white/90"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[color:var(--ap-navy)]">
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

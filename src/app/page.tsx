import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import MobileNav from "@/components/MobileNav";

export default function Home() {
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

          <MobileNav currentPage="home" />

          <nav className="hidden items-center gap-7 text-[13px] font-semibold uppercase tracking-wide md:flex">
            <a
              href="/"
              className="border-b-2 border-white pb-0.5 text-white"
            >
              Home
            </a>
            <a
              href="/services"
              className="border-b-2 border-transparent pb-0.5 text-white/70 transition-colors hover:text-white"
            >
              Services
            </a>
            <a
              href="/contact"
              className="border-b-2 border-transparent pb-0.5 text-white/70 transition-colors hover:text-white"
            >
              Contact
            </a>
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
        <div className="h-1 bg-gradient-to-r from-transparent via-[color:var(--ap-burnt-orange)] to-transparent" />
      </header>

      <main>
        <section className="relative bg-[color:var(--ap-navy)]">
          {/* Large anchor watermark - using the circle logo (just anchor) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <Image
              src="/Image.png"
              alt=""
              width={600}
              height={600}
              className="absolute -right-16 top-1/2 h-[400px] w-[400px] -translate-y-1/2 object-contain opacity-[0.05] md:h-[550px] md:w-[550px]"
              aria-hidden="true"
            />
                      </div>

          <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-8 md:pb-14 md:pt-10">
            <div className="grid items-start gap-10 md:grid-cols-2">
              <div>
                <h1
                  className="text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Your Financial Anchor in a Sea of Uncertainty
                </h1>

                <p className="mt-5 max-w-md text-base leading-7 text-[color:var(--ap-cream)]/75">
                  Accurate bookkeeping and tax preparation, with proactive guidance you can rely on.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                  <div>
                    <p className="text-sm font-semibold text-white">Quick responses</p>
                    <p className="text-xs text-[color:var(--ap-cream)]/50">Communication</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Issues flagged early</p>
                    <p className="text-xs text-[color:var(--ap-cream)]/50">Proactive</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Audit-ready</p>
                    <p className="text-xs text-[color:var(--ap-cream)]/50">Organization</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Real support</p>
                    <p className="text-xs text-[color:var(--ap-cream)]/50">Human</p>
                  </div>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/brand/logo-circle-cream.png"
                      alt="Anchor Point Accounting"
                      width={140}
                      height={140}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--ap-cream)]/60">
                      Serving Goose Creek, SC & clients nationwide
                    </p>
                  </div>
                  <div className="mt-5 space-y-2">
                    <a
                      href="/contact"
                      className="flex h-11 w-full items-center justify-center rounded-full bg-[color:var(--ap-burgundy)] text-sm font-semibold text-white transition-colors hover:brightness-110"
                    >
                      Schedule Consultation
                    </a>
                    <a
                      href="/services"
                      className="flex h-11 w-full items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      View Services
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 md:hidden">
              <a
                href="/contact"
                className="flex h-11 items-center justify-center rounded-full bg-[color:var(--ap-burgundy)] text-sm font-semibold text-white"
              >
                Schedule Consultation
              </a>
              <a
                href="/services"
                className="flex h-11 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-18">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2
                  className="text-2xl font-semibold text-[color:var(--ap-navy)] md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Our Services
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-[color:var(--ap-navy)]/60">
                  Comprehensive accounting services for individuals, businesses, and non-profits.
                </p>
              </div>
              <a
                href="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ap-burgundy)] hover:underline md:mt-0"
              >
                View all services <span aria-hidden>→</span>
              </a>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <a
                href="/services#individual"
                className="group flex flex-col rounded-xl border border-[color:var(--ap-navy)]/8 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--ap-navy)]">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[color:var(--ap-navy)]">Individual Tax Prep</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--ap-navy)]/60">
                  Expert preparation for individuals and families—accurate filings, maximum deductions.
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ap-burgundy)] group-hover:underline">
                  Learn more <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </p>
              </a>

              <a
                href="/services#business"
                className="group flex flex-col rounded-xl border border-[color:var(--ap-navy)]/8 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--ap-navy)]">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[color:var(--ap-navy)]">Business Tax & Consulting</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--ap-navy)]/60">
                  Strategic tax planning and preparation for businesses of all sizes.
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ap-burgundy)] group-hover:underline">
                  Learn more <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </p>
              </a>

              <a
                href="/services#bookkeeping"
                className="group flex flex-col rounded-xl border border-[color:var(--ap-navy)]/8 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--ap-navy)]">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[color:var(--ap-navy)]">Bookkeeping</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--ap-navy)]/60">
                  Monthly bookkeeping with clean categorization and actionable reports.
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ap-burgundy)] group-hover:underline">
                  Learn more <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </p>
              </a>

              <a
                href="/services#nonprofit"
                className="group flex flex-col rounded-xl border border-[color:var(--ap-navy)]/8 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--ap-navy)]">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[color:var(--ap-navy)]">Non-Profit Tax Prep</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--ap-navy)]/60">
                  Specialized preparation for 501(c)(3) and other non-profit organizations.
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ap-burgundy)] group-hover:underline">
                  Learn more <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Meet the Team - Hidden for now
        <section className="border-y border-[color:var(--ap-navy)]/8 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 text-center">
              <h2
                className="text-2xl font-semibold text-[color:var(--ap-navy)] md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Meet the Team
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[color:var(--ap-navy)]/60">
                Experienced professionals dedicated to your financial success.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--ap-navy)]/15 bg-[color:var(--ap-navy)]/5">
                  <span className="text-sm font-semibold text-[color:var(--ap-navy)]">LH</span>
                </div>
                <p className="text-sm font-semibold text-[color:var(--ap-navy)]">Lori Hull</p>
                <div className="mx-auto my-2 h-px w-8 bg-[color:var(--ap-burgundy)]/30" />
                <p className="text-xs uppercase tracking-wide text-[color:var(--ap-navy)]/50">Owner</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--ap-navy)]/15 bg-[color:var(--ap-navy)]/5">
                  <span className="text-sm font-semibold text-[color:var(--ap-navy)]">JR</span>
                </div>
                <p className="text-sm font-semibold text-[color:var(--ap-navy)]">Jake Reed</p>
                <div className="mx-auto my-2 h-px w-8 bg-[color:var(--ap-burgundy)]/30" />
                <p className="text-xs uppercase tracking-wide text-[color:var(--ap-navy)]/50">Accounting Manager</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--ap-navy)]/15 bg-[color:var(--ap-navy)]/5">
                  <span className="text-sm font-semibold text-[color:var(--ap-navy)]">JC</span>
                </div>
                <p className="text-sm font-semibold text-[color:var(--ap-navy)]">Jimmy Cox</p>
                <div className="mx-auto my-2 h-px w-8 bg-[color:var(--ap-burgundy)]/30" />
                <p className="text-xs uppercase tracking-wide text-[color:var(--ap-navy)]/50">Accounting Manager</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--ap-navy)]/15 bg-[color:var(--ap-navy)]/5">
                  <span className="text-sm font-semibold text-[color:var(--ap-navy)]">NA</span>
                </div>
                <p className="text-sm font-semibold text-[color:var(--ap-navy)]">Nick Adams</p>
                <div className="mx-auto my-2 h-px w-8 bg-[color:var(--ap-burgundy)]/30" />
                <p className="text-xs uppercase tracking-wide text-[color:var(--ap-navy)]/50">Payroll Specialist</p>
              </div>
            </div>
          </div>
        </section>
        */}

        <section className="mt-4 border-t border-[color:var(--ap-navy)]/6 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <h2
                className="text-2xl font-semibold text-[color:var(--ap-navy)] md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Resources & Hours
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-sm text-[color:var(--ap-navy)]/50">
                Quick links and availability for your convenience.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-[color:var(--ap-navy)]/8 bg-white p-6 shadow-sm md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--ap-navy)]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[color:var(--ap-navy)]">Quick Resources</h3>
                    <p className="text-xs text-[color:var(--ap-navy)]/50">Helpful tax links</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <a
                    href="https://sa.www4.irs.gov/wmr/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-lg bg-[color:var(--ap-cream)]/50 px-4 py-3 transition-all hover:bg-[color:var(--ap-cream)]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm">
                      <svg className="h-4 w-4 text-[color:var(--ap-burgundy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <span className="flex-1 text-sm font-medium text-[color:var(--ap-navy)]">Where's My Refund?</span>
                    <svg className="h-4 w-4 text-[color:var(--ap-navy)]/30 transition-transform group-hover:translate-x-1 group-hover:text-[color:var(--ap-burgundy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="https://sa.www4.irs.gov/bola/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-lg bg-[color:var(--ap-cream)]/50 px-4 py-3 transition-all hover:bg-[color:var(--ap-cream)]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm">
                      <svg className="h-4 w-4 text-[color:var(--ap-burgundy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="flex-1 text-sm font-medium text-[color:var(--ap-navy)]">IRS Tax History</span>
                    <svg className="h-4 w-4 text-[color:var(--ap-navy)]/30 transition-transform group-hover:translate-x-1 group-hover:text-[color:var(--ap-burgundy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="https://anchorpointaccounting.taxdome.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-lg bg-[color:var(--ap-burgundy)] px-4 py-3 transition-all hover:bg-[color:var(--ap-burgundy)]/90"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/20">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="flex-1 text-sm font-semibold text-white">Client Portal</span>
                    <svg className="h-4 w-4 text-white/60 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-[color:var(--ap-navy)]/8 bg-white p-6 shadow-sm md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--ap-burnt-orange)]">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[color:var(--ap-navy)]">Office Hours</h3>
                    <p className="text-xs text-[color:var(--ap-navy)]/50">When we're available</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-[color:var(--ap-cream)]/50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm font-medium text-[color:var(--ap-navy)]">Monday – Friday</span>
                    </div>
                    <span className="text-sm font-semibold text-[color:var(--ap-navy)]">9 AM – 5 PM</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[color:var(--ap-cream)]/50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm font-medium text-[color:var(--ap-navy)]">Saturday</span>
                    </div>
                    <span className="text-sm font-semibold text-[color:var(--ap-navy)]">10 AM – 4 PM</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[color:var(--ap-navy)]/5 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-[color:var(--ap-navy)]/30" />
                      <span className="text-sm text-[color:var(--ap-navy)]/50">Sunday</span>
                    </div>
                    <span className="text-sm text-[color:var(--ap-navy)]/50">Closed</span>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-lg border border-[color:var(--ap-burgundy)]/20 bg-[color:var(--ap-burgundy)]/5 px-4 py-3">
                  <svg className="h-5 w-5 text-[color:var(--ap-burgundy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--ap-navy)]">Goose Creek, SC</p>
                    <p className="text-xs text-[color:var(--ap-navy)]/50">Serving clients nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

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
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <Image
                src="/brand/logo-side-cream.png"
                alt="Anchor Point Accounting"
                width={160}
                height={44}
              />
              <p className="mt-3 text-xs leading-relaxed text-[color:var(--ap-cream)]/50">
                Professional accounting services for individuals and businesses.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Navigate</p>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[color:var(--ap-cream)]/60">
                <li><a className="hover:text-white" href="/">Home</a></li>
                <li><a className="hover:text-white" href="/services">Services</a></li>
                <li><a className="hover:text-white" href="/contact">Contact</a></li>
                <li><a className="hover:text-white" href="https://anchorpointaccounting.taxdome.com" target="_blank" rel="noreferrer">Client Portal</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Services</p>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[color:var(--ap-cream)]/60">
                <li><a className="hover:text-white" href="/services">Individual Tax Prep</a></li>
                <li><a className="hover:text-white" href="/services">Business Tax & Consulting</a></li>
                <li><a className="hover:text-white" href="/services">Bookkeeping</a></li>
                <li><a className="hover:text-white" href="/services">Non-Profit Tax Prep</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Contact</p>
              <div className="mt-3 space-y-1">
                <p className="text-sm font-medium text-white">(843) 797-5185</p>
                <p className="text-sm text-[color:var(--ap-cream)]/60">Accounting@teamanchorpoint.com</p>
                <p className="mt-2 text-xs text-[color:var(--ap-cream)]/40">300 Red Bank Rd, Goose Creek, SC 29445</p>
                <p className="text-xs text-[color:var(--ap-cream)]/40">Mon–Fri 9–5 · Sat 10–4</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[color:var(--ap-cream)]/40 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Anchor Point Accounting</p>
            <div className="flex items-center gap-4">
              <a className="hover:text-white" href="/privacy">Privacy</a>
              <a className="hover:text-white" href="/terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

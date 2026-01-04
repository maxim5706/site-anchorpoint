import Image from "next/image";

export default function ContactPage() {
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
            <a href="/services" className="text-white/80 hover:text-white">Services</a>
            <a href="/contact" className="text-white">Contact</a>
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
                Get In Touch
              </p>
              <h1
                className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact Us
              </h1>
              <p className="mt-4 text-base leading-7 text-[color:var(--ap-cream)]/75">
                Ready to take control of your finances? Get in touch and let's discuss how we can help.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2
                className="text-2xl font-semibold text-[color:var(--ap-navy)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get in Touch
              </h2>
              <p className="mt-3 text-sm leading-7 text-[color:var(--ap-navy)]/70">
                We'd love to hear from you. Reach out using any of the methods below or fill out the form and we'll get back to you promptly.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--ap-navy)]/10">
                    <svg className="h-5 w-5 text-[color:var(--ap-navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--ap-navy)]">Phone</p>
                    <a className="mt-1 block text-sm text-[color:var(--ap-navy)]/70 hover:text-[color:var(--ap-navy)]" href="tel:+18437975185">
                      (843) 797-5185
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--ap-navy)]/10">
                    <svg className="h-5 w-5 text-[color:var(--ap-navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--ap-navy)]">Email</p>
                    <a className="mt-1 block text-sm text-[color:var(--ap-navy)]/70 hover:text-[color:var(--ap-navy)]" href="mailto:Accounting@teamanchorpoint.com">
                      Accounting@teamanchorpoint.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[color:var(--ap-navy)]/10">
                    <svg className="h-5 w-5 text-[color:var(--ap-navy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--ap-navy)]">Location</p>
                    <p className="mt-1 text-sm text-[color:var(--ap-navy)]/70">
                      Goose Creek, SC<br />
                      Serving clients nationwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-black/10 bg-[color:var(--ap-navy)] p-6">
                <p className="text-sm font-semibold text-white">Existing Client?</p>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Use the secure portal to share documents, track requests, and communicate with our team.
                </p>
                <a
                  href="https://anchorpointaccounting.taxdome.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[color:var(--ap-navy)] transition-colors hover:bg-white/90"
                >
                  Open Client Portal
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/60 p-6 md:p-8">
              <h2
                className="text-xl font-semibold text-[color:var(--ap-navy)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-[color:var(--ap-navy)]/70">
                Fill out the form below and we'll get back to you within 1 business day.
              </p>

              <form className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[color:var(--ap-navy)]">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="mt-1.5 block w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-[color:var(--ap-navy)] placeholder-[color:var(--ap-navy)]/40 focus:border-[color:var(--ap-navy)] focus:outline-none focus:ring-1 focus:ring-[color:var(--ap-navy)]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[color:var(--ap-navy)]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="mt-1.5 block w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-[color:var(--ap-navy)] placeholder-[color:var(--ap-navy)]/40 focus:border-[color:var(--ap-navy)] focus:outline-none focus:ring-1 focus:ring-[color:var(--ap-navy)]"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[color:var(--ap-navy)]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1.5 block w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-[color:var(--ap-navy)] placeholder-[color:var(--ap-navy)]/40 focus:border-[color:var(--ap-navy)] focus:outline-none focus:ring-1 focus:ring-[color:var(--ap-navy)]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[color:var(--ap-navy)]">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1.5 block w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-[color:var(--ap-navy)] placeholder-[color:var(--ap-navy)]/40 focus:border-[color:var(--ap-navy)] focus:outline-none focus:ring-1 focus:ring-[color:var(--ap-navy)]"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[color:var(--ap-navy)]">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-1.5 block w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-[color:var(--ap-navy)] focus:border-[color:var(--ap-navy)] focus:outline-none focus:ring-1 focus:ring-[color:var(--ap-navy)]"
                  >
                    <option value="">Select a service...</option>
                    <option value="individual-tax">Individual Tax Preparation</option>
                    <option value="business-tax">Business Tax Preparation</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="payroll">Payroll Services</option>
                    <option value="planning">Financial Planning</option>
                    <option value="consulting">Business Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[color:var(--ap-navy)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1.5 block w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-[color:var(--ap-navy)] placeholder-[color:var(--ap-navy)]/40 focus:border-[color:var(--ap-navy)] focus:outline-none focus:ring-1 focus:ring-[color:var(--ap-navy)]"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[color:var(--ap-burgundy)] text-sm font-semibold text-white transition-colors hover:brightness-110"
                >
                  Send Message
                </button>
              </form>
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

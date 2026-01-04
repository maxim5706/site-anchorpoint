import Image from "next/image";

export default function TermsPage() {
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
          <nav className="hidden items-center gap-7 text-[13px] font-semibold uppercase tracking-wide md:flex">
            <a href="/" className="border-b-2 border-transparent pb-0.5 text-white/70 transition-colors hover:text-white">Home</a>
            <a href="/services" className="border-b-2 border-transparent pb-0.5 text-white/70 transition-colors hover:text-white">Services</a>
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
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h1
          className="text-3xl font-semibold tracking-tight text-[color:var(--ap-navy)] md:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-[color:var(--ap-navy)]/60">
          Last updated: January 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[color:var(--ap-navy)]/80">
          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Agreement to Terms</h2>
            <p className="mt-3">
              By accessing or using the services provided by Anchor Point Accounting, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Services</h2>
            <p className="mt-3">
              Anchor Point Accounting provides accounting, tax preparation, bookkeeping, payroll, and financial advisory services. The specific services to be provided will be outlined in a separate engagement letter or agreement between you and Anchor Point Accounting.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Client Responsibilities</h2>
            <p className="mt-3">
              You agree to provide accurate and complete information necessary for us to perform our services. You are responsible for the accuracy of all information provided and for reviewing all work product delivered by Anchor Point Accounting. Timely provision of requested documents and information is essential for meeting filing deadlines.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Fees and Payment</h2>
            <p className="mt-3">
              Fees for services will be communicated prior to engagement and are due according to the terms specified in your engagement letter. We reserve the right to suspend services for accounts with outstanding balances. Additional fees may apply for expedited services or work outside the original scope.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Confidentiality</h2>
            <p className="mt-3">
              We maintain strict confidentiality of all client information in accordance with professional standards and applicable laws. Client information will not be disclosed to third parties without your consent, except as required by law or professional regulations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Limitation of Liability</h2>
            <p className="mt-3">
              Anchor Point Accounting's liability for any claim arising from our services shall be limited to the fees paid for those services. We are not liable for any indirect, incidental, or consequential damages. We do not guarantee specific tax outcomes or refund amounts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Termination</h2>
            <p className="mt-3">
              Either party may terminate the engagement at any time with written notice. Upon termination, you are responsible for payment of all services rendered up to the date of termination. We will provide reasonable assistance in transitioning your records to another provider.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Contact Us</h2>
            <p className="mt-3">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:Accounting@teamanchorpoint.com" className="text-[color:var(--ap-burgundy)] hover:underline">
                Accounting@teamanchorpoint.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:+18437975185" className="text-[color:var(--ap-burgundy)] hover:underline">
                (843) 797-5185
              </a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-[color:var(--ap-navy)]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs text-[color:var(--ap-cream)]/50">
              &copy; {new Date().getFullYear()} Anchor Point Accounting. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-[color:var(--ap-cream)]/50">
              <a className="hover:text-white" href="/privacy">Privacy Policy</a>
              <a className="text-white" href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

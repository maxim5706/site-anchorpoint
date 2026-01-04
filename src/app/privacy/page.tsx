import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function PrivacyPage() {
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
          <MobileNav />
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-[color:var(--ap-navy)]/60">
          Last updated: January 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[color:var(--ap-navy)]/80">
          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Information We Collect</h2>
            <p className="mt-3">
              Anchor Point Accounting collects information you provide directly to us, such as when you request services, fill out a form, or communicate with us. This may include your name, email address, phone number, mailing address, and financial information necessary to provide our accounting services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">How We Use Your Information</h2>
            <p className="mt-3">
              We use the information we collect to provide, maintain, and improve our services, process transactions, send you related information, respond to your comments and questions, and provide customer service. We may also use the information to send you promotional communications, such as information about services we offer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Information Sharing</h2>
            <p className="mt-3">
              We do not share, sell, or otherwise disclose your personal information for purposes other than those outlined in this Privacy Policy. We may share your information with third-party service providers who perform services on our behalf, such as payment processing and data analysis. We may also disclose your information if required by law or in response to valid requests by public authorities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Data Security</h2>
            <p className="mt-3">
              We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. All sensitive client information is encrypted and stored securely in compliance with industry standards.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Your Rights</h2>
            <p className="mt-3">
              You may access, update, or delete your personal information at any time by contacting us. You may also opt out of receiving promotional communications from us by following the instructions in those messages.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[color:var(--ap-navy)]">Contact Us</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please contact us at{" "}
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
              {new Date().getFullYear()} Anchor Point Accounting. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-[color:var(--ap-cream)]/50">
              <a className="text-white" href="/privacy">Privacy Policy</a>
              <a className="hover:text-white" href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

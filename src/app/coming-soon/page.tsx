import Image from "next/image";

export default function ComingSoon() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6"
      style={{ background: "var(--ap-navy)" }}
    >
      <div className="text-center">
        <Image
          src="/brand/logo-circle-cream.png"
          alt="Anchor Point Accounting"
          width={120}
          height={120}
          className="mx-auto mb-8"
        />
        <h1
          className="text-4xl font-semibold text-white md:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Coming Soon
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-white/60">
          We're putting the finishing touches on our new website. In the meantime, feel free to reach out.
        </p>
        
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:+18437975185"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ap-burgundy)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--ap-burgundy)]/90"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (843) 797-5185
          </a>
          <a
            href="mailto:Accounting@teamanchorpoint.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Us
          </a>
        </div>

        <div className="mt-12">
          <a
            href="https://anchorpointaccounting.taxdome.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/40 underline hover:text-white/60"
          >
            Existing clients: Access Client Portal →
          </a>
        </div>

        <p className="mt-16 text-xs text-white/30">
          Goose Creek, SC · Serving clients nationwide
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Calculator from "./calculator";

/**
 * UNLISTED PREVIEW PAGE
 * ─────────────────────────────────────────────────────────────────
 * Lives at an intentionally long, unguessable URL so the client can
 * test it without it being discoverable.
 *
 * - noindex, nofollow on this page
 * - NOT linked from the site nav, footer, homepage, or any other page
 * - NOT in any sitemap
 * - Filename slug doubles as a cache-buster — if you ever need to
 *   rotate the URL, just rename this folder to a new random suffix
 *   and tell the client the new link.
 *
 * Calculator logic and copy are a faithful reproduction of the
 * source HTML the client provided. Math and pricing are identical.
 * Only the visual layer was retooled to fit the AP design system
 * (cream / navy / burgundy, Garamond + Brandon Grotesque).
 */
export const metadata: Metadata = {
  title: "Bookkeeping Pricing Calculator — Preview",
  description:
    "Internal preview of the bookkeeping pricing calculator. Not yet linked from the site.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function PreviewPage() {
  return (
    <div className="bg-[color:var(--ap-cream)] min-h-screen">
      <MobileNav />

      <main>
        {/* Preview notice bar — only visible on this unlisted preview */}
        <div className="bg-[color:var(--ap-navy)] text-white">
          <div className="mx-auto max-w-3xl px-6 py-3 text-center text-xs">
            <span className="opacity-80">Preview — unlisted page.</span>{" "}
            <span className="opacity-60">
              Not yet linked from the site. Share the URL only with people you want to see it.
            </span>
          </div>
        </div>

        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <header className="mb-8 text-center">
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--ap-burgundy)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Anchor Point Accounting
              </p>
              <h1
                className="mt-3 text-3xl text-[color:var(--ap-navy)] md:text-4xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Bookkeeping Pricing Calculator
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[color:var(--ap-navy)]/70">
                Estimate your monthly bookkeeping engagement. Choose a base tier,
                add what fits your business, and see a clear total — no surprises.
              </p>
            </header>

            <Calculator />

            <p className="mt-8 text-center text-xs text-[color:var(--ap-navy)]/60">
              This calculator gives an estimate. Final pricing is confirmed during your
              consultation based on actual transaction volume and complexity.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import Image from "next/image";

export default function Footer() {
  return (
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
              <li><a className="hover:text-white" href="/services#individual">Individual Tax Prep</a></li>
              <li><a className="hover:text-white" href="/services#business">Business Tax & Consulting</a></li>
              <li><a className="hover:text-white" href="/services#bookkeeping">Bookkeeping</a></li>
              <li><a className="hover:text-white" href="/services#nonprofit">Non-Profit Tax Prep</a></li>
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
  );
}

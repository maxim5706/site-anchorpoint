"use client";

import { useState } from "react";

/**
 * Bookkeeping pricing calculator — React port of the source HTML.
 *
 * Pricing math is preserved exactly:
 *   total = tier price
 *         + (extra entities × $175)
 *         + (assets ? 175 : 0)
 *         + (payroll ? 95 : 0)
 *         + (salestax ? 85 : 0)
 *
 * Onboarding fee ($500), ACH requirement, and 30-day close deliverable
 * are shown as a footnote, not added to the monthly total.
 */

const TIERS = [
  {
    name: "Starter",
    price: 475,
    desc: "1 entity · up to 75 txn/mo · basic reconciliation",
  },
  {
    name: "Standard",
    price: 695,
    desc: "1 entity · up to 200 txn/mo · full reconciliation + P&L",
    badge: "Most common",
  },
  {
    name: "Growth",
    price: 995,
    desc: "1 entity · up to 400 txn/mo · full reporting suite",
  },
  {
    name: "Complex",
    price: 1395,
    desc: "1 entity · 400+ txn/mo · high-volume or complex",
  },
] as const;

const EXTRA_ENTITY_PRICE = 175;
const ASSETS_PRICE = 175;
const PAYROLL_PRICE = 95;
const SALESTAX_PRICE = 85;

function fmt(n: number) {
  return "$" + n.toLocaleString();
}

export default function Calculator() {
  const [tierIdx, setTierIdx] = useState(0);
  const [extraEntities, setExtraEntities] = useState(0);
  const [assets, setAssets] = useState(false);
  const [payroll, setPayroll] = useState(false);
  const [salestax, setSalestax] = useState(false);

  const tier = TIERS[tierIdx];
  const extraTotal = extraEntities * EXTRA_ENTITY_PRICE;
  const monthly =
    tier.price +
    extraTotal +
    (assets ? ASSETS_PRICE : 0) +
    (payroll ? PAYROLL_PRICE : 0) +
    (salestax ? SALESTAX_PRICE : 0);

  return (
    <div className="space-y-6">
      {/* ── Base tier ───────────────────────────────────────────── */}
      <section>
        <SectionLabel>Base tier</SectionLabel>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((t, i) => {
            const isActive = tierIdx === i;
            return (
              <button
                key={t.name}
                onClick={() => setTierIdx(i)}
                aria-pressed={isActive}
                className={`text-left rounded-lg bg-white p-4 transition-all ${
                  isActive
                    ? "border-2 border-[color:var(--ap-burgundy)] shadow-sm"
                    : "border border-[color:var(--ap-navy)]/15 hover:border-[color:var(--ap-navy)]/35"
                }`}
              >
                {"badge" in t && t.badge && (
                  <span className="mb-1.5 inline-block rounded bg-[color:var(--ap-burgundy)]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[color:var(--ap-burgundy)]">
                    {t.badge}
                  </span>
                )}
                <div className="text-sm font-semibold text-[color:var(--ap-navy)]">
                  {t.name}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-[color:var(--ap-navy)]/65">
                  {t.desc}
                </div>
                <div
                  className="mt-3 text-lg text-[color:var(--ap-navy)]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  {fmt(t.price)}
                  <span className="text-sm text-[color:var(--ap-navy)]/60">/mo</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Add-ons ─────────────────────────────────────────────── */}
      <section>
        <SectionLabel>Add-ons</SectionLabel>
        <div className="divide-y divide-[color:var(--ap-navy)]/10 rounded-lg border border-[color:var(--ap-navy)]/15 bg-white">
          <AddonCounter
            label="Additional entities / accounts"
            sub="Each extra QBO file beyond the first"
            unitPrice={EXTRA_ENTITY_PRICE}
            value={extraEntities}
            onChange={(v) => setExtraEntities(Math.max(0, v))}
          />
          <AddonToggle
            label="Fixed assets & depreciation"
            sub="Asset schedules, disposals, annual adjustments"
            price={ASSETS_PRICE}
            on={assets}
            onChange={setAssets}
          />
          <AddonToggle
            label="Payroll reconciliation"
            sub="Journal entries, liabilities, clearing accounts"
            price={PAYROLL_PRICE}
            on={payroll}
            onChange={setPayroll}
          />
          <AddonToggle
            label="Sales tax filing"
            sub="SC DOR monthly/quarterly filing"
            price={SALESTAX_PRICE}
            on={salestax}
            onChange={setSalestax}
          />
        </div>
      </section>

      {/* ── Quote summary ───────────────────────────────────────── */}
      <section>
        <SectionLabel>Quote summary</SectionLabel>
        <div className="rounded-lg bg-[color:var(--ap-navy)]/[0.04] p-5">
          <TotalRow label={`${tier.name} base`} amount={fmt(tier.price)} />
          {extraEntities > 0 && (
            <TotalRow
              label={`Additional entities (×${extraEntities})`}
              amount={fmt(extraTotal)}
            />
          )}
          {assets && (
            <TotalRow label="Fixed assets & depreciation" amount={fmt(ASSETS_PRICE)} />
          )}
          {payroll && <TotalRow label="Payroll reconciliation" amount={fmt(PAYROLL_PRICE)} />}
          {salestax && <TotalRow label="Sales tax filing" amount={fmt(SALESTAX_PRICE)} />}

          <div className="mt-3 flex items-baseline justify-between border-t border-[color:var(--ap-navy)]/15 pt-3">
            <span
              className="text-base text-[color:var(--ap-navy)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Monthly total
            </span>
            <span
              className="text-2xl text-[color:var(--ap-navy)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              {fmt(monthly)}
              <span className="text-base text-[color:var(--ap-navy)]/60">/mo</span>
            </span>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-[color:var(--ap-navy)]/65">
            + One-time onboarding fee: $500 (new clients) · ACH required · 30-day close
            deliverable
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="pt-2 text-center">
        <a
          href="/contact"
          className="inline-flex h-11 items-center justify-center rounded bg-[color:var(--ap-burgundy)] px-6 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--ap-burgundy)]/90"
        >
          Schedule a Consultation
        </a>
      </div>
    </div>
  );
}

/* ─── Helper components ───────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ap-navy)]/55"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {children}
    </p>
  );
}

function TotalRow({ label, amount }: { label: string; amount: string }) {
  return (
    <div className="flex items-baseline justify-between py-1 text-sm">
      <span className="text-[color:var(--ap-navy)]/75">{label}</span>
      <span className="text-[color:var(--ap-navy)]/85">{amount}</span>
    </div>
  );
}

function AddonCounter({
  label,
  sub,
  unitPrice,
  value,
  onChange,
}: {
  label: string;
  sub: string;
  unitPrice: number;
  value: number;
  onChange: (v: number) => void;
}) {
  const priceText = value === 0 ? "$0/mo" : `+$${value * unitPrice}/mo`;
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3.5">
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-[color:var(--ap-navy)]">{label}</div>
        <div className="mt-0.5 text-xs text-[color:var(--ap-navy)]/60">{sub}</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="min-w-[70px] text-right text-xs text-[color:var(--ap-navy)]/65">
          {priceText}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onChange(value - 1)}
            aria-label="Decrease"
            disabled={value === 0}
            className="flex h-7 w-7 items-center justify-center rounded border border-[color:var(--ap-navy)]/20 bg-white text-[color:var(--ap-navy)] transition-colors hover:bg-[color:var(--ap-navy)]/[0.04] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            −
          </button>
          <span
            aria-live="polite"
            className="min-w-[20px] text-center text-sm font-medium text-[color:var(--ap-navy)]"
          >
            {value}
          </span>
          <button
            onClick={() => onChange(value + 1)}
            aria-label="Increase"
            className="flex h-7 w-7 items-center justify-center rounded border border-[color:var(--ap-navy)]/20 bg-white text-[color:var(--ap-navy)] transition-colors hover:bg-[color:var(--ap-navy)]/[0.04]"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

function AddonToggle({
  label,
  sub,
  price,
  on,
  onChange,
}: {
  label: string;
  sub: string;
  price: number;
  on: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3.5">
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-[color:var(--ap-navy)]">{label}</div>
        <div className="mt-0.5 text-xs text-[color:var(--ap-navy)]/60">{sub}</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="min-w-[70px] text-right text-xs text-[color:var(--ap-navy)]/65">
          +${price}/mo
        </div>
        <button
          onClick={() => onChange(!on)}
          aria-pressed={on}
          aria-label={`${label}: ${on ? "on" : "off"}`}
          className={`relative h-[22px] w-10 flex-shrink-0 rounded-full transition-colors ${
            on
              ? "bg-[color:var(--ap-burgundy)]"
              : "bg-[color:var(--ap-navy)]/20"
          }`}
        >
          <span
            className={`absolute top-[3px] left-[3px] h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
              on ? "translate-x-[18px]" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}

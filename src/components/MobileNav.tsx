"use client";

import { useState, useEffect } from "react";

function getOfficeStatus() {
  // Use Eastern timezone
  const now = new Date();
  const eastern = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const day = eastern.getDay();
  const hour = eastern.getHours();
  
  // Monday-Friday: 9 AM - 5 PM ET
  if (day >= 1 && day <= 5) {
    return { weekdayOpen: hour >= 9 && hour < 17, saturdayOpen: false };
  }
  // Saturday: 10 AM - 4 PM ET
  if (day === 6) {
    return { weekdayOpen: false, saturdayOpen: hour >= 10 && hour < 16 };
  }
  return { weekdayOpen: false, saturdayOpen: false };
}

interface MobileNavProps {
  currentPage?: "home" | "services" | "contact";
}

export default function MobileNav({ currentPage = "home" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [officeStatus, setOfficeStatus] = useState({ weekdayOpen: false, saturdayOpen: false });

  useEffect(() => {
    setOfficeStatus(getOfficeStatus());
    const interval = setInterval(() => setOfficeStatus(getOfficeStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  const address = "300 Red Bank Rd, Goose Creek, SC 29445";
  const encodedAddress = encodeURIComponent(address);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 md:hidden"
        aria-label="Open menu"
      >
        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-[color:var(--ap-navy)] shadow-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-white/70">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20"
              aria-label="Close menu"
            >
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 space-y-1 px-4 py-6">
            <a
              href="/"
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                currentPage === "home"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </a>
            <a
              href="/services"
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                currentPage === "services"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Services
            </a>
            <a
              href="/contact"
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                currentPage === "contact"
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
            <div className="mt-2 border-t border-white/10 pt-3">
              <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-white/40">Quick Links</p>
              <a
                href="https://sa.www4.irs.gov/wmr/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                <svg className="h-5 w-5 text-[color:var(--ap-burnt-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Where's My Refund?
              </a>
              <a
                href="https://sa.www4.irs.gov/bola/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                <svg className="h-5 w-5 text-[color:var(--ap-burnt-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                IRS Tax History
              </a>
              <a
                href="https://anchorpointaccounting.taxdome.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-[color:var(--ap-burnt-orange)] transition-colors hover:bg-white/5"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Client Portal
              </a>
            </div>
          </nav>

          {/* Hours */}
          <div className="border-t border-white/10 px-4 py-4">
            <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-white/50">Office Hours</p>
            <div className="rounded-lg bg-white/5 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${officeStatus.weekdayOpen ? 'bg-green-500' : 'bg-white/30'}`} />
                  <span className="text-sm text-white/70">Mon – Fri</span>
                </div>
                <span className="text-sm font-medium text-white">9 AM – 5 PM</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${officeStatus.saturdayOpen ? 'bg-green-500' : 'bg-white/30'}`} />
                  <span className="text-sm text-white/70">Saturday</span>
                </div>
                <span className="text-sm font-medium text-white">10 AM – 4 PM</span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="text-sm text-white/50">Sunday</span>
                </div>
                <span className="text-sm font-medium text-white/50">Closed</span>
              </div>
            </div>
          </div>

          {/* Location & Maps */}
          <div className="border-t border-white/10 px-4 py-4">
            <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-white/50">Visit Us</p>
            <div className="rounded-lg bg-white/5 p-4">
              <p className="text-sm font-medium text-white">300 Red Bank Rd</p>
              <p className="text-sm text-white/60">Goose Creek, SC 29445</p>
              
              <div className="mt-4 flex gap-2">
                <a
                  href={`https://maps.google.com/?q=${encodedAddress}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white px-3 py-2.5 text-xs font-semibold text-[color:var(--ap-navy)] transition-colors hover:bg-white/90"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Google Maps
                </a>
                <a
                  href={`https://maps.apple.com/?address=${encodedAddress}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-white/10 px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Apple Maps
                </a>
              </div>
            </div>

            <a
              href="tel:+18437975185"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[color:var(--ap-burgundy)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--ap-burgundy)]/90"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (843) 797-5185
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";

interface ServiceAccordionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  defaultOpen?: boolean;
}

export default function ServiceAccordion({
  id,
  title,
  icon,
  description,
  features,
  defaultOpen = false,
}: ServiceAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    // Check if this accordion should be opened via URL hash
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash === id) {
        setIsOpen(true);
        // Scroll to the element after a short delay
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  }, [id]);

  return (
    <div
      id={id}
      className="scroll-mt-24 rounded-xl border border-[color:var(--ap-navy)]/10 bg-white overflow-hidden transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-5 p-6 text-left transition-colors hover:bg-[color:var(--ap-cream)]/50"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[color:var(--ap-navy)]">
          {icon}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-[color:var(--ap-navy)]">{title}</h2>
          <p className="mt-1 text-sm text-[color:var(--ap-navy)]/60">{description}</p>
        </div>
        <div className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          <svg className="h-6 w-6 text-[color:var(--ap-navy)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[color:var(--ap-navy)]/10 bg-[color:var(--ap-cream)]/30 px-6 pb-6 pt-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--ap-navy)]/70">
              What's Included
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--ap-burgundy)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[color:var(--ap-navy)]/70">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ap-burgundy)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--ap-burgundy)]/90"
              >
                Get Started
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

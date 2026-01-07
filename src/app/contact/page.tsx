"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setQuickLinksOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('_replyto') as string;
    const phone = formData.get('phone') as string;

    // Validate email OR phone required
    if (!email && !phone) {
      setFormError('Please provide either an email address or phone number.');
      setFormStatus('error');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xbldnbkp', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setFormError('Something went wrong. Please try again or call us directly.');
      setFormStatus('error');
    }
  };

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
          <MobileNav currentPage="contact" />
          <nav className="hidden items-center gap-7 text-[13px] font-semibold uppercase tracking-wide md:flex">
            <a href="/" className="border-b-2 border-transparent pb-0.5 text-white/70 transition-colors hover:text-white">Home</a>
            <a href="/services" className="border-b-2 border-transparent pb-0.5 text-white/70 transition-colors hover:text-white">Services</a>
            <a href="/contact" className="border-b-2 border-white pb-0.5 text-white">Contact</a>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setQuickLinksOpen(!quickLinksOpen)}
                className="flex items-center gap-1 border-b-2 border-transparent pb-0.5 text-white/70 transition-colors hover:text-white"
              >
                QUICK LINKS
                <svg className={`h-3 w-3 transition-transform ${quickLinksOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {quickLinksOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-white/10 bg-[color:var(--ap-navy)] p-2 shadow-xl">
                  <a href="https://sa.www4.irs.gov/wmr/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm normal-case tracking-normal text-white transition-colors hover:bg-white/10">
                    <svg className="h-4 w-4 text-[color:var(--ap-burnt-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    Where's My Refund?
                  </a>
                  <a href="https://sa.www4.irs.gov/bola/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm normal-case tracking-normal text-white transition-colors hover:bg-white/10">
                    <svg className="h-4 w-4 text-[color:var(--ap-burnt-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    IRS Tax History
                  </a>
                  <div className="my-1 border-t border-white/10" />
                  <a href="https://anchorpointaccounting.taxdome.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm normal-case tracking-normal text-[color:var(--ap-burnt-orange)] transition-colors hover:bg-white/10">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    Client Portal
                  </a>
                </div>
              )}
            </div>
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
        <section className="bg-[color:var(--ap-navy)] py-10 md:py-12">
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
                      300 Red Bank Rd<br />
                      Goose Creek, SC 29445
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-black/10">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=300+Red+Bank+Rd,+Goose+Creek,+SC+29445"
                  width="100%"
                  height="200"
                  style={{ border: 0, filter: 'grayscale(100%) sepia(30%) saturate(150%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Anchor Point Accounting Location"
                />
                <a
                  href="https://maps.google.com/?q=300+Red+Bank+Rd,+Goose+Creek,+SC+29445"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-white px-4 py-3 text-sm font-medium text-[color:var(--ap-navy)] transition-colors hover:bg-[color:var(--ap-cream)]"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-black/10 bg-[color:var(--ap-navy)] p-6">
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
              {formStatus === 'success' ? (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2
                    className="text-xl font-semibold text-[color:var(--ap-navy)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Thank You!
                  </h2>
                  <p className="mt-3 text-sm text-[color:var(--ap-navy)]/70">
                    Your message has been sent successfully. We'll get back to you within 1 business day.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--ap-burgundy)] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    className="text-xl font-semibold text-[color:var(--ap-navy)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-sm text-[color:var(--ap-navy)]/70">
                    Fill out the form below and we'll get back to you within 1 business day.
                  </p>

                  {formStatus === 'error' && formError && (
                    <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {formError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[color:var(--ap-navy)]">
                          First Name <span className="text-[color:var(--ap-burgundy)]">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
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

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[color:var(--ap-navy)]">
                          Email <span className="text-[color:var(--ap-burgundy)]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="_replyto"
                          className="mt-1.5 block w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-[color:var(--ap-navy)] placeholder-[color:var(--ap-navy)]/40 focus:border-[color:var(--ap-navy)] focus:outline-none focus:ring-1 focus:ring-[color:var(--ap-navy)]"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[color:var(--ap-navy)]">
                          Phone <span className="text-[color:var(--ap-burgundy)]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="mt-1.5 block w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-[color:var(--ap-navy)] placeholder-[color:var(--ap-navy)]/40 focus:border-[color:var(--ap-navy)] focus:outline-none focus:ring-1 focus:ring-[color:var(--ap-navy)]"
                          placeholder="(555) 555-5555"
                        />
                      </div>
                    </div>
                    <p className="!mt-1 text-xs text-[color:var(--ap-navy)]/50">* Email or Phone required</p>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-[color:var(--ap-navy)]">
                        Service Interest <span className="text-[color:var(--ap-burgundy)]">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="mt-1.5 block w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-[color:var(--ap-navy)] focus:border-[color:var(--ap-navy)] focus:outline-none focus:ring-1 focus:ring-[color:var(--ap-navy)]"
                      >
                        <option value="">Select a service...</option>
                        <option value="individual-tax">Individual Tax Preparation</option>
                        <option value="business-tax">Business Tax Preparation</option>
                        <option value="bookkeeping">Bookkeeping</option>
                        <option value="consulting">Business Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[color:var(--ap-navy)]">
                        Message <span className="text-[color:var(--ap-burgundy)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="mt-1.5 block w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-sm text-[color:var(--ap-navy)] placeholder-[color:var(--ap-navy)]/40 focus:border-[color:var(--ap-navy)] focus:outline-none focus:ring-1 focus:ring-[color:var(--ap-navy)]"
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-[color:var(--ap-burgundy)] text-sm font-semibold text-white transition-colors hover:brightness-110 disabled:opacity-70"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

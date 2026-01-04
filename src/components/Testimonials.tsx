"use client"

import { useState } from "react"

const testimonials = [
  {
    quote: "Managing multiple properties means complex taxes. Anchor Point handles it all seamlessly and has helped me structure my investments for maximum tax efficiency.",
    author: "Robert M.",
    title: "Real Estate Investor",
  },
  {
    quote: "As a self-employed professional, tax season used to stress me out. The team at Anchor Point makes it painless and always finds deductions I would have missed. Worth every penny!",
    author: "Emily Rodriguez",
    title: "Freelance Consultant",
  },
  {
    quote: "As a small business owner, I needed someone who could handle both my personal and business taxes. Anchor Point keeps everything organized and always finds deductions I would have missed.",
    author: "Jennifer K.",
    title: "Small Business Owner",
  },
  {
    quote: "The team at Anchor Point has been instrumental in helping our non-profit stay compliant. Their expertise with Form 990 and tax-exempt requirements is invaluable.",
    author: "Michael T.",
    title: "Non-Profit Director",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative overflow-hidden bg-[color:var(--ap-navy)] py-24 md:py-28">
      <div 
        className="wave-pattern absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23EFE8DF' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2
            className="text-2xl font-semibold text-[color:var(--ap-cream)] md:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[color:var(--ap-cream)]/50">
            Don't just take our word for it.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-lg bg-white px-8 py-12 md:px-12 md:py-14">
            <svg 
              className="absolute left-6 top-6 h-10 w-10 text-[color:var(--ap-burgundy)] opacity-15 md:h-12 md:w-12" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div className="relative z-10 text-center">
              <p
                className="text-lg leading-relaxed text-[color:var(--ap-navy)]/80 md:text-xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-[color:var(--ap-navy)]">
                  {testimonials[currentIndex].author}
                </p>
                <p className="mt-0.5 text-xs text-[color:var(--ap-navy)]/50">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-3">
            <button
              onClick={prevTestimonial}
              className="rounded-full p-2 text-white/40 transition-colors hover:text-white"
              aria-label="Previous testimonial"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center space-x-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "w-4 bg-[color:var(--ap-cream)]/60"
                      : "w-1.5 bg-white/20 hover:bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="rounded-full p-2 text-white/40 transition-colors hover:text-white"
              aria-label="Next testimonial"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

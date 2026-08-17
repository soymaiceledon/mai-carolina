"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t, i) => (
          <article
            key={i}
            className="w-[300px] shrink-0 snap-start border border-dorado/20 bg-negro p-7"
          >
            <Quote className="h-6 w-6 text-dorado/60" strokeWidth={1.5} />
            <p className={`mt-4 text-sm leading-relaxed ${t.pending ? "italic text-gris" : "text-gris-claro"}`}>
              {t.quote}
            </p>
            <div className="mt-6 border-t border-dorado/10 pt-4">
              <p className="text-sm font-medium text-marfil">{t.name}</p>
              <p className="text-xs text-gris">{t.role}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.1em] text-dorado">{t.serviceType}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => scroll(-1)}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-dorado/30 text-dorado hover:bg-dorado hover:text-negro"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => scroll(1)}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-dorado/30 text-dorado hover:bg-dorado hover:text-negro"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

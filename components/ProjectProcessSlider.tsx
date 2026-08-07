"use client";

import Image from "next/image";
import { useState } from "react";

type Slide = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectProcessSlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);

  const slide = slides[current];

  function goPrevious() {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  function goNext() {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="mx-auto max-w-[1500px] border-t border-neutral-200 px-6 py-20 md:px-10 lg:px-16">
      <div className="mb-10 max-w-4xl">
        <p className="mb-5 text-[13px] uppercase tracking-[0.4em] text-neutral-500">
            SEE THE TRANSFORMATION
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <p className="mb-1 text-[10px] uppercase tracking-[0em] text-neutral-400">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </p>

          <h3 className="text-2xl font-light tracking-[-0.03em]">
            {slide.title}
          </h3>

          <p className="mt-0 max-w-md text-[15px] leading-7 text-neutral-600">
            {slide.description}
          </p>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
          />

          <button
            type="button"
            onClick={goPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 border border-white/50 bg-white/80 px-4 py-3 text-xs uppercase tracking-[0.2em] backdrop-blur transition hover:bg-black hover:text-white"
          >
            ←
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 border border-white/50 bg-white/80 px-4 py-3 text-xs uppercase tracking-[0.2em] backdrop-blur transition hover:bg-black hover:text-white"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
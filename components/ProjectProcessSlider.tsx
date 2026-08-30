"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectProcessSlider({
  images,
}: {
  images: string[];
}) {
  const [current, setCurrent] = useState(0);

  function goPrevious() {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function goNext() {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className="mx-auto max-w-[1500px] border-t border-neutral-200 px-6 py-20 md:px-10 lg:px-16">
      <div className="mb-10 max-w-4xl">
        <p className="mb-5 text-[13px] uppercase tracking-[0.4em] text-neutral-500">
          Before the Transformation
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        {/* Static text */}
        <div>
          <h3 className="text-2xl font-light tracking-[-0.03em]">
            The Existing Space
          </h3>

          <p className="mt-4 max-w-md text-[15px] leading-7 text-neutral-600">
            Use the slider to explore the original condition of the space before the design intervention.
          </p>
        </div>

        {/* Changing image only */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <Image
            src={images[current]}
            alt="Penthouse before Jovata intervention"
            fill
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover"
          />

          <button
            type="button"
            onClick={goPrevious}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 border border-white/50 bg-white/80 px-4 py-3 text-xs"
          >
            ←
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 border border-white/50 bg-white/80 px-4 py-3 text-xs"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
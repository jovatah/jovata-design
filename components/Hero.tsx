"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const heroImages = [
  "/images/hero.jpg",
  "/images/project-12.jpg",
  "/images/project-4.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Image slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt="Jovata interiors hero image"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-center transition-all duration-[2200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
              index === currentImage
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-full scale-105 opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Premium readable overlay */}
      <div className="absolute inset-0 bg-black/32" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/18 to-white/10" />

      {/* Hero content */}
      <div className="relative z-10 flex h-screen items-center pt-14 md:pt-16 lg:pt-20 px-6 md:px-10 lg:px-16">
        <div className="max-w-[720px] text-white md:ml-10 lg:ml-12">
          
          {/* Small label now moved above headline */}
          <p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-white/80 md:text-[12px]">
            Jovata Interiors
          </p>

          <h1
            className={`${cormorant.className} max-w-[760px] text-[32px] font-medium leading-[0.9] tracking-[-0.1em] md:text-[56px] lg:text-[60px]`}
          >
            <span className="block whitespace-nowrap text-[#B19984]">
              Considered Spaces
            </span>
            <span className="block whitespace-nowrap">
              Homes That Feel Like You
            </span>
          </h1>

          <p className="mt-7 max-w-[500px] text-[14px] leading-[1.9] tracking-[0.1em] text-white/88 md:text-[15px]">
            Intelligently planned, we design calm, timeless interiors shaped by
            restraint and personality — creating homes that feel effortless to
            live in.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center bg-[#B19984] px-2 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#171717] transition-colors hover:bg-[#A88E77]"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
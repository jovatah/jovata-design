"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Journal", href: "/journal" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
  <nav className="sticky top-0 z-50 w-full bg-[#F7F5F2]/95 backdrop-blur-md text-[#171717]">
      {/* Desktop */}
      <div className="hidden h-[96px] items-center justify-between px-8 lg:flex lg:px-25">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/jovata-mark3.png"
            alt="Jovata logo"
            width={70}
            height={50}
            priority
          />

          <span className="text-[28px] font-medium tracking-[0.08em] text-[#74685E]">
            JOVATA
          </span>
        </Link>

        {/* Center Nav */}
        <div className="ml-20 flex items-center gap-8 text-[12px] uppercase tracking-[0.1em] text-[#8E8175]">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-[6px] transition-colors ${
                  active
                    ? "text-[#3A3A3A]"
                    : "text-[#3A3A3A] hover:text-[#B8ADA1]"
                }`}
              >
                {item.name}

                {active && (
                  <span className="absolute bottom-0 left-1/2 h-px w-8 -translate-x-1/2 bg-[#8A7B6E]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Links */}
        <div className="ml-8 flex h-[48px] items-center gap-3 rounded-sm bg-[#B19984] px-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#3A3A3A]">
          <a
            href="tel:+2349154234177"
            className="transition-colors hover:text-white"
          >
            Call
          </a>

          <span className="h-4 w-px bg-[#3A3A3A]" />

          <a
            href="https://instagram.com/jovatainteriors"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="grid h-[82px] grid-cols-3 items-center px-6 lg:hidden">
        <Link href="/" className="justify-self-start">
          <Image
            src="/images/jovata-mark3.png"
            alt="Jovata logo"
            width={46}
            height={34}
            priority
          />
        </Link>

        <Link
          href="/"
          className="justify-self-center text-[28px] font-medium tracking-[0.1em] text-[#74685E]"
        >
          JOVATA
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="justify-self-end"
          aria-label="Open menu"
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block h-px w-6 bg-[#7C6F64]" />
            <span className="block h-px w-6 bg-[#7C6F64]" />
            <span className="block h-px w-6 bg-[#7C6F64]" />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center gap-5 pb-8 text-xs uppercase tracking-[0.22em] text-[#8E8175] lg:hidden">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={active ? "text-[#3A3A3A]" : "text-[#3A3A3A]"}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="mt-3 flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-[#3A3A3A]">
            <a href="tel:+2349154234177">Call</a>
            <span className="h-4 w-px bg-[#7C6F64]" />
            <a
              href="https://instagram.com/jovatainteriors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
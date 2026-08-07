import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#E0D4C8] border-t border-[#E8E3DD]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-2xl tracking-[0.35em] text-neutral-800">
              JOVATA
            </h3>
            <p className="max-w-[240px] text-sm leading-7 text-neutral-700">
              Creating calm, timeless interiors shaped by
              restraint and personality — Homes that feel effortless.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-700">
              Explore
            </p>

            <div className="flex flex-col gap-2 text-sm text-neutral-700">
              <Link href="/" className="transition-colors hover:text-black">
                Home
              </Link>
              <Link
                href="/services"
                className="transition-colors hover:text-black"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="transition-colors hover:text-black"
              >
                Portfolio
              </Link>
              <Link
                href="/journal"
                className="transition-colors hover:text-black"
              >
                Journal
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-black"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-black"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-700">
              Contact
            </p>

            <div className="flex flex-col gap-4 text-sm text-neutral-700">
              {/* Email */}
              <a
                href="mailto:info@jovata.design"
                className="flex items-center gap-3 transition-colors hover:text-black"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span>info@jovata.design</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+2349154234177"
                className="flex items-center gap-3 transition-colors hover:text-black"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.77.68 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.25a2 2 0 0 1 2.11-.45c.83.33 1.7.56 2.6.68A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>+234 915 423 4177</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span>Warri, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-700">
              Social
            </p>

            <div className="flex items-center gap-4">
              {/* Instagram */}
              <Link
                href="https://instagram.com/jovatainteriors"
                target="_blank"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com/jovata.design"
                target="_blank"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
                </svg>
              </Link>

              {/* X */}
              <Link
                href="https://x.com/jovatainteriors"
                target="_blank"
                aria-label="X"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
              >
                <span className="text-[18px] font-medium">X</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        {/* Bottom line */}
      <div className="mt-12 border-t border-[#E8E3DD] pt-6">
        <div className="flex flex-col gap-4 text-neutral-600 md:flex-row md:items-center md:justify-between">

          {/* Copyright + legal links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p>© {new Date().getFullYear()} Jovata. All rights reserved.</p>

            <Link
              href="/privacy"
              className="text-sm transition-colors hover:text-[#B19984]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm transition-colors hover:text-[#B19984]"
            >
              Terms of Use
            </Link>

            <Link
              href="/cookies"
              className="transition-colors hover:text-[#B19984]"
            >
              Cookie Policy
            </Link>
          </div>

          {/* Brand statement */}
          <p>Designed for modern living.</p>

        </div>
      </div>
      </div>
    </footer>
  );
}
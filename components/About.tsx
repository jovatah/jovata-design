import Link from "next/link";

const ACCENT = "#B19984";

export default function About() {
  return (
    <section className="px-6 pt-24 pb-10 md:px-10 lg:px-16 border-t border-neutral-100">
      <div className="mx-auto max-w-[980px]">
        <Link
          href="/about"
          className="inline-block text-[13px] uppercase tracking-[0.32em] transition-colors"
          style={{ color: "#6B6B6B" }}
        >
          About Jovata
        </Link>

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <p className="max-w-[420px] text-[15px] leading-8 text-neutral-600 md:text-[16px]">
              Jovata is a contemporary interior design studio focused on creating
              calm, functional and enduring environments. We approach every
              project with a balance of aesthetics, usability and long-term
              relevance, designing spaces that feel considered rather than
              excessive.
            </p>

            <Link
              href="/about"
              className="group mt-6 inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-[#B19984]"
            >
              Learn more about Jovata
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div>
            <p className="max-w-[420px] text-[15px] leading-8 text-neutral-600 md:text-[16px]">
              Our approach is rooted in clarity, restraint and long-term thinking.
              We value spaces that feel effortless to live in, where every element
              has a purpose and contributes to a more considered way of living.
            </p>

            <Link
              href="/about"
              className="group mt-6 inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-[#B19984]"
            >
              Learn more about Jovata
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
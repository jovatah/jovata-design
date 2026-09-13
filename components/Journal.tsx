import Link from "next/link";

const ACCENT = "#B19984";
const SECTION_SHIFT = "lg:pl-8";

const articles = [
  {
    title: "The Value Of Restraint In Modern Interiors",
    href: "/journal/value-of-restraint",
  },
  {
    title: "Why Thoughtful Interiors Matter",
    href: "/journal/why-thoughtful-interiors-matter",
  },
];

export default function Journal() {
  return (
    <section
      className={`px-6 md:px-10 lg:px-16 pt-10 md:pt-24 pb-12 border-t border-neutral-100 ${SECTION_SHIFT}`}
    >
      <div className="max-w-[900px]">
        <Link
          href="/journal"
          className="inline-block uppercase tracking-[0.32em] text-[13px] transition-colors"
          style={{ color: "#6B6B6B" }}

        >
          Journal
        </Link>

        <div className="mt-14 max-w-3xl">
          <h2 className="text-3xl md:text-3xl font-light leading-[1.05] tracking-[-0.03em] text-[#171717]">
            Ideas behind the spaces we create.
          </h2>

          <p className="mt-5 max-w-2xl text-[15px] md:text-base leading-7 text-neutral-600">
            Thoughts, observations and design perspectives on interiors. Explore
            the articles below to read more about the thinking behind considered
            spaces.
            <span className="mx-3 text-neutral-300">|</span>
            <Link
              href="/journal"
              className="transition-colors hover:text-[#B19984]"
              style={{ color: `${ACCENT}99` }}
            >
              View Journal
            </Link>
          </p>
        </div>

        <div className="mt-1 max-w-1xl border-t border-neutral-50">
          {articles.map((article) => (
            <div
              key={article.title}
              className="border-b border-neutral-50 py-4"
            >
              <Link
                href={article.href}
                className="block text-[20px] md:text-[18px] font-light tracking-[-0.03em] text-neutral-700 transition-colors hover:text-[#B19984]"
              >
                {article.title}
              </Link>

              <Link
                href={article.href}
                className="mt-2 inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-[#B19984]"
              >
                Read Article
                <span className="ml-2" style={{ color: ACCENT }}>
                  …
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
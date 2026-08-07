import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const ACCENT = "#B19984";

const articles = [
  {
    title: "The value of restraint in modern interiors",
    href: "/journal/value-of-restraint",
    description:
      "Restraint gives modern interiors calm and depth. Instead of excess, refined spaces rely on proportion, purpose, material harmony and decisions that remain relevant over time.",
  },
  {
    title: "How to begin an interior project",
    href: "/journal/how-to-begin-an-interior-project",
    description:
      "A strong interior project begins with clarity. Before colours, finishes or furniture are selected, the space, lifestyle, function and project goals need to be properly understood.",
  },
  {
    title: "Smart living should feel invisible",
    href: "/journal/smart-living-should-feel-invisible",
    description:
      "Smart living works best when technology supports the space quietly. Lighting, climate, security and access should improve comfort and control without making the home feel technical or overwhelming.",
  },
  {
    title: "Why thoughtful interiors matter",
    href: "/journal/why-thoughtful-interiors-matter",
    description:
      "Thoughtful interiors go beyond appearance. They consider movement, comfort, proportion, lighting and material choices, helping a space feel calm, functional and relevant to everyday living.",
  },
];

export const metadata = {
  title: "Journal | Jovata Interiors",
  description: "Articles and perspectives on interiors, architecture and smart living.",
};

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="px-6 md:px-10 lg:px-16 pt-24 pb-16 border-t border-neutral-200">
        <div className="max-w-[900px] mx-auto text-center">
          <p
            className="uppercase tracking-[0.4em] text-[16px] mb-6"
            style={{ color: ACCENT }}
          >
            Journal
          </p>

          <h1 className="text-4xl md:text-4xl font-light leading-[1.05] tracking-[-0.01em] text-[#171717]">
            Jovata articles.
          </h1>

          <p className="mt-7 mx-auto max-w-2xl text-[15px] md:text-base leading-8 text-neutral-600">
            Jovata Articles is a growing collection of insights, observations and practical guides exploring the ideas,
             craftsmanship and design thinking behind exceptional interior environments. Through thoughtful commentary 
             and practical knowledge, the journal examines how well-designed spaces are conceived, refined and experienced.
             Created for homeowners, developers, architects, designers and anyone with an interest in thoughtfully designed 
             spaces, it offers lasting perspectives that encourage more informed decisions and a deeper appreciation of contemporary living.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-24">
        <div className="max-w-5xl mx-auto border-t border-neutral-200">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group grid grid-cols-1 md:grid-cols-[1fr_1.4fr_auto] gap-5 md:gap-10 py-8 border-b border-neutral-200"
            >
              <Link
                href={article.href}
                className="text-xl md:text-2xl font-light tracking-[-0.03em] text-neutral-700 transition-colors group-hover:text-[#B19984]"
              >
                {article.title}
              </Link>

              <p className="max-w-xl text-[14px] md:text-[15px] leading-7 text-neutral-500">
                {article.description}
              </p>

              <Link
                href={article.href}
                className="inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-[#B19984]"
              >
                Full article
                <span className="ml-2" style={{ color: ACCENT }}>
                  …
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-18 border-t border-neutral-200 text-center">
        <p
          className="uppercase tracking-[0.11em] text-[15px] mb-6"
          style={{ color: ACCENT }}
        >
          Contact Us
        </p>

        <h2 className="text-4xl md:text-3xl font-light leading-[1.05] tracking-[-0.01em] text-[#171717]">
          Continue the conversation.
        </h2>

        <p className="mt-6 mx-auto max-w-xl text-[15px] md:text-base leading-7 text-neutral-600">
          Ready to bring these principles into your home or project? We&apos;d be glad to work with you.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block border border-neutral-400 px-8 py-4 text-xs uppercase tracking-[0.18em] text-neutral-700 transition-colors hover:bg-black hover:text-white"
        >
          Book a Consultation
        </Link>
      </section>

      <section className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <Footer />
      </section>
    </main>
  );
}
import Link from "next/link";

const ACCENT = "#B19984";

const pillars = [
  "Interior Design & Spatial Planning",
  "Renovation & Interior Transformation",
  "Furniture, Finishes & Styling",
  "Smart Living Integration",
  "Design Coordination & Execution",
];

export default function Services() {
  return (
    <section className="px-6 pt-40 pb-26 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1050px]">
        {/* Intro */}
        <div className="text-center">
         <Link
          href="/services"
          className="inline-block text-[13px] uppercase tracking-[0.32em] transition-colors"
          style={{ color: "#6B6B6B" }}

        >
          Our Services
        </Link>


          <h2 className="mx-auto mt-8 max-w-[760px] text-4xl font-light leading-[1.04] tracking-[-0.045em] text-[#171717] md:text-4xl">
            Designing homes with purpose.
          
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[15px] leading-7 text-neutral-500 md:text-base">
            Every project begins with understanding how you live. We shape
            spaces that are functional, refined and deeply personal, balancing
            aesthetics with long-term comfort.
          </p>
        </div>

        {/* Service list */}
        <div className="mt-15 border-t border-neutral-200">
          {pillars.map((pillar) => (
            <Link
              key={pillar}
              href="/services"
              className="group flex items-center justify-between border-b border-neutral-100 py-4 text-[#171717] transition-colors hover:border-[#B19984] hover:text-[#B19984]"
            >
              <span className="text-[14px] font-light tracking-[-0.01em] md:text-[18px]">
                {pillar}
              </span>

              <span className="ml-6 text-xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="border border-[#B19984] px-8 py-4 text-[11px] uppercase tracking-[0.22em] text-[#171717] transition-colors hover:bg-[#B19984] hover:text-white"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
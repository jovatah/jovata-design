import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Services | Jovata Interiors",
  description:
    "Residential interior design, spatial planning, renovation, styling, smart living and project support by Jovata Interiors.",
};

const ACCENT = "#B19984";

const services = [
  {
    title: "Interior Design & Spatial Planning",
    image: "/images/project-18.jpg",
    text: "We shape the foundation of the home through layout, flow, proportion and visual direction. Every decision is planned around how the space will be lived in, seen and experienced.",
    bullets: [
      "Space planning & layout refinement",
      "Concept development & visualization",
      "Mood boards and material direction",
      "Furniture planning and spatial flow",
    ],
  },
  {
    title: "Renovation & Interior Transformation",
    image: "/images/project-17.jpg",
    text: "We rework existing spaces with restraint and clarity, improving comfort, finishes and usability while preserving warmth and identity.",
    bullets: [
      "Room redesign and upgrades",
      "Surface and finish selection",
      "Lighting and atmosphere improvement",
      "Interior transformation strategy",
    ],
  },
  {
    title: "Furniture, Finishes & Styling",
    image: "/images/project-16.jpg",
    text: "We curate the visible layers of the interior so every piece feels intentional, balanced and connected to the overall design language.",
    bullets: [
      "Furniture selection",
      "Lighting and decor guidance",
      "Soft furnishing coordination",
      "Final styling and detailing",
    ],
  },
  {
    title: "Smart Living Integration",
    image: "/images/project-14.jpg",
    text: "We introduce smart living where it improves comfort, control and daily experience, keeping technology quiet, useful and beautifully integrated.",
    bullets: [
      "Smart lighting planning",
      "Automation guidance",
      "Security and access control",
      "Comfort and convenience systems",
    ],
  },
  {
    title: "Design Coordination & Project Support",
    image: "/images/project-15.jpg",
    text: "We support the transition from design idea to finished space through coordination, supplier guidance and design oversight.",
    bullets: [
      "Supplier and artisan coordination",
      "Procurement guidance",
      "Site communication support",
      "Installation and finishing oversight",
    ],
  },
];

const approach = [
  {
    title: "Discovery",
    text: "We begin by understanding the client, the property, the lifestyle and the practical needs behind the brief. This gives every decision a clear reason and direction.",
  },
  {
    title: "Design Development",
    text: "We translate the brief into a refined interior direction through layouts, materials, furniture thinking, finishes and smart living considerations where useful.",
  },
  {
    title: "Execution Support",
    text: "We help coordinate the practical details of the project so the approved design remains clear, consistent and properly aligned during implementation.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#171717]">
      <Navbar />

      {/* Intro */}
      <section className="px-6 pt-28 pb-24 text-center md:px-10 lg:px-16">
        <p
          className="mb-5 text-[16px] uppercase tracking-[0.4em]"
          style={{ color: ACCENT }}
        >
          Services
        </p>

        <h1 className="mx-auto max-w-[760px] text-4xl font-light leading-[1.05] tracking-[-0.01em] md:text-4xl">
          Designing homes with purpose.
        </h1>

        <p className="mx-auto mt-6 max-w-[700px] text-base leading-7 text-neutral-600 md:text-lg">
          Every project begins with understanding how you live. We shape spaces
          that are functional, refined and deeply personal, balancing aesthetics
          with long-term comfort.
        </p>
      </section>

      {/* Service Pillars */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1180px] space-y-24">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={service.title}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <p
                    className="mb-5 text-[12px] uppercase tracking-[0.35em]"
                    style={{ color: ACCENT }}
                  >
                    0{index + 1}
                  </p>

                  <h2 className="max-w-[500px] text-3xl font-light leading-[1.08] tracking-[-0.03em] md:text-2xl">
                    {service.title}
                  </h2>

                  <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-neutral-600 md:text-base">
                    {service.text}
                  </p>

                  <ul className="mt-7 space-y-3 text-[16px] leading-7 text-neutral-600">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span style={{ color: ACCENT }}>•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`group relative h-[260px] overflow-hidden rounded-[18px] md:h-[340px] ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover brightness-[0.97] contrast-[0.98] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-neutral-200 px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1180px]">
          <p
            className="mb-14 text-[13px] uppercase tracking-[0.2em]"
            style={{ color: ACCENT }}
          >
            Our Approach
          </p>

          <div className="grid gap-12 md:grid-cols-3">
            {approach.map((item, index) => (
              <div key={item.title}>
                <p
                  className="mb-5 text-[12px] uppercase tracking-[0.3em]"
                  style={{ color: ACCENT }}
                >
                  0{index + 1}
                </p>

                <h3 className="text-2xl font-light tracking-[-0.02em]">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-[340px] text-[15px] leading-7 text-neutral-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 lg:px-16 py-18 border-t border-neutral-200 text-center">
        <p
          className="uppercase tracking-[0.11em] text-[15px] mb-6"
          style={{ color: ACCENT }}
        >
          Contact Us
        </p>

        <h2 className="text-4xl md:text-3xl font-light leading-[1.05] tracking-[-0.01em] text-[#171717]">
           Let&apos;s create a home that feels considered.
        </h2>

        <p className="mt-6 mx-auto max-w-xl text-[15px] md:text-base leading-7 text-neutral-600">
            Every project begins with a conversation about how you live, what matters to you, and how your space should support it.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block border border-neutral-400 px-8 py-4 text-xs uppercase tracking-[0.18em] text-neutral-700 transition-colors hover:bg-black hover:text-white"
        >
          Book a Consultation
        </Link>
      </section>

      

      <Footer />
    </main>
  );
}
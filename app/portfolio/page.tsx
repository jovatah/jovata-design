import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Aura Residence",
    slug: "aura-residence",
    category: "Residential Interiors",
    location: "",
    image: "/images/project-1.jpg",
  },

  {
    title: "Haven Residence",
    slug: "haven-residence",
    category: "Residential Interiors",
     location: "",
    image: "/images/project-1.jpg",
  },

  {
    title: "Terra Bedroom",
    slug: "terra-bedroom",
    category: "Bedroom Interiors",
     location: "",
    image: "/images/project-4.jpg",
  },

  {
    title: "Noir Kitchen",
    slug: "noir-kitchen",
    category: "Kitchen Interiors",
     location: "",
    image: "/images/project-7.jpg",
  },

  {
    title: "Linea Living",
    slug: "linea-living",
    category: "Living Room Interiors",
     location: "",
    image: "/images/project-3.jpg",
  },

  {
    title: "Forma Suite",
    slug: "forma-suite",
    category: "Hospitality Interiors",
     location: "",
    image: "/images/project-12.jpg",
  },
];

export const metadata = {
  title: "Portfolio | Jovata Interiors",
  description:
    "Selected interior projects exploring modern living and thoughtful design.",
};


export default function PortfolioPage() {
  const aura = projects.find((project) => project.slug === "aura-residence")!;
  const haven = projects.find((project) => project.slug === "haven-residence")!;
  const terra = projects.find((project) => project.slug === "terra-bedroom")!;
  const noir = projects.find((project) => project.slug === "noir-kitchen")!;
  const linea = projects.find((project) => project.slug === "linea-living")!;
  const forma = projects.find((project) => project.slug === "forma-suite")!;
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="px-6 md:px-10 lg:px-16 pt-28 pb-20 border-t border-neutral-200">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="mb-6 uppercase tracking-[0.4em] text-[16px]"
            style={{ color: "#B19984" }}
          >
            Portfolio
          </p>

          <h1 className="text-4xl md:text-4xl font-light leading-[1.05] tracking-[-0.01em] text-neutral-900">
            Selected projects.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] md:text-base leading-7 text-neutral-600">
            Browse a collection of residential, hospitality, commercial and bespoke interior projects designed with clarity, purpose and lasting value.
          </p>
        </div>
      </section>
        
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 pt-12 pb-24 border-t border-neutral-200">
        <div className="space-y-24">
          {/* Aura Residence - Featured */}
          <Link href="/portfolio/aura-residence" className="group block">
            <div className="relative aspect-[16/7] overflow-hidden bg-neutral-100">
              <Image
                src={aura.image}
                alt={aura.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="mt-6 flex items-end justify-between border-t border-neutral-200 pt-5">
              <div className="flex items-center gap-3">
                <h2 className="text-[20px] font-light tracking-[-0.03em]">
                  {aura.title}
                </h2>
                <span className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-black">
                   →
                </span>
              </div>
            </div>
          </Link>

          {/* Haven + Terra */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-5xl mx-auto">
            {[haven, terra].map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/2.4] overflow-hidden bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex items-end justify-between border-t border-neutral-200 pt-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-light tracking-[-0.03em]">
                      {project.title}
                    </h3>

                    <span className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-black">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Noir Kitchen - Center Large */}
          <Link href="/portfolio/noir-kitchen" className="group mx-auto block max-w-4xl">
            <div className="relative aspect-[16/8] overflow-hidden bg-neutral-100">
              <Image
                src={noir.image}
                alt={noir.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="mt-6 flex items-end justify-between border-t border-neutral-200 pt-5">
              <div className="flex items-center gap-3">
                <h3 className="text-[16px] font-light tracking-[-0.03em]">
                  {noir.title}
                </h3>

                <span className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-black">
                  →
                </span>
              </div>
            </div>
          </Link>

          {/* Linea + Forma */}
          <div className="grid grid-cols-1 gap-30 md:grid-cols-2 max-w-5xl mx-auto">
            {[linea, forma].map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/2.4] overflow-hidden bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex items-end justify-between border-t border-neutral-200 pt-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-[16px] font-light tracking-[-0.03em]">
                      {project.title}
                    </h3>

                    <span className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-black">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
    <section className="px-6 md:px-10 lg:px-16 py-20 border-t border-neutral-200">
        <div className="mx-auto max-w-3xl text-center">

          <p
            className="mb-6 uppercase tracking-[0.11em] text-[15px]"
            style={{ color: "#B19984" }}
          >
            Contact Us
          </p>

          <h2 className="text-4xl md:text-3xl font-light leading-[1.05] tracking-[0.01em] text-neutral-900">
            Inspired by what you&apos;ve seen?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-neutral-600">
            If our work reflects the kind of space you&apos;re imagining, we&apos;d be pleased to explore what&apos;s possible with you.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center justify-center border border-neutral-400 px-8 py-4 text-xs uppercase tracking-[0.18em] text-neutral-700 transition-colors hover:bg-black hover:text-white"
          >
            Book a Consultation
          </a>

        </div>
      </section>

      <section className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <Footer />
      </section>
    </main>
  );
}
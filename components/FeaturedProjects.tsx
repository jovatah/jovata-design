import Link from "next/link";
import Image from "next/image";

const ACCENT = "#B19984";

// Control this value if you want to move the whole section right/left
const SECTION_SHIFT = "lg:pl-8";

 const projects = [
  {
    title: "The Penthouse",
    slug: "the-penthouse",
    image: "/images/pent1-Living room2.jpg",
  },
  {
    title: "The verde room",
    slug: "the-verde-room",
    image: "/images/verde6.jpg",
  },
  {
    title: "Terra residence",
    slug: "terra-residence",
    image: "/images/t5.jpg",
  },
];


export default function FeaturedProjects() {
  return (
    <section className={`pt-20 pb-14 ${SECTION_SHIFT}`}>
      <div className="border-t border-neutral-100 mb-12" />

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <Link
          href="/portfolio"
          className="inline-block text-[13px] uppercase tracking-[0.32em] transition-colors"
          style={{ color: "#6B6B6B" }}
        >
          Featured Projects
        </Link>

        <Link
          href="/portfolio"
          className="group inline-flex items-center text-[10px] uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-[#B19984]"
        >
          View All Projects
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/portfolio/${project.slug}`}
            key={project.title}
            className="group block"
          >
            <div className="relative h-[240px] md:h-[280px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div className="mt-3">
              <h3 className="text-base font-light text-neutral-700 transition-colors group-hover:text-[#B19984]">
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
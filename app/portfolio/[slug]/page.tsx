import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectProcessSlider from "@/components/ProjectProcessSlider";


const projects = {
    "the-penthouse": {
        title: "The Penthouse",
        category: "Residential Interior",
        image: "/images/pent1-Living room2.jpg",

        gallery: [
          "/images/project-13.jpg",
          "/images/pent1-Living room1.jpg",
          "/images/pent1-Lounge1.jpg",
           "/images/pent1-Lounge2.jpg",
          "/images/pent1-bedroom1.jpg",
          "/images/pent1-bedroom2.jpg",
           "/images/pent1-bedroom3.jpg",
          "/images/pent1-bath1.jpg",
        ],

       beforeImages: [
          "/images/penthouseb2.jpg",
          "/images/penthouseb3.jpg",
          "/images/penthouseb1.jpg",
        ],

        location: "Nigeria",
        scope: "Full Interior Design",
        status: "Concept",
        year: "2026",

        story:
          "The Penthouse is a complete residential interior project developed across the anteroom, living room, lounge, master bedroom, bathroom and walk-in wardrobe. The design focuses on calm material choices, strong spatial planning, warm lighting and a restrained contemporary atmosphere.",

    },   
    
  "the-verde-room": {
      title: "The Verde Room",
      category: "Conceptual Residential Interior",
      image: "/images/verde6.jpg",

      gallery: [
        "/images/verde4.jpg",
        "/images/verde7.jpg",
        "/images/verde8.jpg",
        "/images/verde5.jpg",
      ],

      beforeImages: [
        "/images/verde10.jpg",
        "/images/verde9.jpg",
         "/images/verde3.jpg",
      ],

      location: "Warri, Nigeria",
      scope: "Bedroom Interior Design",
      status: "Concept",
      year: "2026",

      story:
        "The Verde Room is a compact bedroom concept developed around the challenge of creating comfort, storage and visual refinement within a limited footprint. A restrained neutral palette, warm timber, muted green accents and layered lighting establish a calm atmosphere, while integrated cabinetry and a dedicated media wall make efficient use of the available space. The design demonstrates how a small bedroom can feel considered, functional and visually composed without becoming overcrowded.",
    },

       
  "terra-residence": {
      title: "Terra Residence",
      category: "Conceptual Residential Interior",
      image: "/images/t5.jpg",

      gallery: [
        "/images/t26.jpg",
        "/images/t8.jpg",
        "/images/t32.jpg",
        "/images/t5.jpg",
        "/images/t24.jpg",
      ],

      beforeImages: [
        "/images/t1.jpg",
        "/images/t2.jpg",
        "/images/t3.jpg",
      ],

      location: "Warri, Nigeria",
      scope: "Open-Plan home",
      status: "Concept",
      year: "2026",

      story:
        "Terra Residence explores an open-plan home through warmth, proportion and quiet material continuity. The living, dining and kitchen spaces are conceived as distinct environments while remaining connected through a restrained palette of soft neutrals, natural timber, tactile upholstery and subtle stone textures.",
    },

   
  };

const projectOrder = [
  "the-penthouse",
  "the-verde-room",
  "terra-residence",
];

export async function generateStaticParams() {
  return projectOrder.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return {
      title: "Project Not Found | Jovata Interiors",
    };
  }

  const siteUrl = "https://jovata.design";
  const projectUrl = `${siteUrl}/portfolio/${slug}`;
  const imageUrl = `${siteUrl}${project.image}`;

  return {
    title: `${project.title} | Jovata`,
    description:
      project.story ||
      `Explore ${project.title}, a Jovata Interiors project focused on calm, functional and modern living.`,

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      title: `${project.title} | Jovata Interiors`,
      description:
        project.story ||
        `Explore ${project.title}, a Jovata Interiors project by Jovata.`,
      url: projectUrl,
      siteName: "Jovata",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Jovata Interiors`,
      description:
        project.story ||
        `Explore ${project.title}, a Jovata Interiors project by Jovata.`,
      images: [imageUrl],
    },
  };
}


export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];
  const currentIndex = projectOrder.indexOf(slug);
  const nextSlug =
   currentIndex === projectOrder.length - 1
    ? projectOrder[0]
    : projectOrder[currentIndex + 1];

  const nextProject = projects[nextSlug as keyof typeof projects];
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: project.story,
  image: `https://jovata.design${project.image}`,
  creator: {
    "@type": "Organization",
    name: "Jovata Interiors",
    url: "https://jovata.design",
  },
  about: [
    "Interior Design",
    "Modern Living",
    "Smart Living",
    "Residential Interiors",
  ],
  };

  if (!project) {
    return null;
  }

 return (
  <main className="min-h-screen bg-white text-black">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
    <Navbar />

    {/* Hero */}
    <section className="relative h-[620px] overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex h-full items-end px-6 pb-16 md:px-10 lg:px-16">
        <div className="max-w-4xl">

          <h3 className="text-4xl font-light leading-[1.0] tracking-[-0.04em] text-white md:text-3xl">
            {project.title}
          </h3>
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 border-t border-neutral-200 px-6 py-24 md:px-10 lg:grid-cols-[0.8fr_1.4fr] lg:px-16">
      <div>
        <p className="text-[13px] uppercase tracking-[0.4em] text-neutral-500">
          Project Overview
        </p>
      </div>

      <div className="max-w-3xl">
        <p className="text-[16px] font-light leading-9 tracking-[-0.02em] text-neutral-700 md:text-[16px] md:leading-[1.45]">
          {project.story}
        </p>
      </div>
    </section>

    {/* Facts */}
    <section className="mx-auto grid max-w-[1500px] grid-cols-2 gap-y-12 border-t border-neutral-100 px-6 py-1 text-[15px] md:grid-cols-4 md:px-10 lg:px-16">
      <div>
        <p className="mb-3 text-[12px] uppercase tracking-[0.3em] text-neutral-400">
          Location
        </p>
        <p>{project.location}</p>
      </div>

      <div>
        <p className="mb-3 text-[12px] uppercase tracking-[0.3em] text-neutral-400">
          Scope
        </p>
        <p>{project.scope}</p>
      </div>

      <div>
        <p className="mb-3 text-[12px] uppercase tracking-[0.3em] text-neutral-400">
          Status
        </p>
        <p>{project.status}</p>
      </div>

      <div>
        <p className="mb-3 text-[12px] uppercase tracking-[0.3em] text-neutral-400">
          Year
        </p>
        <p>{project.year}</p>
      </div>
    </section>

    {"beforeImages" in project && project.beforeImages && (
      <ProjectProcessSlider images={project.beforeImages} />
    )}

    {/* Gallery */}
    {"gallery" in project && project.gallery && (
      <section className="mx-auto max-w-[1500px] border-t border-neutral-200 px-6 py-24 md:px-10 lg:px-16">
        <div className="mb-14">
          <p className="text-[13px] uppercase tracking-[0.4em] text-neutral-500">
             Explore the completed design.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div
              key={image}
              className={`relative overflow-hidden bg-neutral-100 ${
                index === 0
                  ? "aspect-[21/7] md:col-span-2"
                  : "aspect-[16/9]"
              }`}
            >
              <Image
                src={image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    )}

    

    {/* CTA */}
    <section className="mx-auto flex max-w-[1500px] items-center justify-between border-t border-neutral-100 px-6 py-4 md:px-10 lg:px-16">
     <Link
        href={`/portfolio/${nextSlug}`}
        className="text-sm uppercase tracking-[0em] text-neutral-500 hover:text-black"
        >
        View Next Project → {nextProject.title}
     </Link>

      <Link
        href="/contact"
        className="border border-neutral-300 px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white"
      >
        Start a Project
      </Link>
    </section>

    <Footer />
  </main>
);
}
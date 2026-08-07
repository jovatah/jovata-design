import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About | Jovata Interiors",
  description:
    "Learn about Jovata's approach to calm, considered interior design and smart living.",
};

const ACCENT = "#B19984";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="px-6 md:px-10 lg:px-16 pt-24 pb-16 border-b border-neutral-200 text-center">
        <p
          className="uppercase tracking-[0.4em] text-[16px] mb-6"
          style={{ color: ACCENT }}
        >
          About Jovata
        </p>

        <h1 className="text-4xl md:text-4xl font-light leading-[1.05] tracking-[-0.01em] text-[#171717]">
          Designing calm, considered interiors.
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-[15px] md:text-base leading-7 text-neutral-600">
          Jovata is a contemporary interior design studio focused on creating
          refined spaces that feel functional, personal and enduring.
        </p>
      </section>

      <section className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 py-24 border-b border-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div>
            <h2 className="text-[1.2rem] font-light mb-6">Who We Are</h2>
            <p className="text-neutral-500 leading-7">
              Jovata is a contemporary interior design studio focused on creating calm, 
              functional and enduring environments. We approach every project with a balance of
              aesthetics, usability and long-term relevance, designing spaces that feel considered rather than excessive.


            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-light mb-6">What We Believe</h2>
            <p className="text-neutral-500 leading-7">
              We believe great interiors should improve the experience of everyday living. Design should
               solve problems, create clarity and support lifestyle needs. Technology, when integrated, 
               should feel intuitive and unobtrusive, enhancing comfort, convenience and control without overwhelming the space.

            </p>
          </div>

          <div>
            <h2 className="text-[1.2rem] font-light mb-6">Our Process</h2>
            <p className="text-neutral-500 leading-7">
              Every project begins with understanding the space, the people who use it and the goals behind it.
               From concept development and design planning to coordination and execution, we guide each stage with 
               precision and consistency to ensure the final environment reflects both vision and function.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-18 border-b border-neutral-200 text-center">
        <p
          className="uppercase tracking-[0.11em] text-[15px] mb-6"
          style={{ color: ACCENT }}
        >
          Contact Us
        </p>

        <h2 className="text-4xl md:text-3xl font-light leading-[1.05] tracking-[-0.01em] text-[#171717]">
          Start the conversation.
        </h2>

        <p className="mt-6 mx-auto max-w-xl text-[15px] md:text-base leading-7 text-neutral-600">
          Before we design the space, we understand the life within it.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block border border-neutral-400 px-8 py-4 text-xs uppercase tracking-[0.18em] text-neutral-700 hover:bg-black hover:text-white transition-colors"
        >
          Book a Consultation
        </Link>
      </section>

      <Footer />
    </main>
  );
}
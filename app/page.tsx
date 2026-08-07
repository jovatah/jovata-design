import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FeaturedProjects from "@/components/FeaturedProjects";
import Journal from "@/components/Journal";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <section className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="border-t border-neutral-200 mt-[-30] mb-10"></div>
        <Services />
        <About />
        <FeaturedProjects />
        <Journal />
        <ContactCTA />
        <Footer />
      </section>
    </main>
  );
}
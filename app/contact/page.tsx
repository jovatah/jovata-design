"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const ACCENT = "#B19984";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
  <main className="min-h-screen bg-white text-black">
    <Navbar />

    <section className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16 pt-35 pb-30 border-t border-neutral-200">
    <div className="mx-auto max-w-5xl text-center">
      <p
        className="mb-6 text-[16px] uppercase tracking-[0.04em]"
        style={{ color: ACCENT }}
      >
        Contact Us
      </p>

      <h1 className="text-4xl md:text-4xl font-light leading-[1.05] tracking-[-0.01em] text-[#171717]">
        Tell us about your project.
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-[15px] md:text-base leading-7 text-neutral-600">
        You can use any of our contact detail or form. Tell us about your space, your goals and how you want to live. We will respond with care, clarity and discretion.
      </p>
    </div>

    <div className="mx-auto mt-35 grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      {/* Contact details */}
      <div className="space-y-8 text-[20px] text-neutral-600">
        <div className="flex items-start gap-4">
          <span className="text-xl text-[#171717]">✉</span>
          <div>
            <p className="uppercase tracking-[0.22em] text-[12px]" style={{ color: ACCENT }}>
              Email
            </p>
            <a href="mailto:info@jovata.design" className="mt-1 block hover:text-[#B19984] transition-colors">
              info@jovata.design
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-xl text-[#171717]">☎</span>
          <div>
            <p className="uppercase tracking-[0.22em] text-[12px]" style={{ color: ACCENT }}>
              Call / WhatsApp
            </p>
            <a href="https://wa.me/2349154234177" target="_blank" className="mt-1 block hover:text-[#B19984] transition-colors">
              +234 915 423 4177
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-xl text-[#171717]">⌖</span>
          <div>
            <p className="uppercase tracking-[0.22em] text-[12px]" style={{ color: ACCENT }}>
              Location
            </p>
            <p className="mt-1">Warri, Nigeria</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-xl text-[#171717]">◷</span>
          <div>
            <p className="uppercase tracking-[0.22em] text-[12px]" style={{ color: ACCENT }}>
              Business Hours
            </p>
            <p className="mt-1">Monday - Friday, 8:00am - 5:00pm</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="md:-mt-10">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          setLoading(true);
          setSuccess(false);
          setError(false);

          const form = e.currentTarget;
          const formData = new FormData(form);

          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              phone: formData.get("phone"),
              projectType: formData.get("projectType"),
              message: formData.get("message"),
            }),
          });

          setLoading(false);

          if (!response.ok) {
            setError(true);
            return;
          }

          form.reset();
          setSuccess(true);
        }}
        className="border border-neutral-200 px-6 py-1 md:px-5 md:py-1"
      >
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          <div>
            <label className="block text-[12px] uppercase tracking-[0.22em] text-neutral-500">
              Full Name
            </label>
            <input name="name" type="text" required className="mt-3 w-full border-b border-neutral-300 bg-transparent py-2 outline-none focus:border-[#171717]" />
          </div>

          <div>
            <label className="block text-[12px] uppercase tracking-[0.22em] text-neutral-500">
              Email
            </label>
            <input name="email" type="email" required className="mt-3 w-full border-b border-neutral-300 bg-transparent py-2 outline-none focus:border-[#171717]" />
          </div>

          <div>
            <label className="block text-[12px] uppercase tracking-[0.22em] text-neutral-500">
              Phone
            </label>
            <input name="phone" type="tel" className="mt-3 w-full border-b border-neutral-300 bg-transparent py-2 outline-none focus:border-[#171717]" />
          </div>

          <div>
            <label className="block text-[12px] uppercase tracking-[0.22em] text-neutral-500">
              Project Type
            </label>
            <select name="projectType" className="mt-3 w-full border-b border-neutral-100 bg-transparent py-1 outline-none focus:border-[#5a5a5a]">
              <option>Interior Design</option>
              <option>Renovation</option>
              <option>Furniture & Styling</option>
              <option>Smart Living</option>
              <option>Full Project</option>
            </select>
          </div>
        </div>

        <div className="mt-1">
          <label className="block text-[12px] uppercase tracking-[0.22em] text-neutral-500">
            Message
          </label>
          <textarea name="message" required rows={6} className="mt-0 w-full resize-none border-b border-neutral-300 bg-transparent py-1 outline-none focus:border-[#171717]" />
        </div>

        <button className="mt-10 w-full border border-neutral-50 bg-transparent px-8 py-3 text-xs uppercase tracking-[0.22em] text-neutral-700 transition-all hover:border-[#B19984] hover:text-[#B19984]">
          {loading ? "Sending..." : "Send Enquiry"}
        </button>

        {success && (
          <p className="mt-6 text-[14px] text-neutral-600">
            Enquiry received. We will be in touch shortly. Thank you.
          </p>
        )}

        {error && (
          <p className="mt-6 text-[14px] text-red-600">
            Message not sent. Please try again or contact info@jovata.design directly.
          </p>
        )}
      </form>
      </div>
    </div>
  </section>

    <Footer />
  </main>
);
}
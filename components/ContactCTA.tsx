import Link from "next/link";

const ACCENT = "#B19984";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 border-t border-neutral-200">
      <div className="mx-auto max-w-[760px] text-center">
        <Link
          href="/contact"
          className="inline-block text-[13px] uppercase tracking-[0.32em] transition-colors"
          style={{ color: "#6B6B6B" }}

        >
          Contact
        </Link>

        <h2 className="mt-8 text-4xl font-light leading-[1.05] tracking-[0.10em] text-[#171717] md:text-4xl">
          Start your project.
        </h2>

        <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-8 text-neutral-500 md:text-[15px]">
          Whether you are building a new home, transforming an existing
          space or planning your next project, we&apos;d love to hear from you.
        </p>

        <div className="mt-7 flex justify-center">
          <Link
            href="/contact"
            className="border border-neutral-300 px-8 py-4 text-xs uppercase tracking-[0.18em] text-[#171717] transition-colors hover:border-[#B19984] hover:text-[#B19984]"
          >
            Contact Us
          </Link>
        </div>

        <p className="mt-6 text-[14px] leading-7 text-neutral-500">
          All enquiries are handled with care and confidentiality.
        </p>
      </div>
    </section>
  );
}
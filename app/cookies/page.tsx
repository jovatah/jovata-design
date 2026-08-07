import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cookie Policy | Jovata Interiors",
  description:
    "Learn how the Jovata Interiors website may use cookies and similar technologies.",
};

const ACCENT = "#B19984";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <Navbar />

      {/* Page Introduction */}
      <section className="border-b border-neutral-200 px-6 pb-20 pt-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="mb-6 text-[13px] uppercase tracking-[0.32em]"
            style={{ color: "#6B6B6B" }}

          >
            Cookies
          </p>

          <h1 className="text-4xl font-light tracking-[-0.04em] md:text-5xl">
            Cookie Policy
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-neutral-600 md:text-base">
            This Cookie Policy explains how the Jovata website may use cookies
            and similar technologies to support website functionality,
            performance and measurement.
          </p>

          <p className="mt-5 text-[13px] text-neutral-400">
            Last updated: August 2026
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl space-y-14">

          <PolicySection title="1. What Cookies Are">
            <p>
              Cookies are small text files that websites may place on your
              device when you visit them. They can help websites function
              correctly, remember certain preferences and provide information
              about how visitors interact with a website.
            </p>
          </PolicySection>

          <PolicySection title="2. How Jovata Uses Cookies">
            <p>
              The Jovata website may use cookies and similar technologies where
              necessary to support website operation, security, performance and
              user experience.
            </p>

            <p>
              We aim to use only technologies that are appropriate to the
              operation and improvement of the website.
            </p>
          </PolicySection>

          <PolicySection title="3. Essential Cookies">
            <p>
              Essential cookies are technologies required for core website
              functionality, security or technical operation. These may be used
              without being designed to track visitors for advertising
              purposes.
            </p>
          </PolicySection>

          <PolicySection title="4. Analytics Cookies">
            <p>
              Jovata may introduce analytics tools to better understand how
              visitors use the website, including which pages are visited and
              how users interact with the site.
            </p>

            <p>
              Where analytics technologies that require consent are introduced,
              appropriate consent controls will be implemented where required.
            </p>
          </PolicySection>

          <PolicySection title="5. Third-Party Technologies">
            <p>
              Some website features may connect to third-party services such as
              WhatsApp, hosting providers or analytics platforms.
            </p>

            <p>
              These services may use their own technologies when you interact
              with them. Their use of information is governed by their own
              privacy and cookie policies.
            </p>
          </PolicySection>

          <PolicySection title="6. Managing Cookies">
            <p>
              Most web browsers allow you to control or delete cookies through
              browser settings. Restricting certain cookies may affect how some
              website features operate.
            </p>
          </PolicySection>

          <PolicySection title="7. Changes to This Cookie Policy">
            <p>
              We may update this Cookie Policy when our website technologies or
              legal requirements change. Any revised version will be published
              on this page with an updated revision date.
            </p>
          </PolicySection>

          <PolicySection title="8. Contact Us">
            <p>
              If you have questions about this Cookie Policy, contact:
            </p>

            <div className="space-y-1">
              <p>Jovata</p>
              <p>Warri, Nigeria</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@jovata.design"
                  className="underline underline-offset-4 transition-colors hover:text-[#B19984]"
                >
                  info@jovata.design
                </a>
              </p>
            </div>
          </PolicySection>

        </div>
      </section>

      <Footer />
    </main>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-neutral-200 pt-8">
      <h2 className="mb-5 text-xl font-light tracking-[-0.02em]">
        {title}
      </h2>

      <div className="space-y-4 text-[15px] leading-7 text-neutral-600">
        {children}
      </div>
    </section>
  );
}
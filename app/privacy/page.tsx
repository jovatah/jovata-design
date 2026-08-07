import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Jovata Interiors",
  description:
    "Learn how Jovata Interiors collects, uses and protects information provided through our website.",
};

const ACCENT = "#B19984";

export default function PrivacyPage() {
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
            Privacy
          </p>

          <h1 className="text-4xl font-light tracking-[-0.04em] md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-neutral-600 md:text-base">
            This Privacy Policy explains how Jovata collects, uses and protects
            information provided when you visit our website, make an enquiry or
            communicate with us through our digital services.
          </p>

          <p className="mt-5 text-[13px] text-neutral-400">
            Last updated: August 2026
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl space-y-14">

          <PolicySection title="1. Information We Collect">
            <p>
              When you contact Jovata through our website, we may collect
              information that you voluntarily provide, including your full
              name, email address, phone number, project type and the details
              contained in your message or enquiry.
            </p>

            <p>
              Basic technical information may also be processed by our website
              infrastructure and hosting providers where necessary for website
              operation, security and performance.
            </p>
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            <p>Information provided to Jovata may be used to:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to enquiries and consultation requests.</li>
              <li>Understand your project requirements.</li>
              <li>Communicate with you about our services.</li>
              <li>Prepare for potential design engagements.</li>
              <li>Operate, maintain and improve our website and services.</li>
              <li>Protect the security and integrity of our digital systems.</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. How We Share Information">
            <p>
              Jovata does not sell or rent personal information submitted
              through our website.
            </p>

            <p>
              Information may be processed by trusted service providers where
              necessary to operate our website, deliver enquiries, provide
              communications or maintain our digital infrastructure. These
              providers process information only as required to provide their
              respective services.
            </p>
          </PolicySection>

          <PolicySection title="4. Third-Party Services">
            <p>
              Our website may contain links to third-party platforms, including
              WhatsApp and social media services. When you choose to access
              these platforms, your use of them is governed by the privacy
              practices and terms of the respective provider.
            </p>

            <p>
              Jovata is not responsible for the privacy practices of external
              websites or services.
            </p>
          </PolicySection>

          <PolicySection title="5. Cookies and Analytics">
            <p>
              Our website may use essential technologies required for normal
              website functionality, security and performance.
            </p>

            <p>
              If analytics or similar measurement technologies are introduced,
              this Privacy Policy will be updated where appropriate to explain
              how those technologies are used.
            </p>
          </PolicySection>

          <PolicySection title="6. Data Retention">
            <p>
              Personal information is retained only for as long as reasonably
              necessary for the purpose for which it was collected, including
              responding to enquiries, maintaining appropriate business records
              and meeting applicable legal or regulatory obligations.
            </p>
          </PolicySection>

          <PolicySection title="7. Data Security">
            <p>
              Jovata takes reasonable administrative and technical measures to
              protect personal information against unauthorized access, loss,
              misuse, alteration or disclosure. However, no method of
              transmitting or storing information electronically can be
              guaranteed to be completely secure.
            </p>
          </PolicySection>

          <PolicySection title="8. Your Privacy Rights">
            <p>
              Subject to applicable data protection law, you may have rights
              concerning your personal information, including requesting access
              to, correction of or deletion of information held about you, and
              objecting to or restricting certain forms of processing where
              applicable.
            </p>

            <p>
              Requests concerning personal information can be submitted using
              the contact information provided below.
            </p>
          </PolicySection>

          <PolicySection title="9. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes to our website, services, technology or legal
              requirements. The latest version will be published on this page
              with an updated revision date.
            </p>
          </PolicySection>

          <PolicySection title="10. Contact Us">
            <p>
              For questions or requests concerning this Privacy Policy or the
              handling of your personal information, contact:
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
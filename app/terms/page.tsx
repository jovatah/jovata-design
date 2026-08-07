import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Use | Jovata Interiors",
  description:
    "Terms governing the use of the Jovata Interiors website, its content and digital services.",
};

const ACCENT = "#B19984";

export default function TermsPage() {
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
            Terms
          </p>

          <h1 className="text-4xl font-light tracking-[-0.04em] md:text-5xl">
            Terms of Use
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-neutral-600 md:text-base">
            These Terms of Use govern your access to and use of the Jovata
            website, including its content, information and digital services.
          </p>

          <p className="mt-5 text-[13px] text-neutral-400">
            Last updated: August 2026
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl space-y-14">
          <TermsSection title="1. Acceptance of These Terms">
            <p>
              By accessing or using the Jovata website, you agree to these Terms
              of Use. If you do not agree with these terms, you should not use
              the website.
            </p>
          </TermsSection>

          <TermsSection title="2. About This Website">
            <p>
              This website provides information about Jovata, our interior
              design services, portfolio, journal content and ways to contact
              us regarding potential projects.
            </p>

            <p>
              Information displayed on the website is provided for general
              information and enquiry purposes and does not by itself create a
              client relationship, design agreement or contractual obligation.
            </p>
          </TermsSection>

          <TermsSection title="3. Intellectual Property">
            <p>
              Unless otherwise stated, the content on this website, including
              text, branding, graphics, layouts, project presentations,
              photographs, visual concepts and other creative material, is owned
              by or licensed to Jovata and is protected by applicable
              intellectual property laws.
            </p>

            <p>
              Website content may not be reproduced, copied, modified,
              distributed, republished or used commercially without prior
              written permission from Jovata or the relevant rights holder.
            </p>
          </TermsSection>

          <TermsSection title="4. Permitted Use">
            <p>
              You may access and view the website for personal, informational
              and legitimate business enquiry purposes.
            </p>

            <p>You must not use the website in a way that:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Violates applicable law or regulation.</li>
              <li>Interferes with website security or normal operation.</li>
              <li>Attempts unauthorized access to systems or information.</li>
              <li>Misuses, copies or exploits Jovata&apos;s creative content.</li>
              <li>Misrepresents an association with Jovata.</li>
            </ul>
          </TermsSection>

          <TermsSection title="5. Project Information and Enquiries">
            <p>
              Portfolio descriptions, service information, journal content and
              other materials on this website are provided as general guidance
              and examples of our design approach.
            </p>

            <p>
              Project scope, fees, timelines, deliverables and other commercial
              terms are determined separately through consultation and written
              agreement.
            </p>
          </TermsSection>

          <TermsSection title="6. Third-Party Links">
            <p>
              The website may contain links to third-party services or
              platforms, including WhatsApp and social media websites.
            </p>

            <p>
              Jovata does not control these external services and is not
              responsible for their availability, content, security, terms or
              privacy practices.
            </p>
          </TermsSection>

          <TermsSection title="7. Accuracy and Availability">
            <p>
              We aim to keep website information accurate and current, but we do
              not guarantee that all content will always be complete,
              error-free or continuously available.
            </p>

            <p>
              Jovata may update, modify, suspend or remove website content or
              functionality at any time where reasonably necessary.
            </p>
          </TermsSection>

          <TermsSection title="8. Limitation of Liability">
            <p>
              To the extent permitted by applicable law, Jovata will not be
              liable for indirect, incidental or consequential loss arising
              solely from the use of, or inability to use, this website or
              reliance on general information published through it.
            </p>

            <p>
              Nothing in these Terms excludes or limits any liability that
              cannot legally be excluded or limited.
            </p>
          </TermsSection>

          <TermsSection title="9. Changes to These Terms">
            <p>
              We may revise these Terms of Use from time to time to reflect
              changes to our website, services or legal requirements. Updated
              terms will be published on this page with a revised update date.
            </p>
          </TermsSection>

          <TermsSection title="10. Governing Law">
            <p>
              These Terms of Use are governed by the applicable laws of the
              Federal Republic of Nigeria, subject to any mandatory legal rights
              that may apply in another jurisdiction.
            </p>
          </TermsSection>

          <TermsSection title="11. Contact Us">
            <p>
              If you have questions about these Terms of Use, contact:
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
          </TermsSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function TermsSection({
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
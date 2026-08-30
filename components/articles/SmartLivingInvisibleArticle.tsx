import Image from "next/image";
import Link from "next/link";

export default function SmartLivingArticle() {
  return (
    <main className="min-h-screen bg-white text-black">

      <article>
        <section className="relative h-[620px] overflow-hidden">
          <Image
            src="/images/project-14.jpg"
            alt="Smart living interior"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 flex h-full items-end px-6 pb-16 md:px-10 lg:px-16">
            <div className="max-w-5xl text-white">

              <h1 className="max-w-4xl text-5xl font-light leading-[1.02] tracking-[-0.04em] md:text-3xl">
                Smart living should feel invisible
              </h1>
            </div>
          </div>
        </section>

        <section className="px-6 py-25 md:px-10 lg:px-40">
          <div className="max-w-3xl space-y-2 text-[16px] leading-5 text-neutral-600">
            <p>
              Most people imagine smart homes as spaces filled with devices,
              screens and visible technology.
            </p>

            <p>
              But the most successful smart living environments are often the
              quietest.
            </p>

            <p>
              Technology should not dominate the experience of a home. It should
              support comfort, security, lighting, climate and convenience in a
              way that feels natural, simple and almost unnoticed.
            </p>

            <p>
              Smart living is not about filling a space with gadgets.
            </p>

            <p>
              It is about removing friction from everyday life.
            </p>

            <h2 className="pt-7 text-2xl font-light tracking-[-0.03em] text-black">
              Technology Should Serve The Space
            </h2>

            <p>
              Technology becomes valuable when it supports the way people
              already live.
            </p>

            <p>Lighting should respond naturally.</p>

            <p>Climate should remain comfortable.</p>

            <p>Security should feel reassuring.</p>

            <p>Control should be simple.</p>

            <p>
              The purpose of smart living is not to make a home feel technical.
              It is to make daily living feel more effortless.
            </p>

            <p>
              When technology is properly integrated, people notice the comfort
              before they notice the system behind it.
            </p>

            <h2 className="pt-7 text-2xl font-light tracking-[-0.03em] text-black">
              The Best Systems Are Quiet
            </h2>

            <p>
              A smart home should not constantly ask for attention.
            </p>

            <p>
              Too many apps, switches, screens and commands can make a space
              feel complicated rather than intelligent.
            </p>

            <p>
              The best systems operate quietly in the background.
            </p>

            <p>They reduce effort.</p>

            <p>They anticipate needs.</p>

            <p>They create consistency.</p>

            <p>
              They allow the home to feel calm rather than controlled by
              technology.
            </p>

            <p>
              True intelligence is not always visible.
            </p>

            <h2 className="pt-7 text-2xl font-light tracking-[-0.03em] text-black">
              Design And Technology Must Work Together
            </h2>

            <p>
              Smart living should never compete with the interior design.
            </p>

            <p>
              Devices, controls, wiring and sensors should be considered as part
              of the overall design language of the space.
            </p>

            <p>
              Poorly placed technology can interrupt the visual calm of an
              interior.
            </p>

            <p>
              Thoughtful integration allows technology to disappear into the
              architecture, furniture, lighting and daily rhythm of the home.
            </p>

            <p>
              In a refined interior, technology should feel intentional rather
              than added later.
            </p>

            <h2 className="pt-7 text-2xl font-light tracking-[-0.03em] text-black">
              Comfort Is The Real Luxury
            </h2>

            <p>
              Luxury is not only about materials or finishes.
            </p>

            <p>
              It is also about ease.
            </p>

            <p>
              A home that adjusts lighting naturally, maintains comfort,
              supports security and simplifies daily routines offers a deeper
              kind of value.
            </p>

            <p>
              The most advanced spaces are not necessarily the ones with the
              most visible technology.
            </p>

            <p>
              They are the ones that feel easier to live in.
            </p>

            <p>
              Smart living should improve the experience of the home without
              making the home feel mechanical.
            </p>

            <h2 className="pt-7 text-2xl font-light tracking-[-0.03em] text-black">
              Simplicity Builds Trust
            </h2>

            <p>
              People trust systems they understand.
            </p>

            <p>
              If a smart home feels confusing, unreliable or difficult to
              control, it loses its value quickly.
            </p>

            <p>
              A good smart living system should be intuitive.
            </p>

            <p>It should be easy to operate.</p>

            <p>It should work consistently.</p>

            <p>It should allow manual control when needed.</p>

            <p>
              The user should always feel in control of the home, not dependent
              on the technology.
            </p>

            <h2 className="pt-7 text-2xl font-light tracking-[-0.03em] text-black">
              The Jovata Approach
            </h2>

            <p>
              At Jovata Interiors, we see smart living as an extension of
              thoughtful interior design.
            </p>

            <p>
              It is not a separate technology layer placed on top of a finished
              space.
            </p>

            <p>
              It is part of how the space is planned, experienced and lived in.
            </p>

            <p>
              Our goal is not to create homes that feel futuristic for the sake
              of appearance.
            </p>

            <p>
              Our goal is to create spaces that feel calm, functional,
              intelligent and effortless.
            </p>

            <h2 className="pt-7 text-2xl font-light tracking-[-0.03em] text-black">
              Conclusion
            </h2>

            <p>
              Smart living should feel invisible because the home should remain
              the focus.
            </p>

            <p>
              Technology should support the atmosphere, not interrupt it.
            </p>

            <p>
              It should simplify routines, improve comfort and create confidence
              without becoming visually or emotionally overwhelming.
            </p>

            <p>
              The best smart homes are not defined by how much technology they
              contain.
            </p>

            <p>
              They are defined by how naturally that technology improves
              everyday living.
            </p>
          </div>

          <div className="mt-16 max-w-3xl border-t border-neutral-200 pt-10">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-400">
              Continue Reading
            </p>

            <Link
              href="/journal/why-thoughtful-interiors-matter"
              className="group block"
            >
              <h3 className="text-3xl font-light tracking-[-0.03em] group-hover:text-neutral-500 transition-colors">
                Why Thoughtful Interiors Matter →
              </h3>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-neutral-500">
                An exploration of how thoughtful design shapes comfort, behaviour and everyday living.
              </p>
            </Link>

            <div className="mt-12 flex items-center justify-between border-t border-neutral-200 pt-8">
              <p className="text-[15px] text-neutral-500">
                Thinking about your own space?
              </p>

              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.25em] text-neutral-500 hover:text-black"
              >
                Start a Project →
              </Link>
            </div>
          </div>
        </section>
      </article>

    </main>
  );
}
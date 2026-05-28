import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { SiteContent } from "@/types/site-content";

const STEP_ICON_SRC: Record<string, string> = {
  strategy: "/assets/4 block/1.avif",
  optimization: "/assets/4 block/2.avif",
  scaling: "/assets/4 block/3.avif",
};

export function ApproachSection({ content }: { content: SiteContent }) {
  const { approach } = content;

  return (
    <section
      id="steps"
      className="relative overflow-hidden bg-black py-16 md:py-20 lg:py-24"
      aria-labelledby="approach-section-heading"
    >
      <div className="relative mx-auto max-w-[1280px] px-5 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[920px] rounded-[32px] border border-white/[0.06] bg-[#141414] px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
          <header className="max-w-xl text-left">
            <Reveal delay={0.2}>
              <span className="inline-block rounded-lg bg-[#FFCC00] px-4 py-1.5 font-rubik text-lg font-medium leading-none text-neutral-950">
                {approach.badge}
              </span>
            </Reveal>

            <Reveal delay={0.4} variant="blurUp">
              <h2
                id="approach-section-heading"
                className="mt-6 font-stratos text-[40px] font-medium uppercase leading-[1.012] md:mt-7"
              >
                <span className="text-[#FFCC00]">{approach.headingYellow}</span>
                <br />
                {approach.headingWhiteLines.map((line, index) => (
                  <span key={index} className="text-white">
                    {line}
                    {index < approach.headingWhiteLines.length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </Reveal>
          </header>

          <div className="mt-12 space-y-14 md:mt-14 md:space-y-16 lg:space-y-20">
            {approach.steps.map((step, index) => (
              <Reveal key={step.id} delay={index * 0.15} variant="blurZoom">
                <article
                  className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14"
                >
                <div
                  className={`${
                    step.reverse
                      ? "order-2 md:col-start-2 md:row-start-1"
                      : "order-2 md:order-1"
                  } text-left`}
                >
                  <h3 className="font-stratos text-[25px] font-medium uppercase leading-[1.012] text-white sm:text-[30px]">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-md font-rubik text-xl font-normal leading-[1.012] text-white">
                    {step.description}
                  </p>
                </div>

                <div
                  className={`flex ${
                    step.reverse
                      ? "order-1 justify-center md:col-start-1 md:row-start-1 md:justify-start"
                      : "order-1 justify-center md:order-2 md:justify-end"
                  }`}
                >
                  <div
                    className={`mx-auto flex h-36 w-36 items-center justify-center sm:h-40 sm:w-40 md:mx-0 md:h-44 md:w-44 lg:h-48 lg:w-48 ${step.iconRotation}`}
                  >
                    <Image
                      src={STEP_ICON_SRC[step.id]}
                      alt={step.iconAlt}
                      width={192}
                      height={192}
                      className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/motion/Reveal";
import { RevealWords } from "@/components/motion/RevealWords";
import { HoverScale } from "@/components/motion/HoverScale";
import type { SiteContent } from "@/types/site-content";

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 10.5L10.5 3.5M10.5 3.5H5M10.5 3.5V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepNumberPill({ number }: { number: string }) {
  return (
    <div className="inline-flex items-center rounded-full bg-[#FFCC00] py-1 pl-4 pr-1">
      <span className="min-w-[1.75rem] font-rubik text-base font-bold tabular-nums text-neutral-950">
        {number}
      </span>
      <span className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950">
        <ArrowUpRightIcon />
      </span>
    </div>
  );
}

export function WorkflowSection({ content }: { content: SiteContent }) {
  const { workflow } = content;

  return (
    <section
      className="relative overflow-hidden bg-black py-16 md:py-24 lg:py-28"
      aria-labelledby="workflow-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_80%_70%_at_18%_0%,rgba(255,204,0,0.34)_0%,rgba(255,204,0,0.12)_38%,transparent_72%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_80%_70%_at_82%_0%,rgba(210,90,35,0.28)_0%,rgba(210,90,35,0.1)_38%,transparent_72%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-5 md:px-10 lg:px-12">
        <header className="max-w-3xl text-left">
          <Reveal delay={0.2}>
            <span className="inline-block rounded-lg bg-[#FFCC00] px-4 py-1.5 font-rubik text-lg font-medium leading-none text-neutral-950">
              {workflow.badge}
            </span>
          </Reveal>

          <RevealWords
            as="h2"
            id="workflow-section-heading"
            lines={[workflow.heading]}
            startDelay={0.4}
            className="mt-6 font-stratos text-[40px] font-medium uppercase leading-[1.012] text-white md:mt-7"
          />
        </header>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-12 md:gap-6">
          {workflow.steps.map((step, index) => (
            <Reveal key={step.number} delay={0.2 + index * 0.2}>
              <article
                className="rounded-3xl border border-white/[0.08] bg-[#141414] p-7 text-left md:p-8"
              >
              <StepNumberPill number={step.number} />

              <h3 className="mt-5 font-stratos text-[25px] font-medium uppercase leading-[1.012] text-white sm:mt-6 sm:text-[30px]">
                {step.title}
              </h3>

              <p className="mt-4 font-rubik text-xl font-normal leading-[1.012] text-white">
                {step.description}
              </p>
            </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center md:mt-12">
          <HoverScale
            as="a"
            href="#contact"
            className="group inline-flex max-w-full items-center gap-2.5 rounded-full bg-[#FFCC00] py-2.5 pl-5 pr-2.5 font-rubik text-base font-bold text-neutral-950 shadow-[0_6px_24px_rgba(255,204,0,0.32)] transition-colors duration-300 hover:bg-[#e8b816] sm:gap-3 sm:py-3 sm:pl-7 sm:pr-3 sm:text-xl"
          >
            <span className="text-center leading-tight sm:whitespace-nowrap">{workflow.cta}</span>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-9 sm:w-9">
              <ArrowUpRightIcon />
            </span>
          </HoverScale>
        </Reveal>
      </div>
    </section>
  );
}

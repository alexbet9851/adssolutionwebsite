import { RichText } from "@/components/RichText";
import { Reveal } from "@/components/motion/Reveal";
import { RevealWords } from "@/components/motion/RevealWords";
import type { SiteContent } from "@/types/site-content";

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 7h12l-1 14H7L6 7Z" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

function LightbulbIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z" />
    </svg>
  );
}

const CARD_ICONS = {
  results: ClockIcon,
  leadgen: ShoppingBagIcon,
  promises: LightbulbIcon,
} as const;

export function ThirdSection({ content }: { content: SiteContent }) {
  const { third } = content;

  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-black py-16 md:py-24 lg:py-28"
      aria-labelledby="approach-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_88%_at_0%_50%,rgba(210,120,35,0.52)_0%,rgba(160,75,20,0.22)_32%,transparent_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_68%_78%_at_100%_28%,rgba(255,210,55,0.48)_0%,rgba(245,180,20,0.18)_34%,transparent_70%)]"
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
        <header className="mx-auto max-w-3xl text-center">
          <Reveal delay={0.2}>
            <span className="inline-block rounded-lg bg-[#FFCC00] px-4 py-1.5 font-rubik text-lg font-medium leading-none text-neutral-950">
              {third.badge}
            </span>
          </Reveal>

          <RevealWords
            as="h2"
            id="approach-heading"
            lines={[...third.headingLines]}
            startDelay={0.4}
            className="mt-6 font-stratos text-[40px] font-medium uppercase leading-[1.012] text-white md:mt-7"
          />
        </header>

        <ul className="mx-auto mt-10 flex max-w-[640px] flex-col gap-5 md:mt-12 md:gap-6">
          {third.cards.map((card, index) => {
            const Icon = CARD_ICONS[card.id];

            return (
              <li key={card.id}>
                <Reveal delay={0.2 + index * 0.2}>
                  <article className="rounded-3xl border border-white/[0.08] bg-[#141414] px-7 py-8 text-center md:px-9 md:py-9">
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0f0f0f] text-white/55">
                    <Icon />
                  </div>

                  <h3 className="font-stratos text-[25px] font-medium uppercase leading-[1.012] text-white sm:text-[30px]">
                    {card.title}
                  </h3>

                  <p className="mt-4 font-rubik text-xl font-normal leading-[1.012] text-white">
                    <RichText parts={[...card.parts]} />
                  </p>
                </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { AuditLeadModal } from "@/components/AuditLeadModal";
import { HoverScale } from "@/components/motion/HoverScale";
import { Reveal } from "@/components/motion/Reveal";
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

function AsteriskIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
    </svg>
  );
}

export default function ResultsSection({ content }: { content: SiteContent }) {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const { results, modal } = content;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-neutral-950 py-16 md:py-24 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-12">
        <h2 id="about-heading" className="sr-only font-rubik font-normal">
          {results.srHeading}
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.62fr)] lg:gap-8">
          <Reveal variant="blurUp" className="relative min-h-[380px] overflow-hidden rounded-3xl lg:min-h-0 lg:h-full">
            <Image
              src="/assets/2 block/фото.jpg"
              alt={results.photoAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-top"
              priority
            />
          </Reveal>

          <div className="flex min-w-0 flex-col gap-5 lg:gap-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:gap-6">
              {results.statCards.map((card, index) => {
                const isAmber = card.variant === "amber";

                return (
                  <Reveal key={card.title} delay={index * 0.1}>
                    <article
                      className={`flex h-full min-h-[190px] flex-col rounded-3xl p-7 sm:min-h-[200px] lg:p-8 ${
                        isAmber
                          ? "bg-[#F5C518] text-neutral-950"
                          : "bg-[#0f0f0f] text-white ring-1 ring-white/[0.06]"
                      }`}
                    >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-neutral-950">
                      <AsteriskIcon />
                    </div>

                    <div className="mt-auto pt-7">
                      <h3 className="font-stratos text-[25px] font-medium uppercase leading-[1.012] sm:text-[30px] lg:text-[40px]">
                        {card.title}
                      </h3>
                      <p
                        className={`mt-2.5 font-rubik text-xl font-normal leading-[1.012] ${
                          isAmber ? "text-neutral-900" : "text-white"
                        }`}
                      >
                        {card.subtitle}
                      </p>
                    </div>
                  </article>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <article className="rounded-3xl bg-zinc-100 p-8 lg:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <p className="max-w-2xl font-rubik text-[22px] leading-[1.012] text-neutral-900">
                  <span className="font-normal">{results.bottomNormal}</span>
                  <span className="font-semibold">{results.bottomBold}</span>
                </p>

                <HoverScale
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#F5C518] py-3 pl-7 pr-3 font-rubik text-xl font-bold text-neutral-950 shadow-[0_6px_24px_rgba(245,197,24,0.32)] transition-colors duration-300 hover:bg-[#e8b816] lg:self-center"
                >
                  <span className="whitespace-nowrap">{results.cta}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRightIcon />
                  </span>
                </HoverScale>
              </div>
            </article>
            </Reveal>
          </div>
        </div>
      </div>

      <AuditLeadModal
        open={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        content={modal}
      />
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import type { SiteContent } from '@/types/site-content';

function CaseTitle({ title }: { title: string }) {
  if (title.startsWith("КЕЙС:") || title.startsWith("CASE:")) {
    const prefix = title.startsWith("КЕЙС:") ? "КЕЙС:" : "CASE:";
    return (
      <>
        <span className="text-[#FFCC00]">{prefix}</span>
        <span className="text-white"> {title.slice(5).trim()}</span>
      </>
    );
  }

  return <>{title}</>;
}

export default function CasesSection({ content }: { content: SiteContent }) {
  const { cases } = content;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % cases.items.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + cases.items.length) % cases.items.length);

  return (
    <section id="cases" className="bg-black py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-12">
        {/* HEADER */}
        <div className="mb-4 md:mb-5">
          <div className="flex flex-col items-start gap-4 md:gap-6">
            <Reveal delay={0.2}>
              <span className="inline-block rounded-lg bg-[#FFCC00] px-4 py-1.5 font-rubik text-lg font-medium leading-none text-neutral-950">
                {cases.badge}
              </span>
            </Reveal>
            <Reveal delay={0.4} variant="blurUp">
              <h2 className="font-stratos text-[32px] font-medium uppercase leading-[1.012] sm:text-[36px] lg:text-[40px]">
                <span className="text-[#FFCC00]">{cases.headingYellow}</span>
                <br />
                <span className="text-white">{cases.headingWhite}</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mb-6 flex justify-end gap-4 md:mb-8">
          <button
            type="button"
            onClick={prevSlide}
            aria-label={cases.prevAria}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFCC00] text-neutral-950 transition-colors hover:bg-[#e6b800]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label={cases.nextAria}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFCC00] text-neutral-950 transition-colors hover:bg-[#e6b800]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* КАРУСЕЛЬ */}
        <div className="relative overflow-hidden rounded-[32px]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cases.items.map((caseItem) => (
              <div key={caseItem.id} className="w-full flex-shrink-0 px-2">
                <div className="mx-auto max-w-[1240px] rounded-[32px] border border-white/[0.06] bg-[#141414] p-5 md:p-6 lg:p-7">
                  <div className="mb-5 overflow-hidden rounded-2xl bg-white p-2.5 md:mb-6 md:p-3">
                    <div className="relative h-[220px] w-full overflow-hidden rounded-xl md:h-[260px] lg:h-[280px]">
                      <Image
                        src={caseItem.image}
                        alt={caseItem.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 960px"
                        className="object-cover object-right md:object-bottom"
                        priority={caseItem.id === 1}
                      />
                    </div>
                  </div>

                  <h3 className="mb-1.5 text-center font-stratos text-[24px] font-medium uppercase leading-[1.012] sm:text-[28px] lg:text-left">
                    <CaseTitle title={caseItem.title} />
                  </h3>
                  <p className="mb-5 text-center font-rubik text-lg font-normal leading-[1.012] text-white md:mb-6 md:text-xl lg:text-left">
                    {caseItem.niche}
                  </p>

                  <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-5">
                    {caseItem.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="relative flex min-w-0 flex-col items-start text-left"
                      >
                        <div className="flex min-h-[2.75rem] items-end font-stratos text-[20px] font-medium leading-none text-[#FFCC00] sm:min-h-[3rem] sm:text-[24px] md:text-[30px]">
                          <span className="break-words sm:whitespace-nowrap">{metric.value}</span>
                        </div>
                        <div className="mt-1.5 font-rubik text-[13px] leading-[1.2] text-white sm:text-sm md:text-[15px]">
                          {metric.label}
                        </div>
                        {i < 3 && (
                          <div className="absolute -right-5 top-1 hidden font-rubik text-3xl font-light leading-none text-[#FFCC00] lg:block md:text-4xl">
                            /
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {cases.items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={cases.slideAria(index)}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all ${
                index === currentSlide
                  ? 'h-2.5 w-7 bg-[#FFCC00]'
                  : 'h-2.5 w-2.5 bg-white/25 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

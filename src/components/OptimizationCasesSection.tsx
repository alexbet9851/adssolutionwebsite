'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import type { OptimizationCaseItem, SiteContent } from '@/types/site-content';

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

function captionFromAltSuffix(suffix: string) {
  const word = suffix.replace(/^\s*—\s*/, '').trim();
  return `/ ${word.toUpperCase()}`;
}

function BeforeAfterScreenshots({
  beforeImage,
  afterImage,
  title,
  beforeAltSuffix,
  afterAltSuffix,
  priority = false,
}: {
  beforeImage: string;
  afterImage: string;
  title: string;
  beforeAltSuffix: string;
  afterAltSuffix: string;
  priority?: boolean;
}) {
  return (
    <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mb-6 lg:gap-6">
      <div>
        <div className="overflow-hidden rounded-2xl bg-white p-2.5 md:p-3">
          <Image
            src={beforeImage}
            alt={`${title}${beforeAltSuffix}`}
            width={1280}
            height={680}
            className="h-auto w-full rounded-xl"
            priority={priority}
          />
        </div>
        <p className="mt-2 font-rubik text-base font-medium text-white md:text-lg">
          {captionFromAltSuffix(beforeAltSuffix)}
        </p>
      </div>

      <div>
        <div className="overflow-hidden rounded-2xl bg-white p-2.5 md:p-3">
          <Image
            src={afterImage}
            alt={`${title}${afterAltSuffix}`}
            width={1280}
            height={680}
            className="h-auto w-full rounded-xl"
          />
        </div>
        <p className="mt-2 font-rubik text-base font-medium text-white md:text-lg">
          {captionFromAltSuffix(afterAltSuffix)}
        </p>
      </div>
    </div>
  );
}

function CaseSlide({
  caseItem,
  beforeAltSuffix,
  afterAltSuffix,
}: {
  caseItem: OptimizationCaseItem;
  beforeAltSuffix: string;
  afterAltSuffix: string;
}) {
  return (
    <div className="mx-auto max-w-[1240px] rounded-[32px] border border-white/[0.06] bg-[#141414] p-5 md:p-6 lg:p-7">
      <BeforeAfterScreenshots
        beforeImage={caseItem.beforeImage}
        afterImage={caseItem.afterImage}
        title={caseItem.title}
        beforeAltSuffix={beforeAltSuffix}
        afterAltSuffix={afterAltSuffix}
        priority={caseItem.id === 1}
      />

      <div className="text-center lg:text-left">
        <h3 className="mb-1.5 font-stratos text-[24px] font-medium uppercase leading-[1.012] sm:text-[28px]">
          <CaseTitle title={caseItem.title} />
        </h3>
        {caseItem.niche && (
          <p className="mb-4 font-rubik text-lg font-normal leading-[1.012] text-white md:mb-5 md:text-xl">
            {caseItem.niche}
          </p>
        )}
        <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-4 md:p-6">
          {caseItem.results.map((result, index) => (
            <div
              key={result.highlight}
              className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                index > 0 ? 'mt-4 border-t border-white/[0.06] pt-4 sm:mt-5 sm:pt-5' : ''
              }`}
            >
              <p className="font-rubik text-[15px] leading-[1.2] text-white sm:max-w-[52%] sm:pr-2 md:text-lg">
                {result.text}
              </p>
              <p className="font-stratos text-[20px] font-medium leading-[1.1] text-[#FFCC00] sm:max-w-[48%] sm:shrink-0 sm:text-right sm:text-[24px] md:text-[30px]">
                {result.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function OptimizationCasesSection({ content }: { content: SiteContent }) {
  const { optimizationCases } = content;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % optimizationCases.items.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + optimizationCases.items.length) % optimizationCases.items.length,
    );

  return (
    <section id="cases-optimization" className="bg-black py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-12">
        <div className="mb-4 md:mb-5">
          <div className="flex flex-col items-start gap-4 md:gap-6">
            <Reveal delay={0.2}>
              <span className="inline-block rounded-lg bg-[#FFCC00] px-4 py-1.5 font-rubik text-lg font-medium leading-none text-neutral-950">
                {optimizationCases.badge}
              </span>
            </Reveal>
            <Reveal delay={0.4} variant="blurUp">
              <h2 className="font-stratos text-[32px] font-medium uppercase leading-[1.012] sm:text-[36px] lg:text-[40px]">
                <span className="text-[#FFCC00]">{optimizationCases.headingYellow}</span>
                <br />
                <span className="text-white">{optimizationCases.headingWhite}</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mb-6 flex justify-end gap-4 md:mb-8">
          <button
            type="button"
            onClick={prevSlide}
            aria-label={optimizationCases.prevAria}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFCC00] text-neutral-950 transition-colors hover:bg-[#e6b800]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label={optimizationCases.nextAria}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFCC00] text-neutral-950 transition-colors hover:bg-[#e6b800]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="relative overflow-hidden rounded-[32px]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {optimizationCases.items.map((caseItem) => (
              <div key={caseItem.id} className="w-full shrink-0 px-2">
                <CaseSlide
                  caseItem={caseItem}
                  beforeAltSuffix={optimizationCases.beforeAltSuffix}
                  afterAltSuffix={optimizationCases.afterAltSuffix}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {optimizationCases.items.map((caseItem, index) => (
            <button
              key={caseItem.id}
              type="button"
              aria-label={optimizationCases.slideAria(index)}
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

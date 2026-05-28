"use client";

import { getSiteContent } from "@/content";
import type { Locale } from "@/types/site-content";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import { ThirdSection } from "@/components/ThirdSection";
import { ApproachSection } from "@/components/ApproachSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import CasesSection from "@/components/CasesSection";
import OptimizationCasesSection from "@/components/OptimizationCasesSection";
import ContactFormSection from "@/components/ContactFormSection";
import FooterSection from "@/components/FooterSection";

type LandingPageProps = {
  locale: Locale;
};

export function LandingPage({ locale }: LandingPageProps) {
  const content = getSiteContent(locale);

  return (
    <main className="min-h-screen overflow-x-hidden bg-neutral-950 text-white">
      <HeroSection content={content} />
      <ResultsSection content={content} />
      <ThirdSection content={content} />
      <ApproachSection content={content} />
      <WorkflowSection content={content} />
      <CasesSection content={content} />
      <OptimizationCasesSection content={content} />
      <ContactFormSection content={content} />
      <FooterSection content={content} />
    </main>
  );
}

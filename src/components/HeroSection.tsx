"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AuditLeadModal } from "@/components/AuditLeadModal";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { HoverScale } from "@/components/motion/HoverScale";
import { MountReveal } from "@/components/motion/MountReveal";
import { RevealWords } from "@/components/motion/RevealWords";
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

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function NavPill({
  className,
  items,
  ariaLabel,
}: {
  className?: string;
  items: SiteContent["nav"]["items"];
  ariaLabel: string;
}) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      <ul className="flex flex-col items-stretch sm:flex-row sm:items-center">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block px-4 py-2 text-center font-rubik text-lg font-normal text-[#1a1a1a] transition-colors hover:text-neutral-600 md:px-5"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MessengerButtons() {
  return (
    <div className="flex items-center gap-2">
      <a
        href="https://t.me/adstargetpro"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5C518] text-neutral-950 transition-transform hover:scale-105 hover:bg-[#e8b816] sm:h-10 sm:w-10"
      >
        <TelegramIcon />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=380959202126"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F5C518] text-neutral-950 transition-transform hover:scale-105 hover:bg-[#e8b816] sm:h-10 sm:w-10"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}

export default function HeroSection({ content }: { content: SiteContent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <section className="relative h-dvh max-h-dvh overflow-hidden bg-black">
      {/* Rich dark golden base */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_92%_78%_at_50%_44%,rgba(210,150,45,0.5)_0%,rgba(155,95,28,0.34)_20%,rgba(85,52,14,0.38)_46%,rgba(18,12,6,0.9)_72%,rgba(0,0,0,1)_100%)]"
        aria-hidden
      />
      {/* Golden-orange center glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,175,55,0.26)_0%,rgba(245,158,11,0.1)_32%,transparent_62%)]"
        aria-hidden
      />
      {/* Soft ambient warmth */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_42%_at_50%_40%,rgba(251,191,36,0.12)_0%,transparent_100%)]"
        aria-hidden
      />
      {/* Light edge vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_110%_92%_at_50%_50%,transparent_38%,rgba(0,0,0,0.38)_100%)]"
        aria-hidden
      />
      {/* Subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex h-full max-w-[1280px] flex-col px-5 md:px-10 lg:px-12">
        {/* Header */}
        <header className="relative z-20 shrink-0 pt-5 md:pt-6">
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[1fr_auto_1fr]">
            <Link
              href={content.homePath}
              className="relative z-30 flex h-12 shrink-0 items-center justify-self-start md:h-[3.3rem]"
            >
              <Image
                src="/assets/hero/logo.avif"
                alt="Ads solutions"
                width={154}
                height={50}
                priority
                className="h-full w-auto"
              />
            </Link>

            {/* Desktop nav — centered pill, aligned with logo row */}
            <div className="hidden h-12 items-center justify-self-center lg:flex md:h-[3.3rem]">
              <div className="rounded-full bg-white px-1 py-1 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
                <NavPill items={content.nav.items} ariaLabel={content.nav.ariaLabel} />
              </div>
            </div>

            <div className="relative z-30 col-start-2 flex h-12 items-center justify-self-end gap-2 sm:gap-3 md:h-[3.3rem] lg:col-start-3">
              <div className="hidden sm:block">
                <LanguageSwitcher
                  current={content.language.current}
                  alternatives={content.language.alternatives}
                  ariaLabel={content.language.ariaLabel}
                />
              </div>
              <MessengerButtons />
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 lg:hidden"
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                aria-label={menuOpen ? content.nav.menuClose : content.nav.menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile / tablet nav */}
          <div
            id="mobile-nav"
            className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
              menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4 rounded-2xl border border-white/15 bg-white/90 p-3 shadow-xl backdrop-blur-md">
              <NavPill items={content.nav.items} ariaLabel={content.nav.ariaLabel} />
              <div className="mt-3 flex justify-center sm:hidden">
                <LanguageSwitcher
                  current={content.language.current}
                  alternatives={content.language.alternatives}
                  ariaLabel={content.language.ariaLabel}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Hero content */}
        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-2 pb-5 pt-1 text-center">
          <div className="flex flex-col items-center">
            <MountReveal variant="blur" delay={0.2}>
              <p className="max-w-[560px] px-2 pb-2 pt-1 font-rubik text-xl font-light leading-[1.012] text-white">
                {content.hero.subtitleNormal}
                <span className="font-semibold">{content.hero.subtitleBold}</span>
              </p>
            </MountReveal>

            <RevealWords
              as="h1"
              onMount
              startDelay={0.4}
              lines={[...content.hero.headlineLines]}
              className={
                content.hero.headlineClassName ??
                "my-6 max-w-[840px] font-stratos text-[35px] font-medium uppercase leading-[1.012] text-white sm:my-7 md:my-8 md:text-[64px]"
              }
            />

            <HoverScale
              type="button"
              onClick={() => setAuditModalOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full bg-[#F5C518] py-3 pl-7 pr-3 font-rubik text-xl font-bold text-neutral-950 shadow-[0_6px_24px_rgba(245,197,24,0.32)] transition-colors duration-300 hover:bg-[#e8b816]"
            >
              <span className="whitespace-nowrap">{content.hero.cta}</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRightIcon className="text-neutral-950" />
              </span>
            </HoverScale>

            <MountReveal delay={0.6}>
              <div className="mt-8 flex flex-col items-center gap-2.5 md:mt-9">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-white/75">
                  <SearchIcon className="h-4 w-4" />
                </div>
                <p className="mx-auto w-fit max-w-full px-2 text-center font-rubik text-[15px] font-normal leading-[1.012] text-white md:text-xl">
                  <span className="block whitespace-nowrap">{content.hero.supportLine1}</span>
                  <span className="block whitespace-nowrap">{content.hero.supportLine2}</span>
                </p>
              </div>
            </MountReveal>
          </div>
        </div>
      </div>

      <AuditLeadModal
        open={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        content={content.modal}
      />
    </section>
  );
}

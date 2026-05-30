import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import type { SiteContent } from "@/types/site-content";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ContactIconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-amber-400 text-neutral-950 transition-transform hover:scale-105 hover:bg-amber-300"
    >
      {children}
    </a>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block text-[15px] font-medium leading-none text-neutral-900 transition-colors hover:text-neutral-600"
    >
      {children}
    </Link>
  );
}

export default function FooterSection({ content }: { content: SiteContent }) {
  const { footer, homePath } = content;

  return (
    <footer className="bg-black pb-5 pt-4 sm:pb-6">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal variant="blurUp">
          <div className="rounded-[1.5rem] bg-white px-5 py-4 sm:rounded-[1.75rem] sm:px-6 sm:py-[18px] lg:rounded-[2rem] lg:px-8 lg:py-5 xl:px-10">
          <div className="flex flex-col gap-5 sm:gap-6 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-x-8 xl:gap-x-12">
            <Link href={homePath} className="inline-flex shrink-0 self-start lg:self-center">
              <Image
                src="/assets/9 block/logo black.avif"
                alt="Ads solutions"
                width={76}
                height={42}
                className="h-auto w-[68px] sm:w-[72px] lg:w-[76px]"
              />
            </Link>

            <nav
              aria-label={footer.navAria}
              className="grid w-fit grid-cols-2 gap-x-8 gap-y-2 sm:gap-x-10 lg:mx-auto lg:gap-x-12 xl:gap-x-14"
            >
              <ul className="space-y-2">
                {footer.navLinks.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2">
                {footer.legalLinks.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex w-full flex-col items-end justify-center gap-2.5 lg:w-auto lg:min-w-[250px] lg:gap-2">
              <div className="flex items-center gap-2">
                <ContactIconButton href="tel:+380774517570" label={footer.phoneLabel}>
                  <PhoneIcon />
                </ContactIconButton>
                <ContactIconButton href="https://api.whatsapp.com/send?phone=380959202126" label="WhatsApp">
                  <WhatsAppIcon />
                </ContactIconButton>
                <ContactIconButton href="https://t.me/adstargetpro" label="Telegram">
                  <TelegramIcon />
                </ContactIconButton>
              </div>

              <p className="max-w-[250px] text-right text-[14px] font-medium leading-snug text-neutral-900 sm:text-[15px]">
                {footer.sloganLine1}
                <br />
                {footer.sloganLine2}
              </p>
            </div>
          </div>
          </div>
        </Reveal>

        <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-0.5 text-[11px] leading-relaxed text-zinc-400 sm:max-w-[70%] sm:text-xs">
            <p>{footer.disclaimerLine1}</p>
            <p>{footer.disclaimerLine2}</p>
          </div>

          <p className="shrink-0 text-[11px] text-zinc-400 sm:text-xs sm:text-right">
            {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import type { LegalDocumentContent } from "@/types/site-content";

export function createLegalMetadata(content: LegalDocumentContent, description: string): Metadata {
  return {
    title: `${content.title} — Ads Solutions`,
    description,
  };
}

export function LegalDocumentPage({ content }: { content: LegalDocumentContent }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-[920px] flex-col items-start gap-12 px-5 py-8 md:gap-[50px] md:px-[50px] md:py-[50px]">
        <Link
          href={content.backHref}
          className="inline-flex h-[50px] min-w-[201px] items-center justify-center rounded-full bg-[#FFCC00] px-8 font-rubik text-xl leading-[1.012] text-neutral-900 transition-colors hover:bg-[#e6b800]"
        >
          {content.backLink}
        </Link>

        <article className="w-full">
          <h1 className="font-rubik text-[30px] font-semibold leading-[1.6] tracking-[-0.02em] text-white">
            {content.title}
          </h1>

          <div className="mt-6 space-y-0 font-rubik text-base leading-[1.6] text-white md:mt-8">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <p>
              {content.contactPrefix}{" "}
              <a
                href={`mailto:${content.email}`}
                className="text-[#FFCC00] underline-offset-2 hover:underline"
              >
                {content.email}
              </a>
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealWords } from "@/components/motion/RevealWords";
import { pushFormSubmissionEvent } from "@/lib/pushFormSubmissionEvent";
import type { SiteContent } from "@/types/site-content";

type FormState = {
  name: string;
  contact: string;
  website: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  contact: "",
  website: "",
};

const INPUT_CLASS =
  "w-full rounded-full bg-white px-6 py-4 font-rubik text-base text-neutral-950 placeholder:text-neutral-400 outline-none md:px-7 md:py-[1.05rem] md:text-lg";

const TEXTAREA_CLASS =
  "min-h-[7.5rem] w-full resize-y rounded-[20px] bg-white px-6 py-4 font-rubik text-base text-neutral-950 placeholder:text-neutral-400 outline-none md:min-h-[8.5rem] md:px-7 md:py-5 md:text-lg";

export default function ContactFormSection({ content }: { content: SiteContent }) {
  const { contact } = content;
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.contact.trim()) {
      setError(contact.errorRequiredContact);
      return;
    }

    setSubmitted(true);
    setForm(INITIAL_FORM);
    pushFormSubmissionEvent("contact_strategy_form");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-16 md:py-24 lg:py-32"
      aria-labelledby="contact-form-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_70%_at_28%_42%,rgba(170,85,20,0.38)_0%,rgba(120,55,10,0.16)_38%,transparent_72%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_70%_at_72%_42%,rgba(255,204,0,0.24)_0%,rgba(255,180,0,0.1)_38%,transparent_72%)]"
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

      <div className="relative mx-auto max-w-[720px] px-5 text-center md:px-10">
        <RevealWords
          as="h2"
          id="contact-form-heading"
          lines={[...contact.headingLines]}
          startDelay={0.2}
          className="font-stratos text-[32px] font-medium uppercase leading-[1.012] text-white sm:text-[36px] lg:text-[40px]"
        />

        <Reveal delay={0.4}>
          <p className="mx-auto mt-6 max-w-[620px] font-rubik text-base font-normal leading-[1.35] text-white md:mt-8 md:text-xl">
            {contact.subtitleLine1}
            <br />
            {contact.subtitleLine2}
          </p>
        </Reveal>

        <Reveal delay={0.5} variant="blurUp">
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex w-full max-w-[560px] flex-col gap-4 md:mt-12 md:gap-5"
            noValidate
          >
          <label className="sr-only" htmlFor="contact-name">
            {contact.nameLabel}
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder={contact.namePlaceholder}
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            className={INPUT_CLASS}
          />

          <label className="sr-only" htmlFor="contact-phone">
            {contact.contactLabel}
          </label>
          <input
            id="contact-phone"
            type="text"
            name="contact"
            autoComplete="tel"
            required
            placeholder={contact.contactPlaceholder}
            value={form.contact}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, contact: event.target.value }))
            }
            className={INPUT_CLASS}
          />

          <label className="sr-only" htmlFor="contact-website">
            {contact.websiteLabel}
          </label>
          <textarea
            id="contact-website"
            name="website"
            autoComplete="url"
            placeholder={contact.websitePlaceholder}
            value={form.website}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, website: event.target.value }))
            }
            className={TEXTAREA_CLASS}
          />

          {error && (
            <p className="text-left font-rubik text-sm text-red-300" role="alert">
              {error}
            </p>
          )}

          {submitted && (
            <p className="text-left font-rubik text-sm text-[#FFCC00]" role="status">
              {contact.successMessage}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-[#FFCC00] px-6 py-4 font-rubik text-base font-medium text-neutral-950 transition-colors hover:bg-[#e6b800] md:py-[1.05rem] md:text-lg"
          >
            {contact.submit}
          </button>
        </form>
        </Reveal>
      </div>
    </section>
  );
}

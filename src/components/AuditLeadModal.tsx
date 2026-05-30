"use client";

import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { springHero } from "@/lib/motion";
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
  "w-full rounded-full bg-white px-5 py-3.5 font-rubik text-base text-neutral-950 placeholder:text-neutral-400 outline-none md:px-6 md:py-4 md:text-lg";

const TEXTAREA_CLASS =
  "min-h-[7rem] w-full resize-y rounded-[20px] bg-white px-5 py-3.5 font-rubik text-base text-neutral-950 placeholder:text-neutral-400 outline-none md:min-h-[7.5rem] md:px-6 md:py-4 md:text-lg";

type AuditLeadModalProps = {
  open: boolean;
  onClose: () => void;
  content: SiteContent["modal"];
};

export function AuditLeadModal({ open, onClose, content }: AuditLeadModalProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setError("");
      setSubmitted(false);
      setForm(INITIAL_FORM);
    }
  }, [open]);

  const reduceMotion = useReducedMotion();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.contact.trim()) {
      setError(content.errorRequiredContact);
      return;
    }

    setSubmitted(true);
    setForm(INITIAL_FORM);
    pushFormSubmissionEvent("express_audit_form");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
            aria-label={content.closeOverlay}
            onClick={onClose}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="audit-modal-title"
            className="relative z-10 w-full max-w-[560px] rounded-[32px] bg-[#FFCC00] px-5 py-7 shadow-2xl sm:px-8 sm:py-9"
            initial={
              reduceMotion
                ? false
                : { opacity: 0.001, scale: 0.92, y: 24, filter: "blur(10px)" }
            }
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={springHero}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={content.closeButton}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-neutral-950 transition-colors hover:bg-black/15 sm:right-5 sm:top-5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="text-center">
              <h2
                id="audit-modal-title"
                className="font-stratos text-[22px] font-medium uppercase leading-[1.08] text-neutral-950 sm:text-[26px]"
              >
                {content.titleLines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < content.titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className="mx-auto mt-4 max-w-[420px] font-rubik text-base leading-[1.35] text-neutral-950 md:text-lg">
                {content.subtitle}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-3.5 sm:mt-7 sm:gap-4"
              noValidate
            >
              <label className="sr-only" htmlFor="audit-name">
                {content.nameLabel}
              </label>
              <input
                id="audit-name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder={content.namePlaceholder}
                value={form.name}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, name: event.target.value }))
                }
                className={INPUT_CLASS}
              />

              <label className="sr-only" htmlFor="audit-contact">
                {content.contactLabel}
              </label>
              <input
                id="audit-contact"
                type="text"
                name="contact"
                autoComplete="tel"
                required
                placeholder={content.contactPlaceholder}
                value={form.contact}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, contact: event.target.value }))
                }
                className={INPUT_CLASS}
              />

              <label className="sr-only" htmlFor="audit-website">
                {content.websiteLabel}
              </label>
              <textarea
                id="audit-website"
                name="website"
                autoComplete="url"
                placeholder={content.websitePlaceholder}
                value={form.website}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, website: event.target.value }))
                }
                className={TEXTAREA_CLASS}
              />

              {error && (
                <p className="text-left font-rubik text-sm text-red-700" role="alert">
                  {error}
                </p>
              )}

              {submitted && (
                <p className="text-left font-rubik text-sm text-neutral-900" role="status">
                  {content.successMessage}
                </p>
              )}

              <button
                type="submit"
                className="mt-1 w-full rounded-full bg-neutral-950 px-6 py-3.5 font-rubik text-base font-medium text-white transition-colors hover:bg-neutral-800 md:py-4 md:text-lg"
              >
                {content.submit}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { enContent } from "./en";
import { ruContent } from "./ru";
import { ukContent } from "./uk";
import type { Locale, SiteContent } from "@/types/site-content";

const CONTENT_BY_LOCALE: Record<Locale, SiteContent> = {
  uk: ukContent,
  ru: ruContent,
  en: enContent,
};

export function getSiteContent(locale: Locale): SiteContent {
  return CONTENT_BY_LOCALE[locale];
}

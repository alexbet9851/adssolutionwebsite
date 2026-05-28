import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { ruContent } from "@/content/ru";

export const metadata: Metadata = {
  title: ruContent.metadata.title,
  description: ruContent.metadata.description,
};

export default function RuHomePage() {
  return <LandingPage locale="ru" />;
}

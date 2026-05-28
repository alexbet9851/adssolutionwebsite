import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { enContent } from "@/content/en";

export const metadata: Metadata = {
  title: enContent.metadata.title,
  description: enContent.metadata.description,
};

export default function EnHomePage() {
  return <LandingPage locale="en" />;
}

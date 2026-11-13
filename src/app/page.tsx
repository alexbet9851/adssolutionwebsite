import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { ukContent } from "@/content/uk";

export const metadata: Metadata = {
  title: ukContent.metadata.title,
  description: ukContent.metadata.description,
};

export default function Home() {
  return <LandingPage locale="uk" />;
}

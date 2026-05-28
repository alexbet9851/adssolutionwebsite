import { ukContent } from "@/content/uk";
import {
  LegalDocumentPage,
  createLegalMetadata,
} from "@/components/LegalDocumentPage";

export const metadata = createLegalMetadata(
  ukContent.legal.politics,
  "Політика конфіденційності сайту adssolutions.pro — порядок обробки та захисту персональних даних.",
);

export default function PoliticsUaPage() {
  return <LegalDocumentPage content={ukContent.legal.politics} />;
}

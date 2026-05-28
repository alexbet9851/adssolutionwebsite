import { enContent } from "@/content/en";
import {
  LegalDocumentPage,
  createLegalMetadata,
} from "@/components/LegalDocumentPage";

export const metadata = createLegalMetadata(
  enContent.legal.oferta,
  "Public offer for Google Ads services on adssolutions.pro.",
);

export default function OfertaEnPage() {
  return <LegalDocumentPage content={enContent.legal.oferta} />;
}

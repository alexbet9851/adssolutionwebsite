import { ukContent } from "@/content/uk";
import {
  LegalDocumentPage,
  createLegalMetadata,
} from "@/components/LegalDocumentPage";

export const metadata = createLegalMetadata(
  ukContent.legal.oferta,
  "Публічна оферта на надання послуг з Google Ads на сайті adssolutions.pro.",
);

export default function OfertaUaPage() {
  return <LegalDocumentPage content={ukContent.legal.oferta} />;
}

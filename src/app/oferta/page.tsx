import { ruContent } from "@/content/ru";
import {
  LegalDocumentPage,
  createLegalMetadata,
} from "@/components/LegalDocumentPage";

export const metadata = createLegalMetadata(
  ruContent.legal.oferta,
  "Публичная оферта на оказание услуг Google Ads на сайте adssolutions.pro.",
);

export default function OfertaPage() {
  return <LegalDocumentPage content={ruContent.legal.oferta} />;
}

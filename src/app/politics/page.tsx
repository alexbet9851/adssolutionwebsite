import { ruContent } from "@/content/ru";
import {
  LegalDocumentPage,
  createLegalMetadata,
} from "@/components/LegalDocumentPage";

export const metadata = createLegalMetadata(
  ruContent.legal.politics,
  "Политика конфиденциальности сайта adssolutions.pro — порядок обработки и защиты персональных данных.",
);

export default function PoliticsPage() {
  return <LegalDocumentPage content={ruContent.legal.politics} />;
}

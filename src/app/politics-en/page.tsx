import { enContent } from "@/content/en";
import {
  LegalDocumentPage,
  createLegalMetadata,
} from "@/components/LegalDocumentPage";

export const metadata = createLegalMetadata(
  enContent.legal.politics,
  "Privacy Policy for adssolutions.pro website users.",
);

export default function PoliticsEnPage() {
  return <LegalDocumentPage content={enContent.legal.politics} />;
}

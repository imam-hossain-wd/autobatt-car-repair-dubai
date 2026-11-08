import TermsPage from '@/components/pages/TermsPage/TermsPage'
import { siteMetadata } from "@/seo/metadata";

export const metadata = siteMetadata.terms;
export default function page() {
  return <TermsPage />
}

import HomePage from "@/components/pages/HomePage/HomePage";
import { siteMetadata } from "@/seo/metadata";

export const metadata = siteMetadata.home;
export default function Page() {
  return <HomePage />
}

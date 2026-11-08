import AboutPage from '@/components/pages/AboutPage/AboutPage'

import { siteMetadata } from "@/seo/metadata";

export const metadata = siteMetadata.about;
export default function About() {
  return <AboutPage />
}

import ServicesPage from '@/components/pages/ServicePage/ServicePage'

import { siteMetadata } from "@/seo/metadata";

export const metadata = siteMetadata.services
export default function page() {
  return <ServicesPage />
}

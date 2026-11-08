import PrivacyPage from '@/components/pages/PrivacyPage/PrivacyPage'
import React from 'react'
import { siteMetadata } from "@/seo/metadata";

export const metadata = siteMetadata.privacy;
export default function page() {
  return <PrivacyPage />
}

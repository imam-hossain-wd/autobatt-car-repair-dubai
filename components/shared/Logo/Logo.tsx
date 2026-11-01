import { brandLogo } from "@/config/imageConfig"
import { SiteConfig } from "@/config/siteConfig"
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label={SiteConfig.brandName}
      className="relative flex shrink-0 items-center gap-2.5"
    >
      <div className="relative flex  items-center justify-center overflow-hidden">
        <Image
          src={brandLogo?.logo}
          width={300}
          height={180}
          alt={SiteConfig.brandName}
          className=" w-full h-full object-contain"
        />
      </div>
    </Link>
  )
}

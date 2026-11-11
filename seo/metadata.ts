import { SiteConfig } from "@/config/siteConfig";

export const siteMetadata = {
  // 1. Home Page (/) - Core Brand & Main Service Hub
  home: {
    title: `24/7 Car Battery & Auto Repair Mobile Mechanic in Dubai | ${SiteConfig.brandName}`,
    description: `Emergency roadside mobile car repair and battery replacement in Dubai. Certified mechanics arrive in 5–30 min. Genuine parts & upfront pricing. Call ${SiteConfig.displayNumber}!`,
    verification: {
      google: "dosmIYwfyfvlqcGpXzWJfi0HeJkglOywj55hA8zemRc",
    },
    alternates: {
      canonical: SiteConfig.url,
    },

    openGraph: {
      title: `24/7 Car Battery & Auto Repair Mobile Mechanic in Dubai | ${SiteConfig.brandName}`,
      description: `Emergency roadside mobile car repair and battery replacement in Dubai. Certified mechanics arrive in 5–30 min. Genuine parts & upfront pricing. Call ${SiteConfig.displayNumber}!`,
      url: SiteConfig.url,
      siteName: SiteConfig.brandName,
      images: [
        {
          url: `${SiteConfig.url}${SiteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: `24/7 Emergency Mobile Car Repair Dubai - ${SiteConfig.brandName}`,
        },
      ],
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `24/7 Mobile Mechanic & Car Battery Replacement Dubai | ${SiteConfig.brandName}`,
      description: `Emergency roadside assistance and mobile mechanics anywhere in Dubai in 5–30 mins. Upfront pricing & genuine spare parts. Call ${SiteConfig.displayNumber} now.`,
      images: [`${SiteConfig.url}${SiteConfig.ogImage}`],
    },
  },

  // 2. Services Page (/services) - Transactional Intent Cluster
  services: {
    title: `On-Site Mobile Car Repair & Maintenance Services in Dubai | ${SiteConfig.brandName}`,
    description: `Full-service mobile auto repair across ${SiteConfig.city}. From battery replacement and diagnostics to AC repair, brakes, and starters. 24/7 emergency dispatch.`,
    alternates: {
      canonical: `${SiteConfig.url}/services`,
    },
    openGraph: {
      title: `On-Site Mobile Car Repair & Maintenance Services in Dubai | ${SiteConfig.brandName}`,
      description: `Explore fully equipped mobile workshop services in ${SiteConfig.city}. Certified mechanics available round-the-clock for battery, electrical, engine, AC, and roadside repairs.`,
      url: `${SiteConfig.url}/services`,
      siteName: SiteConfig.brandName,
      images: [
        { 
          url: `${SiteConfig.url}${SiteConfig.ogImage}`, 
          width: 1200, 
          height: 630,
          alt: `Mobile Auto Repair Services Dubai - ${SiteConfig.brandName}`
        }
      ],
      type: "website",
    },
  },

  // 3. Areas We Serve Page (/area-we-serve) - Hyper-Local GEO Footprint
  areaWeServe: {
    title: `Mobile Car Repair Coverage & Service Areas Across Dubai | ${SiteConfig.brandName}`,
    description: `Fast 5 to 30-minute mobile mechanic response across 16+ Dubai districts, including Jebel Ali, Dubai Marina, Discovery Gardens, JVC, and DIP.`,
    alternates: {
      canonical: `${SiteConfig.url}/area-we-serve`,
    },
    openGraph: {
      title: `Mobile Car Repair Coverage & Service Areas Across Dubai | ${SiteConfig.brandName}`,
      description: `Strategically deployed mobile mechanic fleets covering ${SiteConfig.streetAddress}, ${SiteConfig.location}, and major Dubai expressways 24/7.`,
      url: `${SiteConfig.url}/area-we-serve`,
      siteName: SiteConfig.brandName,
      images: [
        { 
          url: `${SiteConfig.url}${SiteConfig.ogImage}`, 
          width: 1200, 
          height: 630,
          alt: `Dubai Service Areas Coverage Map - ${SiteConfig.brandName}`
        }
      ],
      type: "website",
    },
  },

  // 4. About Us Page (/about) - E-E-A-T & Authority Building
  about: {
    title: `Dubai’s Most Trusted 24/7 Mobile Mechanic Rescue Team | ${SiteConfig.brandName}`,
    description: `Learn about ${SiteConfig.brandName} based in ${SiteConfig.location}, ${SiteConfig.city}. ASE-certified mechanics delivering doorstep auto diagnostics, battery replacements, and repairs since ${SiteConfig.foundedYear}.`,
    alternates: {
      canonical: `${SiteConfig.url}/about`,
    },
    openGraph: {
      title: `Dubai’s Most Trusted 24/7 Mobile Mechanic Rescue Team | ${SiteConfig.brandName}`,
      description: `Discover how ${SiteConfig.brandName} redefined roadside assistance in ${SiteConfig.city} with 5–30 minute mobile mechanic response, certified technicians, and transparent pricing.`,
      url: `${SiteConfig.url}/about`,
      siteName: SiteConfig.brandName,
      images: [
        { 
          url: `${SiteConfig.url}${SiteConfig.ogImage}`, 
          width: 1200, 
          height: 630,
          alt: `About ${SiteConfig.brandName} Mobile Mechanic Dubai`
        }
      ],
      type: "website",
    },
  },

  // 5. Contact Us Page (/contact) - Immediate Conversion & Call Action
  contact: {
    title: `Contact Our 24/7 Mobile Mechanic Dispatch Desk in Dubai | ${SiteConfig.brandName}`,
    description: `Stranded in ${SiteConfig.city}? Call ${SiteConfig.displayNumber} or WhatsApp for instant 24/7 dispatch. Certified mobile mechanics arrive at your exact GPS spot in 5–30 min.`,
    alternates: {
      canonical: `${SiteConfig.url}/contact`,
    },
    openGraph: {
      title: `Contact Our 24/7 Mobile Mechanic Dispatch Desk in Dubai | ${SiteConfig.brandName}`,
      description: `Get instant emergency assistance from certified mobile mechanics in ${SiteConfig.city}. Contact us now at ${SiteConfig.displayNumber} for 5–30 minute arrival.`,
      url: `${SiteConfig.url}/contact`,
      siteName: SiteConfig.brandName,
      images: [
        { 
          url: `${SiteConfig.url}${SiteConfig.ogImage}`, 
          width: 1200, 
          height: 630,
          alt: `Contact 24/7 Mobile Mechanic Service Dubai`
        }
      ],
      type: "website",
    },
  },

  // 6. Gallery Page (/gallery) - Visual Proof & Trust Signals
  gallery: {
    title: `Real-Time Onsite Auto Repair & Battery Replacement Photos | ${SiteConfig.brandName}`,
    description: `Browse photos of our mobile mechanic vans, diagnostic equipment, and roadside car battery replacements and repairs performed across ${SiteConfig.city} roads.`,
    alternates: {
      canonical: `${SiteConfig.url}/gallery`,
    },
    openGraph: {
      title: `Real-Time Onsite Auto Repair & Battery Replacement Photos | ${SiteConfig.brandName}`,
      description: `Transparent visual evidence of certified mechanics executing roadside repair services and routine car maintenance directly at client locations in ${SiteConfig.city}.`,
      url: `${SiteConfig.url}/gallery`,
      siteName: SiteConfig.brandName,
      images: [
        { 
          url: `${SiteConfig.url}${SiteConfig.ogImage}`, 
          width: 1200, 
          height: 630,
          alt: `Gallery - ${SiteConfig.brandName}`
        }
      ],
      type: "website",
    },
  },

  // 7. Case Archive / Projects Page (/projects) - High-Intent Technical Search
  projects: {
    title: `Documented Roadside Car Repairs & Diagnostic Cases in Dubai | ${SiteConfig.brandName}`,
    description: `View documented roadside rescue cases in ${SiteConfig.city}. Computer diagnostics, battery setups, starter motor overhauls, and ABS repairs completed on site.`,
    alternates: {
      canonical: `${SiteConfig.url}/projects`,
    },
    openGraph: {
      title: `Documented Roadside Car Repairs & Diagnostic Cases in Dubai | ${SiteConfig.brandName}`,
      description: `Detailed case logs of on-site auto repairs, battery swaps, and emergency diagnostics handled by ${SiteConfig.brandName} across ${SiteConfig.city}.`,
      url: `${SiteConfig.url}/projects`,
      siteName: SiteConfig.brandName,
      images: [
        { 
          url: `${SiteConfig.url}${SiteConfig.ogImage}`, 
          width: 1200, 
          height: 630,
          alt: `Projects & Cases - ${SiteConfig.brandName}`
        }
      ],
      type: "website",
    },
  },

  // 8. Privacy Policy Page (/privacy)
  privacy: {
    title: `Privacy Policy | ${SiteConfig.brandName}`,
    description: `Read the privacy policy for ${SiteConfig.brandName}. Information regarding user data protection, call dispatch, location handling, and service terms in ${SiteConfig.country}.`,
    alternates: {
      canonical: `${SiteConfig.url}/privacy`,
    },
    openGraph: {
      title: `Privacy Policy | ${SiteConfig.brandName}`,
      description: `Official privacy policy for ${SiteConfig.brandName} operating in ${SiteConfig.city}, ${SiteConfig.country}.`,
      url: `${SiteConfig.url}/privacy`,
      siteName: SiteConfig.brandName,
      type: "website",
    },
  },
  
  // 9. Terms of Service Page (/terms)
  terms: {
    title: `Terms of Service & Repair Warranties | ${SiteConfig.brandName}`,
    description: `Review our service terms, workmanship guarantees, part warranties, transparent pricing guidelines, and mobile dispatch policies across ${SiteConfig.city}.`,
    alternates: {
      canonical: `${SiteConfig.url}/terms`,
    },
    openGraph: {
      title: `Terms of Service & Repair Warranties | ${SiteConfig.brandName}`,
      description: `Official terms of service, repair warranties, and transparent pricing standards for ${SiteConfig.brandName} mobile auto services in ${SiteConfig.city}.`,
      url: `${SiteConfig.url}/terms`,
      siteName: SiteConfig.brandName,
      type: "website",
    },
  },
};
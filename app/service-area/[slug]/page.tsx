// app/(marketing)/area-we-serve/[slug]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteConfig } from "@/config/siteConfig";
import { serviceAreas } from "@/data/areas";
import AreaDetailPage from "@/components/pages/AreaWeServePage/AreaWeServeDetailPage";

/* ============ Static Params for SSG ============ */
export async function generateStaticParams() {
    return serviceAreas.map((area) => ({ slug: area.slug }));
}

/* ============ Dynamic Metadata ============ */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const area = serviceAreas.find((a) => a.slug === slug);

    if (!area) {
        return {
            title: `Area Not Found | ${SiteConfig.brandName}`,
            description: "The requested service area could not be found.",
        };
    }

    return {
        title:
            area.seo?.title ||
            `Mobile Mechanic ${area.name} Dubai | ${SiteConfig.brandName}`,
        description:
            area.seo?.description ||
            `24/7 mobile car repair in ${area.name}, Dubai. Fast response.`,
        alternates: {
            canonical: `${SiteConfig.url}/area-we-serve/${area.slug}`,
        },
        openGraph: {
            title: area.seo?.title,
            description: area.seo?.description,
            url: `${SiteConfig.url}/area-we-serve/${area.slug}`,
            type: "website",
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

/* ============ JSON-LD Schema (LocalBusiness + Service) ============ */
function generateAreaSchema(area: (typeof serviceAreas)[number]) {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "AutoRepair",
                "@id": `${SiteConfig.url}/#business`,
                name: SiteConfig.brandName,
                url: SiteConfig.url,
                telephone: SiteConfig.phoneNumber,
                email: SiteConfig.email,
                priceRange: area.schema?.priceRange || "$$",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: SiteConfig.streetAddress,
                    addressLocality: SiteConfig.location,
                    addressRegion: SiteConfig.city,
                    addressCountry: SiteConfig.country,
                },
                areaServed: {
                    "@type": "Place",
                    name: area.name,
                    geo: {
                        "@type": "GeoCoordinates",
                        latitude: area.coordinates.lat,
                        longitude: area.coordinates.lng,
                    },
                },
            },
            {
                "@type": "Service",
                name: area.schema?.serviceType || "Mobile Car Repair",
                provider: {
                    "@id": `${SiteConfig.url}/#business`,
                },
                areaServed: {
                    "@type": "Place",
                    name: area.schema?.areaServed || area.name,
                },
                serviceType: area.schema?.serviceType || "Mobile Car Repair",
            },
            {
                "@type": "FAQPage",
                mainEntity: area.faqSection?.faqs?.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            },
        ],
    };
}

/* ============ Page Component ============ */
export default async function AreaPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const area = serviceAreas.find((a) => a.slug === slug);

    if (!area) return notFound();

    const schema = generateAreaSchema(area);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <AreaDetailPage area={area} slug={slug} />
        </>
    );
}
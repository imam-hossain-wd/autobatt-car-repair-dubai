// components/sections/FeaturedServices.tsx

"use client";

import Link from "next/link";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiFlashlightFill,
    RiShieldCheckFill,
    RiTimeFill,
    RiGridFill,
    RiPhoneFill,
    RiWhatsappFill,
    RiStarFill,
} from "@remixicon/react";
import { services } from "@/data/services/services";
import { SiteConfig } from "@/config/siteConfig";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";

const FEATURED_SERVICE_SLUGS = [
    "battery-replacement",
    "jump-start",
    "computer-diagnostic",
    "alternator-repair",
    "fuel-pump-repair",
    "starter-motor-repair",
    "ac-repair",
    "brake-pad-repair",
];

interface FeaturedServicesProps {
    title?: string;
    subtitle?: string;
    limit?: number;
    showAll?: boolean;
}

export function FeaturedServices({
    title = "Featured Services",
    subtitle = "Our most popular mobile repair services with transparent pricing",
    limit = 8,
    showAll = false,
}: FeaturedServicesProps) {
    const { responseTime } = SiteConfig;

    const featuredServices = services.filter((service) =>
        FEATURED_SERVICE_SLUGS.some(
            (slug) =>
                service.slug === slug ||
                service.slug.includes(slug) ||
                slug.includes(service.slug)
        )
    );

    const baseServices =
        featuredServices.length > 0 ? featuredServices : services;

    const displayServices = showAll ? baseServices : baseServices.slice(0, limit);

    return (
        <section className="relative w-full overflow-hidden bg-background">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Large primary glow */}
                <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[130px]" />

                {/* Secondary corner glow */}
                <div className="absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[110px]" />

                {/* Radial dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.35] dark:opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                        maskImage:
                            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
                    }}
                />

                {/* Top hairline */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>

            <div className="relative container mx-auto px-4 py-10">
                {/* ============================================================
                    SECTION HEADER
                ============================================================ */}
                <div className="mb-10">
                    {/* Eyebrow row */}
                    {/* <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
                            <span className="relative flex size-1.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                Featured Services
                            </span>
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-border to-transparent" />
                    </div> */}

                    {/* Title + Stats row */}
                    <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        {/* Left: Title block */}
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[3.25rem]">
                                {title.split(" ").slice(0, -1).join(" ")}{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-primary">
                                        {title.split(" ").slice(-1)}
                                    </span>
                                    <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-primary/15" />
                                </span>
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                {subtitle}
                            </p>
                        </div>

                        {/* Right: Trust chips */}
                        <div className="flex flex-wrap items-center gap-2.5">
                            <StatChip
                                icon={<RiTimeFill className="size-3.5" />}
                                label={`${responseTime} Response`}
                            />
                            <StatChip
                                icon={<RiShieldCheckFill className="size-3.5" />}
                                label="Certified Pros"
                            />
                            <StatChip
                                icon={<RiGridFill className="size-3.5" />}
                                label={`${displayServices.length} Services`}
                            />
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    SERVICES GRID
                ============================================================ */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
                    {displayServices.map((service, index) => (
                        <ServiceCard
                            key={service.slug}
                            name={service.name}
                            slug={service.slug}
                            features={service.features}
                            image={service.service_banner?.src}
                            intro={service.intro}
                            index={index}
                        />
                    ))}
                </div>

                {/* ============================================================
                    BOTTOM CTA CARD
                ============================================================ */}
                {!showAll && (
                    <div className="mt-14 lg:mt-16">
                        <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                            {/* Background accents */}
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary/[0.08] blur-[80px]" />
                                <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/[0.05] blur-[80px]" />
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                                        backgroundSize: "24px 24px",
                                        maskImage:
                                            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
                                        WebkitMaskImage:
                                            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
                                    }}
                                />
                            </div>

                            {/* Corner crop marks */}
                            <div className="pointer-events-none absolute left-0 top-0 size-16">
                                <div className="absolute left-0 top-0 h-px w-10 bg-primary/60" />
                                <div className="absolute left-0 top-0 h-10 w-px bg-primary/60" />
                            </div>
                            <div className="pointer-events-none absolute bottom-0 right-0 size-16">
                                <div className="absolute bottom-0 right-0 h-px w-10 bg-primary/60" />
                                <div className="absolute bottom-0 right-0 h-10 w-px bg-primary/60" />
                            </div>

                            <div className="relative flex flex-col gap-8 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:p-12">
                                {/* Left: Content */}
                                <div className="max-w-xl">
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3 py-1">
                                        <RiStarFill className="size-3 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                                            19+ Services Available
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-4 text-2xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl">
                                        Need something{" "}
                                        <span className="text-primary">
                                            not listed here?
                                        </span>
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                        We handle 19+ mobile car repair services
                                        across Dubai. From AC to alternator, brakes
                                        to batteries — if it's on your car, we can
                                        fix it on-site.
                                    </p>

                                    {/* Trust points */}
                                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                                        {[
                                            "No towing required",
                                            "Upfront pricing",
                                            "Workmanship guaranteed",
                                        ].map((point) => (
                                            <span
                                                key={point}
                                                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
                                            >
                                                <span className="size-1 rounded-full bg-primary" />
                                                {point}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: CTA cluster */}
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                    <Link
                                        href={SiteConfig.numberCallLink}
                                        className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                                    >
                                        <RiPhoneFill className="size-4" />
                                        Call Now
                                        <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                                    </Link>

                                    <Link
                                        href="/services"
                                        className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border-2 border-border bg-background px-6 text-sm font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                                    >
                                        View All Services
                                        <RiArrowRightUpLine className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

/* ============================================================
    SUB-COMPONENT: Stat Chip
============================================================ */
function StatChip({
    icon,
    label,
}: {
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <div className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md">
            <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {icon}
            </span>
            <span className="text-xs font-semibold text-foreground">
                {label}
            </span>
        </div>
    );
}
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
    RiSparklingFill,
} from "@remixicon/react";
import { services } from "@/data/services/services";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";
import { Button } from "@/components/ui/button";

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

    // Split: first 2 are "spotlight" cards, rest are standard
    const spotlightServices = displayServices.slice(0, 2);
    const regularServices = displayServices.slice(0);

    return (
        <section className="relative w-full overflow-hidden bg-background py-10 px-14">
            {/* ============================================================
                BACKGROUND — Layered atmosphere
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />
                <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />
                <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[110px]" />

                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                        maskImage:
                            "radial-gradient(ellipse 70% 50% at 50% 30%, black 10%, transparent 70%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 50% at 50% 30%, black 10%, transparent 70%)",
                    }}
                />
            </div>

            <div className="relative ">

                {/* ============================================================
                    SECTION HEADER — Editorial, asymmetric
                ============================================================ */}
                <div className="mb-12 lg:mb-16">
                    <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
                        {/* Left: Title block (8 cols) */}
                        <div className="lg:col-span-8">
                            {/* Eyebrow */}
                            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
                                <span className="relative flex size-1.5">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-[11px]">
                                    What We Do
                                </span>
                            </div>

                            {/* Massive headline */}
                            <h2 className="text-[2.2rem] font-bold leading-[1.02] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[3.75rem]">
                                Mobile Car Repair{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 italic text-primary">
                                        Done Right
                                    </span>
                                    <svg
                                        className="absolute -bottom-1.5 left-0 h-3 w-full text-primary/25"
                                        viewBox="0 0 400 12"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M3 9C80 2 180 1 397 6"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </h2>

                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                {subtitle}
                            </p>
                        </div>

                        {/* Right: Trust chips stacked (4 cols) */}
                        <div className="lg:col-span-4">
                            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap lg:flex-col">
                                <StatChip
                                    icon={<RiTimeFill className="size-3.5" />}
                                    label={`${responseTime} Response`}
                                    value="Live"
                                />
                                <StatChip
                                    icon={<RiShieldCheckFill className="size-3.5" />}
                                    label="Certified Pros"
                                    value="100%"
                                />
                                <StatChip
                                    icon={<RiGridFill className="size-3.5" />}
                                    label={`${displayServices.length} Services`}
                                    value="Ready"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divider with label */}
                    <div className="mt-10 flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                            <RiSparklingFill className="size-3 text-primary" />
                            Most Booked
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-border to-transparent" />
                    </div>
                </div>

                {/* ============================================================
                    SPOTLIGHT ROW — 2 large cards
                ============================================================ */}
                <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mb-6 lg:gap-6">
                    {spotlightServices.map((service, index) => (
                        <ServiceCard
                            key={service.slug}
                            name={service.name}
                            slug={service.slug}
                            features={service.features}
                            image={service.service_banner?.src}
                            intro={service.intro}
                            index={index}
                            variant="spotlight"
                        />
                    ))}
                </div>

                {/* ============================================================
                    REGULAR GRID — 3-col on desktop
                ============================================================ */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {regularServices.map((service, index) => (
                        <ServiceCard
                            key={service.slug}
                            name={service.name}
                            slug={service.slug}
                            features={service.features}
                            image={service.service_banner?.src}
                            intro={service.intro}
                            index={index + 2}
                            variant="default"
                        />
                    ))}
                </div>

                <Link href="/services" className="w-full mt-8 flex justify-center items-center">
                    <Button className="px-10 py-5 text-md rounded">All Services

                          <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                </Link>

                {/* ============================================================
                    BOTTOM CTA — Split layout with live dispatch
                ============================================================ */}
                {!showAll && (
                    <div className="mt-16 lg:mt-20">
                        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/[0.04]">
                            {/* Layered background */}
                            <div className="pointer-events-none absolute inset-0">
                                <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-primary/[0.1] blur-[100px]" />
                                <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-primary/[0.05] blur-[100px]" />
                                <div
                                    className="absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                                        backgroundSize: "24px 24px",
                                        maskImage:
                                            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                                        WebkitMaskImage:
                                            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                                    }}
                                />
                            </div>

                            {/* Corner crop marks */}
                            <div className="pointer-events-none absolute left-4 top-4 size-10">
                                <div className="absolute left-0 top-0 h-px w-8 bg-primary/50" />
                                <div className="absolute left-0 top-0 h-8 w-px bg-primary/50" />
                            </div>
                            <div className="pointer-events-none absolute bottom-4 right-4 size-10">
                                <div className="absolute bottom-0 right-0 h-px w-8 bg-primary/50" />
                                <div className="absolute bottom-0 right-0 h-8 w-px bg-primary/50" />
                            </div>

                            <div className="relative grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
                                {/* Left: Content (7 cols) */}
                                <div className="lg:col-span-7">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/60 px-3 py-1 backdrop-blur-sm">
                                        <RiStarFill className="size-3 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                                            19+ Services · Full Coverage
                                        </span>
                                    </div>

                                    <h3 className="mt-4 text-[1.6rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-3xl lg:text-[2.5rem]">
                                        Need something{" "}
                                        <span className="relative inline-block">
                                            <span className="relative z-10 text-primary">
                                                not listed here?
                                            </span>
                                            <span className="absolute inset-x-0 bottom-0.5 z-0 h-2.5 bg-primary/15" />
                                        </span>
                                    </h3>

                                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                                        From AC to alternator, brakes to batteries —
                                        if it's on your car, we can fix it on-site.
                                        One call gets you a certified mechanic at
                                        your door.
                                    </p>

                                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                                        {[
                                            "No towing required",
                                            "Upfront pricing",
                                            "Workmanship guaranteed",
                                        ].map((point) => (
                                            <span
                                                key={point}
                                                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground sm:text-xs"
                                            >
                                                <span className="size-1 rounded-full bg-primary" />
                                                {point}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: CTA cluster (5 cols) */}
                                <div className="flex flex-col justify-center gap-3 lg:col-span-5">
                                    {/* Live dispatch indicator */}
                                    <div className="mb-1 inline-flex items-center gap-2 self-start rounded-full border border-border bg-background/80 px-3 py-1 backdrop-blur-sm">
                                        <span className="relative flex size-2">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                            <span className="relative inline-flex size-2 rounded-full bg-primary" />
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                                            Live Dispatch Available
                                        </span>
                                    </div>

                                    {/* Primary CTA with shine */}
                                    <Link
                                        href={SiteConfig.numberCallLink}
                                        className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
                                    >
                                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                        <RiPhoneFill className="relative size-4" />
                                        <span className="relative">
                                            Call {SiteConfig.displayNumber}
                                        </span>
                                        <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                                    </Link>

                                    {/* Secondary row */}
                                    <div className="flex gap-2.5">
                                        <Link
                                            href={SiteConfig.whatsappCallLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background/80 px-4 text-xs font-bold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                                        >
                                            <RiWhatsappFill className="size-4" />
                                            WhatsApp
                                        </Link>

                                        <Link
                                            href="/services"
                                            className="group inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background/80 px-4 text-xs font-bold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                                        >
                                            All Services
                                            <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </Link>
                                    </div>
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
    SUB-COMPONENT: Stat Chip (enhanced)
============================================================ */
function StatChip({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value?: string;
}) {
    return (
        <div className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-3 py-2 backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-card hover:shadow-md">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {icon}
            </span>
            <div className="min-w-0 flex-1">
                {value && (
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {value}
                    </p>
                )}
                <p className="truncate text-xs font-semibold text-foreground">
                    {label}
                </p>
            </div>
        </div>
    );
}
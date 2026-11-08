// components/pages/AreaPage/AreaDetailPage.tsx

"use client";

import Link from "next/link";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiCheckLine,
    RiCheckboxCircleFill,
    RiTimeFill,
    RiShieldCheckFill,
    RiWhatsappFill,
    RiMapPinFill,
    RiToolsFill,
    RiQuestionLine,
    RiAlertLine,
    RiArrowDownSLine,
    RiStarFill,
    RiVerifiedBadgeFill,
    RiAwardFill,
    RiPhoneFill,
    RiDoubleQuotesL,
    RiSparklingFill,
    RiFlashlightFill,
    RiRoadMapLine,
    RiNavigationLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { services } from "@/data/services/services";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";
import type { ServiceAreaData } from "@/types/area";
import { serviceAreas } from "@/data/areas";

export default function AreaDetailPage({
    area,
    slug,
}: {
    area: ServiceAreaData;
    slug: string;
}) {
    const {
        city,
        displayNumber,
        numberCallLink,
        whatsappCallLink,
        responseTime,
    } = SiteConfig;

    // Grab 4 popular services for the grid
    const popularServices = services.slice(0, 4);
    // Grab 3 nearby areas (exclude current)
    const nearbyAreas =
        area.nearbyAreasSection?.areas?.slice(0, 3) || [];
    // Grab 2 more areas from full list for context
    const otherAreas = serviceAreas
        .filter((a) => a.slug !== area.slug)
        .slice(0, 3);

    return (
        <main className="relative w-full overflow-hidden bg-[oklch(0.985_0.003_90)]">

            {/* ============================================================
                HERO — Editorial chapter opener
            ============================================================ */}
            <section className="relative border-b border-foreground/10 py-12 sm:py-16 lg:py-20">
                <div className="pointer-events-none absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-[0.5]"
                        style={{
                            backgroundImage: `radial-gradient(circle, oklch(0.4 0.02 90) 0.5px, transparent 0.5px)`,
                            backgroundSize: "8px 8px",
                            maskImage:
                                "radial-gradient(ellipse 90% 80% at 30% 40%, black 20%, transparent 90%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 90% 80% at 30% 40%, black 20%, transparent 90%)",
                        }}
                    />
                    <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[140px]" />
                    <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-[oklch(0.85_0.1_60)]/15 blur-[140px]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-[11px] font-medium text-foreground/50">
                        <Link href="/" className="transition-colors hover:text-primary">
                            Home
                        </Link>
                        <span className="text-foreground/25">/</span>
                        <Link
                            href="/area-we-serve"
                            className="transition-colors hover:text-primary"
                        >
                            Areas We Serve
                        </Link>
                        <span className="text-foreground/25">/</span>
                        <span className="truncate text-foreground">{area.name}</span>
                    </nav>

                    <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">

                        {/* LEFT: Content (7 cols) */}
                        <div className="order-2 lg:order-1 lg:col-span-7">
                            {/* Chapter marker */}
                            <div className="mb-5 flex items-center gap-3">
                                <span className="flex size-9 items-center justify-center rounded-full border border-foreground/15 bg-white font-serif text-xs font-bold italic text-primary shadow-sm">
                                    {String(area.id).padStart(2, "0")}
                                </span>
                                <div className="h-px w-10 bg-foreground/20" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50">
                                    Service Area
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-[2.1rem] font-bold leading-[1.03] -tracking-[0.03em] text-foreground sm:text-4xl lg:text-[3rem]">
                                Mobile Mechanic in{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 italic text-primary">
                                        {area.name}
                                    </span>
                                    <svg
                                        className="absolute -bottom-1.5 left-0 h-2.5 w-full text-primary/35"
                                        viewBox="0 0 300 10"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M2 7C60 2 140 1 298 5"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </h1>

                            {/* Subtitle */}
                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/60 sm:text-base">
                                {area.hero.subtitle}
                            </p>

                            {/* Trust badges */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    `${area.responseTime} Response`,
                                    "24/7 Available",
                                    "Certified Mechanics",
                                ].map((badge) => (
                                    <span
                                        key={badge}
                                        className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-white px-3 py-1.5 text-[11px] font-semibold text-foreground shadow-sm"
                                    >
                                        <RiCheckboxCircleFill className="size-3 text-primary" />
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href={numberCallLink}
                                    className="group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-foreground px-6 text-sm font-bold text-background shadow-lg shadow-foreground/20 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/30"
                                >
                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                    <RiPhoneFill className="relative size-4" />
                                    <span className="relative">
                                        Call {displayNumber}
                                    </span>
                                    <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                                <Link
                                    href={whatsappCallLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-foreground/15 bg-white px-6 text-sm font-bold text-foreground transition-all hover:border-primary hover:text-primary"
                                >
                                    <RiWhatsappFill className="size-4" />
                                    WhatsApp Us
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT: Location card (5 cols) */}
                        <div className="order-1 lg:order-2 lg:col-span-5">
                            <div className="relative mx-auto max-w-md lg:max-w-none">
                                {/* Main card */}
                                <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-white p-6 shadow-[0_20px_60px_-15px_oklch(0.2_0.02_90/0.15)] sm:p-7">
                                    {/* Corner marks */}
                                    <div className="pointer-events-none absolute left-3 top-3 size-6">
                                        <div className="absolute left-0 top-0 h-px w-5 bg-primary/40" />
                                        <div className="absolute left-0 top-0 h-5 w-px bg-primary/40" />
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="relative flex size-2">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                            <span className="relative inline-flex size-2 rounded-full bg-primary" />
                                        </span>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50">
                                            Area Coverage
                                        </span>
                                    </div>

                                    <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground">
                                        {area.name}
                                    </h2>

                                    <div className="mt-4 flex items-center gap-2 text-sm text-foreground/60">
                                        <RiMapPinFill className="size-4 text-primary" />
                                        <span>Dubai, United Arab Emirates</span>
                                    </div>

                                    {/* Coordinates */}
                                    <div className="mt-4 rounded-xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-3">
                                        <p className="text-[9px] font-bold uppercase tracking-wider text-foreground/40">
                                            GPS Coordinates
                                        </p>
                                        <div className="mt-1 flex items-center gap-3 text-xs font-mono text-foreground/70">
                                            <span>{area.coordinates.lat.toFixed(4)}° N</span>
                                            <span className="size-1 rounded-full bg-foreground/20" />
                                            <span>{area.coordinates.lng.toFixed(4)}° E</span>
                                        </div>
                                    </div>

                                    {/* Response time block */}
                                    <div className="mt-4 flex items-center justify-between rounded-xl border border-primary/15 bg-primary/[0.03] p-4">
                                        <div>
                                            <p className="text-[9px] font-bold uppercase tracking-wider text-primary">
                                                Response Time
                                            </p>
                                            <p className="mt-0.5 text-lg font-black leading-none text-foreground">
                                                {area.responseTime}
                                            </p>
                                        </div>
                                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
                                            <RiTimeFill className="size-5 text-primary-foreground" />
                                        </div>
                                    </div>

                                    {/* Highlight list */}
                                    {area.overviewSection?.highlights && (
                                        <div className="mt-5 border-t border-foreground/10 pt-4">
                                            <p className="text-[9px] font-bold uppercase tracking-wider text-foreground/40">
                                                Coverage includes
                                            </p>
                                            <ul className="mt-2 space-y-1.5">
                                                {area.overviewSection.highlights
                                                    .slice(0, 4)
                                                    .map((item, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start gap-2 text-xs text-foreground/70"
                                                        >
                                                            <RiCheckLine className="mt-0.5 size-3 shrink-0 text-primary" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Floating stat card */}
                                <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-foreground/10 bg-white p-3 shadow-xl shadow-black/[0.08] sm:-left-5 sm:block">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-9 items-center justify-center rounded-xl bg-primary">
                                            <RiVerifiedBadgeFill className="size-4 text-primary-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold uppercase tracking-wider text-foreground/40">
                                                Certified
                                            </p>
                                            <p className="text-sm font-black leading-none text-foreground">
                                                Onsite Service
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                OVERVIEW — Editorial intro with pull quote
            ============================================================ */}
            <section className="relative py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">

                        {/* Left: Section header (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="lg:sticky lg:top-24">
                                <div className="flex items-center gap-3">
                                    <RiSparklingFill className="size-4 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                        Overview
                                    </span>
                                    <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                                </div>

                                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
                                    {area.overviewSection.heading}
                                </h2>

                                {/* Pull quote */}
                                <div className="relative mt-6">
                                    <RiDoubleQuotesL className="size-8 text-primary/15" />
                                    <p className="mt-2 font-serif text-sm italic leading-relaxed text-foreground/70 sm:text-base">
                                        Reliable on-site service, dispatched
                                        directly to your villa, apartment, or
                                        roadside location in {area.name}.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Body (7 cols) */}
                        <div className="lg:col-span-7">
                            <div className="space-y-4 text-sm leading-relaxed text-foreground/70 sm:text-[15px]">
                                <p>{area.overviewSection.description}</p>
                                <p>{area.overviewSection.descriptionTwo}</p>
                            </div>

                            {/* Highlights grid */}
                            <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                {area.overviewSection.highlights.map((highlight, i) => {
                                    const num = String(i + 1).padStart(2, "0");
                                    return (
                                        <div
                                            key={i}
                                            className="group flex items-start gap-3 rounded-xl border border-foreground/10 bg-white p-3.5 shadow-[0_2px_8px_-4px_oklch(0.2_0.02_90/0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_24px_-8px_oklch(0.2_0.02_90/0.15)]"
                                        >
                                            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-serif text-[10px] font-bold italic text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                                {num}
                                            </span>
                                            <span className="flex-1 text-xs font-medium leading-relaxed text-foreground">
                                                {highlight}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                EMERGENCY SERVICES — Dark editorial panel
            ============================================================ */}
            <section className="relative border-y border-foreground/10 bg-foreground py-14 sm:py-16 lg:py-20">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-primary/25 blur-[100px]" />
                    <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[100px]" />
                    <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                            backgroundImage: `linear-gradient(to right, oklch(1 0 0) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0) 1px, transparent 1px)`,
                            backgroundSize: "64px 64px",
                            maskImage:
                                "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                        }}
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">

                        {/* Left: Header (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-3">
                                <RiFlashlightFill className="size-4 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                    24/7 Emergency
                                </span>
                            </div>

                            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-background sm:text-3xl lg:text-[2.25rem]">
                                {area.emergencyContentSection.heading}
                            </h2>

                            <div className="mt-4 space-y-3 text-sm leading-relaxed text-background/60">
                                <p>{area.emergencyContentSection.description}</p>
                                <p>{area.emergencyContentSection.descriptionTwo}</p>
                            </div>

                            {/* Live indicator */}
                            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5">
                                <span className="relative flex size-1.5">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                                    Dispatch available now
                                </span>
                            </div>
                        </div>

                        {/* Right: Services grid (7 cols) */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                {area.emergencyContentSection.emergencyServices.map(
                                    (service, i) => (
                                        <div
                                            key={i}
                                            className="group flex items-center gap-3 rounded-xl border border-background/10 bg-background/[0.03] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-background/[0.06]"
                                        >
                                            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 transition-colors group-hover:bg-primary">
                                                <RiCheckLine className="size-3.5 text-primary transition-colors group-hover:text-primary-foreground" />
                                            </span>
                                            <span className="flex-1 text-xs font-semibold text-background/80">
                                                {service}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                SERVICES GRID — From main services data
            ============================================================ */}
            <section className="relative py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-3">
                            <RiToolsFill className="size-4 text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                {area.servicesGridSection.title}
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-foreground/10 to-transparent" />
                            <Link
                                href="/services"
                                className="hidden items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80 sm:inline-flex"
                            >
                                View all
                                <RiArrowRightUpLine className="size-3.5" />
                            </Link>
                        </div>

                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60">
                            {area.servicesGridSection.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                        {popularServices.map((service, index) => (
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
                </div>
            </section>

            {/* ============================================================
                WHY CHOOSE US — Numbered editorial grid
            ============================================================ */}
            <section className="relative border-y border-foreground/10 bg-white py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-3">
                            <RiAwardFill className="size-4 text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                Why Choose Us
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-foreground/10 to-transparent" />
                        </div>

                        <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            {area.whyChooseUsSection.title}
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60">
                            {area.whyChooseUsSection.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                        {area.whyChooseUsSection.items.map((item, i) => {
                            const num = String(i + 1).padStart(2, "0");
                            return (
                                <div
                                    key={i}
                                    className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_32px_-12px_oklch(0.2_0.02_90/0.15)] sm:p-6"
                                >
                                    {/* Watermark numeral */}
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -right-3 -top-6 select-none font-serif text-[5rem] font-bold italic leading-none text-foreground/[0.03] transition-colors duration-500 group-hover:text-primary/[0.08]"
                                    >
                                        {num}
                                    </span>

                                    <div className="relative">
                                        <div className="flex items-center gap-2">
                                            <span className="font-serif text-xs font-bold italic text-primary">
                                                {num}
                                            </span>
                                            <span className="h-2.5 w-px bg-foreground/15" />
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-foreground/40">
                                                Reason
                                            </span>
                                        </div>

                                        <h3 className="mt-3 text-base font-bold leading-tight text-foreground sm:text-lg">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-xs leading-relaxed text-foreground/60 sm:text-[13px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================================
                PROBLEMS — Diagnostic checklist
            ============================================================ */}
            <section className="relative py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-3">
                            <RiAlertLine className="size-4 text-destructive" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-destructive">
                                Common Issues
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-destructive/30 via-foreground/10 to-transparent" />
                        </div>

                        <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            {area.customerProblemsSection.title}
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60">
                            {area.customerProblemsSection.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {area.customerProblemsSection.problems.map(
                            (problem, i) => {
                                const num = String(i + 1).padStart(2, "0");
                                return (
                                    <div
                                        key={i}
                                        className="group flex items-start gap-3 rounded-xl border border-destructive/15 bg-destructive/[0.03] p-4 transition-all duration-200 hover:border-destructive/30 hover:bg-destructive/[0.06]"
                                    >
                                        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded border border-destructive/30 bg-white">
                                            <RiAlertLine className="size-3.5 text-destructive" />
                                        </span>
                                        <div>
                                            <span className="font-serif text-[9px] font-bold italic uppercase tracking-[0.15em] text-destructive/70">
                                                Signal {num}
                                            </span>
                                            <p className="mt-0.5 text-sm font-bold leading-tight text-foreground">
                                                {problem.title}
                                            </p>
                                            <p className="mt-1 text-xs leading-relaxed text-foreground/60">
                                                {problem.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </section>

            {/* ============================================================
                LANDMARKS — Location editorial
            ============================================================ */}
            <section className="relative border-y border-foreground/10 bg-white py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">

                        <div className="lg:col-span-5">
                            <div className="lg:sticky lg:top-24">
                                <div className="flex items-center gap-3">
                                    <RiRoadMapLine className="size-4 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                        Landmarks
                                    </span>
                                    <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                                </div>

                                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                                    {area.narrativeLandmarksSection.title}
                                </h2>

                                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                                    {area.narrativeLandmarksSection.subtitle}
                                </p>

                                <div className="mt-6 rounded-xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-4">
                                    <div className="flex items-center gap-2">
                                        <RiNavigationLine className="size-4 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                                            Coverage
                                        </span>
                                    </div>
                                    <p className="mt-2 text-xs leading-relaxed text-foreground/60">
                                        Our mobile units cover the entire{" "}
                                        {area.name} area — from residential
                                        streets to major landmarks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="space-y-3">
                                {area.narrativeLandmarksSection.landmarks.map(
                                    (landmark, i) => {
                                        const num = String(i + 1).padStart(2, "0");
                                        return (
                                            <div
                                                key={i}
                                                className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_24px_-8px_oklch(0.2_0.02_90/0.12)] sm:p-5"
                                            >
                                                {/* Watermark */}
                                                <span
                                                    aria-hidden="true"
                                                    className="pointer-events-none absolute -right-3 -top-5 select-none font-serif text-[4.5rem] font-bold italic leading-none text-foreground/[0.03] transition-colors duration-500 group-hover:text-primary/[0.08]"
                                                >
                                                    {num}
                                                </span>

                                                <div className="relative flex items-start gap-4">
                                                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                                                        <RiMapPinFill className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
                                                    </span>
                                                    <div className="flex-1">
                                                        <h3 className="text-base font-bold leading-tight text-foreground">
                                                            {landmark.name}
                                                        </h3>
                                                        <p className="mt-1.5 text-xs leading-relaxed text-foreground/60 sm:text-sm">
                                                            {landmark.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                REVIEWS — Editorial quotes
            ============================================================ */}
            {area.reviewsSection?.reviews?.length > 0 && (
                <section className="relative py-14 sm:py-16 lg:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-10">
                            <div className="flex items-center gap-3">
                                <RiStarFill className="size-4 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                    Customer Reviews
                                </span>
                                <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-foreground/10 to-transparent" />
                                <span className="hidden text-[10px] font-bold uppercase tracking-wider text-foreground/40 sm:inline">
                                    5.0 Rating
                                </span>
                            </div>

                            <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                                {area.reviewsSection.title}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                            {area.reviewsSection.reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-white p-5 shadow-[0_2px_12px_-4px_oklch(0.2_0.02_90/0.06)] sm:p-6"
                                >
                                    {/* Quote mark */}
                                    <RiDoubleQuotesL className="size-6 text-primary/20" />

                                    {/* Stars */}
                                    <div className="mt-2 flex items-center gap-0.5">
                                        {[...Array(5)].map((_, s) => (
                                            <RiStarFill
                                                key={s}
                                                className={`size-3 ${
                                                    s < review.rating
                                                        ? "text-primary"
                                                        : "text-foreground/15"
                                                }`}
                                            />
                                        ))}
                                        <span className="ml-1.5 text-[10px] font-bold text-foreground/60">
                                            {review.rating}.0
                                        </span>
                                    </div>

                                    {/* Review text */}
                                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                                        {review.text}
                                    </p>

                                    {/* Footer */}
                                    <div className="mt-4 flex items-center justify-between border-t border-foreground/10 pt-3">
                                        <div className="flex items-center gap-2">
                                            <div className="flex size-7 items-center justify-center rounded-full bg-primary/10 font-serif text-[10px] font-bold italic text-primary">
                                                {review.name.charAt(0)}
                                            </div>
                                            <span className="text-xs font-bold text-foreground">
                                                {review.name}
                                            </span>
                                        </div>
                                        <span className="rounded-full bg-primary/[0.08] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-primary">
                                            {review.service}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================================
                FAQ — Editorial interview
            ============================================================ */}
            <section className="relative border-y border-foreground/10 bg-white py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">

                        <div className="lg:col-span-5">
                            <div className="lg:sticky lg:top-24">
                                <div className="flex items-center gap-3">
                                    <RiQuestionLine className="size-4 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                        FAQ
                                    </span>
                                </div>

                                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                                    Questions about{" "}
                                    <span className="italic text-primary">
                                        {area.name}
                                    </span>
                                    ?
                                </h2>

                                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                                    {area.faqSection.subtitle}
                                </p>

                                <div className="mt-6 rounded-xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-4">
                                    <p className="text-xs font-semibold text-foreground">
                                        Still not sure?
                                    </p>
                                    <a
                                        href={numberCallLink}
                                        className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary/80"
                                    >
                                        <RiPhoneFill className="size-3" />
                                        Call {displayNumber}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="divide-y divide-foreground/10 border-y border-foreground/10">
                                {area.faqSection.faqs.map((faq, i) => {
                                    const num = String(i + 1).padStart(2, "0");
                                    return (
                                        <details
                                            key={i}
                                            className="group py-5"
                                        >
                                            <summary className="flex cursor-pointer items-start justify-between gap-4 marker:hidden hover:no-underline">
                                                <div className="flex items-start gap-4">
                                                    <span className="font-serif text-sm font-bold italic text-primary">
                                                        Q{num}
                                                    </span>
                                                    <span className="flex-1 text-sm font-bold leading-relaxed text-foreground sm:text-base">
                                                        {faq.question}
                                                    </span>
                                                </div>
                                                <RiArrowDownSLine className="mt-1 size-4 shrink-0 text-foreground/40 transition-transform duration-200 group-open:rotate-180 group-open:text-primary" />
                                            </summary>
                                            <div className="mt-3 pl-9">
                                                <div className="rounded-xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-4">
                                                    <p className="text-sm leading-relaxed text-foreground/70">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                INTERNAL LINKS — Explore more services
            ============================================================ */}
            <section className="relative py-14 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                Explore More
                            </span>
                            <h2 className="mt-2 text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                                {area.internalLinksSection.title}
                            </h2>
                        </div>
                        <p className="text-xs text-foreground/60">
                            {area.internalLinksSection.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {area.internalLinksSection.links.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="group flex items-center justify-between gap-3 rounded-xl border border-foreground/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
                            >
                                <span className="text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                                    {link.name}
                                </span>
                                <RiArrowRightUpLine className="size-4 text-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                NEARBY AREAS — Editorial grid
            ============================================================ */}
            <section className="relative border-y border-foreground/10 bg-white py-14 sm:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <div className="flex items-center gap-3">
                                <RiMapPinFill className="size-4 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                    Nearby Areas
                                </span>
                            </div>
                            <h2 className="mt-2 text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                                {area.nearbyAreasSection.title}
                            </h2>
                        </div>
                        <Link
                            href="/area-we-serve"
                            className="group inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
                        >
                            View all areas
                            <RiArrowRightUpLine className="size-3.5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {(nearbyAreas.length > 0 ? nearbyAreas : otherAreas).map(
                            (nearby, i) => (
                                <Link
                                    key={i}
                                    href={`/area-we-serve/${nearby.slug}`}
                                    className="group flex items-center justify-between gap-3 rounded-xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                            <RiMapPinFill className="size-3.5 text-primary transition-colors group-hover:text-primary-foreground" />
                                        </span>
                                        <span className="text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                                            {nearby.name}
                                        </span>
                                    </div>
                                    <RiArrowRightLine className="size-3.5 text-foreground/30 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* ============================================================
                FINAL CTA — Editorial closing
            ============================================================ */}
            <section className="relative py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-foreground/15 bg-foreground">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-primary/25 blur-[100px]" />
                            <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[100px]" />
                            <div
                                className="absolute inset-0 opacity-[0.08]"
                                style={{
                                    backgroundImage: `linear-gradient(to right, oklch(1 0 0) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0) 1px, transparent 1px)`,
                                    backgroundSize: "64px 64px",
                                    maskImage:
                                        "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                                    WebkitMaskImage:
                                        "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                                }}
                            />
                        </div>

                        {/* Corner marks */}
                        <div className="pointer-events-none absolute left-4 top-4 size-10">
                            <div className="absolute left-0 top-0 h-px w-8 bg-primary/50" />
                            <div className="absolute left-0 top-0 h-8 w-px bg-primary/50" />
                        </div>
                        <div className="pointer-events-none absolute bottom-4 right-4 size-10">
                            <div className="absolute bottom-0 right-0 h-px w-8 bg-primary/50" />
                            <div className="absolute bottom-0 right-0 h-8 w-px bg-primary/50" />
                        </div>

                        <div className="relative grid grid-cols-1 items-center gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-12">
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                                    <RiVerifiedBadgeFill className="size-3 text-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                                        Fast dispatch in {area.name}
                                    </span>
                                </div>

                                <h2 className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight text-background sm:text-3xl lg:text-[2.25rem]">
                                    Car trouble in {area.name}?{" "}
                                    <span className="italic text-primary">
                                        We're already nearby.
                                    </span>
                                </h2>

                                <p className="mt-3 max-w-xl text-sm leading-relaxed text-background/60 sm:text-base">
                                    Certified mechanics, genuine parts, and a{" "}
                                    {area.responseTime} response — anywhere in{" "}
                                    {area.name}.
                                </p>

                                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <RiStarFill
                                                key={i}
                                                className="size-3 text-primary"
                                            />
                                        ))}
                                        <span className="ml-1.5 text-[11px] font-bold text-background/80">
                                            5.0 Rated
                                        </span>
                                    </div>
                                    <span className="size-1 rounded-full bg-background/30" />
                                    <span className="text-[11px] font-medium text-background/60">
                                        Serving all {area.name} landmarks
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 lg:col-span-5">
                                <Link
                                    href={numberCallLink}
                                    className="group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
                                >
                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                    <RiPhoneFill className="relative size-4" />
                                    <span className="relative">
                                        Call {displayNumber}
                                    </span>
                                    <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                                <Link
                                    href={whatsappCallLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-background/20 bg-background/[0.05] px-6 text-sm font-bold text-background transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                                >
                                    <RiWhatsappFill className="size-4" />
                                    WhatsApp Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
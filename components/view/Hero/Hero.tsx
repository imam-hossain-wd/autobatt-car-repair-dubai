import Link from "next/link";
import Image from "next/image";
import {
    RiArrowRightLine,
    RiPhoneFill,
    RiWhatsappFill,
    RiShieldCheckFill,
    RiTimeFill,
    RiToolsFill,
    RiStarFill,
    RiCheckboxCircleFill,
    RiBatteryChargeFill,
    RiVerifiedBadgeFill,
    RiFlashlightFill,
    RiCustomerServiceFill,
    RiArrowRightUpLine,
    RiMapPinFill,
} from "@remixicon/react";

import { heroBanner } from "@/config/imageConfig";
import { SiteConfig } from "@/config/siteConfig";

const STATS = [
    {
        icon: RiTimeFill,
        value: "5–30",
        unit: "min",
        label: "Response",
        sublabel: "Live dispatch",
    },
    {
        icon: RiBatteryChargeFill,
        value: "100%",
        unit: "",
        label: "Genuine Parts",
        sublabel: "OEM certified",
    },
    {
        icon: RiToolsFill,
        value: "90%",
        unit: "%",
        label: "Onsite Fix",
        sublabel: "No towing",
    },
];

const TRUST_POINTS = [
    "Available 24/7 across Dubai",
    "No towing required",
    "Transparent upfront pricing",
];

export default function Hero() {
    const {
        displayNumber,
        numberCallLink,
        whatsappCallLink,
        city,
        serviceAreas,
    } = SiteConfig;

    // Split service areas into two rows for the marquee
    const half = Math.ceil((serviceAreas?.length || 0) / 2);
    const rowOne = serviceAreas?.slice(0, half) || [];
    const rowTwo = serviceAreas?.slice(half) || [];

    return (
        <section className="relative w-full overflow-hidden bg-background py-20">
            {/* ============================================================
                BACKGROUND — Multi-layer atmosphere
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Radial primary glow top-right */}
                <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/[0.12] blur-[140px]" />
                {/* Secondary glow bottom-left */}
                <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />

                {/* Fine grid lines */}
                <div
                    className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
                    style={{
                        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                        backgroundSize: '64px 64px',
                        maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 80%)',
                    }}
                />

                {/* Diagonal accent line */}
                <div className="absolute left-0 top-1/3 hidden h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent lg:block" />
            </div>

            {/* ============================================================
                MAIN CONTENT
            ============================================================ */}
            <div className="relative px-5 py-8 lg:py-14">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-6">

                    {/* =====================================================
                        LEFT COLUMN (7 cols) — Content
                    ===================================================== */}
                    <div className="relative z-10 lg:col-span-7">

                        {/* Live badge — refined pill with dot */}
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.06] py-1 pr-3.5 pl-1 backdrop-blur-md">
                            <span className="flex size-6 items-center justify-center rounded-full bg-primary/15">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                                </span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[11px]">
                                Live Dispatch · {city}
                            </span>
                            <span className="hidden h-3 w-px bg-primary/30 sm:block" />
                            <span className="hidden text-[10px] font-semibold text-primary/80 sm:block">
                                Open Now
                            </span>
                        </div>

                        {/* HEADLINE — massive, editorial, gradient accent */}
                        <h1 className="mt-6 text-[2.4rem] font-bold leading-[1.02] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]">
                            <span className="block">24/7 Car Battery</span>
                            <span className="block">
                                &{" "}
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                                        Auto Repair
                                    </span>
                                    {/* Animated SVG underline */}
                                    <svg
                                        className="absolute -bottom-1 left-0 h-2 w-full text-primary/30"
                                        viewBox="0 0 300 12"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M2 9C60 3 140 2 298 6"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </span>
                            <span className="block text-muted-foreground/80 lg:text-[3.2rem] xl:text-[3.75rem]">
                                Mobile Mechanic in Dubai
                            </span>
                        </h1>

                        {/* Description — tightened */}
                        <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                            Certified technicians arrive at your doorstep in{" "}
                            <span className="font-semibold text-foreground">5–30 minutes</span>.
                            Based in{" "}
                            <span className="font-semibold text-foreground">Jebel Ali</span>,
                            serving all of Dubai with genuine parts and upfront pricing.
                        </p>

                        {/* Trust points — compact inline badges */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {TRUST_POINTS.map((point, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-foreground/90"
                                >
                                    <RiCheckboxCircleFill className="size-3 shrink-0 text-primary" />
                                    {point}
                                </span>
                            ))}
                        </div>

                        {/* CTA GROUP — primary + secondary */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            {/* Primary CTA with shine effect */}
                            <Link
                                href={numberCallLink}
                                className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 sm:px-7"
                            >
                                {/* Shine sweep on hover */}
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <RiPhoneFill className="relative size-4" />
                                <span className="relative text-base font-semibold tracking-tight">
                                    {displayNumber}
                                </span>
                                <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            {/* Secondary CTA */}
                            <Link
                                href={whatsappCallLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border-2 border-border bg-background/60 px-6 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary sm:px-7"
                            >
                                <RiWhatsappFill className="size-4 transition-transform group-hover:scale-110" />
                                WhatsApp Us
                            </Link>
                        </div>

                        {/* Micro trust — single line */}
                        <p className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                            <RiShieldCheckFill className="size-3.5 text-primary" />
                            No call-out fee
                            <span className="text-border">·</span>
                            Free battery health check
                            <span className="text-border">·</span>
                            Certified mechanics
                        </p>
                    </div>

                    {/* =====================================================
                        RIGHT COLUMN (5 cols) — Layered image composition
                    ===================================================== */}
                    <div className="relative lg:col-span-5">
                        <div className="relative mx-auto max-w-md lg:max-w-none">

                            {/* Decorative dotted ring behind */}
                            <div className="pointer-events-none absolute -inset-4 hidden lg:block">
                                <div className="absolute inset-0 rounded border border-dashed border-primary/15" />
                            </div>

                            {/* Main image card */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border/80 bg-muted shadow-2xl shadow-primary/10">
                                <Image
                                    src={heroBanner?.hero}
                                    alt="Certified mobile car mechanic repairing a vehicle on-site in Dubai"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover rounded-2xl"
                                    priority
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5" />

                                {/* Top-right review badge */}
                                <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 backdrop-blur-md">
                                    <RiStarFill className="size-3 text-primary" />
                                    <span className="text-[11px] font-bold text-white">4.9</span>
                                    <span className="text-[9px] text-white/60">· 500+</span>
                                </div>

                                {/* Bottom content inside image */}
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/20 px-2 py-0.5 backdrop-blur-md">
                                        <RiFlashlightFill className="size-2.5 text-primary" />
                                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                                            Rapid Response
                                        </span>
                                    </div>
                                    <p className="text-base font-bold leading-tight text-white sm:text-lg">
                                        Battery · Diagnostics
                                        <br />· Onsite Repairs
                                    </p>
                                </div>
                            </div>

                            {/* Floating stat card — bottom-left overlapping */}
                            <div className="absolute -bottom-6 -left-4 hidden min-w-[200px] rounded-xl border border-border bg-card p-3 shadow-xl shadow-primary/10 sm:block">
                                <div className="flex items-center gap-2.5">
                                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                                        <RiTimeFill className="size-4 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold leading-none text-foreground">
                                            5–30{" "}
                                            <span className="text-[11px] font-semibold text-muted-foreground">
                                                min
                                            </span>
                                        </p>
                                        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                            Average arrival
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating verified badge — top-right */}
                            <div className="absolute -right-3 top-8 hidden rounded-full border border-border bg-card p-2 shadow-lg shadow-primary/10 sm:flex">
                                <RiVerifiedBadgeFill className="size-6 text-primary" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    STATS STRIP — Full-width bento row
                ============================================================ */}
                <div className="relative mt-16 grid grid-cols-1 gap-3 rounded-2xl border border-border/60 bg-muted/30 p-3 backdrop-blur-sm sm:grid-cols-3 lg:mt-20">
                    {STATS.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={i}
                                className="group relative flex items-center gap-3.5 rounded-xl bg-background/60 p-3.5 transition-all duration-200 hover:bg-background hover:shadow-sm"
                            >
                                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/10">
                                    <Icon className="size-5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-baseline gap-1">
                                        <p className="text-xl font-bold leading-none text-foreground">
                                            {stat.value}
                                        </p>
                                        {stat.unit && (
                                            <span className="text-xs font-semibold text-muted-foreground">
                                                {stat.unit}
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-foreground/80">
                                        {stat.label}
                                    </p>
                                    <p className="text-[10px] font-medium text-muted-foreground">
                                        {stat.sublabel}
                                    </p>
                                </div>
                                {/* Hover indicator arrow */}
                                <RiArrowRightUpLine className="size-4 text-primary/0 transition-all group-hover:text-primary/60" />
                            </div>
                        );
                    })}
                </div>

                {/* ============================================================
                    SERVICE AREAS — Infinite marquee rows
                ============================================================ */}
                <div className="relative mt-12 sm:mt-16">
                    {/* Header */}
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                            <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70 shadow-md shadow-primary/25">
                                <RiMapPinFill className="size-4 text-primary-foreground" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold tracking-tight text-foreground">
                                    Areas We Serve
                                </h3>
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                    {serviceAreas?.length || 16}+ neighborhoods across Dubai
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/area-we-serve"
                            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
                        >
                            View All
                            <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>

                    {/* Marquee rows with fade edges */}
                    <div className="relative space-y-2 overflow-hidden">
                        {/* Fade masks left/right */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

                        {/* Row 1 — left to right */}
                        <div className="flex gap-2 animate-marquee">
                            {[...rowOne, ...rowOne].map((area, i) => (
                                <Link
                                    key={`r1-${area.slug}-${i}`}
                                    href={`/area-we-serve/${area.slug}`}
                                    className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/[0.05] hover:text-primary"
                                >
                                    <span className="size-1 rounded-full bg-primary/40 group-hover:bg-primary" />
                                    <span className="whitespace-nowrap">{area.name}</span>
                                    <RiArrowRightUpLine className="size-2.5 opacity-0 -ml-0.5 transition-all group-hover:ml-0 group-hover:opacity-100" />
                                </Link>
                            ))}
                        </div>

                        {/* Row 2 — right to left */}
                        <div className="flex gap-2 animate-marquee-reverse">
                            {[...rowTwo, ...rowTwo].map((area, i) => (
                                <Link
                                    key={`r2-${area.slug}-${i}`}
                                    href={`/area-we-serve/${area.slug}`}
                                    className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/[0.05] hover:text-primary"
                                >
                                    <span className="size-1 rounded-full bg-primary/40 group-hover:bg-primary" />
                                    <span className="whitespace-nowrap">{area.name}</span>
                                    <RiArrowRightUpLine className="size-2.5 opacity-0 -ml-0.5 transition-all group-hover:ml-0 group-hover:opacity-100" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Footer trust row */}
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:justify-between">
                        <span className="inline-flex items-center gap-1.5">
                            <span className="relative flex size-1.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                            </span>
                            Live Dispatch Active
                        </span>

                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
                            <span className="inline-flex items-center gap-1">
                                <RiTimeFill className="size-3 text-primary" />
                                5–30 Min Arrival
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <RiShieldCheckFill className="size-3 text-primary" />
                                Certified Mechanics
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <RiBatteryChargeFill className="size-3 text-primary" />
                                Genuine Parts
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <RiCustomerServiceFill className="size-3 text-primary" />
                                24/7 Support
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
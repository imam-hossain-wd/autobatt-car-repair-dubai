// app/(marketing)/_components/who-we-are.tsx

import Link from "next/link";
import Image from "next/image";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiShieldCheckFill,
    RiTimeFill,
    RiUserStarFill,
    RiMapPinFill,
    RiCheckLine,
    RiBatteryChargeFill,
    RiVerifiedBadgeFill,
    RiFlashlightFill,
    RiPhoneFill,
    RiStarFill,
    RiToolsFill,
    RiCustomerServiceFill,
    RiDoubleQuotesL,
    RiArrowDownLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { aboutUs } from "@/data/businessInfo";
import { heroBanner } from "@/config/imageConfig";

const HIGHLIGHTS = [
    {
        icon: RiTimeFill,
        value: "5–30",
        unit: "min",
        label: "Response Time",
    },
    {
        icon: RiUserStarFill,
        value: "500+",
        unit: "",
        label: "Happy Drivers",
    },
    {
        icon: RiMapPinFill,
        value: "16+",
        unit: "",
        label: "Service Areas",
    },
    {
        icon: RiShieldCheckFill,
        value: "100%",
        unit: "",
        label: "Guaranteed Work",
    },
];

const CORE_VALUES = [
    {
        icon: RiToolsFill,
        title: "Certified Technicians",
        description:
            "Multi-brand ASE-trained mechanics with years of hands-on expertise.",
        stat: "15+ yrs",
        statLabel: "avg experience",
    },
    {
        icon: RiFlashlightFill,
        title: "Dealer-Grade Equipment",
        description:
            "State-of-the-art diagnostic scanners and specialized tools on every van.",
        stat: "90%",
        statLabel: "onsite fix rate",
    },
    {
        icon: RiBatteryChargeFill,
        title: "Genuine OEM Parts",
        description:
            "Only authentic Varta, Amaron & ACDelco batteries and components.",
        stat: "100%",
        statLabel: "genuine parts",
    },
    {
        icon: RiCustomerServiceFill,
        title: "24/7 Emergency Coverage",
        description:
            "Dedicated rescue teams operating round-the-clock, all year long.",
        stat: "365",
        statLabel: "days open",
    },
];

export function WhoWeAre() {
    const { foundedYear, brandName, city } = SiteConfig;

    return (
        <section className="relative overflow-hidden bg-background py-10">
            {/* ============================================================
                BACKGROUND — Layered editorial atmosphere
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/[0.05] blur-[140px]" />
                <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />

                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ============================================================
                    EDITORIAL CHAPTER MARKER
                ============================================================ */}
                <div className="mb-12 flex items-center gap-4">
                    <span className="inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
                        <span className="font-serif text-xs font-bold italic text-primary">
                            01
                        </span>
                        <span className="h-3 w-px bg-primary/30" />
                        <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-[11px]">
                            Who We Are
                        </span>
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-border to-transparent" />
                </div>

                {/* ============================================================
                    PART 1 — IMAGE + MANIFESTO SPREAD
                ============================================================ */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

                    {/* LEFT: Layered image composition (5 cols) */}
                    <div className="relative order-2 lg:order-1 lg:col-span-5">
                        <div className="relative mx-auto max-w-md lg:max-w-none">

                            {/* Decorative dotted ring behind */}
                            <div className="pointer-events-none absolute -inset-6 hidden lg:block">
                                <div className="absolute inset-0 rounded-[2.5rem] border border-dashed border-primary/15" />
                            </div>

                            {/* Offset accent frame */}
                            <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-primary/25 sm:block" />

                            {/* Main image */}
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded bg-muted shadow-2xl shadow-primary/10">
                                <Image
                                    src={heroBanner?.hero}
                                    alt={`Certified mobile car mechanic team in ${city}`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                                {/* Corner marks */}
                                <div className="pointer-events-none absolute left-4 top-4">
                                    <div className="absolute left-0 top-0 h-px w-8 bg-primary/70" />
                                    <div className="absolute left-0 top-0 h-8 w-px bg-primary/70" />
                                </div>

                                {/* Top-right rating badge */}
                                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 backdrop-blur-md">
                                    <div className="flex items-center gap-1.5">
                                        <RiStarFill className="size-3 text-primary" />
                                        <span className="text-[10px] font-bold text-white">
                                            5.0
                                        </span>
                                        <span className="text-[9px] text-white/60">
                                            rating
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom: Certified team label */}
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                                        <RiVerifiedBadgeFill className="size-3.5 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                                            Certified Team
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating: Founded since badge */}
                            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-card p-3.5 shadow-xl shadow-black/[0.08] dark:shadow-black/40 sm:-left-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
                                        <RiShieldCheckFill className="size-5 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                            Trusted Since
                                        </p>
                                        <p className="text-lg font-black leading-none text-foreground">
                                            {foundedYear}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating: 24/7 circular badge */}
                            <div className="absolute -right-3 -top-3 hidden size-24 flex-col items-center justify-center rounded-full border-4 border-background bg-foreground text-center shadow-xl sm:-right-5 sm:-top-5 sm:flex">
                                <span className="text-[9px] font-bold uppercase tracking-wider text-background/60">
                                    Serving
                                </span>
                                <span className="text-lg font-black leading-none text-background">
                                    Dubai
                                </span>
                                <span className="text-[9px] font-bold uppercase tracking-wider text-background/60">
                                    24/7
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Manifesto content (7 cols) */}
                    <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-7">
                        {/* Headline with serif italic accent */}
                        <h2 className="text-[2.2rem] font-bold leading-[1.02] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
                            Dubai's Most{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 italic text-primary">
                                    Trusted
                                </span>
                                <svg
                                    className="absolute -bottom-1.5 left-0 h-3 w-full text-primary/25"
                                    viewBox="0 0 300 12"
                                    fill="none"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M3 9C60 3 140 2 297 6"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>{" "}
                            Mobile Car Repair Team
                        </h2>

                        {/* Pull-quote block — premium editorial moment */}
                        <div className="relative mt-8 max-w-2xl">
                            <RiDoubleQuotesL
                                className="absolute -left-2 -top-4 size-8 text-primary/15"
                                aria-hidden="true"
                            />
                            <p className="pl-6 font-serif text-base italic leading-relaxed text-foreground/90 sm:text-lg">
                                A fully equipped garage on wheels — dispatched
                                directly to your exact GPS location, wherever
                                you are in Dubai.
                            </p>
                        </div>

                        {/* Body paragraphs */}
                        <div className="mt-6 space-y-4">
                            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                                {aboutUs.para1}
                            </p>
                            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                                {aboutUs.para2}
                            </p>
                        </div>

                        {/* Mini stat strip — inline proof points */}
                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-border/60 py-4">
                            {[
                                { value: `${foundedYear}`, label: "Founded" },
                                { value: "500+", label: "Drivers helped" },
                                { value: "16+", label: "Areas covered" },
                                { value: "24/7", label: "Dispatch" },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-baseline gap-1.5">
                                    <span className="text-lg font-black leading-none text-foreground">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA row */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                href="/about"
                                className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <span className="relative">More About Us</span>
                                <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>

                            <Link
                                href={SiteConfig.numberCallLink}
                                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background px-6 text-sm font-bold text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary"
                            >
                                <RiPhoneFill className="size-4" />
                                {SiteConfig.displayNumber}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    PART 2 — CORE VALUES BENTO GRID
                ============================================================ */}
                <div className="relative mt-20 lg:mt-28">
                    {/* Sub-header */}
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                <span className="size-1.5 rounded-full bg-primary" />
                                Why Drivers Trust Us
                            </span>
                            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.5rem]">
                                Built different,{" "}
                                <span className="italic text-primary">
                                    on purpose
                                </span>
                            </h3>
                        </div>
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
                        >
                            Learn more
                            <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>

                    {/* Values bento grid — 4 cards, 2x2 asymmetric */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                        {CORE_VALUES.map((value, index) => {
                            const Icon = value.icon;
                            const number = String(index + 1).padStart(2, "0");
                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/[0.08] sm:p-7"
                                >
                                    {/* Hover gradient wash */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Giant background number */}
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -right-4 -top-8 select-none font-serif text-[8rem] font-bold italic leading-none tracking-tighter text-primary/[0.05] transition-all duration-500 group-hover:text-primary/[0.08]"
                                    >
                                        {number}
                                    </span>

                                    <div className="relative flex h-full flex-col">
                                        {/* Header row: icon + stat */}
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="relative inline-flex">
                                                <div className="absolute inset-0 rounded-xl bg-primary/25 blur-md transition-all duration-500 group-hover:bg-primary/40" />
                                                <div className="relative flex size-12 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/25 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                                                    <Icon className="size-5 text-primary-foreground" />
                                                </div>
                                            </div>

                                            {/* Micro stat */}
                                            <div className="text-right">
                                                <p className="font-serif text-xl font-bold italic leading-none text-primary">
                                                    {value.stat}
                                                </p>
                                                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                                    {value.statLabel}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h4 className="mt-6 text-lg font-bold leading-tight tracking-tight text-foreground sm:text-xl">
                                            {value.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                                            {value.description}
                                        </p>

                                        {/* Footer accent line */}
                                        <div className="mt-5 flex items-center gap-2">
                                            <span className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-primary/40" />
                                            <RiArrowRightLine className="size-3 text-primary/0 transition-all duration-500 group-hover:text-primary" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ============================================================
                    PART 3 — ANNUAL REPORT STATS PANEL
                ============================================================ */}
                <div className="relative mt-20 lg:mt-28">
                    <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground">
                        {/* Layered background */}
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full bg-primary/25 blur-[100px]" />
                            <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[100px]" />

                            {/* Grid texture */}
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
                        <div className="pointer-events-none absolute left-4 top-4">
                            <div className="absolute left-0 top-0 h-px w-6 bg-primary/60" />
                            <div className="absolute left-0 top-0 h-6 w-px bg-primary/60" />
                        </div>
                        <div className="pointer-events-none absolute bottom-4 right-4">
                            <div className="absolute bottom-0 right-0 h-px w-6 bg-primary/60" />
                            <div className="absolute bottom-0 right-0 h-6 w-px bg-primary/60" />
                        </div>

                        {/* Header row */}
                        <div className="relative flex flex-wrap items-end justify-between gap-3 border-b border-background/10 px-6 py-5 sm:px-8">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/50">
                                    At a Glance
                                </p>
                                <p className="mt-1 text-sm font-bold text-background">
                                    By the numbers
                                </p>
                            </div>
                            <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                                <span className="relative flex size-1.5">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
                                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                                </span>
                                Live · {foundedYear}–{new Date().getFullYear()}
                            </p>
                        </div>

                        {/* Stats grid */}
                        <div className="relative grid grid-cols-2 divide-x divide-background/10 lg:grid-cols-4">
                            {HIGHLIGHTS.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={i}
                                        className="group flex flex-col gap-3 p-6 transition-colors hover:bg-background/[0.03] sm:p-7 lg:p-8"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/20 transition-transform duration-300 group-hover:scale-110">
                                                <Icon className="size-3.5 text-primary" />
                                            </div>
                                            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-background/40">
                                                Metric {String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        <div>
                                            <p className="text-3xl font-black leading-none text-background sm:text-4xl">
                                                {item.value}
                                                {item.unit && (
                                                    <span className="ml-1 text-base font-semibold text-background/50">
                                                        {item.unit}
                                                    </span>
                                                )}
                                            </p>
                                            <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-background/50 sm:text-[11px]">
                                                {item.label}
                                            </p>
                                        </div>

                                        {/* Decorative bar */}
                                        <div className="h-0.5 w-full overflow-hidden rounded-full bg-background/10">
                                            <div className="h-full w-2/3 rounded-full bg-primary/60 transition-all duration-500 group-hover:w-full" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Footer strip */}
                        <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-background/10 px-6 py-4 sm:px-8">
                            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-background/40">
                                <RiCheckLine className="size-3 text-primary" />
                                Verified performance metrics
                            </p>
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
                            >
                                Full story
                                <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
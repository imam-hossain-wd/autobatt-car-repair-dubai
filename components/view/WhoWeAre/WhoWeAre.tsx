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
        description: "Multi-brand ASE-trained mechanics with years of hands-on expertise.",
    },
    {
        icon: RiFlashlightFill,
        title: "Dealer-Grade Equipment",
        description: "State-of-the-art diagnostic scanners and specialized tools on every van.",
    },
    {
        icon: RiBatteryChargeFill,
        title: "Genuine OEM Parts",
        description: "Only authentic Varta, Amaron & ACDelco batteries and components.",
    },
    {
        icon: RiCustomerServiceFill,
        title: "24/7 Emergency Coverage",
        description: "Dedicated rescue teams operating round-the-clock, all year long.",
    },
];

export function WhoWeAre() {
    const { foundedYear, brandName, city } = SiteConfig;

    return (
        <section className="relative overflow-hidden bg-background py-8">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Left primary glow */}
                <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[130px]" />

                {/* Right primary glow */}
                <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[110px]" />

                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.4] dark:opacity-25"
                    style={{
                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
                    }}
                />

                {/* Fine vertical hairlines */}
                <div className="hidden lg:block">
                    <div className="absolute left-[38%] top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ============================================================
                    TOP: IMAGE + HEADLINE ASYMMETRIC COMPOSITION
                ============================================================ */}
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* LEFT: Image with floating elements (5 cols) */}
                    <div className="relative order-2 lg:order-1 lg:col-span-5">
                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            {/* Offset primary frame behind image */}
                            <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-primary/30 sm:block" />

                            {/* Main image */}
                            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-muted">
                                <Image
                                    src={heroBanner?.hero}
                                    alt={`Certified mobile car mechanic team in ${city}`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Corner crop marks (top-left) */}
                                <div className="pointer-events-none absolute left-4 top-4">
                                    <div className="absolute left-0 top-0 h-px w-8 bg-primary/70" />
                                    <div className="absolute left-0 top-0 h-8 w-px bg-primary/70" />
                                </div>

                                {/* Bottom info strip inside image */}
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                                            <RiVerifiedBadgeFill className="size-3.5 text-primary" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                                                Certified Team
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <RiStarFill key={i} className="size-3 text-primary" />
                                            ))}
                                            <span className="ml-1 text-[10px] font-bold text-white">
                                                5.0
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating: Founded badge (bottom-left, overlapping) */}
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

                            {/* Floating: 24/7 circular badge (top-right, overlapping) */}
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

                    {/* RIGHT: Content (7 cols) */}
                    <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-7">
                        {/* Eyebrow */}
                        {/* <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
                            <span className="relative flex size-1.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                Who We Are
                            </span>
                        </div> */}

                        {/* Headline */}
                        <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[3rem]">
                            Dubai's Most Trusted{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-primary">
                                    Mobile Car Repair
                                </span>
                                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-primary/15" />
                            </span>{" "}
                            Team
                        </h2>

                        {/* Lead paragraph */}
                        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                            {aboutUs.para1}
                        </p>

                        {/* Secondary paragraph */}
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                            {aboutUs.para2}
                        </p>

                        {/* CTA row */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                href="/about"
                                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                            >
                                More About Us
                                <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>

                            <Link
                                href={SiteConfig.numberCallLink}
                                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background px-6 text-sm font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                            >
                                <RiPhoneFill className="size-4" />
                                {SiteConfig.displayNumber}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    MIDDLE: CORE VALUES 4-GRID
                ============================================================ */}
                <div className="relative mt-16 lg:mt-24">
                    {/* Section sub-header */}
                    <div className="mb-8 flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                            <span className="size-1.5 rounded-full bg-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                Why Drivers Trust Us
                            </span>
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
                    </div>

                    {/* Values grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {CORE_VALUES.map((value, index) => {
                            const Icon = value.icon;
                            const number = String(index + 1).padStart(2, "0");
                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/[0.08]"
                                >
                                    {/* Hover gradient */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    {/* Giant background number */}
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -right-2 -top-4 select-none text-[5rem] font-black leading-none text-primary/[0.04] transition-colors duration-300 group-hover:text-primary/[0.07]"
                                    >
                                        {number}
                                    </span>

                                    <div className="relative">
                                        {/* Icon */}
                                        <div className="relative inline-flex">
                                            <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md transition-all duration-300 group-hover:bg-primary/30" />
                                            <div className="relative flex size-11 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-105">
                                                <Icon className="size-5 text-primary-foreground" />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="mt-4 text-sm font-bold leading-tight tracking-tight text-foreground sm:text-base">
                                            {value.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                                            {value.description}
                                        </p>
                                    </div>

                                    {/* Bottom accent line */}
                                    <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ============================================================
                    BOTTOM: DARK STATS BAR (full width)
                ============================================================ */}
                <div className="relative mt-16 lg:mt-20">
                    <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground">
                        {/* Background accents */}
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[80px]" />
                            <div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px]" />

                            {/* Dot grid */}
                            <div
                                className="absolute inset-0 opacity-[0.15]"
                                style={{
                                    backgroundImage: `radial-gradient(circle, oklch(1 0 0) 1px, transparent 1px)`,
                                    backgroundSize: "28px 28px",
                                    maskImage:
                                        "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                                    WebkitMaskImage:
                                        "radial-gradient(ellipse at center, black 20%, transparent 75%)",
                                }}
                            />
                        </div>

                        {/* Corner crop marks */}
                        <div className="pointer-events-none absolute left-4 top-4">
                            <div className="absolute left-0 top-0 h-px w-6 bg-primary/60" />
                            <div className="absolute left-0 top-0 h-6 w-px bg-primary/60" />
                        </div>
                        <div className="pointer-events-none absolute bottom-4 right-4">
                            <div className="absolute bottom-0 right-0 h-px w-6 bg-primary/60" />
                            <div className="absolute bottom-0 right-0 h-6 w-px bg-primary/60" />
                        </div>

                        {/* Stats grid */}
                        <div className="relative grid grid-cols-2 divide-x divide-background/10 lg:grid-cols-4">
                            {HIGHLIGHTS.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={i}
                                        className="group flex items-center gap-3.5 p-5 transition-colors hover:bg-background/[0.03] sm:gap-4 sm:p-6 lg:p-7"
                                    >
                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 transition-transform duration-300 group-hover:scale-110">
                                            <Icon className="size-5 text-primary" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-2xl font-black leading-none text-background sm:text-3xl">
                                                {item.value}
                                                {item.unit && (
                                                    <span className="ml-0.5 text-base font-semibold text-background/50">
                                                        {item.unit}
                                                    </span>
                                                )}
                                            </p>
                                            <p className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-background/50 sm:text-[11px]">
                                                {item.label}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
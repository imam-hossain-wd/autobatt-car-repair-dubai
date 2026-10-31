// app/(marketing)/services/page.tsx

import Link from "next/link";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiTimeFill,
    RiShieldCheckFill,
    RiBatteryChargeFill,
    RiFlashlightFill,
    RiCustomerServiceFill,
    RiWhatsappFill,
    RiCheckboxCircleFill,
    RiToolsFill,
    RiStarFill,
    RiVerifiedBadgeFill,
    RiMapPinFill,
    RiGlobalFill,
    RiPhoneFill,
    RiDoubleQuotesL,
    RiArrowDownLine,
    RiFingerprintLine,
    RiSparklingFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { services } from "@/data/services/services";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";

/* ============ Trust Points ============ */
const TRUST_POINTS = [
    { icon: RiTimeFill, title: "5–30 Min", subtitle: "Response Time" },
    { icon: RiShieldCheckFill, title: "Certified", subtitle: "Mechanics" },
    { icon: RiBatteryChargeFill, title: "Genuine", subtitle: "Parts Only" },
    { icon: RiCustomerServiceFill, title: "24/7", subtitle: "Available" },
];

/* ============ Category Index ============ */
const CATEGORY_INDEX = [
    {
        number: "01",
        title: "Emergency Services",
        count: 3,
        examples: ["Battery", "Jump Start", "Roadside"],
    },
    {
        number: "02",
        title: "Mechanical Repairs",
        count: 8,
        examples: ["Alternator", "Starter", "Brakes"],
    },
    {
        number: "03",
        title: "Diagnostics",
        count: 4,
        examples: ["OBD-II", "Electrical", "ABS"],
    },
    {
        number: "04",
        title: "Maintenance",
        count: 5,
        examples: ["AC Refill", "Oil Change", "Detailing"],
    },
];

export default function ServicesPage() {
    const {
        city,
        displayNumber,
        numberCallLink,
        whatsappCallLink,
        responseTime,
        serviceAreas,
    } = SiteConfig;

    // Split services: first 2 as spotlight, rest as standard
    const spotlightServices = services.slice(0, 2);
    const standardServices = services.slice(2);

    return (
        <main className="relative w-full overflow-hidden bg-[oklch(0.985_0.003_90)]">
            {/* ============================================================
                COMPACT HERO — Editorial, asymmetric
            ============================================================ */}
            <section className="relative w-full overflow-hidden border-b border-foreground/10 py-12 sm:py-16 lg:py-20">
                {/* Background — warm paper with editorial accents */}
                <div className="pointer-events-none absolute inset-0">
                    {/* Paper grain */}
                    <div
                        className="absolute inset-0 opacity-[0.5]"
                        style={{
                            backgroundImage: `radial-gradient(circle, oklch(0.4 0.02 90) 0.5px, transparent 0.5px)`,
                            backgroundSize: "8px 8px",
                            maskImage:
                                "radial-gradient(ellipse 90% 80% at 30% 30%, black 20%, transparent 90%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 90% 80% at 30% 30%, black 20%, transparent 90%)",
                        }}
                    />

                    {/* Soft primary wash — top-right */}
                    <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/[0.08] blur-[140px]" />

                    {/* Warm bottom accent */}
                    <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-[oklch(0.85_0.1_60)]/15 blur-[140px]" />

                    {/* Top hairline */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">

                        {/* LEFT: Content (7 cols) */}
                        <div className="lg:col-span-7">
                            {/* Chapter marker */}
                            <div className="mb-5 flex items-center gap-3">
                                <span className="flex size-9 items-center justify-center rounded-full border border-foreground/15 bg-white font-serif text-xs font-bold italic text-primary shadow-sm">
                                    04
                                </span>
                                <div className="h-px w-10 bg-foreground/20" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50">
                                    All Services
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-[2.2rem] font-bold leading-[1.02] -tracking-[0.03em] text-foreground sm:text-4xl lg:text-[3.25rem]">
                                On-Site{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 italic text-primary">
                                        Mobile Car Repair
                                    </span>
                                    <svg
                                        className="absolute -bottom-1.5 left-0 h-3 w-full text-primary/40"
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
                                </span>{" "}
                                & Maintenance in Dubai
                            </h1>

                            {/* Description */}
                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/60 sm:text-base">
                                Doorstep auto repair brought directly to your
                                home, office, or roadside location across all{" "}
                                <span className="font-semibold text-foreground">
                                    {serviceAreas.length} Dubai districts
                                </span>
                                . Certified mechanics, OEM parts, transparent
                                pricing.
                            </p>

                            {/* Quick trust points */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    "No towing required",
                                    "Certified mechanics",
                                    "Upfront pricing",
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

                            {/* CTA row */}
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

                        {/* RIGHT: Pull quote + stat chips (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl border border-foreground/10 bg-white p-6 shadow-[0_4px_20px_-4px_oklch(0.2_0.02_90/0.08)] sm:p-7">
                                {/* Corner marks */}
                                <div className="pointer-events-none absolute left-3 top-3 size-6">
                                    <div className="absolute left-0 top-0 h-px w-5 bg-primary/40" />
                                    <div className="absolute left-0 top-0 h-5 w-px bg-primary/40" />
                                </div>

                                <RiDoubleQuotesL className="size-8 text-primary/15" />

                                <p className="mt-2 font-serif text-base italic leading-relaxed text-foreground/80 sm:text-lg">
                                    Every service is delivered onsite — same
                                    mechanics, same parts, same guarantee, just
                                    without the workshop.
                                </p>

                                <div className="mt-5 flex items-center gap-2 border-t border-foreground/10 pt-4">
                                    <RiFingerprintLine className="size-4 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50">
                                        Verified · {services.length} services
                                    </span>
                                </div>

                                {/* Compact stats grid */}
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    {[
                                        { value: `${services.length}+`, label: "Services" },
                                        { value: "5–30", unit: "min", label: "Response" },
                                        { value: "24/7", label: "Available" },
                                        { value: "500+", label: "Drivers" },
                                    ].map((stat, i) => (
                                        <div
                                            key={i}
                                            className="rounded-lg border border-foreground/10 bg-[oklch(0.99_0.002_90)] px-3 py-2"
                                        >
                                            <p className="text-base font-black leading-none text-foreground">
                                                {stat.value}
                                                {stat.unit && (
                                                    <span className="ml-0.5 text-[10px] font-semibold text-foreground/50">
                                                        {stat.unit}
                                                    </span>
                                                )}
                                            </p>
                                            <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-foreground/40">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                SPOTLIGHT SERVICES — First 2 (battery + jump start)
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-3">
                            <RiSparklingFill className="size-4 text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                Most Booked
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-foreground/10 to-transparent" />
                        </div>

                        <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            Emergency services,{" "}
                            <span className="italic text-primary">
                                dispatched now
                            </span>
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60 sm:text-base">
                            Our highest-demand services — available 24/7 with
                            5–30 minute response across Dubai.
                        </p>
                    </div>

                    {/* Spotlight grid — 2 horizontal cards */}
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
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
                </div>
            </section>

            {/* ============================================================
                FULL CATALOG — Standard grid
            ============================================================ */}
            <section className="relative w-full border-t border-foreground/10 bg-[oklch(0.99_0.002_90)] py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section header */}
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-3">
                            <RiToolsFill className="size-4 text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                Full Catalog
                            </span>
                            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-foreground/10 to-transparent" />
                            <span className="hidden text-[10px] font-bold uppercase tracking-wider text-foreground/40 sm:inline">
                                {standardServices.length} Services
                            </span>
                        </div>

                        <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            Every repair,{" "}
                            <span className="italic text-primary">
                                one place
                            </span>
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60 sm:text-base">
                            From diagnostics to maintenance — all delivered at
                            your doorstep with genuine parts and upfront
                            pricing.
                        </p>
                    </div>

                    {/* Services grid */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
                        {standardServices.map((service, index) => (
                            <ServiceCard
                                key={service.slug}
                                name={service.name}
                                slug={service.slug}
                                features={service.features}
                                image={service.service_banner?.src}
                                intro={service.intro}
                                index={index + 2}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                TRUST BAR — Inline proof strip
            ============================================================ */}
            <section className="relative w-full border-y border-foreground/10 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 divide-x divide-foreground/10 sm:grid-cols-4">
                        {TRUST_POINTS.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className="group flex items-center gap-3 p-4 transition-colors hover:bg-primary/[0.02] sm:p-5"
                                >
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                        <Icon className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-sm font-black leading-none text-foreground">
                                            {item.title}
                                        </p>
                                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================================
                CATEGORY INDEX — Numbered editorial strip
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-4 lg:mb-12">
                        <div>
                            <div className="flex items-center gap-3">
                                <RiGlobalFill className="size-4 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                    Browse by category
                                </span>
                            </div>
                            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                                Organized for{" "}
                                <span className="italic text-primary">
                                    easy discovery
                                </span>
                            </h2>
                        </div>

                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
                        >
                            View all
                            <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>

                    {/* Category index — 4 columns, numbered */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {CATEGORY_INDEX.map((cat) => (
                            <div
                                key={cat.number}
                                className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-white p-5 shadow-[0_2px_12px_-4px_oklch(0.2_0.02_90/0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_30px_-10px_oklch(0.2_0.02_90/0.18)] sm:p-6"
                            >
                                {/* Watermark numeral */}
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -right-3 -top-6 select-none font-serif text-[5rem] font-bold italic leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-primary/[0.08]"
                                >
                                    {cat.number}
                                </span>

                                <div className="relative">
                                    {/* Number + count */}
                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            {cat.number}
                                        </span>
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-foreground/40">
                                            {cat.count} services
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-3 text-base font-bold leading-tight text-foreground sm:text-lg">
                                        {cat.title}
                                    </h3>

                                    {/* Examples */}
                                    <div className="mt-3 flex flex-wrap gap-1">
                                        {cat.examples.map((ex) => (
                                            <span
                                                key={ex}
                                                className="inline-flex items-center rounded-md bg-foreground/[0.04] px-1.5 py-0.5 text-[9px] font-semibold text-foreground/60"
                                            >
                                                {ex}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer link */}
                                    <div className="mt-4 flex items-center gap-1.5 border-t border-foreground/10 pt-3">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                                            Explore
                                        </span>
                                        <RiArrowRightLine className="size-3 text-primary/0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:text-primary" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                FINAL CTA — Editorial closing argument
            ============================================================ */}
            <section className="relative w-full pb-16 sm:pb-20 lg:pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-foreground/15 bg-foreground">
                        {/* Background accents */}
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
                            {/* Left content (7 cols) */}
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                                    <RiVerifiedBadgeFill className="size-3 text-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                                        Trusted by 500+ Drivers
                                    </span>
                                </div>

                                <h2 className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight text-background sm:text-3xl lg:text-[2.5rem]">
                                    Need a service?{" "}
                                    <span className="italic text-primary">
                                        We're one call away.
                                    </span>
                                </h2>

                                <p className="mt-3 max-w-xl text-sm leading-relaxed text-background/60 sm:text-base">
                                    Certified mechanics, genuine parts, and a{" "}
                                    {responseTime} response — anywhere in {city}.
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
                                        All {serviceAreas.length} Areas · {city}
                                    </span>
                                </div>
                            </div>

                            {/* Right CTAs (5 cols) */}
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
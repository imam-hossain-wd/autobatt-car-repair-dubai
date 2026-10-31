// app/(marketing)/_components/why-choose-us.tsx

import Link from "next/link";
import {
    RiTimeLine,
    RiComputerLine,
    RiMoneyDollarCircleLine,
    Ri24HoursLine,
    RiShieldCheckLine,
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiPhoneFill,
    RiCheckboxCircleFill,
    RiFlashlightFill,
    RiAwardFill,
    RiStarFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { whyChooseUs } from "@/data/businessInfo";

/* ============ Icon Mapping ============ */
const ICONS = [
    RiTimeLine,
    RiComputerLine,
    RiMoneyDollarCircleLine,
    Ri24HoursLine,
    RiShieldCheckLine,
];

/* ============ Feature Tags per Reason (adds depth) ============ */
const FEATURE_TAGS = [
    ["Highway Patrol", "GPS Dispatch", "Live Tracking"],
    ["Dealer Scanners", "OBD-II", "Multi-Brand"],
    ["No Hidden Fees", "Itemized Quote", "Fair Rates"],
    ["365 Days", "Public Holidays", "All Emirates"],
    ["ASE Certified", "Workmanship Warranty", "Insured"],
];

export function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden bg-foreground py-8">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Top radial glow */}
                <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/[0.12] blur-[130px]" />

                {/* Bottom-left corner glow */}
                <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/[0.08] blur-[120px]" />

                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle, oklch(1 0 0) 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
                    }}
                />

                {/* Fine vertical hairlines */}
                <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-background/10 to-transparent" />
                <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-background/10 to-transparent" />

                {/* Top + bottom hairlines */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ============================================================
                    SECTION HEADER
                ============================================================ */}
                <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
                    {/* Eyebrow */}
                    {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-4 py-1.5 backdrop-blur-sm">
                        <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                            Why Choose Us
                        </span>
                    </div> */}

                    {/* Headline */}
                    <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-background sm:text-4xl lg:text-[3.25rem]">
                        Built for{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-primary">
                                Dubai Drivers
                            </span>
                            <span className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-primary/20" />
                        </span>{" "}
                        Who Value Time
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-background/60 sm:text-base">
                        Six reasons thousands of Dubai drivers trust us with
                        their vehicles — from emergency breakdowns to routine
                        maintenance.
                    </p>
                </div>

                {/* ============================================================
                    BENTO GRID — ASYMMETRIC LAYOUT
                    
                    Desktop (lg):
                    ┌─────────────┬───────┬───────┐
                    │             │   2   │   3   │
                    │      1      ├───────┼───────┤
                    │  (featured) │   4   │   5   │
                    └─────────────┴───────┴───────┘
                          ↓
                    ┌───────┬───────┬───────┐
                    │   6   │  6    │  6    │  (full-width wide card)
                    └───────┴───────┴───────┘
                ============================================================ */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    
                    {/* ============ CARD 1: FEATURED (spans 1 col, 2 rows) ============ */}
                    <FeaturedReasonCard
                        item={whyChooseUs[0]}
                        Icon={ICONS[0]}
                        tags={FEATURE_TAGS[0]}
                    />

                    {/* ============ CARD 2 & 3: Top right pair ============ */}
                    <CompactReasonCard
                        item={whyChooseUs[1]}
                        Icon={ICONS[1]}
                        tags={FEATURE_TAGS[1]}
                        number="02"
                    />
                    <CompactReasonCard
                        item={whyChooseUs[2]}
                        Icon={ICONS[2]}
                        tags={FEATURE_TAGS[2]}
                        number="03"
                    />

                    {/* ============ CARD 4 & 5: Bottom right pair ============ */}
                    <CompactReasonCard
                        item={whyChooseUs[3]}
                        Icon={ICONS[3]}
                        tags={FEATURE_TAGS[3]}
                        number="04"
                    />
                    <CompactReasonCard
                        item={whyChooseUs[4]}
                        Icon={ICONS[4]}
                        tags={FEATURE_TAGS[4]}
                        number="05"
                    />

                    {/* ============ CARD 6: WIDE CTA CARD (spans 3 cols) ============ */}
                    {whyChooseUs[5] && (
                        <WideReasonCard
                            item={whyChooseUs[5]}
                            tags={FEATURE_TAGS[5] || []}
                        />
                    )}
                </div>

                {/* ============================================================
                    BOTTOM TRUST STRIP
                ============================================================ */}
                <div className="mt-14 lg:mt-16">
                    <div className="flex flex-col items-center gap-6 rounded-2xl border border-background/10 bg-background/[0.03] p-6 backdrop-blur-sm sm:flex-row sm:justify-between sm:p-7">
                        {/* Left: trust indicators */}
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                            {[
                                { icon: RiShieldCheckLine, label: "Workmanship Guaranteed" },
                                { icon: RiAwardFill, label: "Certified Technicians" },
                                { icon: RiFlashlightFill, label: "Rapid Dispatch" },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={i}
                                        className="inline-flex items-center gap-2 text-xs font-semibold text-background/70 sm:text-sm"
                                    >
                                        <span className="flex size-6 items-center justify-center rounded-md bg-primary/15">
                                            <Icon className="size-3.5 text-primary" />
                                        </span>
                                        {item.label}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right: CTA */}
                        <Link
                            href={SiteConfig.numberCallLink}
                            className="group inline-flex h-11 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                        >
                            <RiPhoneFill className="size-4" />
                            Talk to a Mechanic
                            <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================================================
    CARD 1: FEATURED REASON (hero card, spans 1 col × 2 rows)
============================================================ */
function FeaturedReasonCard({
    item,
    Icon,
    tags,
}: {
    item: (typeof whyChooseUs)[number];
    Icon: React.ElementType;
    tags: string[];
}) {
    const cleanName = item.name.replace(/:$/, "");

    return (
        <article className="group relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/[0.15] via-primary/[0.06] to-transparent p-6 transition-all duration-300 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 sm:col-span-2 sm:p-8 lg:col-span-1 lg:row-span-2 lg:p-9">
            {/* Animated corner glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/25 blur-[80px] transition-opacity duration-500 group-hover:opacity-100" />

            {/* Corner crop marks */}
            <div className="pointer-events-none absolute right-0 top-0 size-16">
                <div className="absolute right-0 top-0 h-px w-10 bg-primary/60" />
                <div className="absolute right-0 top-0 h-10 w-px bg-primary/60" />
            </div>

            {/* Featured badge */}
            <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/20 px-2.5 py-1 backdrop-blur-sm">
                <RiFlashlightFill className="size-3 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                    Fastest
                </span>
            </div>

            <div className="relative flex h-full flex-col">
                {/* Icon block */}
                <div className="relative inline-flex w-fit">
                    <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-lg" />
                    <div className="relative flex size-14 items-center justify-center rounded-2xl bg-primary shadow-xl shadow-primary/40 sm:size-16">
                        <Icon className="size-7 text-primary-foreground sm:size-8" />
                    </div>
                </div>

                {/* Step number eyebrow */}
                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                    ● Reason 01
                </p>

                {/* Title */}
                <h3 className="mt-2 text-xl font-bold leading-tight tracking-tight text-background sm:text-2xl lg:text-[1.75rem]">
                    {cleanName}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-background/60 sm:text-[15px]">
                    {item.description}
                </p>

                {/* Feature tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-md border border-primary/20 bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Bottom row */}
                <div className="mt-6 flex items-center justify-between border-t border-primary/20 pt-4">
                    <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-primary">
                        <span className="size-1.5 rounded-full bg-primary" />
                        Live Now
                    </span>
                    <div className="flex items-center gap-1.5">
                        {[...Array(5)].map((_, i) => (
                            <RiStarFill
                                key={i}
                                className="size-3 text-primary"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

/* ============================================================
    CARD 2-5: COMPACT REASON (small square cards)
============================================================ */
function CompactReasonCard({
    item,
    Icon,
    tags,
    number,
}: {
    item: (typeof whyChooseUs)[number];
    Icon: React.ElementType;
    tags: string[];
    number: string;
}) {
    const cleanName = item.name.replace(/:$/, "");

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-background/10 bg-background/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-background/[0.06] hover:shadow-xl hover:shadow-primary/10 sm:p-6">
            {/* Hover gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Giant background number */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-3 select-none text-[6rem] font-black leading-none text-background/[0.03] transition-colors duration-300 group-hover:text-primary/[0.08]"
            >
                {number}
            </span>

            <div className="relative flex h-full flex-col">
                {/* Icon + number row */}
                <div className="flex items-start justify-between">
                    <div className="relative inline-flex">
                        <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md transition-all duration-300 group-hover:bg-primary/30" />
                        <div className="relative flex size-11 items-center justify-center rounded-xl bg-primary/15 transition-all duration-300 group-hover:bg-primary">
                            <Icon className="size-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                        </div>
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-wider text-background/30">
                        {number}
                    </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base font-bold leading-tight tracking-tight text-background sm:text-lg">
                    {cleanName}
                </h3>

                {/* Description */}
                <p className="mt-2 flex-1 text-xs leading-relaxed text-background/55 sm:text-[13px]">
                    {item.description}
                </p>

                {/* Tags (compact) */}
                <div className="mt-4 flex flex-wrap gap-1">
                    {tags.slice(0, 2).map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-md border border-background/10 bg-background/[0.04] px-1.5 py-0.5 text-[9px] font-semibold text-background/60"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Bottom accent */}
                <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </div>
        </article>
    );
}

/* ============================================================
    CARD 6: WIDE CTA CARD (spans full width)
============================================================ */
function WideReasonCard({
    item,
    tags,
}: {
    item: (typeof whyChooseUs)[number];
    tags: string[];
}) {
    const cleanName = item.name.replace(/:$/, "");
    const Icon = RiShieldCheckLine;

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/[0.08] via-background/[0.03] to-background/[0.03] p-6 sm:col-span-2 sm:p-7 lg:col-span-3 lg:p-8">
            {/* Background accents */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/15 blur-[80px]" />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle, oklch(1 0 0) 1px, transparent 1px)`,
                        backgroundSize: "24px 24px",
                        maskImage:
                            "radial-gradient(ellipse at right, black 20%, transparent 70%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse at right, black 20%, transparent 70%)",
                    }}
                />
            </div>

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Left: Content */}
                <div className="flex items-start gap-5 lg:items-center">
                    {/* Icon */}
                    <div className="relative shrink-0">
                        <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-lg" />
                        <div className="relative flex size-14 items-center justify-center rounded-2xl bg-primary shadow-xl shadow-primary/40">
                            <Icon className="size-7 text-primary-foreground" />
                        </div>
                    </div>

                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1">
                            <span className="size-1.5 rounded-full bg-primary" />
                            <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                                Reason 06 · Final Word
                            </span>
                        </div>
                        <h3 className="mt-2.5 text-lg font-bold leading-tight tracking-tight text-background sm:text-xl lg:text-2xl">
                            {cleanName}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-background/60">
                            {item.description}
                        </p>
                    </div>
                </div>

                {/* Right: Tags + CTA */}
                <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1 rounded-md border border-primary/20 bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary"
                            >
                                <RiCheckboxCircleFill className="size-2.5" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link
                        href="/about"
                        className="group/btn inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-5 text-sm font-bold text-primary backdrop-blur-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                    >
                        Learn Our Story
                        <RiArrowRightUpLine className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
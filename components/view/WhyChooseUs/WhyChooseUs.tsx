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
    RiFlashlightFill,
    RiAwardFill,
    RiStarFill,
    RiMapPinFill,
    RiUserStarFill,
    RiDoubleQuotesL,
    RiFingerprintLine,
    RiCheckboxCircleFill,
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
    RiAwardFill,
];

/* ============ Tags per Reason ============ */
const FEATURE_TAGS = [
    ["Highway Patrol", "GPS Dispatch", "Live Tracking"],
    ["Dealer Scanners", "OBD-II", "Multi-Brand"],
    ["No Hidden Fees", "Itemized Quote", "Fair Rates"],
    ["365 Days", "Public Holidays", "All Emirates"],
    ["ASE Certified", "Workmanship Warranty", "Insured"],
    ["100% Genuine Parts", "Fair Pricing", "Insured Work"],
];

/* ============ Editorial labels ============ */
const REASON_LABELS = [
    "Response speed",
    "Onsite capability",
    "Honest pricing",
    "Availability",
    "Craftsmanship",
    "The promise",
];

export function WhyChooseUs() {
    const heroReason = whyChooseUs[0];
    const secondaryReasons = whyChooseUs.slice(1, 5);
    const closingReason = whyChooseUs[5];

    return (
        <section className="relative overflow-hidden bg-[oklch(0.985_0.003_90)] py-10">
            {/* ============================================================
                BACKGROUND — Paper texture + editorial accents
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Warm paper grain (dot texture at very low opacity) */}
                <div
                    className="absolute inset-0 opacity-[0.5]"
                    style={{
                        backgroundImage: `radial-gradient(circle, oklch(0.4 0.02 90) 0.5px, transparent 0.5px)`,
                        backgroundSize: "8px 8px",
                        maskImage:
                            "radial-gradient(ellipse 90% 80% at 50% 30%, black 20%, transparent 90%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 90% 80% at 50% 30%, black 20%, transparent 90%)",
                    }}
                />

                {/* Soft primary wash — top right */}
                <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/[0.08] blur-[140px]" />

                {/* Bottom-left warm accent */}
                <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.85_0.1_60)]/20 blur-[140px]" />

                {/* Fine horizontal rule at top of section */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ============================================================
                    SECTION HEADER — Editorial magazine style
                ============================================================ */}
                <div className="mb-16 lg:mb-24">
                    <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">

                        {/* LEFT: Chapter mark + headline (7 cols) */}
                        <div className="lg:col-span-7">
                            {/* Chapter mark */}
                            <div className="mb-6 flex items-center gap-3">
                                <span className="flex size-10 items-center justify-center rounded-full border border-foreground/15 bg-white font-serif text-sm font-bold italic text-primary shadow-sm">
                                    02
                                </span>
                                <div className="h-px w-12 bg-foreground/20" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50">
                                    Why Drivers Choose Us
                                </span>
                            </div>

                            {/* Massive headline */}
                            <h2 className="text-[2.4rem] font-bold leading-[0.98] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[4rem]">
                                Built for Dubai{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 italic text-primary">
                                        drivers
                                    </span>
                                    <svg
                                        className="absolute -bottom-2 left-0 h-3 w-full text-primary/40"
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
                                who value time
                            </h2>
                        </div>

                        {/* RIGHT: Intro text (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="relative pl-6">
                                <RiDoubleQuotesL
                                    className="absolute -left-1 -top-3 size-8 text-primary/15"
                                    aria-hidden="true"
                                />
                                <p className="font-serif text-base italic leading-relaxed text-foreground/75 sm:text-lg">
                                    Six reasons thousands of Dubai drivers trust
                                    us with their vehicles — from emergency
                                    breakdowns to routine maintenance.
                                </p>
                                <div className="mt-4 flex items-center gap-2">
                                    <RiFingerprintLine className="size-4 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50">
                                        Verified by 500+ drivers
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    MAIN GRID — Three distinct card types
                ============================================================ */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">

                    {/* ============ COLUMN 1: HERO + 2 STACKED ============ */}
                    <div className="flex flex-col gap-6 lg:col-span-5 lg:gap-7">
                        {/* Hero reason */}
                        <HeroCaseCard
                            item={heroReason}
                            Icon={ICONS[0]}
                            tags={FEATURE_TAGS[0]}
                            label={REASON_LABELS[0]}
                        />

                        {/* Two stacked reasons */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-7">
                            {secondaryReasons.slice(0, 2).map((reason, i) => (
                                <StackedCaseCard
                                    key={i}
                                    item={reason}
                                    Icon={ICONS[i + 1]}
                                    tags={FEATURE_TAGS[i + 1]}
                                    number={String(i + 2).padStart(2, "0")}
                                    label={REASON_LABELS[i + 1]}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ============ COLUMN 2: TALL FEATURE + 2 TIMELINE ============ */}
                    <div className="flex flex-col gap-6 lg:col-span-7 lg:gap-7">
                        {/* Featured tall card */}
                        <TallFeatureCard
                            item={secondaryReasons[2]}
                            Icon={ICONS[3]}
                            tags={FEATURE_TAGS[3]}
                            number="04"
                            label={REASON_LABELS[3]}
                        />

                        {/* Two timeline-style horizontal cards */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7">
                            <TimelineCard
                                item={secondaryReasons[3]}
                                Icon={ICONS[4]}
                                tags={FEATURE_TAGS[4]}
                                number="05"
                                label={REASON_LABELS[4]}
                            />
                            <ClosingTimelineCard
                                item={closingReason}
                                Icon={ICONS[5]}
                                tags={FEATURE_TAGS[5] || []}
                                number="06"
                                label={REASON_LABELS[5]}
                            />
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    BOTTOM CTA — Magazine-style "call to action" strip
                ============================================================ */}
                <div className="mt-16 lg:mt-20">
                    <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-white shadow-[0_4px_20px_-4px_oklch(0.2_0.02_90/0.08)]">
                        {/* Corner marks */}
                        <div className="pointer-events-none absolute left-3 top-3 size-6">
                            <div className="absolute left-0 top-0 h-px w-5 bg-primary/40" />
                            <div className="absolute left-0 top-0 h-5 w-px bg-primary/40" />
                        </div>
                        <div className="pointer-events-none absolute bottom-3 right-3 size-6">
                            <div className="absolute bottom-0 right-0 h-px w-5 bg-primary/40" />
                            <div className="absolute bottom-0 right-0 h-5 w-px bg-primary/40" />
                        </div>

                        <div className="flex flex-col items-center justify-between gap-6 px-6 py-6 sm:flex-row sm:px-8 sm:py-7">
                            {/* Left: Trust line */}
                            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                                {[
                                    { icon: RiShieldCheckLine, text: "Workmanship Guaranteed" },
                                    { icon: RiAwardFill, text: "Certified Technicians" },
                                    { icon: RiMapPinFill, text: "Dubai-Wide Coverage" },
                                    { icon: RiUserStarFill, text: "500+ Happy Drivers" },
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="inline-flex items-center gap-2 text-xs font-semibold text-foreground/70"
                                        >
                                            <Icon className="size-3.5 text-primary" />
                                            <span>{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right: CTA */}
                            <Link
                                href={SiteConfig.numberCallLink}
                                className="group relative inline-flex h-11 items-center justify-center gap-2.5 overflow-hidden rounded-full bg-foreground px-6 text-sm font-bold text-background shadow-lg shadow-foreground/20 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/30"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <RiPhoneFill className="relative size-4" />
                                <span className="relative">Talk to a Mechanic</span>
                                <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================================================
    HERO CASE CARD — Editorial, large, paper
============================================================ */
function HeroCaseCard({
    item,
    Icon,
    tags,
    label,
}: {
    item: (typeof whyChooseUs)[number];
    Icon: React.ElementType;
    tags: string[];
    label: string;
}) {
    const cleanName = item.name.replace(/:$/, "");

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-white p-6 shadow-[0_4px_24px_-8px_oklch(0.2_0.02_90/0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_oklch(0.2_0.02_90/0.2)] sm:p-7">
            {/* Top accent line — reveals on hover */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Pin dot — editorial detail */}
            <div className="absolute right-5 top-5 flex size-2 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-primary/20" />
                <span className="relative size-1 rounded-full bg-primary" />
            </div>

            <div className="flex flex-col">
                {/* Header: icon + reason label */}
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-lg bg-primary/15 blur-md" />
                        <div className="relative flex size-11 items-center justify-center rounded-lg bg-primary shadow-md shadow-primary/20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                            <Icon className="size-5 text-primary-foreground" />
                        </div>
                    </div>
                    <div>
                        <p className="font-serif text-[10px] font-bold italic uppercase tracking-[0.2em] text-primary">
                            Reason 01
                        </p>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/40">
                            {label}
                        </p>
                    </div>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-2xl">
                    {cleanName}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                    {item.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-foreground/[0.03] px-2 py-0.5 text-[10px] font-semibold text-foreground/60"
                        >
                            <span className="size-1 rounded-full bg-primary" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer: live + rating */}
                <div className="mt-5 flex items-center justify-between border-t border-foreground/10 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                        <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                        </span>
                        Live Now
                    </span>
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <RiStarFill key={i} className="size-3 text-primary" />
                        ))}
                        <span className="ml-1.5 text-[10px] font-bold text-foreground/60">
                            5.0
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}

/* ============================================================
    STACKED CASE CARD — Small horizontal editorial
============================================================ */
function StackedCaseCard({
    item,
    Icon,
    tags,
    number,
    label,
}: {
    item: (typeof whyChooseUs)[number];
    Icon: React.ElementType;
    tags: string[];
    number: string;
    label: string;
}) {
    const cleanName = item.name.replace(/:$/, "");

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-white p-5 shadow-[0_2px_12px_-4px_oklch(0.2_0.02_90/0.1)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_8px_30px_-10px_oklch(0.2_0.02_90/0.18)] sm:p-6">
            {/* Watermark numeral — subtle, serif */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[4.5rem] font-bold italic leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-primary/[0.08]"
            >
                {number}
            </span>

            <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary">
                        <Icon className="size-4 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <p className="font-serif text-[10px] font-bold italic uppercase tracking-[0.2em] text-primary">
                            Reason {number}
                        </p>
                        <span className="h-2 w-px bg-foreground/15" />
                        <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground/40">
                            {label}
                        </p>
                    </div>

                    <h3 className="mt-1.5 text-base font-bold leading-tight tracking-tight text-foreground">
                        {cleanName}
                    </h3>

                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-foreground/55">
                        {item.description}
                    </p>

                    {/* Tags (compact) */}
                    <div className="mt-3 flex flex-wrap gap-1">
                        {tags.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-foreground/[0.04] px-2 py-0.5 text-[9px] font-semibold text-foreground/50"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}

/* ============================================================
    TALL FEATURE CARD — Editorial hero, vertical emphasis
============================================================ */
function TallFeatureCard({
    item,
    Icon,
    tags,
    number,
    label,
}: {
    item: (typeof whyChooseUs)[number];
    Icon: React.ElementType;
    tags: string[];
    number: string;
    label: string;
}) {
    const cleanName = item.name.replace(/:$/, "");

    return (
        <article className="group relative flex-1 overflow-hidden rounded-2xl border border-foreground/10 bg-white p-6 shadow-[0_4px_20px_-8px_oklch(0.2_0.02_90/0.1)] transition-all duration-500 hover:border-primary/20 hover:shadow-[0_12px_40px_-12px_oklch(0.2_0.02_90/0.18)] sm:p-7">
            {/* Watermark numeral — big, behind */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-8 select-none font-serif text-[8rem] font-bold italic leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-primary/[0.08]"
            >
                {number}
            </span>

            <div className="relative">
                {/* Header row */}
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                            <Icon className="size-5 text-primary-foreground" />
                        </div>
                        <div>
                            <p className="font-serif text-[10px] font-bold italic uppercase tracking-[0.2em] text-primary">
                                Reason {number}
                            </p>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground/40">
                                {label}
                            </p>
                        </div>
                    </div>

                    {/* Number tag */}
                    <span className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-2 py-0.5 text-[9px] font-bold text-foreground/50">
                        #{number}
                    </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                    {cleanName}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                    {item.description}
                </p>

                {/* Tags row */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-md border border-foreground/10 bg-foreground/[0.03] px-2 py-0.5 text-[10px] font-semibold text-foreground/60"
                        >
                            <RiCheckboxCircleFill className="size-2.5 text-primary" />
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

/* ============================================================
    TIMELINE CARD — Horizontal editorial, compact
============================================================ */
function TimelineCard({
    item,
    Icon,
    tags,
    number,
    label,
}: {
    item: (typeof whyChooseUs)[number];
    Icon: React.ElementType;
    tags: string[];
    number: string;
    label: string;
}) {
    const cleanName = item.name.replace(/:$/, "");

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-white p-5 shadow-[0_2px_12px_-4px_oklch(0.2_0.02_90/0.1)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_8px_30px_-10px_oklch(0.2_0.02_90/0.18)] sm:p-6">
            {/* Top number row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="font-serif text-xs font-bold italic text-primary">
                        {number}
                    </span>
                    <span className="h-2.5 w-px bg-foreground/15" />
                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground/40">
                        {label}
                    </span>
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 transition-all duration-500 group-hover:bg-primary">
                    <Icon className="size-4 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                </div>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-base font-bold leading-tight tracking-tight text-foreground">
                {cleanName}
            </h3>

            {/* Description */}
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-foreground/55">
                {item.description}
            </p>

            {/* Tag */}
            <div className="mt-4 flex items-center gap-2 border-t border-foreground/10 pt-3">
                <span className="size-1 rounded-full bg-primary" />
                <span className="text-[10px] font-semibold text-foreground/60">
                    {tags[0]}
                </span>
            </div>
        </article>
    );
}

/* ============================================================
    CLOSING TIMELINE CARD — Final word with CTA
============================================================ */
function ClosingTimelineCard({
    item,
    Icon,
    tags,
    number,
    label,
}: {
    item: (typeof whyChooseUs)[number];
    Icon: React.ElementType;
    tags: string[];
    number: string;
    label: string;
}) {
    const cleanName = item.name.replace(/:$/, "");

    return (
        <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.04] to-white p-5 shadow-[0_2px_12px_-4px_oklch(0.2_0.02_90/0.1)] transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_-10px_oklch(0.2_0.02_90/0.18)] sm:p-6">
            {/* Top number row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="font-serif text-xs font-bold italic text-primary">
                        {number}
                    </span>
                    <span className="h-2.5 w-px bg-primary/30" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary">
                        {label}
                    </span>
                </div>
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary shadow-md shadow-primary/20 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="size-4 text-primary-foreground" />
                </div>
            </div>

            {/* Title */}
            <h3 className="mt-4 text-base font-bold leading-tight tracking-tight text-foreground">
                {cleanName}
            </h3>

            {/* Description */}
            <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-foreground/55">
                {item.description}
            </p>

            {/* CTA */}
            <Link
                href="/about"
                className="group/btn mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
            >
                Learn our story
                <RiArrowRightUpLine className="size-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
        </article>
    );
}
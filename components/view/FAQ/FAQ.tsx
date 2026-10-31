// components/sections/FAQ.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    RiArrowDownSLine,
    RiQuestionLine,
    RiTimeFill,
    RiMapPinFill,
    RiPriceTag3Fill,
    RiShieldCheckFill,
    RiFlashlightFill,
    RiCustomerServiceFill,
    RiPhoneFill,
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiWhatsappFill,
    RiStarFill,
    RiVerifiedBadgeFill,
    RiSearchLine,
    RiCloseLine,
    RiCheckboxCircleFill,
    RiInformationLine,
} from "@remixicon/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";

/* ============ Category mapping ============ */
const CATEGORIES = [
    { id: "all", label: "All", icon: RiQuestionLine },
    { id: "dispatch", label: "Dispatch & Coverage", icon: RiMapPinFill, range: [1, 5] },
    { id: "battery", label: "Battery & Electrical", icon: RiFlashlightFill, range: [6, 10] },
    { id: "mechanical", label: "Mechanical & Diagnostic", icon: RiShieldCheckFill, range: [11, 15] },
    { id: "pricing", label: "Pricing & Warranty", icon: RiPriceTag3Fill, range: [16, 20] },
] as const;

/* ============ JSON-LD Schema ============ */
const generateFAQSchema = () => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
});

export function FAQ() {
    const { city, responseTime, serviceAreas, displayNumber, numberCallLink, whatsappCallLink } = SiteConfig;

    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [openItems, setOpenItems] = useState<string[]>(["faq-1"]);
    const [searchQuery, setSearchQuery] = useState("");

    /* Filter FAQs by category + search */
    const filteredFAQs = useMemo(() => {
        let filtered = faqData;

        // Filter by category
        if (activeCategory !== "all") {
            const category = CATEGORIES.find((c) => c.id === activeCategory);
            if (category && "range" in category) {
                const [min, max] = category.range;
                filtered = filtered.filter((faq) => {
                    const num = parseInt(faq.id.replace("faq-", ""), 10);
                    return num >= min && num <= max;
                });
            }
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (faq) =>
                    faq.question.toLowerCase().includes(query) ||
                    faq.answer.toLowerCase().includes(query)
            );
        }

        return filtered;
    }, [activeCategory, searchQuery]);

    return (
        <section className="relative w-full overflow-hidden bg-background py-5">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Primary glows */}
                <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[130px]" />
                <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[110px]" />

                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.35] dark:opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
                    }}
                />

                {/* Fine vertical hairlines */}
                <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* ============================================================
                    SECTION HEADER
                ============================================================ */}
                <div className="mb-8">
                    {/* Eyebrow */}
                    {/* <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
                            <span className="relative flex size-1.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                Help Center
                            </span>
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-border to-transparent" />
                    </div> */}

                    {/* Headline + Search row */}
                    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
                        {/* Left: Headline */}
                        <div className="lg:col-span-7">
                            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[3.25rem]">
                                Questions?{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-primary">
                                        We've Got Answers
                                    </span>
                                    <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-primary/15" />
                                </span>
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                Everything about our mobile car repair service
                                across {city}. Can't find your answer?{" "}
                                <Link
                                    href="/contact"
                                    className="font-semibold text-primary underline-offset-4 hover:underline"
                                >
                                    Contact us
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>


                {/* ============================================================
                    MAIN GRID — FAQ (8) + Sidebar (4)
                ============================================================ */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
                    
                    {/* ---------- LEFT: FAQ Accordion (8 cols) ---------- */}
                    <div className="lg:col-span-8">
                        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-black/[0.03] dark:shadow-black/20">
                            {/* Top accent bar */}
                            <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                            {/* Corner crop marks */}
                            <div className="pointer-events-none absolute right-4 top-4 z-10">
                                <div className="absolute right-0 top-0 h-px w-6 bg-primary/60" />
                                <div className="absolute right-0 top-0 h-6 w-px bg-primary/60" />
                            </div>

                            {/* Accordion body */}
                            <div className="p-3 sm:p-4">
                                {filteredFAQs.length > 0 ? (
                                    <Accordion
                                        value={openItems}
                                        onValueChange={setOpenItems}
                                        className="space-y-2"
                                    >
                                        {faqData.slice(0,10).map((faq, index) => (
                                            <AccordionItem
                                                key={faq.id}
                                                value={faq.id}
                                                className={cn(
                                                    "group relative overflow-hidden rounded-2xl border border-transparent transition-all duration-200",
                                                    "data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.03] data-[state=open]:shadow-sm data-[state=open]:shadow-primary/5"
                                                )}
                                            >
                                                <AccordionTrigger className="flex w-full items-center gap-3 px-4 py-4 text-left hover:no-underline sm:px-5 sm:py-5">
                                                    {/* Number badge */}
                                                    <span
                                                        className={cn(
                                                            "flex size-8 shrink-0 items-center justify-center rounded-lg font-mono text-[11px] font-black transition-all duration-200",
                                                            "bg-muted text-muted-foreground",
                                                            "group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground group-data-[state=open]:shadow-md group-data-[state=open]:shadow-primary/25"
                                                        )}
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>

                                                    {/* Question text */}
                                                    <span className="flex-1 pr-2 text-left text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-[15px]">
                                                        {faq.question}
                                                    </span>

                                                    {/* Chevron icon */}
                                                    <span
                                                        className={cn(
                                                            "flex size-7 shrink-0 items-center justify-center rounded-lg transition-all duration-300",
                                                            "bg-muted text-muted-foreground",
                                                            "group-data-[state=open]:rotate-180 group-data-[state=open]:bg-primary/15 group-data-[state=open]:text-primary"
                                                        )}
                                                    >
                                                        <RiArrowDownSLine className="size-4" />
                                                    </span>
                                                </AccordionTrigger>

                                                <AccordionContent className="px-4 pb-5 pt-0 sm:px-5">
                                                    <div className="relative ml-11 pl-4">
                                                        {/* Vertical accent line */}
                                                        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

                                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </AccordionContent>

                                                {/* Bottom accent line */}
                                                <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-data-[state=open]:scale-x-100" />
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                ) : (
                                    /* Empty state */
                                    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                                        <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                                            <RiSearchLine className="size-7 text-primary" />
                                        </div>
                                        <h3 className="mt-5 text-lg font-bold text-foreground">
                                            No results found
                                        </h3>
                                        <p className="mt-1.5 max-w-xs text-sm text-muted-foreground">
                                            Try a different keyword or browse
                                            all questions.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setSearchQuery("");
                                                setActiveCategory("all");
                                            }}
                                            className="mt-5 inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/90"
                                        >
                                            Reset Filters
                                            <RiArrowRightLine className="size-3.5" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Bottom helper strip */}
                        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl border border-border bg-muted/30 px-4 py-3 text-[11px] sm:justify-between">
                            <span className="inline-flex items-center gap-1.5 font-semibold text-muted-foreground">
                                <RiInformationLine className="size-3.5 text-primary" />
                                Still need help? We're online 24/7.
                            </span>
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
                            >
                                Get in Touch
                                <RiArrowRightUpLine className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </div>

                    {/* ---------- RIGHT: Sticky Sidebar (4 cols) ---------- */}
                    <div className="lg:col-span-4">
                        <div className="space-y-5 lg:sticky lg:top-24">
                            
                            {/* ===== Emergency CTA Card (Primary) ===== */}
                            <div className="relative overflow-hidden rounded-3xl border border-primary bg-primary p-6 shadow-lg shadow-primary/25">
                                {/* Dot pattern */}
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />

                                {/* Corner crop marks */}
                                <div className="pointer-events-none absolute right-3 top-3">
                                    <div className="absolute right-0 top-0 h-px w-5 bg-primary-foreground/60" />
                                    <div className="absolute right-0 top-0 h-5 w-px bg-primary-foreground/60" />
                                </div>

                                <div className="relative">
                                    {/* Badge */}
                                    <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/[0.12] px-2.5 py-1">
                                        <span className="relative flex size-1.5">
                                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-foreground/60" />
                                            <span className="relative inline-flex size-1.5 rounded-full bg-primary-foreground" />
                                        </span>
                                        <span className="text-[10px] font-black uppercase tracking-wider text-primary-foreground">
                                            Live Now · 24/7
                                        </span>
                                    </div>

                                    {/* Big number */}
                                    <p className="mt-5 text-4xl font-black leading-none tracking-tight text-primary-foreground">
                                        5–30
                                        <span className="ml-1 text-base font-bold text-primary-foreground/70">
                                            min
                                        </span>
                                    </p>
                                    <p className="mt-2 text-sm font-bold text-primary-foreground">
                                        Emergency Response
                                    </p>
                                    <p className="mt-1 text-xs leading-relaxed text-primary-foreground/70">
                                        Available every day of the year —
                                        nights, weekends, holidays.
                                    </p>

                                    {/* Buttons */}
                                    <div className="mt-5 flex flex-col gap-2">
                                        <Link
                                            href={numberCallLink}
                                            className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary-foreground px-4 text-sm font-bold text-primary shadow-sm transition-all duration-200 hover:bg-primary-foreground/90 hover:shadow-md"
                                        >
                                            <RiPhoneFill className="size-4" />
                                            {displayNumber}
                                        </Link>
                                        <Link
                                            href={whatsappCallLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/25 px-4 text-sm font-bold text-primary-foreground transition-colors hover:border-primary-foreground/60 hover:bg-primary-foreground/[0.05]"
                                        >
                                            <RiWhatsappFill className="size-4" />
                                            WhatsApp Us
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* ===== Quick Facts Card ===== */}
                            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                                {/* Header */}
                                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                                    <div className="flex items-center gap-2.5">
                                        <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10">
                                            <RiFlashlightFill className="size-3.5 text-primary" />
                                        </span>
                                        <h3 className="text-[11px] font-black uppercase tracking-[0.15em] text-foreground">
                                            Quick Facts
                                        </h3>
                                    </div>
                                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5">
                                        <span className="size-1 rounded-full bg-primary" />
                                        <span className="font-mono text-[9px] font-black text-primary">
                                            LIVE
                                        </span>
                                    </span>
                                </div>

                                {/* Facts grid */}
                                <div className="grid grid-cols-2 divide-x divide-y divide-border">
                                    <FactCell
                                        icon={RiTimeFill}
                                        value={responseTime.split(" ")[0]}
                                        label="Response"
                                    />
                                    <FactCell
                                        icon={RiMapPinFill}
                                        value={`${serviceAreas.length}+`}
                                        label="Areas"
                                    />
                                    <FactCell
                                        icon={RiPriceTag3Fill}
                                        value="100%"
                                        label="Transparent"
                                    />
                                    <FactCell
                                        icon={RiShieldCheckFill}
                                        value="12-24m"
                                        label="Warranty"
                                    />
                                </div>
                            </div>

                            {/* ===== Rating Card ===== */}
                            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-sm">
                                {/* Corner crop marks */}
                                <div className="pointer-events-none absolute right-3 top-3">
                                    <div className="absolute right-0 top-0 h-px w-5 bg-primary/50" />
                                    <div className="absolute right-0 top-0 h-5 w-px bg-primary/50" />
                                </div>

                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <RiStarFill
                                                    key={i}
                                                    className="size-4 text-primary"
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-2 text-2xl font-black leading-none text-foreground">
                                            5.0
                                        </p>
                                        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                            500+ Happy Drivers
                                        </p>
                                    </div>
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                                        <RiVerifiedBadgeFill className="size-6 text-primary" />
                                    </div>
                                </div>

                                {/* Bottom helper */}
                                <Link
                                    href="/projects"
                                    className="group mt-5 flex items-center justify-between border-t border-border pt-4 text-[11px] font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                                >
                                    View Our Work
                                    <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================
                JSON-LD Schema
            ============================================================ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema()),
                }}
            />
        </section>
    );
}

/* ============================================================
    SUB-COMPONENT: Fact Cell
============================================================ */
function FactCell({
    icon: Icon,
    value,
    label,
}: {
    icon: React.ElementType;
    value: string;
    label: string;
}) {
    return (
        <div className="group flex flex-col items-start gap-2 p-4 transition-colors hover:bg-primary/[0.03]">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-3.5 text-primary transition-colors group-hover:text-primary-foreground" />
            </span>
            <div>
                <p className="text-sm font-black leading-none tracking-tight text-foreground">
                    {value}
                </p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-wider text-muted-foreground">
                    {label}
                </p>
            </div>
        </div>
    );
}
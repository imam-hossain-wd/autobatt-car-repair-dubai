import Link from "next/link";
import {
    RiCellphoneLine,
    RiCarWashingLine,
    RiSettings3Line,
    RiArrowRightLine,
    RiTimeFill,
    RiShieldCheckFill,
    RiFlashlightFill,
    RiPhoneFill,
    RiWhatsappFill,
    RiArrowRightUpLine,
    RiCheckDoubleLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

const steps = [
    {
        id: 1,
        stepNumber: "01",
        icon: RiCellphoneLine,
        title: "Call or Book Online",
        shortTitle: "Book",
        description:
            "Reach us 24/7 via phone, WhatsApp, or our website. Tell us your issue and location — we confirm instantly.",
        meta: "24/7 Available",
        metaIcon: RiTimeFill,
        tags: ["Phone", "WhatsApp", "Online Form"],
        accent: "from-primary/[0.08]",
    },
    {
        id: 2,
        stepNumber: "02",
        icon: RiCarWashingLine,
        title: "We Come to You",
        shortTitle: "Dispatch",
        description:
            "Our fully-equipped mobile unit dispatches immediately and arrives at your exact location within 5–15 minutes.",
        meta: "5–15 Min Arrival",
        metaIcon: RiFlashlightFill,
        tags: ["GPS Tracking", "Live Updates", "No Towing"],
        accent: "from-primary/[0.06]",
    },
    {
        id: 3,
        stepNumber: "03",
        icon: RiSettings3Line,
        title: "Fixed On-Site",
        shortTitle: "Repair",
        description:
            "Certified mechanics diagnose and repair right there. Upfront pricing — no hidden fees, no surprises.",
        meta: "90% Onsite Fix Rate",
        metaIcon: RiShieldCheckFill,
        tags: ["Genuine Parts", "Warranty", "Transparent Pricing"],
        accent: "from-primary/[0.04]",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative overflow-hidden bg-background py-10">
            {/* ============================================================
                BACKGROUND — Layered atmosphere
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Large radial glow */}
                <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[150px]" />

                {/* Grid texture — very subtle */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                        backgroundSize: "80px 80px",
                        maskImage:
                            "radial-gradient(ellipse 60% 50% at 50% 30%, black 10%, transparent 70%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 60% 50% at 50% 30%, black 10%, transparent 70%)",
                    }}
                />

                {/* Corner glow */}
                <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                {/* ============================================================
                    SECTION HEADER — Centered, massive, editorial
                ============================================================ */}
                <div className="mx-auto max-w-4xl text-center">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/[0.06] px-4 py-1.5 backdrop-blur-sm">
                        <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-[11px]">
                            The Process
                        </span>
                        <span className="hidden h-3 w-px bg-primary/30 sm:block" />
                        <span className="hidden text-[10px] font-bold uppercase tracking-[0.15em] text-primary/80 sm:block">
                            3 Steps · 30 Minutes
                        </span>
                    </div>

                    {/* Massive headline */}
                    <h2 className="mt-6 text-[2.4rem] font-bold leading-[1.02] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[4rem]">
                        From Breakdown to{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 italic text-primary">
                                Back on Road
                            </span>
                            {/* Underline svg */}
                            <svg
                                className="absolute -bottom-2 left-0 h-3 w-full text-primary/25"
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
                        in Three Steps
                    </h2>

                    {/* Subtitle */}
                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Fast, transparent, and without the workshop hassle.
                        Here's exactly what happens when you call us — no
                        surprises, no hidden fees.
                    </p>

                    {/* Scattered stat pills — modern accent */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                        {[
                            { value: "5–15", label: "min arrival", icon: RiFlashlightFill },
                            { value: "24/7", label: "dispatch", icon: RiTimeFill },
                            { value: "90%", label: "onsite fix", icon: RiShieldCheckFill },
                            { value: "100%", label: "genuine parts", icon: RiCheckDoubleLine },
                        ].map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={i}
                                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-1.5 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/[0.04]"
                                >
                                    <Icon className="size-3 text-primary" />
                                    <span className="text-xs font-bold text-foreground">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                                        {stat.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ============================================================
                    STEPS — Diagonal flow with watermark numerals
                ============================================================ */}
                <div className="relative mt-16 sm:mt-20">
                    {/* Desktop connecting SVG path */}
                    <svg
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                        viewBox="0 0 1200 800"
                        fill="none"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="path-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 200 100 Q 600 100, 600 300 T 400 500 Q 400 700, 800 700"
                            stroke="url(#path-gradient)"
                            strokeWidth="2"
                            strokeDasharray="6 8"
                            className="text-primary"
                        />
                    </svg>

                    <div className="space-y-8 lg:space-y-12">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const MetaIcon = step.metaIcon;
                            const isEven = idx % 2 === 0;
                            const isLast = idx === steps.length - 1;

                            return (
                                <div
                                    key={step.id}
                                    className={cn(
                                        "relative grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8",
                                        isEven ? "lg:pl-0" : "lg:pl-16"
                                    )}
                                >
                                    {/* =================================
                                        WATERMARK NUMERAL (huge background)
                                    ================================= */}
                                    <span
                                        aria-hidden="true"
                                        className={cn(
                                            "pointer-events-none absolute select-none font-serif text-[8rem] font-bold leading-none tracking-tighter text-primary/[0.04] sm:text-[10rem] lg:text-[14rem]",
                                            isEven
                                                ? "left-4 top-1/2 -translate-y-1/2 lg:left-12"
                                                : "right-4 top-1/2 -translate-y-1/2 lg:right-12"
                                        )}
                                    >
                                        {step.stepNumber}
                                    </span>

                                    {/* =================================
                                        LEFT SIDE: Icon + meta (5 cols on desktop)
                                        Order flips on even rows
                                    ================================= */}
                                    <div
                                        className={cn(
                                            "relative lg:col-span-5",
                                            isEven ? "lg:order-1" : "lg:order-2"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "relative flex h-full flex-col justify-between rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-6 backdrop-blur-sm transition-all duration-500 group hover:border-primary/40 hover:shadow-xl hover:shadow-primary/[0.08] sm:p-8",
                                                step.accent
                                            )}
                                        >
                                            {/* Step label row */}
                                            <div className="flex items-center justify-between">
                                                <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                                                    <span className="size-1.5 rounded-full bg-primary" />
                                                    Step {step.stepNumber}
                                                </span>

                                                {/* Meta badge */}
                                                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                                                    <MetaIcon className="size-3" />
                                                    {step.meta}
                                                </span>
                                            </div>

                                            {/* Icon — big, prominent */}
                                            <div className="relative mt-6 mb-6 sm:mt-8 sm:mb-8">
                                                <div
                                                    className={cn(
                                                        "relative flex size-16 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/25 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 sm:size-20",
                                                        idx === 0 && "animate-pulse-subtle"
                                                    )}
                                                >
                                                    <Icon className="size-7 text-primary-foreground sm:size-9" />
                                                    {/* Orbit ring */}
                                                    <div className="absolute -inset-2 rounded-[1.25rem] border border-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                                </div>
                                            </div>

                                            {/* Short title watermark */}
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                                    {idx === 0 && "First"} {idx === 1 && "Second"}{" "}
                                                    {idx === 2 && "Final"} Phase
                                                </p>
                                                <p className="mt-1 font-serif text-2xl italic text-primary/80 sm:text-3xl">
                                                    {step.shortTitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* =================================
                                        RIGHT SIDE: Content (7 cols on desktop)
                                        Order flips on even rows
                                    ================================= */}
                                    <div
                                        className={cn(
                                            "relative flex flex-col justify-center lg:col-span-7",
                                            isEven ? "lg:order-2" : "lg:order-1"
                                        )}
                                    >
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                            {step.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {step.tags.map((tag, i) => (
                                                <span
                                                    key={tag}
                                                    className="group/tag inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/60 px-2.5 py-1 text-[11px] font-semibold text-foreground/80 transition-all hover:border-primary/40 hover:bg-primary/[0.04] hover:text-primary"
                                                >
                                                    <span className="size-1 rounded-full bg-primary/40 transition-all group-hover/tag:bg-primary" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Connector line on mobile */}
                                        {!isLast && (
                                            <div className="mt-6 flex items-center gap-2 lg:hidden">
                                                <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                                                <RiArrowRightLine className="size-4 text-primary/60" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ============================================================
                    BOTTOM CTA BANNER — Full width, bold
                ============================================================ */}
                <div className="relative mt-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:mt-20 sm:p-10">
                    {/* Decorative background */}
                    <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-primary/[0.06] blur-3xl" />
                        <div
                            className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                                backgroundSize: "20px 20px",
                            }}
                        />
                    </div>

                    <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:gap-8 lg:text-left">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-3 py-1 backdrop-blur-sm">
                                <span className="relative flex size-1.5">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                                    Ready when you are
                                </span>
                            </div>
                            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                                Your car fixed in{" "}
                                <span className="text-primary">under 30 minutes</span>
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                                One call. Certified mechanics at your door. No
                                workshop, no towing, no surprises.
                            </p>
                        </div>

                        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <Link
                                href={SiteConfig.numberCallLink}
                                className="group relative inline-flex h-13 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/40"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <RiPhoneFill className="relative size-4" />
                                <span className="relative">Call Now</span>
                                <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                            <Link
                                href={SiteConfig.whatsappCallLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background/80 px-6 py-3.5 text-sm font-bold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                            >
                                <RiWhatsappFill className="size-4" />
                                WhatsApp
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
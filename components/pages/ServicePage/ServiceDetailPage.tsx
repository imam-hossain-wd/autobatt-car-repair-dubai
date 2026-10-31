// components/pages/ServicePage/ServiceDetailPage.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
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
    RiHammerLine,
    RiBookOpenLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

/* ============ Service Type ============ */
type ServiceType = {
    title: string;
    name: string;
    metaTitle: string;
    metaDescription: string;
    features: string[];
    slug: string;
    service_banner?: { src?: string };
    intro: {
        heading: string;
        subheading: string;
        content: string;
    };
    whyChooseUs: {
        heading: string;
        points: string[];
    };
    problemSignsSection: {
        heading: string;
        description: string;
        signs: string[];
    };
    ourProcess: {
        heading: string;
        steps: { title: string; description: string }[];
    };
    toolsOrProducts: {
        heading: string;
        brands: string[];
        note: string;
    };
    ctaSection: {
        heading: string;
        description: string;
        buttonText: string;
    };
    faq: { question: string; answer: string }[];
};

export default function ServiceDetailPage({
    service,
    slug,
}: {
    service: ServiceType;
    slug: string;
}) {
    const {
        city,
        displayNumber,
        numberCallLink,
        whatsappCallLink,
        responseTime,
        serviceAreas,
    } = SiteConfig;

    return (
        <main className="relative w-full overflow-hidden bg-[oklch(0.985_0.003_90)] text-foreground">
            
            {/* ============================================================
                HERO SECTION — Asymmetric editorial hero
            ============================================================ */}
            <section className="relative w-full overflow-hidden border-b border-foreground/10 py-12 sm:py-16 lg:py-24">
                {/* Background texture */}
                <div className="pointer-events-none absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-[0.4]"
                        style={{
                            backgroundImage: `radial-gradient(circle, oklch(0.4 0.02 90) 0.5px, transparent 0.5px)`,
                            backgroundSize: "8px 8px",
                            maskImage: "radial-gradient(ellipse 90% 80% at 30% 40%, black 20%, transparent 90%)",
                            WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 30% 40%, black 20%, transparent 90%)",
                        }}
                    />
                    <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[140px]" />
                    <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-[oklch(0.85_0.1_60)]/15 blur-[140px]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-[11px] font-medium text-foreground/50">
                        <Link href="/" className="transition-colors hover:text-primary">Home</Link>
                        <span className="text-foreground/25">/</span>
                        <Link href="/services" className="transition-colors hover:text-primary">Services</Link>
                        <span className="text-foreground/25">/</span>
                        <span className="truncate text-foreground">{service.name}</span>
                    </nav>

                    <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                        {/* LEFT: Content */}
                        <div className="order-2 lg:order-1 lg:col-span-7">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="flex size-9 items-center justify-center rounded-full border border-foreground/15 bg-white font-serif text-xs font-bold italic text-primary shadow-sm">
                                    01
                                </span>
                                <div className="h-px w-10 bg-foreground/20" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50">
                                    Service Detail
                                </span>
                            </div>

                            <h1 className="text-[2rem] font-bold leading-[1.05] -tracking-[0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                                {service.intro.heading.includes(service.name) ? (
                                    (() => {
                                        const parts = service.intro.heading.split(service.name);
                                        return (
                                            <>
                                                {parts[0]}
                                                <span className="relative inline-block italic text-primary">
                                                    {service.name}
                                                    <svg className="absolute -bottom-1 left-0 h-2.5 w-full text-primary/35" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none" aria-hidden="true">
                                                        <path d="M2 7C60 2 140 1 298 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                                    </svg>
                                                </span>
                                                {parts.slice(1).join(service.name)}
                                            </>
                                        );
                                    })()
                                ) : (
                                    <>
                                        <span className="italic text-primary">{service.name}:</span> {service.intro.heading}
                                    </>
                                )}
                            </h1>

                            <p className="mt-4 max-w-xl text-sm font-semibold uppercase tracking-wider text-primary sm:text-base">
                                {service.intro.subheading}
                            </p>

                            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/60 sm:text-[15px]">
                                {service.intro.content}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    `${responseTime.split(" ")[0]} Min Response`,
                                    "Certified Mechanics",
                                    "24/7 Available",
                                ].map((badge) => (
                                    <span key={badge} className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-white px-3 py-1.5 text-[11px] font-semibold text-foreground shadow-sm transition-colors hover:border-primary/30">
                                        <RiCheckboxCircleFill className="size-3 text-primary" />
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                <Link href={numberCallLink} className="group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-foreground px-6 text-sm font-bold text-background shadow-lg shadow-foreground/20 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/30">
                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                    <RiPhoneFill className="relative size-4" />
                                    <span className="relative">Call {displayNumber}</span>
                                    <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                                <Link href={whatsappCallLink} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-foreground/15 bg-white px-6 text-sm font-bold text-foreground transition-all hover:border-primary hover:text-primary">
                                    <RiWhatsappFill className="size-4" />
                                    WhatsApp Us
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT: Image + Stat Card */}
                        <div className="order-1 lg:order-2 lg:col-span-5">
                            <div className="relative mx-auto max-w-md lg:max-w-none">
                                <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-primary/25 sm:block" />
                                
                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-foreground/5 shadow-2xl shadow-primary/10">
                                    {service.service_banner?.src ? (
                                        <Image src={service.service_banner.src} alt={`${service.name} in ${city}`} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background" />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                                    <div className="pointer-events-none absolute left-4 top-4">
                                        <div className="absolute left-0 top-0 h-px w-8 bg-primary/70" />
                                        <div className="absolute left-0 top-0 h-8 w-px bg-primary/70" />
                                    </div>

                                    <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 backdrop-blur-md">
                                        <div className="flex items-center gap-1.5">
                                            <RiStarFill className="size-3 text-primary" />
                                            <span className="text-[10px] font-bold text-white">5.0</span>
                                        </div>
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 p-5">
                                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                                            <RiVerifiedBadgeFill className="size-3.5 text-primary" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-white">Certified Onsite Service</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-5 -left-3 rounded-2xl border border-foreground/10 bg-white p-3.5 shadow-xl shadow-black/[0.08] sm:-left-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
                                            <RiTimeFill className="size-5 text-primary-foreground" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-foreground/40">Response Time</p>
                                            <p className="text-lg font-black leading-none text-foreground">{responseTime}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                WHAT'S INCLUDED
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-3">
                            <RiSparklingFill className="size-4 text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">What's Included</span>
                            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-foreground/10 to-transparent" />
                            <span className="hidden text-[10px] font-bold uppercase tracking-wider text-foreground/40 sm:inline">{service.features.length} deliverables</span>
                        </div>
                        <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            Everything in this <span className="italic text-primary">service package</span>
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60 sm:text-base">
                            Each feature below is a standard part of this service — no add-ons, no surprises.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {service.features.map((feature, i) => {
                            const num = String(i + 1).padStart(2, "0");
                            return (
                                <div key={i} className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-white p-4 shadow-[0_2px_8px_-4px_oklch(0.2_0.02_90/0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_24px_-8px_oklch(0.2_0.02_90/0.15)]">
                                    <div className="flex items-start gap-3">
                                        <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-serif text-[10px] font-bold italic text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                            {num}
                                        </span>
                                        <span className="flex-1 text-sm font-medium leading-relaxed text-foreground">{feature}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================================
                WHY CHOOSE US
            ============================================================ */}
            <section className="relative w-full border-y border-foreground/10 bg-white py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                        <div className="lg:col-span-5">
                            <div className="lg:sticky lg:top-24">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="flex size-8 items-center justify-center rounded-full border border-foreground/15 bg-[oklch(0.99_0.002_90)] font-serif text-[11px] font-bold italic text-primary">02</span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">Why Choose Us</span>
                                </div>
                                <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
                                    {service.whyChooseUs.heading}
                                </h2>
                                <div className="mt-6 rounded-2xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-5">
                                    <RiDoubleQuotesL className="size-7 text-primary/15" />
                                    <p className="mt-2 font-serif text-sm italic leading-relaxed text-foreground/75">
                                        Trusted by 500+ drivers across {city} — many return for their next service.
                                    </p>
                                    <div className="mt-4 flex items-center gap-3 border-t border-foreground/10 pt-3">
                                        <div className="flex items-center gap-0.5">
                                            {[...Array(5)].map((_, i) => <RiStarFill key={i} className="size-3.5 text-primary" />)}
                                        </div>
                                        <span className="text-xs font-black text-foreground">5.0</span>
                                        <span className="size-1 rounded-full bg-foreground/20" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">Verified</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="space-y-3">
                                {service.whyChooseUs.points.map((point, i) => {
                                    const num = String(i + 1).padStart(2, "0");
                                    return (
                                        <div key={i} className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_24px_-8px_oklch(0.2_0.02_90/0.12)]">
                                            <span aria-hidden="true" className="pointer-events-none absolute -right-3 -top-5 select-none font-serif text-[5rem] font-bold italic leading-none text-foreground/[0.03] transition-colors duration-500 group-hover:text-primary/[0.08]">
                                                {num}
                                            </span>
                                            <div className="relative flex items-start gap-3">
                                                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                                    <RiCheckLine className="size-3.5 text-primary transition-colors group-hover:text-primary-foreground" />
                                                </span>
                                                <p className="flex-1 text-sm font-medium leading-relaxed text-foreground">{point}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                PROBLEM SIGNS
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-3">
                            <RiAlertLine className="size-4 text-destructive" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-destructive">Diagnostic Checklist</span>
                            <div className="h-px flex-1 bg-gradient-to-r from-destructive/30 via-foreground/10 to-transparent" />
                        </div>
                        <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            {service.problemSignsSection.heading}
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60 sm:text-base">
                            {service.problemSignsSection.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {service.problemSignsSection.signs.map((sign, i) => {
                            const num = String(i + 1).padStart(2, "0");
                            return (
                                <div key={i} className="group flex items-start gap-3 rounded-xl border border-destructive/15 bg-destructive/[0.03] p-4 transition-all duration-200 hover:border-destructive/30 hover:bg-destructive/[0.06]">
                                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded border border-destructive/30 bg-white">
                                        <RiAlertLine className="size-3.5 text-destructive" />
                                    </span>
                                    <div className="flex-1">
                                        <span className="font-serif text-[10px] font-bold italic uppercase tracking-[0.15em] text-destructive/70">Signal {num}</span>
                                        <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">{sign}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================================
                OUR PROCESS
            ============================================================ */}
            <section className="relative w-full border-y border-foreground/10 bg-white py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 lg:mb-12">
                        <div className="flex items-center gap-3">
                            <RiHammerLine className="size-4 text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">The Process</span>
                            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-foreground/10 to-transparent" />
                            <span className="hidden text-[10px] font-bold uppercase tracking-wider text-foreground/40 sm:inline">{service.ourProcess.steps.length} stages</span>
                        </div>
                        <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                            {service.ourProcess.heading}
                        </h2>
                    </div>

                    <div className="relative">
                        <div aria-hidden="true" className="absolute bottom-6 left-[23px] top-6 hidden w-px md:block">
                            <div className="h-full w-full bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
                        </div>

                        <div className="space-y-4">
                            {service.ourProcess.steps.map((step, i) => {
                                const num = String(i + 1).padStart(2, "0");
                                return (
                                    <div key={i} className="group relative flex gap-4 sm:gap-5">
                                        <div className="relative shrink-0">
                                            <div className="relative flex size-12 items-center justify-center rounded-xl border-4 border-white bg-primary shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-105">
                                                <span className="font-serif text-xs font-bold italic text-primary-foreground">{num}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 overflow-hidden rounded-xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-4 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_4px_16px_-4px_oklch(0.2_0.02_90/0.1)] sm:p-5">
                                            <div className="flex items-center gap-2">
                                                <span className="font-serif text-[10px] font-bold italic uppercase tracking-[0.2em] text-primary">Step {num}</span>
                                                <span className="h-2 w-px bg-foreground/15" />
                                                <span className="text-[9px] font-bold uppercase tracking-wider text-foreground/40">Stage</span>
                                            </div>
                                            <h3 className="mt-1.5 text-sm font-bold tracking-tight text-foreground sm:text-base">{step.title}</h3>
                                            <p className="mt-1.5 text-xs leading-relaxed text-foreground/60 sm:text-sm">{step.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                TOOLS & PRODUCTS
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-3">
                                <RiToolsFill className="size-4 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Tools & Products</span>
                            </div>
                            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                                {service.toolsOrProducts.heading}
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-foreground/60 sm:text-base">
                                {service.toolsOrProducts.note}
                            </p>
                            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white px-3 py-1.5 shadow-sm">
                                <RiShieldCheckFill className="size-3.5 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/70">Genuine parts only</span>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-white shadow-[0_2px_12px_-4px_oklch(0.2_0.02_90/0.06)]">
                                <div className="border-b border-foreground/10 bg-[oklch(0.99_0.002_90)] px-5 py-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">Approved Brands</span>
                                        <span className="font-serif text-[11px] font-bold italic text-primary">{service.toolsOrProducts.brands.length} verified</span>
                                    </div>
                                </div>
                                <div className="divide-y divide-foreground/[0.06]">
                                    {service.toolsOrProducts.brands.map((brand, i) => {
                                        const num = String(i + 1).padStart(2, "0");
                                        return (
                                            <div key={i} className="group flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-primary/[0.03]">
                                                <span className="font-serif text-[11px] font-bold italic text-foreground/30 transition-colors group-hover:text-primary">{num}</span>
                                                <span className="h-3 w-px bg-foreground/10" />
                                                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary">
                                                    <RiCheckLine className="size-3 text-primary transition-colors group-hover:text-primary-foreground" />
                                                </span>
                                                <span className="flex-1 text-sm font-medium text-foreground">{brand}</span>
                                                <RiArrowRightUpLine className="size-3 text-foreground/0 transition-all group-hover:text-primary/60" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                FAQ SECTION
            ============================================================ */}
            <section className="relative w-full border-y border-foreground/10 bg-white py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                        <div className="lg:col-span-5">
                            <div className="lg:sticky lg:top-24">
                                <div className="flex items-center gap-3">
                                    <RiQuestionLine className="size-4 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Frequently Asked</span>
                                </div>
                                <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.25rem]">
                                    Questions about <span className="italic text-primary">{service.name}</span>?
                                </h2>
                                <p className="mt-4 text-sm leading-relaxed text-foreground/60 sm:text-base">
                                    Quick answers to the questions our customers ask most often about this service.
                                </p>
                                <div className="mt-6 rounded-2xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-5">
                                    <div className="flex items-center gap-2">
                                        <RiBookOpenLine className="size-4 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/50">Still need help?</span>
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-foreground">Talk to a mechanic in 30 seconds</p>
                                    <Link href={numberCallLink} className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80">
                                        <RiPhoneFill className="size-3.5" />
                                        {displayNumber}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="divide-y divide-foreground/10 border-y border-foreground/10">
                                {service.faq.map((faq, i) => {
                                    const num = String(i + 1).padStart(2, "0");
                                    return (
                                        <details key={i} className="group py-5 transition-colors">
                                            <summary className="flex cursor-pointer items-start justify-between gap-4 marker:hidden hover:no-underline">
                                                <div className="flex items-start gap-4">
                                                    <span className="font-serif text-sm font-bold italic text-primary transition-colors group-open:text-primary">Q{num}</span>
                                                    <span className="flex-1 text-sm font-bold leading-relaxed text-foreground sm:text-base">{faq.question}</span>
                                                </div>
                                                <RiArrowDownSLine className="mt-1 size-4 shrink-0 text-foreground/40 transition-transform duration-200 group-open:rotate-180 group-open:text-primary" />
                                            </summary>
                                            <div className="mt-3 pl-9">
                                                <div className="rounded-xl border border-foreground/10 bg-[oklch(0.99_0.002_90)] p-4">
                                                    <p className="text-sm leading-relaxed text-foreground/70">{faq.answer}</p>
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
                FINAL CTA
            ============================================================ */}
            <section className="relative w-full py-14 sm:py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl border border-foreground/15 bg-foreground">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-primary/25 blur-[100px]" />
                            <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[100px]" />
                            <div
                                className="absolute inset-0 opacity-[0.08]"
                                style={{
                                    backgroundImage: `linear-gradient(to right, oklch(1 0 0) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0) 1px, transparent 1px)`,
                                    backgroundSize: "24px 24px",
                                    maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)",
                                    WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)",
                                }}
                            />
                        </div>

                        <div className="pointer-events-none absolute left-6 top-6">
                            <div className="absolute left-0 top-0 h-px w-8 bg-primary/60" />
                            <div className="absolute left-0 top-0 h-8 w-px bg-primary/60" />
                        </div>
                        <div className="pointer-events-none absolute bottom-6 right-6">
                            <div className="absolute bottom-0 right-0 h-px w-8 bg-primary/60" />
                            <div className="absolute bottom-0 right-0 h-8 w-px bg-primary/60" />
                        </div>

                        <div className="relative flex flex-col items-start gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                                    <RiVerifiedBadgeFill className="size-3 text-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">Available 24/7</span>
                                </div>
                                <h2 className="mt-5 text-2xl font-bold leading-[1.1] tracking-tight text-background sm:text-3xl lg:text-[2.5rem]">
                                    {service.ctaSection.heading}
                                </h2>
                                <p className="mt-4 text-sm leading-relaxed text-background/60 sm:text-base">
                                    {service.ctaSection.description}
                                </p>
                            </div>

                            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                                <Link href={numberCallLink} className="group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/40 sm:w-auto">
                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                    <RiPhoneFill className="relative size-4" />
                                    <span className="relative">{displayNumber}</span>
                                    <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                                <Link href={whatsappCallLink} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border-2 border-background/15 bg-transparent px-6 text-sm font-bold text-background transition-all duration-300 hover:border-primary hover:text-primary sm:w-auto">
                                    <RiWhatsappFill className="size-4" />
                                    WhatsApp
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
                SERVICE AREAS STRIP
            ============================================================ */}
            <section className="relative w-full border-t border-foreground/10 bg-[oklch(0.99_0.002_90)] py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                        <div className="flex items-center gap-3">
                            <span className="flex size-10 items-center justify-center rounded-xl border border-foreground/10 bg-white shadow-sm">
                                <RiMapPinFill className="size-4 text-primary" />
                            </span>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/50">{service.name} Available In</p>
                                <p className="text-sm font-bold text-foreground">All {serviceAreas.length} {city} Areas</p>
                            </div>
                        </div>
                        <Link href="/area-we-serve" className="group inline-flex items-center gap-1.5 rounded-xl border border-foreground/10 bg-white px-4 py-2.5 text-xs font-bold text-foreground shadow-sm transition-all hover:border-primary/40 hover:text-primary">
                            View All Areas
                            <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
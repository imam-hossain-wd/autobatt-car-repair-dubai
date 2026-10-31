// app/(marketing)/_components/service-map.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    RiMapPinFill,
    RiNavigationFill,
    RiTimeFill,
    RiShieldCheckFill,
    RiRoadMapFill,
    RiUserFill,
    RiMailFill,
    RiPhoneFill,
    RiMessageFill,
    RiServiceFill,
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiCheckboxCircleFill,
    RiFlashlightFill,
    RiStarFill,
    RiSendPlaneFill,
    RiWhatsappFill,
    RiLoader4Line,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { SiteConfig, streetAddress } from "@/config/siteConfig";

/* ============ Service options ============ */
const SERVICE_OPTIONS = [
    "Battery Replacement",
    "Jump Start",
    "Computer Diagnostic",
    "Alternator Repair",
    "Fuel Pump Repair",
    "Starter Motor Repair",
    "AC Repair",
    "Brake Pad Repair",
    "Other Emergency",
];

export function Maps() {
    const {
        GMB,
        serviceAreas,
        brandName,
        city,
        responseTime,
        location,
        displayNumber,
        numberCallLink,
        whatsappCallLink,
    } = SiteConfig;

    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                phone: "",
                email: "",
                service: "",
                message: "",
            });
        }, 3000);
    };

    return (
        <section className="relative w-full overflow-hidden bg-background py-10">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Left primary glow */}
                <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[130px]" />

                {/* Right primary glow */}
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
                                Service Coverage
                            </span>
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-border to-transparent" />
                    </div> */}

                    {/* Headline + Chips */}
                    <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[3.25rem]">
                                Where We{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-primary">
                                        Serve in Dubai
                                    </span>
                                    <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-primary/15" />
                                </span>
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                Mobile mechanics strategically positioned across
                                every major district — with guaranteed{" "}
                                <span className="font-semibold text-foreground">
                                    {responseTime} response
                                </span>
                                , 24/7.
                            </p>
                        </div>

                        {/* Trust chips */}
                        <div className="flex flex-wrap items-center gap-2.5">
                            <StatChip
                                icon={<RiTimeFill className="size-3.5" />}
                                label={`${responseTime} Response`}
                            />
                            <StatChip
                                icon={<RiMapPinFill className="size-3.5" />}
                                label={`${serviceAreas.length}+ Areas`}
                            />
                            <StatChip
                                icon={<RiShieldCheckFill className="size-3.5" />}
                                label="Full Coverage"
                            />
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    MAIN GRID — Map (left 7) + Contact Form (right 5)
                ============================================================ */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7">
                    
                    {/* ==================================================
                        LEFT: MAP CARD (7 cols)
                    ================================================== */}
                    <div className="lg:col-span-7">
                        <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                            {/* Corner crop marks */}
                            <div className="pointer-events-none absolute left-4 top-4 z-20">
                                <div className="absolute left-0 top-0 h-px w-5 bg-primary" />
                                <div className="absolute left-0 top-0 h-5 w-px bg-primary" />
                            </div>
                            <div className="pointer-events-none absolute bottom-4 right-4 z-20">
                                <div className="absolute bottom-0 right-0 h-px w-5 bg-primary" />
                                <div className="absolute bottom-0 right-0 h-5 w-px bg-primary" />
                            </div>

                            {/* Top bar */}
                            <div className="relative z-10 flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3.5 backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex size-2">
                                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                        <span className="relative inline-flex size-2 rounded-full bg-primary" />
                                    </span>
                                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-foreground">
                                        Live Location
                                    </span>
                                </div>
                                <div className="hidden items-center gap-1.5 text-[11px] text-muted-foreground sm:flex">
                                    <RiNavigationFill className="size-3 text-primary" />
                                    <span className="font-mono">
                                        {GMB.latitude}, {GMB.longitude}
                                    </span>
                                </div>
                            </div>

                            {/* Map iframe */}
                            <div className="relative aspect-4/3 w-full bg-muted lg:aspect-16/11">
                                {!isMapLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                                        <div className="flex flex-col items-center gap-2.5">
                                            <RiRoadMapFill className="size-8 animate-pulse text-primary/60" />
                                            <span className="text-xs font-medium text-muted-foreground">
                                                Loading map...
                                            </span>
                                        </div>
                                    </div>
                                )}

                                <iframe
                                    title={`${brandName} Location Map`}
                                    src={GMB.embedMap}
                                    width="100%"
                                    height="100%"
                                    className={cn(
                                        "size-full transition-opacity duration-700",
                                        isMapLoaded ? "opacity-100" : "opacity-0"
                                    )}
                                    style={{
                                        border: 0,
                                        filter: "grayscale(0.15) contrast(1.05)",
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    onLoad={() => setIsMapLoaded(true)}
                                />
                            </div>

                            {/* Bottom info strip */}
                            <div className="relative z-10 border-t border-border bg-muted/40 px-5 py-3.5 backdrop-blur-sm">
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                                    <span className="inline-flex items-center gap-1.5 font-medium">
                                        <RiMapPinFill className="size-3.5 text-primary" />
                                       {streetAddress}, {location}, {city}
                                    </span>
                                    <span className="hidden size-1 rounded-full bg-border sm:inline-block" />
                                    <span className="inline-flex items-center gap-1.5 font-medium">
                                        <RiTimeFill className="size-3.5 text-primary" />
                                        24/7 Available
                                    </span>
                                    <span className="hidden size-1 rounded-full bg-border sm:inline-block" />
                                    <span className="inline-flex items-center gap-1.5 font-medium">
                                        <RiShieldCheckFill className="size-3.5 text-primary" />
                                        GPS Verified
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==================================================
                        RIGHT: CONTACT FORM CARD (5 cols)
                    ================================================== */}
                    <div className="lg:col-span-5">
                        <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-black/[0.04] dark:shadow-black/20">
                            {/* Top accent bar */}
                            <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                            {/* Corner crop marks */}
                            <div className="pointer-events-none absolute right-4 top-4 z-10">
                                <div className="absolute right-0 top-0 h-px w-5 bg-primary/60" />
                                <div className="absolute right-0 top-0 h-5 w-px bg-primary/60" />
                            </div>

                            {/* Header */}
                            <div className="relative border-b border-border p-5 sm:p-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-2.5 py-1">
                                            <RiFlashlightFill className="size-3 text-primary" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                                                Fast Response
                                            </span>
                                        </div>
                                        <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight text-foreground sm:text-2xl">
                                            Book a Mechanic
                                        </h3>
                                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                            Fill the form and we'll be at your
                                            location within {responseTime}.
                                        </p>
                                    </div>
                                </div>

                                {/* Trust row */}
                                {/* <div className="mt-4 flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <RiStarFill
                                                key={i}
                                                className="size-3 text-primary"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-bold text-foreground">
                                        5.0
                                    </span>
                                    <span className="text-[10px] text-muted-foreground">
                                        · 500+ happy drivers
                                    </span>
                                </div> */}
                            </div>

                            {/* Form */}
                            <form
                                onSubmit={handleSubmit}
                                className="relative p-5 sm:p-6"
                            >
                                {isSubmitted ? (
                                    /* ============ Success State ============ */
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="relative flex size-16 items-center justify-center rounded-full bg-primary/10">
                                            <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                                            <RiCheckboxCircleFill className="relative size-8 text-primary" />
                                        </div>
                                        <h4 className="mt-5 text-lg font-bold text-foreground">
                                            Request Sent!
                                        </h4>
                                        <p className="mt-1.5 max-w-xs text-xs text-muted-foreground">
                                            Our dispatch team will contact you
                                            within 1 minute to confirm your
                                            booking.
                                        </p>
                                    </div>
                                ) : (
                                    /* ============ Form Fields ============ */
                                    <div className="space-y-4">
                                        {/* Name */}
                                        <FormField
                                            icon={RiUserFill}
                                            label="Full Name"
                                            id="name"
                                        >
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Ahmed Al Maktoum"
                                                className="h-11 w-full border-0 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                                            />
                                        </FormField>

                                        {/* Phone + Email row */}
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <FormField
                                                icon={RiPhoneFill}
                                                label="Phone"
                                                id="phone"
                                            >
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="+971 50 000 0000"
                                                    className="h-11 w-full border-0 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                                                />
                                            </FormField>

                                            <FormField
                                                icon={RiMailFill}
                                                label="Email"
                                                id="email"
                                            >
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="you@example.com"
                                                    className="h-11 w-full border-0 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                                                />
                                            </FormField>
                                        </div>

                                        {/* Service dropdown */}
                                        <FormField
                                            icon={RiServiceFill}
                                            label="Service Needed"
                                            id="service"
                                        >
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                                className="h-11 w-full cursor-pointer border-0 bg-transparent text-sm font-medium text-foreground outline-none"
                                            >
                                                <option value="">
                                                    Select a service
                                                </option>
                                                {SERVICE_OPTIONS.map(
                                                    (service) => (
                                                        <option
                                                            key={service}
                                                            value={service}
                                                        >
                                                            {service}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </FormField>

                                        {/* Message */}
                                        <FormField
                                            icon={RiMessageFill}
                                            label="Message"
                                            id="message"
                                        >
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={3}
                                                placeholder="Describe your issue or location..."
                                                className="w-full resize-none border-0 bg-transparent pt-3 text-sm font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                                            />
                                        </FormField>

                                        {/* Submit button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group mt-2 inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40 disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <RiLoader4Line className="size-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <RiSendPlaneFill className="size-4" />
                                                    Request Mechanic
                                                    <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                                                </>
                                            )}
                                        </button>

                                        {/* Quick contact row */}
                                        <div className="flex items-center gap-3 pt-1">
                                            <div className="h-px flex-1 bg-border" />
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                                or
                                            </span>
                                            <div className="h-px flex-1 bg-border" />
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <Link
                                                href={numberCallLink}
                                                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background text-xs font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                                            >
                                                <RiPhoneFill className="size-3.5" />
                                                Call Now
                                            </Link>
                                            <Link
                                                href={whatsappCallLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background text-xs font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                                            >
                                                <RiWhatsappFill className="size-3.5" />
                                                WhatsApp
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================================================
    SUB-COMPONENT: Form Field Wrapper
============================================================ */
function FormField({
    icon: Icon,
    label,
    id,
    children,
}: {
    icon: React.ElementType;
    label: string;
    id: string;
    children: React.ReactNode;
}) {
    return (
        <div className="group relative rounded-xl border border-border bg-background/50 transition-all duration-200 focus-within:border-primary/50 focus-within:bg-primary/[0.02] focus-within:shadow-sm focus-within:shadow-primary/10">
            {/* Label */}
            {/* <label
                htmlFor={id}
                className="absolute left-11 top-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground/70 transition-colors group-focus-within:text-primary"
            >
                {label}
            </label> */}

            <div className="flex items-start">
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center pt-3">
                    <Icon className="size-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                </div>

                {/* Input */}
                <div className="min-w-0 flex-1 pt-5">{children}</div>
            </div>
        </div>
    );
}

/* ============================================================
    SUB-COMPONENT: Stat Chip
============================================================ */
function StatChip({
    icon,
    label,
}: {
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-sm transition-colors hover:border-primary/40">
            <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                {icon}
            </span>
            <span className="text-xs font-bold text-foreground">{label}</span>
        </div>
    );
}

/* ============================================================
    SUB-COMPONENT: Mini Stat
============================================================ */
function MiniStat({
    icon,
    value,
    label,
}: {
    icon: React.ReactNode;
    value: string;
    label: string;
}) {
    return (
        <div className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/[0.06]">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {icon}
            </span>
            <div className="min-w-0">
                <p className="text-lg font-bold leading-none text-foreground sm:text-xl">
                    {value}
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {label}
                </p>
            </div>
        </div>
    );
}
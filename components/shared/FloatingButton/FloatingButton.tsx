// components/shared/FloatingActions/FloatingActions.tsx

"use client";

import { useState, useEffect } from "react";
import {
    RiWhatsappFill,
    RiPhoneFill,
    RiArrowUpLine,
    RiCustomerServiceFill,
    RiCloseLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";
import Link from "next/link";

export default function FloatingButtons() {
    // const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const { numberCallLink, whatsappCallLink, displayNumber } = SiteConfig;

    /* ============ Scroll detection ============ */
    useEffect(() => {
        let scrollTimer: NodeJS.Timeout | null = null;

        const handleScroll = () => {
            const scrolled = window.scrollY > 300;
            // setIsVisible(scrolled);
            setIsScrolling(true);

            if (scrollTimer) clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimer) clearTimeout(scrollTimer);
        };
    }, []);

    /* ============ Smooth scroll to top ============ */
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* ============================================================
                MOBILE / TABLET — Bottom Fixed Bar
            ============================================================ */}
            <div
                className={cn(
                    "fixed inset-x-0 bottom-0 z-40 lg:hidden",
                    "transition-all duration-300 ease-out translate-y-0 opacity-100"
                )}
            >
                {/* Backdrop blur gradient */}
                <div className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-background via-background/80 to-transparent" />

                <div className="relative border-t border-border bg-background/95 px-3 py-2.5 shadow-[0_-4px_20px_-8px] shadow-primary/20 backdrop-blur-xl sm:px-4">
                    <div className="mx-auto flex max-w-2xl items-center gap-2">
                        {/* Call Now */}
                        <Link
                            href={numberCallLink}
                            aria-label="Call now"
                            className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-primary/25 bg-primary/[0.06] px-3 text-sm font-bold text-primary transition-all duration-200 active:scale-95"
                        >
                            <RiPhoneFill className="size-4" />
                            <span>Call Now</span>
                        </Link>

                        {/* WhatsApp */}
                        <Link
                            href={whatsappCallLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat on WhatsApp"
                            className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 active:scale-95"
                        >
                            <RiWhatsappFill className="size-4" />
                            <span>WhatsApp</span>
                        </Link>

                        {/* Scroll to top */}
                        <button
                            onClick={scrollToTop}
                            aria-label="Scroll to top"
                            className={cn(
                                "flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all duration-200 active:scale-95",
                                isScrolling && "border-primary/40 text-primary"
                            )}
                        >
                            <RiArrowUpLine className="size-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ============================================================
                DESKTOP — Right Side Stacked Buttons
            ============================================================ */}
            <div
                className={cn(
                    "fixed bottom-8 right-6 z-40 hidden flex-col items-end gap-3 lg:flex xl:right-8",
                    "transition-all duration-500 ease-out translate-y-0 opacity-100",
                )}
            >
                {/* Scroll to Top */}
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className={cn(
                        "group flex size-11 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-lg shadow-black/[0.08] transition-all duration-200",
                        "hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-xl hover:shadow-primary/15",
                        isScrolling && "border-primary/40 text-primary"
                    )}
                >
                    <RiArrowUpLine className="size-4 transition-transform group-hover:-translate-y-0.5" />
                </button>

                {/* Expandable CTA Stack */}
                <div className="flex flex-col items-end gap-3">
                    {/* Call (revealed on expand) */}
                    <a
                        href={numberCallLink}
                        aria-label={`Call ${displayNumber}`}
                        className={cn(
                            "group flex items-center gap-3 rounded-xl border border-border bg-card py-2.5 pl-3 pr-4 shadow-lg shadow-black/[0.08] transition-all duration-300",
                            "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15",
                            isExpanded
                                ? "translate-y-0 scale-100 opacity-100"
                                : "pointer-events-none translate-y-2 scale-95 opacity-0"
                        )}
                    >
                        <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <RiPhoneFill className="size-3.5" />
                        </span>
                        <div className="text-left">
                            <p className="text-[9px] font-black uppercase tracking-wider text-muted-foreground">
                                Call 24/7
                            </p>
                            <p className="text-xs font-bold text-foreground">
                                {displayNumber}
                            </p>
                        </div>
                    </a>

                    {/* WhatsApp (revealed on expand) */}
                    <Link
                        href={whatsappCallLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                        className={cn(
                            "group flex items-center gap-3 rounded-xl border border-border bg-card py-2.5 pl-3 pr-4 shadow-lg shadow-black/[0.08] transition-all duration-300",
                            "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15",
                            isExpanded
                                ? "translate-y-0 scale-100 opacity-100"
                                : "pointer-events-none translate-y-2 scale-95 opacity-0"
                        )}
                        style={{
                            transitionDelay: isExpanded ? "50ms" : "0ms",
                        }}
                    >
                        <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <RiWhatsappFill className="size-3.5" />
                        </span>
                        <div className="text-left">
                            <p className="text-[9px] font-black uppercase tracking-wider text-muted-foreground">
                                WhatsApp
                            </p>
                            <p className="text-xs font-bold text-foreground">
                                Chat Instantly
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Main Toggle Button */}
                <button
                    onClick={() => setIsExpanded((v) => !v)}
                    aria-label={
                        isExpanded ? "Close contact menu" : "Open contact menu"
                    }
                    aria-expanded={isExpanded}
                    className={cn(
                        "group relative flex size-14 items-center justify-center rounded-2xl shadow-xl transition-all duration-300",
                        "hover:scale-105",
                        isExpanded
                            ? "bg-primary text-background shadow-black/25"
                            : "bg-primary text-primary-foreground shadow-primary/40"
                    )}
                >
                    {/* Pulse ring */}
                    {!isExpanded && (
                        <span className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-primary/40" />
                    )}

                    <span
                        className={cn(
                            "absolute transition-all duration-300",
                            isExpanded
                                ? "rotate-90 scale-0 opacity-0"
                                : "rotate-0 scale-100 opacity-100"
                        )}
                    >
                        <RiCustomerServiceFill className="size-6" />
                    </span>
                    <span
                        className={cn(
                            "absolute transition-all duration-300",
                            isExpanded
                                ? "rotate-0 scale-100 opacity-100"
                                : "-rotate-90 scale-0 opacity-0"
                        )}
                    >
                        <RiCloseLine className="size-6" />
                    </span>
                </button>
            </div>
        </>
    );
}
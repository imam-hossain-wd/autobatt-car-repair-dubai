// app/error.tsx

"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
    RiErrorWarningLine,
    RiRefreshLine,
    RiHome4Fill,
    RiArrowRightLine,
    RiCustomerServiceFill,
    RiPhoneFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const { numberCallLink, displayNumber } = SiteConfig;

    // Log error for debugging
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[oklch(0.985_0.003_90)] px-4 py-16 sm:px-6">
            {/* Soft background wash — one glow only */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/4 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[120px]" />
            </div>

            <div className="relative mx-auto w-full max-w-lg text-center">

                {/* Error icon — red accent, subtle */}
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-destructive/20 bg-destructive/[0.06]">
                    <RiErrorWarningLine className="size-7 text-destructive" />
                </div>

                {/* Small label */}
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.25em] text-destructive">
                    Something went wrong
                </p>

                {/* Headline — calm, direct */}
                <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                    We hit an unexpected error
                </h1>

                {/* Subtext — honest, reassuring */}
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-foreground/60 sm:text-base">
                    This wasn't supposed to happen. Our team has been
                    notified, and we're looking into it. In the meantime,
                    you can try again or head back home.
                </p>

                {/* Error ID — only if available, small and muted */}
                {error?.digest && (
                    <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-white px-2.5 py-1">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/40">
                            Error ID
                        </span>
                        <span className="font-mono text-[10px] font-bold text-foreground/60">
                            {error.digest}
                        </span>
                    </div>
                )}

                {/* Primary actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                        onClick={reset}
                        className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
                    >
                        <RiRefreshLine className="size-4 transition-transform duration-300 group-hover:rotate-180" />
                        Try Again
                        <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </button>

                    <Link
                        href="/"
                        className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-foreground/15 bg-white px-6 text-sm font-bold text-foreground transition-all hover:border-primary hover:text-primary"
                    >
                        <RiHome4Fill className="size-4" />
                        Back to Home
                    </Link>
                </div>

                {/* Gentle help line */}
                <div className="mt-10 flex items-center justify-center gap-2 text-xs text-foreground/50">
                    <RiCustomerServiceFill className="size-3.5 text-primary" />
                    <span>Still stuck?</span>
                    <a
                        href={numberCallLink}
                        className="inline-flex items-center gap-1 font-semibold text-foreground transition-colors hover:text-primary"
                    >
                        <RiPhoneFill className="size-3" />
                        {displayNumber}
                    </a>
                </div>
            </div>
        </main>
    );
}
// app/not-found.tsx

import Link from "next/link";
import {
    RiArrowRightLine,
    RiHome4Fill,
    RiSearchLine,
    RiToolsFill,
    RiCustomerServiceFill,
    RiArrowLeftLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

export default function NotFound() {
    const { numberCallLink, displayNumber } = SiteConfig;

    return (
        <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[oklch(0.985_0.003_90)] px-4 py-16 sm:px-6">
            {/* Soft background wash */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/4 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[120px]" />
            </div>

            <div className="relative mx-auto w-full max-w-lg text-center">
                {/* Icon — simple, meaningful */}
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl border border-foreground/10 bg-white shadow-sm">
                    <RiSearchLine className="size-7 text-primary" />
                </div>

                {/* Small label */}
                <p className="mt-6 text-lg font-bold uppercase tracking-[0.25em] text-red-500">
                    404 · Page not found
                </p>

                {/* Headline — warm, human */}
                <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                    We couldn't find that page
                </h1>

                {/* Subtext — honest */}
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-foreground/60 sm:text-base">
                    It may have been moved, renamed, or never existed.
                    No worries — let's get you back on track.
                </p>

                {/* Actions — two clear paths */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Link
                        href="/"
                        className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-background shadow-sm transition-all hover:bg-primary"
                    >
                        <RiHome4Fill className="size-4" />
                        Back to Home
                        <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>

                    <Link
                        href="/services"
                        className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-foreground/15 bg-white px-6 text-sm font-bold text-foreground transition-all hover:border-primary hover:text-primary"
                    >
                        <RiToolsFill className="size-4" />
                        Browse Services
                    </Link>
                </div>

                {/* Gentle help line */}
                <div className="mt-10 flex items-center justify-center gap-2 text-xs text-foreground/50">
                    <RiCustomerServiceFill className="size-3.5 text-primary" />
                    <span>Need help finding something?</span>
                    <Link
                        href={numberCallLink}
                        className="font-semibold text-foreground transition-colors hover:text-primary"
                    >
                        Call {displayNumber}
                    </Link>
                </div>

                {/* Back link */}
                <Link
                    href="/"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/50 transition-colors hover:text-primary"
                >
                    <RiArrowLeftLine className="size-3.5" />
                    Or go back to the previous page
                </Link>
            </div>
        </main>
    );
}
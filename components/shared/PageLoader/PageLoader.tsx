// components/shared/Loading/Loading.tsx

"use client";

import { cn } from "@/lib/utils";

/* ============================================================
    PAGE LOADER — Full-screen loading overlay
============================================================ */
export function PageLoader({
    label = "Loading",
    sublabel,
    className,
}: {
    label?: string;
    sublabel?: string;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "fixed inset-0 z-[100] flex flex-col items-center justify-center",
                "bg-[oklch(0.985_0.003_90)]",
                className
            )}
            role="status"
            aria-live="polite"
            aria-label={label}
        >
            {/* Subtle paper grain — matches site aesthetic */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `radial-gradient(circle, oklch(0.4 0.02 90) 0.5px, transparent 0.5px)`,
                    backgroundSize: "8px 8px",
                    maskImage:
                        "radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 70%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 60% 60% at 50% 50%, black 10%, transparent 70%)",
                }}
            />

            {/* Loader content */}
            <div className="relative flex flex-col items-center gap-6">

                {/* Spinner — single elegant arc */}
                <div className="relative flex size-14 items-center justify-center">
                    {/* Soft glow behind */}
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />

                    {/* Static track */}
                    <svg
                        className="absolute inset-0 -rotate-90"
                        viewBox="0 0 56 56"
                        fill="none"
                        aria-hidden="true"
                    >
                        <circle
                            cx="28"
                            cy="28"
                            r="24"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-foreground/8"
                        />
                        {/* Animated arc */}
                        <circle
                            cx="28"
                            cy="28"
                            r="24"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="150"
                            strokeDashoffset="112"
                            className="animate-spin-arc text-primary"
                            style={{
                                transformOrigin: "28px 28px",
                            }}
                        />
                    </svg>

                    {/* Center dot */}
                    <span className="size-1.5 rounded-full bg-primary" />
                </div>

                {/* Label with editorial accent */}
                <div className="text-center">
                    <p className="text-sm font-bold tracking-tight text-foreground">
                        {label}
                        <span className="ml-0.5 inline-flex">
                            <span className="animate-pulse-dot [animation-delay:0ms]">.</span>
                            <span className="animate-pulse-dot [animation-delay:200ms]">.</span>
                            <span className="animate-pulse-dot [animation-delay:400ms]">.</span>
                        </span>
                    </p>
                    {sublabel && (
                        <p className="mt-1.5 font-serif text-xs italic text-foreground/50">
                            {sublabel}
                        </p>
                    )}
                </div>

                {/* Thin progress bar */}
                <div className="h-px w-32 overflow-hidden rounded-full bg-foreground/8">
                    <div className="h-full w-1/3 animate-progress-bar rounded-full bg-primary" />
                </div>
            </div>
        </div>
    );
}
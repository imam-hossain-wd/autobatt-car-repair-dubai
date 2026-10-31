import Link from "next/link";
import Image from "next/image";
import {
    RiArrowRightUpLine,
    RiArrowRightLine,
    RiCheckLine,
    RiTimeFill,
    RiShieldCheckFill,
    RiFlashlightFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { ServiceCardProps } from "@/types/card";


interface ExtendedServiceCardProps extends ServiceCardProps {
    variant?: "default" | "spotlight";
}

export function ServiceCard({
    name,
    slug,
    features = [],
    image,
    intro,
    className,
    index = 0,
    variant = "default",
}: ExtendedServiceCardProps) {
    const displayFeatures = features.slice(0, 3);
    const description =
        intro?.content?.split(".")[0]?.slice(0, 100) + "..." || "";
    const formattedNumber = String(index + 1).padStart(2, "0");
    const isSpotlight = variant === "spotlight";

    return (
        <article
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card",
                "transition-all duration-500 ease-out",
                "hover:-translate-y-1.5 hover:border-primary/50",
                "hover:shadow-[0_25px_60px_-15px] hover:shadow-primary/20",
                isSpotlight && "md:flex-row",
                className
            )}
        >
            {/* ============================================
                IMAGE SECTION
            ============================================ */}
            <div
                className={cn(
                    "relative w-full overflow-hidden bg-muted",
                    isSpotlight
                        ? "aspect-[4/3] md:aspect-auto md:w-1/2 md:min-h-[420px]"
                        : "aspect-[16/11]"
                )}
            >
                {image ? (
                    <Image
                        src={image}
                        alt={`${name} in Dubai`}
                        fill
                        sizes={
                            isSpotlight
                                ? "(max-width: 768px) 100vw, 50vw"
                                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        }
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background" />
                )}

                {/* Multi-layer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Watermark number — huge, behind content */}
                <span
                    aria-hidden="true"
                    className={cn(
                        "pointer-events-none absolute select-none font-serif font-bold leading-none tracking-tighter text-white/[0.08]",
                        isSpotlight
                            ? "-right-4 -top-8 text-[10rem]"
                            : "-right-2 -top-4 text-[6rem]"
                    )}
                >
                    {formattedNumber}
                </span>

                {/* Top-left: Category badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 backdrop-blur-md">
                        <RiFlashlightFill className="size-2.5 text-primary" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                            {isSpotlight ? "Most Booked" : "Popular"}
                        </span>
                    </span>
                </div>

                {/* Top-right: Same Day live badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 backdrop-blur-md">
                    <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white">
                        Same Day
                    </span>
                </div>

                {/* Bottom: Title over image (spotlight only) */}
                {isSpotlight && (
                    <div className="absolute inset-x-0 bottom-0 p-6">
                        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                            Premium Service
                        </p>
                        <h3 className="text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-3xl">
                            {name}
                        </h3>
                    </div>
                )}

                {/* Corner crop marks */}
                <div className="pointer-events-none absolute left-4 top-4 size-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute left-0 top-0 h-px w-4 bg-primary" />
                    <div className="absolute left-0 top-0 h-4 w-px bg-primary" />
                </div>
            </div>

            {/* ============================================
                CONTENT SECTION
            ============================================ */}
            <div
                className={cn(
                    "relative flex flex-1 flex-col p-5",
                    isSpotlight && "md:p-7"
                )}
            >
                {/* Standard variant: title here */}
                {!isSpotlight && (
                    <div className="mb-3">
                        <h3 className="text-base font-bold leading-tight tracking-tight text-foreground sm:text-lg">
                            {name}
                        </h3>
                        {description && (
                            <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* Spotlight: description here */}
                {isSpotlight && description && (
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                )}

                {/* Features list */}
                {displayFeatures.length > 0 && (
                    <ul className="space-y-2.5">
                        {displayFeatures.map((feature, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-2.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground/80"
                            >
                                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                                    <RiCheckLine className="size-2.5 text-primary" />
                                </span>
                                <span className="line-clamp-1 font-medium">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Spacer */}
                <div className="flex-1 py-4" />

                {/* ============================================
                    META ROW — mini trust signals
                ============================================ */}
                <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground">
                        <RiTimeFill className="size-3 text-primary" />
                        5–15 min
                    </span>
                    <span className="text-border">·</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground">
                        <RiShieldCheckFill className="size-3 text-primary" />
                        Warranty
                    </span>
                    <span className="text-border">·</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground">
                        <RiFlashlightFill className="size-3 text-primary" />
                        Onsite
                    </span>
                </div>

                {/* ============================================
                    CTA ROW
                ============================================ */}
                <div className="relative flex items-center justify-between border-t border-border pt-4">
                    <Link
                        href={`/services/${slug}`}
                        className="group/link inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary transition-colors hover:text-primary/80"
                    >
                        View Details
                        <RiArrowRightLine className="size-3 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                    </Link>

                    <Link
                        href={`/services/${slug}`}
                        aria-label={`View ${name}`}
                        className={cn(
                            "relative flex items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/40",
                            isSpotlight ? "size-10" : "size-9"
                        )}
                    >
                        <RiArrowRightUpLine
                            className={cn(
                                "transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                                isSpotlight ? "size-4" : "size-3.5"
                            )}
                        />
                    </Link>
                </div>
            </div>

            {/* ============================================
                DECORATIVE ELEMENTS
            ============================================ */}
            <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />

            <div className="pointer-events-none absolute right-0 top-0 size-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-px w-6 bg-primary/60" />
                <div className="absolute right-0 top-0 h-6 w-px bg-primary/60" />
            </div>
        </article>
    );
}
"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import {
    RiStarFill,
    RiShieldCheckFill,
    RiArrowLeftLine,
    RiArrowRightLine,
    RiVerifiedBadgeFill,
    RiTimeFill,
    RiUserStarFill,
} from "@remixicon/react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { Review, ReviewsProps } from "@/types/review";
import { generatePlaceholderReviews } from "@/data/review";
import ReviewCard from "@/components/shared/Card/ReviewCard";

/* ============ Placeholder reviews ============ */


export default function Reviews({
    reviews = generatePlaceholderReviews(),
    subtitle = "Real experiences from real customers across Dubai — verified, documented, and 100% authentic.",
    autoplay = true,
    autoplayInterval = 4000,
}: ReviewsProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(4);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
        dragFree: false,
        slidesToScroll: 1,
    });

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    );
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        const updateSlidesPerView = () => {
            const width = window.innerWidth;
            if (width >= 1280) setSlidesPerView(4);
            else if (width >= 1024) setSlidesPerView(3);
            else if (width >= 768) setSlidesPerView(2);
            else setSlidesPerView(1);
        };

        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (!emblaApi || !autoplay) return;
        const interval = setInterval(() => emblaApi.scrollNext(), autoplayInterval);
        return () => clearInterval(interval);
    }, [emblaApi, autoplay, autoplayInterval]);

    /* ============ Stats ============ */
    const averageRating =
        reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    const totalReviews = reviews.length;

    const ratingCounts = useMemo(
        () =>
            reviews.reduce(
                (acc, review) => {
                    acc[review.rating] = (acc[review.rating] || 0) + 1;
                    return acc;
                },
                {} as Record<number, number>
            ),
        [reviews]
    );

    const totalSlides = Math.ceil(reviews.length / slidesPerView);

    return (
        <section className="relative w-full overflow-hidden bg-background py-10">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Primary glow left */}
                <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[130px]" />

                {/* Primary glow right */}
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

                {/* Vertical hairlines */}
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
                                Testimonials
                            </span>
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-border to-transparent" />
                    </div> */}

                    {/* Headline + Nav */}
                    <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[3.25rem]">
                                Trusted by{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-primary">
                                        Dubai Drivers
                                    </span>
                                    <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-primary/15" />
                                </span>
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                {subtitle}
                            </p>
                        </div>

                        {/* Nav controls */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={scrollPrev}
                                aria-label="Previous review"
                                className={cn(
                                    "flex size-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all duration-200",
                                    prevBtnEnabled
                                        ? "hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-md hover:shadow-primary/10"
                                        : "cursor-not-allowed opacity-40"
                                )}
                                disabled={!prevBtnEnabled}
                            >
                                <RiArrowLeftLine className="size-4" />
                            </button>
                            <button
                                onClick={scrollNext}
                                aria-label="Next review"
                                className={cn(
                                    "flex size-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all duration-200",
                                    nextBtnEnabled
                                        ? "hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-md hover:shadow-primary/10"
                                        : "cursor-not-allowed opacity-40"
                                )}
                                disabled={!nextBtnEnabled}
                            >
                                <RiArrowRightLine className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    RATING STATS BAR
                ============================================================ */}
                <div className="relative mb-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                    <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                        {/* Big rating */}
                        <div className="flex items-center gap-4 p-5 sm:p-6">
                            <div>
                                <div className="text-4xl font-black leading-none tracking-tight text-foreground sm:text-5xl">
                                    {averageRating.toFixed(1)}
                                </div>
                                <div className="mt-1.5 flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <RiStarFill
                                            key={i}
                                            className={cn(
                                                "size-3.5",
                                                i < Math.round(averageRating)
                                                    ? "text-primary"
                                                    : "text-muted-foreground/20"
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="border-l border-border pl-4">
                                <p className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                                    Average
                                </p>
                                <p className="mt-1 text-2xl font-black text-foreground">
                                    {totalReviews}
                                </p>
                                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                    Reviews
                                </p>
                            </div>
                        </div>

                        {/* Rating distribution */}
                        <div className="flex flex-col justify-center gap-2 p-5 sm:p-6 lg:col-span-2">
                            {[5, 4, 3].map((rating) => {
                                const pct =
                                    ((ratingCounts[rating] || 0) / totalReviews) *
                                    100;
                                return (
                                    <div
                                        key={rating}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex w-3 items-center gap-0.5 font-mono text-[11px] font-black text-foreground">
                                            {rating}
                                        </span>
                                        <RiStarFill className="size-2.5 text-primary/70" />
                                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary transition-all duration-700"
                                                style={{ width: `${pct}%` }}
                                            />
                                        </div>
                                        <span className="w-9 text-right font-mono text-[10px] font-black text-muted-foreground">
                                            {Math.round(pct)}%
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Trust badge */}
                        <div className="flex items-center gap-4 p-5 sm:p-6">
                            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                <RiVerifiedBadgeFill className="size-6 text-primary" />
                            </span>
                            <div>
                                <p className="text-sm font-bold tracking-tight text-foreground">
                                    100% Verified
                                </p>
                                <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                                    All reviews from real customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    FULL-WIDTH CAROUSEL (4 cards visible by default)
                ============================================================ */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="min-w-0 shrink-0 grow-0 basis-full px-2 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                                >
                                    <ReviewCard
                                        review={review}
                                        index={index}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dot indicators */}
                    <div className="mt-8 flex justify-center gap-1.5">
                        {Array.from({ length: totalSlides }).map((_, index) => {
                            const isActive =
                                selectedIndex >= index * slidesPerView &&
                                selectedIndex < (index + 1) * slidesPerView;
                            return (
                                <button
                                    key={index}
                                    onClick={() =>
                                        emblaApi?.scrollTo(
                                            index * slidesPerView
                                        )
                                    }
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={cn(
                                        "h-1.5 rounded-full transition-all duration-300",
                                        isActive
                                            ? "w-8 bg-primary"
                                            : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    )}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* ============================================================
                    BOTTOM TRUST STRIP
                ============================================================ */}
                <div className="mt-12 lg:mt-14">
                    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                        <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                            <TrustItem
                                icon={RiShieldCheckFill}
                                title="Verified Reviews"
                                subtitle="100% authentic feedback"
                            />
                            <TrustItem
                                icon={RiTimeFill}
                                title="Updated Weekly"
                                subtitle="Fresh from real repairs"
                            />
                            <TrustItem
                                icon={RiUserStarFill}
                                title={`${totalReviews}+ Real Cases`}
                                subtitle="Documented experiences"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================================================
    SUB-COMPONENT: Trust Item
============================================================ */
function TrustItem({
    icon: Icon,
    title,
    subtitle,
}: {
    icon: React.ElementType;
    title: string;
    subtitle: string;
}) {
    return (
        <div className="group flex items-center gap-4 p-5 transition-colors hover:bg-primary/[0.03] sm:p-6">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <Icon className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
            </div>
            <div className="min-w-0">
                <p className="text-sm font-bold tracking-tight text-foreground">
                    {title}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
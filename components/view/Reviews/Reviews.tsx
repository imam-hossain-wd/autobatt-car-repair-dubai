// components/sections/Reviews.tsx
"use client";

import { useMemo } from "react";
import {
  RiStarFill,
  RiVerifiedBadgeFill,
  RiMapPinFill,
  RiUserStarFill,
  RiShieldCheckFill,
  RiArrowRightUpLine,
} from "@remixicon/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Review, ReviewsProps } from "@/types/review";
import ReviewCard from "@/components/shared/Card/ReviewCard";
import { generatePlaceholderReviews } from "@/data/review";

export default function Reviews({
  reviews = generatePlaceholderReviews(),
  subtitle = "Real experiences from real customers across Dubai — verified, documented, and 100% authentic.",
  featuredIndex = 0,
}: ReviewsProps) {
  /* ---- Aggregate stats ---- */
  const stats = useMemo(() => {
    const total = reviews.length;
    const avg = reviews.reduce((a, r) => a + r.rating, 0) / total;
    const fiveStar = reviews.filter((r) => r.rating === 5).length;
    const areas = new Set(reviews.map((r) => r.area)).size;
    return { total, avg, fiveStar, areas };
  }, [reviews]);

  const featured = reviews[featuredIndex] ?? reviews[0];
  const rest = reviews.filter((_, i) => i !== featuredIndex);

  return (
    <section className="relative w-full overflow-hidden bg-[#faf9f7] py-10">
      {/* ============================================================
          BACKGROUND DECOR
      ============================================================ */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[120px]" />
        <div
          className="absolute inset-0 text-neutral-900 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 55% at 50% 30%, black 40%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 55% at 50% 30%, black 40%, transparent 90%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ============================================================
            HEADER
        ============================================================ */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-900/10 bg-white px-3 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                <RiUserStarFill className="size-3 text-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-700">
                  Customer Voices
                </span>
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-neutral-900/15 to-transparent" />
            </div>

            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.02] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              What drivers say{" "}
              <span className="relative inline-block italic">
                <span className="relative z-10">after the fix</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-[0.22em] bg-primary/25" />
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-600">
              {subtitle}
            </p>
          </div>

          {/* Right: rating summary */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-3 gap-4 border-t border-neutral-900/10 pt-6">
              <StatNumeral value={stats.avg.toFixed(1)} label="Avg Rating" accent />
              <StatNumeral value={String(stats.total)} label="Reviews" />
              <StatNumeral value={`${stats.areas}+`} label="Areas" />
            </div>
          </div>
        </div>

        {/* ============================================================
            MASONRY VOICES WALL
            — featured portrait + mixed plaque cards
        ============================================================ */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {/* Portrait (featured) — spans 4 cols, tall */}
          <div className="sm:col-span-2 lg:col-span-4 lg:row-span-2">
            <ReviewCard review={featured} variant="portrait" />
          </div>

          {/* Plaques — filled into remaining 8 cols, respecting masonry flow */}
          {rest.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className={cn(
                "lg:col-span-4",
                // Every 3rd card gets extra prominence
                i % 5 === 1 && "lg:col-span-4",
                // Some cards get more vertical rhythm
                i % 4 === 2 && "lg:col-span-4"
              )}
            >
              <ReviewCard review={review} variant="plaque" />
            </div>
          ))}
        </div>

        {/* ============================================================
            CREDENTIAL BAND — full-width trust strip
        ============================================================ */}
        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-neutral-900/10 bg-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.2)]">
          {/* Grid pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative grid gap-6 p-7 sm:p-9 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10">
            {/* Left: Big number block */}
            <div className="flex items-center gap-5">
              <div className="flex flex-col">
                <span className="font-serif text-5xl font-medium leading-none tracking-tight text-neutral-900 sm:text-6xl">
                  {stats.avg.toFixed(1)}
                </span>
                <div className="mt-2 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <RiStarFill
                      key={i}
                      className={cn(
                        "size-3.5",
                        i < Math.round(stats.avg)
                          ? "text-primary"
                          : "text-neutral-200"
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="h-16 w-px bg-neutral-900/10" />

              <div className="flex flex-col gap-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                  From
                </p>
                <p className="font-serif text-2xl font-medium leading-none text-neutral-900">
                  {stats.total}+
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                  Verified Drivers
                </p>
              </div>
            </div>

            {/* Right: three trust points inline */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-neutral-900/10">
              <TrustPoint
                icon={RiVerifiedBadgeFill}
                label="100% Verified"
                sub="Authenticated reviews"
              />
              <TrustPoint
                icon={RiShieldCheckFill}
                label={`${stats.fiveStar} Perfect Scores`}
                sub="5-star experiences"
              />
              <TrustPoint
                icon={RiMapPinFill}
                label={`${stats.areas}+ Districts`}
                sub="Across Dubai"
              />
            </div>
          </div>

          {/* Bottom CTA bar */}
          <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-neutral-900/10 bg-neutral-50/60 px-7 py-4 sm:px-9">
            <p className="text-[12px] font-semibold text-neutral-700">
              Want to share your experience? We'd love to hear it.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary"
            >
              Leave a Review
              <RiArrowRightUpLine className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SUB-COMPONENTS
============================================================ */

function StatNumeral({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span
        className={cn(
          "font-serif text-2xl font-medium leading-none tracking-tight sm:text-3xl",
          accent ? "text-primary" : "text-neutral-900"
        )}
      >
        {value}
      </span>
      <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
        {label}
      </span>
    </div>
  );
}

function TrustPoint({
  icon: Icon,
  label,
  sub,
}: {
  icon: React.ElementType;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-3 px-0 sm:px-5 sm:first:pl-0 sm:last:pr-0">
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-3.5 text-primary" />
      </span>
      <div className="min-w-0">
        <p className="text-[13px] font-bold tracking-tight text-neutral-900">
          {label}
        </p>
        <p className="mt-0.5 text-[11px] text-neutral-500">{sub}</p>
      </div>
    </div>
  );
}
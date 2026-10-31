// components/shared/Card/ReviewCard.tsx
"use client";

import { useMemo } from "react";
import {
  RiDoubleQuotesL,
  RiMapPinFill,
  RiStarFill,
  RiVerifiedBadgeFill,
  RiToolsFill,
  RiCarFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import type { Review } from "@/types/review";

type Variant = "portrait" | "plaque" | "strip";

interface ReviewCardProps {
  review: Review;
  variant?: Variant;
  className?: string;
}

export default function ReviewCard({
  review,
  variant = "plaque",
  className,
}: ReviewCardProps) {
  const initial = review.name.charAt(0).toUpperCase();
  // Derive a subtle accent hue from the name for visual variety
  const hue = useMemo(() => {
    let h = 0;
    for (let i = 0; i < review.name.length; i++) h += review.name.charCodeAt(i);
    return h % 360;
  }, [review.name]);

  if (variant === "portrait") return <PortraitCard review={review} initial={initial} hue={hue} className={className} />;
  if (variant === "strip") return <StripCard review={review} initial={initial} hue={hue} className={className} />;
  return <PlaqueCard review={review} initial={initial} hue={hue} className={className} />;
}

/* ============================================================
   PORTRAIT — the large featured narrative card
============================================================ */
function PortraitCard({
  review,
  initial,
  hue,
  className,
}: {
  review: Review;
  initial: string;
  hue: number;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-neutral-900/10 bg-white p-7 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.25)] sm:p-9",
        "transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-40px_rgba(0,0,0,0.3)]",
        className
      )}
    >
      {/* Top accent bar */}
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

      {/* Oversized faded quote */}
      <RiDoubleQuotesL
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-8 size-40 select-none text-primary/[0.06] transition-colors duration-500 group-hover:text-primary/[0.10]"
      />

      {/* Top row: initial chip + rating */}
      <div className="relative flex items-start justify-between">
        <div
          className="relative flex size-16 shrink-0 items-center justify-center rounded-2xl shadow-inner"
          style={{
            background: `linear-gradient(135deg, hsl(${hue} 70% 96%), hsl(${hue} 60% 90%))`,
            color: `hsl(${hue} 55% 40%)`,
          }}
        >
          <span className="text-2xl font-black tracking-tight">{initial}</span>
          <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full border-[3px] border-white bg-primary shadow">
            <RiVerifiedBadgeFill className="size-3 text-white" />
          </span>
        </div>

        <div className="flex flex-col items-end gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <RiStarFill
                key={i}
                className={cn(
                  "size-3.5",
                  i < review.rating ? "text-primary" : "text-neutral-200"
                )}
              />
            ))}
          </div>
          <span className="font-serif text-[11px] italic text-neutral-500">
            {review.date ?? "Verified customer"}
          </span>
        </div>
      </div>

      {/* Pull quote */}
      <blockquote className="relative mt-6 flex-1">
        <p className="font-serif text-xl leading-[1.45] tracking-tight text-neutral-900 sm:text-2xl sm:leading-[1.4]">
          <span className="text-primary">&ldquo;</span>
          {review.text}
          <span className="text-primary">&rdquo;</span>
        </p>
      </blockquote>

      {/* Footer */}
      <footer className="relative mt-7 border-t border-neutral-900/10 pt-5">
        <p className="font-sans text-sm font-bold tracking-tight text-neutral-900">
          {review.name}
        </p>
        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-neutral-500">
          <RiMapPinFill className="size-3 text-primary" />
          {review.area}
        </p>

        {(review.service || review.vehicle) && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {review.service && (
              <span className="inline-flex items-center gap-1 rounded-full border border-neutral-900/10 bg-neutral-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-600">
                <RiToolsFill className="size-2.5 text-primary" />
                {review.service}
              </span>
            )}
            {review.vehicle && (
              <span className="inline-flex items-center gap-1 rounded-full border border-neutral-900/10 bg-neutral-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-600">
                <RiCarFill className="size-2.5 text-primary" />
                {review.vehicle}
              </span>
            )}
          </div>
        )}
      </footer>
    </article>
  );
}

/* ============================================================
   PLAQUE — standard review card
============================================================ */
function PlaqueCard({
  review,
  initial,
  hue,
  className,
}: {
  review: Review;
  initial: string;
  hue: number;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-neutral-900/10 bg-white p-5 shadow-[0_15px_30px_-25px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-900/15 hover:shadow-[0_25px_45px_-25px_rgba(0,0,0,0.25)]",
        className
      )}
    >
      {/* Top strip: avatar + name + rating */}
      <div className="flex items-center gap-3">
        <div
          className="relative flex size-10 shrink-0 items-center justify-center rounded-xl"
          style={{
            background: `linear-gradient(135deg, hsl(${hue} 70% 96%), hsl(${hue} 60% 90%))`,
            color: `hsl(${hue} 55% 40%)`,
          }}
        >
          <span className="text-sm font-black">{initial}</span>
          <span className="absolute -bottom-0.5 -right-0.5 flex size-3.5 items-center justify-center rounded-full border-2 border-white bg-primary">
            <RiVerifiedBadgeFill className="size-2 text-white" />
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-bold tracking-tight text-neutral-900">
            {review.name}
          </p>
          <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] text-neutral-500">
            <RiMapPinFill className="size-2.5 text-primary" />
            <span className="truncate">{review.area}</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <RiStarFill
              key={i}
              className={cn(
                "size-2.5",
                i < review.rating ? "text-primary" : "text-neutral-200"
              )}
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-neutral-700">
        {review.text}
      </p>

      {/* Footer meta */}
      {(review.service || review.date) && (
        <div className="mt-4 flex items-center justify-between border-t border-neutral-900/[0.06] pt-3">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500">
            {review.service && (
              <>
                <RiToolsFill className="size-2.5 text-primary" />
                {review.service}
              </>
            )}
          </span>
          {review.date && (
            <span className="font-serif text-[10px] italic text-neutral-400">
              {review.date}
            </span>
          )}
        </div>
      )}
    </article>
  );
}

/* ============================================================
   STRIP — minimal horizontal card (used in compact rows)
============================================================ */
function StripCard({
  review,
  initial,
  hue,
  className,
}: {
  review: Review;
  initial: string;
  hue: number;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex items-start gap-3 rounded-xl border border-neutral-900/10 bg-white p-4 transition-colors hover:border-neutral-900/20",
        className
      )}
    >
      <div
        className="flex size-9 shrink-0 items-center justify-center rounded-lg"
        style={{
          background: `linear-gradient(135deg, hsl(${hue} 70% 96%), hsl(${hue} 60% 90%))`,
          color: `hsl(${hue} 55% 40%)`,
        }}
      >
        <span className="text-xs font-black">{initial}</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-[12px] font-bold text-neutral-900">
            {review.name}
          </p>
          <div className="flex shrink-0 items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <RiStarFill
                key={i}
                className={cn(
                  "size-2",
                  i < review.rating ? "text-primary" : "text-neutral-200"
                )}
              />
            ))}
          </div>
        </div>
        <p className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-neutral-600">
          {review.text}
        </p>
      </div>
    </article>
  );
}
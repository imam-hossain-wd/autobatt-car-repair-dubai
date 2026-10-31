// components/sections/FAQ.tsx
"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import {
  RiSearchLine,
  RiCloseLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiQuestionLine,
  RiMapPinFill,
  RiPriceTag3Fill,
  RiShieldCheckFill,
  RiFlashlightFill,
  RiCustomerServiceFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiStarFill,
  RiVerifiedBadgeFill,
  RiTimeFill,
  RiCheckLine,
  RiBookOpenLine,
  RiLightbulbLine,
} from "@remixicon/react";
import { faqData } from "@/data/faq";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";

/* ============ Category mapping ============ */
const CATEGORIES = [
  { id: "all", label: "All Questions", icon: RiQuestionLine },
  { id: "dispatch", label: "Dispatch", icon: RiMapPinFill, range: [1, 5] },
  { id: "battery", label: "Battery & Electrical", icon: RiFlashlightFill, range: [6, 10] },
  { id: "mechanical", label: "Mechanical", icon: RiShieldCheckFill, range: [11, 15] },
  { id: "pricing", label: "Pricing & Warranty", icon: RiPriceTag3Fill, range: [16, 20] },
] as const;

/* ============ JSON-LD Schema ============ */
const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

export default function FAQ() {
  const {
    city,
    responseTime,
    serviceAreas,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
  } = SiteConfig;

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string>("faq-1");
  const searchInputRef = useRef<HTMLInputElement>(null);

  /* Filter FAQs by category + search */
  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    if (activeCategory !== "all") {
      const category = CATEGORIES.find((c) => c.id === activeCategory);
      if (category && "range" in category) {
        const [min, max] = category.range;
        filtered = filtered.filter((faq) => {
          const num = parseInt(faq.id.replace("faq-", ""), 10);
          return num >= min && num <= max;
        });
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const selectedFAQ = useMemo(
    () => faqData.find((f) => f.id === selectedId) ?? filteredFAQs[0] ?? faqData[0],
    [selectedId, filteredFAQs]
  );

  // Reset selection if it's filtered out
  useEffect(() => {
    if (filteredFAQs.length && !filteredFAQs.find((f) => f.id === selectedId)) {
      setSelectedId(filteredFAQs[0].id);
    }
  }, [filteredFAQs, selectedId]);

  const activeCategoryLabel =
    CATEGORIES.find((c) => c.id === activeCategory)?.label ?? "All Questions";

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
                <RiBookOpenLine className="size-3 text-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-700">
                  Knowledge Base
                </span>
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-neutral-900/15 to-transparent" />
            </div>

            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.02] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Everything you <br className="hidden sm:block" />
              <span className="relative inline-block italic">
                <span className="relative z-10">need to know</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-[0.22em] bg-primary/25" />
              </span>
              .
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-600">
              Answers about mobile mechanics, dispatch times, and pricing across{" "}
              <span className="font-semibold text-neutral-900">{city}</span>.
              Can't find what you need?{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Talk to us
              </Link>
              .
            </p>
          </div>

          {/* Right: quick stats */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-3 gap-4 border-t border-neutral-900/10 pt-6">
              <MiniStat value={`${faqData.length}`} label="Answers" />
              <MiniStat value={`${serviceAreas.length}+`} label="Areas" />
              <MiniStat value="24/7" label="Support" accent />
            </div>
          </div>
        </div>

        {/* ============================================================
            SEARCH + CATEGORY TABS (command bar)
        ============================================================ */}
        <div className="mt-12">
          {/* Search */}
          <div className="group relative">
            <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
              <RiSearchLine className="size-5 text-neutral-400 transition-colors group-focus-within:text-primary" />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions, keywords, or issues…"
              className="h-14 w-full rounded-2xl border border-neutral-900/10 bg-white pl-14 pr-14 text-[15px] font-medium text-neutral-900 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.15)] outline-none transition-all placeholder:text-neutral-400 focus:border-primary/50 focus:shadow-[0_8px_24px_-16px_rgba(120,80,255,0.3)]"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  searchInputRef.current?.focus();
                }}
                className="absolute right-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
                aria-label="Clear search"
              >
                <RiCloseLine className="size-4" />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-200",
                    active
                      ? "border-primary bg-primary text-white shadow-[0_4px_16px_-6px_rgba(120,80,255,0.5)]"
                      : "border-neutral-900/10 bg-white text-neutral-600 hover:border-neutral-900/25 hover:text-neutral-900"
                  )}
                >
                  <Icon
                    className={cn(
                      "size-3.5",
                      active ? "text-white" : "text-primary"
                    )}
                  />
                  {cat.label}
                </button>
              );
            })}

            <span className="ml-auto hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400 sm:block">
              {filteredFAQs.length}{" "}
              {filteredFAQs.length === 1 ? "result" : "results"}
            </span>
          </div>
        </div>

        {/* ============================================================
            MAIN GRID — Index (left) + Answer (right)
        ============================================================ */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* ---------- LEFT: INDEX LIST (5 cols) ---------- */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-neutral-900/10 bg-white shadow-[0_8px_24px_-16px_rgba(0,0,0,0.12)]">
              <div className="flex items-center justify-between border-b border-neutral-900/10 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <RiQuestionLine className="size-3.5 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">
                    {activeCategoryLabel}
                  </span>
                </div>
                <span className="font-mono text-[10px] tabular-nums text-neutral-400">
                  {String(filteredFAQs.length).padStart(2, "0")}
                </span>
              </div>

              {filteredFAQs.length > 0 ? (
                <ul className="max-h-[640px] overflow-y-auto">
                  {filteredFAQs.map((faq, i) => {
                    const active = faq.id === selectedFAQ.id;
                    const num = faq.id.replace("faq-", "").padStart(2, "0");
                    return (
                      <li key={faq.id}>
                        <button
                          onClick={() => setSelectedId(faq.id)}
                          className={cn(
                            "group relative flex w-full items-start gap-3 border-b border-neutral-900/[0.06] px-5 py-4 text-left transition-colors last:border-0",
                            active
                              ? "bg-primary/[0.04]"
                              : "hover:bg-neutral-50"
                          )}
                        >
                          {/* Active vertical bar */}
                          <span
                            className={cn(
                              "absolute inset-y-0 left-0 w-[3px] transition-all",
                              active ? "bg-primary" : "bg-transparent"
                            )}
                          />

                          {/* Number */}
                          <span
                            className={cn(
                              "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md font-mono text-[10px] font-black transition-all",
                              active
                                ? "bg-primary text-white shadow-sm shadow-primary/40"
                                : "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200"
                            )}
                          >
                            {num}
                          </span>

                          {/* Question */}
                          <span
                            className={cn(
                              "flex-1 pr-2 text-[13.5px] font-semibold leading-snug transition-colors",
                              active
                                ? "text-neutral-900"
                                : "text-neutral-700 group-hover:text-neutral-900"
                            )}
                          >
                            {faq.question}
                          </span>

                          {/* Chevron */}
                          <span
                            className={cn(
                              "mt-0.5 shrink-0 transition-all",
                              active
                                ? "translate-x-0 text-primary"
                                : "-translate-x-1 text-neutral-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            )}
                          >
                            <RiArrowRightLine className="size-4" />
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                    <RiSearchLine className="size-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-medium text-neutral-900">
                    No matches found
                  </h3>
                  <p className="mt-1.5 max-w-xs text-sm text-neutral-500">
                    Try a different keyword or reset filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                    className="mt-4 inline-flex h-9 items-center gap-1.5 rounded-lg bg-neutral-900 px-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-neutral-800"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ---------- RIGHT: READING PANE (7 cols) ---------- */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-8">
              {selectedFAQ ? (
                <article className="relative overflow-hidden rounded-2xl border border-neutral-900/10 bg-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.15)]">
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                  <div className="p-6 sm:p-8">
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1">
                        <RiLightbulbLine className="size-3 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                          Answer
                        </span>
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                        Q{selectedFAQ.id.replace("faq-", "").padStart(2, "0")}
                      </span>
                    </div>

                    {/* Question as serif headline */}
                    <h3 className="mt-5 font-serif text-2xl font-medium leading-[1.2] tracking-tight text-neutral-900 sm:text-[28px]">
                      {selectedFAQ.question}
                    </h3>

                    {/* Thin divider */}
                    <div className="mt-5 flex items-center gap-3">
                      <span className="h-px w-8 bg-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                        Answer
                      </span>
                    </div>

                    {/* Answer */}
                    <p className="mt-4 text-[15px] leading-[1.75] text-neutral-700">
                      {selectedFAQ.answer}
                    </p>

                    {/* CTA row */}
                    <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-neutral-900/10 pt-6">
                      <Link
                        href={numberCallLink}
                        className="group inline-flex h-11 items-center gap-2 rounded-xl bg-neutral-900 px-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-neutral-800"
                      >
                        <RiPhoneFill className="size-3.5" />
                        Call Now
                      </Link>
                      <Link
                        href={whatsappCallLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex h-11 items-center gap-2 rounded-xl border border-emerald-600/25 bg-emerald-50 px-4 text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-700 transition-all hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                      >
                        <RiWhatsappFill className="size-3.5" />
                        WhatsApp
                      </Link>
                      <span className="ml-auto hidden text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 sm:block">
                        Avg. reply · 60s
                      </span>
                    </div>
                  </div>
                </article>
              ) : (
                <div className="flex h-full min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-neutral-900/15 bg-white/50">
                  <p className="text-sm text-neutral-500">
                    Select a question to read the answer.
                  </p>
                </div>
              )}

              {/* Support strip under answer */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-neutral-900/10 bg-white px-5 py-3.5">
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-neutral-700">
                  <RiCustomerServiceFill className="size-3.5 text-primary" />
                  Still stuck? Our team replies in under a minute.
                </span>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary"
                >
                  Contact
                  <RiArrowRightUpLine className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>   
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />
    </section>
  );
}

/* ============================================================
   SUB-COMPONENTS
============================================================ */

function MiniStat({
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
// app/(marketing)/about/page.tsx

import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiShieldCheckFill,
  RiTimeFill,
  RiUserStarFill,
  RiMapPinFill,
  RiCheckLine,
  RiBatteryChargeFill,
  RiCustomerServiceFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiStarFill,
  RiVerifiedBadgeFill,
  RiToolsFill,
  RiAwardFill,
  RiHeartFill,
  RiDoubleQuotesL,
  RiFocus3Fill,
  RiArrowDownLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { aboutUs } from "@/data/businessInfo";
import { heroBanner } from "@/config/imageConfig";


/* ============ Stats ============ */
const STATS = [
  { label: "Response time", value: "5–30", unit: "min", icon: RiTimeFill },
  { label: "Happy drivers", value: "500", unit: "+", icon: RiUserStarFill },
  { label: "Service areas", value: "16", unit: "+", icon: RiMapPinFill },
  { label: "Guaranteed work", value: "100", unit: "%", icon: RiShieldCheckFill },
];

/* ============ Core Values ============ */
const CORE_VALUES = [
  {
    icon: RiFocus3Fill,
    title: "Customer First",
    description:
      "Every decision begins with the driver. Transparent pricing, honest diagnostics, and absolutely no surprises at the door.",
    tagline: "On you",
  },
  {
    icon: RiAwardFill,
    title: "Certified Excellence",
    description:
      "Multi-brand ASE-trained technicians, dealer-grade diagnostic equipment, and factory-standard procedures on every job.",
    tagline: "On the tools",
  },
  {
    icon: RiShieldCheckFill,
    title: "Guaranteed Work",
    description:
      "Every repair backed by our workmanship warranty. If it isn't right, we return — free of charge.",
    tagline: "On the outcome",
  },
  {
    icon: RiHeartFill,
    title: "Genuine Care",
    description:
      "We treat every vehicle like our own — from a 20-year-old sedan to a brand-new luxury SUV, all equal at our bench.",
    tagline: "On the car",
  },
];

/* ============ Milestones ============ */
const MILESTONES = [
  {
    year: "2014",
    title: "The first van",
    description:
      "Started in Jebel Ali with one mobile unit, a single toolbox, and a stubborn conviction: nobody should wait hours for a tow truck.",
  },
  {
    year: "2018",
    title: "City-wide coverage",
    description:
      "Grew to ten-plus Dubai districts with a full fleet of rescue vans and the first round-the-clock dispatch desk.",
  },
  {
    year: "2022",
    title: "500 drivers, one story",
    description:
      "Crossed five hundred verified reviews — a consistent 5.0 across every neighbourhood we serve.",
  },
  {
    year: "2024",
    title: "Always available",
    description:
      "Sixteen-plus areas, twenty-four hours, seven days a week. Every dispatch carries a certified mechanic.",
  },
];

/* ============ Trust Points ============ */
const TRUST_POINTS = [
  { icon: RiToolsFill, title: "ASE Certified", subtitle: "Multi-brand" },
  { icon: RiBatteryChargeFill, title: "OEM Parts", subtitle: "Genuine only" },
  { icon: RiTimeFill, title: "24/7 Dispatch", subtitle: "Round-the-clock" },
  { icon: RiShieldCheckFill, title: "Warranty Backed", subtitle: "12–24 months" },
];

export default function AboutPage() {
  const { foundedYear, city, displayNumber, numberCallLink, whatsappCallLink } =
    SiteConfig;

  return (
    <main className="relative w-full overflow-hidden bg-[#faf9f7] text-neutral-900">
      {/* ============================================================
          CHAPTER 01 — HERO / TITLE PAGE
      ============================================================ */}
      <section className="relative w-full border-b border-neutral-900/10">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[120px]" />
          <div
            className="absolute inset-0 text-neutral-900 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 90%)",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
          {/* Chapter mark */}
          <div className="mb-12 flex items-center gap-4">
            <span className="flex size-10 items-center justify-center rounded-full border border-neutral-900/15 bg-white font-serif text-sm italic text-primary shadow-sm">
              01
            </span>
            <div className="h-px w-16 bg-neutral-900/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
              About the Studio
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            {/* Left: Big headline */}
            <div className="lg:col-span-8">
              <h1 className="font-serif text-[2.75rem] font-medium leading-[0.98] tracking-tight text-neutral-900 sm:text-6xl lg:text-[5.25rem]">
                A decade of <br className="hidden sm:block" />
                <span className="relative inline-block italic">
                  <span className="relative z-10">arriving first.</span>
                  <span className="absolute inset-x-0 bottom-2 z-0 h-[0.22em] bg-primary/25" />
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-neutral-600 sm:text-base">
                Since {foundedYear}, {SiteConfig.brandName} has grown from a
                single van in Jebel Ali into {city}'s most trusted mobile
                repair network — because the best workshop is the one that
                comes to you.
              </p>

              {/* Inline proof row */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-neutral-900/10 py-4">
                {[
                  { value: "500+", label: "drivers served" },
                  { value: "16+", label: "Dubai districts" },
                  { value: "24/7", label: "dispatch" },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline gap-1.5">
                    <span className="font-serif text-xl font-medium leading-none text-neutral-900">
                      {item.value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={numberCallLink}
                  className="group inline-flex h-12 items-center gap-2 rounded-xl bg-neutral-900 px-5 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-neutral-800"
                >
                  <RiPhoneFill className="size-3.5" />
                  {displayNumber}
                  <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={whatsappCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center gap-2 rounded-xl border border-emerald-600/25 bg-emerald-50 px-5 text-[12px] font-bold uppercase tracking-[0.12em] text-emerald-700 transition-colors hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                >
                  <RiWhatsappFill className="size-3.5" />
                  WhatsApp Us
                </Link>
              </div>
            </div>

            {/* Right: Stats column (editorial numerals) */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="flex flex-col">
                      <Icon className="size-4 text-primary" />
                      <p className="mt-3 font-serif text-3xl font-medium leading-none text-neutral-900">
                        {stat.value}
                        <span className="ml-0.5 text-base text-neutral-400">
                          {stat.unit}
                        </span>
                      </p>
                      <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CHAPTER 02 — THE STORY / MANIFESTO + IMAGE
      ============================================================ */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Chapter mark */}
          <div className="mb-12 flex items-center gap-4">
            <span className="flex size-10 items-center justify-center rounded-full border border-neutral-900/15 bg-white font-serif text-sm italic text-primary shadow-sm">
              02
            </span>
            <div className="h-px w-16 bg-neutral-900/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
              Our Story
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Image composition */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="relative">
                {/* Offset accent frame */}
                <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-3xl border border-primary/30 sm:block" />

                {/* Main image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-neutral-100">
                  <Image
                    src={heroBanner?.hero}
                    alt={`Mobile car mechanic team in ${city}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Floating caption chip */}
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-black/50 px-4 py-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <RiVerifiedBadgeFill className="size-3.5 text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                        Certified team
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} className="size-3 text-primary" />
                      ))}
                      <span className="ml-1 text-[10px] font-bold text-white">
                        5.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating founded badge */}
                <div className="absolute -bottom-6 -left-3 rounded-2xl border border-neutral-900/10 bg-white p-4 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)] sm:-left-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
                      <RiShieldCheckFill className="size-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-neutral-500">
                        Trusted since
                      </p>
                      <p className="font-serif text-lg leading-none text-neutral-900">
                        {foundedYear}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Manifesto text */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <h2 className="font-serif text-3xl font-medium leading-[1.15] tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.75rem]">
                Built to end the{" "}
                <span className="italic text-primary">tow-truck era.</span>
              </h2>

              {/* Pull quote */}
              <div className="relative mt-8 max-w-2xl">
                <RiDoubleQuotesL
                  className="absolute -left-2 -top-3 size-7 text-primary/25"
                  aria-hidden
                />
                <p className="pl-6 font-serif text-base italic leading-relaxed text-neutral-700 sm:text-lg">
                  A fully equipped garage on wheels — dispatched to your
                  exact GPS location, wherever you are in {city}.
                </p>
              </div>

              <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-neutral-600">
                <p>{aboutUs.para1}</p>
                <p>{aboutUs.para2}</p>
              </div>

              {/* Feature list — editorial ticks */}
              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-2 border-t border-neutral-900/10 pt-6 sm:grid-cols-2">
                {[
                  "Certified multi-brand technicians",
                  "Dealer-grade diagnostic equipment",
                  "Transparent upfront pricing",
                  "24/7 emergency availability",
                ].map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-2.5 text-[13px] font-medium text-neutral-700"
                  >
                    <span className="mt-1 flex size-3.5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <RiCheckLine className="size-2.5 text-primary" />
                    </span>
                    {value}
                  </li>
                ))}
              </ul>

              {/* CTA row */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={numberCallLink}
                  className="group inline-flex h-11 items-center gap-2 rounded-xl bg-neutral-900 px-5 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-neutral-800"
                >
                  <RiPhoneFill className="size-3.5" />
                  Talk to a Mechanic
                  <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex h-11 items-center gap-2 rounded-xl border border-neutral-900/15 bg-white px-5 text-[12px] font-bold uppercase tracking-[0.12em] text-neutral-900 transition-colors hover:border-neutral-900/40"
                >
                  Browse Services
                  <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CHAPTER 03 — PRINCIPLES (editorial index, not cards)
      ============================================================ */}
      <section className="relative w-full border-t border-neutral-900/10 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Chapter mark */}
          <div className="mb-12 flex items-center gap-4">
            <span className="flex size-10 items-center justify-center rounded-full border border-neutral-900/15 bg-white font-serif text-sm italic text-primary shadow-sm">
              03
            </span>
            <div className="h-px w-16 bg-neutral-900/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
              Principles
            </span>
          </div>

          {/* Header */}
          <div className="grid gap-8 pb-12 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pb-16">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                What we <span className="italic text-primary">stand</span> on.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Every repair, every dispatch, every call — these four
                principles hold us to a standard most workshops quietly
                abandon.
              </p>
            </div>
          </div>

          {/* Editorial index — no cards, just numbered rows */}
          <div className="border-t border-neutral-900/10">
            {CORE_VALUES.map((value, i) => {
              const Icon = value.icon;
              const number = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={value.title}
                  className="group relative grid grid-cols-12 items-start gap-4 border-b border-neutral-900/10 py-8 transition-colors hover:bg-neutral-50/60 sm:gap-6 sm:py-10 lg:py-12"
                >
                  {/* Number */}
                  <div className="col-span-2 sm:col-span-1">
                    <span className="font-serif text-3xl font-medium italic leading-none text-primary/60 transition-colors group-hover:text-primary sm:text-4xl">
                      {number}
                    </span>
                  </div>

                  {/* Icon + title */}
                  <div className="col-span-10 flex items-start gap-4 sm:col-span-5 sm:items-center">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-neutral-900 transition-colors group-hover:bg-primary">
                      <Icon className="size-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-sans text-lg font-bold leading-tight tracking-tight text-neutral-900 sm:text-xl">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                        {value.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 sm:col-span-6">
                    <p className="text-[14px] leading-relaxed text-neutral-600 sm:text-[15px]">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          CHAPTER 04 — JOURNEY (illuminated timeline)
      ============================================================ */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Chapter mark */}
          <div className="mb-12 flex items-center gap-4">
            <span className="flex size-10 items-center justify-center rounded-full border border-neutral-900/15 bg-white font-serif text-sm italic text-primary shadow-sm">
              04
            </span>
            <div className="h-px w-16 bg-neutral-900/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
              The Journey
            </span>
          </div>

          <div className="grid gap-10 pb-12 lg:grid-cols-12 lg:items-end lg:gap-16 lg:pb-16">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-3xl font-medium leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                Ten years, <span className="italic text-primary">one promise.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] leading-relaxed text-neutral-600">
                A brief look at how a one-van operation became the city's
                round-the-clock mobile repair network.
              </p>
            </div>
          </div>

          {/* Timeline — editorial columns, no dots */}
          <div className="grid gap-0 border-t border-neutral-900/10 lg:grid-cols-4">
            {MILESTONES.map((milestone, i) => (
              <div
                key={milestone.year}
                className="relative border-b border-neutral-900/10 px-0 py-8 lg:border-b-0 lg:border-r lg:px-6 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                {/* Year — large serif italic */}
                <p className="font-serif text-4xl font-medium italic leading-none text-primary sm:text-5xl">
                  {milestone.year}
                </p>

                {/* Vertical hairline + title */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-neutral-900/25" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                    Milestone {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-3 font-sans text-lg font-bold leading-tight tracking-tight text-neutral-900">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-600">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CREDENTIALS STRIP — proof points as inline editorial row
      ============================================================ */}
      <section className="relative w-full border-y border-neutral-900/10 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 py-8 sm:grid-cols-4 sm:gap-6">
            {TRUST_POINTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-4 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold leading-tight text-neutral-900">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING — Full-bleed CTA as editorial pull-quote
      ============================================================ */}
      <section className="relative w-full bg-neutral-900 text-white">
        {/* Background texture */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />
          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 90%)",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            {/* Left: Closing statement */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 backdrop-blur-sm">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/90">
                  Available now · {city}
                </span>
              </div>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Wherever your car is, <br className="hidden sm:block" />
                <span className="italic text-primary">
                  we'll meet you there.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
                Same certified mechanics, dealership-level expertise, and
                24/7 availability — trusted by over five hundred drivers
                across sixteen Dubai districts.
              </p>

              {/* Trust row */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <RiStarFill className="size-3 text-primary" />
                  5.0 rated
                </span>
                <span className="hidden size-1 rounded-full bg-white/20 sm:inline-block" />
                <span>500+ drivers</span>
                <span className="hidden size-1 rounded-full bg-white/20 sm:inline-block" />
                <span>16 districts</span>
                <span className="hidden size-1 rounded-full bg-white/20 sm:inline-block" />
                <span className="text-primary">24/7 dispatch</span>
              </div>
            </div>

            {/* Right: CTA stack */}
            <div className="flex flex-col gap-3 lg:col-span-4">
              <Link
                href={numberCallLink}
                className="group inline-flex h-14 items-center justify-between gap-3 rounded-2xl bg-white px-5 text-[13px] font-bold uppercase tracking-[0.12em] text-neutral-900 transition-colors hover:bg-primary hover:text-white"
              >
                <span className="flex items-center gap-2.5">
                  <RiPhoneFill className="size-4" />
                  {displayNumber}
                </span>
                <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/[0.04] px-5 text-[13px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10"
              >
                <span className="flex items-center gap-2.5">
                  <RiWhatsappFill className="size-4 text-emerald-400" />
                  WhatsApp
                </span>
                <RiArrowRightUpLine className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
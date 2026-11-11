// app/(marketing)/service-areas/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import {
  RiMapPinFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiTimeFill,
  RiShieldCheckFill,
  RiBatteryChargeFill,
  RiCustomerServiceFill,
  RiNavigationFill,
  RiCheckLine,
  RiStarFill,
  RiVerifiedBadgeFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiRadarFill,
  RiCrosshair2Fill,
  RiCompass3Fill,
  RiRoadMapFill,
  RiBuildingFill,
  RiHome4Fill,
  RiStoreFill,
  RiMap2Fill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";


/* ============ Icon mapping by area name ============ */
const AREA_ICONS: Record<string, React.ElementType> = {
  industrial: RiBuildingFill,
  freezone: RiStoreFill,
  gardens: RiHome4Fill,
  marina: RiRoadMapFill,
  jumeirah: RiHome4Fill,
  investment: RiBuildingFill,
  south: RiRoadMapFill,
  production: RiStoreFill,
  sports: RiRoadMapFill,
  latifa: RiHome4Fill,
  towers: RiBuildingFill,
};

function getAreaIcon(name: string): React.ElementType {
  const lower = name.toLowerCase();
  for (const [key, icon] of Object.entries(AREA_ICONS)) {
    if (lower.includes(key)) return icon;
  }
  return RiMap2Fill;
}

/* ============ Trust points ============ */
const TRUST_POINTS = [
  { icon: RiTimeFill, title: "5–30 min", subtitle: "Response" },
  { icon: RiShieldCheckFill, title: "Certified", subtitle: "Mechanics" },
  { icon: RiBatteryChargeFill, title: "Genuine", subtitle: "OEM parts" },
  { icon: RiCustomerServiceFill, title: "24/7", subtitle: "Dispatch" },
];

export default function ServiceAreasPage() {
  const {
    serviceAreas,
    city,
    responseTime,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    GMB,
  } = SiteConfig;

  return (
    <main className="relative w-full overflow-hidden bg-[#faf9f7] text-neutral-900">
      {/* ============================================================
          HERO — Editorial title page
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

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          {/* Chapter mark */}
          <div className="mb-10 flex items-center gap-4">
            <span className="flex size-10 items-center justify-center rounded-full border border-neutral-900/15 bg-white font-serif text-sm italic text-primary shadow-sm">
              ✦
            </span>
            <div className="h-px w-16 bg-neutral-900/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
              Coverage
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            {/* Left: Big headline */}
            <div className="lg:col-span-8">
              <h1 className="font-serif text-[2.75rem] font-medium leading-[0.98] tracking-tight text-neutral-900 sm:text-6xl lg:text-[5rem]">
                Sixteen districts.{" "}
                <span className="relative inline-block italic">
                  <span className="relative z-10">One dispatch.</span>
                  <span className="absolute inset-x-0 bottom-2 z-0 h-[0.22em] bg-primary/25" />
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-neutral-600 sm:text-base">
                Mobile mechanics positioned across every major {city} district —
                from the industrial south to the marina west. Wherever you are,
                we arrive in{" "}
                <span className="font-semibold text-neutral-900">
                  {responseTime}
                </span>
                .
              </p>

              {/* Inline proof row */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-neutral-900/10 py-4">
                {[
                  { value: `${serviceAreas.length}+`, label: "districts" },
                  { value: responseTime.replace(" to ", "–"), label: "avg ETA" },
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
                  WhatsApp
                </Link>
              </div>
            </div>

            {/* Right: Mini trust directory */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-6 border-t border-neutral-900/10 pt-6">
                {TRUST_POINTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex flex-col">
                      <Icon className="size-4 text-primary" />
                      <p className="mt-3 font-serif text-xl font-medium leading-none text-neutral-900">
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                        {item.subtitle}
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
          AREA INDEX — Numbered directory, not a grid of tiles
      ============================================================ */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section header */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm italic text-primary">
                  01
                </span>
                <span className="h-px flex-1 bg-neutral-900/10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Coverage Index
                </span>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                Every district we cover.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15px] leading-relaxed text-neutral-600">
                A live index of the {serviceAreas.length} Dubai districts where
                we dispatch mobile mechanics. Tap any area to see local
                coverage details.
              </p>
            </div>
          </div>

          {/* Editorial index — 2-column on desktop */}
          <div className="mt-12 grid grid-cols-1 gap-x-16 border-t border-neutral-900/10 lg:grid-cols-2">
            {serviceAreas.map((area, i) => {
              const Icon = getAreaIcon(area.name);
              const number = String(i + 1).padStart(2, "0");
              return (
                <Link
                  key={area.slug}
                  href={`/service-area/${area.slug}`}
                  className="group relative flex items-start gap-4 border-b border-neutral-900/10 py-5 transition-colors hover:bg-neutral-50/60"
                >
                  {/* Number */}
                  <span className="shrink-0 pt-0.5 font-serif text-sm italic text-primary/60 transition-colors group-hover:text-primary">
                    {number}
                  </span>

                  {/* Icon */}
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-4" />
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="truncate font-sans text-[15px] font-semibold leading-tight text-neutral-900">
                      {area.name}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-2 text-[11px] font-semibold text-neutral-500">
                      <span className="inline-flex items-center gap-1">
                        <RiTimeFill className="size-2.5 text-primary" />
                        {responseTime}
                      </span>
                      <span className="size-0.5 rounded-full bg-neutral-300" />
                      <span>24/7</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <RiArrowRightUpLine className="mt-1 size-3.5 shrink-0 text-neutral-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </Link>
              );
            })}
          </div>

          {/* Closing note */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-900/10 pt-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {serviceAreas.length} districts · {city} · 24/7
            </p>
            <Link
              href={numberCallLink}
              className="group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary"
            >
              Don't see your area? Call us
              <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          MAP PANEL + INFO — Cartographic section
      ============================================================ */}
      <section className="relative w-full border-t border-neutral-900/10 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Map frame */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm italic text-primary">
                  02
                </span>
                <span className="h-px flex-1 bg-neutral-900/10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Dispatch Base
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl">
                Where the fleet begins.
              </h2>

              {/* Map frame */}
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-neutral-900/10 bg-white shadow-[0_20px_40px_-24px_rgba(0,0,0,0.15)]">
                {/* Top caption strip */}
                <div className="flex items-center justify-between gap-3 border-b border-neutral-900/10 bg-white/70 px-5 py-3 backdrop-blur">
                  <div className="flex items-center gap-2">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-700">
                      Live base
                    </span>
                  </div>
                  <span className="hidden font-mono text-[10px] tracking-[0.1em] text-neutral-500 sm:inline">
                    {GMB.latitude} · {GMB.longitude}
                  </span>
                </div>

                {/* Map */}
                <div className="relative aspect-4/3 w-full bg-neutral-100 lg:aspect-16/11">
                  <iframe
                    title={`${SiteConfig.brandName} coverage map`}
                    src={GMB.embedMap}
                    width="100%"
                    height="100%"
                    className="size-full"
                    style={{
                      border: 0,
                      filter: "saturate(0.95) contrast(1.02)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Bottom caption strip */}
                <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-t border-neutral-900/10 bg-white/70 px-5 py-3 backdrop-blur">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11px] font-semibold text-neutral-700">
                    <span className="inline-flex items-center gap-1.5">
                      <RiNavigationFill className="size-3 text-primary" />
                      Jebel Ali · The Gardens
                    </span>
                    <span className="hidden size-1 rounded-full bg-neutral-300 sm:inline-block" />
                    <span className="inline-flex items-center gap-1.5">
                      <RiTimeFill className="size-3 text-primary" />
                      24/7 dispatch
                    </span>
                  </div>
                  <Link
                    href={GMB.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-900"
                  >
                    Directions
                    <RiArrowRightUpLine className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Coverage detail */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm italic text-primary">
                  03
                </span>
                <span className="h-px flex-1 bg-neutral-900/10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                  What we cover
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl">
                Onsite. Anywhere.
              </h2>

              <p className="mt-6 text-[15px] leading-relaxed text-neutral-600">
                Our mobile units are dispatched from Jebel Ali and staged
                across south and west Dubai. Whether you're on the E11
                shoulder, in a basement garage, or at a marina berth, a
                certified mechanic is on the way.
              </p>

              {/* Feature list */}
              <ul className="mt-8 space-y-3 border-t border-neutral-900/10 pt-6">
                {[
                  "Battery replacement & jump start",
                  "Computer diagnostics · OBD-II",
                  "Alternator & starter repair",
                  "AC gas refill & leak repair",
                  "Brake pads & rotor service",
                  "Fuel pump & ignition repair",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-[13px] font-medium text-neutral-700"
                  >
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <RiCheckLine className="size-2.5 text-primary" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Micro note */}
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/[0.04] px-4 py-3">
                <RiRadarFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                <p className="text-[12px] leading-relaxed text-neutral-700">
                  <span className="font-bold text-neutral-900">
                    Not on the list?
                  </span>{" "}
                  We still reach you. Call our dispatch line and we'll
                  coordinate the nearest mobile unit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLOSING — Dark editorial band
      ============================================================ */}
      <section className="relative w-full bg-neutral-900 text-white">
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

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 backdrop-blur-sm">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/90">
                  Now dispatching · {city}
                </span>
              </div>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Wherever you're parked, <br className="hidden sm:block" />
                <span className="italic text-primary">
                  we'll meet you there.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
                Sixteen districts, one dispatch line. Real people, real
                mechanics, real 5–30 minute response — day or night.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <RiStarFill className="size-3 text-primary" />
                  5.0 rated
                </span>
                <span className="hidden size-1 rounded-full bg-white/20 sm:inline-block" />
                <span>500+ drivers</span>
                <span className="hidden size-1 rounded-full bg-white/20 sm:inline-block" />
                <span>{serviceAreas.length} districts</span>
                <span className="hidden size-1 rounded-full bg-white/20 sm:inline-block" />
                <span className="text-primary">24/7 dispatch</span>
              </div>
            </div>

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
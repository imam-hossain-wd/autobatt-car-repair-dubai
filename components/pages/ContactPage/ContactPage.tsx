// app/(marketing)/contact/page.tsx

import Link from "next/link";
import {
  RiMapPinFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiTimeFill,
  RiShieldCheckFill,
  RiCustomerServiceFill,
  RiPhoneFill,
  RiMailFill,
  RiWhatsappFill,
  RiCheckLine,
  RiStarFill,
  RiUserFill,
  RiMessageFill,
  RiServiceFill,
  RiCalendarCheckFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

export default function ContactPage() {
  const {
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    email,
    location,
    city,
    country,
    responseTime,
    GMB,
    streetAddress,
    serviceAreas,
  } = SiteConfig;

  /* ============ Contact Channels (now dynamic) ============ */
  const CONTACT_CHANNELS = [
    {
      index: "01",
      icon: RiPhoneFill,
      label: "Call dispatch",
      value: displayNumber,
      href: numberCallLink,
      description: "Instant line — under 1 minute pickup",
      primary: true,
    },
    {
      index: "02",
      icon: RiWhatsappFill,
      label: "WhatsApp",
      value: "Chat now",
      href: whatsappCallLink,
      description: "Send location + issue for instant help",
      external: true,
    },
    {
      index: "03",
      icon: RiMailFill,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      description: "For quotes and non-urgent inquiries",
    },
    {
      index: "04",
      icon: RiMapPinFill,
      label: "Workshop",
      value: location,
      href: GMB.mapsLink,
      description: `${streetAddress}, ${city}`,
      external: true,
    },
  ];

  /* ============ Trust Points (dynamic) ============ */
  const TRUST_POINTS = [
    { icon: RiTimeFill, title: responseTime, subtitle: "Response" },
    { icon: RiShieldCheckFill, title: "Certified", subtitle: "Mechanics" },
    { icon: RiCustomerServiceFill, title: "24/7", subtitle: "Available" },
    { icon: RiStarFill, title: "5.0", subtitle: "Rating" },
  ];

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
              ✉
            </span>
            <div className="h-px w-16 bg-neutral-900/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
              Contact
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            {/* Left: Big headline */}
            <div className="lg:col-span-8">
              <h1 className="font-serif text-[2.75rem] font-medium leading-[0.98] tracking-tight text-neutral-900 sm:text-6xl lg:text-[5rem]">
                Talk to a mechanic,{" "}
                <span className="relative inline-block italic">
                  <span className="relative z-10">not a bot.</span>
                  <span className="absolute inset-x-0 bottom-2 z-0 h-[0.22em] bg-primary/25" />
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-neutral-600 sm:text-base">
                One call, one message, or one form away from a certified
                mechanic arriving at your exact location in{" "}
                <span className="font-semibold text-neutral-900">
                  {responseTime}
                </span>
                . Real people, real dispatch — 24 hours a day.
              </p>

              {/* Trust ticks */}
              <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-neutral-900/10 py-4">
                {[
                  "24/7 emergency line",
                  "No call-out fees",
                  "Upfront pricing",
                ].map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-600"
                  >
                    <span className="flex size-4 items-center justify-center rounded-full bg-primary/15">
                      <RiCheckLine className="size-2.5 text-primary" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

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

            {/* Right: mini dir */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-6 border-t border-neutral-900/10 pt-6">
                {TRUST_POINTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex flex-col">
                      <Icon className="size-4 text-primary" />
                      <p className="mt-3 font-serif text-2xl font-medium leading-none text-neutral-900">
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
          CHANNEL DIRECTORY + MAP
      ============================================================ */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* ---------- LEFT: Contact Directory (5 cols) ---------- */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm italic text-primary">
                  01
                </span>
                <span className="h-px flex-1 bg-neutral-900/10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Directories
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl">
                Where to reach us.
              </h2>

              {/* Channel list */}
              <div className="mt-8 divide-y divide-neutral-900/10 border-y border-neutral-900/10">
                {CONTACT_CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <Link
                      key={channel.index}
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group relative flex items-start gap-4 py-5 transition-colors hover:bg-neutral-50/60"
                    >
                      <span className="shrink-0 pt-0.5 font-serif text-sm italic text-primary/60 transition-colors group-hover:text-primary">
                        {channel.index}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={
                              channel.primary
                                ? "flex size-7 items-center justify-center rounded-md bg-primary text-white"
                                : "flex size-7 items-center justify-center rounded-md bg-primary/10"
                            }
                          >
                            <Icon
                              className={
                                channel.primary
                                  ? "size-3.5 text-white"
                                  : "size-3.5 text-primary"
                              }
                            />
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                            {channel.label}
                          </span>
                        </div>

                        <p className="mt-2 font-serif text-xl font-medium leading-tight text-neutral-900">
                          {channel.value}
                        </p>
                        <p className="mt-1 text-[12.5px] text-neutral-600">
                          {channel.description}
                        </p>
                      </div>

                      <RiArrowRightUpLine className="mt-1 size-4 shrink-0 text-neutral-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                    </Link>
                  );
                })}
              </div>

              {/* Response highlight */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/[0.04] px-4 py-3">
                <RiTimeFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                <p className="text-[12px] leading-relaxed text-neutral-700">
                  <span className="font-bold text-neutral-900">
                    Average response:
                  </span>{" "}
                  Under 1 minute on WhatsApp · {responseTime} on-site arrival.
                </p>
              </div>
            </div>

            {/* ---------- RIGHT: Map (7 cols) ---------- */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm italic text-primary">
                  02
                </span>
                <span className="h-px flex-1 bg-neutral-900/10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Our Base
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl">
                Find us in {city}.
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
                      Live pin
                    </span>
                  </div>
                  <span className="hidden font-mono text-[10px] tracking-[0.1em] text-neutral-500 sm:inline">
                    {GMB.latitude} · {GMB.longitude}
                  </span>
                </div>

                {/* Map iframe */}
                <div className="relative aspect-4/3 w-full bg-neutral-100 lg:aspect-16/11">
                  <iframe
                    title={`${SiteConfig.brandName} location`}
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
                      <RiMapPinFill className="size-3 text-primary" />
                      {location}, {city}
                    </span>
                    <span className="hidden size-1 rounded-full bg-neutral-300 sm:inline-block" />
                    <span className="inline-flex items-center gap-1.5">
                      <RiTimeFill className="size-3 text-primary" />
                      Open 24/7
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
          </div>
        </div>
      </section>

      {/* ============================================================
          FORM — Editorial "letter"
      ============================================================ */}
      <section className="relative w-full border-t border-neutral-900/10 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Editorial intro */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm italic text-primary">
                  03
                </span>
                <span className="h-px flex-1 bg-neutral-900/10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                  Book online
                </span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                Send a note. <br />
                <span className="italic text-primary">We'll arrive.</span>
              </h2>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-neutral-600">
                Tell us where you are and what your car is doing. Our
                dispatch team confirms within one minute, day or night —
                then sends the nearest certified mechanic.
              </p>

              <ul className="mt-8 space-y-3 border-t border-neutral-900/10 pt-6">
                {[
                  "Instant confirmation within 1 minute",
                  "No call-out fees or hidden charges",
                  "Genuine parts · 12–24 month warranty",
                  "Certified multi-brand mechanics",
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

              {/* Micro testimonial */}
              <div className="mt-10 border-l-2 border-primary/40 pl-5">
                <p className="font-serif text-[15px] italic leading-relaxed text-neutral-700">
                  “Fast, professional, and honest. The mechanic arrived
                  within fifteen minutes and fixed everything on the spot.”
                </p>
                <p className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                  <span className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill key={i} className="size-2.5 text-primary" />
                    ))}
                  </span>
                  Ahmed A. · {city}
                </p>
              </div>
            </div>

            {/* Right: The form */}
            <div className="lg:col-span-7">
              <form className="space-y-8">
                <div className="flex items-center justify-between border-b border-neutral-900/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-8 items-center justify-center rounded-md bg-primary/10">
                      <RiMessageFill className="size-4 text-primary" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-900">
                      Request dispatch
                    </span>
                  </div>
                  <span className="font-serif text-[11px] italic text-neutral-500">
                    Response · under 60s
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <InkField
                    icon={RiUserFill}
                    label="Name"
                    htmlFor="name"
                    placeholder="Ahmed Al Maktoum"
                    required
                  />
                  <InkField
                    icon={RiPhoneFill}
                    label="Phone"
                    htmlFor="phone"
                    placeholder="+971 50 000 0000"
                    type="tel"
                    required
                  />
                </div>

                <InkField
                  icon={RiMailFill}
                  label="Email"
                  htmlFor="email"
                  placeholder="you@example.com"
                  type="email"
                />

                <div className="group relative border-b border-neutral-900/20 pb-2 transition-colors focus-within:border-primary">
                  <label
                    htmlFor="service"
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500 transition-colors group-focus-within:text-primary"
                  >
                    <RiServiceFill className="size-3" />
                    Service needed
                    <span className="text-primary">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="mt-2 w-full cursor-pointer border-0 bg-transparent text-[15px] font-medium text-neutral-900 outline-none"
                  >
                    <option value="">Select a service</option>
                    {[
                      "Battery Replacement",
                      "Jump Start",
                      "Computer Diagnostic",
                      "Alternator Repair",
                      "Fuel Pump Repair",
                      "Starter Motor Repair",
                      "AC Repair",
                      "Brake Pad Repair",
                      "Other Emergency",
                    ].map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="group relative border-b border-neutral-900/20 pb-2 transition-colors focus-within:border-primary">
                  <label
                    htmlFor="message"
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500 transition-colors group-focus-within:text-primary"
                  >
                    <RiMessageFill className="size-3" />
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Issue, location, plate number…"
                    className="mt-2 w-full resize-none border-0 bg-transparent text-[15px] font-medium text-neutral-900 outline-none placeholder:text-neutral-400"
                  />
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Encrypted · No spam · No fees
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-neutral-800"
                  >
                    <RiCalendarCheckFill className="size-3.5" />
                    Send request
                    <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>

                <div className="flex items-center gap-3 py-2">
                  <span className="h-px flex-1 bg-neutral-900/10" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                    or call directly
                  </span>
                  <span className="h-px flex-1 bg-neutral-900/10" />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Link
                    href={numberCallLink}
                    className="group flex items-center justify-between gap-2 rounded-xl border border-neutral-900/15 bg-white px-4 py-3 transition-colors hover:border-neutral-900/40"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="flex size-8 items-center justify-center rounded-md bg-primary text-white">
                        <RiPhoneFill className="size-3.5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                          Call 24/7
                        </span>
                        <span className="text-[12.5px] font-bold text-neutral-900">
                          {displayNumber}
                        </span>
                      </span>
                    </span>
                    <RiArrowRightUpLine className="size-3.5 text-neutral-400 group-hover:text-primary" />
                  </Link>

                  <Link
                    href={whatsappCallLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-2 rounded-xl border border-emerald-600/30 bg-emerald-50 px-4 py-3 transition-colors hover:border-emerald-600/60"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="flex size-8 items-center justify-center rounded-md bg-emerald-600 text-white">
                        <RiWhatsappFill className="size-3.5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                          WhatsApp
                        </span>
                        <span className="text-[12.5px] font-bold text-emerald-800">
                          Chat instantly
                        </span>
                      </span>
                    </span>
                    <RiArrowRightUpLine className="size-3.5 text-emerald-600 group-hover:text-emerald-800" />
                  </Link>
                </div>
              </form>
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
                  Available now · {city}
                </span>
              </div>

              <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Need help <br className="hidden sm:block" />
                <span className="italic text-primary">right now?</span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
                Dispatch is on standby 24/7. Call, message, or use the form
                above — a certified mechanic is on the way.
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

/* ============================================================
   SUB-COMPONENT: Ink-style underline field
============================================================ */
function InkField({
  icon: Icon,
  label,
  htmlFor,
  placeholder,
  type = "text",
  required,
}: {
  icon: React.ElementType;
  label: string;
  htmlFor: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="group relative border-b border-neutral-900/20 pb-2 transition-colors focus-within:border-primary">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500 transition-colors group-focus-within:text-primary"
      >
        <Icon className="size-3" />
        {label}
        {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        id={htmlFor}
        name={htmlFor}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-0 bg-transparent text-[15px] font-medium text-neutral-900 outline-none placeholder:text-neutral-400"
      />
    </div>
  );
}
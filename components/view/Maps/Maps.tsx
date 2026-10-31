"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  RiMapPinFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiUserFill,
  RiMailFill,
  RiPhoneFill,
  RiMessageFill,
  RiArrowRightLine,
  RiCheckboxCircleFill,
  RiSendPlaneFill,
  RiLoader4Line,
  RiNavigationFill,
  RiRadarFill,
  RiNodeTree,
  RiRoadMapFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { SiteConfig, streetAddress } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

const SERVICE_OPTIONS = [
  "Battery Replacement",
  "Jump Start",
  "Computer Diagnostic",
  "Alternator Repair",
  "Fuel Pump Repair",
  "Starter Motor Repair",
  "AC Repair",
  "Brake Pad Repair",
  "Other Emergency",
];

export default function Maps() {
  const {
    GMB,
    serviceAreas,
    brandName,
    city,
    responseTime,
    location,
  } = SiteConfig;

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const etaRange = useMemo(() => responseTime.replace(" to ", "–"), [responseTime]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1100));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    }, 3800);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#faf9f7] py-10">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Warm radial tint */}
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[120px]" />
        {/* Hairline dot grid */}
        <div
          className="absolute inset-0 text-neutral-900 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full px-10">
        {/* ============================================================
            HEADER — editorial layout
        ============================================================ */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          {/* Left: label + headline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-900/10 bg-white px-3 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-700">
                  Live Coverage
                </span>
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-neutral-900/15 to-transparent" />
            </div>

            <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.02] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              We come to{" "}
              <span className="relative inline-block italic">
                <span className="relative z-10">you</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-[0.22em] bg-primary/25" />
              </span>
              ,
              <br />
              anywhere in Dubai.
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-600">
              Our mobile mechanics reach your coordinates in{" "}
              <span className="font-semibold text-neutral-900">
                {responseTime}
              </span>{" "}
              — day or night, across{" "}
              <span className="font-semibold text-neutral-900">
                {serviceAreas.length}+ districts
              </span>
              .
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-4 border-t border-neutral-900/10 pt-6">
              <Stat numeral={`${serviceAreas.length}+`} label="Districts" />
              <Stat numeral={etaRange} label="Avg ETA" accent />
              <Stat numeral="24/7" label="Uptime" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* ---------- MAP PANEL (7 cols) ---------- */}
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-3xl border border-neutral-900/10 bg-white shadow-[0_30px_60px_-30px_rgba(20,20,20,0.15)]">
              {/* Top strip */}
          

              {/* Map */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100 lg:aspect-16/11">
                {!isMapLoaded && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-100">
                    <div className="flex flex-col items-center gap-2.5">
                      <RiRoadMapFill className="size-8 animate-pulse text-primary/60" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                        Loading map
                      </span>
                    </div>
                  </div>
                )}
                <iframe
                  title={`${brandName} Location Map`}
                  src={GMB.embedMap}
                  width="100%"
                  height="100%"
                  className={cn(
                    "size-full transition-opacity duration-700",
                    isMapLoaded ? "opacity-100" : "opacity-0"
                  )}
                  style={{
                    border: 0,
                    filter: "saturate(0.9) contrast(1.02)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoaded(true)}
                />
              </div>
            </div>
          </div>

          {/* ---------- FORM PANEL (5 cols) ---------- */}
          <div className="lg:col-span-5">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-900/10 bg-white shadow-[0_30px_60px_-30px_rgba(20,20,20,0.18)]">
              {/* Header block */}
              <div className="relative border-b border-neutral-900/10 px-6 pb-5 pt-6">
                <h3 className="mt-3 font-serif text-2xl font-medium leading-tight tracking-tight text-neutral-900 sm:text-3xl">
                  Request a mechanic
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  Fill the form and we'll be at your location within{" "}
                  <span className="font-semibold text-neutral-900">
                    {responseTime}
                  </span>
                  .
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-1 flex-col p-6">
                {isSubmitted ? (
                  <SuccessState />
                ) : (
                  <div className="flex flex-1 flex-col gap-4">
                    {/* Name */}
                    <Field
                      icon={RiUserFill}
                      label="Full name"
                      htmlFor="name"
                      required
                    >
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ahmed Al Maktoum"
                        className="h-10 w-full border-0 bg-transparent text-sm font-medium text-neutral-900 outline-none placeholder:text-neutral-400"
                      />
                    </Field>

                    {/* Phone + email */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <Field
                        icon={RiPhoneFill}
                        label="Phone"
                        htmlFor="phone"
                        required
                      >
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+971 50 000 0000"
                          className="h-10 w-full border-0 bg-transparent text-sm font-medium text-neutral-900 outline-none placeholder:text-neutral-400"
                        />
                      </Field>
                      <Field icon={RiMailFill} label="Email" htmlFor="email">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@mail.com"
                          className="h-10 w-full border-0 bg-transparent text-sm font-medium text-neutral-900 outline-none placeholder:text-neutral-400"
                        />
                      </Field>
                    </div>

                    {/* Service */}
                    <Field
                      icon={RiNodeTree}
                      label="Service needed"
                      htmlFor="service"
                      required
                    >
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="h-10 w-full cursor-pointer border-0 bg-transparent text-sm font-medium text-neutral-900 outline-none"
                      >
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>

                    {/* Notes */}
                    <Field
                      icon={RiMessageFill}
                      label="Notes (optional)"
                      htmlFor="message"
                    >
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={2}
                        placeholder="Issue, location, plate…"
                        className="w-full resize-none border-0 bg-transparent pt-2 text-sm font-medium text-neutral-900 outline-none placeholder:text-neutral-400"
                      />
                    </Field>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "group mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 text-[12px] font-bold uppercase tracking-[0.15em] text-white",
                        "transition-all duration-200 hover:bg-neutral-800",
                        "shadow-[0_10px_25px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_30px_-12px_rgba(0,0,0,0.6)]",
                        "disabled:cursor-not-allowed disabled:opacity-60"
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <RiLoader4Line className="size-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <RiSendPlaneFill className="size-3.5" />
                          Send Request
                          <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM TRUST STRIP
        ============================================================ */}
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-neutral-900/10 pt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
          <span className="inline-flex items-center gap-1.5 text-neutral-900">
            <span className="size-1 rounded-full bg-primary" />
            Priority dispatch
          </span>
          <span>·</span>
          <span>Certified mechanics</span>
          <span>·</span>
          <span>No hidden fees</span>
          <span>·</span>
          <span>On-site diagnosis</span>
          <span className="ml-auto inline-flex items-center gap-1.5 text-primary">
            <span className="size-1 rounded-full bg-primary" />
            {responseTime} response
          </span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SUB-COMPONENTS
============================================================ */

function Stat({
  numeral,
  label,
  accent,
}: {
  numeral: string;
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
        {numeral}
      </span>
      <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
        {label}
      </span>
    </div>
  );
}

function InfoPill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      {icon}
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400">
        {label}
      </span>
      <span className="text-[12px] font-semibold text-neutral-800">
        {value}
      </span>
    </span>
  );
}

function Field({
  icon: Icon,
  label,
  htmlFor,
  required,
  children,
}: {
  icon: React.ElementType;
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-xl border border-neutral-900/10 bg-neutral-50/60 px-3.5 pb-2 pt-2.5 transition-all duration-200 focus-within:border-primary/50 focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(120,80,255,0.06)]">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-500 transition-colors group-focus-within:text-primary"
      >
        <Icon className="size-2.5" />
        {label}
        {required && <span className="text-primary">*</span>}
      </label>
      <div>{children}</div>
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-14 text-center">
      <div className="relative flex size-16 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/25" />
        <span className="absolute inset-2 rounded-full bg-emerald-100" />
        <RiCheckboxCircleFill className="relative size-8 text-emerald-600" />
      </div>
      <h4 className="mt-5 font-serif text-xl font-medium tracking-tight text-neutral-900">
        Request received
      </h4>
      <p className="mt-2 max-w-[17rem] text-sm leading-relaxed text-neutral-500">
        Our dispatch team will call you back within 60 seconds to confirm
        your booking.
      </p>
      <div className="mt-5 flex items-center gap-1.5">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="size-1.5 animate-pulse rounded-full bg-emerald-500"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
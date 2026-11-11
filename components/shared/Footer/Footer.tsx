// components/layout/Footer.tsx
import Link from "next/link";
import {
  RiMapPinFill,
  RiPhoneFill,
  RiMailFill,
  RiWhatsappFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiVerifiedBadgeFill,
  RiArrowUpLine,
  RiFlashlightFill,
} from "@remixicon/react";
import { operatingHours, SiteConfig, streetAddress } from "@/config/siteConfig";
import { services } from "@/data/services/services";
import Logo from "../Logo/Logo";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const {
    brandName,
    displayNumber,
    email,
    location,
    city,
    country,
    serviceAreas,
    numberCallLink,
    whatsappCallLink,
    GMB,
  } = SiteConfig;

  const quickLinks = [
    { title: "Services", href: "/services" },
    { title: "Areas We Serve", href: "/area-we-serve" },
    { title: "Projects", href: "/projects" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
    { title: "Sitemap", href: "/sitemap.xml" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#faf9f7] text-neutral-900 px-5 md:px-10">
      {/* ============================================================
          BACKGROUND DECOR
      ============================================================ */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[380px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[120px]" />
        <div
          className="absolute inset-0 text-neutral-900 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 60% at 50% 0%, black 30%, transparent 90%)",
          }}
        />
      </div>



      {/* ============================================================
          MASTHEAD GRID — Newspaper-style columns
      ============================================================ */}
      <div className="relative ">
        {/* Row 1: Brand signature (large) + Directory */}
        <div className="grid grid-cols-1 gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
          {/* ---------- COLUMN 1: Brand signature (5 cols) ---------- */}
          <div className="lg:col-span-4">
            <div className="bg-white p-3 w-full">
              <Logo />
            </div>

            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-neutral-600">
              {SiteConfig.description}
            </p>
                        {/* Contact directory */}
              <div className="">
                <ul className="mt-4 space-y-2.5">
                  <ContactLine
                    icon={RiPhoneFill}
                    href={numberCallLink}
                    value={displayNumber}
                    highlight
                  />
                  <ContactLine
                    icon={RiMailFill}
                    href={`mailto:${email}`}
                    value={email}
                  />
                  <ContactLine
                    icon={RiMapPinFill}
                    href={GMB.mapsLink}
                    value={`${streetAddress}, ${location}, ${city}`}
                    external
                  />
                </ul>
              </div>

            {/* Business credentials row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10">
                  <RiVerifiedBadgeFill className="size-3.5 text-primary" />
                </span>
                <div className="text-[11px] leading-tight">
                  <p className="font-bold text-neutral-900">Verified</p>
                  <p className="text-neutral-500">Business Entity</p>
                </div>
              </div>

              <span className="h-8 w-px bg-neutral-900/10" />

              <div className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10">
                  <RiFlashlightFill className="size-3.5 text-primary" />
                </span>
                <div className="text-[11px] leading-tight">
                  <p className="font-bold text-neutral-900">Founded {SiteConfig.foundedYear ?? SiteConfig.founded}</p>
                  <p className="text-neutral-500">{city}, {country}</p>
                </div>
              </div>
            </div>

            {/* Social row */}
            <div className="mt-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                Follow along
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {SiteConfig.socialLinks.map((social) => {
                  const Icon = social.icon;
                  if (!social.href) return null;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="group flex size-10 items-center justify-center rounded-xl border border-neutral-900/10 bg-white text-neutral-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-900/25 hover:bg-neutral-900 hover:text-white"
                    >
                      <Icon className="size-4" />
                    </Link>
                  );
                })}
                <Link
                  href={whatsappCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group flex size-10 items-center justify-center rounded-xl border border-emerald-600/30 bg-emerald-50 text-emerald-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
                >
                  <RiWhatsappFill className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ---------- COLUMN 2-4: Directory columns (7 cols) ---------- */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-8">
            {/* Services */}
            <div>
              <ColumnHeading title="Services" count={services.length} />
              <ul className="mt-5 space-y-1">
                {services.map((service) => (
                  <DirectoryLink
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    label={service.name}
                  />
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <ColumnHeading title="Coverage" count={serviceAreas.length} />
              <ul className="mt-5 space-y-1">
                {serviceAreas.map((area) => (
                  <DirectoryLink
                    key={area.slug}
                    href={`/area-we-serve/${area.slug}`}
                    label={area.name}
                  />
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <ColumnHeading title="Company" />
              <ul className="mt-5 space-y-1">
                {quickLinks.map((item) => (
                  <DirectoryLink
                    key={item.title}
                    href={item.href}
                    label={item.title}
                  />
                ))}
              </ul>
                                        {/* ============================================
                  OPERATING HOURS (below Company links)
              ============================================ */}
              <div className="mt-8">
                <ColumnHeading title="Hours" />
                <ul className="mt-4 space-y-1.5">
                  {operatingHours?.map((schedule, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-2 py-0.5 text-[12px]"
                    >
                      <span className="font-medium text-neutral-600">
                        {schedule.day}
                      </span>
                      <span className="flex items-center gap-1.5 font-serif text-[11px] font-semibold italic text-primary">
                        <span className="size-1 rounded-full bg-primary/60" />
                        {schedule.hours}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Always open badge */}
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-600/20 bg-emerald-50 px-2.5 py-1.5">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Open 24/7
                  </span>
                </div>
              </div>

  
            </div>




          </div>
        </div>
      </div>

      {/* ============================================================
          BOTTOM MASTHEAD STRIP
      ============================================================ */}
      <div className="relative border-t border-neutral-900/10 bg-white/50">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: copyright */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px]">
              <p className="text-neutral-500">
                © {currentYear}{" "}
                <span className="font-bold text-neutral-900">{brandName}</span>
              </p>
              <span className="hidden size-1 rounded-full bg-neutral-300 sm:inline-block" />
              <span className="text-neutral-500">All rights reserved</span>
              <span className="hidden size-1 rounded-full bg-neutral-300 sm:inline-block" />
              <span className="inline-flex items-center gap-1.5 text-neutral-500">
                <RiVerifiedBadgeFill className="size-3 text-primary" />
                Verified Business
              </span>
            </div>

            {/* Center: legal */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {legalLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-[11px] font-semibold text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   SUB-COMPONENTS
============================================================ */

function ColumnHeading({
  title,
  count,
}: {
  title: string;
  count?: number;
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-neutral-900/15 pb-2">
      <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-900">
        {title}
      </h3>
      {count !== undefined && (
        <span className="font-serif text-[11px] italic text-neutral-500">
          {count}
        </span>
      )}
    </div>
  );
}

function DirectoryLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center justify-between gap-2 py-1 text-[13px] font-medium text-neutral-600 transition-colors hover:text-neutral-900"
      >
        <span className="truncate">{label}</span>
        <RiArrowRightUpLine className="size-3 shrink-0 -translate-x-1 text-primary opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
      </Link>
    </li>
  );
}

function ContactLine({
  icon: Icon,
  href,
  value,
  highlight,
  external,
}: {
  icon: React.ElementType;
  href: string;
  value: string;
  highlight?: boolean;
  external?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group flex items-center gap-2.5"
      >
        <span
          className={
            highlight
              ? "flex size-6 shrink-0 items-center justify-center rounded-md bg-primary text-white"
              : "flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
          }
        >
          <Icon className="size-3" />
        </span>
        <span
          className={
            highlight
              ? "truncate text-[12.5px] font-bold text-primary"
              : "truncate text-[12.5px] font-semibold text-neutral-800 transition-colors group-hover:text-neutral-900"
          }
        >
          {value}
        </span>
      </Link>
    </li>
  );
}


// components/layout/navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiMenuLine,
  RiCloseLine,
  RiMapPinLine,
  RiPhoneFill,
  RiWhatsappFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiToolsFill,
  RiFlashlightFill,
  RiCustomerServiceFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiStarFill,
  RiBatteryChargeFill,
  RiMailFill,
  RiSearchLine,
} from "@remixicon/react";
import { services } from "@/data/services/services";
import { cn } from "@/lib/utils";
import Logo from "../Logo/Logo";
import { SiteConfig } from "@/config/siteConfig";

/* ============ Service Categories ============ */
const serviceCategories = [
  {
    name: "Emergency",
    description: "Fast roadside rescue",
    icon: RiFlashlightFill,
    range: [0, 4] as const,
    number: "01",
  },
  {
    name: "Repair & Diagnostics",
    description: "Onsite professional fixes",
    icon: RiToolsFill,
    range: [4, 8] as const,
    number: "02",
  },
  {
    name: "Maintenance",
    description: "Keep your car running",
    icon: RiCustomerServiceFill,
    range: [8, 12] as const,
    number: "03",
  },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Area We Serve", href: "/service-area" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const openMega = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsMegaMenuOpen(true);
  };
  const closeMega = () => {
    hoverTimeout.current = setTimeout(() => setIsMegaMenuOpen(false), 150);
  };

  return (
    <>
      {/* ============================================================
          FULL-WIDTH STICKY HEADER — pinned to top, edge-to-edge
      ============================================================ */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-all py-2 duration-300 ease-out",
          isScrolled
            ? "border-b border-neutral-900/10 bg-white/95 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl"
            : "border-b border-neutral-900/10 bg-[#faf9f7]/95 backdrop-blur-md"
        )}
      >
        {/* Top accent hairline — appears on scroll */}
        <span
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-300",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
        />

        {/* Inner content container — centered but the bar itself is full width */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex w-full items-center justify-between gap-3 transition-all duration-300",
              isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
            )}
          >
            {/* ============ Logo ============ */}
            <Link
              href="/"
              className="relative flex shrink-0 items-center transition-transform hover:scale-[1.02]"
            >
              <div className="h-8 w-auto sm:h-10">
                <Logo />
              </div>
            </Link>

            {/* ============ Desktop Nav ============ */}
            <nav className="hidden items-center gap-0.5 lg:flex">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && openMega()}
                    onMouseLeave={() => item.hasDropdown && closeMega()}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "group relative flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-semibold tracking-tight transition-colors",
                        isActive
                          ? "text-neutral-900"
                          : "text-neutral-500 hover:text-neutral-900"
                      )}
                    >
                      <span
                        className={cn(
                          "size-1 rounded-full bg-primary transition-opacity",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {item.name}
                      {item.hasDropdown && (
                        <span
                          className={cn(
                            "ml-0.5 flex size-3.5 items-center justify-center transition-transform duration-200",
                            isMegaMenuOpen && "rotate-180"
                          )}
                        >
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            className="opacity-60"
                          >
                            <path
                              d="M1 2.5L4 5.5L7 2.5"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      )}
                    </Link>

                    {/* Mega menu */}
                    {item.hasDropdown && (
                      <div
                        className={cn(
                          "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-300",
                          isMegaMenuOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-2 opacity-0"
                        )}
                      >
                        <div className="relative w-[920px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-neutral-900/10 bg-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.25)]">
                          {/* Masthead */}
                          <div className="flex items-center justify-between border-b border-neutral-900/10 bg-neutral-50/60 px-7 py-3.5">
                            <div className="flex items-center gap-2.5">
                              <span className="flex size-6 items-center justify-center rounded-md bg-primary/10">
                                <RiToolsFill className="size-3 text-primary" />
                              </span>
                              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-900">
                                All Services
                              </span>
                              <span className="font-serif text-[11px] italic text-neutral-500">
                                ({services.length})
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                              <span className="inline-flex items-center gap-1.5">
                                <RiTimeFill className="size-3 text-primary" />
                                24/7
                              </span>
                              <span className="size-1 rounded-full bg-neutral-300" />
                              <span className="inline-flex items-center gap-1.5">
                                <RiShieldCheckFill className="size-3 text-primary" />
                                Guaranteed
                              </span>
                            </div>
                          </div>

                          {/* Categories */}
                          <div className="grid grid-cols-3 divide-x divide-neutral-900/10">
                            {serviceCategories.map((cat) => {
                              const Icon = cat.icon;
                              const [start, end] = cat.range;
                              const catServices = services.slice(start, end);

                              return (
                                <div key={cat.name} className="px-6 py-6">
                                  <div className="mb-4 flex items-start justify-between">
                                    <div>
                                      <div className="flex items-center gap-2">
                                        <span className="font-serif text-[11px] italic text-primary">
                                          {cat.number}
                                        </span>
                                        <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-neutral-900">
                                          {cat.name}
                                        </h4>
                                      </div>
                                      <p className="mt-1 text-[11px] text-neutral-500">
                                        {cat.description}
                                      </p>
                                    </div>
                                    <Icon className="size-4 text-primary/60" />
                                  </div>

                                  <ul className="space-y-0.5">
                                    {catServices.map((service) => (
                                      <li key={service.slug}>
                                        <Link
                                          href={`/services/${service.slug}`}
                                          className="group flex items-center gap-2 py-1.5 text-[12.5px] font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                                        >
                                          <span className="size-1 shrink-0 rounded-full bg-primary/40 transition-colors group-hover:bg-primary" />
                                          <span className="truncate">
                                            {service.name}
                                          </span>
                                          <RiArrowRightUpLine className="ml-auto size-3 shrink-0 -translate-x-1 text-primary opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>

                          {/* Footer */}
                          <div className="flex items-center justify-between gap-4 border-t border-neutral-900/10 bg-neutral-50/60 px-7 py-4">
                            <div className="flex items-center gap-2 text-[11px] text-neutral-600">
                              <RiBatteryChargeFill className="size-3 text-primary" />
                              Genuine parts · Certified mechanics · No hidden fees
                            </div>
                            <Link
                              href="/services"
                              className="group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-900"
                            >
                              View all
                              <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ============ Right cluster ============ */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                aria-label="Search"
                className="hidden h-9 w-9 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 md:flex"
              >
                <RiSearchLine className="size-4" />
              </button>

              <Link
                href={SiteConfig.whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hidden h-9 w-9 items-center justify-center rounded-lg text-emerald-600 transition-colors hover:bg-emerald-50 sm:flex"
              >
                <RiWhatsappFill className="size-4" />
              </Link>

              <Link
                href={SiteConfig.numberCallLink}
                className="group relative hidden h-9 items-center gap-2 overflow-hidden rounded-lg bg-neutral-900 px-3.5 text-[12px] font-bold text-white transition-all hover:bg-neutral-800 sm:inline-flex"
              >
                <RiPhoneFill className="size-3.5" />
                <span className="hidden sm:inline">Call Now</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="relative flex size-9 items-center justify-center rounded-lg bg-neutral-900 text-white transition-colors hover:bg-neutral-800 lg:hidden"
              >
                {isMobileMenuOpen ? (
                  <RiCloseLine className="size-4" />
                ) : (
                  <RiMenuLine className="size-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          MOBILE DRAWER (unchanged structure — right-side panel)
      ============================================================ */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={cn(
            "absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
        />

        <aside
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-[#faf9f7] shadow-2xl transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-neutral-900/10 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="flex size-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-700">
                Menu
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close"
              className="flex size-8 items-center justify-center rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
            >
              <RiCloseLine className="size-4" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            <nav className="space-y-1">
              {navItems.map((item, i) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                if (item.hasDropdown) {
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setIsMobileServicesOpen((v) => !v)}
                        className={cn(
                          "group flex w-full items-center justify-between py-3 text-left transition-colors",
                          isActive
                            ? "text-neutral-900"
                            : "text-neutral-600 hover:text-neutral-900"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-[11px] italic text-primary/60">
                            0{i + 1}
                          </span>
                          <span className="text-[15px] font-semibold tracking-tight">
                            {item.name}
                          </span>
                        </div>
                        <span
                          className={cn(
                            "flex size-6 items-center justify-center rounded-md border border-neutral-900/10 text-neutral-500 transition-all",
                            isMobileServicesOpen &&
                              "rotate-180 border-primary/30 text-primary"
                          )}
                        >
                          <svg width="10" height="10" viewBox="0 0 8 8" fill="none">
                            <path
                              d="M1 2.5L4 5.5L7 2.5"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      <div
                        className={cn(
                          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300",
                          isMobileServicesOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="min-h-0">
                          <div className="ml-6 mt-1 space-y-4 border-l border-neutral-900/10 pb-4 pl-4">
                            {serviceCategories.map((cat) => {
                              const Icon = cat.icon;
                              const [start, end] = cat.range;
                              const catServices = services.slice(start, end);
                              return (
                                <div key={cat.name}>
                                  <div className="mb-2 flex items-center gap-1.5">
                                    <Icon className="size-3 text-primary" />
                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                                      {cat.name}
                                    </span>
                                  </div>
                                  <ul className="space-y-0.5">
                                    {catServices.map((s) => (
                                      <li key={s.slug}>
                                        <Link
                                          href={`/services/${s.slug}`}
                                          onClick={() => setIsMobileMenuOpen(false)}
                                          className="flex items-center gap-1.5 py-1 text-[12.5px] text-neutral-600 hover:text-primary"
                                        >
                                          <span className="size-0.5 rounded-full bg-neutral-400" />
                                          {s.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                            <Link
                              href="/services"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.15em] text-primary"
                            >
                              All services
                              <RiArrowRightLine className="size-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "group flex items-center justify-between py-3 transition-colors",
                      isActive
                        ? "text-neutral-900"
                        : "text-neutral-600 hover:text-neutral-900"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-[11px] italic text-primary/60">
                        0{i + 1}
                      </span>
                      <span className="text-[15px] font-semibold tracking-tight">
                        {item.name}
                      </span>
                    </div>
                    <RiArrowRightUpLine className="size-3.5 text-neutral-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </Link>
                );
              })}
            </nav>

            <div className="my-6 h-px bg-neutral-900/10" />

            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                Direct Line
              </p>

              <Link
                href={SiteConfig.numberCallLink}
                className="group flex items-center gap-3 rounded-xl border border-neutral-900/10 bg-white p-3 transition-colors hover:border-neutral-900/25"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-white">
                  <RiPhoneFill className="size-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                    Call 24/7
                  </p>
                  <p className="mt-0.5 truncate text-[13px] font-bold text-neutral-900">
                    {SiteConfig.displayNumber}
                  </p>
                </div>
                <RiArrowRightUpLine className="size-3.5 text-neutral-400 group-hover:text-primary" />
              </Link>

              <Link
                href={SiteConfig.whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-emerald-600/25 bg-emerald-50 p-3 transition-colors hover:border-emerald-600/60"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <RiWhatsappFill className="size-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                    WhatsApp
                  </p>
                  <p className="mt-0.5 text-[13px] font-bold text-emerald-800">
                    Chat instantly
                  </p>
                </div>
                <RiArrowRightUpLine className="size-3.5 text-emerald-600 group-hover:text-emerald-800" />
              </Link>

              <Link
                href={`mailto:${SiteConfig.email}`}
                className="group flex items-center gap-3 rounded-xl border border-neutral-900/10 bg-white p-3 transition-colors hover:border-neutral-900/25"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-neutral-900 text-white">
                  <RiMailFill className="size-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-neutral-500">
                    Email
                  </p>
                  <p className="mt-0.5 truncate text-[12px] font-semibold text-neutral-900">
                    {SiteConfig.email}
                  </p>
                </div>
                <RiArrowRightUpLine className="size-3.5 text-neutral-400 group-hover:text-primary" />
              </Link>
            </div>

            <div className="mt-6 flex items-start gap-2 rounded-xl border border-neutral-900/10 bg-white/50 p-3">
              <RiMapPinLine className="mt-0.5 size-3.5 shrink-0 text-primary" />
              <p className="text-[11px] leading-relaxed text-neutral-600">
                {SiteConfig.streetAddress}, {SiteConfig.location}
                <br />
                <span className="text-neutral-500">
                  {SiteConfig.city}, {SiteConfig.country}
                </span>
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              <span className="inline-flex items-center gap-1">
                <RiStarFill className="size-2.5 text-primary" />
                5.0
              </span>
              <span className="size-1 rounded-full bg-neutral-300" />
              <span>500+ Reviews</span>
              <span className="size-1 rounded-full bg-neutral-300" />
              <span>24/7</span>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
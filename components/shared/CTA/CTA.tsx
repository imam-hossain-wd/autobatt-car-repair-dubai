import { SiteConfig } from "@/config/siteConfig";
import { RiArrowRightLine, RiArrowRightUpLine, RiPhoneFill, RiWhatsappFill } from "@remixicon/react";
import Link from "next/link";


export default function CTA() {
      const {
        displayNumber,
        numberCallLink,
        whatsappCallLink,
      } = SiteConfig;
  return (
    <div>
          <section className="relative border-b border-neutral-900/10 py-8">
        <div className="w-[90%] mx-auto ">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            {/* Left: Big statement */}
            <div className="lg:col-span-8">

              <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.02] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                Car trouble?{" "}
                <span className="relative inline-block italic">
                  <span className="relative z-10">We come to you.</span>
                  <span className="absolute inset-x-0 bottom-1 z-0 h-[0.22em] bg-primary/25" />
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-600">
                Certified mechanics. Genuine parts. 5–30 min response across
                every district in Dubai — day or night, on demand.
              </p>
            </div>

            {/* Right: CTA buttons */}
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <Link
                href={numberCallLink}
                className="group inline-flex h-14 w-full items-center justify-between gap-4 rounded-2xl bg-neutral-900 px-5 text-sm font-bold text-white transition-all duration-200 hover:bg-neutral-800 lg:w-auto lg:min-w-[280px]"
              >
                <span className="flex items-center gap-2.5">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-white/10">
                    <RiPhoneFill className="size-3.5" />
                  </span>
                  <span>{displayNumber}</span>
                </span>
                <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href={whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 w-full items-center justify-between gap-4 rounded-2xl border border-emerald-600/30 bg-emerald-50 px-5 text-sm font-bold text-emerald-700 transition-all duration-200 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white lg:w-auto lg:min-w-[280px]"
              >
                <span className="flex items-center gap-2.5">
                  <RiWhatsappFill className="size-4" />
                  <span>WhatsApp Dispatch</span>
                </span>
                <RiArrowRightUpLine className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

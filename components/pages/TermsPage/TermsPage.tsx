import Link from "next/link";
import {
    RiShieldCheckFill,
    RiArrowRightLine,
    RiMailLine,
    RiPhoneFill,
    RiMapPinFill,
    RiTimeFill,
    RiFileTextLine,
    RiUserLine,
    RiCheckboxCircleFill,
    RiAlertLine,
    RiMoneyDollarCircleLine,
    RiToolsFill,
    RiFileShieldLine,
    RiScalesLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";


/* ============ JSON-LD Structured Data ============ */
function TermsSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Terms of Service",
        description:
            "Terms of service for AutoBatt Car Repair Mobile Mechanic Dubai.",
        url: `${SiteConfig.url}/terms`,
        isPartOf: {
            "@type": "WebSite",
            name: SiteConfig.brandName,
            url: SiteConfig.url,
        },
        about: {
            "@type": "Organization",
            name: SiteConfig.brandName,
            url: SiteConfig.url,
            email: SiteConfig.email,
            telephone: SiteConfig.displayNumber,
            address: {
                "@type": "PostalAddress",
                streetAddress: SiteConfig.streetAddress,
                addressLocality: SiteConfig.location,
                addressRegion: SiteConfig.city,
                addressCountry: SiteConfig.country,
            },
        },
        dateModified: "2026-11-07",
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/* ============ Decorative Section Index (no links) ============ */
const SECTIONS = [
    "About These Terms",
    "Our Services",
    "Booking & Appointments",
    "Pricing & Payment",
    "Cancellations & Refunds",
    "Warranty & Guarantees",
    "Your Responsibilities",
    "Liability & Limitations",
    "Service Area & Access",
    "Third-Party Services",
    "Intellectual Property",
    "Governing Law",
    "Changes to These Terms",
    "Contact Us",
];

export default function TermsPage() {
    const {
        brandName,
        email,
        displayNumber,
        numberCallLink,
        streetAddress,
        location,
        city,
        country,
        url,
        foundedYear,
    } = SiteConfig;

    return (
        <main className="relative w-full overflow-hidden bg-[oklch(0.985_0.003_90)]">
            <TermsSchema />

            {/* ============================================================
                HEADER — Editorial chapter opening
            ============================================================ */}
            <section className="relative border-b border-foreground/10 py-12 sm:py-16 lg:py-20">
                <div className="pointer-events-none absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-[0.5]"
                        style={{
                            backgroundImage: `radial-gradient(circle, oklch(0.4 0.02 90) 0.5px, transparent 0.5px)`,
                            backgroundSize: "8px 8px",
                            maskImage:
                                "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 90%)",
                            WebkitMaskImage:
                                "radial-gradient(ellipse 90% 80% at 50% 40%, black 20%, transparent 90%)",
                        }}
                    />
                    <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary/[0.05] blur-[140px]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
                </div>

                <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-[11px] font-medium text-foreground/50">
                        <Link href="/" className="transition-colors hover:text-primary">
                            Home
                        </Link>
                        <span className="text-foreground/25">/</span>
                        <span className="text-foreground">Terms of Service</span>
                    </nav>

                    {/* Chapter marker */}
                    <div className="mt-6 flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-full border border-foreground/15 bg-white font-serif text-xs font-bold italic text-primary shadow-sm">
                            ToS
                        </span>
                        <div className="h-px w-10 bg-foreground/20" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50">
                            Service Agreement
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="mt-6 text-[2rem] font-bold leading-[1.05] -tracking-[0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                        Terms of{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 italic text-primary">
                                Service
                            </span>
                            <svg
                                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-primary/35"
                                viewBox="0 0 200 10"
                                fill="none"
                                preserveAspectRatio="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M2 7C50 2 120 1 198 5"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground/60 sm:text-base">
                        The rules that govern your use of {brandName}&rsquo;s
                        website and mobile mechanic services across Dubai. We
                        keep it clear and honest — no legalese, no hidden
                        traps.
                    </p>

                    {/* Meta row */}
                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-foreground/50">
                        <span className="inline-flex items-center gap-1.5">
                            <RiTimeFill className="size-3.5 text-primary" />
                            Last updated: November 2026
                        </span>
                        <span className="hidden size-1 rounded-full bg-foreground/20 sm:inline-block" />
                        <span className="inline-flex items-center gap-1.5">
                            <RiFileShieldLine className="size-3.5 text-primary" />
                            UAE consumer law compliant
                        </span>
                        <span className="hidden size-1 rounded-full bg-foreground/20 sm:inline-block" />
                        <span className="inline-flex items-center gap-1.5">
                            <RiScalesLine className="size-3.5 text-primary" />
                            Governing law: UAE
                        </span>
                    </div>
                </div>
            </section>

            {/* ============================================================
                CONTENT — Two-column layout with decorative index
            ============================================================ */}
            <section className="relative py-12 sm:py-16">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">

                        {/* ============================================
                            SIDEBAR: Section Index (decorative, no links)
                        ============================================ */}
                        <aside className="hidden lg:col-span-3 lg:block">
                            <div className="sticky top-24">
                                <div className="flex items-center gap-2">
                                    <RiFileTextLine className="size-4 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                                        What's covered
                                    </span>
                                </div>
                                <div className="mt-4 space-y-1">
                                    {SECTIONS.map((label, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground/60"
                                        >
                                            <span className="font-serif text-[10px] font-bold italic text-foreground/30">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            {label}
                                        </div>
                                    ))}
                                </div>

                                {/* Contact card */}
                                <div className="mt-8 rounded-xl border border-foreground/10 bg-white p-4">
                                    <div className="flex items-center gap-2">
                                        <RiShieldCheckFill className="size-4 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                                            Questions?
                                        </span>
                                    </div>
                                    <p className="mt-2 text-xs leading-relaxed text-foreground/60">
                                        Reach out anytime — we respond fast.
                                    </p>
                                    <a
                                        href={numberCallLink}
                                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary/80"
                                    >
                                        <RiPhoneFill className="size-3" />
                                        {displayNumber}
                                    </a>
                                </div>
                            </div>
                        </aside>

                        {/* ============================================
                            MAIN CONTENT
                        ============================================ */}
                        <div className="lg:col-span-9">
                            <div className="space-y-10">

                                {/* 1. About These Terms */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            01
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            About These Terms
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            These Terms of Service
                                            (&ldquo;Terms&rdquo;) form a legal
                                            agreement between you
                                            (&ldquo;you&rdquo;,
                                            &ldquo;customer&rdquo;) and{" "}
                                            {brandName} (&ldquo;we&rdquo;,
                                            &ldquo;us&rdquo;, &ldquo;our&rdquo;).
                                            They apply whenever you:
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "Use our website or contact us through it",
                                                "Book or request a mobile mechanic service",
                                                "Receive a quote or accept a repair",
                                                "Message us on WhatsApp or call our dispatch team",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <RiCheckboxCircleFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            By booking a service, you confirm
                                            that you have read and agree to
                                            these Terms. If you don&rsquo;t
                                            agree, please don&rsquo;t use our
                                            services.
                                        </p>
                                    </div>
                                </section>

                                {/* 2. Our Services */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            02
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Our Services
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            {brandName} provides{" "}
                                            <strong className="text-foreground">
                                                mobile car repair, battery, and
                                                roadside assistance services
                                            </strong>{" "}
                                            in Dubai, United Arab Emirates. All
                                            work is performed by qualified
                                            technicians at the location you
                                            specify — home, office, parking, or
                                            roadside.
                                        </p>
                                        <p>
                                            We have been operating since{" "}
                                            <strong className="text-foreground">
                                                {foundedYear}
                                            </strong>
                                            . Our services include (but are not
                                            limited to):
                                        </p>
                                        <ul className="ml-1 grid gap-2 sm:grid-cols-2">
                                            {[
                                                "Car battery replacement",
                                                "Jump start & roadside rescue",
                                                "Computer diagnostics",
                                                "Alternator & starter repair",
                                                "Brake pad & ABS repair",
                                                "AC repair & gas refill",
                                                "Oil change & servicing",
                                                "And 20+ more onsite repairs",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <RiToolsFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            Service availability depends on
                                            your location, vehicle type, and
                                            whether the required parts are in
                                            stock. Some repairs may require a
                                            follow-up visit or may not be
                                            possible at your specific location
                                            (e.g., low-clearance parking).
                                        </p>
                                    </div>
                                </section>

                                {/* 3. Booking & Appointments */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            03
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Booking & Appointments
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            When you book a service, you&rsquo;ll
                                            be asked to provide:
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "Your name and contact number",
                                                "Your vehicle make, model, and year",
                                                "Your exact location or area in Dubai",
                                                "A description of the issue",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <RiUserLine className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            We aim to respond within{" "}
                                            <strong className="text-foreground">
                                                5 to 30 minutes
                                            </strong>{" "}
                                            of your booking request, but exact
                                            arrival times depend on traffic,
                                            weather, and mechanic availability.
                                            Our confirmation message or call is
                                            the actual commitment — not the
                                            initial booking.
                                        </p>
                                        <div className="rounded-xl border border-primary/15 bg-primary/[0.03] p-4">
                                            <p className="text-sm font-semibold text-foreground">
                                                Please confirm the location
                                                carefully.
                                            </p>
                                            <p className="mt-1 text-xs text-foreground/60">
                                                Wrong or incomplete locations
                                                can delay dispatch and may
                                                result in additional charges.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* 4. Pricing & Payment */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            04
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Pricing & Payment
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            <strong className="text-foreground">
                                                All prices are quoted upfront.
                                            </strong>{" "}
                                            We give you a clear, itemized
                                            estimate before any work starts.
                                            You approve the quote before the
                                            mechanic begins the repair.
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "No call-out fee for standard service areas in Dubai",
                                                "No hidden charges — the quote is what you pay",
                                                "Parts and labour are itemized separately",
                                                "Payment is due on completion of the service",
                                                "We accept cash, card, and bank transfer",
                                                "A receipt and warranty details are provided after the service",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <RiMoneyDollarCircleLine className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            If we discover additional issues
                                            during the repair (e.g., a worn
                                            belt behind a failing alternator),
                                            we will pause and give you a new
                                            quote before proceeding. No
                                            additional work is done without
                                            your approval.
                                        </p>
                                    </div>
                                </section>

                                {/* 5. Cancellations & Refunds */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            05
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Cancellations & Refunds
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            <strong className="text-foreground">
                                                Cancel free at any time before
                                                the mechanic arrives.
                                            </strong>{" "}
                                            Once the mechanic is en route, a
                                            cancellation fee may apply to cover
                                            travel time.
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "Cancellation before dispatch: no charge",
                                                "Cancellation after dispatch: travel fee may apply",
                                                "Once work has started: charged for the work already completed",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <RiAlertLine className="mt-0.5 size-3.5 shrink-0 text-destructive" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            If you&rsquo;re unhappy with the
                                            service, contact us within{" "}
                                            <strong className="text-foreground">
                                                7 days
                                            </strong>{" "}
                                            of the service date. We&rsquo;ll
                                            investigate and, where appropriate,
                                            redo the work at no cost or issue a
                                            partial refund.
                                        </p>
                                    </div>
                                </section>

                                {/* 6. Warranty & Guarantees */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            06
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Warranty & Guarantees
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            <strong className="text-foreground">
                                                Parts warranty:
                                            </strong>{" "}
                                            All batteries and components we
                                            supply come with the
                                            manufacturer&rsquo;s warranty
                                            (typically 6–24 months depending on
                                            the part). Warranty details are
                                            provided in writing after the
                                            service.
                                        </p>
                                        <p>
                                            <strong className="text-foreground">
                                                Workmanship guarantee:
                                            </strong>{" "}
                                            If the same problem returns within{" "}
                                            <strong className="text-foreground">
                                                30 days
                                            </strong>{" "}
                                            of the repair due to our
                                            workmanship, we will re-inspect and
                                            fix it at no additional labor cost.
                                        </p>
                                        <p>
                                            The warranty does not cover damage
                                            caused by accidents, misuse,
                                            neglect, unauthorized repairs, or
                                            normal wear-and-tear beyond the
                                            warranty period.
                                        </p>
                                    </div>
                                </section>

                                {/* 7. Your Responsibilities */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            07
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Your Responsibilities
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            To help us serve you safely and
                                            effectively, you agree to:
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "Provide accurate vehicle and location details",
                                                "Ensure the mechanic has safe access to the vehicle",
                                                "Tell us about any known issues, modifications, or safety concerns",
                                                "Be present or reachable during the service",
                                                "Approve work before it begins",
                                                "Pay for completed work as agreed",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <RiCheckboxCircleFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            You are responsible for any
                                            personal belongings inside the
                                            vehicle. We recommend removing
                                            valuables before service.
                                        </p>
                                    </div>
                                </section>

                                {/* 8. Liability & Limitations */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            08
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Liability & Limitations
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            We take our work seriously, but no
                                            mobile repair service can guarantee
                                            that everything will be perfect
                                            every time. Here is what we can and
                                            cannot be responsible for:
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "We are not liable for pre-existing damage or faults we did not cause",
                                                "We are not responsible for delays caused by traffic, weather, or events outside our control",
                                                "We are not liable for indirect or consequential losses (e.g., missed appointments, lost work time)",
                                                "Our total liability for any single service is limited to the amount you paid for that service",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <RiScalesLine className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            Nothing in these Terms limits any
                                            rights you have under UAE consumer
                                            protection law.
                                        </p>
                                    </div>
                                </section>

                                {/* 9. Service Area & Access */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            09
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Service Area & Access
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            We serve all major Dubai areas,
                                            including{" "}
                                            <strong className="text-foreground">
                                                Jebel Ali, Dubai Marina, JLT, Al
                                                Furjan, Discovery Gardens,
                                                Business Bay, Downtown Dubai,
                                                Dubai Silicon Oasis
                                            </strong>
                                            , and more. Some areas may be
                                            temporarily unavailable due to
                                            access restrictions, construction,
                                            or remote locations.
                                        </p>
                                        <p>
                                            If your vehicle is in a location
                                            we cannot safely access (e.g., very
                                            low-clearance parking, private
                                            property, restricted zones), we
                                            may need to arrange an alternative
                                            or cancel the service. In such
                                            cases, you won&rsquo;t be charged
                                            for the cancelled visit.
                                        </p>
                                    </div>
                                </section>

                                {/* 10. Third-Party Services */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            10
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Third-Party Services
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            We use third-party services to run
                                            our business — for example,
                                            WhatsApp for messaging, our hosting
                                            provider for this website, and
                                            payment processors for cards.
                                        </p>
                                        <p>
                                            These services operate under their
                                            own terms and privacy policies. We
                                            are not responsible for their
                                            availability, security, or data
                                            practices. If you prefer not to use
                                            a third-party service (e.g.,
                                            WhatsApp), let us know and we can
                                            communicate by phone or email
                                            instead.
                                        </p>
                                    </div>
                                </section>

                                {/* 11. Intellectual Property */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            11
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Intellectual Property
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            All content on this website —
                                            including text, images, logos,
                                            design, and code — is owned by{" "}
                                            {brandName} or its licensors and is
                                            protected by copyright and
                                            trademark laws.
                                        </p>
                                        <p>
                                            You may view, print, and share
                                            pages for personal, non-commercial
                                            use. You may not copy, modify,
                                            republish, or use our content for
                                            commercial purposes without written
                                            permission.
                                        </p>
                                    </div>
                                </section>

                                {/* 12. Governing Law */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            12
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Governing Law
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            These Terms are governed by the
                                            laws of the{" "}
                                            <strong className="text-foreground">
                                                United Arab Emirates
                                            </strong>{" "}
                                            and the Emirate of{" "}
                                            <strong className="text-foreground">
                                                Dubai
                                            </strong>
                                            . Any dispute will be resolved
                                            under the jurisdiction of the
                                            courts of Dubai.
                                        </p>
                                        <p>
                                            Before taking legal action, we
                                            encourage you to contact us
                                            directly — most issues can be
                                            resolved quickly and informally.
                                        </p>
                                    </div>
                                </section>

                                {/* 13. Changes to These Terms */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            13
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Changes to These Terms
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            We may update these Terms
                                            occasionally. When we do, we&rsquo;ll
                                            change the &ldquo;last updated&rdquo;
                                            date at the top and, for significant
                                            changes, notify active customers by
                                            phone or WhatsApp.
                                        </p>
                                        <p>
                                            Continued use of our website or
                                            services after a change means you
                                            accept the updated Terms.
                                        </p>
                                    </div>
                                </section>

                                {/* 14. Contact Us */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            14
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Contact Us About These Terms
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            If you have questions about these
                                            Terms, want to raise a concern, or
                                            need a copy of the agreement,
                                            contact us:
                                        </p>
                                    </div>

                                    {/* Contact card */}
                                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        <a
                                            href={numberCallLink}
                                            className="group flex items-start gap-3 rounded-xl border border-foreground/10 bg-white p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                                        >
                                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                                <RiPhoneFill className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
                                            </span>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                                                    Phone
                                                </p>
                                                <p className="mt-0.5 text-sm font-semibold text-foreground">
                                                    {displayNumber}
                                                </p>
                                            </div>
                                        </a>

                                        <a
                                            href={`mailto:${email}`}
                                            className="group flex items-start gap-3 rounded-xl border border-foreground/10 bg-white p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                                        >
                                            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                                                <RiMailLine className="size-4 text-primary transition-colors group-hover:text-primary-foreground" />
                                            </span>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                                                    Email
                                                </p>
                                                <p className="mt-0.5 break-all text-sm font-semibold text-foreground">
                                                    {email}
                                                </p>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="mt-4 flex items-start gap-3 rounded-xl border border-foreground/10 bg-white p-4">
                                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                            <RiMapPinFill className="size-4 text-primary" />
                                        </span>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/40">
                                                Address
                                            </p>
                                            <p className="mt-0.5 text-sm font-semibold text-foreground">
                                                {streetAddress}, {location},{" "}
                                                {city}, {country}
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Back to top / Home */}
                            <div className="mt-12 flex items-center justify-between border-t border-foreground/10 pt-6">
                                <Link
                                    href="/"
                                    className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/50 transition-colors hover:text-primary"
                                >
                                    <RiArrowRightLine className="size-3.5 rotate-180 transition-transform group-hover:-translate-x-0.5" />
                                    Back to Home
                                </Link>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/30">
                                    {brandName}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
// app/(marketing)/privacy/page.tsx

import Link from "next/link";
import {
    RiShieldCheckFill,
    RiArrowRightLine,
    RiMailLine,
    RiPhoneFill,
    RiMapPinFill,
    RiTimeFill,
    RiFileTextLine,
    RiLockLine,
    RiUserLine,
    RiShareLine,
    RiCheckboxCircleFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";

/* ============ JSON-LD Structured Data ============ */
function PrivacySchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy",
        description:
            "Privacy policy for AutoBatt Car Repair Mobile Mechanic Dubai.",
        url: `${SiteConfig.url}/privacy`,
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

/* ============ Section Index (decorative only, no links) ============ */
const SECTIONS = [
    "Who We Are",
    "What We Collect",
    "How We Use It",
    "WhatsApp & Phone",
    "Cookies & Analytics",
    "Who We Share With",
    "How Long We Keep It",
    "Your Rights",
    "Data Security",
    "Children's Privacy",
    "Changes to This Policy",
    "Contact Us",
];

export default function PrivacyPage() {
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
    } = SiteConfig;

    return (
        <main className="relative w-full overflow-hidden bg-[oklch(0.985_0.003_90)]">
            <PrivacySchema />

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
                        <span className="text-foreground">Privacy Policy</span>
                    </nav>

                    {/* Chapter marker */}
                    <div className="mt-6 flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-full border border-foreground/15 bg-white font-serif text-xs font-bold italic text-primary shadow-sm">
                            PP
                        </span>
                        <div className="h-px w-10 bg-foreground/20" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50">
                            Trust & Transparency
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="mt-6 text-[2rem] font-bold leading-[1.05] -tracking-[0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                        Privacy{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 italic text-primary">
                                Policy
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
                        How {brandName} collects, uses, and protects your personal
                        information when you use our website, book a mobile
                        mechanic, or contact our team. We keep it plain and
                        honest — no legal jargon.
                    </p>

                    {/* Meta row */}
                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-foreground/50">
                        <span className="inline-flex items-center gap-1.5">
                            <RiTimeFill className="size-3.5 text-primary" />
                            Last updated: November 2026
                        </span>
                        <span className="hidden size-1 rounded-full bg-foreground/20 sm:inline-block" />
                        <span className="inline-flex items-center gap-1.5">
                            <RiShieldCheckFill className="size-3.5 text-primary" />
                            UAE data protection compliant
                        </span>
                        <span className="hidden size-1 rounded-full bg-foreground/20 sm:inline-block" />
                        <span className="inline-flex items-center gap-1.5">
                            <RiLockLine className="size-3.5 text-primary" />
                            GDPR-ready
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

                                {/* 1. Who We Are */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            01
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Who We Are
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            {brandName} (&ldquo;we&rdquo;,
                                            &ldquo;us&rdquo;, &ldquo;our&rdquo;)
                                            operates{" "}
                                            <a
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                                            >
                                                {url.replace("https://", "")}
                                            </a>{" "}
                                            and provides mobile car repair and
                                            battery services across Dubai, United
                                            Arab Emirates.
                                        </p>
                                        <p>
                                            We are based at{" "}
                                            <strong className="text-foreground">
                                                {streetAddress}, {location},{" "}
                                                {city}, {country}
                                            </strong>
                                            . For any privacy-related question,
                                            contact us at{" "}
                                            <a
                                                href={`mailto:${email}`}
                                                className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                                            >
                                                {email}
                                            </a>{" "}
                                            or call{" "}
                                            <a
                                                href={numberCallLink}
                                                className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                                            >
                                                {displayNumber}
                                            </a>
                                            .
                                        </p>
                                        <p>
                                            This policy explains what personal
                                            information we collect through our
                                            website and services, why we collect
                                            it, and what we do — and don&rsquo;t
                                            do — with it. It applies to all
                                            visitors, customers, and anyone who
                                            contacts us.
                                        </p>
                                    </div>
                                </section>

                                {/* 2. What We Collect */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            02
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            What Information We Collect
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            When you contact us through our
                                            website, WhatsApp, or phone, we
                                            collect the details you choose to
                                            share. This typically includes:
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "Your name and phone number",
                                                "Your car make, model, and year",
                                                "Your location or service area in Dubai",
                                                "A description of the issue or service you need",
                                                "Your preferred contact method (call, WhatsApp, or email)",
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
                                            If you call or message us on
                                            WhatsApp, we naturally receive your
                                            phone number and whatever you choose
                                            to share about your vehicle or
                                            location.
                                        </p>
                                        <p>
                                            Like most websites, our hosting
                                            provider automatically records
                                            technical data such as your IP
                                            address, browser type, and the pages
                                            you visit. This is used for security
                                            and to keep the site working
                                            properly.
                                        </p>
                                    </div>
                                </section>

                                {/* 3. How We Use It */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            03
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            How We Use Your Information
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            We use your information only for
                                            these purposes:
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "Responding to your enquiry and providing a quote",
                                                "Dispatching a mechanic to your location",
                                                "Communicating about your booking, repair, or warranty",
                                                "Keeping service records for future reference",
                                                "Meeting legal, tax, and regulatory obligations",
                                                "Improving our website and services based on how they are used",
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
                                        <div className="rounded-xl border border-primary/15 bg-primary/[0.03] p-4">
                                            <p className="text-sm font-semibold text-foreground">
                                                We do not sell, rent, or trade
                                                your personal information.
                                            </p>
                                            <p className="mt-1 text-xs text-foreground/60">
                                                Your data is used only to serve
                                                you — never for third-party
                                                marketing.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* 4. WhatsApp & Phone */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            04
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            WhatsApp & Phone Communication
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            If you choose WhatsApp as your
                                            contact method, we&rsquo;ll message
                                            you there about your quote or repair.
                                            You can ask us to stop messaging at
                                            any time, and we will.
                                        </p>
                                        <p>
                                            When you message us on WhatsApp,
                                            that conversation is also processed
                                            by WhatsApp under its own privacy
                                            policy. We only use the information
                                            you share with us for the purposes
                                            described in this policy.
                                        </p>
                                    </div>
                                </section>

                                {/* 5. Cookies & Analytics */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            05
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Cookies & Analytics
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            Our website may use basic cookies to
                                            make the site work properly — for
                                            example, remembering your
                                            preferences or keeping the site
                                            secure.
                                        </p>
                                        <p>
                                            We do not use advertising trackers
                                            or sell data to ad networks. If we
                                            add analytics tools in the future,
                                            this policy will be updated to
                                            disclose what is collected and why.
                                        </p>
                                        <p>
                                            You can block or delete cookies in
                                            your browser settings. The site will
                                            still work, but some features may be
                                            affected.
                                        </p>
                                    </div>
                                </section>

                                {/* 6. Who We Share With */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            06
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Who We Share Your Information With
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            We share personal data only with
                                            service providers who help us run
                                            the business, and only as much as
                                            they need:
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "Our website hosting provider, which serves this site",
                                                "Our messaging and email providers, for communication",
                                                "WhatsApp, if you choose to message us there",
                                                "Payment processors, if you pay by card",
                                                "Professional advisers or authorities, where required by law",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <RiShareLine className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            Some of these providers may process
                                            data on servers outside the UAE.
                                            Where that happens, we rely on the
                                            provider&rsquo;s contractual data
                                            protection commitments.
                                        </p>
                                    </div>
                                </section>

                                {/* 7. Retention */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            07
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            How Long We Keep Your Information
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            We keep enquiry records only as long
                                            as needed to serve you. This
                                            typically means:
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "Unconverted enquiries: kept while the request is still active, then deleted",
                                                "Service records: kept for warranty and follow-up purposes",
                                                "Invoices and financial records: kept as required by UAE tax law",
                                                "Marketing preferences: kept to respect your opt-out choices",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <RiTimeFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            If you&rsquo;d like your details
                                            deleted, just ask (see Your Rights
                                            below) and we&rsquo;ll remove them
                                            unless we have a legal obligation to
                                            keep them.
                                        </p>
                                    </div>
                                </section>

                                {/* 8. Your Rights */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            08
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Your Privacy Rights
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            You can ask us at any time to:
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "Tell you what information we hold about you",
                                                "Correct inaccurate or incomplete information",
                                                "Delete your information (where legally possible)",
                                                "Stop sending you marketing messages",
                                                "Provide a copy of your data in a portable format",
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
                                            To exercise any of these rights,
                                            contact us at{" "}
                                            <a
                                                href={`mailto:${email}`}
                                                className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                                            >
                                                {email}
                                            </a>{" "}
                                            or call{" "}
                                            <a
                                                href={numberCallLink}
                                                className="font-medium text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary"
                                            >
                                                {displayNumber}
                                            </a>
                                            . We&rsquo;ll respond within a
                                            reasonable time.
                                        </p>
                                    </div>
                                </section>

                                {/* 9. Security */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            09
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            How We Protect Your Data
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            We use reasonable technical and
                                            organizational measures to protect
                                            your information, including:
                                        </p>
                                        <ul className="ml-1 space-y-2">
                                            {[
                                                "SSL encryption for website transactions",
                                                "Restricted access to customer data within our team",
                                                "Secure storage of records in compliance with UAE law",
                                            ].map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-2.5"
                                                >
                                                    <RiLockLine className="mt-0.5 size-3.5 shrink-0 text-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p>
                                            No system can guarantee complete
                                            security. If you believe your data
                                            has been compromised, contact us
                                            immediately.
                                        </p>
                                    </div>
                                </section>

                                {/* 10. Children's Privacy */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            10
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Children&rsquo;s Privacy
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            Our services are intended for adults
                                            aged 18 and over. We do not
                                            knowingly collect personal data from
                                            children. If we discover that a
                                            child has submitted personal
                                            information, we will delete it
                                            promptly.
                                        </p>
                                    </div>
                                </section>

                                {/* 11. Changes */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            11
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Changes to This Policy
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            If we change how we handle
                                            information, we&rsquo;ll update this
                                            page and change the &ldquo;last
                                            updated&rdquo; date at the top. We
                                            encourage you to review this page
                                            occasionally.
                                        </p>
                                    </div>
                                </section>

                                {/* 12. Contact */}
                                <section>
                                    <div className="flex items-center gap-3">
                                        <span className="font-serif text-sm font-bold italic text-primary">
                                            12
                                        </span>
                                        <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                            Contact Us About Privacy
                                        </h2>
                                    </div>
                                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/70">
                                        <p>
                                            If you have any questions about this
                                            policy or how we handle your data,
                                            reach out:
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
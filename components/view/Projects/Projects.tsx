// app/(marketing)/_components/projects.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiTimeFill,
    RiMapPinFill,
    RiGridFill,
    RiPhoneFill,
    RiFileTextLine,
    RiSearchLine,
    RiArrowDownLine,
    RiCheckboxCircleFill,
    RiDoubleQuotesL,
    RiFolderLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { projectData } from "@/data/ProjectData";
import { Project } from "@/types/projects";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import ProjectModal from "@/components/shared/Modal/ProjectModal";


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { city, responseTime } = SiteConfig;

    const openProject = (project: Project) => {
        const index = projectData.findIndex((p) => p.title === project.title);
        setCurrentIndex(index >= 0 ? index : 0);
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeProject = () => {
        setSelectedProject(null);
        document.body.style.overflow = "";
    };

    const navigateProject = (direction: "next" | "prev") => {
        if (direction === "next" && currentIndex < projectData.length - 1) {
            const next = projectData[currentIndex + 1];
            setCurrentIndex(currentIndex + 1);
            setSelectedProject(next);
        }
        if (direction === "prev" && currentIndex > 0) {
            const prev = projectData[currentIndex - 1];
            setCurrentIndex(currentIndex - 1);
            setSelectedProject(prev);
        }
    };

    /* ---- Data slicing ---- */
    const featuredProject = projectData[0];
    const gridProjects = projectData.slice(1, 5);

    return (
        <section className="relative w-full overflow-hidden bg-[oklch(0.985_0.003_90)] py-10">
            {/* ============================================================
                BACKGROUND — Paper texture + editorial accents
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Warm paper grain */}
                <div
                    className="absolute inset-0 opacity-[0.5]"
                    style={{
                        backgroundImage: `radial-gradient(circle, oklch(0.4 0.02 90) 0.5px, transparent 0.5px)`,
                        backgroundSize: "8px 8px",
                        maskImage:
                            "radial-gradient(ellipse 90% 80% at 50% 30%, black 20%, transparent 90%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 90% 80% at 50% 30%, black 20%, transparent 90%)",
                    }}
                />

                {/* Soft primary wash — top-right */}
                <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/[0.06] blur-[140px]" />

                {/* Bottom-left warm accent */}
                <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.85_0.1_60)]/15 blur-[140px]" />

                {/* Top hairline */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ============================================================
                    SECTION HEADER — Editorial chapter style
                ============================================================ */}
                <div className="mb-14 lg:mb-20">
                    <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">

                        {/* LEFT: Chapter mark + headline (7 cols) */}
                        <div className="lg:col-span-7">
                            {/* Chapter marker */}
                            <div className="mb-6 flex items-center gap-3">
                                <span className="flex size-10 items-center justify-center rounded-full border border-foreground/15 bg-white font-serif text-sm font-bold italic text-primary shadow-sm">
                                    03
                                </span>
                                <div className="h-px w-12 bg-foreground/20" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50">
                                    The Case Archive
                                </span>
                            </div>

                            {/* Massive headline */}
                            <h2 className="text-[2.4rem] font-bold leading-[0.98] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[4rem]">
                                Real repairs from{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 italic text-primary">
                                        Dubai roads
                                    </span>
                                    <svg
                                        className="absolute -bottom-2 left-0 h-3 w-full text-primary/40"
                                        viewBox="0 0 300 12"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M3 9C60 3 140 2 297 6"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </h2>
                        </div>

                        {/* RIGHT: Pull quote + meta (5 cols) */}
                        <div className="lg:col-span-5">
                            <div className="relative pl-6">
                                <RiDoubleQuotesL
                                    className="absolute -left-1 -top-3 size-8 text-primary/15"
                                    aria-hidden="true"
                                />
                                <p className="font-serif text-base italic leading-relaxed text-foreground/75 sm:text-lg">
                                    Every case documented — diagnostic scans,
                                    parts replaced, response time, and outcome.
                                </p>
                                <div className="mt-4 flex items-center gap-3">
                                    <RiFolderLine className="size-4 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50">
                                        {projectData.length} documented cases
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    EDITORIAL GRID — Featured + 2×2 supporting
                ============================================================ */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
                    {/* Featured project — tall card (5 cols) */}
                    <div className="lg:col-span-5">
                        <ProjectCard
                            project={featuredProject}
                            index={0}
                            variant="featured"
                            onClick={() => openProject(featuredProject)}
                            className="h-full"
                        />
                    </div>

                    {/* Supporting 2×2 grid (7 cols) */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7 lg:gap-6">
                        {gridProjects.map((project, idx) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={idx + 1}
                                onClick={() => openProject(project)}
                            />
                        ))}
                    </div>
                </div>

                {/* ============================================================
                    CASE INDEX STRIP — Ticker-style metadata
                ============================================================ */}
                <div className="relative mt-10 overflow-hidden rounded-2xl border border-foreground/10 bg-white shadow-[0_2px_12px_-4px_oklch(0.2_0.02_90/0.06)] sm:mt-12">
                    {/* Corner marks */}
                    <div className="pointer-events-none absolute left-3 top-3 size-6">
                        <div className="absolute left-0 top-0 h-px w-5 bg-primary/40" />
                        <div className="absolute left-0 top-0 h-5 w-px bg-primary/40" />
                    </div>

                    <div className="flex flex-col items-start justify-between gap-4 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
                        {/* Left: File label */}
                        <div className="flex items-center gap-3">
                            <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                                <RiFileTextLine className="size-4 text-primary" />
                            </span>
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                                    Case Index
                                </p>
                                <p className="text-xs font-bold text-foreground">
                                    Documented repairs · {city}
                                </p>
                            </div>
                        </div>

                        {/* Middle: Inline stats */}
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                            {[
                                {
                                    icon: RiGridFill,
                                    value: `${projectData.length}+`,
                                    label: "Cases",
                                },
                                {
                                    icon: RiTimeFill,
                                    value: responseTime,
                                    label: "Response",
                                },
                                {
                                    icon: RiMapPinFill,
                                    value: "16+",
                                    label: "Areas",
                                },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={i}
                                        className="inline-flex items-center gap-1.5"
                                    >
                                        <Icon className="size-3 text-primary" />
                                        <span className="text-xs font-bold text-foreground">
                                            {item.value}
                                        </span>
                                        <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/40">
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right: CTA */}
                        <Link
                            href="/projects"
                            className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-background transition-all hover:bg-primary"
                        >
                            Full archive
                            <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>

                {/* ============================================================
                    BOTTOM CTA — "Book a repair" editorial banner
                ============================================================ */}
                <div className="mt-12 lg:mt-16">
                    <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-white via-white to-primary/[0.04] shadow-[0_4px_20px_-4px_oklch(0.2_0.02_90/0.08)]">
                        {/* Corner marks */}
                        <div className="pointer-events-none absolute left-4 top-4 size-8">
                            <div className="absolute left-0 top-0 h-px w-6 bg-primary/50" />
                            <div className="absolute left-0 top-0 h-6 w-px bg-primary/50" />
                        </div>
                        <div className="pointer-events-none absolute bottom-4 right-4 size-8">
                            <div className="absolute bottom-0 right-0 h-px w-6 bg-primary/50" />
                            <div className="absolute bottom-0 right-0 h-6 w-px bg-primary/50" />
                        </div>

                        <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-9 lg:grid-cols-12 lg:p-11">
                            {/* Left: Content (7 cols) */}
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1">
                                    <RiCheckboxCircleFill className="size-3 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                                        Ready when you are
                                    </span>
                                </div>

                                <h3 className="mt-4 text-2xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-3xl lg:text-[2.25rem]">
                                    Your car could be our{" "}
                                    <span className="italic text-primary">
                                        next case
                                    </span>
                                </h3>

                                <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/60 sm:text-base">
                                    One call gets you a certified mechanic at
                                    your door. No towing, no workshop queues —
                                    just a documented fix, on-site.
                                </p>

                                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                                    {[
                                        "No call-out fee",
                                        "Workmanship guarantee",
                                        "24/7 dispatch",
                                    ].map((point) => (
                                        <span
                                            key={point}
                                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-foreground/60"
                                        >
                                            <span className="size-1 rounded-full bg-primary" />
                                            {point}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right: CTAs (5 cols) */}
                            <div className="flex flex-col gap-3 lg:col-span-5">
                                <Link
                                    href={SiteConfig.numberCallLink}
                                    className="group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-foreground px-6 text-sm font-bold text-background shadow-lg shadow-foreground/20 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/30"
                                >
                                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                    <RiPhoneFill className="relative size-4" />
                                    <span className="relative">
                                        {SiteConfig.displayNumber}
                                    </span>
                                    <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>

                                <Link
                                    href="/services"
                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-foreground/15 bg-white px-6 text-sm font-bold text-foreground transition-all hover:border-primary hover:text-primary"
                                >
                                    Browse all services
                                    <RiArrowRightUpLine className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    currentIndex={currentIndex}
                    totalProjects={projectData.length}
                    onClose={closeProject}
                    onNavigate={navigateProject}
                />
            )}
        </section>
    );
}
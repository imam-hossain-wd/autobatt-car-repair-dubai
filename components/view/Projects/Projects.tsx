// app/(marketing)/_components/projects.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiFlashlightFill,
    RiTimeFill,
    RiCarFill,
    RiMapPinFill,
    RiGridFill,
    RiPhoneFill,
} from "@remixicon/react";
import { Project } from "@/types/project";
import { SiteConfig } from "@/config/siteConfig";
import ProjectModal from "@/components/shared/Modal/ProjectModal";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import { projectData } from "@/data/projectData";


export function Projects() {
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

    /* ---- Data slicing for editorial layout ---- */
    const featuredProject = projectData[0];
    const gridProjects = projectData.slice(1, 5); // 4 items → 2x2 grid next to featured

    return (
        <section className="relative w-full overflow-hidden bg-neutral-950 py-8">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Large primary glow */}
                <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/[0.10] blur-[130px]" />

                {/* Corner glow */}
                <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/[0.08] blur-[120px]" />

                {/* Radial dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.20]"
                    style={{
                        backgroundImage: `radial-gradient(circle, oklch(1 0 0) 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                        maskImage:
                            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 80%)",
                    }}
                />

                {/* Fine vertical hairlines */}
                <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
                <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />

                {/* Top + bottom hairlines */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* ============================================================
                    SECTION HEADER
                ============================================================ */}
                <div className="mb-10">
                    {/* Eyebrow row */}
                    {/* <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.10] px-3.5 py-1.5 backdrop-blur-sm">
                            <span className="relative flex size-1.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                Recent Work
                            </span>
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-white/10 to-transparent" />
                    </div> */}

                    {/* Headline + Stats */}
                    <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
                                Real Cases from{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-primary">
                                        Dubai Roads
                                    </span>
                                    <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-primary/20" />
                                </span>
                            </h2>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                                Click any case to see the full diagnostic,
                                repair steps, and outcome — documented work
                                from our mobile units across {city}.
                            </p>
                        </div>

                        {/* Trust chips */}
                        <div className="flex flex-wrap items-center gap-2.5">
                            <StatChip
                                icon={<RiFlashlightFill className="size-3.5" />}
                                label="Real Repairs"
                            />
                            <StatChip
                                icon={<RiTimeFill className="size-3.5" />}
                                label={`${responseTime} Response`}
                            />
                            <StatChip
                                icon={<RiGridFill className="size-3.5" />}
                                label={`${projectData.length} Cases`}
                            />
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    EDITORIAL GRID — Featured + 2×2 supporting
                ============================================================ */}
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
                    {/* Featured (5 cols on desktop) */}
                    <div className="lg:col-span-5">
                        <ProjectCard
                            project={featuredProject}
                            index={0}
                            variant="featured"
                            onClick={() => openProject(featuredProject)}
                            className="h-full"
                        />
                    </div>

                    {/* Supporting 2×2 grid (7 cols on desktop) */}
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
                    BOTTOM CTA BANNER
                ============================================================ */}
                <div className="mt-14 lg:mt-16">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/[0.10] via-neutral-950 to-neutral-950 p-7 sm:p-9 lg:p-11">
                        {/* Corner accents */}
                        <div className="absolute left-0 top-0 size-16">
                            <div className="absolute left-0 top-0 h-px w-10 bg-primary/60" />
                            <div className="absolute left-0 top-0 h-10 w-px bg-primary/60" />
                        </div>
                        <div className="absolute bottom-0 right-0 size-16">
                            <div className="absolute bottom-0 right-0 h-px w-10 bg-primary/60" />
                            <div className="absolute bottom-0 right-0 h-10 w-px bg-primary/60" />
                        </div>

                        {/* Background icon */}
                        <RiCarFill className="pointer-events-none absolute -right-8 -top-8 size-56 text-primary/[0.05]" />

                        {/* Dot grid inside card */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-[0.15]"
                            style={{
                                backgroundImage: `radial-gradient(circle, oklch(1 0 0) 1px, transparent 1px)`,
                                backgroundSize: "24px 24px",
                                maskImage:
                                    "radial-gradient(ellipse at right, black 20%, transparent 70%)",
                                WebkitMaskImage:
                                    "radial-gradient(ellipse at right, black 20%, transparent 70%)",
                            }}
                        />

                        <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-xl">
                                {/* Badge */}
                                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                                    <span className="size-1.5 rounded-full bg-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">
                                        Full Portfolio · {projectData.length}+ Cases
                                    </span>
                                </span>

                                {/* Title */}
                                <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                                    See every repair we've{" "}
                                    <span className="text-primary">
                                        completed
                                    </span>
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
                                    Documented mobile car repair cases from real
                                    drivers across Dubai — with diagnostics,
                                    parts used, and outcomes.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/projects"
                                    className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                                >
                                    View All Projects
                                    <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                                <Link
                                    href={SiteConfig.numberCallLink}
                                    className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border-2 border-white/15 bg-transparent px-6 text-sm font-bold text-white transition-all duration-200 hover:border-primary hover:text-primary"
                                >
                                    <RiPhoneFill className="size-4" />
                                    Book a Repair
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================
                MODAL
            ============================================================ */}
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

/* ============================================================
    SUB-COMPONENT: Stat Chip
============================================================ */
function StatChip({
    icon,
    label,
}: {
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm transition-colors hover:border-primary/40">
            <span className="flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                {icon}
            </span>
            <span className="text-xs font-bold text-white">{label}</span>
        </div>
    );
}
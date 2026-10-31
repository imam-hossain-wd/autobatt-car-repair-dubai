// components/shared/Modal/ProjectModal.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  RiCloseLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiMapPinFill,
  RiToolsFill,
  RiTimeFill,
  RiCarFill,
  RiAlertLine,
  RiSearchEyeLine,
  RiCheckDoubleLine,
  RiFileCopyLine,
  RiShareLine,
  RiQuestionLine,
  RiSubtractLine,
  RiAddLine,
  RiCpuLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { Project } from "@/types/projects";

type TabKey = "overview" | "diagnostics" | "solution" | "faq";

export default function ProjectModal({
  project,
  currentIndex,
  totalProjects,
  onClose,
  onNavigate,
}: {
  project: Project;
  currentIndex: number;
  totalProjects: number;
  onClose: () => void;
  onNavigate: (direction: "next" | "prev") => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const folio = String(currentIndex + 1).padStart(2, "0");
  const totalFolio = String(totalProjects).padStart(2, "0");

  const tabs = useMemo(
    () =>
      [
        { key: "overview" as const, label: "Overview", icon: RiCarFill },
        { key: "diagnostics" as const, label: "Diagnostics", icon: RiSearchEyeLine },
        { key: "solution" as const, label: "Solution", icon: RiCheckDoubleLine },
        { key: "faq" as const, label: "FAQ", icon: RiQuestionLine },
      ].filter((t) => {
        if (t.key === "diagnostics") return !!project.diagnosticSteps?.length;
        if (t.key === "solution") return !!project.solutionDetails;
        if (t.key === "faq") return !!project.faqs?.length;
        return true;
      }),
    [project]
  );

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate("next");
      if (e.key === "ArrowLeft") onNavigate("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNavigate]);

  // Reset tab/image when project changes
  useEffect(() => {
    setImageLoaded(false);
    setActiveTab("overview");
    setOpenFaq(0);
  }, [project.id, project.slug]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Case report: ${project.title}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden
      />

      {/* Shell */}
      <div className="relative flex h-full max-h-full w-full max-w-6xl flex-col overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl sm:h-auto sm:max-h-[94vh] sm:rounded-lg">
        {/* ============================================================
            TOP COMMAND BAR
        ============================================================ */}
        <header className="flex shrink-0 items-center justify-between gap-2 border-b border-neutral-800 bg-black/60 px-3 py-2.5 sm:px-5">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1.5">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                Live Report
              </span>
            </div>
            <span className="hidden h-4 w-px bg-neutral-800 sm:block" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              Case <span className="text-primary">{folio}</span> / {totalFolio}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onNavigate("prev")}
              disabled={currentIndex === 0}
              aria-label="Previous case"
              className={cn(
                "flex size-8 items-center justify-center rounded-sm border border-neutral-800 bg-neutral-900 text-neutral-400 transition-all",
                currentIndex === 0
                  ? "cursor-not-allowed opacity-30"
                  : "hover:border-primary/50 hover:text-primary"
              )}
            >
              <RiArrowLeftLine className="size-3.5" />
            </button>
            <button
              onClick={() => onNavigate("next")}
              disabled={currentIndex === totalProjects - 1}
              aria-label="Next case"
              className={cn(
                "flex size-8 items-center justify-center rounded-sm border border-neutral-800 bg-neutral-900 text-neutral-400 transition-all",
                currentIndex === totalProjects - 1
                  ? "cursor-not-allowed opacity-30"
                  : "hover:border-primary/50 hover:text-primary"
              )}
            >
              <RiArrowRightLine className="size-3.5" />
            </button>
            <span className="mx-1 h-4 w-px bg-neutral-800" />
            <button
              onClick={onClose}
              aria-label="Close"
              className="flex size-8 items-center justify-center rounded-sm border border-neutral-800 bg-neutral-900 text-neutral-400 transition-all hover:border-red-500/50 hover:text-red-400"
            >
              <RiCloseLine className="size-3.5" />
            </button>
          </div>
        </header>

        {/* ============================================================
            SCROLLABLE BODY
        ============================================================ */}
        <div className="flex-1 overflow-y-auto">
          {/* ---- HERO: image + title block ---- */}
          <div className="relative grid gap-0 border-b border-neutral-800 md:grid-cols-[1fr_1.1fr]">
            {/* Image panel */}
            <div className="relative aspect-video min-h-[200px] overflow-hidden bg-neutral-900 md:aspect-auto md:min-h-[260px]">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-6 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
                </div>
              )}
              <Image
                src={project.image}
                alt={`${project.title} — ${project.area}, Dubai`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={cn(
                  "object-cover transition-opacity duration-700",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

              {/* Technical corner brackets */}
              <div className="pointer-events-none absolute inset-3">
                <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-primary/70" />
                <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary/70" />
                <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary/70" />
                <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary/70" />
              </div>

              {/* Verified stamp */}
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-sm border border-emerald-500/40 bg-black/70 px-2 py-1 backdrop-blur-sm">
                <RiCheckDoubleLine className="size-3 text-emerald-400" />
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                  Verified Fix
                </span>
              </div>
            </div>

            {/* Title / metadata panel */}
            <div className="relative flex flex-col justify-center gap-4 p-5 sm:p-6">
              {/* Blueprint texture */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              <div className="relative">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-sm border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-primary">
                    <RiToolsFill className="size-2.5" />
                    {project.service}
                  </span>
                  {project.category && (
                    <span className="inline-flex items-center gap-1 rounded-sm border border-neutral-700 bg-neutral-900 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                      {project.category}
                    </span>
                  )}
                </div>

                <h1 className="font-sans text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
                  {project.title}
                </h1>

                {project.problemAnalysis && (
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-neutral-400">
                    {project.problemAnalysis}
                  </p>
                )}
              </div>

              {/* Data grid */}
              <div className="relative grid grid-cols-2 gap-2 sm:grid-cols-4">
                <DataCell
                  icon={RiMapPinFill}
                  label="Location"
                  value={project.area}
                />
                <DataCell
                  icon={RiCarFill}
                  label="Vehicle"
                  value={project.clientOverview?.carModel ?? "—"}
                />
                <DataCell
                  icon={RiTimeFill}
                  label="Response"
                  value={
                    project.clientOverview?.responseTimeMinutes
                      ? `${project.clientOverview.responseTimeMinutes} min`
                      : "—"
                  }
                />
                <DataCell
                  icon={RiCpuLine}
                  label="Duration"
                  value={project.clientOverview?.completionTimeHours ?? "—"}
                />
              </div>
            </div>
          </div>

          {/* ---- TABS ---- */}
          <div className="sticky top-0 z-10 flex overflow-x-auto border-b border-neutral-800 bg-neutral-950/95 backdrop-blur">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "relative flex shrink-0 items-center gap-1.5 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em] transition-colors",
                    active
                      ? "text-primary"
                      : "text-neutral-500 hover:text-neutral-300"
                  )}
                >
                  <Icon className="size-3.5" />
                  {tab.label}
                  {active && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary" />
                  )}
                </button>
              );
            })}
          </div>

          {/* ---- TAB CONTENT ---- */}
          <div className="p-5 sm:p-7">
            {activeTab === "overview" && (
              <OverviewTab project={project} />
            )}
            {activeTab === "diagnostics" && (
              <DiagnosticsTab project={project} />
            )}
            {activeTab === "solution" && (
              <SolutionTab project={project} />
            )}
            {activeTab === "faq" && (
              <FaqTab
                project={project}
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
              />
            )}
          </div>
        </div>

        {/* ============================================================
            FOOTER: progress + actions
        ============================================================ */}
        <footer className="shrink-0 border-t border-neutral-800 bg-black/60">
          <div className="flex items-center justify-between gap-2 px-3 py-2.5 sm:px-5">
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  navigator.clipboard?.writeText(window.location.href)
                }
                className="inline-flex items-center gap-1.5 rounded-sm border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 transition-colors hover:border-primary/50 hover:text-primary"
              >
                <RiFileCopyLine className="size-3" />
                <span className="hidden sm:inline">Copy</span>
              </button>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: project.title,
                        text: `Case: ${project.title}`,
                        url: window.location.href,
                      })
                      .catch(() => {});
                  }
                }}
                className="inline-flex items-center gap-1.5 rounded-sm border border-neutral-800 bg-neutral-900 px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 transition-colors hover:border-primary/50 hover:text-primary"
              >
                <RiShareLine className="size-3" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
              <span className="hidden sm:inline">Navigate</span>
              <kbd className="rounded-sm border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 text-neutral-400">
                ←
              </kbd>
              <kbd className="rounded-sm border border-neutral-800 bg-neutral-900 px-1.5 py-0.5 text-neutral-400">
                →
              </kbd>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-0.5 w-full bg-neutral-900">
            <div
              className="h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50 transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / totalProjects) * 100}%`,
              }}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ============================================================
   SUB-COMPONENTS
============================================================ */

function DataCell({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-sm border border-neutral-800 bg-black/40 p-2">
      <div className="flex items-center gap-1 font-mono text-[8px] uppercase tracking-[0.15em] text-neutral-600">
        <Icon className="size-2.5" />
        {label}
      </div>
      <p className="mt-0.5 truncate font-sans text-xs font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-primary">
      <span className="size-1 bg-primary" />
      {children}
    </h3>
  );
}

function OverviewTab({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      {project.problemAnalysis && (
        <section>
          <SectionHeading>Reported Issue</SectionHeading>
          <div className="flex gap-3 rounded-sm border border-red-500/20 bg-red-500/[0.03] p-3">
            <RiAlertLine className="mt-0.5 size-4 shrink-0 text-red-400" />
            <p className="text-sm leading-relaxed text-neutral-300">
              {project.problemAnalysis}
            </p>
          </div>
        </section>
      )}

      {project.clientOverview?.issueReported && (
        <section>
          <SectionHeading>Client Complaint</SectionHeading>
          <p className="text-sm leading-relaxed text-neutral-400">
            {project.clientOverview.issueReported}
          </p>
        </section>
      )}

      {project.resultsSummary && (
        <section>
          <SectionHeading>Outcome</SectionHeading>
          <div className="flex gap-3 rounded-sm border border-emerald-500/20 bg-emerald-500/[0.03] p-3">
            <RiCheckDoubleLine className="mt-0.5 size-4 shrink-0 text-emerald-400" />
            <p className="text-sm leading-relaxed text-neutral-300">
              {project.resultsSummary}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

function DiagnosticsTab({ project }: { project: Project }) {
  if (!project.diagnosticSteps?.length) return null;
  return (
    <div>
      <SectionHeading>Diagnostic Sequence</SectionHeading>
      <ol className="space-y-2">
        {project.diagnosticSteps.map((step, i) => (
          <li
            key={i}
            className="group flex gap-3 rounded-sm border border-neutral-800 bg-neutral-900/40 p-3 transition-colors hover:border-primary/30"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-sm border border-primary/30 bg-primary/10 font-mono text-[10px] font-bold text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed text-neutral-300">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SolutionTab({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      {project.solutionDetails && (
        <section>
          <SectionHeading>Repair Procedure</SectionHeading>
          <p className="text-sm leading-relaxed text-neutral-300">
            {project.solutionDetails}
          </p>
        </section>
      )}

      {project.partsReplaced?.length && (
        <section>
          <SectionHeading>Parts & Materials</SectionHeading>
          <div className="flex flex-wrap gap-1.5">
            {project.partsReplaced.map((part, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 rounded-sm border border-neutral-700 bg-neutral-900 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-neutral-300"
              >
                <RiSubtractLine className="size-2.5 text-primary" />
                {part}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function FaqTab({
  project,
  openFaq,
  setOpenFaq,
}: {
  project: Project;
  openFaq: number | null;
  setOpenFaq: (i: number | null) => void;
}) {
  if (!project.faqs?.length) return null;
  return (
    <div>
      <SectionHeading>Frequently Asked</SectionHeading>
      <div className="space-y-2">
        {project.faqs.map((faq, i) => {
          const open = openFaq === i;
          return (
            <div
              key={i}
              className="overflow-hidden rounded-sm border border-neutral-800 bg-neutral-900/40"
            >
              <button
                onClick={() => setOpenFaq(open ? null : i)}
                className="flex w-full items-center justify-between gap-3 p-3 text-left transition-colors hover:bg-neutral-900"
              >
                <span className="text-sm font-semibold text-white">
                  {faq.question}
                </span>
                <span className="shrink-0 text-primary">
                  {open ? (
                    <RiSubtractLine className="size-4" />
                  ) : (
                    <RiAddLine className="size-4" />
                  )}
                </span>
              </button>
              {open && (
                <div className="border-t border-neutral-800 px-3 py-3">
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
// import Link from "next/link";
// import Image from "next/image";
// import {
//   RiArrowRightLine,
//   RiPhoneFill,
//   RiWhatsappFill,
//   RiShieldCheckFill,
//   RiTimeFill,
//   RiToolsFill,
//   RiMapPinFill,
//   RiStarFill,
//   RiFlashlightFill,
//   RiCheckboxCircleFill,
//   RiArrowRightUpLine,
// } from "@remixicon/react";
// import { SiteConfig } from "@/config/siteConfig";
// import { heroBanner } from "@/config/imageConfig";

// const STATS = [
//   {
//     icon: RiTimeFill,
//     value: "5–30",
//     unit: "min",
//     label: "Response Time",
//   },
//   {
//     icon: RiShieldCheckFill,
//     value: "100%",
//     unit: "",
//     label: "Certified Pros",
//   },
//   {
//     icon: RiToolsFill,
//     value: "90%",
//     unit: "",
//     label: "Onsite Fix Rate",
//   },
// ];

// const TRUST_POINTS = [
//   "Available 24/7 across Dubai",
//   "No towing required",
//   "Transparent upfront pricing",
// ];

// export function Hero() {
//   const { displayNumber, numberCallLink, whatsappCallLink, responseTime, city } =
//     SiteConfig;

//   return (
//     <section className="relative min-h-[90vh] w-full overflow-hidden bg-foreground lg:min-h-screen">
//       {/* ============ Background decorative layer ============ */}
//       <div className="pointer-events-none absolute inset-0">
//         {/* Primary glow */}
//         <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
//         <div className="absolute -bottom-1/4 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

//         {/* Radial dot grid with mask */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

//         {/* Top + bottom hairline accents */}
//         <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
//         <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
//       </div>

//       <div className="relative container mx-auto flex items-center px-4 py-20 sm:px-6 lg:px-8 lg:py-10">
//         <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
//           {/* ============ LEFT: Content (6 cols) ============ */}
//           <div className="lg:col-span-6">
//             {/* Eyebrow */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
//               <span className="relative flex size-2">
//                 <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
//                 <span className="relative inline-flex size-2 rounded-full bg-primary" />
//               </span>
//               <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
//                 24/7 Emergency · {city}
//               </span>
//             </div>

//             {/* Headline */}
//             <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-background sm:text-5xl lg:text-5xl">
//               {/* Car Breakdown?{" "}
//               <span className="text-primary">We Come To You</span>
//               <br className="hidden sm:block" />
//               <span className="text-background/90">
//                 {" "}in {responseTime}
//               </span> */}

//               {/* 24/7 <span className="text-primary">Mobile Mechanic</span> & <span className="text-primary">On-Site Car Repair Battery </span> Service  in Dubai */}

//                       24/7 <span className="text-primary">Car Battery</span> & <span className="text-primary">Fast Car Repair Mobile Mechanic </span> Service  in Dubai
//             </h1>

//             {/* Description */}
//             <p className="mt-6 max-w-xl text-sm leading-relaxed text-background/60 md:text-base">
//               Fast, reliable roadside assistance and doorstep car repairs delivered directly to your location. Based in Al Jadaf, our certified technicians arrive in 5–30 minutes anywhere across Dubai.
//             </p>

//             {/* Trust points */}
//             <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
//               {TRUST_POINTS.map((point, i) => (
//                 <li
//                   key={i}
//                   className="inline-flex items-center gap-2 text-xs font-medium text-background/70 sm:text-sm"
//                 >
//                   <RiCheckboxCircleFill className="size-3.5 text-primary" />
//                   {point}
//                 </li>
//               ))}
//             </ul>

//             {/* CTA buttons */}
//             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 href={numberCallLink}
//                 className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
//               >
//                 <RiPhoneFill className="size-4" />
//                 <span className="text-base">{displayNumber}</span>
//                 <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
//               </Link>

//               <Link
//                 href={whatsappCallLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border-2 border-background/15 bg-background/[0.03] px-7 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
//               >
//                 <RiWhatsappFill className="size-4" />
//                 WhatsApp Us
//               </Link>
//             </div>

//             {/* Stats row */}
//             <div className="mt-10 grid grid-cols-3 gap-4 border-t border-background/10 pt-8">
//               {STATS.map((stat, i) => {
//                 const Icon = stat.icon;
//                 return (
//                   <div key={i} className="flex items-center gap-3">
//                     <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
//                       <Icon className="size-4 text-primary" />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-sm font-bold leading-none text-background sm:text-base">
//                         {stat.value}
//                         {stat.unit && (
//                           <span className="ml-0.5 text-xs font-semibold text-background/60">
//                             {stat.unit}
//                           </span>
//                         )}
//                       </p>
//                       <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-background/50 sm:text-[11px]">
//                         {stat.label}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* ============ RIGHT: Image Composition (6 cols) ============ */}
//           <div className="relative lg:col-span-6 lg:pl-8">
//             <div className="relative">
//               {/* Main image */}
//               <div className="relative aspect-3/5 w-full overflow-hidden rounded-3xl border border-background/10 bg-neutral-900 sm:aspect-4/3 lg:aspect-5/4">
//                 <Image
//                   src={heroBanner?.hero}
//                   alt="Certified mobile car mechanic repairing a vehicle on-site in Dubai"
//                   fill
//                   priority
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                   className="object-cover"
//                 />

//                 {/* Overlay gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

//                 {/* Corner hairlines on image */}
//                 <div className="pointer-events-none absolute right-0 top-0 size-16">
//                   <div className="absolute right-0 top-0 h-px w-10 bg-primary/60" />
//                   <div className="absolute right-0 top-0 h-10 w-px bg-primary/60" />
//                 </div>
//               </div>

//               {/* ---------- Floating Card: Live Availability (bottom-left) ---------- */}
//               <div className="absolute -bottom-6 -left-4 w-[calc(100%+2rem)] max-w-xs rounded-2xl border border-background/10 bg-neutral-950/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:-left-6 sm:w-auto">
//                 <div className="flex items-center gap-3.5">
//                   {/* Live indicator */}
//                   <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary">
//                     <RiFlashlightFill className="size-5 text-primary-foreground" />
//                     {/* Pulse dot */}
//                     <span className="absolute -right-0.5 -top-0.5 flex size-3">
//                       <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
//                       <span className="relative inline-flex size-3 rounded-full bg-primary" />
//                     </span>
//                   </div>

//                   <div className="min-w-0">
//                     <div className="flex items-center gap-1.5">
//                       <span className="size-1.5 rounded-full bg-green-500" />
//                       <p className="text-[10px] font-semibold uppercase tracking-wider text-background/50">
//                         Live Now
//                       </p>
//                     </div>
//                     <p className="mt-0.5 text-sm font-bold leading-tight text-background">
//                       Mechanics Available
//                     </p>
//                     <p className="mt-0.5 text-[11px] text-background/50">
//                       {responseTime} response nearby
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* ---------- Floating Card: Rating (top-right) ---------- */}
//               <div className="absolute -top-4 -right-3 rounded-2xl border border-background/10 bg-neutral-950/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:-right-5">
//                 <div className="flex items-center gap-2.5">
//                   <div className="flex -space-x-1">
//                     {[...Array(5)].map((_, i) => (
//                       <RiStarFill key={i} className="size-4 text-primary" />
//                     ))}
//                   </div>
//                   <span className="text-sm font-bold text-background">5.0</span>
//                 </div>
//                 <p className="mt-1.5 text-[11px] font-medium text-background/50">
//                   500+ Happy Customers
//                 </p>
//               </div>

//               {/* ---------- Floating Chip: Location (top-left) ---------- */}
//               <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-black/60 px-3 py-1.5 backdrop-blur-md">
//                 <RiMapPinFill className="size-3 text-primary" />
//                 <span className="text-[10px] font-semibold uppercase tracking-wider text-background/90">
//                   {city}, UAE
//                 </span>
//               </div>

//               {/* ---------- Floating CTA: Browse Services (bottom-right) ---------- */}
//               <Link
//                 href="/services"
//                 className="group absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-black/60 px-3 py-1.5 backdrop-blur-md transition-colors hover:border-primary/50"
//               >
//                 <span className="text-[10px] font-semibold uppercase tracking-wider text-background/90 group-hover:text-primary">
//                   19+ Services
//                 </span>
//                 <RiArrowRightUpLine className="size-3 text-primary" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// app/(marketing)/_components/hero-section.tsx
//-------------------------------------------------------------------------------------------
// import Link from "next/link";
// import { 
//     RiArrowRightLine, 
//     RiBatteryChargeLine, 
//     RiCheckboxCircleFill, 
//     RiPhoneLine, 
//     RiShieldCheckLine, 
//     RiTimeLine,
//     RiMapPinLine,
//     RiWhatsappLine
// } from "@remixicon/react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { SiteConfig } from "@/config/siteConfig";

// export function HeroSection() {
//     const trustPoints = [
//         { icon: RiTimeLine, text: "5–30 Min Response" },
//         { icon: RiShieldCheckLine, text: "Certified Mechanics" },
//         { icon: RiBatteryChargeLine, text: "Genuine Parts" },
//     ];

//     const stats = [
//         { value: "10+", label: "Years Experience" },
//         { value: "24/7", label: "Emergency Service" },
//         { value: "90%", label: "Onsite Repair Rate" },
//         { value: "5★", label: "Customer Rating" },
//     ];

//     return (
//         <section className="relative w-full overflow-hidden bg-background">
//             {/* Subtle grid pattern background */}
//             <div 
//                 className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
//                 style={{
//                     backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
//                                       linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
//                     backgroundSize: '64px 64px'
//                 }}
//             />
            
//             {/* Radial glow effect */}
//             <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
//             <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />

//             <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
//                     {/* Left Content */}
//                     <div className="flex flex-col items-start space-y-6 sm:space-y-8">
//                         {/* Trust Badge */}
//                         <Badge 
//                             variant="outline" 
//                             className="gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium border-primary/30 bg-primary/5 text-primary"
//                         >
//                             <span className="relative flex h-2 w-2">
//                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
//                                 <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
//                             </span>
//                             Available Now · 24/7 Emergency Service
//                         </Badge>

//                         {/* Main Heading */}
//                         <div className="space-y-3 sm:space-y-4">
//                             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
//                                 Mobile Car Repair
//                                 <span className="block text-primary mt-1">
//                                     At Your Doorstep
//                                 </span>
//                                 <span className="block text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-medium">
//                                     in Dubai
//                                 </span>
//                             </h1>
                            
//                             <p className="max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
//                                 24/7 doorstep car repair and maintenance across Dubai. Certified mechanics, 
//                                 transparent pricing, and a <span className="font-semibold text-foreground">5 to 30 minutes response time</span> — 
//                                 wherever your car breaks down, we come to you.
//                             </p>
//                         </div>

//                         {/* Trust Points */}
//                         <div className="flex flex-wrap gap-x-5 gap-y-3">
//                             {trustPoints.map((point) => (
//                                 <div key={point.text} className="flex items-center gap-2">
//                                     <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
//                                         <RiCheckboxCircleFill className="w-3.5 h-3.5 text-primary" />
//                                     </div>
//                                     <span className="text-xs sm:text-sm font-medium text-foreground">
//                                         {point.text}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* CTA Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
//                             <Button 
//                                 size="lg" 
//                                 className="h-12 sm:h-13 px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 group"
//                                 asChild
//                             >
//                                 <Link href={SiteConfig.numberCallLink}>
//                                     <RiPhoneLine className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                                     Call Now
//                                     <RiArrowRightLine className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
//                                 </Link>
//                             </Button>
                            
//                             <Button 
//                                 size="lg" 
//                                 variant="outline"
//                                 className="h-12 sm:h-13 px-6 sm:px-8 text-sm sm:text-base font-semibold border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 group"
//                                 asChild
//                             >
//                                 <Link href={SiteConfig.whatsappCallLink} target="_blank" rel="noopener noreferrer">
//                                     <RiWhatsappLine className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
//                                     WhatsApp Us
//                                 </Link>
//                             </Button>
//                         </div>

//                         {/* Contact Info Bar */}
//                         <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 border-t border-border w-full">
//                             <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
//                                 <RiMapPinLine className="w-3.5 h-3.5 text-primary" />
//                                 <span>Jebel Ali · Dubai, UAE</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
//                                 <RiPhoneLine className="w-3.5 h-3.5 text-primary" />
//                                 <a 
//                                     href={SiteConfig.numberCallLink} 
//                                     className="hover:text-primary transition-colors font-medium"
//                                 >
//                                     {SiteConfig.displayNumber}
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Content - Visual Card */}
//                     <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:ml-auto">
//                         {/* Main Card */}
//                         <div className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl shadow-black/5 dark:shadow-black/20">
                            
//                             {/* Card Header */}
//                             <div className="flex items-center justify-between mb-6">
//                                 <div className="flex items-center gap-3">
//                                     <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-primary-foreground">
//                                         <RiBatteryChargeLine className="w-5 h-5 sm:w-6 sm:h-6" />
//                                     </div>
//                                     <div>
//                                         <h3 className="text-sm sm:text-base font-semibold text-foreground">
//                                             Emergency Dispatch
//                                         </h3>
//                                         <p className="text-xs text-muted-foreground">
//                                             Nearest unit available
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <Badge className="bg-primary/10 text-primary border-0 text-[10px] sm:text-xs font-semibold">
//                                     LIVE
//                                 </Badge>
//                             </div>

//                             {/* Stats Grid */}
//                             <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
//                                 {stats.map((stat) => (
//                                     <div 
//                                         key={stat.label}
//                                         className="rounded-xl bg-muted/50 border border-border/50 p-3 sm:p-4 text-center"
//                                     >
//                                         <div className="text-xl sm:text-2xl font-bold text-primary">
//                                             {stat.value}
//                                         </div>
//                                         <div className="text-[10px] sm:text-xs text-muted-foreground font-medium mt-0.5">
//                                             {stat.label}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* Service Areas Preview */}
//                             <div className="rounded-xl bg-muted/30 border border-border/50 p-4">
//                                 <div className="flex items-center gap-2 mb-3">
//                                     <RiMapPinLine className="w-4 h-4 text-primary" />
//                                     <span className="text-xs sm:text-sm font-semibold text-foreground">
//                                         Service Areas
//                                     </span>
//                                 </div>
//                                 <div className="flex flex-wrap gap-1.5">
//                                     {SiteConfig.serviceAreas.slice(0, 6).map((area) => (
//                                         <span 
//                                             key={area.slug}
//                                             className="inline-flex items-center rounded-md bg-background border border-border px-2 py-1 text-[10px] sm:text-xs text-muted-foreground font-medium"
//                                         >
//                                             {area.name}
//                                         </span>
//                                     ))}
//                                     <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-[10px] sm:text-xs text-primary font-semibold">
//                                         +{SiteConfig.serviceAreas.length - 6} more
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Bottom Info */}
//                             <div className="mt-6 flex items-center justify-between pt-4 border-t border-border">
//                                 <div className="flex items-center gap-2">
//                                     <div className="flex -space-x-2">
//                                         {[1, 2, 3].map((i) => (
//                                             <div 
//                                                 key={i}
//                                                 className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center"
//                                             >
//                                                 <RiShieldCheckLine className="w-3 h-3 text-primary" />
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">
//                                         Trusted by 1000+ drivers
//                                     </span>
//                                 </div>
//                                 <div className="flex items-center gap-1 text-primary">
//                                     <RiTimeLine className="w-3.5 h-3.5" />
//                                     <span className="text-[10px] sm:text-xs font-semibold">
//                                         24/7
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Floating Badge */}
//                         <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 rounded-xl bg-primary text-primary-foreground px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg shadow-primary/30">
//                             <div className="text-[10px] sm:text-xs font-semibold opacity-90">
//                                 Starting from
//                             </div>
//                             <div className="text-sm sm:text-base font-bold">
//                                 AED 99
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// app/(marketing)/_components/hero-section.tsx

// app/(marketing)/_components/hero-section.tsx

import Link from "next/link";
import Image from "next/image";
import {
    RiArrowRightLine,
    RiPhoneFill,
    RiWhatsappFill,
    RiShieldCheckFill,
    RiTimeFill,
    RiToolsFill,
    RiMapPinFill,
    RiStarFill,
    RiFlashlightFill,
    RiCheckboxCircleFill,
    RiBatteryChargeFill,
    RiCustomerServiceFill,
    RiArrowRightUpLine,
    RiVerifiedBadgeFill,
} from "@remixicon/react";

import { heroBanner } from "@/config/imageConfig";
import { SiteConfig } from "@/config/siteConfig";

const STATS = [
    {
        icon: RiTimeFill,
        value: "5–30",
        unit: "min",
        label: "Response Time",
    },
    {
        icon: RiBatteryChargeFill,
        value: "100%",
        unit: "",
        label: "Genuine Parts",
    },
    {
        icon: RiToolsFill,
        value: "90%",
        unit: "",
        label: "Onsite Fix Rate",
    },
];

const TRUST_POINTS = [
    "Available 24/7 across Dubai",
    "No towing required",
    "Transparent upfront pricing",
];

export function Hero() {
    const {
        displayNumber,
        numberCallLink,
        whatsappCallLink,
        responseTime,
        city,
        serviceAreas,
    } = SiteConfig;

    return (
        <section className="relative w-full overflow-hidden bg-background">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            {/* Diagonal split background */}
            <div className="pointer-events-none absolute inset-0">
                {/* Top-right corner filled block */}
                <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-bl from-primary/[0.07] via-transparent to-transparent lg:w-3/5" />

                {/* Fine vertical lines accent */}
                <div className="absolute inset-0 hidden lg:block">
                    <div className="absolute right-[38%] top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                    <div className="absolute right-[60%] top-0 h-full w-px bg-gradient-to-b from-transparent via-border/60 to-transparent" />
                </div>

                {/* Dot grid (left side only) */}
                <div
                    className="absolute inset-y-0 left-0 w-1/2 opacity-[0.35] dark:opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                        backgroundSize: '28px 28px',
                        maskImage: 'radial-gradient(ellipse 90% 70% at 20% 50%, black 30%, transparent 90%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 20% 50%, black 30%, transparent 90%)',
                    }}
                />

                {/* Primary glow orbs */}
                <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[130px]" />
                <div className="absolute -bottom-32 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.06] blur-[110px]" />
            </div>

            {/* ============================================================
                MAIN CONTENT
            ============================================================ */}
            <div className="relative container mx-auto px-4 py-5">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">

                    {/* =====================================================
                        LEFT: CONTENT (6 cols)
                    ===================================================== */}
                    <div className="lg:col-span-6">
                        {/* Eyebrow badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-3.5 py-1.5 backdrop-blur-sm">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                <span className="relative inline-flex size-2 rounded-full bg-primary" />
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                24/7 Emergency · {city}
                            </span>
                        </div>

{/* Headline */}
<h1 className="mt-6 text-4xl font-bold leading-[1.05] -tracking-normal text-foreground lg:text-5xl">
    24/7{" "}
    <span className="relative inline-block">
        <span className="relative z-10 text-primary">
            Car Battery
        </span>
        <span className="absolute inset-x-0 bottom-1 z-0 h-2.5 bg-primary/15" />
    </span>{" "}
    &{" "}
    <span className="relative inline-block">
        <span className="relative z-10 text-primary">
            Fast Car Repair
        </span>
        <span className="absolute inset-x-0 bottom-1 z-0 h-2.5 bg-primary/15" />
    </span>{" "}
    Mobile Mechanic Service in Dubai
</h1>

{/* Description */}
<p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
    Fast, reliable roadside assistance and doorstep car repairs delivered directly to your location.
    Based in{" "}
    <span className="font-semibold text-foreground">Jebel Ali</span>, our certified technicians arrive in{" "}
    <span className="font-semibold text-foreground">5–30 minutes</span> anywhere across Dubai.
</p>

                        {/* Trust points */}
                        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
                            {TRUST_POINTS.map((point, i) => (
                                <li
                                    key={i}
                                    className="inline-flex items-center gap-2 text-xs font-medium text-foreground sm:text-sm"
                                >
                                    <RiCheckboxCircleFill className="size-3.5 shrink-0 text-primary" />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href={numberCallLink}
                                className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                            >
                                <RiPhoneFill className="size-4" />
                                <span className="text-base">{displayNumber}</span>
                                <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>

                            <Link
                                href={whatsappCallLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border-2 border-border bg-background px-7 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                            >
                                <RiWhatsappFill className="size-4" />
                                WhatsApp Us
                            </Link>
                        </div>

                        {/* Stats row */}
                        <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-7">
                            {STATS.map((stat, i) => {
                                const Icon = stat.icon;
                                return (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                            <Icon className="size-4 text-primary" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-bold leading-none text-foreground sm:text-base">
                                                {stat.value}
                                                {stat.unit && (
                                                    <span className="ml-0.5 text-xs font-semibold text-muted-foreground">
                                                        {stat.unit}
                                                    </span>
                                                )}
                                            </p>
                                            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* =====================================================
                        RIGHT: IMAGE COMPOSITION (6 cols) — UNIQUE LAYOUT
                    ===================================================== */}
                    <div className="relative lg:col-span-6 lg:pl-6">
                        <div className="relative mx-auto max-w-lg lg:max-w-none">

                            {/* Main image — tilted/angled frame with offset accent block */}
                            <div className="relative">
                                {/* Offset primary block behind image (unique signature) */}
                                <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-3xl border-2 border-primary/30 sm:block" />

                                {/* Main image */}
                                <div className="relative h-auto w-full overflow-hidden rounded-3xl border border-border bg-muted sm:aspect-4/3 lg:aspect-4/3">
                                    <Image
                                        src={heroBanner?.hero}
                                        alt="Certified mobile car mechanic repairing a vehicle on-site in Dubai"
                                        fill
                                        // priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        // className="object-cover"
                                        className="h-full"
                                    />

                                    {/* Bottom gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                    {/* Corner crop marks (top-left) */}
                                    <div className="pointer-events-none absolute left-4 top-4">
                                        <div className="absolute left-0 top-0 h-px w-8 bg-primary/70" />
                                        <div className="absolute left-0 top-0 h-8 w-px bg-primary/70" />
                                    </div>

                                    {/* Bottom info strip inside image */}
                                    <div className="absolute inset-x-0 bottom-0 p-5">
                                        <div className="flex items-end justify-between gap-4">
                                            <div className="min-w-0">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                                    Certified Onsite Service
                                                </p>
                                                <p className="mt-1 text-sm font-semibold text-white/90">
                                                    Battery · Diagnostics · Repairs
                                                </p>
                                            </div>
           
                                        </div>
                                    </div>
                                </div>
                            </div>

                           
                            {/* ---------- Decorative Corner Plus (BOTTOM-LEFT, subtle) ---------- */}
                            <div className="pointer-events-none absolute -bottom-2 -left-2 hidden items-center justify-center sm:flex">
                                <div className="relative size-6">
                                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-primary/40" />
                                    <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-primary/40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    BOTTOM STRIP — SERVICE AREAS TICKER (unique touch)
                ============================================================ */}
{/* ============================================================
    BOTTOM STRIP — SERVICE AREAS (premium grid, all visible)
============================================================ */}
{/* ============================================================
    BOTTOM STRIP — SERVICE AREAS (compact premium)
============================================================ */}
<div className="relative mt-14 border-t border-border pt-8 sm:mt-16">
    {/* Ambient glow */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 left-1/4 h-48 w-48 rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="absolute -bottom-16 right-1/4 h-48 w-48 rounded-full bg-primary/[0.04] blur-3xl" />
    </div>

    <div className="relative">
        {/* ============ Header Row (compact) ============ */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            {/* Left: Title */}
            <div className="flex items-center gap-2.5">
                <span className="relative flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 shadow-md shadow-primary/25">
                    <RiMapPinFill className="size-3.5 text-primary-foreground" />
                    <span className="absolute -right-0.5 -top-0.5 flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                        <span className="relative inline-flex size-2 rounded-full bg-primary border border-background" />
                    </span>
                </span>
                <h3 className="text-sm font-bold tracking-tight text-foreground">
                    Areas We Serve
                </h3>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                    {serviceAreas?.length || 16}+
                </span>
            </div>

            {/* Right: CTA link */}
            <Link
                href="/area-we-serve"
                className="group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
            >
                View All
                <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
        </div>

        {/* ============ Areas — pill cluster ============ */}
        <div className="flex flex-wrap gap-1.5">
            {serviceAreas?.map((area) => (
                <Link
                    key={area.slug}
                    href={`/area-we-serve/${area.slug}`}
                    className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary hover:shadow-sm hover:shadow-primary/10"
                >
                    {/* Dot indicator */}
                    <span className="size-1 rounded-full bg-primary/50 transition-all duration-200 group-hover:size-1.5 group-hover:bg-primary" />

                    {/* Name */}
                    <span className="whitespace-nowrap">{area.name}</span>

                    {/* Hover arrow (slides in) */}
                    <RiArrowRightUpLine className="size-3 opacity-0 -ml-1 transition-all duration-200 group-hover:ml-0 group-hover:opacity-100" />
                </Link>
            ))}
        </div>

        {/* ============ Trust Footer (single line) ============ */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:justify-between">
            <span className="inline-flex items-center gap-1.5">
                <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                </span>
                Live Dispatch Active
            </span>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
                <span className="inline-flex items-center gap-1.5">
                    <RiTimeFill className="size-3 text-primary" />
                    5–30 Min Arrival
                </span>
                <span className="inline-flex items-center gap-1.5">
                    <RiShieldCheckFill className="size-3 text-primary" />
                    Certified Mechanics
                </span>
                <span className="inline-flex items-center gap-1.5">
                    <RiBatteryChargeFill className="size-3 text-primary" />
                    Genuine Parts
                </span>
            </div>
        </div>
    </div>
</div>
            </div>
        </section>
    );
}
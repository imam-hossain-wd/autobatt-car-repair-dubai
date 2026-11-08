// types/area.ts

export interface AreaCoordinates {
    lat: number;
    lng: number;
}

export interface AreaHero {
    title: string;
    subtitle: string;
}

export interface AreaSEO {
    title: string;
    description: string;
}

export interface AreaOverviewSection {
    title: string;
    heading: string;
    description: string;
    descriptionTwo: string;
    highlights: string[];
}

export interface AreaEmergencySection {
    title: string;
    heading: string;
    description: string;
    descriptionTwo: string;
    emergencyServices: string[];
}

export interface AreaServicesGridSection {
    title: string;
    subtitle: string;
}

export interface AreaWhyChooseItem {
    title: string;
    description: string;
}

export interface AreaWhyChooseSection {
    title: string;
    subtitle: string;
    items: AreaWhyChooseItem[];
}

export interface AreaProblemItem {
    title: string;
    description: string;
}

export interface AreaProblemsSection {
    title: string;
    subtitle: string;
    problems: AreaProblemItem[];
}

export interface AreaLandmark {
    name: string;
    description: string;
}

export interface AreaLandmarksSection {
    title: string;
    subtitle: string;
    landmarks: AreaLandmark[];
}

export interface AreaFAQ {
    question: string;
    answer: string;
}

export interface AreaFAQSection {
    title: string;
    subtitle: string;
    faqs: AreaFAQ[];
}

export interface AreaInternalLink {
    name: string;
    href: string;
}

export interface AreaInternalLinksSection {
    title: string;
    subtitle: string;
    links: AreaInternalLink[];
}

export interface AreaReview {
    name: string;
    rating: number;
    service: string;
    text: string;
}

export interface AreaReviewsSection {
    title: string;
    subtitle: string;
    reviews: AreaReview[];
}

export interface AreaNearbyArea {
    name: string;
    slug: string;
}

export interface AreaNearbySection {
    title: string;
    subtitle: string;
    areas: AreaNearbyArea[];
}

export interface AreaRelatedBlog {
    title: string;
    slug: string;
}

export interface AreaSchema {
    serviceType: string;
    areaServed: string;
    priceRange: string;
}

export interface ServiceAreaData {
    id: number;
    slug: string;
    name: string;
    responseTime: string;
    coordinates: AreaCoordinates;
    hero: AreaHero;
    seo: AreaSEO;
    overviewSection: AreaOverviewSection;
    emergencyContentSection: AreaEmergencySection;
    servicesGridSection: AreaServicesGridSection;
    whyChooseUsSection: AreaWhyChooseSection;
    customerProblemsSection: AreaProblemsSection;
    narrativeLandmarksSection: AreaLandmarksSection;
    faqSection: AreaFAQSection;
    internalLinksSection: AreaInternalLinksSection;
    reviewsSection: AreaReviewsSection;
    nearbyAreasSection: AreaNearbySection;
    relatedBlogs: AreaRelatedBlog[];
    schema: AreaSchema;
}
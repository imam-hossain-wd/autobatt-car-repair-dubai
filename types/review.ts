// types/review.ts
export interface Review {
  name: string;
  area: string;
  rating: number; // 1-5
  text: string;
  /** Optional metadata for richer editorial cards */
  date?: string;          // e.g. "2 weeks ago"
  service?: string;       // e.g. "Battery Replacement"
  vehicle?: string;       // e.g. "BMW X5"
}

export interface ReviewsProps {
  reviews?: Review[];
  subtitle?: string;
  /** Which review gets the featured "portrait" treatment */
  featuredIndex?: number;
}
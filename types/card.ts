import { Project } from "./projects";


export interface ServiceCardProps {
  name: string;
  slug: string;
  features?: string[];
  image?: string;
  intro?: { heading?: string; content?: string };
  className?: string;
  index?: number;
}


export interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
  variant?: "default" | "featured" | "compact";
  className?: string;
}
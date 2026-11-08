import { serviceAreas } from "@/data/areas";




export const getServiceAreasNameSlug = () => {
  return serviceAreas.map(area => ({
    name: area.name,
    slug: area.slug
  }));
};
import { SiteConfig } from "@/config/siteConfig";
import { getServiceAreasNameSlug } from "@/utils/getServiceAreasNameSlug";
import { getServicesNameSlug } from "@/utils/getServiceNameSlug";

export default async function sitemap(){
  const baseUrl = SiteConfig?.url;
  const currentDate = new Date().toISOString();

  const services = getServicesNameSlug();
  const serviceAreas= getServiceAreasNameSlug();
  const staticPages = [
    "/",
    "/services",
    "/service-area",
    "/about-us",
    "/contact-us",
    "/projects",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const servicePages = (services || []).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const areaPages = (serviceAreas || []).map((area) => ({
    url: `${baseUrl}/service-area/${area.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
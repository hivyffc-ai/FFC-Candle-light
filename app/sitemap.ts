/**
 * FRIENDS FACTORY CAFE - SEO OPTIMIZED SITEMAP
 * Domain: candlelightdinnervadodara.com
 * 
 * Pure Candlelight Dinner Focus - Updated January 2026
 * 
 * Total Pages: 80+ including:
 * - 1 Homepage (priority 1.0)
 * - 6 Static pages (priority 0.8)
 * - 1 Candlelight Dinner category page (priority 0.9)
 * - 8 Package detail pages (priority 0.85)
 * - 34 Candlelight Dinner keyword pages (priority 0.85) - Main SEO pages
 * - 40 Vadodara Area pages (priority 0.8)
 * 
 * Last Updated: January 2026
 */

import { MetadataRoute } from "next";
import { 
  serviceCategories, 
  vadodaraAreas, 
  packages
} from "@/lib/ffc-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://candlelightdinnervadodara.com";
  const currentDate = new Date().toISOString();
  
  const entries: MetadataRoute.Sitemap = [];
  
  // ==================== HOME PAGE ====================
  // Highest priority - main landing page
  entries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 1.0,
  });
  
  // ==================== STATIC PAGES ====================
  // Core pages with regular updates
  const staticPages = [
    { path: '/about', priority: 0.8, freq: 'monthly' as const },
    { path: '/contact', priority: 0.9, freq: 'monthly' as const },
    { path: '/menu', priority: 0.8, freq: 'weekly' as const },
    { path: '/packages', priority: 0.9, freq: 'weekly' as const },
    { path: '/virtual-tour', priority: 0.7, freq: 'monthly' as const },
    { path: '/areas', priority: 0.8, freq: 'weekly' as const },
    { path: '/blog', priority: 0.7, freq: 'weekly' as const },
  ];
  
  staticPages.forEach((page) => {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.freq,
      priority: page.priority,
    });
  });
  
  // ==================== CANDLELIGHT DINNER CATEGORY PAGE ====================
  // Main candlelight dinner landing page
  serviceCategories.forEach((service) => {
    entries.push({
      url: `${baseUrl}/${service.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  });
  
  // ==================== PACKAGE DETAIL PAGES ====================
  // 8 setup packages - high priority for conversions
  packages.forEach((pkg) => {
    entries.push({
      url: `${baseUrl}/packages/${pkg.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    });
  });
  
  // ==================== CANDLELIGHT DINNER KEYWORD PAGES (MAIN SEO) ====================
  // 34 candlelight dinner keyword pages
  // These are the main SEO landing pages targeting specific search queries
  // URL Structure: /{keyword}
  serviceCategories.forEach((service) => {
    service.keywords.forEach((keyword) => {
      entries.push({
        url: `${baseUrl}/${keyword.slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.85,
      });
    });
  });
  
  // ==================== AREA PAGES ====================
  // 40 Vadodara area pages for local SEO
  vadodaraAreas.forEach((area) => {
    entries.push({
      url: `${baseUrl}/${area.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });
  
  return entries;
}

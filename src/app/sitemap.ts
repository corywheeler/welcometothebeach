import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";
import { site } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/shop/",
    "/about/",
    "/disclosure/",
    "/guides/beach-day-checklist/",
    ...categories.map((c) => `/category/${c.slug}/`),
    ...products.map((p) => `/product/${p.slug}/`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}

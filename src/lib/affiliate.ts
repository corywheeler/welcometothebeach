import { affiliate } from "@/config/site";
import type { Product } from "@/data/products";

/** Returns the product's retailer link with your affiliate ID added (when set). */
export function buildAffiliateUrl(product: Product): string {
  const url = new URL(product.link.url);
  if (affiliate.amazonTag && /(^|\.)amazon\.com$/.test(url.hostname)) {
    url.searchParams.set("tag", affiliate.amazonTag);
  }
  return url.toString();
}

/** Builds an Amazon search link for a product name. */
export function amazonSearch(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopBrowser, ShopWithSearchParams } from "@/components/ShopBrowser";

export const metadata: Metadata = {
  title: "Shop All Beach Gear",
  description: "Browse every beach tent, chair, cooler, umbrella, toy and accessory we recommend. Filter by price, category and more.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Shop all beach gear</h1>
      <p className="mt-2 max-w-2xl text-ink/70">
        Every product here is a current top pick. Filter by what you need and tap through to see today&apos;s price.
      </p>
      <div className="mt-10">
        <Suspense fallback={<ShopBrowser />}>
          <ShopWithSearchParams />
        </Suspense>
      </div>
    </div>
  );
}

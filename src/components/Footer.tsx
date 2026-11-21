import Link from "next/link";
import { categories } from "@/data/products";
import { site } from "@/config/site";
import { Wave } from "./ui";

export default function Footer() {
  return (
    <footer className="mt-24 text-sand-100">
      <Wave className="text-ocean-900" />
      <div className="bg-ocean-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-extrabold text-white">Welcome to the Beach</p>
            <p className="mt-2 max-w-sm text-sm text-sand-100/80">{site.tagline}</p>
            <p className="mt-6 max-w-md text-xs text-sand-100/60">
              As an Amazon Associate and affiliate partner of other retailers, we earn from qualifying
              purchases. Prices are approximate and may change. See our{" "}
              <Link href="/disclosure/" className="underline hover:text-white">
                affiliate disclosure
              </Link>
              .
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-ocean-300">Shop</p>
            <ul className="mt-3 space-y-2 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/category/${c.slug}/`} className="hover:text-white">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-ocean-300">About</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about/" className="hover:text-white">Our story</Link></li>
              <li><Link href="/guides/beach-day-checklist/" className="hover:text-white">Beach day checklist</Link></li>
              <li><Link href="/disclosure/" className="hover:text-white">Affiliate disclosure</Link></li>
              <li><Link href="/shop/" className="hover:text-white">Shop all gear</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-sand-100/50">
          © {new Date().getFullYear()} Welcome to the Beach · Catalog last reviewed {site.lastUpdated}
        </div>
      </div>
    </footer>
  );
}

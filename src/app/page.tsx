import Link from "next/link";
import { categories, products, productsInCategory } from "@/data/products";
import { ProductGrid } from "@/components/ProductCard";
import CategoryArt from "@/components/CategoryArt";
import Newsletter from "@/components/Newsletter";
import { Wave } from "@/components/ui";
import { site } from "@/config/site";

export default function Home() {
  const picks = products.filter((p) => p.featured).slice(0, 8);
  const trending = products.filter((p) => p.badges?.includes("Trending Now") || p.badges?.includes("Best Value")).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ocean-100 via-ocean-50 to-sand-50">
        <svg className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-sun-400/40 sm:h-96 sm:text-sun-400/70 sm:w-96" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="30" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i * Math.PI) / 6;
              return <line key={i} x1={50 + Math.cos(a) * 38} y1={50 + Math.sin(a) * 38} x2={50 + Math.cos(a) * 46} y2={50 + Math.sin(a) * 46} />;
            })}
          </g>
        </svg>
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
          <p className="inline-block rounded-full bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-ocean-700">
            {site.lastUpdated} gear guide
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
            Welcome to the <span className="text-ocean-600">Beach</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink/75 sm:text-xl">
            The newest, best-reviewed beach tents, chairs, coolers, toys and more, hand-picked so you spend
            less time shopping and more time in the sun.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop/" className="rounded-full bg-coral-500 px-6 py-3.5 font-semibold text-white shadow-sm hover:bg-coral-600">
              Shop all beach gear
            </Link>
            <Link href="/guides/beach-day-checklist/" className="rounded-full bg-white px-6 py-3.5 font-semibold text-ink ring-1 ring-ink/10 hover:ring-ocean-500">
              Beach day checklist
            </Link>
          </div>
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 text-center">
            {[
              [String(products.length), "top-rated picks"],
              [String(categories.length), "gear categories"],
              ["UPF 50+", "shade we trust"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-white/60 p-3">
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-2xl font-extrabold text-ocean-700">{n}</dd>
                <dd className="text-xs text-ink/60">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Wave className="text-sand-50" />
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6" aria-labelledby="cat-heading">
        <div className="flex items-end justify-between gap-4">
          <h2 id="cat-heading" className="font-display text-3xl font-extrabold sm:text-4xl">Shop by category</h2>
          <Link href="/shop/" className="text-sm font-semibold text-ocean-700 hover:underline">View all →</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}/`} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-lg">
              <CategoryArt slug={c.slug} className="aspect-[4/3] w-full transition group-hover:scale-105" />
              <div className="p-4">
                <p className="font-display text-lg font-bold leading-tight">{c.name}</p>
                <p className="text-xs text-ink/60">{productsInCategory(c.slug).length} picks</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EDITOR'S PICKS */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6" aria-labelledby="picks-heading">
        <h2 id="picks-heading" className="font-display text-3xl font-extrabold sm:text-4xl">Editor&apos;s picks</h2>
        <p className="mt-2 text-ink/70">The gear we&apos;d pack for our own beach day.</p>
        <div className="mt-8">
          <ProductGrid products={picks} />
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 rounded-[2rem] bg-ocean-700 p-8 text-white sm:p-12 md:grid-cols-3">
          {[
            ["We read the reviews", "We compare expert reviews and thousands of shopper ratings so you don't have to."],
            ["Only what's current", "We refresh the catalog every season and drop products that have been surpassed."],
            ["Honest trade-offs", "Every pick lists real pros and cons, including who should skip it."],
          ].map(([t, d]) => (
            <div key={t}>
              <p className="font-display text-xl font-bold">{t}</p>
              <p className="mt-2 text-sm text-white/80">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING / VALUE */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6" aria-labelledby="value-heading">
        <h2 id="value-heading" className="font-display text-3xl font-extrabold sm:text-4xl">Trending &amp; great value</h2>
        <p className="mt-2 text-ink/70">Popular right now, plus big beach energy on a small budget.</p>
        <div className="mt-8">
          <ProductGrid products={trending} />
        </div>
      </section>

      <Newsletter />
    </>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories } from "@/data/products";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Welcome to the Beach home">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#12a3ad" />
        <circle cx="27" cy="13" r="6" fill="#ffc94d" />
        <path d="M0 25 Q10 20 20 25 T40 25 L40 40 L0 40 Z" fill="#fffbf3" opacity="0.9" />
        <path d="M0 30 Q10 26 20 30 T40 30 L40 40 L0 40 Z" fill="#efcf96" />
      </svg>
      <span className="font-display text-lg font-extrabold leading-none tracking-tight text-ink sm:text-xl">
        Welcome to the <span className="text-ocean-600">Beach</span>
      </span>
    </Link>
  );
}

const nav = [
  { href: "/shop/", label: "Shop All" },
  { href: "/guides/beach-day-checklist/", label: "Beach Checklist" },
  { href: "/about/", label: "About" },
];

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    setOpen(false);
    router.push(`/shop/${q.trim() ? `?q=${encodeURIComponent(q.trim())}` : ""}`);
  }

  const search = (
    <form onSubmit={onSearch} role="search" className="relative w-full">
      <label htmlFor="site-search" className="sr-only">
        Search products
      </label>
      <input
        id="site-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search tents, chairs, coolers…"
        className="w-full rounded-full border border-ink/10 bg-white py-2 pl-4 pr-10 text-sm outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100"
      />
      <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-ink/60 hover:text-ocean-700" aria-label="Search">
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="9" r="6" />
          <path d="M14 14l4 4" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav className="ml-6 hidden items-center gap-6 text-sm font-semibold lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-ocean-700">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden w-72 md:block">{search}</div>
        <button
          className="ml-auto rounded-full p-2 hover:bg-sand-100 md:ml-0 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <div className="hidden border-t border-ink/5 lg:block">
        <nav className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-6 py-2 text-sm text-ink/70" aria-label="Categories">
          {categories.map((c) => (
            <Link key={c.slug} href={`/category/${c.slug}/`} className="whitespace-nowrap hover:text-ocean-700">
              {c.name}
            </Link>
          ))}
        </nav>
      </div>
      {open && (
        <div id="mobile-menu" className="border-t border-ink/5 bg-sand-50 px-4 pb-5 pt-3 lg:hidden">
          <div className="md:hidden">{search}</div>
          <nav className="mt-4 grid gap-1 font-semibold" aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-sand-100">
                {n.label}
              </Link>
            ))}
          </nav>
          <p className="mt-4 px-2 text-xs font-semibold uppercase tracking-wider text-ink/50">Categories</p>
          <nav className="mt-1 grid grid-cols-2 gap-1 text-sm" aria-label="Mobile categories">
            {categories.map((c) => (
              <Link key={c.slug} href={`/category/${c.slug}/`} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-sand-100">
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

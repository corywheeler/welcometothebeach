import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-display text-7xl font-extrabold text-ocean-500">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold">This page washed out to sea</h1>
      <p className="mt-2 text-ink/70">The page you&apos;re looking for doesn&apos;t exist, but plenty of great beach gear does.</p>
      <Link href="/shop/" className="mt-8 inline-block rounded-full bg-coral-500 px-6 py-3 font-semibold text-white hover:bg-coral-600">
        Shop beach gear
      </Link>
    </div>
  );
}

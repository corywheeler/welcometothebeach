import type { Badge as BadgeType } from "@/data/products";

const badgeStyles: Record<BadgeType, string> = {
  "Editor's Pick": "bg-coral-500 text-white",
  "Best Value": "bg-ocean-600 text-white",
  "Trending Now": "bg-sun-400 text-ink",
  "Premium Pick": "bg-ink text-sand-100",
  "Family Favorite": "bg-ocean-100 text-ocean-900",
};

export function Badge({ label }: { label: BadgeType }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeStyles[label]}`}>
      {label}
    </span>
  );
}

export function RatingStars({ rating }: { rating: number }) {
  const pct = (rating / 5) * 100;
  return (
    <span className="inline-flex items-center gap-1.5" aria-label={`Rated ${rating} out of 5`}>
      <span className="relative inline-block whitespace-nowrap text-sm leading-none tracking-tight text-sand-300" aria-hidden="true">
        ★★★★★
        <span className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-sun-400" style={{ width: `${pct}%` }}>
          ★★★★★
        </span>
      </span>
      <span className="text-sm font-semibold text-ink/80">{rating.toFixed(1)}</span>
    </span>
  );
}

export function formatPrice(price: number) {
  return `$${price.toLocaleString("en-US")}`;
}

export function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-16 ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0 40 C 240 80 480 0 720 40 C 960 80 1200 0 1440 40 L1440 80 L0 80 Z"
        fill="currentColor"
      />
    </svg>
  );
}

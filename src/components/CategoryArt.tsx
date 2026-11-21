import type { CategorySlug } from "@/data/products";

const backgrounds: Record<CategorySlug, [string, string]> = {
  "shade-tents": ["#cff3f3", "#fdf3e1"],
  chairs: ["#ffe1d6", "#fdf3e1"],
  coolers: ["#d9ecff", "#ecfbfb"],
  umbrellas: ["#fff1c7", "#ffe1d6"],
  "toys-games": ["#e6f7d9", "#fff1c7"],
  "towels-blankets": ["#f1e4ff", "#ffe1d6"],
  "wagons-carts": ["#cff3f3", "#fff1c7"],
  "bags-accessories": ["#ffe1d6", "#d9ecff"],
};

function Scene({ slug }: { slug: CategorySlug }) {
  switch (slug) {
    case "shade-tents":
      return (
        <g>
          <path d="M40 120 Q100 40 160 120 Z" fill="#12a3ad" />
          <path d="M70 120 Q100 70 130 120 Z" fill="#0d6a74" />
          <path d="M100 48 L100 120" stroke="#fdf3e1" strokeWidth="3" />
        </g>
      );
    case "chairs":
      return (
        <g strokeLinecap="round">
          <path d="M65 70 L85 115 L140 115" stroke="#0c3a44" strokeWidth="5" fill="none" />
          <path d="M68 72 L88 112 L135 112 L120 92 L90 92 Z" fill="#f9694a" />
          <path d="M70 80 L95 80 M85 115 L75 130 M135 115 L145 130" stroke="#0c3a44" strokeWidth="5" />
        </g>
      );
    case "coolers":
      return (
        <g>
          <rect x="55" y="70" width="90" height="55" rx="10" fill="#12a3ad" />
          <rect x="50" y="60" width="100" height="18" rx="7" fill="#fffbf3" />
          <rect x="85" y="50" width="30" height="10" rx="5" fill="#0c3a44" />
          <rect x="70" y="92" width="60" height="6" rx="3" fill="#0d6a74" />
        </g>
      );
    case "umbrellas":
      return (
        <g>
          <path d="M40 75 Q100 10 160 75 Z" fill="#f9694a" />
          <path d="M70 75 Q100 20 100 75 Z M100 75 Q100 20 130 75 Z" fill="#fffbf3" />
          <path d="M100 75 L100 130" stroke="#0c3a44" strokeWidth="4" strokeLinecap="round" />
        </g>
      );
    case "toys-games":
      return (
        <g>
          <path d="M60 85 L72 128 L108 128 L120 85 Z" fill="#ffc94d" />
          <path d="M55 85 L125 85" stroke="#e14f31" strokeWidth="6" strokeLinecap="round" />
          <path d="M70 85 Q90 55 110 85" stroke="#e14f31" strokeWidth="4" fill="none" />
          <circle cx="145" cy="110" r="18" fill="#12a3ad" />
          <path d="M127 110 Q145 95 163 110 M145 92 L145 128" stroke="#fffbf3" strokeWidth="3" fill="none" />
        </g>
      );
    case "towels-blankets":
      return (
        <g>
          <rect x="45" y="60" width="110" height="65" rx="8" fill="#fffbf3" />
          <rect x="45" y="72" width="110" height="10" fill="#f9694a" />
          <rect x="45" y="92" width="110" height="10" fill="#12a3ad" />
          <rect x="45" y="112" width="110" height="10" fill="#ffc94d" />
        </g>
      );
    case "wagons-carts":
      return (
        <g>
          <rect x="50" y="70" width="95" height="38" rx="6" fill="#12a3ad" />
          <path d="M145 80 L170 60" stroke="#0c3a44" strokeWidth="5" strokeLinecap="round" />
          <circle cx="70" cy="118" r="13" fill="#0c3a44" />
          <circle cx="125" cy="118" r="13" fill="#0c3a44" />
          <circle cx="70" cy="118" r="5" fill="#fdf3e1" />
          <circle cx="125" cy="118" r="5" fill="#fdf3e1" />
        </g>
      );
    case "bags-accessories":
      return (
        <g>
          <path d="M55 75 L145 75 L135 130 L65 130 Z" fill="#f9694a" />
          <path d="M75 75 Q75 45 100 45 Q125 45 125 75" stroke="#0c3a44" strokeWidth="5" fill="none" />
          <circle cx="80" cy="95" r="4" fill="#fffbf3" />
          <circle cx="100" cy="110" r="4" fill="#fffbf3" />
          <circle cx="120" cy="95" r="4" fill="#fffbf3" />
        </g>
      );
  }
}

/** Friendly illustration used when a product has no photo. */
export default function CategoryArt({ slug, className = "" }: { slug: CategorySlug; className?: string }) {
  const [a, b] = backgrounds[slug];
  const id = `bg-${slug}`;
  return (
    <svg viewBox="0 0 200 150" className={className} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="200" height="150" fill={`url(#${id})`} />
      <circle cx="165" cy="30" r="14" fill="#ffc94d" opacity="0.9" />
      <path d="M0 132 Q50 122 100 132 T200 132 L200 150 L0 150 Z" fill="#efcf96" opacity="0.7" />
      <Scene slug={slug} />
    </svg>
  );
}

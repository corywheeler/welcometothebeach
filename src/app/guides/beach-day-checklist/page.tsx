import type { Metadata } from "next";
import Link from "next/link";
import Prose from "@/components/Prose";
import { getProduct } from "@/data/products";

export const metadata: Metadata = {
  title: "The Ultimate Beach Day Checklist",
  description: "Everything to pack for a perfect beach day, from shade and seating to snacks, sun care and kids' toys.",
};

const sections: { title: string; items: { text: string; product?: string }[] }[] = [
  {
    title: "Shade & sun protection",
    items: [
      { text: "Beach tent, canopy or umbrella (UPF 50+)", product: "sun-ninja-pop-up-beach-tent" },
      { text: "Water-resistant, broad-spectrum sunscreen (reapply every 80 minutes)", product: "supergoop-play-spf-50" },
      { text: "Hats, sunglasses and a long-sleeve rash guard" },
    ],
  },
  {
    title: "Comfort",
    items: [
      { text: "A beach chair for every adult", product: "tommy-bahama-backpack-chair" },
      { text: "Sand-free blanket or mat", product: "cgear-sand-free-mat" },
      { text: "Quick-dry towels, one per person", product: "sand-cloud-turkish-towel" },
    ],
  },
  {
    title: "Food & drinks",
    items: [
      { text: "Cooler, pre-chilled the night before", product: "rtic-soft-pack-30" },
      { text: "More water than you think you need" },
      { text: "Frozen grapes and salty snacks. Skip anything that melts." },
      { text: "A trash bag. Leave the beach better than you found it." },
    ],
  },
  {
    title: "Fun",
    items: [
      { text: "Sand toys in a mesh bag", product: "sand-pal-sand-castle-kit" },
      { text: "A group game", product: "spikeball-pro-set" },
      { text: "A waterproof speaker (keep the volume friendly)", product: "jbl-charge-6" },
    ],
  },
  {
    title: "Getting there",
    items: [
      { text: "A wagon to carry it all in one trip", product: "macsports-heavy-duty-all-terrain-wagon" },
      { text: "A dry bag for phones and keys", product: "earth-pak-waterproof-dry-bag" },
      { text: "Baby powder: it takes sand off skin like magic" },
    ],
  },
];

export default function ChecklistPage() {
  return (
    <Prose
      title="The ultimate beach day checklist"
      intro="Pack once, relax all day. Here's everything we bring for a perfect day by the water, with our favorite gear for each."
    >
      {sections.map((s) => (
        <section key={s.title}>
          <h2>{s.title}</h2>
          <ul className="mt-3 space-y-2">
            {s.items.map((i) => {
              const p = i.product ? getProduct(i.product) : undefined;
              return (
                <li key={i.text} className="flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-ink/5">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-md border-2 border-ocean-500" aria-hidden="true" />
                  <span>
                    {i.text}
                    {p && (
                      <>
                        {" "}
                        <span className="text-ink/60">
                          · Our pick: <Link href={`/product/${p.slug}/`}>{p.name}</Link>
                        </span>
                      </>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </Prose>
  );
}

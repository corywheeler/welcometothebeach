import type { Metadata } from "next";
import Link from "next/link";
import Prose from "@/components/Prose";

export const metadata: Metadata = {
  title: "About Us",
  description: "Why we started Welcome to the Beach and how we choose the gear we recommend.",
};

export default function AboutPage() {
  return (
    <Prose
      title="About Welcome to the Beach"
      intro="We believe the best beach days start before you ever hit the sand, with gear that just works."
    >
      <p>
        Shopping for beach gear can be overwhelming: thousands of nearly identical tents, chairs and coolers, and
        reviews that don&apos;t always tell the whole story. Welcome to the Beach cuts through the noise with a short,
        curated list of the newest and best products for every part of your beach day.
      </p>
      <h2>How we choose</h2>
      <p>
        For every category, we compare expert reviews from trusted publications, read through real shopper
        feedback, and look closely at what matters at the beach: sand, wind, salt water and the long walk from the
        parking lot. We only feature products that are current, widely available and well-reviewed.
      </p>
      <h2>Always up to date</h2>
      <p>
        Beach gear improves every season. We refresh our picks regularly and remove products that have been replaced
        by better options, so what you see here is what we&apos;d actually buy today.
      </p>
      <h2>How we make money</h2>
      <p>
        We don&apos;t sell products directly. When you click a &quot;Check price&quot; button and buy something, we may earn a
        small commission from the retailer, at no extra cost to you. That&apos;s how we keep the site running. Read our
        full <Link href="/disclosure/">affiliate disclosure</Link>.
      </p>
      <p>
        Ready to pack? <Link href="/shop/">Browse all our picks</Link> or grab our{" "}
        <Link href="/guides/beach-day-checklist/">beach day checklist</Link>.
      </p>
    </Prose>
  );
}

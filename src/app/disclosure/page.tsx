import type { Metadata } from "next";
import Prose from "@/components/Prose";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How Welcome to the Beach earns money through affiliate links.",
};

export default function DisclosurePage() {
  return (
    <Prose title="Affiliate disclosure">
      <p>
        {site.name} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program
        designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. We
        also participate in affiliate programs with other retailers and brands.
      </p>
      <p>
        This means that when you click a link on this site and make a purchase, we may receive a commission. This
        comes at <strong>no additional cost to you</strong>. Affiliate links are marked with buttons such as
        &quot;Check price at Amazon.&quot;
      </p>
      <h2>Our independence</h2>
      <p>
        Commissions never decide which products we recommend. We choose products based on reviews, features and
        value, and we list honest pros and cons for every item.
      </p>
      <h2>Prices and availability</h2>
      <p>
        Prices shown on this site are approximate and were accurate as of {site.lastUpdated}. Product prices and
        availability are subject to change. The price shown on the retailer&apos;s site at the time of purchase is
        the price that applies.
      </p>
      <h2>Questions?</h2>
      <p>If you have any questions about this disclosure, please reach out to us through our social channels.</p>
    </Prose>
  );
}

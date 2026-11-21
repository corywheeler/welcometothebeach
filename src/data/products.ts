/**
 * ============================================================
 *  PRODUCT CATALOG — this is the file you edit to change products
 * ============================================================
 *
 * HOW TO ADD A PRODUCT
 *   1. Copy any product block below (from `{` to `},`).
 *   2. Paste it into the list and change the details.
 *   3. `slug` must be unique, lowercase, with dashes (it becomes the page URL).
 *   4. `category` must match one of the category slugs listed in `categories`.
 *
 * HOW TO ADD YOUR AFFILIATE LINK
 *   - For Amazon: just set your tracking ID once in src/config/site.ts.
 *     It's added to every Amazon link automatically.
 *   - For other stores (REI, brand websites, etc.): paste the affiliate link
 *     they give you into `link.url` and set `link.retailer` to the store name.
 *
 * PHOTOS
 *   - Leave `image` out to show the built-in illustration for the category.
 *   - To use a real photo, put the file in /public/products/ and set
 *     image: "/products/your-photo.jpg". Only use photos you have permission
 *     to use (affiliate programs usually provide official product images).
 *
 * PRICES are approximate list prices as of the "lastUpdated" date in
 * src/config/site.ts. Shoppers always see the live price on the retailer site.
 * RATINGS are our editorial scores out of 5.
 */

import { amazonSearch } from "@/lib/affiliate";

export type Badge = "Editor's Pick" | "Best Value" | "Trending Now" | "Premium Pick" | "Family Favorite";

export type CategorySlug =
  | "shade-tents"
  | "chairs"
  | "coolers"
  | "umbrellas"
  | "toys-games"
  | "towels-blankets"
  | "wagons-carts"
  | "bags-accessories";

export type Category = {
  slug: CategorySlug;
  name: string;
  short: string;
  guide: string[];
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: CategorySlug;
  price: number;
  rating: number;
  badges?: Badge[];
  featured?: boolean;
  summary: string;
  whyWePicked: string;
  specs: Record<string, string>;
  pros: string[];
  cons: string[];
  link: { retailer: string; url: string };
  image?: string;
};

export const categories: Category[] = [
  {
    slug: "shade-tents",
    name: "Shade & Tents",
    short: "Pop-up shelters and canopies that keep the sun off.",
    guide: [
      "Look for UPF 50+ fabric. It blocks about 98% of UV rays.",
      "Open-sided canopies catch the breeze and stay cooler than enclosed tents.",
      "Sand pockets or sandbags matter more than stakes on soft beaches.",
    ],
  },
  {
    slug: "chairs",
    name: "Beach Chairs",
    short: "Backpack, low-rise and lay-flat chairs for all-day lounging.",
    guide: [
      "Backpack straps free up your hands for everything else.",
      "Aluminum frames are lighter and won't rust in salt air.",
      "Low seats are comfier in the sand; taller seats are easier to get out of.",
    ],
  },
  {
    slug: "coolers",
    name: "Coolers",
    short: "Soft packs, rolling coolers and multi-day ice keepers.",
    guide: [
      "Soft coolers are easy to carry for a day trip; hard coolers hold ice for days.",
      "Wide, never-flat wheels roll over sand far better than skinny plastic ones.",
      "Pre-chill your cooler the night before for much longer ice life.",
    ],
  },
  {
    slug: "umbrellas",
    name: "Umbrellas",
    short: "Wind-resistant umbrellas with real sand anchors.",
    guide: [
      "Wind is the enemy. Look for vents and a screw-in or sandbag anchor.",
      "Check for ASTM F3681 compliance, the beach umbrella safety standard.",
      "A tilt feature lets you follow the sun without re-planting.",
    ],
  },
  {
    slug: "toys-games",
    name: "Toys & Games",
    short: "Sand toys for the kids and lawn games for everyone.",
    guide: [
      "Pick toys that rinse clean. Avoid lots of tiny crevices that trap sand.",
      "A mesh bag lets sand fall out before you get back in the car.",
      "Leave electronics and plush toys at home.",
    ],
  },
  {
    slug: "towels-blankets",
    name: "Towels & Blankets",
    short: "Sand-free mats, quick-dry towels and big family blankets.",
    guide: [
      "Sand-free mats use a special weave that lets sand fall through.",
      "Turkish cotton and microfiber dry much faster than thick terry.",
      "Corner pockets or stakes keep blankets down on windy days.",
    ],
  },
  {
    slug: "wagons-carts",
    name: "Wagons & Carts",
    short: "Haul everything from the car to the water in one trip.",
    guide: [
      "Wide balloon or all-terrain wheels are a must on soft sand.",
      "Check that it folds small enough to fit in your trunk with the gear.",
      "A tailgate-style table or cup holders are nice extras.",
    ],
  },
  {
    slug: "bags-accessories",
    name: "Bags & Accessories",
    short: "Totes, speakers, dry bags and the little things that matter.",
    guide: [
      "Rubber or EVA totes rinse clean and won't hold onto sand.",
      "For speakers, look for an IP67 rating or better (dustproof and waterproof).",
      "A dry bag or phone pouch keeps valuables safe at the water's edge.",
    ],
  },
];

export const products: Product[] = [
  // ---------------- SHADE & TENTS ----------------
  {
    slug: "shibumi-shade-mini",
    name: "Shibumi Shade Mini",
    brand: "Shibumi",
    category: "shade-tents",
    price: 249,
    rating: 4.9,
    badges: ["Editor's Pick", "Premium Pick"],
    featured: true,
    summary: "A wind-powered canopy that floats overhead with no poles in your way.",
    whyWePicked:
      "Shibumi's single-arch, wind-powered design has become a beach icon. The Mini casts generous shade for 2–4 people, sets up in about two minutes and packs into a small backpack. It's the shade that makes everyone on the beach ask, \"What is that?\"",
    specs: { Shade: "About 50 sq ft", Weight: "About 7 lbs", Fabric: "UPF 50+ ripstop", "Set-up": "About 2 minutes" },
    pros: ["Breezy, open design stays cool", "Very little to set up", "Packs small"],
    cons: ["Needs some breeze to look its best", "Premium price"],
    link: { retailer: "Shibumi", url: "https://shibumishade.com/" },
  },
  {
    slug: "sun-ninja-pop-up-beach-tent",
    name: "Sun Ninja Pop Up Beach Tent",
    brand: "Sun Ninja",
    category: "shade-tents",
    price: 130,
    rating: 4.7,
    badges: ["Family Favorite"],
    featured: true,
    summary: "Open-sided four-pole canopy with sand pockets that anchor it fast.",
    whyWePicked:
      "The Sun Ninja is one of the most-recommended beach shades for families. Its aluminum poles and Lycra-style canopy go up quickly, and you fill the corner pockets with sand instead of hunting for stakes.",
    specs: { Sizes: "4-person and 6-person", Weight: "About 8 lbs", Fabric: "UPF 50+", Frame: "Aluminum" },
    pros: ["Huge shaded area", "Holds up well in wind once filled", "Lightweight aluminum frame"],
    cons: ["Filling sand pockets takes a few minutes"],
    link: { retailer: "Amazon", url: amazonSearch("Sun Ninja Pop Up Beach Tent") },
  },
  {
    slug: "gorich-beach-tent-canopy",
    name: "Gorich Beach Tent Sun Shelter",
    brand: "Gorich",
    category: "shade-tents",
    price: 50,
    rating: 4.4,
    badges: ["Best Value"],
    summary: "Budget-friendly canopy-style shelter with UPF 50+ and included sandbags.",
    whyWePicked:
      "If you want proper UPF shade without spending much, Gorich keeps showing up as the value pick. It comes with sandbags and stakes and is simple enough to set up solo.",
    specs: { Fabric: "UPF 50+ with sun-proof coating", Poles: "Fiberglass", Includes: "Sandbags, stakes, carry bag" },
    pros: ["Great price", "Solid sun protection", "Everything you need included"],
    cons: ["Fiberglass poles feel less sturdy than aluminum"],
    link: { retailer: "Amazon", url: amazonSearch("Gorich beach tent sun shelter canopy") },
  },
  {
    slug: "outdoormaster-pop-up-beach-tent",
    name: "OutdoorMaster Pop Up Beach Tent",
    brand: "OutdoorMaster",
    category: "shade-tents",
    price: 60,
    rating: 4.5,
    summary: "Instant pop-up shelter with a floor, perfect for naps and little ones.",
    whyWePicked:
      "Some days you want walls, a floor and a place for the baby to nap. This instant pop-up opens in seconds and comes with sandbags and stakes for a secure pitch.",
    specs: { Capacity: "2–3 people (larger sizes available)", "Set-up": "Instant pop-up", Fabric: "UPF 50+", Includes: "Sandbags and stakes" },
    pros: ["Opens in seconds", "Floor keeps gear sand-free", "Privacy for changing"],
    cons: ["Folding it back up takes practice", "Warmer inside than open canopies"],
    link: { retailer: "Amazon", url: amazonSearch("OutdoorMaster pop up beach tent") },
  },

  // ---------------- CHAIRS ----------------
  {
    slug: "tommy-bahama-backpack-chair",
    name: "Tommy Bahama 5-Position Backpack Beach Chair",
    brand: "Tommy Bahama",
    category: "chairs",
    price: 70,
    rating: 4.8,
    badges: ["Editor's Pick"],
    featured: true,
    summary: "The classic backpack chair: lay-flat, cooler pouch, towel bar and more.",
    whyWePicked:
      "It's a coastal icon for good reason. Padded backpack straps, an insulated cooler pouch, a towel bar and five recline positions, including fully flat for sunbathing on your stomach.",
    specs: { Positions: "5, including lay-flat", Frame: "Aluminum", Weight: "About 10 lbs", Capacity: "About 300 lbs" },
    pros: ["Carries hands-free", "Tons of storage", "Lay-flat for tanning"],
    cons: ["Heavier than minimalist chairs"],
    link: { retailer: "Amazon", url: amazonSearch("Tommy Bahama 5 position backpack beach chair") },
  },
  {
    slug: "helinox-beach-chair",
    name: "Helinox Beach Chair",
    brand: "Helinox",
    category: "chairs",
    price: 190,
    rating: 4.7,
    badges: ["Premium Pick"],
    summary: "Ultralight, ultra-packable chair with wide sand-friendly feet.",
    whyWePicked:
      "Helinox chairs pack down to the size of a water bottle and weigh almost nothing. The beach version sits low with wide feet that don't sink into sand. It's ideal if you walk a long way to your spot.",
    specs: { Weight: "About 3 lbs", Frame: "DAC aluminum", "Packed size": "About 20 x 5 in", Capacity: "About 320 lbs" },
    pros: ["Incredibly light", "Packs tiny", "Very comfortable sling seat"],
    cons: ["Expensive", "Takes a minute to assemble"],
    link: { retailer: "Amazon", url: amazonSearch("Helinox Beach Chair") },
  },
  {
    slug: "gci-waterside-backpack-chair",
    name: "GCI Outdoor Waterside Backpack Beach Chair",
    brand: "GCI Outdoor",
    category: "chairs",
    price: 80,
    rating: 4.6,
    summary: "Springy, comfortable low chair with a padded backpack carry.",
    whyWePicked:
      "GCI's spring-action folding makes this chair easy to open and close, and the fabric is sturdy enough to last for many summers. It's a strong runner-up to the classic backpack chair.",
    specs: { Frame: "Steel, powder-coated", Weight: "About 9 lbs", Extras: "Cup holder, storage pocket", Carry: "Backpack straps" },
    pros: ["Smooth fold mechanism", "Very durable", "Comfortable seat angle"],
    cons: ["Steel frame is heavier than aluminum"],
    link: { retailer: "Amazon", url: amazonSearch("GCI Outdoor Waterside backpack beach chair") },
  },
  {
    slug: "coleman-utopia-breeze-beach-chair",
    name: "Coleman Utopia Breeze Beach Chair",
    brand: "Coleman",
    category: "chairs",
    price: 35,
    rating: 4.4,
    badges: ["Best Value"],
    summary: "Lightweight, low-cost chair that's easy to grab for every trip.",
    whyWePicked:
      "One of the lightest chairs at its price, with a carry bag included. It's the easy pick when you need chairs for the whole family without spending a fortune.",
    specs: { Weight: "About 5.3 lbs", Frame: "Aluminum", Includes: "Carry bag", Extras: "Cup holder" },
    pros: ["Affordable", "Light to carry", "Rust-resistant frame"],
    cons: ["Less padding than pricier chairs"],
    link: { retailer: "Amazon", url: amazonSearch("Coleman Utopia Breeze beach chair") },
  },
  {
    slug: "shibumi-beach-chair",
    name: "Shibumi Beach Chair",
    brand: "Shibumi",
    category: "chairs",
    price: 170,
    rating: 4.6,
    badges: ["Trending Now"],
    summary: "A taller chair that's easy to get in and out of, from the shade makers.",
    whyWePicked:
      "Low beach chairs are cozy, but getting up can be a workout. Shibumi's chair sits at a friendlier height while staying stable in sand. It's a great match for anyone who wants comfort without the squat.",
    specs: { Seat: "Taller, easier exit", Frame: "Aluminum", Carry: "Shoulder strap" },
    pros: ["Easy to get out of", "Stable in sand", "High-quality build"],
    cons: ["Pricey", "Fewer storage pockets"],
    link: { retailer: "Shibumi", url: "https://shibumishade.com/" },
  },

  // ---------------- COOLERS ----------------
  {
    slug: "yeti-tundra-45",
    name: "YETI Tundra 45 Hard Cooler",
    brand: "YETI",
    category: "coolers",
    price: 325,
    rating: 4.8,
    badges: ["Premium Pick"],
    summary: "Rotomolded hard cooler that holds ice for days, not hours.",
    whyWePicked:
      "The Tundra 45 is the standard every other hard cooler is measured against. It's nearly indestructible, and it keeps ice through a long weekend at the beach house.",
    specs: { Capacity: "About 28 cans with ice", Construction: "Rotomolded", "Ice retention": "Multiple days", Weight: "About 23 lbs empty" },
    pros: ["Best-in-class ice retention", "Built to last decades", "Doubles as a seat"],
    cons: ["Heavy to carry across sand", "Expensive"],
    link: { retailer: "Amazon", url: amazonSearch("YETI Tundra 45 cooler") },
  },
  {
    slug: "rtic-soft-pack-30",
    name: "RTIC Soft Pack 30",
    brand: "RTIC",
    category: "coolers",
    price: 100,
    rating: 4.7,
    badges: ["Editor's Pick"],
    featured: true,
    summary: "Leakproof soft cooler that carries like a duffel and weighs about 4 lbs.",
    whyWePicked:
      "For a typical beach day, a soft cooler is simply easier. The Soft Pack 30 holds plenty of drinks and snacks, keeps them cold all day, and slings over your shoulder.",
    specs: { Capacity: "About 30 cans", Weight: "About 4 lbs empty", Zipper: "Leakproof", Carry: "Shoulder strap and handles" },
    pros: ["Light and easy to carry", "Great value for the performance", "Won't leak"],
    cons: ["Ice retention is shorter than a hard cooler"],
    link: { retailer: "Amazon", url: amazonSearch("RTIC Soft Pack 30 cooler") },
  },
  {
    slug: "rovr-rollr-45",
    name: "ROVR RollR 45 Wheeled Cooler",
    brand: "ROVR",
    category: "coolers",
    price: 400,
    rating: 4.7,
    badges: ["Premium Pick"],
    summary: "All-terrain wheeled cooler with a dry bin and accessory bucket.",
    whyWePicked:
      "Big never-flat wheels and a long handle let the RollR roll over sand that would stop other coolers in their tracks. The add-on dry bin keeps sandwiches out of the meltwater.",
    specs: { Wheels: "8-inch never-flat", Construction: "Rotomolded", Extras: "Dry bin, optional bike hitch" },
    pros: ["Rolls easily on sand", "Excellent ice retention", "Smart organization"],
    cons: ["Pricey", "Heavy when full"],
    link: { retailer: "Amazon", url: amazonSearch("ROVR RollR 45 wheeled cooler") },
  },
  {
    slug: "igloo-recool",
    name: "Igloo Recool 16 Qt Biodegradable Cooler",
    brand: "Igloo",
    category: "coolers",
    price: 15,
    rating: 4.0,
    badges: ["Best Value"],
    summary: "An eco-friendly, ultra-cheap cooler for quick trips.",
    whyWePicked:
      "Made from a biodegradable pulp material, the Recool is a guilt-free choice for a short beach visit when you don't want to haul your big cooler.",
    specs: { Capacity: "16 quarts", Material: "Biodegradable pulp", Weight: "About 1 lb" },
    pros: ["Very inexpensive", "Eco-friendly", "Super light"],
    cons: ["Not built for multi-day use", "Keep it away from heavy rain"],
    link: { retailer: "Amazon", url: amazonSearch("Igloo Recool cooler") },
  },
  {
    slug: "rtic-ultra-light-52-wheeled",
    name: "RTIC 52 Qt Ultra-Light Wheeled Cooler",
    brand: "RTIC",
    category: "coolers",
    price: 230,
    rating: 4.6,
    badges: ["Family Favorite"],
    summary: "Big-family capacity on wheels, about 30% lighter than rotomolded rivals.",
    whyWePicked:
      "RTIC's injection-molded Ultra-Light line keeps weight down without giving up much ice retention. The 52-quart wheeled version is a great all-day cooler for big groups.",
    specs: { Capacity: "52 quarts", Wheels: "Heavy-duty", Construction: "Injection-molded, ultra-light" },
    pros: ["Lighter than most hard coolers", "Large capacity", "Good value"],
    cons: ["Wheels are narrower than true all-terrain coolers"],
    link: { retailer: "Amazon", url: amazonSearch("RTIC 52 qt ultra-light wheeled cooler") },
  },

  // ---------------- UMBRELLAS ----------------
  {
    slug: "beachbub-all-in-one-umbrella",
    name: "BeachBUB All-In-One Beach Umbrella System",
    brand: "BeachBUB",
    category: "umbrellas",
    price: 160,
    rating: 4.8,
    badges: ["Editor's Pick"],
    featured: true,
    summary: "The wind-resistant umbrella with a sand-filled base. No digging required.",
    whyWePicked:
      "The BeachBUB's base fills with sand to anchor the umbrella, so there's no auger and no flying umbrellas. It meets the ASTM F3681 beach umbrella safety standard and holds firm in serious wind.",
    specs: { Canopy: "About 7.5 ft", Fabric: "UPF 50+", Anchor: "Sand-filled base", Standard: "ASTM F3681 compliant" },
    pros: ["Exceptional wind stability", "Easy for anyone to set up", "Tilts to follow the sun"],
    cons: ["Base adds some bulk to carry"],
    link: { retailer: "Amazon", url: amazonSearch("BeachBUB all-in-one beach umbrella") },
  },
  {
    slug: "sport-brella-super-brella",
    name: "Sport-Brella Super-Brella",
    brand: "Sport-Brella",
    category: "umbrellas",
    price: 70,
    rating: 4.6,
    summary: "Umbrella-meets-shelter with a big canopy and adjustable side panel.",
    whyWePicked:
      "Part umbrella, part tent. The Super-Brella's big canopy and side panel block low afternoon sun that standard umbrellas miss, and it anchors with stakes and a ground screw.",
    specs: { Canopy: "About 8 ft", Fabric: "UPF 50+", Extras: "Side panel, wind vents" },
    pros: ["Blocks sun from the side too", "Very good value", "Packs like an umbrella"],
    cons: ["Stakes are less useful in very soft sand"],
    link: { retailer: "Amazon", url: amazonSearch("Sport-Brella Super-Brella") },
  },
  {
    slug: "tommy-bahama-beach-umbrella",
    name: "Tommy Bahama Beach Umbrella with Tilt",
    brand: "Tommy Bahama",
    category: "umbrellas",
    price: 60,
    rating: 4.4,
    badges: ["Best Value"],
    summary: "A classic 7-ft beach umbrella with tilt and a built-in sand anchor.",
    whyWePicked:
      "Colorful, simple and reliable. Tommy Bahama's umbrella tilts to chase the shade, has a wind vent, and comes with a carry bag that has a shoulder strap.",
    specs: { Canopy: "About 7 ft", Fabric: "UPF 50+", Extras: "Tilt, wind vent, carry bag" },
    pros: ["Fun prints", "Affordable", "Easy to carry"],
    cons: ["Less wind-stable than sand-base designs"],
    link: { retailer: "Amazon", url: amazonSearch("Tommy Bahama beach umbrella tilt") },
  },

  // ---------------- TOYS & GAMES ----------------
  {
    slug: "spikeball-pro-set",
    name: "Spikeball Pro Set",
    brand: "Spikeball",
    category: "toys-games",
    price: 80,
    rating: 4.8,
    badges: ["Editor's Pick"],
    featured: true,
    summary: "The fast-paced 2-on-2 game that took over every beach in America.",
    whyWePicked:
      "Spikeball plays great on sand. The Pro set has a tighter net and sturdier legs for more competitive rallies, and it packs into a small bag.",
    specs: { Players: "4", Includes: "Net, frame, 2 balls, bag", Ages: "8+" },
    pros: ["Endlessly fun", "Great on sand", "Portable"],
    cons: ["Has a learning curve for beginners"],
    link: { retailer: "Amazon", url: amazonSearch("Spikeball Pro set") },
  },
  {
    slug: "gosports-4-way-volleyball",
    name: "GoSports 4-Way Volleyball & Badminton Set",
    brand: "GoSports",
    category: "toys-games",
    price: 150,
    rating: 4.5,
    badges: ["Family Favorite"],
    summary: "A four-square net system for volleyball and badminton with friends.",
    whyWePicked:
      "It lets up to eight players get in on the action at once. The four-court design is a party, and set-up is surprisingly quick.",
    specs: { Players: "Up to 8", Includes: "Net, poles, volleyball, rackets, birdies", Carry: "Carry bag" },
    pros: ["Big-group fun", "Two games in one", "Quality materials"],
    cons: ["Takes up a lot of space"],
    link: { retailer: "Amazon", url: amazonSearch("GoSports 4-way volleyball set") },
  },
  {
    slug: "sand-pal-sand-castle-kit",
    name: "Sand Pal Sand Castle Building Kit",
    brand: "Sand Pal",
    category: "toys-games",
    price: 30,
    rating: 4.6,
    badges: ["Best Value"],
    summary: "Molds, shovels and tools in a mesh bag that lets sand fall out.",
    whyWePicked:
      "Kids love building towers and moats with these molds. The included mesh storage bag means you don't bring half the beach home.",
    specs: { Includes: "Molds, shovels, tools", Storage: "Mesh bag", Ages: "3+" },
    pros: ["Hours of entertainment", "Easy to rinse clean", "Mesh bag included"],
    cons: ["Younger kids may need help with the bigger molds"],
    link: { retailer: "Amazon", url: amazonSearch("Sand castle building kit molds mesh bag") },
  },
  {
    slug: "waboba-moon-ball",
    name: "Waboba Moon Ball",
    brand: "Waboba",
    category: "toys-games",
    price: 12,
    rating: 4.5,
    summary: "A crater-covered ball that bounces sky-high, even on hard sand.",
    whyWePicked:
      "A cheap, small and ridiculously fun toy for all ages. Waboba also makes balls that bounce off the water, so pick up one of each.",
    specs: { Size: "About 2.5 in", Ages: "3+" },
    pros: ["Fits in a pocket", "Fun for all ages", "Very cheap"],
    cons: ["Easy to lose in the waves"],
    link: { retailer: "Amazon", url: amazonSearch("Waboba Moon Ball") },
  },
  {
    slug: "nerf-vortex-aero-howler",
    name: "Nerf Vortex Aero Howler",
    brand: "Nerf",
    category: "toys-games",
    price: 15,
    rating: 4.4,
    summary: "The whistling foam football that sails a mile and is easy to catch.",
    whyWePicked:
      "A beach classic. The tail stabilizes the throw, the whistle makes it fun, and soft foam means no one gets hurt.",
    specs: { Material: "Foam", Ages: "6+" },
    pros: ["Easy to throw far", "Rinses clean", "Soft and safe"],
    cons: ["Tail can tear with rough use"],
    link: { retailer: "Amazon", url: amazonSearch("Nerf Vortex Aero Howler") },
  },

  // ---------------- TOWELS & BLANKETS ----------------
  {
    slug: "cgear-sand-free-mat",
    name: "CGEAR Sand-Free Mat",
    brand: "CGEAR",
    category: "towels-blankets",
    price: 70,
    rating: 4.7,
    badges: ["Editor's Pick"],
    featured: true,
    summary: "The original sand-free mat. Sand falls through and doesn't come back.",
    whyWePicked:
      "CGEAR basically invented the category. Its patented weave lets sand and water slip through, so your blanket stays clean all day. It's also tough enough for camping and picnics.",
    specs: { Sizes: "Several, up to about 10 x 10 ft", Material: "Military-grade woven mesh", Extras: "Corner anchor loops" },
    pros: ["Really works", "Very durable", "Great for big groups"],
    cons: ["Not as soft as a cotton blanket"],
    link: { retailer: "Amazon", url: amazonSearch("CGEAR sand free mat") },
  },
  {
    slug: "wekapo-beach-blanket",
    name: "WEKAPO Sand-Proof Beach Blanket",
    brand: "WEKAPO",
    category: "towels-blankets",
    price: 25,
    rating: 4.5,
    badges: ["Best Value"],
    summary: "A 10 x 9 ft blanket that fits about seven adults and packs tiny.",
    whyWePicked:
      "A best-seller for a reason: it's huge, it costs little, and it folds into a pouch the size of a water bottle. Sand pockets and stakes keep it put.",
    specs: { Size: "About 10 x 9 ft", Material: "Quick-dry nylon", Anchors: "Stakes and sand pockets" },
    pros: ["Huge for the price", "Packs very small", "Dries fast"],
    cons: ["Thin, so less cushioning"],
    link: { retailer: "Amazon", url: amazonSearch("WEKAPO beach blanket sandproof") },
  },
  {
    slug: "sand-cloud-turkish-towel",
    name: "Sand Cloud Turkish Beach Towel",
    brand: "Sand Cloud",
    category: "towels-blankets",
    price: 65,
    rating: 4.6,
    badges: ["Trending Now"],
    summary: "Loop-free Turkish cotton that sand rolls right off of.",
    whyWePicked:
      "Turkish cotton is thin, absorbent and fast-drying, and its flat weave doesn't grab sand like a terry towel. Sand Cloud's prints are gorgeous, and the brand supports ocean conservation.",
    specs: { Material: "Organic Turkish cotton", Size: "About 39 x 70 in", Weave: "Flat, loop-free" },
    pros: ["Sand shakes off easily", "Dries quickly", "Beautiful designs"],
    cons: ["Less plush than a thick towel"],
    link: { retailer: "Sand Cloud", url: "https://sandcloud.com/" },
  },
  {
    slug: "dock-and-bay-quick-dry-towel",
    name: "Dock & Bay Quick Dry Beach Towel",
    brand: "Dock & Bay",
    category: "towels-blankets",
    price: 45,
    rating: 4.5,
    summary: "Microfiber towel that dries fast and comes with its own pouch.",
    whyWePicked:
      "Dock & Bay towels are made from recycled plastic bottles, dry in minutes, and repel sand. They're perfect for travel and beach-hopping.",
    specs: { Material: "Recycled microfiber", Extras: "Carry pouch", Sizes: "Large and XL" },
    pros: ["Dries in minutes", "Sand-resistant", "Packs small"],
    cons: ["Microfiber feel isn't for everyone"],
    link: { retailer: "Amazon", url: amazonSearch("Dock and Bay quick dry beach towel") },
  },

  // ---------------- WAGONS & CARTS ----------------
  {
    slug: "macsports-heavy-duty-all-terrain-wagon",
    name: "Mac Sports Heavy Duty All-Terrain Beach Wagon",
    brand: "Mac Sports",
    category: "wagons-carts",
    price: 120,
    rating: 4.6,
    badges: ["Editor's Pick"],
    featured: true,
    summary: "Collapsible wagon with wide all-terrain wheels and a big capacity.",
    whyWePicked:
      "Mac Sports' all-terrain wagon is a trusted all-rounder. The wide wheels handle sand, boardwalks and parking lots, and it folds flat for the trunk.",
    specs: { Capacity: "About 225 lbs", Wheels: "Wide all-terrain", Fold: "Collapsible" },
    pros: ["Handles mixed terrain well", "Great value", "Easy to fold"],
    cons: ["Very soft, deep sand still takes effort"],
    link: { retailer: "Amazon", url: amazonSearch("Mac Sports heavy duty all terrain beach wagon") },
  },
  {
    slug: "big-kahuna-beach-wagon",
    name: "Big Kahuna Beach Wagon",
    brand: "Big Kahuna",
    category: "wagons-carts",
    price: 400,
    rating: 4.7,
    badges: ["Premium Pick"],
    summary: "Massive balloon tires that glide over the softest sand.",
    whyWePicked:
      "If your beach is all soft, deep sand, balloon tires are a game changer. The Big Kahuna floats over sand that bogs down regular wagons.",
    specs: { Wheels: "Balloon tires", Frame: "Rust-resistant", Capacity: "Large" },
    pros: ["Best on soft sand", "Very sturdy", "Huge cargo area"],
    cons: ["Expensive", "Bulkier to store"],
    link: { retailer: "Amazon", url: amazonSearch("Big Kahuna beach wagon balloon tires") },
  },
  {
    slug: "coleman-xl-collapsible-wagon",
    name: "Coleman XL Collapsible Wagon",
    brand: "Coleman",
    category: "wagons-carts",
    price: 110,
    rating: 4.4,
    badges: ["Family Favorite"],
    summary: "Extra-large folding wagon for families who bring everything.",
    whyWePicked:
      "Room for coolers, chairs, umbrellas and toys in a single trip. It's a dependable, easy-to-find choice from a trusted outdoor brand.",
    specs: { Size: "Extra-large", Fold: "Collapsible", Extras: "Cup holders" },
    pros: ["Lots of room", "Folds compactly", "Sturdy frame"],
    cons: ["Standard wheels are better on firm sand"],
    link: { retailer: "Amazon", url: amazonSearch("Coleman XL collapsible wagon") },
  },
  {
    slug: "seina-folding-wagon",
    name: "Seina Folding Wagon",
    brand: "Seina",
    category: "wagons-carts",
    price: 70,
    rating: 4.3,
    badges: ["Best Value"],
    summary: "Budget-friendly collapsible wagon for lighter loads.",
    whyWePicked:
      "If you only go to the beach a few times a summer, this simple folding wagon gets the job done for a lot less money.",
    specs: { Fold: "Collapsible", Capacity: "Moderate", Extras: "Storage pockets" },
    pros: ["Low price", "Light to lift into the car"],
    cons: ["Narrow wheels struggle in deep sand"],
    link: { retailer: "Amazon", url: amazonSearch("Seina folding wagon beach") },
  },

  // ---------------- BAGS & ACCESSORIES ----------------
  {
    slug: "jbl-charge-6",
    name: "JBL Charge 6 Bluetooth Speaker",
    brand: "JBL",
    category: "bags-accessories",
    price: 200,
    rating: 4.8,
    badges: ["Editor's Pick", "Trending Now"],
    featured: true,
    summary: "Big sound, all-day battery and fully dustproof and waterproof.",
    whyWePicked:
      "The Charge 6 is the speaker reviewers keep coming back to for beach days. It's IP68 rated against sand and water, runs about 20+ hours, and can charge your phone too.",
    specs: { Rating: "IP68 dust and water", Battery: "About 20+ hours", Extras: "Power bank, multi-speaker pairing" },
    pros: ["Loud and clear", "Sand- and water-proof", "Battery lasts all day"],
    cons: ["Pricier than small speakers"],
    link: { retailer: "Amazon", url: amazonSearch("JBL Charge 6") },
  },
  {
    slug: "soundcore-boom-2",
    name: "Soundcore Boom 2 Speaker",
    brand: "Soundcore by Anker",
    category: "bags-accessories",
    price: 130,
    rating: 4.6,
    badges: ["Best Value"],
    summary: "Bass-heavy waterproof speaker that floats, at a friendly price.",
    whyWePicked:
      "It's a value favorite with punchy bass, IPX7 waterproofing and the ability to float in the water. It's a lot of speaker for the money.",
    specs: { Rating: "IPX7 waterproof, floats", Battery: "About 24 hours", Extras: "RGB lights" },
    pros: ["Great bass", "Floats", "Good value"],
    cons: ["Not rated for dust"],
    link: { retailer: "Amazon", url: amazonSearch("Soundcore Boom 2") },
  },
  {
    slug: "bogg-bag-original",
    name: "Bogg Bag Original",
    brand: "Bogg",
    category: "bags-accessories",
    price: 90,
    rating: 4.7,
    badges: ["Family Favorite"],
    summary: "The washable, nearly indestructible tote that stands up on its own.",
    whyWePicked:
      "Bogg Bags are the beach tote of the moment. They're made of flexible EVA that you rinse with a hose, they don't hold onto sand, and they're big enough for the whole family's gear.",
    specs: { Material: "EVA rubber", Size: "Large", Care: "Rinse clean" },
    pros: ["Sand washes right off", "Stands up on its own", "Huge capacity"],
    cons: ["Heavier than a fabric tote", "Pricey for a bag"],
    link: { retailer: "Amazon", url: amazonSearch("Bogg Bag original large tote") },
  },
  {
    slug: "earth-pak-waterproof-dry-bag",
    name: "Earth Pak Waterproof Dry Bag",
    brand: "Earth Pak",
    category: "bags-accessories",
    price: 25,
    rating: 4.7,
    badges: ["Best Value"],
    summary: "Roll-top dry bag with a waterproof phone case included.",
    whyWePicked:
      "Keep phones, keys and wallets dry on the sand, in a kayak or on a paddleboard. It comes in several sizes and includes a phone pouch.",
    specs: { Sizes: "10L–55L", Closure: "Roll-top", Includes: "Waterproof phone case" },
    pros: ["Truly waterproof", "Inexpensive", "Many sizes"],
    cons: ["Roll-top takes a moment to open"],
    link: { retailer: "Amazon", url: amazonSearch("Earth Pak waterproof dry bag") },
  },
  {
    slug: "supergoop-play-spf-50",
    name: "Supergoop! PLAY Everyday Lotion SPF 50",
    brand: "Supergoop!",
    category: "bags-accessories",
    price: 22,
    rating: 4.6,
    summary: "Water-resistant, broad-spectrum sunscreen that doesn't feel greasy.",
    whyWePicked:
      "The best beach gear is useless without sunscreen. PLAY is broad-spectrum SPF 50, water-resistant for 80 minutes, and pleasant enough that you'll actually reapply.",
    specs: { SPF: "50, broad spectrum", "Water resistance": "80 minutes", Size: "Multiple" },
    pros: ["Lightweight feel", "Water-resistant", "Great for face and body"],
    cons: ["Costs more than drugstore brands"],
    link: { retailer: "Amazon", url: amazonSearch("Supergoop PLAY everyday lotion SPF 50") },
  },
];

// ---------- Helpers (you don't need to edit below this line) ----------

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsInCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function relatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}

export const allBadges: Badge[] = ["Editor's Pick", "Best Value", "Trending Now", "Premium Pick", "Family Favorite"];

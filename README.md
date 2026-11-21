# Welcome to the Beach 🏖️

A curated shopping site for the newest and best beach gear: tents, chairs, coolers, umbrellas, toys, towels, wagons and accessories.

It's an **affiliate storefront**. Each "Check price" button sends shoppers to a retailer (Amazon, brand sites and so on), and you earn a commission on purchases. There's no inventory, checkout or shipping to manage.

---

## The 3 files you'll actually edit

| What you want to change | File |
| --- | --- |
| Add, remove or edit products, prices, descriptions and links | `src/data/products.ts` |
| Your Amazon affiliate ID, site name and tagline | `src/config/site.ts` |
| About page and disclosure text | `src/app/about/page.tsx`, `src/app/disclosure/page.tsx` |

You can edit any of these right on GitHub: open the file, click the ✏️ pencil icon, make your change, and click **Commit changes**. Once the site is published (see below), it updates itself about two minutes later.

### Adding a product
Open `src/data/products.ts`, copy an existing product block, paste it, and change the details. The instructions at the top of that file walk you through it.

### Earning commission
1. Sign up for **Amazon Associates**: https://affiliate-program.amazon.com
2. Once approved, copy your tracking ID (it looks like `yourname-20`).
3. Paste it into `amazonTag` in `src/config/site.ts`.

Every Amazon link on the site now includes your ID. For other stores (REI, Shibumi, Sand Cloud and so on), join their affiliate program and paste the link they give you into that product's `link.url`.

### Product photos
Products currently show friendly illustrations. Most affiliate programs provide official product images you're allowed to use. Put a photo in `public/products/` and add `image: "/products/photo-name.jpg"` to the product. Only use photos you have permission to use.

---

## Publishing the site (free, with GitHub Pages)

1. Merge this branch into `main`.
2. On GitHub, open the repository's **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. That's it. Each time `main` changes, the site rebuilds automatically. It'll be live at
   `https://<your-github-username>.github.io/welcometothebeach/`

If you later buy a custom domain (like `welcometothebeach.com`), you can add it under Settings → Pages. Then update `url` in `src/config/site.ts` and remove the `NEXT_PUBLIC_BASE_PATH` lines from `.github/workflows/deploy.yml`.

---

## For developers

Built with Next.js (static export), TypeScript and Tailwind CSS.

```bash
npm install
npm run dev      # local preview at http://localhost:3000
npm run build    # static site written to ./out
npm run lint
```

The newsletter form in `src/components/Newsletter.tsx` is not connected to an email service yet. Hook it up to Buttondown, Mailchimp or similar.

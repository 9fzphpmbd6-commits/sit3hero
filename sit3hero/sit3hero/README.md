# SIT3HERO™ — Impact Wrench Metalworking Storefront

A production-ready, mobile-first dropshipping storefront mirroring siteh3ro.com with a Texas-themed color palette.
Built with React, TypeScript, Tailwind CSS, and Vite. Deploys to Netlify via GitHub.

## Quick Start

```bash
npm install
npm run dev      # Dev server on port 5000
npm run build    # Production build → dist/public/
```

## Deploy to Netlify

1. Push this repo to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist/public`
5. Node version: 18+

SPA routing is handled by `client/public/_redirects`.

## Stack

- **Framework**: Vite + React 18 (SPA with hash routing)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3 + custom Texas color palette
- **Fonts**: Oswald (display) + Barlow (body) via Google Fonts
- **State**: useCart global hook (in-memory)
- **Checkout**: Stripe stub in `client/src/lib/commerce.ts`
- **No backend required** — all data is client-side

## Project Structure

```
client/src/
├── data/
│   ├── products.ts       # Full product catalog (kits, holders, drills, reamers, taps)
│   └── siteConfig.ts     # Brand name, contact info, stats, social
├── lib/
│   ├── cart.ts           # useCart global hook (in-memory state)
│   └── commerce.ts       # Stripe checkout stub + formatPrice
├── components/
│   ├── Header.tsx        # Sticky dark nav, cart button, mobile menu
│   ├── Footer.tsx        # 4-column footer with links
│   ├── CartSidebar.tsx   # Slide-in cart with qty controls + Stripe CTA
│   └── ProductCard.tsx   # Product card with add-to-cart
└── pages/
    ├── Home.tsx          # Full homepage (hero, products, how-it-works, features, contact)
    ├── SizeGuide.tsx     # Interactive tool finder + kit grid
    ├── Shipping.tsx      # Shipping & returns policy
    ├── Privacy.tsx       # Privacy policy
    └── Warranty.tsx      # Warranty info
```

## Color Palette (Texas Theme)

| Token            | Value     | Usage                      |
|------------------|-----------|----------------------------|
| `texas-orange`   | `#C84B11` | Primary CTA, accents       |
| `texas-red`      | `#8B1A1A` | Award section background   |
| `texas-cream`    | `#F5EDD6` | Light backgrounds, text    |
| `texas-dark`     | `#1A1208` | Header, hero backgrounds   |
| `texas-brown`    | `#3D2B1F` | Card borders, overlays     |
| `texas-gold`     | `#D4900A` | Accent highlights          |

## How to Change Branding

Edit `client/src/data/siteConfig.ts`:
- Store name, tagline, description
- Contact email and phone
- Social media links
- Shipping thresholds and timelines
- Stripe publishable key

## How to Change Products

Edit `client/src/data/products.ts`. Each product follows the `Product` type:

```ts
type Product = {
  id: string;
  slug: string;
  sku: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  keyFeatures: string[];
  specs: Record<string, string>;
  price: number;
  compareAtPrice?: number;
  imageUrl: string;          // → client/public/images/
  isFeatured?: boolean;
  isBestSeller?: boolean;
  badge?: string;
};
```

## How to Add Real Images

Place product images in `client/public/images/` and update `imageUrl` in each product entry.
The ProductCard includes a graceful fallback if an image is missing.

## How to Plug In Stripe

Edit `client/src/lib/commerce.ts`:

```ts
export async function createStripeCheckout(items: CartItem[]): Promise<void> {
  const res = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });
  const { url } = await res.json();
  window.location.href = url;
}
```

Add your Stripe publishable key to `siteConfig.ts` and set up a backend session endpoint.

## License

MIT

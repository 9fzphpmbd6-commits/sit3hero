import type { CartItem } from "./cart";

// Stripe Checkout stub
// Replace with real Stripe Checkout session creation
export async function createStripeCheckout(items: CartItem[]): Promise<void> {
  console.log("Stripe checkout called with", items);
  // TODO: POST to your backend /api/create-checkout-session
  // const res = await fetch("/api/create-checkout-session", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ items }),
  // });
  // const { url } = await res.json();
  // window.location.href = url;
  alert("Stripe checkout integration coming soon! Items: " + items.map(i => i.product.name).join(", "));
}

// Format price as USD
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents);
}

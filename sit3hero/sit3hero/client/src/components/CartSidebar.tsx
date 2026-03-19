import { X, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../lib/cart";
import { formatPrice, createStripeCheckout } from "../lib/commerce";

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="cart-overlay fixed inset-0 bg-black/60 z-50"
        onClick={closeCart}
      />

      {/* Panel */}
      <div className="cart-panel fixed top-0 right-0 h-full w-full max-w-md bg-texas-dark border-l border-texas-brown/40 z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-texas-brown/40">
          <h2 className="font-display font-bold text-texas-cream text-xl tracking-wider uppercase">
            Your Cart ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="text-texas-cream/60 hover:text-texas-orange transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-16 h-16 bg-texas-brown/30 rounded-full flex items-center justify-center">
                <span className="text-3xl">🧰</span>
              </div>
              <p className="text-texas-cream/60 font-sans">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="btn-primary text-sm px-6 py-2"
              >
                Shop Tools
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex gap-4 bg-texas-brown/20 rounded-lg p-4 border border-texas-brown/30"
                >
                  {/* Image placeholder */}
                  <div className="w-16 h-16 bg-texas-brown/40 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-texas-cream/30 text-xs text-center font-sans leading-tight px-1">
                      {product.name.split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-texas-cream text-sm leading-tight">
                      {product.name}
                    </p>
                    <p className="text-texas-cream/50 text-xs mt-0.5 font-mono">
                      {product.sku}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      {/* Qty controls */}
                      <div className="flex items-center gap-2 bg-texas-dark border border-texas-brown/40 rounded">
                        <button
                          onClick={() => updateQty(product.id, quantity - 1)}
                          className="p-1.5 text-texas-cream/60 hover:text-texas-orange transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-texas-cream text-sm font-sans w-6 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQty(product.id, quantity + 1)}
                          className="p-1.5 text-texas-cream/60 hover:text-texas-orange transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-texas-orange">
                          {formatPrice(product.price * quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-texas-cream/30 hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-texas-brown/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-texas-cream/70 uppercase tracking-wider text-sm">
                Subtotal
              </span>
              <span className="font-display font-bold text-texas-cream text-xl">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-texas-cream/40 font-sans">
              Shipping calculated at checkout
            </p>
            <button
              onClick={() => createStripeCheckout(items)}
              className="w-full btn-primary text-base py-4"
            >
              Checkout with Stripe
            </button>
            <p className="text-center text-xs text-texas-cream/30 font-sans">
              🔒 Secure checkout powered by Stripe
            </p>
          </div>
        )}
      </div>
    </>
  );
}

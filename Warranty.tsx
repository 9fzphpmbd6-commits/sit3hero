import { useState, useEffect, useCallback } from "react";
import type { Product } from "../data/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
};

// Global state singleton
let globalCart: CartStore = { items: [], isOpen: false };
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((fn) => fn());
}

function setCart(updater: (prev: CartStore) => CartStore) {
  globalCart = updater(globalCart);
  notify();
}

export function useCart() {
  const [, rerender] = useState(0);

  useEffect(() => {
    const fn = () => rerender((n) => n + 1);
    listeners.add(fn);
    return () => { listeners.delete(fn); };
  }, []);

  const addItem = useCallback((product: Product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.items.find((i) => i.product.id === product.id);
      if (existing) {
        return {
          ...prev,
          isOpen: true,
          items: prev.items.map((i) =>
            i.product.id === product.id
              ? { ...i, quantity: i.quantity + qty }
              : i
          ),
        };
      }
      return {
        ...prev,
        isOpen: true,
        items: [...prev.items, { product, quantity: qty }],
      };
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((i) => i.product.id !== productId),
    }));
  }, []);

  const updateQty = useCallback((productId: string, qty: number) => {
    if (qty < 1) {
      removeItem(productId);
      return;
    }
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((i) =>
        i.product.id === productId ? { ...i, quantity: qty } : i
      ),
    }));
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setCart((prev) => ({ ...prev, items: [] }));
  }, []);

  const openCart = useCallback(() => {
    setCart((prev) => ({ ...prev, isOpen: true }));
  }, []);

  const closeCart = useCallback(() => {
    setCart((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const totalItems = globalCart.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = globalCart.items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return {
    items: globalCart.items,
    isOpen: globalCart.isOpen,
    totalItems,
    subtotal,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    openCart,
    closeCart,
  };
}

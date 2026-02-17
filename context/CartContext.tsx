"use client";

import { createContext, useContext, useEffect, useState } from "react";

/* ---------------- TYPES ---------------- */

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (v: boolean) => void;
};

/* ---------------- CONTEXT ---------------- */

const CartContext = createContext<CartContextType | null>(null);

/* ---------------- PROVIDER ---------------- */

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // LOAD CART FROM LOCALSTORAGE
  useEffect(() => {
    const stored = localStorage.getItem("royalmart_cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // SAVE CART
  useEffect(() => {
    localStorage.setItem("royalmart_cart", JSON.stringify(cart));
  }, [cart]);

  /* ---------- ADD TO CART ---------- */
  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exist = prev.find(
        (p) => p.id === item.id && p.size === item.size
      );

      if (exist) {
        return prev.map((p) =>
          p.id === item.id && p.size === item.size
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }

      return [...prev, item];
    });

    // auto open sidebar
    setIsCartOpen(true);
  };

  /* ---------- REMOVE ---------- */
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /* ---------- UPDATE QTY ---------- */
  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) return;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  /* ---------- CLEAR ---------- */
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("royalmart_cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

/* ---------------- HOOK ---------------- */

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};

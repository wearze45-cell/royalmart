"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`rm-cart-overlay${isOpen ? " active" : ""}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`rm-cart-sidebar${isOpen ? " active" : ""}`}>
        <div className="rm-cart-header">
          <h3>Your Cart</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="rm-cart-body">
          {cart.length === 0 && <p>Your cart is empty.</p>}

          {cart.map((item: any, i: number) => (
            <div key={i} className="rm-cart-item">
              <img src={item.image} alt={item.name} />

              <div className="rm-cart-info">
                <h4>{item.name}</h4>
                <p>
                  {item.size} × {item.quantity}
                </p>
                <strong>৳ {item.price * item.quantity}</strong>
              </div>

              <button
                className="rm-remove"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="rm-cart-footer">
          <Link href="/cart" onClick={onClose}>
            View Cart
          </Link>

          <Link href="/Checkout" onClick={onClose}>
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
}

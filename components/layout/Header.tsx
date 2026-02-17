"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CartSidebar from "./CartSidebar";

export default function Header() {
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const open = () => setOpenCart(true);
    window.addEventListener("open-cart", open);

    return () => window.removeEventListener("open-cart", open);
  }, []);

  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="rm-custom-header">
        <div className="rm-header-inner">

          <div className="rm-logo">
            <Link href="/">
              <img src="/images/logo.png" alt="Royal Mart" />
            </Link>
          </div>

          <ul className="rm-menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/hoodie">Hoodie</Link></li>
            <li><Link href="/tshirt">T-Shirt</Link></li>
            <li><Link href="/men">Men</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>

          <div className="rm-icons">
            <Link href="/search" className="rm-icon">🔍</Link>

            <span
              className="rm-icon"
              style={{ cursor: "pointer" }}
              onClick={() => setOpenCart(true)}
            >
              🛒
            </span>
          </div>
        </div>
      </header>

      {/* MOBILE HEADER */}
      <div className="rm-mobile-header">
        <div className="rm-mob-left">
          <span className="rm-hamburger">☰</span>
        </div>

        <div className="rm-mob-logo">
          <Link href="/">
            <img src="/images/logo.png" alt="Royal Mart" />
          </Link>
        </div>

        <div className="rm-mob-right">
          <span
            className="rm-icon"
            style={{ cursor: "pointer" }}
            onClick={() => setOpenCart(true)}
          >
            🛒
          </span>
        </div>
      </div>

      {/* SIDE CART */}
      <CartSidebar isOpen={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}

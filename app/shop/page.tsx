"use client";

import { useState } from "react";
import { products } from "@/app/data/products";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [popupProduct, setPopupProduct] = useState<any>(null);
  const [size, setSize] = useState("M");

  const { addToCart } = useCart();

  const filteredProducts = products.filter((p: any) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    let matchCategory = true;
    if (category !== "all") {
      if (category === "hoodie") {
        matchCategory = p.name.toLowerCase().includes("hoodie");
      } else if (category === "cotton") {
        matchCategory = p.name.toLowerCase().includes("cotton") || p.name.toLowerCase().includes("t-shirt");
      } else if (category === "men") {
        matchCategory = p.name.toLowerCase().includes("men");
      }
    }
    return matchSearch && matchCategory;
  });

  return (
    <div className="rm-shop-layout">

      {/* LEFT SIDEBAR */}
      <div className="rm-shop-sidebar">
        <h3>Categories</h3>
        <ul>
          <li onClick={() => setCategory("all")}>All</li>
          <li onClick={() => setCategory("hoodie")}>Hoodie</li>
          <li onClick={() => setCategory("cotton")}>T-Shirt</li>
          <li onClick={() => setCategory("men")}>Men</li>
        </ul>
      </div>

      {/* RIGHT CONTENT */}
      <div className="rm-shop-content">

        {/* SEARCH BAR */}
        <div className="rm-shop-search">
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* PRODUCT GRID */}
        <div className="rm-shop-grid">
          {filteredProducts.map((product: any) => (
            <div key={product.slug} className="rm-shop-card">

              <Link href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>

              <h4>{product.name}</h4>
              <p>৳ {product.price}</p>

              <div className="rm-shop-actions">
                <button
                  className="rm-btn-cart"
                  onClick={() => {
                    setPopupProduct(product);
                    setSize("M");
                  }}
                >
                  Add to Cart
                </button>

                <Link
                  href="/Checkout"
                  className="rm-btn-buy"
                  onClick={() => {
                    addToCart({
                      id: filteredProducts.findIndex((p: any) => p.slug === product.slug),
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      size: "M",
                      quantity: 1,
                    });
                    window.dispatchEvent(new Event("open-cart"));
                  }}
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SIZE POPUP MODAL */}
      {popupProduct && (
        <div className="rm-popup-overlay">
          <div className="rm-popup-box">
            <h3>Select Size</h3>

            <div className="rm-popup-sizes">
              {popupProduct.sizes.map((s: string) => (
                <button
                  key={s}
                  className={size === s ? "active" : ""}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="rm-popup-actions">
              <button
                className="rm-btn-cart"
                onClick={() => {
                  addToCart({
                    id: products.findIndex((p: any) => p.slug === popupProduct.slug),
                    name: popupProduct.name,
                    price: popupProduct.price,
                    image: popupProduct.image,
                    size: size,
                    quantity: 1,
                  });
                  setPopupProduct(null);
                  window.dispatchEvent(new Event("open-cart"));
                }}
              >
                Add to Cart
              </button>

              <button
                className="rm-btn-cancel"
                onClick={() => setPopupProduct(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

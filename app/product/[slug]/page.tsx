"use client";

import { useParams, useRouter } from "next/navigation";
import { products } from "@/app/data/products";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function ProductPage() {
  const { slug } = useParams();
  const router = useRouter();
  const product = products.find((p: any) => p.slug === slug);

  const { addToCart } = useCart();

  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);

  if (!product) return <h2>Product not found</h2>;

  const handleAddToCart = () => {
    addToCart({
      id: products.findIndex((p: any) => p.slug === product.slug),
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      quantity: qty,
    });
    // 🔥 open side cart
    window.dispatchEvent(new Event("open-cart"));
  };

  const handleBuyNow = () => {
    addToCart({
      id: products.findIndex((p: any) => p.slug === product.slug),
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      quantity: qty,
    });
    router.push("/Checkout");
  };

  return (
    <>
      {/* PRODUCT MAIN */}
      <div className="rm-product-wrapper">

        {/* LEFT IMAGE */}
        <div className="rm-product-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* RIGHT INFO */}
        <div className="rm-product-info">
          <h1>{product.name}</h1>
          <h2>৳ {product.price}</h2>

          {/* SIZE */}
          <div className="rm-size-box">
            <p>Select Size:</p>
            <div className="rm-sizes">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={size === s ? "active" : ""}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QTY */}
          <div className="rm-qty-box">
            <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          {/* SIZE CHART */}
          <div className="rm-size-chart">
            <h3>Available Asian Size</h3>

            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest (inch)</th>
                  <th>Length (inch)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>M</td><td>39</td><td>27</td></tr>
                <tr><td>L</td><td>41</td><td>28</td></tr>
                <tr><td>XL</td><td>43</td><td>29</td></tr>
                <tr><td>XXL</td><td>45</td><td>30</td></tr>
              </tbody>
            </table>
          </div>

          {/* BUTTONS */}
          <div className="rm-product-buttons">
            <button className="rm-add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <button className="rm-buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          {/* DESC */}
          <p className="rm-desc">{product.description}</p>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="rm-related-wrapper">
        <h2>Related Products</h2>

        <div className="rm-related-grid">
          {products
            .filter((p: any) => p.slug !== product.slug)
            .slice(0, 4)
            .map((item: any) => (
              <Link
                key={item.slug}
                href={`/product/${item.slug}`}
                className="rm-related-card"
              >
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <p>৳ {item.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="rm-cart-wrapper">
      <h1 className="rm-cart-title">Your Cart</h1>

      <div className="rm-cart-container">
        {/* LEFT – CART ITEMS */}
        <div className="rm-cart-items">

          {/* Item 1 */}
          <div className="rm-cart-item">
            <img src="/images/hoodie1.jpg" alt="Hoodie" />
            <div className="rm-cart-info">
              <h3>Premium Hoodie – White</h3>
              <p>৳1140</p>
  <div className="rm-size">
    <label>Size:</label>
    <select>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
    </select>
  </div>
              <div className="rm-qty">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <button className="rm-remove">Remove</button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="rm-cart-item">
            <img src="/images/hoodie2.jpg" alt="Hoodie" />
            <div className="rm-cart-info">
              <h3>Premium Hoodie – Black</h3>
              <p>৳990</p>
  <div className="rm-size">
    <label>Size:</label>
    <select>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
    </select>
  </div>
              <div className="rm-qty">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <button className="rm-remove">Remove</button>
            </div>
          </div>

        </div>

        {/* RIGHT – SUMMARY */}
        <div className="rm-cart-summary">
          <h2>Order Summary</h2>

          <div className="rm-summary-row">
            <span>Subtotal</span>
            <span>৳2130</span>
          </div>
  
   <div className="rm-delivery">
  <h3>Delivery Location</h3>

  <label>
    <input type="radio" name="delivery" value="70" defaultChecked />
    Inside Dhaka – ৳70
  </label>

  <label>
    <input type="radio" name="delivery" value="100" />
    Sub Dhaka – ৳100
  </label>

  <label>
    <input type="radio" name="delivery" value="130" />
    Outside Dhaka – ৳130
  </label>
</div>


          <div className="rm-summary-row total">
            <span>Total</span>
            <span>৳2190</span>
          </div>

          <Link href="/checkout" className="rm-checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

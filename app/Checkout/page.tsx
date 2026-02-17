"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useOrder } from "@/context/OrderContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrder();
  const router = useRouter();

  const [delivery, setDelivery] = useState(70);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const productTotal = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const grandTotal = productTotal + delivery;

  const handlePlaceOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all required fields");
      return;
    }

    addOrder({
      id: Date.now().toString(),
      items: cart,
      customer: {
        name,
        phone,
        address,
      },
      total: grandTotal,
      payment: "Cash on Delivery",
    });

    clearCart();
    const params = new URLSearchParams();
    params.set("total", grandTotal.toString());
    if (note) params.set("note", note);
    router.push(`/success?${params.toString()}`);
  };

  return (
    <div className="rm-checkout-wrapper">
      <h1>Checkout</h1>

      <div className="rm-checkout-container">
        {/* LEFT – FORM */}
        <div className="rm-checkout-form">
          <h3>Billing Details</h3>

          <input
            type="text"
            placeholder="Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Full Address *"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <textarea
            placeholder="Order Note (optional – call before delivery, etc.)"
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <h3>Delivery Location</h3>

          <label className="rm-radio">
            <input
              type="radio"
              name="delivery"
              checked={delivery === 70}
              onChange={() => setDelivery(70)}
            />
            Inside Dhaka – ৳70
          </label>

          <label className="rm-radio">
            <input
              type="radio"
              name="delivery"
              checked={delivery === 100}
              onChange={() => setDelivery(100)}
            />
            Sub Dhaka – ৳100
          </label>

          <label className="rm-radio">
            <input
              type="radio"
              name="delivery"
              checked={delivery === 130}
              onChange={() => setDelivery(130)}
            />
            Outside Dhaka – ৳130
          </label>

          <h3>Payment Method</h3>

          <label className="rm-radio">
            <input type="radio" name="payment" defaultChecked />
            Cash on Delivery
          </label>
        </div>

        {/* RIGHT – SUMMARY */}
        <div className="rm-checkout-summary">
          <h3>Order Summary</h3>

          {cart.length === 0 && <p>Your cart is empty.</p>}

          {cart.map((item: any, i: number) => (
            <div key={i} className="rm-summary-item">
              <span>
                {item.name} ({item.size}) × {item.quantity}
              </span>
              <span>৳ {item.price * item.quantity}</span>
            </div>
          ))}

          <div className="rm-summary-row">
            <span>Subtotal</span>
            <span>৳ {productTotal}</span>
          </div>

          <div className="rm-summary-row">
            <span>Delivery</span>
            <span>৳ {delivery}</span>
          </div>

          <div className="rm-summary-row total">
            <span>Total</span>
            <span>৳ {grandTotal}</span>
          </div>

          <button className="rm-place-order" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

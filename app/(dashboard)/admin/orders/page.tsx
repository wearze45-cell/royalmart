"use client";

import { useEffect, useState } from "react";

type Order = {
  id: number;
  name: string;
  phone: string;
  address: string;
  amount: number;
  charge: number;
  payment: string;
  status: string;
  createdAt: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadOrders() {
    try {
      const res = await fetch("/api/orders");
      const data = await res.json();
      setOrders(data);
    } catch {
      setOrders([]);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: number, status: string) {
    await fetch("/api/orders", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });

    loadOrders();
  }

  async function deleteOrder(id: number) {
    if (!confirm("Delete this order?")) return;

    await fetch("/api/orders", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    loadOrders();
  }

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="p-6 space-y-6">

      {/* TITLE */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
        <p className="text-sm text-gray-500">Manage customer orders</p>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-xl shadow overflow-hidden">

        <div className="grid grid-cols-8 bg-gray-50 p-4 font-semibold text-sm text-gray-600 border-b">
          <div>Customer</div>
          <div>Phone</div>
          <div>Amount</div>
          <div>Charge</div>
          <div>Payment</div>
          <div>Status</div>
          <div>Date</div>
          <div className="text-center">Action</div>
        </div>

        {loading && <div className="p-6 text-gray-400">Loading...</div>}

        {!loading && orders.length === 0 && (
          <div className="p-6 text-gray-400">No orders found</div>
        )}

        {orders.map((o) => (
          <div
            key={o.id}
            className="grid grid-cols-8 p-4 items-center border-b hover:bg-gray-50 text-sm"
          >
            <div className="font-medium">{o.name}</div>
            <div>{o.phone}</div>
            <div className="font-semibold">৳{o.amount}</div>
            <div>৳{o.charge}</div>
            <div>{o.payment}</div>

            {/* STATUS */}
            <div>
              <select
                value={o.status}
                onChange={(e) => updateStatus(o.id, e.target.value)}
                className={`border rounded px-2 py-1 text-xs
                  ${o.status === "Pending" && "bg-yellow-50 text-yellow-700"}
                  ${o.status === "Confirmed" && "bg-blue-50 text-blue-700"}
                  ${o.status === "Shipped" && "bg-purple-50 text-purple-700"}
                  ${o.status === "Delivered" && "bg-green-50 text-green-700"}
                  ${o.status === "Cancelled" && "bg-red-50 text-red-700"}
                `}
              >
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>

            <div>{new Date(o.createdAt).toLocaleDateString()}</div>

            <div className="text-center">
              <button
                onClick={() => deleteOrder(o.id)}
                className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

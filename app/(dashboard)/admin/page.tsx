"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data)
    return <div className="p-6 text-gray-500">Loading dashboard...</div>;

  const Card = ({ title, value, color }: any) => (
    <div className={`p-5 rounded-xl shadow border ${color}`}>
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold text-gray-800">
        Royal Mart Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <Card
          title="Total Orders"
          value={data.totalOrders}
          color="bg-blue-50"
        />

        <Card
          title="Pending Orders"
          value={data.pendingOrders}
          color="bg-yellow-50"
        />

        <Card
          title="Delivered Orders"
          value={data.deliveredOrders}
          color="bg-green-50"
        />

        <Card
          title="Total Products"
          value={data.products}
          color="bg-purple-50"
        />

      </div>

      {/* Revenue */}
      <div className="bg-white p-6 rounded-xl shadow border">
        <h2 className="text-lg font-semibold text-gray-700">
          Total Revenue
        </h2>

        <p className="text-4xl font-bold text-green-600 mt-3">
          ৳ {data.revenue}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          Calculated from delivered orders
        </p>
      </div>

    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  image?: string | null;
  price?: number;
  offer?: number;
  active?: boolean;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch {
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  async function deleteProduct(id: number) {
    if (!confirm("Delete this product?")) return;

    await fetch("/api/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    loadProducts();
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>
          <p className="text-sm text-gray-500">
            Manage your store products easily
          </p>
        </div>

        <Link
          href="/admin/products/add"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg shadow"
        >
          + Add Product
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border">

        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 bg-gray-50 p-4 text-sm font-semibold text-gray-600 border-b">
          <div>Product</div>
          <div>Category</div>
          <div>Price</div>
          <div>Status</div>
          <div className="text-center">Actions</div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="p-6 text-gray-400">Loading products...</div>
        )}

        {/* Empty */}
        {!loading && products.length === 0 && (
          <div className="p-6 text-gray-400">No products found</div>
        )}

        {/* Rows */}
        {products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-6 gap-4 items-center p-4 border-b hover:bg-gray-50 transition"
          >

            {/* Product Info */}
            <div className="flex items-center gap-4">
              <img
                src={product.image || "/no-image.png"}
                alt={product.name}
                className="h-14 w-14 object-cover rounded-lg border"
              />

              <div>
                <h3 className="font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-1">
                  {product.description || "No description"}
                </p>
              </div>
            </div>

            {/* Category */}
            <div className="text-gray-600 text-sm">
              {product.category}
            </div>

            {/* Price */}
            <div>
              <p className="font-semibold text-gray-800">
                ৳{product.offer || product.price || 0}
              </p>
              {product.offer && product.price && (
                <p className="text-xs text-gray-400 line-through">
                  ৳{product.price}
                </p>
              )}
            </div>

            {/* Status */}
            <div>
              {product.active ? (
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  Active
                </span>
              ) : (
                <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">
                  Hidden
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 justify-center">
              <Link
                href={`/admin/products/edit/${product.id}`}
                className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200"
              >
                Edit
              </Link>

              <button
                onClick={() => deleteProduct(product.id)}
                className="px-3 py-1.5 bg-red-100 text-red-700 rounded-md text-sm hover:bg-red-200"
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

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import UploadBox from "@/components/form/UploadBox";

export default function AddProductPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [stock, setStock] = useState("");
  const [sku, setSku] = useState("");
  const [active, setActive] = useState(true);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  async function saveProduct() {
    if (!name || !price || !category) {
      alert("Product name, category & price required!");
      return;
    }

    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        category,
        description,
        image,
        price: Number(price),
        offer: Number(offer),
        stock: Number(stock),
        sku,
        active,
      }),
    });

    router.push("/admin/products");
  }

  return (
    <div className="p-6 max-w-5xl space-y-6">

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Add Product</h1>
        <p className="text-sm text-gray-500">
          Create a new product for your store
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* BASIC INFO */}
          <div className="bg-white p-5 rounded-xl shadow border space-y-4">
            <h2 className="font-semibold text-gray-700">Basic Information</h2>

            <input
              className="w-full border rounded-lg p-3"
              placeholder="Product name"
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <textarea
              className="w-full border rounded-lg p-3 h-32"
              placeholder="Product description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <select
              className="w-full border rounded-lg p-3"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              {categories.map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* PRICING */}
          <div className="bg-white p-5 rounded-xl shadow border space-y-4">
            <h2 className="font-semibold text-gray-700">Pricing</h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                className="border rounded-lg p-3"
                placeholder="Regular price (৳)"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />

              <input
                type="number"
                className="border rounded-lg p-3"
                placeholder="Offer price (৳)"
                value={offer}
                onChange={e => setOffer(e.target.value)}
              />
            </div>
          </div>

          {/* INVENTORY */}
          <div className="bg-white p-5 rounded-xl shadow border space-y-4">
            <h2 className="font-semibold text-gray-700">Inventory</h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="border rounded-lg p-3"
                placeholder="SKU / Product ID"
                value={sku}
                onChange={e => setSku(e.target.value)}
              />

              <input
                type="number"
                className="border rounded-lg p-3"
                placeholder="Stock quantity"
                value={stock}
                onChange={e => setStock(e.target.value)}
              />
            </div>

            {/* STATUS */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={active}
                onChange={() => setActive(!active)}
                className="h-5 w-5"
              />
              <span className="text-sm text-gray-600">
                Active (visible on website)
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="space-y-6">

          <div className="bg-white p-5 rounded-xl shadow border space-y-4">
            <h2 className="font-semibold text-gray-700">Product Image</h2>

            <UploadBox onUpload={setImage} />

            {image && (
              <img
                src={image}
                alt="preview"
                className="rounded-lg border w-full h-56 object-cover"
              />
            )}
          </div>

          {/* SUBMIT */}
          <button
            onClick={saveProduct}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow"
          >
            Save Product
          </button>
        </div>

      </div>
    </div>
  );
}

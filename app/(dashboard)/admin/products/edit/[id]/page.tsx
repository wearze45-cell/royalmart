"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        const p = data.find((x:any) => x.id == id);
        if (p) setName(p.name);
      });
  }, []);

  async function update() {
    await fetch("/api/products", {
      method: "PUT",
      body: JSON.stringify({ id, name }),
    });
    router.push("/admin/products");
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={update}>Update</button>
    </div>
  );
}

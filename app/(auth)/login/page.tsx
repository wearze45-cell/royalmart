"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function login() {
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Wrong email or password");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f4f8ff]">
      <div className="bg-white p-8 rounded-xl shadow w-80 space-y-4">

        <h1 className="text-2xl font-bold text-center text-blue-600">
          Royal Mart Admin
        </h1>

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <input
          className="border p-2 w-full rounded"
          placeholder="Admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 w-full rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}

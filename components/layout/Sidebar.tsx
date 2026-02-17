"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const path = usePathname();

  const Item = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={`block px-4 py-2 rounded-lg transition
        ${
          path === href
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-blue-50"
        }`}
    >
      {label}
    </Link>
  );

  return (
    <aside className="w-60 bg-white border-r min-h-screen p-4 space-y-4">

      {/* Logo */}
      <div className="text-xl font-bold text-blue-600 mb-6">
        ROYAL ADMIN
      </div>

      {/* Menu */}
      <nav className="space-y-2">

        <Item href="/admin" label="Dashboard" />

        <Item href="/admin/orders" label="Orders" />

        <Item href="/admin/products" label="Products" />

        <Item href="/admin/categories" label="Categories" />

        <Item href="/admin/filters" label="Filters" />

      </nav>

      {/* Bottom */}
      <div className="pt-10 border-t mt-6">
        <Link
          href="/"
          className="block px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg"
        >
          Exit Admin
        </Link>
      </div>

    </aside>
  );
}

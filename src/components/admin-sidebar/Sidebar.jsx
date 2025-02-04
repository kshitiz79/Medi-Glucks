// src/components/Sidebar.js
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-full shadow-lg flex flex-col">
      <div className="p-4 font-bold text-xl">Admin Panel</div>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
              Overview
            </Link>
          </li>
          <li>
            <Link href="/dashboard/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
          </li>
          <li>
            <Link href="/dashboard/orders" className="text-gray-700 hover:text-blue-600">
              Orders
            </Link>
          </li>
          <li>
            <Link href="/dashboard/customers" className="text-gray-700 hover:text-blue-600">
              Customers
            </Link>
          </li>
          <li>
            <Link href="/dashboard/reports" className="text-gray-700 hover:text-blue-600">
              Reports
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="text-gray-700 hover:text-blue-600">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

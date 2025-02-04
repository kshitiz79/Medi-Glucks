// src/app/dashboard/layout.js
import Sidebar from "@/components/admin-sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
    

        {/* Page Content */}
        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

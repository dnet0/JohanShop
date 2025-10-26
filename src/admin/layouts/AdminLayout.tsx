import { useState } from "react";
import { AdminHeader } from "../components/AdminHeader";
import { AdminSidebar } from "../components/AdminSidebar";
import { Outlet } from "react-router";

export default function AdminLayout(){
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
      <div className="bg-gray-50 flex">
      <AdminSidebar
        isCollapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6">
          <Outlet />
        </main>    
      </div>
      </div>

  )
}

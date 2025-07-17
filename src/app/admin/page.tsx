"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LayoutDashboard, ShoppingBag, CreditCard, PenSquare, User, Bell, Sun, Moon, LogOut, Home as HomeIcon } from "lucide-react";
import { useUser, SignOutButton } from "@clerk/nextjs";

const navItems = [
  { label: "Home", to: "/", icon: <HomeIcon className="w-5 h-5 mr-2" /> },
  { label: "Dashboard", to: "/admin/dashboard", icon: <LayoutDashboard className="w-5 h-5 mr-2" /> },
  { label: "Product", to: "/admin/product", icon: <ShoppingBag className="w-5 h-5 mr-2" /> },
  { label: "Payment", to: "/admin/payment", icon: <CreditCard className="w-5 h-5 mr-2" /> },
  { label: "Blog Write", to: "/admin/blog-write", icon: <PenSquare className="w-5 h-5 mr-2" /> },
  { label: "User Profile", to: "/admin/user-profile", icon: <User className="w-5 h-5 mr-2" /> },
];

const AdminLayout: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', next);
      }
      return next;
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-black">
      <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col py-6 px-4">
        <div className="mb-8 text-xl font-bold tracking-tight">Admin Panel</div>
        <div className="flex gap-2 mb-6">
          <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Notifications">
            <Bell className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className="flex items-center px-3 py-2 rounded-lg font-medium transition-colors whitespace-nowrap overflow-hidden text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        {/* User Info and Logout at the bottom */}
        <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-2">
          {user && (
            <div className="flex items-center gap-2 mb-2">
              <img src={user.imageUrl} alt={user.fullName || user.username || "User"} className="w-8 h-8 rounded-full" />
              <div>
                <div className="font-semibold">{user.fullName || user.username}</div>
                <div className="text-xs text-gray-400">{user.emailAddresses[0]?.emailAddress}</div>
              </div>
            </div>
          )}
          <SignOutButton>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900 transition-colors">
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </SignOutButton>
        </div>
      </aside>
      <main className="flex-1 p-8">
        {/* Render children routes here if needed */}
        <h1 className="text-3xl font-bold mb-6">Welcome to Admin Dashboard</h1>
        <p className="text-lg text-muted-foreground">Select a section from the sidebar to manage your app.</p>
      </main>
    </div>
  );
};

export default AdminLayout; 
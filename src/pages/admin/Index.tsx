import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { LayoutDashboard, ShoppingBag, CreditCard, PenSquare, User, Bell, Sun, Moon, LogOut, Home as HomeIcon } from "lucide-react";
import { useUser, SignOutButton } from "@clerk/clerk-react";

const navItems = [
  { label: "Home", to: "/", icon: <HomeIcon className="w-5 h-5 mr-2" /> },
  { label: "Dashboard", to: "/admin/dashboard", icon: <LayoutDashboard className="w-5 h-5 mr-2" /> },
  { label: "Product", to: "/admin/product", icon: <ShoppingBag className="w-5 h-5 mr-2" /> },
  { label: "Payment", to: "/admin/pembayaran", icon: <CreditCard className="w-5 h-5 mr-2" /> },
  { label: "Blog Write", to: "/admin/blogging-write", icon: <PenSquare className="w-5 h-5 mr-2" /> },
  { label: "User Profile", to: "/admin/user-profile", icon: <User className="w-5 h-5 mr-2" /> },
];

const AdminLayout: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const { user } = useUser();

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
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
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-lg font-medium transition-colors whitespace-nowrap overflow-hidden ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
              end
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
        {/* User Info and Logout at the bottom */}
        <div className="mt-auto flex flex-col gap-2 items-center">
          <div className="flex items-center gap-3 p-2 border-t border-gray-200 dark:border-gray-800 w-full">
            {user?.imageUrl && (
              <img src={user.imageUrl} alt="avatar" className="w-10 h-10 rounded-full border" />
            )}
            <div className="flex flex-col">
              <span className="font-semibold text-sm truncate">{user?.fullName || user?.username || user?.id}</span>
              <span className="text-xs text-gray-500 truncate">{user?.primaryEmailAddress?.emailAddress}</span>
            </div>
          </div>
          <SignOutButton>
            <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900 transition-colors font-medium">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </SignOutButton>
        </div>
      </aside>
      <main className="flex-1 min-w-0 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout; 
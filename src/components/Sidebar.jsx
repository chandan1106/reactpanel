import React, { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, link: "/dashboard" },
    { name: "Reports", icon: BarChart3, link: "/reports" },
    { name: "Configuration", icon: Settings, link: "/configuration" },
    { name: "Profile", icon: User, link: "/profile" },
  ];

  return (
    <aside
      className={`bg-white border-r border-gray-200 shadow-md transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } ${isSidebarOpen ? "block" : "hidden md:block"}`}
    >
      {/* Collapse Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-gray-700">Naviga    tion</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 text-gray-600 hover:text-blue-600 rounded-md"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="mt-4 flex flex-col">
        {navItems.map(({ name, icon: Icon, link }) => (
          <NavLink
            key={name}
            to={link}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition ${
                isActive ? "bg-blue-100 text-blue-700" : ""
              }`
            }
          >
            <Icon size={20} />
            {!isCollapsed && <span>{name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

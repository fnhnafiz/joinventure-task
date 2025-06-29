import {
  FiSun,
  FiMoon,
  FiLogOut,
  FiX,
  FiUsers,
  FiHelpCircle,
} from "react-icons/fi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`${
        isOpen ? "left-0" : "-left-full"
      } fixed lg:static z-50 top-0 h-screen w-64 sm:w-72 md:w-80 lg:w-64 bg-white dark:bg-gray-800 dark:text-white transition-all duration-300 flex flex-col border-r border-gray-200 dark:border-gray-600 shadow-md`}
    >
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-4 border-b border-gray-200 dark:border-gray-600">
        <Link to="/">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nil%20vyaa-01%201-s1lG2XvZDZZWuxbLHlsQtygDfSadsB.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          title="Close Menu"
        >
          <FiX className="text-lg text-black dark:text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {/* New Chat Button */}
        <button className="w-full py-2 sm:py-3 px-3 sm:px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold flex items-center justify-center transition">
          <HiOutlineViewGridAdd className="text-lg sm:text-xl mr-2" />
          <span>New Chat</span>
        </button>

        {/* Toggle Theme */}
        <button className="w-full p-2 flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-600">
          <div className="flex items-center gap-2">
            <FiSun className="text-xl" />
            <span className="text-sm">Dark</span>
          </div>
          <div className="flex items-center bg-gradient-to-r from-blue-400 to-gray-300 p-1 rounded-full w-16 h-7 relative">
            <div className="absolute left-1 top-1 bg-blue-500 text-white p-1 rounded-full">
              <FiMoon size={12} />
            </div>
            <div className="absolute right-1 top-1 text-white p-1">
              <FiSun size={12} />
            </div>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="space-y-2">
          <SidebarLink icon={<FiUsers />} to="/dashboard/users" label="Users" />
          <SidebarLink
            icon={<FiHelpCircle />}
            to="/dashboard/subscription"
            label="Manage Subscription"
          />
          <SidebarLink
            icon={<FiHelpCircle />}
            to="/dashboard/help-support"
            label="Help & Support"
          />
          <SidebarLink
            icon={<FiHelpCircle />}
            to="/dashboard/faq"
            label="FAQ"
          />
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-600">
        <button className="flex items-center justify-between w-full text-red-600 hover:text-red-700 text-sm transition-colors p-2 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20">
          <span>Logout</span>
          <FiLogOut className="text-lg" />
        </button>
      </div>
    </div>
  );
}

const SidebarLink = ({ icon, to, label }) => (
  <Link
    to={to}
    className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
  >
    <span className="text-base mr-3">{icon}</span>
    <span className="truncate">{label}</span>
  </Link>
);

export default Sidebar;

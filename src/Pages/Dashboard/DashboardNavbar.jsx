import React from "react";

function DashboardNavbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-full ml-auto">
        <header className="bg-primary dark:bg-gray-700 dark:text-white text-black p-2 sm:p-3 lg:p-4 flex items-center justify-between z-0 max-h-24">
          <a className="flex items-center flex-1 min-w-0" href="">
            <img
              src="https://alibackend.duckdns.org/media/user_profile_pictures/produtc_img.webp"
              alt="Profile"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex flex-col items-start ml-2 sm:ml-3 lg:ml-4 min-w-0 flex-1">
              <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl truncate max-w-full">
                Nostrum sit vel vol
              </span>
              <span className="hidden md:block text-xs lg:text-sm text-gray-600 dark:text-gray-300 truncate max-w-full">
                Welcome back
              </span>
            </div>
          </a>
        </header>
      </div>

      <button
        title="Open History"
        className="p-2 sm:p-3 bg-[#2563EA] hover:bg-[#1d4ed8] text-white rounded-lg shadow-lg transition-colors duration-200 relative top-10 lg:top-0"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-lg xl:text-xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
          <path d="M12 7v5l4 2"></path>
        </svg>
      </button>
    </div>
  );
}

export default DashboardNavbar;

import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "About",
    "Our Solutions",
    "In Action",
    "Technology",
    "Benefits",
    "Case Use",
  ];
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full bg-[#0f172a] bg-opacity-95 backdrop-blur-md z-50 shadow-md transition-all duration-400 ease-in-out"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 h-16 md:h-15 relative">
        {/* Logo */}
        <div className="flex items-center relative z-10">
          <div className="relative w-8 h-8 mr-3">
            {/* Brain SVG */}
            <svg
              viewBox="0 0 100 100"
              className="absolute top-0 left-0 w-full h-full animate-pulse filter drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40
                  C80 50, 70 60, 60 65 C70 70, 80 80, 80 90
                  C80 105, 60 115, 50 115 C40 115, 20 105, 20 90
                  C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z"
                stroke="#60a5fa"
                strokeWidth="2"
              />
            </svg>
            {/* Circuit Lines SVG */}
            <svg
              viewBox="0 0 100 100"
              className="absolute top-0 left-0 w-full h-full animate-[glow_3s_infinite]"
              stroke="#93c5fd"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35 40 H65 M50 40 V80 M35 60 H65 M25 50 H75" />
              <circle cx="35" cy="80" r="2" fill="#93c5fd" />
              <circle cx="65" cy="80" r="2" fill="#93c5fd" />
            </svg>
          </div>
          <span className="text-white font-bold text-xl select-none">Clin</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 ml-auto select-none">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              className={`nav-link text-gray-400 hover:text-[#60a5fa] font-medium focus:outline-none ${
                idx === 0 ? "text-[#60a5fa]" : ""
              }`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden ml-auto text-gray-400 hover:text-[#60a5fa] focus:outline-none z-20"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // Close icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a] bg-opacity-95 backdrop-blur-md shadow-md fixed top-16 left-0 w-full z-10 flex flex-col px-6 py-4 space-y-3">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              className={`mobile-nav-link text-gray-400 hover:text-[#60a5fa] font-medium text-left ${
                idx === 0 ? "text-[#60a5fa]" : ""
              }`}
              onClick={() => setMenuOpen(false)} // close menu on link click
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

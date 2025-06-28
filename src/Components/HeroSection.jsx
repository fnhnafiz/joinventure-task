import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative top-12 w-full h-[calc(100vh-40px)] bg-[#0a1022] overflow-hidden shadow-lg z-10">
      {/* Canvas */}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0a1022cc] to-[#0a1022ff] z-10 pointer-events-none"></div>

      {/* Floating Glows */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute -top-12 -left-24 w-[300px] h-[300px] rounded-full bg-gradient-radial from-[#60a5fa66] via-[#3b82f6] to-transparent opacity-50 blur-xl animate-float1"></div>
        <div className="absolute -bottom-12 -right-12 w-[200px] h-[200px] rounded-full bg-gradient-radial from-[#60a5fa40] via-[#3b82f6] to-transparent opacity-50 blur-lg animate-float2"></div>
        <div className="absolute top-1/5 right-[15%] w-[150px] h-[150px] rounded-full bg-gradient-radial from-[#60a5fa40] via-[#3b82f6] to-transparent opacity-50 blur-md animate-float3"></div>
      </div>

      {/* Blur Glow */}
      <div className="absolute w-[250px] h-[250px] rounded-full bg-gradient-radial from-[#3b82f660] to-transparent opacity-0 blur-2xl transition-opacity duration-300 ease-in-out pointer-events-none z-15"></div>

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30 max-w-[1200px] w-[90%] px-4">
        {/* Logo Container */}
        <div
          className="relative w-[120px] h-[120px] mx-auto mb-4 animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Logo Pulse SVG */}
          <svg
            className="absolute top-0 left-0 w-full h-full drop-shadow-[0_0_15px_rgba(96,165,250,0.5)] animate-pulse"
            viewBox="0 0 100 100"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
          >
            <path d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40 C80 50, 70 60, 60 65 C70 70, 80 80, 80 90 C80 105, 60 115, 50 115 C40 115, 20 105, 20 90 C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z" />
          </svg>

          {/* Logo Glow SVG */}
          <svg
            className="absolute top-0 left-0 w-full h-full animate-glow"
            viewBox="0 0 100 100"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="1.5"
          >
            <path d="M35 40 H65 M50 40 V80 M35 60 H65 M25 50 H75" />
            <circle cx="35" cy="40" r="2" fill="#93c5fd" />
            <circle cx="65" cy="40" r="2" fill="#93c5fd" />
            <circle cx="50" cy="60" r="2" fill="#93c5fd" />
            <circle cx="35" cy="80" r="2" fill="#93c5fd" />
            <circle cx="65" cy="80" r="2" fill="#93c5fd" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-4 animate-fadeInUp">
          Clin Technologies
        </h1>

        {/* Subtitle */}
        <div className="flex flex-col gap-3">
          <p className="text-[1.728rem] md:text-[1.728rem] font-normal text-[#94a3b8] mt-[10px] mb-0 tracking-normal opacity-100 transform translate-y-[20px] animate-[fadeInUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards_0.8s]">
            Revolutionizing clinical documentation through{" "}
            <span className="text-[#f59e0b] font-semibold">
              HIPAA COMPLIANT
            </span>
            advanced artificial intelligence, giving healthcare providers more
            time for what truly matters — patient care. try it for{" "}
            <span className="text-[#f59e0b] font-semibold">FREE</span> today
          </p>

          <div className="flex justify-center items-center">
            <p className="text-[1.44rem] text-[#e2e8f0] max-w-[700px] mt-[30px] leading-normal opacity-100 my-12">
              Our sophisticated AI platform intelligently processes clinical
              conversations, creating accurate documentation that integrates
              with your existing EMR system.
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-center gap-5 flex-wrap animate-fadeInUp">
          <Link
            to="/login"
            className="px-8 py-4 rounded-full border-2 border-blue-500 text-white bg-transparent shadow-md hover:bg-blue-100/20 transition"
            data-discover="true"
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:-translate-y-1 hover:shadow-xl transition transform"
            data-discover="true"
          >
            Signup
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -z-10">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-400 flex justify-center items-start p-2">
          <div className="w-2 h-2 rounded-full bg-gray-400 animate-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

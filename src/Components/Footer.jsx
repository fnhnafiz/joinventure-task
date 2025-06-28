function Footer() {
  return (
    <footer className="bg-[#1e293b] py-[30px] px-10 border-t border-[rgba(96,165,250,0.2)]">
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
        {/* Links */}
        <div className="flex gap-[30px] flex-wrap mb-4 md:mb-0">
          <a
            href="/login"
            className="relative text-[#94a3b8] text-[0.833rem] font-medium no-underline hover:text-white transition-colors duration-300"
          >
            Terms of Use
            <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#60a5fa] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/login"
            className="relative text-[#94a3b8] text-[0.833rem] font-medium no-underline hover:text-white transition-colors duration-300"
          >
            Privacy Policy
            <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#60a5fa] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[0.833rem] text-[#64748b] text-center">
          <p>© 2025 Clin Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

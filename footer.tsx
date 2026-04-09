export function Footer() {
  return (
    <footer className="w-full py-12 bg-[#47297B] border-t border-[#5D2689]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex items-center justify-center space-x-8">
          <a 
            href="#" 
            className="text-white hover:text-[#FFD93D] transition-colors duration-200"
            style={{ opacity: 0.8 }}
          >
            About
          </a>
          <span className="text-[#5D2689]">|</span>
          <a 
            href="#" 
            className="text-white hover:text-[#FFD93D] transition-colors duration-200"
            style={{ opacity: 0.8 }}
          >
            Privacy
          </a>
          <span className="text-[#5D2689]">|</span>
          <a 
            href="#" 
            className="text-white hover:text-[#FFD93D] transition-colors duration-200"
            style={{ opacity: 0.8 }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

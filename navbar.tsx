import { Button } from "./ui/button";

interface NavbarProps {
  onCreateResume?: () => void;
  onNavigateHome?: () => void;
  onNavigateTemplates?: () => void;
  onNavigateBuilder?: () => void;
  onNavigateDashboard?: () => void;
  onNavigateLogin?: () => void;
  currentView?: string;
}

export function Navbar({ 
  onCreateResume, 
  onNavigateHome, 
  onNavigateTemplates, 
  onNavigateBuilder, 
  onNavigateDashboard,
  onNavigateLogin,
  currentView 
}: NavbarProps) {
  const isActive = (view: string) => currentView === view;

  return (
    <nav className="w-full bg-[#47297B] border-b border-[#5D2689] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-20 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className="text-xl font-bold text-[#FFD93D] cursor-pointer hover:text-[#FFE863] transition-colors"
              onClick={onNavigateHome}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              ResuMade
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onNavigateTemplates}
              className={`transition-colors duration-300 ${
                isActive('templates') 
                  ? 'text-[#FFD93D] font-semibold' 
                  : 'text-white hover:text-[#FFE863]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Templates
            </button>
            <button 
              onClick={onNavigateDashboard}
              className={`transition-colors duration-300 ${
                isActive('dashboard') 
                  ? 'text-[#FFD93D] font-semibold' 
                  : 'text-white hover:text-[#FFE863]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Dashboard
            </button>
            <button 
              onClick={onNavigateLogin}
              className={`transition-colors duration-300 ${
                isActive('login') 
                  ? 'text-[#FFD93D] font-semibold' 
                  : 'text-white hover:text-[#FFE863]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

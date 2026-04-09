import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const resumeIllustration = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600";

export function HeroSection() {
  return (
    <section className="w-full py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFE863 0%, #F8FAFC 50%, #d4a5f3 100%)' }}>
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFD93D] rounded-full opacity-30 blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-[#8736AA] rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-[#F5BD1F] rounded-full opacity-25 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#5D2689] rounded-full opacity-30 blur-lg"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 right-1/3 w-12 h-12 border-4 border-[#FFE863] rotate-45 opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-8 h-8 bg-[#8736AA] rotate-12 opacity-30"></div>
      <div className="absolute top-1/2 left-10 w-6 h-6 bg-[#FFD93D] rounded-full"></div>
      <div className="absolute top-1/3 right-10 w-4 h-4 bg-[#F5BD1F] rounded-full"></div>
      
      <div className="max-w-[1440px] mx-auto px-20 relative z-10">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left Content - 7 columns */}
          <div className="col-span-7">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold text-[#47297B] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Build Your Professional Resume in Minutes
                </h1>
                <p className="text-xl leading-relaxed max-w-lg" style={{ color: 'rgba(93, 38, 137, 0.8)' }}>
                  Customize templates and download instantly — free and easy to use.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button 
                  onClick={() => window.dispatchEvent(new CustomEvent('createResume'))}
                  className="bg-[#8736AA] hover:bg-[#5D2689] text-white px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg normal-case"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Create Resume
                </Button>
                <Button 
                  onClick={() => window.dispatchEvent(new CustomEvent('navigateToDashboard'))}
                  variant="secondary" 
                  className="bg-[#F5BD1F] hover:bg-[#FFD93D] text-white px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg normal-case"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Go to Dashboard
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - 5 columns */}
          <div className="col-span-5">
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={resumeIllustration}
                  alt="Professional Resume Illustration"
                  className="w-full max-w-md drop-shadow-2xl relative z-10"
                />
                {/* Decorative elements around image */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#FFD93D] rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#8736AA] rounded-full shadow-lg opacity-80"></div>
                <div className="absolute top-1/4 -left-4 w-8 h-8 bg-[#F5BD1F] rotate-45 shadow-md"></div>
                <div className="absolute bottom-1/3 -right-4 w-6 h-6 bg-[#5D2689] rounded-full shadow-md"></div>
                <div className="absolute top-10 -right-2 w-4 h-4 bg-[#FFE863] rounded-full"></div>
                <div className="absolute bottom-20 -left-2 w-5 h-5 border-2 border-[#8736AA] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

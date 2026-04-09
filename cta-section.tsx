import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full py-24" style={{ background: 'linear-gradient(to right, #FFD93D, #8736AA)' }}>
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Start building your resume today!
          </h2>
          
          <Button 
            onClick={() => window.dispatchEvent(new CustomEvent('createResume'))}
            className="bg-white text-[#8736AA] hover:bg-[#FFE863] hover:text-[#47297B] px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg inline-flex items-center space-x-2 normal-case"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

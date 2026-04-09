import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
const classicTemplate = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400";
const modernTemplate = "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400";
const creativeTemplate = "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400";

export function TemplatesPreview() {
  const templates = [
    {
      name: "Classic",
      description: "Traditional and professional",
      image: classicTemplate
    },
    {
      name: "Modern",
      description: "Clean and contemporary",
      image: modernTemplate
    },
    {
      name: "Creative",
      description: "Bold and eye-catching",
      image: creativeTemplate
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#47297B] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Professional Resume Templates
          </h2>
          <p className="text-xl mb-8" style={{ color: 'rgba(93, 38, 137, 0.8)' }}>
            Choose from our collection of expertly designed templates
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 mb-12">
          {templates.map((template, index) => (
            <div key={index} className="col-span-4">
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E2E8F0] hover:border-[#8736AA]">
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-[#5D2689] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {template.name}
                  </h3>
                  <p className="text-sm" style={{ color: 'rgba(93, 38, 137, 0.7)' }}>
                    {template.description}
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#8736AA]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    onClick={() => window.dispatchEvent(new CustomEvent('createResume'))}
                    className="bg-white text-[#8736AA] hover:bg-[#FFD93D] hover:text-[#47297B] px-6 py-3 rounded-lg shadow-lg normal-case"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Use This Template
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={() => window.dispatchEvent(new CustomEvent('createResume'))}
            className="bg-[#8736AA] hover:bg-[#5D2689] text-white px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg inline-flex items-center space-x-2 normal-case"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span>View All Templates</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
const classicTemplate = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400";
const modernTemplate = "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400";
const creativeTemplate = "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400";

interface TemplateSelectionProps {
  onSelectTemplate: (template: string) => void;
}

export function TemplateSelection({ onSelectTemplate }: TemplateSelectionProps) {
  const templates = [
    {
      id: "classic",
      name: "Classic Layout",
      description: "Two-column professional design",
      image: classicTemplate
    },
    {
      id: "modern",
      name: "Modern Layout",
      description: "Single-column clean design",
      image: modernTemplate
    },
    {
      id: "creative",
      name: "Creative Layout",
      description: "Color sidebar with modern flair",
      image: creativeTemplate
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#47297B]" style={{ fontFamily: 'Poppins, sans-serif' }}>Choose Your Resume Template</h1>
            <p className="max-w-2xl mx-auto" style={{ color: 'rgba(93, 38, 137, 0.8)' }}>
              Select a professional template that matches your style and industry. 
              All templates are fully customizable and ATS-friendly.
            </p>
          </div>

          {/* Template Grid */}
          <div className="grid grid-cols-12 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="col-span-4">
                <Card className="group h-full border border-[#E2E8F0] hover:border-[#8736AA] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 space-y-6">
                    {/* Template Preview */}
                    <div className="aspect-[3/4] rounded-lg overflow-hidden bg-white border border-[#E2E8F0]">
                      <img
                        src={template.image}
                        alt={template.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Template Info */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-[#5D2689]" style={{ fontFamily: 'Poppins, sans-serif' }}>{template.name}</h3>
                      <p style={{ color: 'rgba(93, 38, 137, 0.8)' }}>{template.description}</p>
                    </div>

                    {/* Use Template Button */}
                    <Button 
                      onClick={() => onSelectTemplate(template.id)}
                      className="w-full bg-[#8736AA] hover:bg-[#5D2689] text-white transition-colors duration-200 normal-case"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Use Template
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

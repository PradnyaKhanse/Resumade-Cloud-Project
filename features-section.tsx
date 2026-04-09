import { Card, CardContent } from "./ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: "🧾",
      title: "Resume Builder",
      description: "Easy-to-use drag and drop builder with real-time preview and smart suggestions."
    },
    {
      icon: "🎨",
      title: "Templates & Themes",
      description: "Professional templates designed by experts, customizable to match your style."
    },
    {
      icon: "📄",
      title: "PDF Export",
      description: "Download your resume as a high-quality PDF ready for printing and sharing."
    },
    {
      icon: "💾",
      title: "Save & Download",
      description: "Save your progress and download unlimited versions of your resume anytime."
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-12 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="col-span-3">
              <Card className="h-full border border-[#E2E8F0] hover:border-[#8736AA] transition-colors duration-200 shadow-sm hover:shadow-md">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-[#5D2689] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{feature.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'rgba(93, 38, 137, 0.8)' }}>{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

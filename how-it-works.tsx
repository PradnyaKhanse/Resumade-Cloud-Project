import { CheckCircle2, FileText, Download, Sparkles } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      step: "01",
      title: "Choose a Template",
      description: "Select from our collection of professionally designed resume templates that suit your industry and style."
    },
    {
      icon: Sparkles,
      step: "02",
      title: "Fill in Your Details",
      description: "Add your personal information, work experience, education, and skills using our intuitive form builder."
    },
    {
      icon: CheckCircle2,
      step: "03",
      title: "Customize & Preview",
      description: "Adjust colors, fonts, and layout to match your preferences. See real-time preview of your resume."
    },
    {
      icon: Download,
      step: "04",
      title: "Download & Share",
      description: "Export your polished resume as a PDF and start applying to your dream jobs immediately."
    }
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-purple-50 to-yellow-50">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#47297B] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            How It Works
          </h2>
          <p className="text-xl" style={{ color: 'rgba(93, 38, 137, 0.8)' }}>
            Create your professional resume in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="col-span-3">
                <div className="relative h-full">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#FFD93D] to-[#8736AA] opacity-30"></div>
                  )}
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-[#E2E8F0] hover:border-[#FFD93D]">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD93D] to-[#8736AA] flex items-center justify-center shadow-lg">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#47297B] flex items-center justify-center text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {item.step}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-[#5D2689]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {item.title}
                      </h3>
                      
                      <p className="leading-relaxed" style={{ color: 'rgba(93, 38, 137, 0.7)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

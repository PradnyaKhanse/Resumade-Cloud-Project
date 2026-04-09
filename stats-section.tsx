import { TrendingUp, Users, Star, Award } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Happy Users",
      color: "#FFD93D"
    },
    {
      icon: Star,
      value: "100+",
      label: "Premium Templates",
      color: "#8736AA"
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      color: "#F5BD1F"
    },
    {
      icon: Award,
      value: "4.9/5",
      label: "User Rating",
      color: "#5D2689"
    }
  ];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#FFE863] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#8736AA] rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-[1440px] mx-auto px-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#47297B] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why Choose ResuMade?
          </h2>
          <p className="text-xl" style={{ color: 'rgba(93, 38, 137, 0.8)' }}>
            Join thousands of job seekers who landed their dream jobs
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="col-span-3">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E2E8F0] hover:scale-105 group">
                  <div className="flex flex-col items-center space-y-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: stat.color }} />
                    </div>
                    
                    <div className="text-4xl font-bold" style={{ 
                      fontFamily: 'Poppins, sans-serif',
                      color: stat.color
                    }}>
                      {stat.value}
                    </div>
                    
                    <p className="font-medium text-[#5D2689]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional benefits section */}
        <div className="mt-20 grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <div className="bg-gradient-to-br from-[#FFE863] to-[#FFD93D] rounded-2xl p-8 h-full shadow-lg">
              <h3 className="text-2xl font-bold text-[#47297B] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                100% Free
              </h3>
              <p className="text-[#5D2689]">
                No hidden costs, no subscriptions. Create unlimited resumes completely free.
              </p>
            </div>
          </div>
          
          <div className="col-span-4">
            <div className="bg-gradient-to-br from-[#8736AA] to-[#5D2689] rounded-2xl p-8 h-full shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ATS-Friendly
              </h3>
              <p className="text-white/90">
                All templates are optimized to pass Applicant Tracking Systems with ease.
              </p>
            </div>
          </div>
          
          <div className="col-span-4">
            <div className="bg-gradient-to-br from-[#F5BD1F] to-[#FFD93D] rounded-2xl p-8 h-full shadow-lg">
              <h3 className="text-2xl font-bold text-[#47297B] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Privacy First
              </h3>
              <p className="text-[#5D2689]">
                Your data is secure and private. We never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

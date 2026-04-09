import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

interface LoginProps {
  onLoginSuccess: () => void;
  onNavigateHome: () => void;
}

export function Login({ onLoginSuccess, onNavigateHome }: LoginProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate authentication - In real app, this would be an API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      
      // Mock authentication logic
      if (formData.email === "demo@resumade.com" && formData.password === "password123") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", formData.email);
        toast.success("Login successful! Welcome back.");
        onLoginSuccess();
      } else if (formData.email === "user@example.com" && formData.password === "demo123") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", formData.email);
        toast.success("Login successful! Welcome back.");
        onLoginSuccess();
      } else {
        setErrors({ 
          email: "Invalid email or password",
          password: "Invalid email or password"
        });
        toast.error("Invalid credentials. Try demo@resumade.com / password123");
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleDemoLogin = () => {
    setFormData({
      email: "demo@resumade.com",
      password: "password123"
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(135deg, #FFE863 0%, #F8FAFC 50%, #d4a5f3 100%)' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 
            className="text-2xl font-bold text-[#8736AA] cursor-pointer hover:text-[#5D2689] transition-colors"
            onClick={onNavigateHome}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ResuMade
          </h1>
          <p className="mt-2" style={{ color: 'rgba(93, 38, 137, 0.8)' }}>Sign in to your account</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-[#47297B]" style={{ fontFamily: 'Poppins, sans-serif' }}>Welcome Back</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className={errors.email ? "border-[#EF4444]" : ""}
                />
                {errors.email && (
                  <p className="text-[#EF4444] text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="Enter your password"
                    className={errors.password ? "border-[#EF4444] pr-10" : "pr-10"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#64748B] hover:text-[#0F172A]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-[#EF4444] text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#8736AA] hover:bg-[#5D2689] text-white normal-case"
                disabled={isLoading}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
              <div className="text-center space-y-3">
                <p className="text-sm text-[#5D2689]" style={{ fontFamily: 'Poppins, sans-serif' }}>Demo Account:</p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleDemoLogin}
                  className="w-full border-[#8736AA] text-[#8736AA] hover:bg-[#8736AA] hover:text-white normal-case"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Use Demo Credentials
                </Button>
                <p className="text-xs" style={{ color: 'rgba(93, 38, 137, 0.8)' }}>
                  Email: demo@resumade.com<br />
                  Password: password123
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Button
                variant="ghost"
                onClick={onNavigateHome}
                className="hover:text-[#8736AA] normal-case"
                style={{ color: 'rgba(93, 38, 137, 0.8)' }}
              >
                ← Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

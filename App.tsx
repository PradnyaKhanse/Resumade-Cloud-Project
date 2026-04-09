import { useState, useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";
import { HowItWorks } from "./components/how-it-works";
import { StatsSection } from "./components/stats-section";
import { TemplatesPreview } from "./components/templates-preview";
import { CtaSection } from "./components/cta-section";
import { Footer } from "./components/footer";
import { TemplateSelection } from "./components/template-selection";
import { ResumeBuilder } from "./components/resume-builder";
import { PreviewDownload } from "./components/preview-download";
import { Dashboard } from "./components/dashboard";
import { Login } from "./components/login";

type PageView = 'landing' | 'templates' | 'builder' | 'preview' | 'dashboard' | 'login';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('landing');
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateWithTransition = (newView: PageView) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(newView);
      setIsTransitioning(false);
    }, 150); // Half of the 300ms transition
  };

  const handleCreateResume = () => {
    // Clear current resume data to start fresh
    localStorage.removeItem('currentResumeId');
    localStorage.removeItem('resumeData');
    navigateWithTransition('templates');
  };

  const handleNavigateHome = () => {
    navigateWithTransition('landing');
  };

  const handleNavigateTemplates = () => {
    navigateWithTransition('templates');
  };

  const handleNavigateBuilder = () => {
    if (selectedTemplate) {
      navigateWithTransition('builder');
    } else {
      navigateWithTransition('templates');
    }
  };

  const handleNavigateDashboard = () => {
    navigateWithTransition('dashboard');
  };

  const handleNavigateLogin = () => {
    navigateWithTransition('login');
  };

  const handleLoginSuccess = () => {
    navigateWithTransition('dashboard');
  };

  useEffect(() => {
    const handleCreateResumeEvent = () => {
      navigateWithTransition('templates');
    };

    const handleNavigateToDashboardEvent = () => {
      navigateWithTransition('dashboard');
    };

    window.addEventListener('createResume', handleCreateResumeEvent);
    window.addEventListener('navigateToDashboard', handleNavigateToDashboardEvent);
    
    return () => {
      window.removeEventListener('createResume', handleCreateResumeEvent);
      window.removeEventListener('navigateToDashboard', handleNavigateToDashboardEvent);
    };
  }, []);

  const handleSelectTemplate = (template: string) => {
    setSelectedTemplate(template);
    // Clear current resume ID to start a new resume
    localStorage.removeItem('currentResumeId');
    localStorage.removeItem('resumeData');
    navigateWithTransition('builder');
  };

  const handlePreview = () => {
    navigateWithTransition('preview');
  };

  const handleBackToBuilder = () => {
    navigateWithTransition('builder');
  };

  const handleBackToTemplates = () => {
    navigateWithTransition('templates');
  };

  const handleOpenResume = (resumeId: string) => {
    // Load the resume data and navigate to builder
    try {
      const stored = localStorage.getItem('savedResumes');
      if (stored) {
        const resumes = JSON.parse(stored);
        const resume = resumes.find((r: any) => r.id === resumeId);
        if (resume) {
          // Load the resume data into localStorage for the builder to pick up
          if (resume.data) {
            localStorage.setItem('resumeData', JSON.stringify(resume.data));
          }
          // Set the current resume ID so updates replace this resume
          localStorage.setItem('currentResumeId', resumeId);
          setSelectedTemplate(resume.template || 'classic');
        } else {
          setSelectedTemplate('classic');
        }
      } else {
        setSelectedTemplate('classic');
      }
    } catch (error) {
      console.error('Error loading resume:', error);
      setSelectedTemplate('classic');
    }
    navigateWithTransition('builder');
  };

  const renderCurrentView = () => {
    const navProps = {
      onCreateResume: handleCreateResume,
      onNavigateHome: handleNavigateHome,
      onNavigateTemplates: handleNavigateTemplates,
      onNavigateBuilder: handleNavigateBuilder,
      onNavigateDashboard: handleNavigateDashboard,
      onNavigateLogin: handleNavigateLogin,
      currentView
    };

    switch (currentView) {
      case 'templates':
        return (
          <div>
            <Navbar {...navProps} />
            <TemplateSelection onSelectTemplate={handleSelectTemplate} />
            <Footer />
          </div>
        );
      
      case 'builder':
        return (
          <div>
            <Navbar {...navProps} />
            <ResumeBuilder 
              selectedTemplate={selectedTemplate}
              onPreview={handlePreview}
              onBack={handleBackToTemplates}
            />
          </div>
        );
      
      case 'preview':
        return (
          <div>
            <Navbar {...navProps} />
            <PreviewDownload 
              onBack={handleNavigateHome}
              onEdit={handleBackToBuilder}
              onNavigateDashboard={handleNavigateDashboard}
            />
          </div>
        );

      case 'dashboard':
        return (
          <div>
            <Navbar {...navProps} />
            <Dashboard 
              onCreateResume={handleCreateResume}
              onOpenResume={handleOpenResume}
            />
            <Footer />
          </div>
        );

      case 'login':
        return (
          <Login 
            onLoginSuccess={handleLoginSuccess}
            onNavigateHome={handleNavigateHome}
          />
        );
      
      default:
        return (
          <div>
            <Navbar {...navProps} />
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <TemplatesPreview />
            <StatsSection />
            <CtaSection />
            <Footer />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div 
        className={`transition-opacity duration-300 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {renderCurrentView()}
      </div>
      <Toaster />
    </div>
  );
}

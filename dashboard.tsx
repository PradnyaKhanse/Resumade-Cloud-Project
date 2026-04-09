import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FileText, Download, Trash2, Calendar, Plus } from "lucide-react";
import { toast } from "sonner";

interface DashboardProps {
  onCreateResume: () => void;
  onOpenResume: (resumeId: string) => void;
}

interface SavedResume {
  id: string;
  title: string;
  lastModified: string;
  template: string;
  previewUrl: string;
  data?: any;
}

export function Dashboard({ onCreateResume, onOpenResume }: DashboardProps) {
  const [savedResumes, setSavedResumes] = useState<SavedResume[]>([]);

  // Format relative time
  const formatRelativeTime = (isoDate: string) => {
    try {
      const date = new Date(isoDate);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);
      const diffWeeks = Math.floor(diffMs / 604800000);
      
      if (diffMins < 1) return 'Just now';
      if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
      if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
      if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
      if (diffWeeks < 4) return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
      return date.toLocaleDateString();
    } catch {
      return 'Recently';
    }
  };

  // Load saved resumes from localStorage
  const loadResumes = () => {
    try {
      const stored = localStorage.getItem('savedResumes');
      if (stored) {
        const allResumes = JSON.parse(stored);
        // Only show complete resumes
        const completeResumes = allResumes.filter((resume: any) => resume.isComplete === true);
        setSavedResumes(completeResumes);
      }
    } catch (error) {
      console.error('Error loading resumes:', error);
    }
  };

  // Load resumes on mount and set up polling for real-time updates
  useEffect(() => {
    loadResumes();
    
    // Poll for changes every 2 seconds
    const interval = setInterval(loadResumes, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDownload = (resumeId: string, title: string) => {
    toast.success(`${title} downloaded successfully!`);
  };

  const handleDelete = (resumeId: string, title: string) => {
    try {
      const stored = localStorage.getItem('savedResumes');
      if (stored) {
        const resumes = JSON.parse(stored);
        const updatedResumes = resumes.filter((resume: SavedResume) => resume.id !== resumeId);
        localStorage.setItem('savedResumes', JSON.stringify(updatedResumes));
        setSavedResumes(updatedResumes);
        toast.success(`${title} deleted successfully!`);
      }
    } catch (error) {
      console.error('Error deleting resume:', error);
      toast.error('Failed to delete resume');
    }
  };

  const EmptyState = () => (
    <div className="col-span-12 flex flex-col items-center justify-center py-24">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-20 h-20 bg-gradient-to-br from-[#FFE863] to-[#FFD93D] rounded-full flex items-center justify-center mb-6 mx-auto">
          <FileText className="w-10 h-10 text-[#8736AA]" />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-[#47297B]" style={{ fontFamily: 'Poppins, sans-serif' }}>No resumes saved yet</h3>
          <p style={{ color: 'rgba(93, 38, 137, 0.8)' }}>
            You haven't saved any resumes yet. Start building one!
          </p>
        </div>
        <Button 
          onClick={onCreateResume}
          className="bg-[#8736AA] hover:bg-[#5D2689] text-white px-6 py-3 rounded-lg transition-colors duration-200 normal-case"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Your First Resume
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-[#47297B]" style={{ fontFamily: 'Poppins, sans-serif' }}>Your Saved Resumes</h1>
              <p style={{ color: 'rgba(93, 38, 137, 0.8)' }}>
                Manage and organize all your resume versions in one place
              </p>
            </div>
            <Button 
              onClick={onCreateResume}
              className="bg-[#8736AA] hover:bg-[#5D2689] text-white px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm normal-case"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create New Resume
            </Button>
          </div>

          {/* Resume Grid */}
          <div className="grid grid-cols-12 gap-6">
            {savedResumes.length === 0 ? (
              <EmptyState />
            ) : (
              savedResumes.map((resume) => (
                <div key={resume.id} className="col-span-4">
                  <Card className="group h-full border border-[#E2E8F0] hover:border-[#8736AA] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="p-0">
                      {/* Resume Preview */}
                      <div className="aspect-[3/4] rounded-t-lg overflow-hidden bg-[#F8FAFC] border-b border-[#E2E8F0]">
                        <ImageWithFallback
                          src={resume.previewUrl}
                          alt={resume.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6 space-y-4">
                      {/* Resume Info */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-[#5D2689] group-hover:text-[#8736AA] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {resume.title}
                        </h3>
                        <div className="flex items-center text-sm" style={{ color: 'rgba(93, 38, 137, 0.8)' }}>
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Modified {formatRelativeTime(resume.lastModified)}</span>
                        </div>
                        <p className="text-sm" style={{ color: 'rgba(93, 38, 137, 0.8)' }}>{resume.template}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Button 
                          onClick={() => onOpenResume(resume.id)}
                          size="sm"
                          className="flex-1 bg-[#8736AA] hover:bg-[#5D2689] text-white transition-colors duration-200 normal-case"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          <FileText className="w-4 h-4 mr-1" />
                          Open
                        </Button>
                        <Button 
                          onClick={() => handleDownload(resume.id, resume.title)}
                          size="sm"
                          variant="outline"
                          className="border-[#E2E8F0] hover:border-[#F5BD1F] hover:text-[#F5BD1F] transition-colors duration-200 normal-case"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button 
                          onClick={() => handleDelete(resume.id, resume.title)}
                          size="sm"
                          variant="outline"
                          className="border-[#E2E8F0] hover:border-[#EF4444] hover:text-[#EF4444] transition-colors duration-200 normal-case"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
            )}
          </div>

          {/* Stats Cards */}
          {savedResumes.length > 0 && (
            <div className="grid grid-cols-12 gap-6 pt-8 border-t border-[#E2E8F0]">
              <div className="col-span-4">
                <Card className="border border-[#E2E8F0]">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-[#8736AA] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{savedResumes.length}</div>
                    <p style={{ color: 'rgba(93, 38, 137, 0.8)' }}>Total Resumes</p>
                  </CardContent>
                </Card>
              </div>
              <div className="col-span-4">
                <Card className="border border-[#E2E8F0]">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-[#FFD93D] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {new Set(savedResumes.map(r => r.template)).size}
                    </div>
                    <p style={{ color: 'rgba(93, 38, 137, 0.8)' }}>Templates Used</p>
                  </CardContent>
                </Card>
              </div>
              <div className="col-span-4">
                <Card className="border border-[#E2E8F0]">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-[#F5BD1F] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>∞</div>
                    <p style={{ color: 'rgba(93, 38, 137, 0.8)' }}>Downloads Available</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

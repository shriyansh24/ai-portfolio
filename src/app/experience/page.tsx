import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { BookOpen, Calendar, MapPin, Briefcase, Award, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience timeline showcasing growth in electronics engineering and data science roles, highlighting key achievements and skill development through attention-focused career progression.',
  keywords: [
    'professional experience',
    'electronics engineering career',
    'data science roles',
    'career progression',
    'technical achievements',
    'professional growth'
  ],
  openGraph: {
    title: 'Experience - AI Portfolio',
    description: 'Professional journey through engineering and data science',
    type: 'website',
  },
};

/**
 * Experience Page Component - Attention Layer
 * 
 * This page represents the attention layer of the transformer architecture,
 * highlighting the most relevant experiences that shaped expertise and capabilities.
 * The timeline structure demonstrates progressive skill development and increasing responsibility.
 */
export default function ExperiencePage() {
  return (
    <PageLayout variant="centered" background="default">
      <div className="py-16 space-y-16">
        
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="flex justify-center">
            <BookOpen className="w-16 h-16 text-tertiary animate-neural-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-warm-white leading-tight">
            Experience
            <br />
            <span className="text-gradient-neural">
              Attention Layer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Attention layer - Highlighting the most relevant experiences that shaped my expertise.
            Each role represents a focused attention mechanism on different aspects of 
            technical and professional growth.
          </p>
        </section>

        {/* Experience Timeline Placeholder */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-warm-white">
            Professional Attention Weights
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Current/Recent Experience Card */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-tertiary/50 transition-colors duration-300">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-8 h-8 text-tertiary group-hover:animate-neural-pulse" />
                    <div>
                      <h3 className="text-xl font-bold text-warm-white">Current Focus</h3>
                      <p className="text-gray-400">Portfolio Development & Skill Enhancement</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>2024 - Present</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Developing comprehensive AI portfolio with transformer-themed design, 
                  enhancing data science skills through practical projects, and exploring 
                  advanced neural network architectures. Focus on bridging electronics 
                  engineering background with modern AI applications.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Portfolio Development</span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">AI Research</span>
                  <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-xs">Skill Enhancement</span>
                </div>
              </div>
            </div>

            {/* Academic Experience */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-primary/50 transition-colors duration-300">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-primary group-hover:animate-neural-pulse" />
                    <div>
                      <h3 className="text-xl font-bold text-warm-white">Academic Foundation</h3>
                      <p className="text-gray-400">Electronics Engineering Education</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>Academic Institution</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Strong foundation in electronics engineering principles, mathematics, 
                  and signal processing. Coursework included digital signal processing, 
                  control systems, embedded programming, and mathematical modeling - 
                  essential building blocks for understanding neural network architectures.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Signal Processing</span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">Mathematics</span>
                  <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-xs">Control Systems</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Programming</span>
                </div>
              </div>
            </div>

            {/* Transition Period */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-secondary/50 transition-colors duration-300">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Target className="w-8 h-8 text-secondary group-hover:animate-neural-pulse" />
                    <div>
                      <h3 className="text-xl font-bold text-warm-white">Career Transition</h3>
                      <p className="text-gray-400">From Electronics to AI & Data Science</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Ongoing Journey</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Actively transitioning from traditional electronics engineering into 
                  AI and data science. This journey involves self-directed learning, 
                  practical project development, and applying engineering principles 
                  to machine learning problems. The transition leverages mathematical 
                  and analytical skills from electronics engineering.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Self-Directed Learning</span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">Career Pivot</span>
                  <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-xs">Skill Transfer</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Growth */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-warm-white">
            Attention-Focused Growth
          </h2>
          
          <div className="max-w-4xl mx-auto bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-warm-white mb-2">Professional Skills</h3>
                <p className="text-sm text-gray-400">
                  Technical problem-solving, project management, and cross-disciplinary communication
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-warm-white mb-2">Technical Excellence</h3>
                <p className="text-sm text-gray-400">
                  Mathematical modeling, algorithmic thinking, and systematic approach to complex problems
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-tertiary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-tertiary" />
                </div>
                <h3 className="font-bold text-warm-white mb-2">Growth Mindset</h3>
                <p className="text-sm text-gray-400">
                  Continuous learning, adaptability, and passion for emerging technologies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-warm-white">
            Ready for New Challenges
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Eager to apply my unique combination of electronics engineering foundation 
            and growing AI expertise to meaningful projects and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-tertiary text-black font-medium rounded-lg hover:bg-tertiary/90 transition-colors attention-glow"
            >
              <BookOpen className="w-5 h-5" />
              <span>Discuss Opportunities</span>
            </a>
            <a
              href="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-600 text-warm-white font-medium rounded-lg hover:border-tertiary hover:text-tertiary transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              <span>View Projects</span>
            </a>
          </div>
        </section>

      </div>
    </PageLayout>
  );
} 
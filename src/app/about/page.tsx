import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { Brain, Zap, Heart, Code, Mail } from 'lucide-react';

/**
 * About Page Metadata - SEO Optimization for Encoding Layer
 * This metadata helps search engines understand the professional background content
 */
export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about my journey through electronics engineering and data science, from academic foundations to professional expertise in transformer architectures and neural networks.',
  keywords: [
    'electronics engineer',
    'data science background', 
    'transformer neural networks',
    'professional journey',
    'academic experience',
    'technical expertise'
  ],
  openGraph: {
    title: 'About - AI Portfolio',
    description: 'Discover the journey from electronics engineering to AI expertise',
    type: 'website',
  },
};

/**
 * About Page Component - Encoding Layer
 * 
 * This page represents the encoding layer of the transformer architecture,
 * where raw personal and professional experiences are transformed into 
 * meaningful representations for processing by deeper layers.
 * 
 * The content structure follows neural network principles:
 * - Input layer: Basic personal information
 * - Hidden layers: Educational and professional development
 * - Output preparations: Skills and capabilities ready for application
 */
export default function AboutPage() {
  return (
    <PageLayout variant="centered" background="neural">
      <div className="py-16 space-y-16">
        
        {/* Hero Section - Input Layer */}
        <section className="text-center space-y-8">
          <div className="flex justify-center">
            <Brain className="w-16 h-16 text-primary animate-neural-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-warm-white leading-tight">
            About Me
            <br />
            <span className="text-gradient-neural">
              Encoding Layer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to the encoding layer of my professional journey. Here, raw experiences 
            are transformed into meaningful insights about 
            <span className="text-primary font-semibold"> electronics engineering </span>
            and 
            <span className="text-secondary font-semibold"> data science</span>.
          </p>
        </section>

        {/* Professional Journey Overview */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-warm-white">
            Neural Network Architecture
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Educational Foundation */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-primary/50 transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Brain className="w-8 h-8 text-primary group-hover:animate-neural-pulse" />
                  <h3 className="text-xl font-bold text-warm-white">Educational Foundation</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Strong academic background in electronics engineering with specialization in 
                  signal processing, control systems, and embedded development. Foundation 
                  courses provided the mathematical rigor essential for understanding 
                  transformer architectures and neural network implementations.
                </p>
                <div className="pt-4">
                  <div className="text-sm text-gray-500">Key Areas:</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Signal Processing</span>
                    <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">Control Theory</span>
                    <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-xs">Mathematics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Evolution */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-secondary/50 transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-secondary group-hover:animate-neural-pulse" />
                  <h3 className="text-xl font-bold text-warm-white">Professional Evolution</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Transitioned from traditional electronics engineering into the fascinating 
                  world of data science and AI. This evolution mirrors the transformer 
                  architecture's ability to process sequential information and discover 
                  patterns across different domains.
                </p>
                <div className="pt-4">
                  <div className="text-sm text-gray-500">Current Focus:</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Machine Learning</span>
                    <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">Neural Networks</span>
                    <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-xs">Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Philosophy */}
        <section className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="flex justify-center">
            <Heart className="w-12 h-12 text-secondary animate-neural-pulse" />
          </div>
          
          <h2 className="text-3xl font-bold text-warm-white">
            Philosophy & Approach
          </h2>
          
          <blockquote className="text-lg text-gray-300 leading-relaxed italic border-l-4 border-primary pl-6">
            "            &quot;Just as transformer models excel by paying attention to the most relevant 
            information while processing sequences, I believe in focusing deeply on 
            problems that matter, drawing connections across disciplines, and building 
            solutions that are both technically excellent and practically useful.&quot;"
          </blockquote>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <Code className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-warm-white mb-2">Technical Excellence</h3>
              <p className="text-sm text-gray-400">
                Commitment to clean, well-documented code and robust engineering practices
              </p>
            </div>
            <div className="text-center">
              <Brain className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-warm-white mb-2">Continuous Learning</h3>
              <p className="text-sm text-gray-400">
                Always exploring new technologies and methodologies in AI and engineering
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 text-tertiary mx-auto mb-3" />
              <h3 className="font-semibold text-warm-white mb-2">Collaborative Spirit</h3>
              <p className="text-sm text-gray-400">
                Believing that the best solutions emerge from diverse perspectives and teamwork
              </p>
            </div>
          </div>
        </section>

        {/* Current Interests */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-warm-white">
            Current Learning & Interests
          </h2>
          
          <div className="max-w-3xl mx-auto bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Currently diving deep into transformer architectures, exploring their 
                applications beyond natural language processing. Particularly interested 
                in how attention mechanisms can be applied to time-series analysis in 
                engineering systems and signal processing applications.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold text-lg">AI</span>
                  </div>
                  <span className="text-sm text-gray-400">Transformers</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-secondary font-bold text-lg">ML</span>
                  </div>
                  <span className="text-sm text-gray-400">Deep Learning</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-tertiary font-bold text-lg">DS</span>
                  </div>
                  <span className="text-sm text-gray-400">Data Science</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold text-lg">EE</span>
                  </div>
                  <span className="text-sm text-gray-400">Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-warm-white">
            Let's Connect & Collaborate
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
                          Whether you&apos;re interested in discussing transformer architectures, 
            engineering challenges, or potential collaborations, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors attention-glow"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </a>
            <a
              href="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-600 text-warm-white font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              <Code className="w-5 h-5" />
              <span>View Projects</span>
            </a>
          </div>
        </section>

      </div>
    </PageLayout>
  );
} 
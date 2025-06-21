import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { Code, ExternalLink, Github, Zap, Network, Brain } from 'lucide-react';

/**
 * Projects Page Metadata - SEO Optimization for Processing Layer
 */
export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore technical projects that demonstrate expertise in electronics engineering, data science, neural networks, and innovative problem-solving through transformer-inspired implementations.',
  keywords: [
    'machine learning projects',
    'electronics engineering portfolio',
    'neural network implementations',
    'data science projects',
    'transformer models',
    'technical portfolio'
  ],
  openGraph: {
    title: 'Projects - AI Portfolio',
    description: 'Technical projects showcasing AI and engineering expertise',
    type: 'website',
  },
};

/**
 * Projects Page Component - Processing Layer
 * 
 * This page represents the processing layer of the transformer architecture,
 * where technical skills and knowledge are applied to create meaningful solutions.
 * Projects are organized by domain and showcase progressive complexity.
 */
export default function ProjectsPage() {
  return (
    <PageLayout variant="wide" background="default">
      <div className="py-16 space-y-16">
        
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="flex justify-center">
            <Network className="w-16 h-16 text-secondary animate-neural-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-warm-white leading-tight">
            Projects
            <br />
            <span className="text-gradient-neural">
              Processing Layer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Processing layer - Where ideas transform into technical implementations.
            Each project represents a different attention head focusing on specific 
            domains of expertise.
          </p>
        </section>

        {/* Project Categories */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-warm-white">
            Multi-Head Attention Projects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI/ML Projects */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-primary/50 transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Brain className="w-8 h-8 text-primary group-hover:animate-neural-pulse" />
                  <h3 className="text-xl font-bold text-warm-white">AI & Machine Learning</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Transformer implementations, neural network architectures, and 
                  data science applications demonstrating deep learning expertise.
                </p>
                <div className="text-sm text-gray-500">
                  Coming Soon: Detailed project showcase with interactive demos
                </div>
              </div>
            </div>

            {/* Electronics Projects */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-secondary/50 transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-secondary group-hover:animate-neural-pulse" />
                  <h3 className="text-xl font-bold text-warm-white">Electronics Engineering</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Embedded systems, signal processing, and control system 
                  implementations bridging hardware and software domains.
                </p>
                <div className="text-sm text-gray-500">
                  Coming Soon: Hardware projects and circuit implementations
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-tertiary/50 transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Code className="w-8 h-8 text-tertiary group-hover:animate-neural-pulse" />
                  <h3 className="text-xl font-bold text-warm-white">Web Development</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Full-stack applications, interactive visualizations, and 
                  innovative user interfaces including this portfolio itself.
                </p>
                <div className="text-sm text-gray-500">
                  Current: This transformer-themed portfolio website
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project Placeholder */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-warm-white">
            Featured Implementation
          </h2>
          
          <div className="max-w-4xl mx-auto bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Brain className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-warm-white">
                AI Portfolio - Transformer Architecture
              </h3>
              
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                This portfolio itself represents a significant project - a transformer-themed 
                website built with Next.js 15, TypeScript, and Framer Motion. It demonstrates 
                advanced React patterns, neural network-inspired navigation, and comprehensive 
                accessibility implementation.
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Next.js 15</span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-tertiary/20 text-tertiary rounded-full text-sm">Framer Motion</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Tailwind CSS</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://github.com/yourusername/ai-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-600 text-warm-white font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Source</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-black font-medium rounded-lg hover:bg-primary/90 transition-colors attention-glow"
                >
                  <Brain className="w-5 h-5" />
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-warm-white">
            More Projects Coming Soon
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm currently working on expanding this section with detailed project 
            showcases, interactive demos, and comprehensive technical documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-secondary text-black font-medium rounded-lg hover:bg-secondary/90 transition-colors attention-glow"
            >
              <Network className="w-5 h-5" />
              <span>Discuss Projects</span>
            </a>
            <a
              href="/experience"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-600 text-warm-white font-medium rounded-lg hover:border-secondary hover:text-secondary transition-colors"
            >
              <Zap className="w-5 h-5" />
              <span>View Experience</span>
            </a>
          </div>
        </section>

      </div>
    </PageLayout>
  );
} 
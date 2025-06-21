import { Metadata } from 'next';
import { PageLayout } from '@/components/layout/PageLayout';
import { Mail, MessageSquare, Linkedin, Github, MapPin, Clock, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect with me for collaboration opportunities, technical discussions, or professional inquiries. Open to electronics engineering, data science, and AI projects.',
  keywords: [
    'contact information',
    'collaboration opportunities',
    'technical discussions',
    'professional inquiries',
    'electronics engineering contact',
    'data science collaboration'
  ],
  openGraph: {
    title: 'Contact - AI Portfolio',
    description: 'Connect for collaboration and professional opportunities',
    type: 'website',
  },
};

/**
 * Contact Page Component - Output Layer
 * 
 * This page represents the output layer of the transformer architecture,
 * where professional connections and collaborations begin. It provides
 * multiple channels for communication and establishes clear expectations
 * for response times and collaboration types.
 */
export default function ContactPage() {
  return (
    <PageLayout variant="centered" background="neural">
      <div className="py-16 space-y-16">
        
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="flex justify-center">
            <Send className="w-16 h-16 text-primary animate-neural-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-warm-white leading-tight">
            Contact
            <br />
            <span className="text-gradient-neural">
              Output Layer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Output layer - Where professional connections and collaborations begin.
            Ready to transform ideas into meaningful technical solutions through 
            collaborative partnerships.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center text-warm-white">
            Communication Channels
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-primary/50 transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-8 h-8 text-primary group-hover:animate-neural-pulse" />
                  <h3 className="text-xl font-bold text-warm-white">Email</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Direct communication for detailed discussions, project proposals, 
                  and professional inquiries. Best for comprehensive collaboration planning.
                </p>
                <a 
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <span>your.email@example.com</span>
                  <Send className="w-4 h-4" />
                </a>
                <div className="text-xs text-gray-500 flex items-center space-x-2">
                  <Clock className="w-3 h-3" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-secondary/50 transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-8 h-8 text-secondary group-hover:animate-neural-pulse" />
                  <h3 className="text-xl font-bold text-warm-white">LinkedIn</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Professional networking and career discussions. Ideal for exploring 
                  job opportunities, industry connections, and professional development.
                </p>
                <a 
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <Linkedin className="w-4 h-4" />
                </a>
                <div className="text-xs text-gray-500 flex items-center space-x-2">
                  <Clock className="w-3 h-3" />
                  <span>Professional networking</span>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-tertiary/50 transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Github className="w-8 h-8 text-tertiary group-hover:animate-neural-pulse" />
                  <h3 className="text-xl font-bold text-warm-white">GitHub</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Technical collaboration and code review. Perfect for discussing 
                  implementation details, contributing to projects, and technical mentorship.
                </p>
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-tertiary hover:text-tertiary/80 transition-colors"
                >
                  <span>View GitHub Profile</span>
                  <Github className="w-4 h-4" />
                </a>
                <div className="text-xs text-gray-500 flex items-center space-x-2">
                  <Clock className="w-3 h-3" />
                  <span>Code collaboration</span>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="group p-8 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-primary/50 transition-colors duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-8 h-8 text-primary group-hover:animate-neural-pulse" />
                  <h3 className="text-xl font-bold text-warm-white">Quick Message</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Simple contact form for brief inquiries, initial introductions, 
                  and quick questions about my background or availability.
                </p>
                <div className="text-primary font-medium">
                  Form available below
                </div>
                <div className="text-xs text-gray-500 flex items-center space-x-2">
                  <Clock className="w-3 h-3" />
                  <span>Quick response</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Placeholder */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-warm-white">
            Send a Quick Message
          </h2>
          
          <div className="max-w-2xl mx-auto bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="space-y-6">
              <p className="text-gray-300 text-center">
                Contact form implementation coming soon. For now, please use the 
                direct communication channels above.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <div className="w-4 h-4 bg-gray-600 rounded"></div>
                    <span>Name field placeholder</span>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <div className="w-4 h-4 bg-gray-600 rounded"></div>
                    <span>Email field placeholder</span>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg h-24">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <div className="w-4 h-4 bg-gray-600 rounded"></div>
                    <span>Message field placeholder</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-700 text-gray-400 rounded-lg cursor-not-allowed">
                    <Send className="w-5 h-5" />
                    <span>Send Message (Coming Soon)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Types */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold text-warm-white">
            Collaboration Opportunities
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">AI</span>
                </div>
                <h3 className="font-bold text-warm-white">AI & Machine Learning</h3>
                <p className="text-sm text-gray-400">
                  Neural networks, transformers, data science projects, and AI research
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-secondary font-bold">EE</span>
                </div>
                <h3 className="font-bold text-warm-white">Electronics Engineering</h3>
                <p className="text-sm text-gray-400">
                  Embedded systems, signal processing, hardware-software integration
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-tertiary font-bold">WD</span>
                </div>
                <h3 className="font-bold text-warm-white">Web Development</h3>
                <p className="text-sm text-gray-400">
                  Full-stack applications, data visualization, interactive experiences
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Availability */}
        <section className="text-center space-y-6">
          <div className="max-w-2xl mx-auto bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-warm-white font-medium">Location & Availability</span>
              </div>
              
              <div className="text-gray-300 space-y-2">
                <p>Remote collaboration preferred</p>
                <p>Open to relocation for the right opportunity</p>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
} 
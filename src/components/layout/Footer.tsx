'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, Github, Linkedin, Mail, ExternalLink, Heart, Zap } from 'lucide-react';

/**
 * Social link configuration interface
 * Defines the structure for external social media and contact links
 */
interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
}

/**
 * Quick navigation link interface
 * Defines internal site navigation links for the footer
 */
interface QuickLink {
  href: string;
  label: string;
}

/**
 * Social media and contact links with neural network metaphors
 * Each link represents a different output channel from the portfolio
 */
const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/yourusername',
    icon: Github,
    label: 'GitHub',
    description: 'Code repositories and neural network implementations'
  },
  {
    href: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin,
    label: 'LinkedIn',
    description: 'Professional network connections and opportunities'
  },
  {
    href: 'mailto:your.email@example.com',
    icon: Mail,
    label: 'Email',
    description: 'Direct communication channel for collaboration'
  }
];

/**
 * Quick navigation links for easy site traversal
 * Represents the main neural pathways through the portfolio
 */
const quickLinks: QuickLink[] = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' }
];

/**
 * Footer Component
 * 
 * Provides comprehensive site footer with:
 * - Transformer-themed branding reinforcement
 * - Social media and contact integration
 * - Quick navigation for improved UX
 * - Professional legal information
 * - Neural network status indicators
 * - Accessibility-compliant design
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 mt-auto backdrop-blur-sm">
      <div className="container-lg py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description Column */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Brand Logo with Neural Theme */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 attention-glow rounded-lg p-2 -m-2 w-fit group"
              aria-label="AI Portfolio - Return to homepage"
            >
              <Brain className="w-6 h-6 text-primary group-hover:animate-neural-pulse" aria-hidden="true" />
              <span className="text-lg font-bold text-gradient-neural">
                AI Portfolio
              </span>
              <Zap className="w-4 h-4 text-tertiary group-hover:animate-neural-pulse" aria-hidden="true" />
            </Link>
            
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              A transformer-themed portfolio showcasing the intersection of electronics 
              engineering and data science through innovative interactive design and 
              neural network-inspired navigation patterns.
            </p>
            
            {/* Technology Stack Badge */}
            <div className="text-xs text-gray-500 space-y-1">
              <div className="flex items-center space-x-2">
                <Zap className="w-3 h-3 text-primary" />
                <span>Built with Next.js 15, TypeScript & Framer Motion</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-3 h-3 text-secondary" />
                <span>Crafted with attention to accessibility & performance</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-warm-white font-semibold flex items-center space-x-2">
              <Brain className="w-4 h-4 text-primary" />
              <span>Neural Pathways</span>
            </h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="block text-gray-400 hover:text-primary transition-colors text-sm group"
                  >
                    <span className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors" />
                      <span>{link.label}</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Social Links and Contact Column */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-warm-white font-semibold flex items-center space-x-2">
              <ExternalLink className="w-4 h-4 text-secondary" />
              <span>Connect & Collaborate</span>
            </h3>
            
            {/* Social Links Grid */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-primary transition-colors attention-glow rounded-lg group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    title={social.description}
                    aria-label={`${social.label} - ${social.description}`}
                  >
                    <Icon className="w-5 h-5 group-hover:animate-neural-pulse" aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
            
            {/* Availability Status */}
            <div className="text-xs text-gray-500 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Available for collaboration & opportunities</span>
              </div>
              <div className="text-gray-600">
                Response time: Usually within 24 hours
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section with Copyright and Legal */}
        <motion.div 
          className="pt-8 mt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <div className="text-xs text-gray-500 flex items-center space-x-2">
            <span>© {currentYear} Your Name. All rights reserved.</span>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <span>Neural Portfolio v2.0</span>
          </div>
          
          {/* Legal Links */}
          <div className="flex space-x-4 text-xs text-gray-500">
            <Link 
              href="/privacy" 
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <div className="w-1 h-1 bg-gray-600 rounded-full self-center" />
            <Link 
              href="/terms" 
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <div className="w-1 h-1 bg-gray-600 rounded-full self-center" />
            <a 
              href="/sitemap.xml"
              className="hover:text-primary transition-colors"
            >
              Sitemap
            </a>
          </div>
        </motion.div>
        
        {/* Neural Network Status Indicator */}
        <motion.div 
          className="mt-6 pt-4 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 text-xs text-gray-600">
            <Zap className="w-3 h-3 text-primary animate-neural-pulse" />
            <span>Transformer Architecture: Active</span>
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
            <span>All neural pathways operational</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

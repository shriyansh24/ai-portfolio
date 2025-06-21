'use client';

import React from 'react';
import { 
  Typography, DisplayText, HeadingText, TitleText, BodyText, CaptionText, NeuralHeading,
  Button, PrimaryButton, NeuralButton, GhostButton, ConnectionButton,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, ProjectCard, NeuralCard,
  Input, NeuralInput, SearchInput, Textarea,
  Badge, SkillBadge, StatusBadge, TechBadge, NeuralBadge, StageBadge,
  Loading, Skeleton, ProgressBar, Spinner
} from '@/components/ui';
import { Brain, Github, Zap } from 'lucide-react';

export function DesignSystemShowcase() {
  const [progress, setProgress] = React.useState(75);

  return (
    <div className="container-lg py-16 space-y-20">
      
      {/* Header */}
      <section className="text-center space-y-6">
        <DisplayText className="mb-4">Design System Showcase</DisplayText>
        <BodyText color="secondary" className="max-w-3xl mx-auto">
          Demonstrating the transformer-themed component library that powers this AI portfolio. 
          Each component follows neural network principles with consistent theming and accessibility.
        </BodyText>
      </section>

      {/* Typography */}
      <section className="space-y-8">
        <div className="space-y-4">
          <HeadingText>Typography System</HeadingText>
          <BodyText color="secondary">
            Hierarchical text components with transformer-themed gradient options and consistent spacing.
          </BodyText>
        </div>
        
        <div className="space-y-6 p-8 bg-gray-900/30 rounded-xl border border-gray-800">
          <DisplayText>Display Text - Neural Network Architecture</DisplayText>
          <HeadingText>Heading Text - Transformer Models</HeadingText>
          <TitleText>Title Text - Attention Mechanisms</TitleText>
          <BodyText>Body text provides clear, readable content that maintains accessibility while supporting the transformer theme through consistent typography hierarchy.</BodyText>
          <CaptionText>Caption text for secondary information and metadata</CaptionText>
          <Typography variant="body" color="gradient">Gradient text for special emphasis and neural network highlights</Typography>
          <NeuralHeading>Neural-themed heading with animated pulse effect</NeuralHeading>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-8">
        <div className="space-y-4">
          <HeadingText>Interactive Buttons</HeadingText>
          <BodyText color="secondary">
            Button components with transformer-themed animations and comprehensive accessibility support.
          </BodyText>
        </div>
        
        <div className="space-y-6 p-8 bg-gray-900/30 rounded-xl border border-gray-800">
          <div className="space-y-4">
            <TitleText as="h3">Button Variants</TitleText>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton>Primary Action</PrimaryButton>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <NeuralButton>Neural Theme</NeuralButton>
              <GhostButton>Ghost Button</GhostButton>
              <Button variant="gradient">Gradient</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <TitleText as="h3">Interactive Features</TitleText>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button loading>Loading</Button>
              <Button leftIcon={<Brain className="w-4 h-4" />}>With Icon</Button>
              <ConnectionButton>Neural Connection</ConnectionButton>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-8">
        <div className="space-y-4">
          <HeadingText>Card Components</HeadingText>
          <BodyText color="secondary">
            Flexible content containers with transformer-themed variants and interactive animations.
          </BodyText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Standard card component for general content presentation</CardDescription>
            </CardHeader>
            <CardContent>
              <BodyText>Card content with proper spacing and typography hierarchy for optimal readability.</BodyText>
            </CardContent>
          </Card>

          <Card variant="neural" interactive>
            <CardHeader>
              <CardTitle>Neural Card</CardTitle>
              <CardDescription>Transformer-themed interactive card with attention glow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <SkillBadge level="expert">Expert Level</SkillBadge>
                <StatusBadge status="active">Active</StatusBadge>
              </div>
            </CardContent>
          </Card>

          <NeuralCard layer="Attention Layer">
            <CardHeader>
              <CardTitle>Neural Layer Card</CardTitle>
              <CardDescription>Specialized card with layer identification and connection indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <Loading variant="neural" text="Processing..." />
            </CardContent>
          </NeuralCard>
        </div>
      </section>

      {/* Form Components */}
      <section className="space-y-8">
        <div className="space-y-4">
          <HeadingText>Form Components</HeadingText>
          <BodyText color="secondary">
            Accessible form inputs with neural network theming and comprehensive validation states.
          </BodyText>
        </div>
        
        <div className="max-w-2xl space-y-6 p-8 bg-gray-900/30 rounded-xl border border-gray-800">
          <Input 
            label="Email Address" 
            type="email" 
            placeholder="your@email.com"
            helper="We'll never share your email address"
          />
          
          <Input 
            label="Password" 
            type="password" 
            placeholder="Enter secure password"
            variant="neural"
          />
          
          <SearchInput 
            label="Search Projects"
            placeholder="Search by technology or name..."
          />
          
          <NeuralInput
            label="Neural Network Input"
            placeholder="Data flows through transformer layers..."
            success="Valid input detected"
          />
          
          <Textarea 
            label="Project Description"
            placeholder="Describe your transformer-based project..."
            variant="neural"
          />
        </div>
      </section>

      {/* Badges and Status */}
      <section className="space-y-8">
        <div className="space-y-4">
          <HeadingText>Badges and Status Indicators</HeadingText>
          <BodyText color="secondary">
            Visual status communication with skill levels, project stages, and technology categories.
          </BodyText>
        </div>
        
        <div className="space-y-6 p-8 bg-gray-900/30 rounded-xl border border-gray-800">
          <div className="space-y-4">
            <TitleText as="h3">Basic Badge Variants</TitleText>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="accent">Accent</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <NeuralBadge icon={<Brain className="w-3 h-3" />}>Neural</NeuralBadge>
            </div>
          </div>
          
          <div className="space-y-4">
            <TitleText as="h3">Skill Level Indicators</TitleText>
            <div className="flex flex-wrap gap-2">
              <SkillBadge level="beginner">React</SkillBadge>
              <SkillBadge level="intermediate">TypeScript</SkillBadge>
              <SkillBadge level="advanced">Python</SkillBadge>
              <SkillBadge level="expert">Machine Learning</SkillBadge>
            </div>
          </div>

          <div className="space-y-4">
            <TitleText as="h3">Technology Categories</TitleText>
            <div className="flex flex-wrap gap-2">
              <TechBadge category="frontend">React</TechBadge>
              <TechBadge category="backend">Node.js</TechBadge>
              <TechBadge category="ai">TensorFlow</TechBadge>
              <TechBadge category="tools">Docker</TechBadge>
            </div>
          </div>

          <div className="space-y-4">
            <TitleText as="h3">Project Status</TitleText>
            <div className="flex flex-wrap gap-2">
              <StatusBadge status="active">Active Development</StatusBadge>
              <StatusBadge status="pending">Pending Review</StatusBadge>
              <StatusBadge status="completed">Completed</StatusBadge>
              <StatusBadge status="inactive">Archived</StatusBadge>
              <StageBadge stage="deployed" />
              <StageBadge stage="development" />
            </div>
          </div>
        </div>
      </section>

      {/* Loading States */}
      <section className="space-y-8">
        <div className="space-y-4">
          <HeadingText>Loading States and Progress</HeadingText>
          <BodyText color="secondary">
            Neural network-inspired loading animations and progress indicators for smooth user experiences.
          </BodyText>
        </div>
        
        <div className="space-y-6 p-8 bg-gray-900/30 rounded-xl border border-gray-800">
          <div className="space-y-4">
            <TitleText as="h3">Loading Variants</TitleText>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 w-24">Default:</span>
                <Loading variant="default" text="Loading..." />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 w-24">Neural:</span>
                <Loading variant="neural" text="Processing..." />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 w-24">Dots:</span>
                <Loading variant="dots" text="Thinking..." />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 w-24">Pulse:</span>
                <Loading variant="pulse" text="Analyzing..." />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400 w-24">Minimal:</span>
                <Loading variant="minimal" size="lg" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <TitleText as="h3">Progress Indicators</TitleText>
            <ProgressBar progress={progress} text="Neural Network Training" variant="neural" />
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>-10%</Button>
              <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>+10%</Button>
              <Spinner size="sm" />
            </div>
          </div>
          
          <div className="space-y-4">
            <TitleText as="h3">Skeleton Loading</TitleText>
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="space-y-8">
        <div className="space-y-4">
          <HeadingText>Live Component Demo</HeadingText>
          <BodyText color="secondary">
            Interactive demonstration of components working together in a neural network interface.
          </BodyText>
        </div>
        
        <ProjectCard className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>AI Portfolio Design System</span>
              <StageBadge stage="deployed" />
            </CardTitle>
            <CardDescription>
              Comprehensive component library built with transformer architecture principles
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <TechBadge category="frontend">React</TechBadge>
              <TechBadge category="frontend">TypeScript</TechBadge>
              <TechBadge category="frontend">Tailwind CSS</TechBadge>
              <TechBadge category="ai">Transformer Theme</TechBadge>
            </div>
            
            <ProgressBar progress={100} text="Implementation Progress" variant="neural" />
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <CaptionText>Components Created:</CaptionText>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Typography</span>
                    <StatusBadge status="completed">✓</StatusBadge>
                  </div>
                  <div className="flex justify-between">
                    <span>Buttons</span>
                    <StatusBadge status="completed">✓</StatusBadge>
                  </div>
                  <div className="flex justify-between">
                    <span>Cards</span>
                    <StatusBadge status="completed">✓</StatusBadge>
                  </div>
                  <div className="flex justify-between">
                    <span>Forms</span>
                    <StatusBadge status="completed">✓</StatusBadge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <CaptionText>Features:</CaptionText>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Accessibility</span>
                    <StatusBadge status="completed">✓</StatusBadge>
                  </div>
                  <div className="flex justify-between">
                    <span>Animations</span>
                    <StatusBadge status="completed">✓</StatusBadge>
                  </div>
                  <div className="flex justify-between">
                    <span>Theming</span>
                    <StatusBadge status="completed">✓</StatusBadge>
                  </div>
                  <div className="flex justify-between">
                    <span>Documentation</span>
                    <StatusBadge status="active">📝</StatusBadge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          
          <CardFooter>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-golden-orange" />
                <CaptionText>Neural Network Ready</CaptionText>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" leftIcon={<Github className="w-4 h-4" />}>
                  View Code
                </Button>
                <NeuralButton size="sm" leftIcon={<Zap className="w-4 h-4" />}>
                  Live Demo
                </NeuralButton>
              </div>
            </div>
          </CardFooter>
        </ProjectCard>
      </section>

    </div>
  );
} 
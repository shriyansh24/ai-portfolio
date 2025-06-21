import { PageLayout } from '@/components/layout/PageLayout';
import { Brain, Zap, Network, ArrowRight } from 'lucide-react';

/**
 * Homepage Component - Input Layer of the AI Portfolio
 * 
 * This component serves as the entry point to the transformer-themed portfolio,
 * demonstrating the enhanced layout architecture and provider system.
 * It showcases the warm-on-black color palette and neural network metaphors.
 */
export default function HomePage() {
  return (
    <PageLayout variant="wide" background="neural">
      <div className="min-h-screen flex items-center justify-center">
        <div className="container-lg py-16 text-center space-y-12">
          
          {/* Hero Section - Input Layer */}
          <section className="space-y-8">
            <div className="flex justify-center space-x-4">
              <Brain className="w-20 h-20 text-primary animate-neural-pulse" />
              <Zap className="w-16 h-16 text-secondary animate-neural-pulse" />
              <Network className="w-18 h-18 text-tertiary animate-neural-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-warm-white leading-tight">
              Welcome to the
              <br />
              <span className="text-gradient-neural">
                Neural Portfolio
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Exploring the intersection of <span className="text-primary font-semibold">electronics engineering</span> and{' '}
              <span className="text-secondary font-semibold">artificial intelligence</span> through{' '}
              <span className="text-tertiary font-semibold">transformer-inspired design</span>.
            </p>
          </section>

          {/* Navigation Cards */}
          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'About', description: 'Encoding Layer', href: '/about', icon: Brain, color: 'primary' },
              { title: 'Projects', description: 'Processing Layer', href: '/projects', icon: Network, color: 'secondary' },
              { title: 'Experience', description: 'Attention Layer', href: '/experience', icon: Zap, color: 'tertiary' },
              { title: 'Contact', description: 'Output Layer', href: '/contact', icon: Brain, color: 'primary' }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-primary/50 transition-all duration-300 attention-glow"
                >
                  <div className="space-y-4">
                    <Icon className="w-8 h-8 text-primary group-hover:animate-neural-pulse mx-auto" />
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-warm-white">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors mx-auto" />
                  </div>
                </a>
              );
            })}
          </section>

          {/* Neural Network Status */}
          <section className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Zap className="w-4 h-4 text-primary animate-neural-pulse" />
              <span className="text-sm">Transformer Architecture: Active</span>
            </div>
            <div className="text-xs text-gray-500">
              All neural pathways operational • Portfolio v2.0
            </div>
          </section>

          {/* Enter Portfolio Button */}
          <section>
            <a
              href="/about"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-black font-bold text-lg rounded-lg hover:bg-primary/90 transition-colors attention-glow"
            >
              <Brain className="w-6 h-6" />
              <span>Enter Neural Network</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}

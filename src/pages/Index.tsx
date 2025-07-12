import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Star, 
  ArrowRight, 
  Play, 
  Check, 
  ChevronDown,
  Search,
  Moon,
  Sun,
  Menu,
  X,
  Zap,
  Palette,
  Code,
  Rocket,
  Users,
  Globe,
  Shield,
  Command,
  Smartphone,
  Database,
  Layers,
  TrendingUp,
  Lock,
  Eye,
  Download,
  ExternalLink
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const heroRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const fullText = "You need a powerful website template.";

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Command palette
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandOpen(open => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Konami code easter egg
  useEffect(() => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'KeyB', 'KeyA'
    ];
    let userInput: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      userInput.push(e.code);
      if (userInput.length > konamiCode.length) {
        userInput = userInput.slice(-konamiCode.length);
      }
      
      if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
        // Trigger confetti
        toast({
          title: "🎉 Konami Code Activated!",
          description: "You found the easter egg! Fireworks incoming...",
        });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toast]);

  const products = [
    {
      id: 1,
      title: "SaaS Starter Kit",
      description: "Complete Next.js boilerplate with authentication, payments, and dashboard",
      tags: ["Next.js", "Auth", "Payments"],
      price: "$99",
      category: "template",
      image: "/placeholder.svg",
      features: ["Authentication", "Stripe Integration", "Admin Dashboard"],
      downloads: "2.1k"
    },
    {
      id: 2,
      title: "AI Chat Agent",
      description: "Intelligent chatbot with OpenAI integration and streaming responses",
      tags: ["OpenAI", "Streaming", "React"],
      price: "$149",
      category: "ai-agent",
      image: "/placeholder.svg",
      features: ["OpenAI GPT-4", "Real-time Chat", "Custom Training"],
      downloads: "1.8k"
    },
    {
      id: 3,
      title: "Dashboard Template",
      description: "Modern analytics dashboard with charts, dark mode, and responsive design",
      tags: ["Analytics", "Charts", "Dark Mode"],
      price: "$79",
      category: "template",
      image: "/placeholder.svg",
      features: ["Chart.js Integration", "Dark Mode", "Mobile Responsive"],
      downloads: "3.2k"
    },
    {
      id: 4,
      title: "E-commerce Bot",
      description: "Automated e-commerce assistant with Shopify integration",
      tags: ["Shopify", "AI", "Automation"],
      price: "$199",
      category: "ai-agent",
      image: "/placeholder.svg",
      features: ["Shopify API", "Order Management", "Customer Support"],
      downloads: "1.5k"
    },
    {
      id: 5,
      title: "Landing Page Kit",
      description: "High-converting landing pages optimized for speed and SEO",
      tags: ["Responsive", "SEO", "Fast"],
      price: "$59",
      category: "template",
      image: "/placeholder.svg",
      features: ["SEO Optimized", "Conversion Focused", "Mobile First"],
      downloads: "4.1k"
    },
    {
      id: 6,
      title: "Full-Stack SaaS",
      description: "Enterprise-ready SaaS solution with database, API, and authentication",
      tags: ["Database", "API", "Auth"],
      price: "$299",
      category: "saas-kit",
      image: "/placeholder.svg",
      features: ["PostgreSQL", "REST API", "Role-based Auth"],
      downloads: "892"
    }
  ];

  const filteredProducts = products.filter(product => 
    currentFilter === 'all' || product.category === currentFilter
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsCommandOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Command Palette */}
      {isCommandOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center p-4 animate-fade-in">
          <div className="bg-card border border-border rounded-xl p-0 w-full max-w-lg mt-20 animate-scale-in">
            <div className="flex items-center border-b border-border p-4">
              <Search className="h-4 w-4 text-muted-foreground mr-3" />
              <input
                type="text"
                placeholder="Search sections..."
                className="bg-transparent outline-none flex-1 text-sm"
                autoFocus
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCommandOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-2">
              {['hero', 'about', 'products', 'demo', 'pricing', 'faq'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors capitalize text-sm"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="font-satoshi text-xl font-bold text-gradient">
                Yo'use Studio
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('products')} className="text-sm hover:text-primary transition-colors">Products</button>
              <button onClick={() => scrollToSection('demo')} className="text-sm hover:text-primary transition-colors">Demo</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">FAQ</button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCommandOpen(true)}
                className="hidden md:flex items-center space-x-2"
              >
                <Command className="h-4 w-4" />
                <span>⌘K</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} className="block w-full text-left">About</button>
              <button onClick={() => { scrollToSection('products'); setIsMenuOpen(false); }} className="block w-full text-left">Products</button>
              <button onClick={() => { scrollToSection('demo'); setIsMenuOpen(false); }} className="block w-full text-left">Demo</button>
              <button onClick={() => { scrollToSection('pricing'); setIsMenuOpen(false); }} className="block w-full text-left">Pricing</button>
              <button onClick={() => { scrollToSection('faq'); setIsMenuOpen(false); }} className="block w-full text-left">FAQ</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="scroll-snap-section relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        
        {/* Parallax Stars for Dark Mode */}
        {darkMode && (
          <div className="parallax-stars">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top tagline */}
          <div className="mb-6 animate-fade-in">
            <span className="text-gray-600 text-lg">You don't need a team.</span>
          </div>

          {/* Main headline */}
          <h1 className="font-satoshi text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-black">You need a </span>
            <span className="relative inline-block">
              <span className="bg-[#65fe08] text-black px-4 py-2 rounded-lg inline-flex items-center">
                <Zap className="h-8 w-8 mr-2" />
                powerful
              </span>
            </span>
            <br />
            <span className="text-black flex items-center justify-center">
              <Globe className="h-12 w-12 mr-4 text-gray-400" />
              website template.
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '800ms' }}>
            Launch a stunning website that looks like you hired a top design agency. In days.
          </p>

          {/* Social proof */}
          <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center">
                <span className="text-lg font-bold mr-2">4.9/5</span>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600">Loved by 2,645+ creators</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1200ms' }}>
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg">
              Browse Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-gray-50 px-8 py-4 text-lg">
              <Zap className="mr-2 h-5 w-5 text-[#65fe08]" />
              Learn How It Works
            </Button>
          </div>
        </div>

        {/* Bottom section showing platforms */}
        <div className="absolute bottom-8 right-8 text-right animate-fade-in" style={{ animationDelay: '1400ms' }}>
          <p className="text-sm text-gray-500 mb-2">As seen on these platforms:</p>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">lemon squeezy</span>
            <span className="text-sm font-medium">ui</span>
            <span className="text-sm font-medium">Framer</span>
            <span className="text-sm font-medium">contra</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-snap-section py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-satoshi text-4xl sm:text-5xl font-black mb-6">
              <span className="text-gradient">Empowering</span> your digital ownership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engaging with an application is like selectively opening your vault. You decrypt only what's necessary, keeping the master key - your data's encryption - solely in your control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Feature Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#16bc4e]/10 to-[#65fe08]/10 rounded-2xl p-8 border border-[#16bc4e]/20 hover:border-[#16bc4e]/40 transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-xl flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-satoshi text-2xl font-bold mb-2">Interact with your new internet</h3>
                  <Button size="sm" className="bg-[#16bc4e] hover:bg-[#16bc4e]/90 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">Good morning</p>
                      <p className="font-bold">Susan</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-gray-100 rounded"></div>
                    <div className="w-6 h-6 bg-gray-100 rounded"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg p-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs opacity-80">NATIONAL ID CARD</span>
                    <div className="w-6 h-6 bg-white/20 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-12 bg-white/20 rounded"></div>
                    <div>
                      <p className="font-bold">Susan Boyle</p>
                      <div className="flex space-x-4 text-xs mt-2">
                        <div>
                          <p>Doc number</p>
                          <p>BAA000976</p>
                        </div>
                        <div>
                          <p>Expires on</p>
                          <p>01/03/2028</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-satoshi text-xl font-bold mb-2">+5.7k</h3>
                <p className="text-sm text-muted-foreground">Users connected</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Apr</span>
                  <span>+1.1k</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>May</span>
                  <span>+1.4k</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Jun</span>
                  <span>+2.1k</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span>Jul</span>
                  <span>+1.7k</span>
                </div>
              </div>
            </div>

            {/* Technology Card */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#16bc4e]/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-[#16bc4e]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">OUR TECHNOLOGY</h4>
                </div>
              </div>
              
              <h3 className="font-satoshi text-lg font-bold mb-3">
                Didit platform enhances client onboarding, focusing on efficient identity verification and KYC.
              </h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-sm mb-1">Look in to the Camera</h4>
                  <p className="text-xs text-muted-foreground">Make sure your face is inside the box and capture a photo</p>
                </div>
                <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg mx-auto"></div>
              </div>
            </div>

            {/* Wallet Connection Card */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <h3 className="font-satoshi text-lg font-bold mb-4">Connect wallet</h3>
              <p className="text-sm text-muted-foreground mb-6">
                By connecting your wallet, you agree to our Terms of Service and our Privacy Policy
              </p>
              
              <div className="space-y-3">
                <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                  <div className="w-6 h-6 bg-white rounded mr-3"></div>
                  METAMASK
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <div className="w-6 h-6 bg-blue-100 rounded mr-3"></div>
                  COINBASE WALLET
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <div className="w-6 h-6 bg-gray-100 rounded mr-3"></div>
                  WALLET CONNECT
                </Button>
              </div>
            </div>

            {/* Download Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-satoshi text-lg font-bold">Download the App / Browser</h3>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Download className="h-4 w-4" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Didit.me</h4>
                    <p className="text-sm text-gray-600">Premium</p>
                  </div>
                  <Button size="sm" className="ml-auto bg-blue-600">GET</Button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-4 text-center text-black">
                  <div>
                    <p className="font-bold">4.9</p>
                    <p className="text-xs text-gray-600">Rating</p>
                  </div>
                  <div>
                    <p className="font-bold">12+</p>
                    <p className="text-xs text-gray-600">Age</p>
                  </div>
                  <div>
                    <p className="font-bold">9+</p>
                    <p className="text-xs text-gray-600">Category</p>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="inline-flex items-center bg-black/20 rounded-full px-3 py-1 text-xs">
                  <span className="mr-2">Now available in the App Store</span>
                  <Button size="sm" className="bg-white text-black hover:bg-gray-100">GET</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="scroll-snap-section py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.9/5 from 500+ developers</span>
            </div>
          </div>

          {/* Infinite Logo Marquee */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-12">
              {['Vercel', 'Next.js', 'Tailwind', 'OpenAI', 'Stripe', 'Supabase', 'Prisma', 'TypeScript'].map((logo, i) => (
                <div key={i} className="flex-shrink-0 text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section id="products" className="scroll-snap-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-satoshi text-3xl sm:text-4xl font-black mb-4">
              <span className="text-gradient">Ship Faster</span> with Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium templates and AI agents built for modern developers.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { key: 'all', label: 'All Products' },
              { key: 'template', label: 'Templates' },
              { key: 'ai-agent', label: 'AI Agents' },
              { key: 'saas-kit', label: 'SaaS Kits' }
            ].map((filter) => (
              <Button
                key={filter.key}
                variant={currentFilter === filter.key ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentFilter(filter.key)}
                className="transition-all duration-200"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Enhanced Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group relative overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 hover:border-[#16bc4e]/30 animate-fade-in bg-gradient-to-br from-white via-white to-gray-50/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0 relative">
                  <div className="aspect-video bg-gradient-to-br from-[#16bc4e]/10 to-[#65fe08]/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#16bc4e]/5 to-[#65fe08]/5 group-hover:from-[#16bc4e]/20 group-hover:to-[#65fe08]/20 transition-all duration-500"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Code className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Download className="h-3 w-3" />
                      <span>{product.downloads}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 relative">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-[#16bc4e] transition-colors duration-300 mb-2">
                        {product.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-[#16bc4e] to-[#65fe08] text-white font-bold ml-4 px-3 py-1">
                      {product.price}
                    </Badge>
                  </div>
                  
                  {/* Features List */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs text-muted-foreground">
                          <Check className="h-3 w-3 text-[#16bc4e] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-6">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-[#16bc4e]/30 text-[#16bc4e] hover:bg-[#16bc4e]/10">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r from-[#16bc4e] to-[#65fe08] hover:from-[#16bc4e]/90 hover:to-[#65fe08]/90 text-white font-medium shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm" className="border-[#16bc4e]/30 hover:bg-[#16bc4e]/10 hover:border-[#16bc4e] transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16bc4e]/0 via-transparent to-[#65fe08]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Demo Section */}
      <section id="demo" className="scroll-snap-section py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-satoshi text-3xl sm:text-4xl font-black mb-4">
              <span className="text-gradient">AI-Powered</span> Code Generation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our AI agent generate production-ready code in real-time.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Chat Interface */}
              <div className="p-6 border-r border-border">
                <h3 className="font-satoshi font-bold mb-4 flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  AI Chat Interface
                </h3>
                <div className="space-y-4 mb-4 h-64 overflow-y-auto bg-muted/50 rounded-lg p-4">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      👤
                    </div>
                    <div className="bg-background rounded-lg p-3 flex-1">
                      Generate a Next.js landing page with dark mode toggle
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      🤖
                    </div>
                    <div className="bg-background rounded-lg p-3 flex-1">
                      I'll create a beautiful landing page with dark mode support. Here's the code:
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    placeholder="Try: Create a dashboard component..."
                    className="flex-1 px-4 py-2 border border-border rounded-lg bg-background"
                  />
                  <Button size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Code Preview */}
              <div className="p-6">
                <h3 className="font-satoshi font-bold mb-4 flex items-center">
                  <Code className="h-5 w-5 text-primary mr-2" />
                  Generated Code
                </h3>
                <div className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm h-64 overflow-y-auto">
                  <div className="text-blue-400">import</div> {'{useState}'} <div className="text-blue-400">from</div> <div className="text-yellow-400">'react'</div>;
                  <br /><br />
                  <div className="text-blue-400">const</div> <div className="text-yellow-400">LandingPage</div> = () =&gt; {'{'}
                  <br />
                  &nbsp;&nbsp;<div className="text-blue-400">const</div> [darkMode, setDarkMode] = <div className="text-yellow-400">useState</div>(<div className="text-orange-400">false</div>);
                  <br /><br />
                  &nbsp;&nbsp;<div className="text-blue-400">return</div> (
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<div className="text-red-400">div</div> <div className="text-green-400">className</div>=<div className="text-yellow-400">{`{darkMode ? 'dark' : 'light'}`}</div>&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<div className="text-red-400">h1</div>&gt;Welcome to our site&lt;/<div className="text-red-400">h1</div>&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<div className="text-red-400">div</div>&gt;
                  <br />
                  &nbsp;&nbsp;);
                  <br />
                  {'}'};
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button size="sm" variant="outline">
                    Copy Code
                  </Button>
                  <Button size="sm">
                    Deploy to Vercel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="scroll-snap-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-satoshi text-3xl sm:text-4xl font-black mb-4">
              <span className="text-gradient">Simple Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your development needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Free</CardTitle>
                <CardDescription>Perfect for trying out our products</CardDescription>
                <div className="text-3xl font-bold">$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    "2 template downloads",
                    "Basic AI agent access",
                    "Community support",
                    "MIT license"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-primary shadow-lg scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Pro</CardTitle>
                <CardDescription>For professional developers</CardDescription>
                <div className="text-3xl font-bold">$29<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    "Unlimited downloads",
                    "Premium AI agents",
                    "Priority support",
                    "Commercial license",
                    "Source code included",
                    "Monthly new releases"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <CardDescription>For teams and agencies</CardDescription>
                <div className="text-3xl font-bold">$99<span className="text-lg font-normal text-muted-foreground">/month</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {[
                    "Everything in Pro",
                    "Custom AI training",
                    "White-label solutions",
                    "Dedicated support",
                    "Team collaboration",
                    "Custom integrations"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="scroll-snap-section py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-satoshi text-3xl sm:text-4xl font-black mb-4">
              <span className="text-gradient">Frequently Asked</span> Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our products and services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "What's included in the templates?",
                answer: "Each template includes full source code, documentation, deployment guides, and lifetime updates. All built with modern tech stacks like Next.js, TypeScript, and Tailwind CSS."
              },
              {
                question: "Can I use these for commercial projects?",
                answer: "Yes! All Pro and Enterprise plans include commercial licenses. You can use our templates and AI agents in client projects and your own products."
              },
              {
                question: "How do the AI agents work?",
                answer: "Our AI agents are powered by GPT-4 and trained on best practices. They generate production-ready code, help with debugging, and can be integrated into your existing workflow."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee on all paid plans. No questions asked."
              },
              {
                question: "How often do you release new products?",
                answer: "We release new templates and AI agents monthly for Pro subscribers, with major updates quarterly."
              }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-satoshi text-2xl font-bold text-gradient mb-4">
                Yo'use Studio
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Ship digital products at lightspeed with our premium templates, AI agents, and SaaS kits.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Globe, href: "#" },
                  { icon: Users, href: "#" },
                  { icon: Shield, href: "#" }
                ].map((social, i) => (
                  <Button key={i} variant="ghost" size="sm" className="hover:scale-110 transition-transform">
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Agents</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">SaaS Kits</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Components</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Yo'use Studio. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:scale-110 transition-transform"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

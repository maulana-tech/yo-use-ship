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
  Command
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
      tags: ["Next.js", "Auth", "Payments"],
      price: "$99",
      category: "template",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "AI Chat Agent",
      tags: ["OpenAI", "Streaming", "React"],
      price: "$149",
      category: "ai-agent",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Dashboard Template",
      tags: ["Analytics", "Charts", "Dark Mode"],
      price: "$79",
      category: "template",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "E-commerce Bot",
      tags: ["Shopify", "AI", "Automation"],
      price: "$199",
      category: "ai-agent",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Landing Page Kit",
      tags: ["Responsive", "SEO", "Fast"],
      price: "$59",
      category: "template",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Full-Stack SaaS",
      tags: ["Database", "API", "Auth"],
      price: "$299",
      category: "saas-kit",
      image: "/placeholder.svg"
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
              {['hero', 'products', 'demo', 'pricing', 'faq'].map((section) => (
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

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-[#16bc4e]/10 to-[#65fe08]/10 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-lg flex items-center justify-center">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-primary font-bold">
                      {product.price}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    View Details
                  </Button>
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

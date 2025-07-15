import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from 'lucide-react';
import CommandPalette from '@/components/CommandPalette';
import FloatingNavigation from '@/components/FloatingNavigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Web3BentoGridSection from '@/components/Web3BentoGridSection';
import ProductCarouselSection from '@/components/ProductCarouselSection';
import AIDemoSection from '@/components/AIDemoSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FaqSection';
import FooterSection from '@/components/FooterSection';


const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Scroll detection for floating navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsCommandOpen(false);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Command Palette */}
      <CommandPalette
        isCommandOpen={isCommandOpen}
        setIsCommandOpen={setIsCommandOpen}
        scrollToSection={scrollToSection}
      />

      {/* Floating Navigation */}
      <FloatingNavigation
        isScrolled={isScrolled}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsCommandOpen={setIsCommandOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <HeroSection darkMode={darkMode} />

      {/* About Section */}
      <AboutSection />

      {/* Product Showcase CTA */}
      <section className="py-16 bg-gradient-to-r from-[#16bc4e]/5 to-[#65fe08]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-satoshi text-3xl sm:text-4xl font-black mb-6">
            Ready to explore our <span className="text-gradient">products</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover our complete collection of website templates, AI tools, and development resources designed to accelerate your projects.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-[#16bc4e] hover:bg-[#16bc4e]/90 text-white group">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Browse All Products
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Web3 Bento Grid Section */}
      <Web3BentoGridSection />

      {/* Product Carousel Section */}
      <ProductCarouselSection />

      {/* AI Demo Section */}
      <AIDemoSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <FooterSection darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Index;


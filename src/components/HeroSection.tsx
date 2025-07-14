import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Star, 
  ArrowRight, 
  Zap, 
  Globe 
} from 'lucide-react';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section id="hero" ref={heroRef} className="scroll-snap-section relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
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

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Top tagline */}
        <div className="mb-6 animate-fade-in">
          <span className="text-muted-foreground text-lg">You don't need a team.</span>
        </div>

        {/* Main headline */}
        <h1 className="font-satoshi text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="text-foreground">You need a </span>
          <span className="relative inline-block">
            <span className="bg-[#65fe08] text-black px-4 py-2 rounded-lg inline-flex items-center">
              <Zap className="h-8 w-8 mr-2" />
              powerful
            </span>
          </span>
          <br />
          <span className="text-foreground flex items-center justify-center">
            <Globe className="h-12 w-12 mr-4 text-muted-foreground" />
            website template.
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '800ms' }}>
          Launch a stunning website that looks like you hired a top design agency. In days.
        </p>

        {/* Social proof */}
        <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background"></div>
            ))}
          </div>
          <div className="text-left">
            <div className="flex items-center">
              <span className="text-lg font-bold mr-2">4.9/5</span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Loved by 2,645+ creators</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1200ms' }}>
          <Button size="lg" className="bg-foreground hover:bg-foreground/80 text-background px-8 py-4 text-lg">
            Browse Templates
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-foreground text-foreground hover:bg-muted px-8 py-4 text-lg">
            <Zap className="mr-2 h-5 w-5 text-[#65fe08]" />
            Learn How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Bot, 
  Pen, 
  Star, 
  Award, 
  Users, 
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Target,
  Heart,
  Trophy
} from 'lucide-react';
import CommandPalette from '@/components/CommandPalette';
import FloatingNavigation from '@/components/FloatingNavigation';

const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsCommandOpen(false);
      setIsMenuOpen(false);
    }
  };
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & Lead Developer",
      image: "/lovable-uploads/13dcabfb-37cd-427a-987d-ce318779e776.png",
      description: "10+ years in web development and AI"
    },
    {
      name: "Sarah Kim",
      role: "UI/UX Designer",
      image: "/lovable-uploads/13dcabfb-37cd-427a-987d-ce318779e776.png",
      description: "Expert in modern design systems"
    },
    {
      name: "Mike Johnson",
      role: "AI Specialist",
      image: "/lovable-uploads/13dcabfb-37cd-427a-987d-ce318779e776.png",
      description: "Machine learning and workflow automation"
    },
    {
      name: "Emma Davis",
      role: "Content Strategist",
      image: "/lovable-uploads/13dcabfb-37cd-427a-987d-ce318779e776.png",
      description: "Blog content and digital marketing"
    }
  ];

  const awards = [
    {
      title: "Best Template Collection 2024",
      organization: "Web Design Awards",
      year: "2024"
    },
    {
      title: "Outstanding AI Innovation",
      organization: "Tech Innovation Summit",
      year: "2024"
    },
    {
      title: "Developer's Choice Award",
      organization: "CodeCraft Community",
      year: "2023"
    },
    {
      title: "Startup of the Year - Digital Tools",
      organization: "StartupNation Awards",
      year: "2023"
    }
  ];

  const testimonials = [
    {
      name: "David Rodriguez",
      role: "Startup Founder",
      content: "Using.dev helped us launch our MVP in just 2 weeks. The AI workflow templates saved us months of development time.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      role: "Digital Agency Owner",
      content: "The quality of templates is exceptional. Our clients love the modern designs and the AI features are game-changing.",
      rating: 5
    },
    {
      name: "Tom Anderson",
      role: "Freelance Developer",
      content: "Best investment I've made for my business. The blog templates and AI workflows have doubled my productivity.",
      rating: 5
    }
  ];

  const whyChooseUs = [
    "Premium quality templates",
    "AI-powered workflows",
    "Regular updates & support",
    "Responsive designs",
    "SEO optimized",
    "Easy customization",
    "Comprehensive documentation",
    "Active community support"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Command Palette */}
      <CommandPalette
        isCommandOpen={isCommandOpen}
        setIsCommandOpen={setIsCommandOpen}
        scrollToSection={scrollToSection}
      />

      {/* Floating Navigation */}
      <FloatingNavigation isScrolled={isScrolled} />
     
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-satoshi text-5xl sm:text-6xl font-black mb-6">
              We take pride in delivering{" "}
              <span className="text-gradient">exceptional results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of developers and designers creating premium website templates, 
              AI workflow solutions, and comprehensive blogging platforms to accelerate your digital success.
            </p>
          </div>

          {/* Hero Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card rounded-2xl p-6 border hover:shadow-xl transition-all duration-300">
                <div className="w-full h-64 bg-gradient-to-br from-[#16bc4e]/10 to-[#65fe08]/10 rounded-xl mb-4 flex items-center justify-center">
                  <Code className="h-16 w-16 text-[#16bc4e]" />
                </div>
                <h3 className="font-satoshi text-lg font-bold mb-2">Premium Templates</h3>
                <p className="text-sm text-muted-foreground">Modern, responsive designs for every need</p>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-6 border hover:shadow-xl transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl mb-4 flex items-center justify-center">
                  <Bot className="h-20 w-20 text-blue-600" />
                </div>
                <h3 className="font-satoshi text-xl font-bold mb-2">AI Workflow Solutions</h3>
                <p className="text-muted-foreground">Intelligent automation for modern businesses</p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border hover:shadow-xl transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl mb-4 flex items-center justify-center">
                  <Pen className="h-20 w-20 text-purple-600" />
                </div>
                <h3 className="font-satoshi text-xl font-bold mb-2">Blogging Platforms</h3>
                <p className="text-muted-foreground">Content management made simple and powerful</p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center bg-gradient-to-r from-[#16bc4e]/5 to-[#65fe08]/5 rounded-2xl p-8 mb-20">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              <Target className="h-6 w-6 text-[#16bc4e]" />
            </div>
            <blockquote className="text-xl font-medium text-foreground mb-4">
              "We believe great design starts with empathy and ends with impact. Our approach is simple: listen deeply, solve creatively, and build with purpose."
            </blockquote>
            <cite className="text-sm text-muted-foreground">— Our Mission</cite>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-satoshi text-4xl font-black mb-6">Meet the team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse group of passionate creators, developers, and innovators working together 
              to build the future of web development and AI automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#16bc4e]/20 to-[#65fe08]/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Users className="h-12 w-12 text-[#16bc4e]" />
                  </div>
                  <h3 className="font-satoshi text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-[#16bc4e] font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="font-satoshi text-4xl font-black mb-6">Awards</h2>
            <p className="text-xl text-muted-foreground">
              Recognition for our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-card rounded-xl border hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="font-satoshi text-lg font-bold mb-1">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </div>
                <div className="text-right">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <span className="text-sm font-medium">{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-satoshi text-4xl font-black mb-6">What our clients say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-satoshi text-4xl font-black mb-6">Why work with us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with creative vision to deliver solutions that exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-satoshi text-2xl font-bold mb-6">Our Approach</h3>
              <div className="space-y-4">
                {whyChooseUs.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-satoshi text-2xl font-bold mb-6">Our Promise</h3>
              <div className="space-y-4">
                {whyChooseUs.slice(4).map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-satoshi text-4xl font-black mb-6">Have questions. We got answers.</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our services and how we can help your business grow
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of templates do you offer?",
                answer: "We offer a wide range of templates including landing pages, e-commerce sites, portfolios, blogs, and business websites. All templates are responsive and optimized for performance."
              },
              {
                question: "How do AI workflow templates work?",
                answer: "Our AI workflow templates provide pre-built automation solutions for common business processes like customer service, data processing, and content generation."
              },
              {
                question: "Do you provide customization services?",
                answer: "Yes, we offer custom development services to tailor our templates to your specific needs and brand requirements."
              },
              {
                question: "What support do you provide?",
                answer: "We provide comprehensive documentation, video tutorials, and direct support through our community forum and help desk."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-satoshi text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-satoshi text-4xl font-black mb-6">
            Join 1500+ professionals elevating their brand
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start building exceptional digital experiences with our premium templates and AI-powered solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#16bc4e] hover:bg-[#16bc4e]/90 text-white">
              Browse Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            <p>Trusted by startups and enterprises worldwide</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

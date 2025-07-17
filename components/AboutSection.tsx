"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Zap,
  Layers,
  Rocket,
  Bot,
  Globe,
  ChevronRight,
  Star,
  Users,
  Clock
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const features = [
    {
      icon: Globe,
      title: "Website Templates",
      description: "Professional, responsive website templates ready for customization. Perfect for landing pages, portfolios, and business sites.",
      color: "from-[#16bc4e] to-[#65fe08]",
      bgColor: "from-[#16bc4e]/10 to-[#65fe08]/10",
      stats: "50+ Templates"
    },
    {
      icon: Bot,
      title: "AI Agent Workflows",
      description: "Pre-built AI agent workflows for automation, data processing, and intelligent user interactions. Deploy smart features instantly.",
      color: "from-purple-500 to-purple-700",
      bgColor: "from-purple-500/10 to-purple-700/10",
      stats: "25+ Workflows"
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description: "Skip the boilerplate and focus on what matters. Our starter kit includes everything you need for fast, efficient development.",
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-500/10 to-blue-700/10",
      stats: "10x Faster"
    }
  ];

  const handleFeatureClick = (index: number) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  return (
    <section id="about" className="scroll-snap-section py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-satoshi text-4xl sm:text-5xl font-black mb-6 transition-all duration-300 hover:scale-105">
            <span className="text-gradient bg-gradient-to-r from-[#16bc4e] to-[#65fe08] bg-clip-text text-transparent">
              Accelerate
            </span> your development journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build modern websites and AI-powered applications faster than ever with our comprehensive starter kit. From concept to deployment in minutes, not months.
          </p>
        </div>

        {/* Interactive Features Grid */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isActive = activeFeature === index;
            
            return (
              <div
                key={index}
                className={`group relative text-center cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  isActive ? 'scale-105' : ''
                }`}
                onClick={() => handleFeatureClick(index)}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${feature.bgColor} border border-transparent hover:border-opacity-40 transition-all duration-300 ${
                  isActive ? 'shadow-2xl border-opacity-40' : 'hover:shadow-xl'
                }`}>
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon with animation */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-satoshi text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-foreground">
                    {feature.title}
                  </h3>
                  
                  {/* Stats badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-700 mb-4">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    {feature.stats}
                  </div>
                  
                  <p className={`text-muted-foreground transition-all duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'
                  }`}>
                    {feature.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Feature Card */}
          <div 
            className="lg:col-span-2 bg-gradient-to-br from-[#16bc4e]/10 to-[#65fe08]/10 rounded-2xl p-8 border border-[#16bc4e]/20 hover:border-[#16bc4e]/40 transition-all duration-500 hover:shadow-2xl group cursor-pointer"
            onMouseEnter={() => setHoveredCard('main')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-satoshi text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#16bc4e]">
                  Launch your project in record time
                </h3>
                <Button 
                  size="sm" 
                  className="bg-[#16bc4e] hover:bg-[#16bc4e]/90 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => console.log('Get Started clicked')}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-full flex items-center justify-center">
                    <Code className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Development Kit</p>
                    <p className="font-bold">Ready to Deploy</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                    <Bot className="h-3 w-3 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-4 text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs opacity-80">WEBSITE TEMPLATE</span>
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <Globe className="h-3 w-3" />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-12 bg-white/20 rounded flex items-center justify-center">
                    <Layers className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">Modern UI Components</p>
                    <div className="flex space-x-4 text-xs mt-2">
                      <div>
                        <p>Framework</p>
                        <p>React + TypeScript</p>
                      </div>
                      <div>
                        <p>Styling</p>
                        <p>Tailwind CSS</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Stats Card */}
          <div 
            className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 group cursor-pointer hover:border-[#16bc4e]/30"
            onMouseEnter={() => setHoveredCard('stats')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-satoshi text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#16bc4e]">10x Faster</h3>
              <p className="text-sm text-muted-foreground">Development Speed</p>
            </div>
            
            <div className="space-y-3">
              {[
                { label: "Setup", time: "5 min" },
                { label: "Customization", time: "30 min" },
                { label: "Deployment", time: "2 min" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex justify-between text-sm p-2 rounded-lg transition-all duration-300 hover:bg-green-50 group-hover:translate-x-1"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span>{item.label}</span>
                  <span className="text-green-600 font-medium flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {item.time}
                  </span>
                </div>
              ))}
              <div className="flex justify-between text-sm font-bold border-t pt-3 mt-3 transition-all duration-300 group-hover:text-[#16bc4e]">
                <span>Total Time</span>
                <span className="text-[#16bc4e]">37 min</span>
              </div>
            </div>
          </div>

          {/* AI Agent Workflow Card */}
          <div 
            className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 group cursor-pointer hover:border-purple-300"
            onMouseEnter={() => setHoveredCard('ai')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Bot className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-purple-600">AI AGENT WORKFLOW</h4>
              </div>
            </div>
            
            <h3 className="font-satoshi text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-purple-600">
              Intelligent automation built-in. Deploy AI agents that handle complex workflows seamlessly.
            </h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-sm mb-1">Smart Processing</h4>
                <p className="text-xs text-muted-foreground">Automated data handling and intelligent decision making</p>
              </div>
              <div className="w-16 h-16 border-2 border-dashed border-purple-300 rounded-lg mx-auto flex items-center justify-center transition-all duration-300 group-hover:border-purple-500 group-hover:bg-purple-50">
                <Bot className="h-8 w-8 text-purple-400 transition-all duration-300 group-hover:text-purple-600 group-hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div 
            className="bg-card rounded-2xl p-6 border border-border hover:shadow-xl transition-all duration-500 group cursor-pointer"
            onMouseEnter={() => setHoveredCard('tech')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 className="font-satoshi text-lg font-bold mb-4 transition-colors duration-300 group-hover:text-blue-600">Modern Tech Stack</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Built with the latest technologies and best practices for optimal performance and developer experience
            </p>
            
            <div className="space-y-3">
              {[
                { name: "React 18", color: "blue" },
                { name: "TypeScript", color: "cyan" },
                { name: "Tailwind CSS", color: "indigo" }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-3 bg-${tech.color}-50 rounded-lg transition-all duration-300 hover:bg-${tech.color}-100 group-hover:translate-x-2 cursor-pointer`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="font-satoshi text-sm">{tech.name}</span>
                  <div className={`w-6 h-6 bg-${tech.color}-600 rounded transition-transform duration-300 hover:scale-110`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Start Card */}
          <div 
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white transition-all duration-500 hover:shadow-2xl hover:scale-105 group cursor-pointer"
            onMouseEnter={() => setHoveredCard('quickstart')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-satoshi text-lg font-bold">Quick Start Guide</h3>
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                <Code className="h-4 w-4" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 mb-4 transition-all duration-300 group-hover:shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-black">Starter Kit</h4>
                  <p className="text-sm text-gray-600">Production Ready</p>
                </div>
                <Button 
                  size="sm" 
                  className="ml-auto bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                  onClick={() => console.log('START clicked')}
                >
                  START
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4 text-center text-black">
                {[
                  { label: "Quality", value: "5★" },
                  { label: "Responsive", value: "100%" },
                  { label: "Optimized", value: "SEO" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="transition-transform duration-300 hover:scale-110"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <p className="font-bold">{stat.value}</p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-right">
              <div className="inline-flex items-center bg-black/20 rounded-full px-3 py-1 text-xs transition-all duration-300 hover:bg-black/30">
                <span className="mr-2">Clone and deploy in minutes</span>
                <Button 
                  size="sm" 
                  className="bg-white text-black hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  onClick={() => console.log('Quick START clicked')}
                >
                  START
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


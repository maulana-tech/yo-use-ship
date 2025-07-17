"use client";

import React, { useState } from 'react';
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import ProductCard from '@/src/components/ProductCard'; // Impor komponen ProductCard
import {
    Code,
    TrendingUp,
    Filter,
    Layers,
    Zap,
    Users,
    Bot,
    Globe
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// Disesuaikan dengan interface dari ProductCard.tsx
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'templates' | 'ai-tools' | 'saas-kit';
  rating: number;
  reviews: number;
  downloads: string;
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isSale?: boolean;
  trending?: boolean;
  description: string;
  features: string[];
  tags: string[];
}


const ProductCarouselSection: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "SaaS Starter Kit",
      description: "Complete Next.js boilerplate with authentication, payments, and dashboard.",
      tags: ["Next.js", "Auth", "Payments"],
      price: 99,
      category: "saas-kit",
      features: ["Authentication", "Stripe Integration", "Admin Dashboard"],
      downloads: "2.1k",
      rating: 4.9,
      reviews: 127,
      trending: true,
      image: "",
      colors: [],
      sizes: []
    },
    {
      id: 2,
      name: "AI Chat Agent",
      description: "Intelligent chatbot with OpenAI integration and streaming responses.",
      tags: ["OpenAI", "Streaming", "React"],
      price: 149,
      category: "ai-tools",
      features: ["OpenAI GPT-4", "Real-time Chat", "Custom Training"],
      downloads: "1.8k",
      rating: 4.8,
      reviews: 89,
      trending: false,
      image: "",
      colors: [],
      sizes: []
    },
    {
      id: 3,
      name: "Dashboard Template",
      description: "Modern analytics dashboard with charts, dark mode, and responsive design.",
      tags: ["Analytics", "Charts", "Dark Mode"],
      price: 79,
      category: "templates",
      features: ["Chart.js Integration", "Dark Mode", "Mobile Responsive"],
      downloads: "3.2k",
      rating: 4.7,
      reviews: 203,
      trending: true,
      image: "",
      colors: [],
      sizes: []
    },
    {
      id: 4,
      name: "E-commerce Bot",
      description: "Automated e-commerce assistant with Shopify integration.",
      tags: ["Shopify", "AI", "Automation"],
      price: 199,
      category: "ai-tools",
      features: ["Shopify API", "Order Management", "Customer Support"],
      downloads: "1.5k",
      rating: 4.6,
      reviews: 74,
      trending: false,
      image: "",
      colors: [],
      sizes: []
    },
    {
      id: 5,
      name: "Landing Page Kit",
      description: "High-converting landing pages optimized for speed and SEO.",
      tags: ["Responsive", "SEO", "Fast"],
      price: 59,
      category: "templates",
      features: ["SEO Optimized", "Conversion Focused", "Mobile First"],
      downloads: "4.1k",
      rating: 4.9,
      reviews: 92,
      trending: true,
      image: "",
      colors: [],
      sizes: []
    },
    {
      id: 6,
      name: "Full-Stack SaaS",
      description: "Enterprise-ready SaaS solution with database, API, and authentication.",
      tags: ["Database", "API", "Auth"],
      price: 299,
      category: "saas-kit",
      features: ["PostgreSQL", "REST API", "Role-based Auth"],
      downloads: "892",
      rating: 4.8,
      reviews: 102,
      trending: false,
      image: "",
      colors: [],
      sizes: []
    }
  ];
  
  const getIconForCategory = (category: Product['category']): React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> => {
    switch (category) {
      case 'templates':
        return Globe;
      case 'ai-tools':
        return Bot;
      case 'saas-kit':
        return Layers;
      default:
        return Code;
    }
  };


  const filteredProducts = products.filter(product =>
    currentFilter === 'all' || product.category === currentFilter
  );

  const handleFilterChange = (filterKey: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentFilter(filterKey);
      setIsLoading(false);
    }, 300);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-black/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            <span>Premium Collection</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-foreground tracking-tight leading-tight">
            Exceptional
            <br />
            <span className="text-muted-foreground">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meticulously crafted templates and AI agents designed for developers who demand excellence.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm mr-4">
            <Filter className="h-4 w-4" />
            <span>Filter by:</span>
          </div>
          {[
            { key: 'all', label: 'All Products', count: products.length },
            { key: 'templates', label: 'Templates', count: products.filter(p => p.category === 'templates').length },
            { key: 'ai-tools', label: 'AI Agents', count: products.filter(p => p.category === 'ai-tools').length },
            { key: 'saas-kit', label: 'SaaS Kits', count: products.filter(p => p.category === 'saas-kit').length }
          ].map((filter) => (
            <Button
              key={filter.key}
              variant={currentFilter === filter.key ? "default" : "outline"}
              size="lg"
              onClick={() => handleFilterChange(filter.key)}
              className={`
                px-6 py-3 font-medium transition-all duration-300 rounded-full
                ${currentFilter === filter.key
                  ? 'bg-foreground text-background shadow-lg hover:bg-foreground/80'
                  : 'bg-background text-foreground border-2 border-border hover:border-foreground/50 hover:bg-muted'
                }
              `}
            >
              <span className="flex items-center space-x-2">
                <span>{filter.label}</span>
                <Badge variant="secondary" className="text-xs">
                  {filter.count}
                </Badge>
              </span>
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-muted border-t-foreground"></div>
          </div>
        )}

        {/* Grid Layout */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
                <ProductCard 
                    key={product.id}
                    product={product}
                    IconComponent={getIconForCategory(product.category)}
                />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCarouselSection;
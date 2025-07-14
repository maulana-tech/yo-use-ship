import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Code, 
  Download, 
  Eye, 
  ExternalLink, 
  TrendingUp,
  Filter,
  Star,
  Users,
  Zap
} from 'lucide-react';

const ProductCarouselSection: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const products = [
    {
      id: 1,
      title: "SaaS Starter Kit",
      description: "Complete Next.js boilerplate with authentication, payments, and dashboard",
      tags: ["Next.js", "Auth", "Payments"],
      price: "$99",
      category: "template",
      features: ["Authentication", "Stripe Integration", "Admin Dashboard"],
      downloads: "2.1k",
      rating: 4.9,
      icon: Code,
      trending: true
    },
    {
      id: 2,
      title: "AI Chat Agent",
      description: "Intelligent chatbot with OpenAI integration and streaming responses",
      tags: ["OpenAI", "Streaming", "React"],
      price: "$149",
      category: "ai-agent",
      features: ["OpenAI GPT-4", "Real-time Chat", "Custom Training"],
      downloads: "1.8k",
      rating: 4.8,
      icon: Zap,
      trending: false
    },
    {
      id: 3,
      title: "Dashboard Template",
      description: "Modern analytics dashboard with charts, dark mode, and responsive design",
      tags: ["Analytics", "Charts", "Dark Mode"],
      price: "$79",
      category: "template",
      features: ["Chart.js Integration", "Dark Mode", "Mobile Responsive"],
      downloads: "3.2k",
      rating: 4.7,
      icon: Code,
      trending: true
    },
    {
      id: 4,
      title: "E-commerce Bot",
      description: "Automated e-commerce assistant with Shopify integration",
      tags: ["Shopify", "AI", "Automation"],
      price: "$199",
      category: "ai-agent",
      features: ["Shopify API", "Order Management", "Customer Support"],
      downloads: "1.5k",
      rating: 4.6,
      icon: Users,
      trending: false
    },
    {
      id: 5,
      title: "Landing Page Kit",
      description: "High-converting landing pages optimized for speed and SEO",
      tags: ["Responsive", "SEO", "Fast"],
      price: "$59",
      category: "template",
      features: ["SEO Optimized", "Conversion Focused", "Mobile First"],
      downloads: "4.1k",
      rating: 4.9,
      icon: Code,
      trending: true
    },
    {
      id: 6,
      title: "Full-Stack SaaS",
      description: "Enterprise-ready SaaS solution with database, API, and authentication",
      tags: ["Database", "API", "Auth"],
      price: "$299",
      category: "saas-kit",
      features: ["PostgreSQL", "REST API", "Role-based Auth"],
      downloads: "892",
      rating: 4.8,
      icon: Code,
      trending: false
    }
  ];

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
    <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            <span>Premium Collection</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold mb-6 text-black tracking-tight leading-tight">
            Exceptional
            <br />
            <span className="text-gray-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meticulously crafted templates and AI agents designed for developers who demand excellence.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="flex items-center space-x-2 text-gray-500 text-sm mr-4">
            <Filter className="h-4 w-4" />
            <span>Filter by:</span>
          </div>
          {[
            { key: 'all', label: 'All Products', count: products.length },
            { key: 'template', label: 'Templates', count: products.filter(p => p.category === 'template').length },
            { key: 'ai-agent', label: 'AI Agents', count: products.filter(p => p.category === 'ai-agent').length },
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
                  ? 'bg-black text-white shadow-lg hover:bg-gray-800' 
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-black hover:bg-gray-50'
                }
              `}
            >
              <span className="flex items-center space-x-2">
                <span>{filter.label}</span>
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                  {filter.count}
                </Badge>
              </span>
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-black"></div>
          </div>
        )}

        {/* Grid Layout */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const IconComponent = product.icon;
              
              return (
                <Card 
                  key={product.id} 
                  className="group relative overflow-hidden transition-all duration-300 cursor-pointer h-full bg-white border-2 border-gray-100 hover:shadow-xl hover:border-gray-300 flex flex-col"
                >
                  {/* Trending Badge */}
                  {product.trending && (
                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-black to-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>Trending</span>
                    </div>
                  )}

                  {/* Header */}
                  <CardHeader className="p-0 relative h-40 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"></div>
                    
                    {/* Icon Container */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="bg-gradient-to-br from-black via-gray-800 to-black rounded-2xl flex items-center justify-center w-16 h-16 shadow-lg">
                        <IconComponent className="text-white h-8 w-8" />
                      </div>
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="absolute top-4 right-4 bg-black/95 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-2">
                      <Download className="h-3 w-3" />
                      <span>{product.downloads}</span>
                      <div className="w-px h-3 bg-gray-400"></div>
                      <Star className="h-3 w-3 fill-current text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </CardHeader>
                  
                  {/* Content */}
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Title and Price */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 text-black font-bold">
                          {product.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 leading-relaxed text-sm">
                          {product.description}
                        </CardDescription>
                      </div>
                      <Badge className="bg-gradient-to-r from-black to-gray-800 text-white font-bold ml-4 px-3 py-1 rounded-full">
                        {product.price}
                      </Badge>
                    </div>
                    
                    {/* Features List */}
                    <div className="mb-4 flex-1">
                      <ul className="space-y-2">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <Check className="h-4 w-4 text-black mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.tags.slice(0, 3).map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="text-xs border-gray-300 text-gray-700 bg-gray-50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-3 mt-auto">
                      <Button className="flex-1 bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white font-medium shadow-lg transition-all duration-300 py-2">
                        <Eye className="h-4 w-4 mr-2" />
                        <span>Preview</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCarouselSection;
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import FloatingNavigation from '@/components/FloatingNavigation';
import CommandPalette from '@/components/CommandPalette';
import {
  Filter,
  Grid,
  List,
  Search,
  Star,
  Heart,
  ShoppingCart,
  Eye,
  ArrowLeft,
  SlidersHorizontal,
  ChevronDown,
  Zap,
  Sparkles,
  Globe,
  Bot,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  isSale?: boolean;
  description: string;
}

const ProductPage: React.FC = () => {
  // FloatingNavigation state
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  // Product page state
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Sample product data based on the reference image
  const products: Product[] = [
    {
      id: 1,
      name: "AI Website Template",
      price: 299,
      originalPrice: 399,
      image: "/api/placeholder/300/400",
      category: "templates",
      rating: 4.9,
      reviews: 127,
      colors: ["#000000", "#ffffff", "#16bc4e"],
      sizes: ["S", "M", "L"],
      isNew: true,
      isSale: true,
      description: "Modern AI-powered website template with advanced features"
    },
    {
      id: 2,
      name: "Bot Workflow System",
      price: 199,
      image: "/api/placeholder/300/400",
      category: "ai-tools",
      rating: 4.8,
      reviews: 89,
      colors: ["#6366f1", "#8b5cf6", "#ec4899"],
      sizes: ["M", "L", "XL"],
      isNew: false,
      description: "Intelligent automation workflow for modern businesses"
    },
    {
      id: 3,
      name: "Startup Landing Kit",
      price: 149,
      image: "/api/placeholder/300/400",
      category: "templates",
      rating: 4.7,
      reviews: 203,
      colors: ["#f59e0b", "#ef4444", "#10b981"],
      sizes: ["S", "M", "L", "XL"],
      description: "Complete landing page solution for startups"
    },
    {
      id: 4,
      name: "E-commerce Template",
      price: 399,
      originalPrice: 499,
      image: "/api/placeholder/300/400",
      category: "templates",
      rating: 4.9,
      reviews: 156,
      colors: ["#3b82f6", "#1e40af", "#1d4ed8"],
      sizes: ["M", "L"],
      isSale: true,
      description: "Professional e-commerce solution with payment integration"
    },
    {
      id: 5,
      name: "AI Chat Integration",
      price: 99,
      image: "/api/placeholder/300/400",
      category: "ai-tools",
      rating: 4.6,
      reviews: 74,
      colors: ["#059669", "#047857", "#065f46"],
      sizes: ["S", "M", "L"],
      description: "Smart chatbot integration for customer support"
    },
    {
      id: 6,
      name: "Portfolio Showcase",
      price: 79,
      image: "/api/placeholder/300/400",
      category: "templates",
      rating: 4.5,
      reviews: 92,
      colors: ["#dc2626", "#b91c1c", "#991b1b"],
      sizes: ["S", "M", "L", "XL"],
      description: "Creative portfolio template for designers and developers"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'templates', name: 'Website Templates', count: products.filter(p => p.category === 'templates').length },
    { id: 'ai-tools', name: 'AI Tools', count: products.filter(p => p.category === 'ai-tools').length }
  ];

  const colors = [
    '#000000', '#ffffff', '#16bc4e', '#6366f1', '#8b5cf6',
    '#ec4899', '#f59e0b', '#ef4444', '#10b981', '#3b82f6'
  ];

  const sizes = ['S', 'M', 'L', 'XL'];

  // FloatingNavigation useEffect hooks
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

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsCommandOpen(false);
      setIsMenuOpen(false);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesColors = selectedColors.length === 0 || selectedColors.some(color => product.colors.includes(color));
    const matchesSizes = selectedSizes.length === 0 || selectedSizes.some(size => product.sizes.includes(size));
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesPrice && matchesColors && matchesSizes && matchesSearch;
  });

  const handleColorToggle = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color)
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  return (
    <div className="min-h-screen bg-background">
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

      {/* Header */}
      <div className="bg-gradient-to-r from-[#16bc4e]/10 to-[#65fe08]/10 border-b pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-end mb-6">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
              </Button>
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
            </div>
          </div>

          {/* Hero Banner */}
          <div className="bg-gradient-to-r from-[#16bc4e] to-[#65fe08] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="font-satoshi text-4xl sm:text-5xl font-black mb-4">
                20% OFF ONLY TODAY AND GET SPECIAL GIFT!
              </h1>
              <p className="text-lg opacity-90 mb-6 max-w-2xl">
                Transform your digital presence with our premium templates and AI tools. Limited time offer - don't miss out!
              </p>
              <Button size="lg" className="bg-white text-[#16bc4e] hover:bg-gray-100">
                <Sparkles className="h-5 w-5 mr-2" />
                Shop Now
              </Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/20 to-transparent" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 p-4 lg:p-0">
            <div className="sticky top-24 lg:top-8 bg-background lg:bg-transparent z-10 lg:z-auto rounded-lg lg:rounded-none shadow-lg lg:shadow-none p-4 lg:p-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-satoshi text-xl font-bold">Filter Products</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>

              <div className={`space-y-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center justify-between cursor-pointer" onClick={() => console.log("Toggle categories")}>
                    Categories <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </h3>
                  <div className="space-y-3">
                    {categories.map(category => (
                      <div
                        key={category.id}
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                          selectedCategory === category.id
                            ? 'bg-[#16bc4e]/15 text-[#16bc4e] font-medium'
                            : 'hover:bg-muted/50'
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="secondary" className="text-xs bg-muted/30 text-muted-foreground">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center justify-between cursor-pointer" onClick={() => console.log("Toggle price range")}>
                    Price Range <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </h3>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={1000}
                      step={10}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground font-medium">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center justify-between cursor-pointer" onClick={() => console.log("Toggle colors")}>
                    Colors <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </h3>
                  <div className="grid grid-cols-5 gap-3">
                    {colors.map(color => (
                      <button
                        key={color}
                        className={`w-9 h-9 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                          selectedColors.includes(color)
                            ? 'border-[#16bc4e] ring-2 ring-[#16bc4e]/50 scale-110'
                            : 'border-gray-300 hover:scale-105'
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorToggle(color)}
                      >
                        {selectedColors.includes(color) && (
                          <Check className="h-4 w-4 text-white drop-shadow-sm" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center justify-between cursor-pointer" onClick={() => console.log("Toggle sizes")}>
                    Sizes <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    {sizes.map(size => (
                      <button
                        key={size}
                        className={`p-3 text-sm border rounded-lg transition-colors duration-200 font-medium ${
                          selectedSizes.includes(size)
                            ? 'border-[#16bc4e] bg-[#16bc4e]/15 text-[#16bc4e]'
                            : 'border-gray-300 hover:border-gray-400 hover:bg-muted/50'
                        }`}
                        onClick={() => handleSizeToggle(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16bc4e]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16bc4e]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map(product => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      {product.category === 'templates' ? (
                        <Globe className="h-16 w-16 text-gray-400" />
                      ) : (
                        <Bot className="h-16 w-16 text-gray-400" />
                      )}
                    </div>

                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.isNew && (
                        <Badge className="bg-[#16bc4e] text-white">NEW</Badge>
                      )}
                      {product.isSale && (
                        <Badge variant="destructive">SALE</Badge>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button className="bg-[#16bc4e] hover:bg-[#16bc4e]/90">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">
                        ({product.reviews})
                      </span>
                    </div>

                    <h3 className="font-semibold mb-1 group-hover:text-[#16bc4e] transition-colors">
                      {product.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-1">
                        {product.colors.slice(0, 3).map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-gray-300"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        {product.colors.length > 3 && (
                          <div className="w-4 h-4 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center">
                            <span className="text-xs">+{product.colors.length - 3}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 gap-2">
              <Button variant="outline" size="sm">Previous</Button>
              {[1, 2, 3, 4, 5].map(page => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  size="sm"
                  className="w-10"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi text-3xl font-black text-center mb-12">
            OTHER PRODUCT CATEGORIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <Globe className="h-20 w-20 text-pink-400" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-satoshi text-xl font-bold mb-2">Website Templates</h3>
                <p className="text-muted-foreground mb-4">
                  Professional templates for modern websites
                </p>
                <Button variant="outline" className="group-hover:bg-[#16bc4e] group-hover:text-white transition-colors">
                  Explore Products
                  <Zap className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <Bot className="h-20 w-20 text-blue-400" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-satoshi text-xl font-bold mb-2">AI Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Intelligent automation and workflow solutions
                </p>
                <Button variant="outline" className="group-hover:bg-[#16bc4e] group-hover:text-white transition-colors">
                  Explore Products
                  <Zap className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


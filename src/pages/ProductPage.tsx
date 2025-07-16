// ProductPage.tsx  (dengan smooth scrolling yang diperbaiki)
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import FloatingNavigation from '@/components/FloatingNavigation';
import CommandPalette from '@/components/CommandPalette';
import ProductCard from '@/components/ProductCard';
import {
  Grid,
  List,
  Search,
  Sparkles,
  Globe,
  Bot,
  Check,
  Layers,
  Code,
  Zap,
  ChevronDown,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// --- Product interface ---
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

// --- Dummy data ---
const products: Product[] = [
  {
    id: 1,
    name: 'SaaS Starter Kit',
    price: 99,
    image: '/api/placeholder/300/400',
    category: 'saas-kit',
    rating: 4.9,
    reviews: 127,
    downloads: '2.1k',
    colors: ['#000000', '#ffffff', '#16bc4e'],
    sizes: ['S', 'M', 'L'],
    trending: true,
    description: 'Complete Next.js boilerplate with authentication, payments, and dashboard.',
    features: ['Authentication', 'Stripe Integration', 'Admin Dashboard'],
    tags: ['Next.js', 'Auth', 'Payments']
  },
  {
    id: 2,
    name: 'AI Website Template',
    price: 299,
    originalPrice: 399,
    image: '/api/placeholder/300/400',
    category: 'templates',
    rating: 4.9,
    reviews: 127,
    downloads: '3.5k',
    colors: ['#000000', '#ffffff', '#16bc4e'],
    sizes: ['S', 'M', 'L'],
    isNew: true,
    isSale: true,
    trending: true,
    description: 'Modern AI-powered website template with advanced features.',
    features: ['AI Integration', 'Dynamic Content', 'Responsive Design'],
    tags: ['AI', 'Website', 'Template']
  },
  {
    id: 3,
    name: 'Bot Workflow System',
    price: 199,
    image: '/api/placeholder/300/400',
    category: 'ai-tools',
    rating: 4.8,
    reviews: 89,
    downloads: '1.8k',
    colors: ['#6366f1', '#8b5cf6', '#ec4899'],
    sizes: ['M', 'L', 'XL'],
    description: 'Intelligent automation workflow for modern businesses.',
    features: ['OpenAI GPT-4', 'Real-time Chat', 'Custom Training'],
    tags: ['OpenAI', 'Workflow', 'Automation']
  }
];

const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'templates', name: 'Website Templates', count: products.filter(p => p.category === 'templates').length },
  { id: 'ai-tools', name: 'AI Tools', count: products.filter(p => p.category === 'ai-tools').length },
  { id: 'saas-kit', name: 'SaaS Kits', count: products.filter(p => p.category === 'saas-kit').length }
];

const colors = [
  '#000000', '#ffffff', '#16bc4e', '#6366f1', '#8b5cf6',
  '#ec4899', '#f59e0b', '#ef4444', '#10b981', '#3b82f6'
];

const sizes = ['S', 'M', 'L', 'XL'];

// --- FilterSidebar component ---
interface FilterSidebarProps {
  showFilters: boolean;
  onToggle: () => void;
  className?: string;
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  priceRange: [number, number];
  setPriceRange: (v: [number, number]) => void;
  selectedColors: string[];
  setSelectedColors: (v: string[]) => void;
  selectedSizes: string[];
  setSelectedSizes: (v: string[]) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  showFilters,
  onToggle,
  className,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes
}) => {
  // inside FilterSidebar component
    const handleColorToggle = (color: string) => {
      const next = selectedColors.includes(color)
        ? selectedColors.filter(c => c !== color)
        : [...selectedColors, color];
      setSelectedColors(next);
    };

    const handleSizeToggle = (size: string) => {
      const next = selectedSizes.includes(size)
        ? selectedSizes.filter(s => s !== size)
        : [...selectedSizes, size];
      setSelectedSizes(next);
    };

  return (
    <>
      {/* Overlay mobile */}
      {showFilters && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Drawer / Sidebar */}
      <aside
        className={cn(
          'fixed lg:sticky top-0 lg:top-24 h-full lg:h-[calc(100vh-7rem)] bg-background z-30 lg:z-auto',
          'w-72 xl:w-80 shrink-0 border-r lg:border-r lg:border-gray-200 lg:pr-6 lg:pl-4',
          // SMOOTH SCROLLING untuk sidebar
          'overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100',
          'transition-transform duration-300 lg:transition-none',
          showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          className
        )}
        style={{
          scrollBehavior: 'smooth'
        }}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between p-4 border-b lg:hidden">
          <span className="font-bold text-lg">Filters</span>
          <button onClick={onToggle} aria-label="Close filters">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 lg:p-0 space-y-8">
          <h2 className="hidden lg:block font-satoshi text-xl font-bold mb-6">Filter Products</h2>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center justify-between">
              Categories <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </h3>
            <div className="space-y-3">
              {categories.map(cat => (
                <div
                  key={cat.id}
                  className={cn(
                    'flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200',
                    selectedCategory === cat.id
                      ? 'bg-[#16bc4e]/15 text-[#16bc4e] font-medium transform scale-[1.02]'
                      : 'hover:bg-muted/50 hover:transform hover:scale-[1.01]'
                  )}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="text-sm">{cat.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {cat.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Price Range</h3>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={1000}
              step={10}
            />
            <div className="flex justify-between text-sm mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Colors</h3>
            <div className="grid grid-cols-5 gap-3">
              {colors.map(color => (
                <button
                  key={color}
                  className={cn(
                    'w-9 h-9 rounded-full border-2 transition-all duration-200',
                    selectedColors.includes(color)
                      ? 'border-[#16bc4e] ring-2 ring-[#16bc4e]/50 scale-110'
                      : 'border-gray-300 hover:scale-105 hover:shadow-md'
                  )}
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
            <h3 className="font-semibold text-lg mb-4">Sizes</h3>
            <div className="grid grid-cols-4 gap-3">
              {sizes.map(size => (
                <button
                  key={size}
                  className={cn(
                    'p-3 text-sm border rounded-lg font-medium transition-all duration-200',
                    selectedSizes.includes(size)
                      ? 'border-[#16bc4e] bg-[#16bc4e]/15 text-[#16bc4e] transform scale-105'
                      : 'border-gray-300 hover:border-gray-400 hover:bg-muted/50 hover:transform hover:scale-[1.02]'
                  )}
                  onClick={() => handleSizeToggle(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

// ------------------------------------------------------------------
// ------------------------ MAIN PAGE --------------------------------
// ------------------------------------------------------------------
const ProductPage: React.FC = () => {
  /* ---------- Navigation states ---------- */
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  /* ---------- Product states ---------- */
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  /* ---------- Effects ---------- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsCommandOpen(o => !o);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // SMOOTH SCROLLING GLOBAL SETUP
  useEffect(() => {
    // Set smooth scrolling untuk seluruh dokumen
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
    setIsCommandOpen(false);
    setIsMenuOpen(false);
  };

  // SMOOTH SCROLL TO TOP FUNCTION
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  /* ---------- Filtering ---------- */
  const filteredProducts = products.filter(p => {
    const catMatch = selectedCategory === 'all' || p.category === selectedCategory;
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    const colorMatch = !selectedColors.length || selectedColors.some(c => p.colors.includes(c));
    const sizeMatch = !selectedSizes.length || selectedSizes.some(s => p.sizes.includes(s));
    const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && priceMatch && colorMatch && sizeMatch && searchMatch;
  });

  /* ---------- Helpers ---------- */
  const getIconForCategory = (category: Product['category']) => {
    switch (category) {
      case 'templates': return Globe;
      case 'ai-tools': return Bot;
      case 'saas-kit': return Layers;
      default: return Code;
    }
  };

  /* ---------- Render ---------- */
  return (
    <div className="min-h-screen bg-background">
      {/* GLOBAL SMOOTH SCROLLING STYLES */}
      <style>{`
        * {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar untuk webkit browsers */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
          transition: background 0.2s ease;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
        
        /* Smooth transitions untuk semua elemen */
        .smooth-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <CommandPalette
        isCommandOpen={isCommandOpen}
        setIsCommandOpen={setIsCommandOpen}
        scrollToSection={scrollToSection}
      />
      <FloatingNavigation
        isScrolled={isScrolled}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsCommandOpen={setIsCommandOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#16bc4e]/10 to-[#65fe08]/10 border-b pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-gradient-to-r from-[#16bc4e] to-[#65fe08] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="font-satoshi text-4xl sm:text-5xl font-black mb-4">
                20% OFF TODAY & SPECIAL GIFT!
              </h1>
              <p className="text-lg opacity-90 mb-6 max-w-2xl">
                Transform your digital presence with our premium templates and AI tools.
              </p>
              <Button size="lg" className="bg-white text-[#16bc4e] hover:bg-gray-100 smooth-transition">
                <Sparkles className="h-5 w-5 mr-2" />
                Shop Now
              </Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Page layout with left sidebar */}
      <div className="max-w-screen-2xl mx-auto mt-16">
        <div className="flex">
          {/* 1️⃣  Sidebar filter flush-left on desktop */}
          <FilterSidebar
            className="hidden lg:block"
            showFilters={showFilters}
            onToggle={() => setShowFilters(v => !v)}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
          />

          {/* 2️⃣  Mobile drawer */}
          <FilterSidebar
            className="lg:hidden"
            showFilters={showFilters}
            onToggle={() => setShowFilters(v => !v)}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
          />

          {/* 3️⃣  Main content */}
          <main 
            className="flex-1 min-w-0 px-4 sm:px-6 lg:pl-8 py-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Sticky header with search & controls */}
            <div className="sticky top-0 bg-background/80 backdrop-blur z-10 border-b mb-6 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 smooth-transition">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16bc4e] smooth-transition"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden smooth-transition"
                    onClick={() => setShowFilters(v => !v)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-1" />
                    Filters
                  </Button>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16bc4e] smooth-transition"
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
                      className="rounded-r-none smooth-transition"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                      className="rounded-l-none smooth-transition"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <p className="text-muted-foreground mb-6">
              Showing {filteredProducts.length} of {products.length} products
            </p>

            {/* Products grid - IMPROVED LAYOUT dengan SMOOTH ANIMATIONS */}
            <div
              className={cn(
                'grid gap-6 smooth-transition',
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'
                  : 'grid-cols-1'
              )}
            >
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="smooth-transition"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <ProductCard
                    product={product}
                    IconComponent={getIconForCategory(product.category)}
                  />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 gap-2">
              <Button variant="outline" size="sm" className="smooth-transition">Previous</Button>
              {[1, 2, 3, 4, 5].map(p => (
                <Button
                  key={p}
                  variant={p === 1 ? 'default' : 'outline'}
                  size="sm"
                  className="w-10 smooth-transition"
                >
                  {p}
                </Button>
              ))}
              <Button variant="outline" size="sm" className="smooth-transition">Next</Button>
            </div>
          </main>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-muted/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-satoshi text-3xl font-black text-center mb-12">
            OTHER PRODUCT CATEGORIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl smooth-transition hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <Globe className="h-20 w-20 text-pink-400 smooth-transition group-hover:scale-110" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-satoshi text-xl font-bold mb-2">Website Templates</h3>
                <p className="text-muted-foreground mb-4">Professional templates for modern websites</p>
                <Button
                  variant="outline"
                  className="group-hover:bg-[#16bc4e] group-hover:text-white smooth-transition"
                >
                  Explore Products <Zap className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl smooth-transition hover:-translate-y-1">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <Bot className="h-20 w-20 text-blue-400 smooth-transition group-hover:scale-110" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-satoshi text-xl font-bold mb-2">AI Tools</h3>
                <p className="text-muted-foreground mb-4">Intelligent automation and workflow solutions</p>
                <Button
                  variant="outline"
                  className="group-hover:bg-[#16bc4e] group-hover:text-white smooth-transition"
                >
                  Explore Products <Zap className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#16bc4e] text-white p-3 rounded-full shadow-lg hover:bg-[#14a043] smooth-transition hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ChevronDown className="h-5 w-5 rotate-180" />
        </button>
      )}

      {/* KEYFRAMES untuk animasi */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProductPage;


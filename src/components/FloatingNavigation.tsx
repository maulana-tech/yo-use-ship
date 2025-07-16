import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import {
  Zap,
  Sun,
  Moon,
  Menu,
  X,
  Command,
  Home
} from 'lucide-react';

interface FloatingNavigationProps {
  isScrolled: boolean;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  setIsCommandOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const FloatingNavigation: React.FC<FloatingNavigationProps> = ({
  isScrolled,
  darkMode,
  setDarkMode,
  isMenuOpen,
  setIsMenuOpen,
  setIsCommandOpen,
  scrollToSection
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    ...(isHomePage ? [] : [{ label: 'Home', path: '/', type: 'link', icon: Home }]),
    { label: 'About', path: '/about', type: 'link' },
    { label: 'Products', path: '/products', type: 'link' },
    ...(isHomePage ? [
      { label: 'Demo', id: 'demo', type: 'scroll' },
      { label: 'Pricing', id: 'pricing', type: 'scroll' }
    ] : [])
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
      isScrolled ? 'scale-95' : 'scale-100'
    }`}>
      <div className={`bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-2xl shadow-2xl transition-all duration-500 ${
        isScrolled ? 'shadow-xl bg-white/95 dark:bg-black/95' : ''
      }`}>
        <div className="px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-xl flex items-center justify-center">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div className="font-satoshi text-lg font-bold bg-gradient-to-r from-[#16bc4e] to-[#65fe08] bg-clip-text text-transparent">
                Using.dev
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.label}
                    to={item.path || '/'}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#16bc4e] dark:hover:text-[#65fe08] transition-all duration-300 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
                  >
                    {item.label}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#16bc4e] to-[#65fe08] group-hover:w-full transition-all duration-300 rounded-full"></div>
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id || '')}
                    className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#16bc4e] dark:hover:text-[#65fe08] transition-all duration-300 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group"
                  >
                    {item.label}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#16bc4e] to-[#65fe08] group-hover:w-full transition-all duration-300 rounded-full"></div>
                  </button>
                )
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Command Palette Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCommandOpen(true)}
                className="hidden md:flex items-center space-x-2 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300 group"
              >
                <Command className="h-4 w-4 group-hover:text-[#16bc4e] transition-colors" />
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md font-mono">⌘K</span>
              </Button>
              
              {/* Dark Mode Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300 hover:scale-110 group"
              >
                {darkMode ? 
                  <Sun className="h-4 w-4 group-hover:text-[#65fe08] transition-colors" /> : 
                  <Moon className="h-4 w-4 group-hover:text-[#16bc4e] transition-colors" />
                }
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? 
                  <X className="h-4 w-4" /> : 
                  <Menu className="h-4 w-4" />
                }
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 dark:border-gray-800/50 animate-fade-in">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.label}
                    to={item.path || '/'}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#16bc4e] dark:hover:text-[#65fe08] hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id || '');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#16bc4e] dark:hover:text-[#65fe08] hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300"
                  >
                    {item.label}
                  </button>
                )
              ))}
              
              {/* Mobile Command Palette */}
              <button
                onClick={() => {
                  setIsCommandOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#16bc4e] dark:hover:text-[#65fe08] hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-xl transition-all duration-300 space-x-2"
              >
                <Command className="h-4 w-4" />
                <span>Search</span>
                <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md font-mono ml-auto">⌘K</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FloatingNavigation;

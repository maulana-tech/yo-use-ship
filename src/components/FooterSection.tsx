import React from 'react';
import { Button } from "@/src/components/ui/button";
import { 
  Globe, 
  Users, 
  Shield, 
  Sun, 
  Moon 
} from 'lucide-react';
import { useTheme } from "next-themes";

interface FooterSectionProps {
  darkMode?: boolean;
  setDarkMode?: (darkMode: boolean) => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({ darkMode, setDarkMode }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = darkMode !== undefined ? darkMode : resolvedTheme === 'dark';
  const toggleDark = setDarkMode ? () => setDarkMode(!isDark) : () => setTheme(isDark ? 'light' : 'dark');
  return (
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
              onClick={toggleDark}
              className="hover:scale-110 transition-transform"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;


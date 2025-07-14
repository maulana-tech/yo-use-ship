import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, X } from 'lucide-react';

interface CommandPaletteProps {
  isCommandOpen: boolean;
  setIsCommandOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({
  isCommandOpen,
  setIsCommandOpen,
  scrollToSection
}) => {
  if (!isCommandOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center p-4 animate-fade-in">
      <div className="bg-card border border-border rounded-xl p-0 w-full max-w-lg mt-20 animate-scale-in">
        <div className="flex items-center border-b border-border p-4">
          <Search className="h-4 w-4 text-muted-foreground mr-3" />
          <input
            type="text"
            placeholder="Search sections..."
            className="bg-transparent outline-none flex-1 text-sm"
            autoFocus
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCommandOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-2">
          {['hero', 'about', 'products', 'demo', 'pricing', 'faq'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors capitalize text-sm"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;

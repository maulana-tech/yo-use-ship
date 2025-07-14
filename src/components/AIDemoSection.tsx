import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Code, 
  ArrowRight 
} from 'lucide-react';

const AIDemoSection: React.FC = () => {
  return (
    <section id="demo" className="scroll-snap-section py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-satoshi text-3xl sm:text-4xl font-black mb-4">
            <span className="text-gradient">AI-Powered</span> Code Generation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our AI agent generate production-ready code in real-time.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Chat Interface */}
            <div className="p-6 border-r border-border">
              <h3 className="font-satoshi font-bold mb-4 flex items-center">
                <Zap className="h-5 w-5 text-primary mr-2" />
                AI Chat Interface
              </h3>
              <div className="space-y-4 mb-4 h-64 overflow-y-auto bg-muted/50 rounded-lg p-4">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    👤
                  </div>
                  <div className="bg-background rounded-lg p-3 flex-1">
                    Generate a Next.js landing page with dark mode toggle
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    🤖
                  </div>
                  <div className="bg-background rounded-lg p-3 flex-1">
                    I'll create a beautiful landing page with dark mode support. Here's the code:
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Try: Create a dashboard component..."
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-background"
                />
                <Button size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Code Preview */}
            <div className="p-6">
              <h3 className="font-satoshi font-bold mb-4 flex items-center">
                <Code className="h-5 w-5 text-primary mr-2" />
                Generated Code
              </h3>
              <div className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm h-64 overflow-y-auto">
                <div className="text-blue-400">import</div> {'{useState}'} <div className="text-blue-400">from</div> <div className="text-yellow-400">'react'</div>;
                <br /><br />
                <div className="text-blue-400">const</div> <div className="text-yellow-400">LandingPage</div> = () =&gt; {'{'}
                <br />
                &nbsp;&nbsp;<div className="text-blue-400">const</div> [darkMode, setDarkMode] = <div className="text-yellow-400">useState</div>(<div className="text-orange-400">false</div>);
                <br /><br />
                &nbsp;&nbsp;<div className="text-blue-400">return</div> (
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;<div className="text-red-400">div</div> <div className="text-green-400">className</div>=<div className="text-yellow-400">{`{darkMode ? 'dark' : 'light'}`}</div>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<div className="text-red-400">h1</div>&gt;Welcome to our site&lt;/<div className="text-red-400">h1</div>&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<div className="text-red-400">div</div>&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                {'}'};
              </div>
              <div className="flex space-x-2 mt-4">
                <Button size="sm" variant="outline">
                  Copy Code
                </Button>
                <Button size="sm">
                  Deploy to Vercel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDemoSection;


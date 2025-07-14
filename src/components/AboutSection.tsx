import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Smartphone, 
  TrendingUp, 
  Shield, 
  Download 
} from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="scroll-snap-section py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-satoshi text-4xl sm:text-5xl font-black mb-6">
            <span className="text-gradient">Empowering</span> your digital ownership
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engaging with an application is like selectively opening your vault. You decrypt only what's necessary, keeping the master key - your data's encryption - solely in your control
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Feature Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#16bc4e]/10 to-[#65fe08]/10 rounded-2xl p-8 border border-[#16bc4e]/20 hover:border-[#16bc4e]/40 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-xl flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-satoshi text-2xl font-bold mb-2">Interact with your new internet</h3>
                <Button size="sm" className="bg-[#16bc4e] hover:bg-[#16bc4e]/90 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">Good morning</p>
                    <p className="font-bold">Susan</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-gray-100 rounded"></div>
                  <div className="w-6 h-6 bg-gray-100 rounded"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg p-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs opacity-80">NATIONAL ID CARD</span>
                  <div className="w-6 h-6 bg-white/20 rounded"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-12 bg-white/20 rounded"></div>
                  <div>
                    <p className="font-bold">Susan Boyle</p>
                    <div className="flex space-x-4 text-xs mt-2">
                      <div>
                        <p>Doc number</p>
                        <p>BAA000976</p>
                      </div>
                      <div>
                        <p>Expires on</p>
                        <p>01/03/2028</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-satoshi text-xl font-bold mb-2">+5.7k</h3>
              <p className="text-sm text-muted-foreground">Users connected</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Apr</span>
                <span>+1.1k</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>May</span>
                <span>+1.4k</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Jun</span>
                <span>+2.1k</span>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <span>Jul</span>
                <span>+1.7k</span>
              </div>
            </div>
          </div>

          {/* Technology Card */}
          <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#16bc4e]/10 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-[#16bc4e]" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">OUR TECHNOLOGY</h4>
              </div>
            </div>
            
            <h3 className="font-satoshi text-lg font-bold mb-3">
              Didit platform enhances client onboarding, focusing on efficient identity verification and KYC.
            </h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-sm mb-1">Look in to the Camera</h4>
                <p className="text-xs text-muted-foreground">Make sure your face is inside the box and capture a photo</p>
              </div>
              <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg mx-auto"></div>
            </div>
          </div>

          {/* Wallet Connection Card */}
          <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
            <h3 className="font-satoshi text-lg font-bold mb-4">Connect wallet</h3>
            <p className="text-sm text-muted-foreground mb-6">
              By connecting your wallet, you agree to our Terms of Service and our Privacy Policy
            </p>
            
            <div className="space-y-3">
              <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                <div className="w-6 h-6 bg-white rounded mr-3"></div>
                METAMASK
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <div className="w-6 h-6 bg-blue-100 rounded mr-3"></div>
                COINBASE WALLET
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <div className="w-6 h-6 bg-gray-100 rounded mr-3"></div>
                WALLET CONNECT
              </Button>
            </div>
          </div>

          {/* Download Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-satoshi text-lg font-bold">Download the App / Browser</h3>
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Download className="h-4 w-4" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <div>
                  <h4 className="font-bold text-black">Didit.me</h4>
                  <p className="text-sm text-gray-600">Premium</p>
                </div>
                <Button size="sm" className="ml-auto bg-blue-600">GET</Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4 text-center text-black">
                <div>
                  <p className="font-bold">4.9</p>
                  <p className="text-xs text-gray-600">Rating</p>
                </div>
                <div>
                  <p className="font-bold">12+</p>
                  <p className="text-xs text-gray-600">Age</p>
                </div>
                <div>
                  <p className="font-bold">9+</p>
                  <p className="text-xs text-gray-600">Category</p>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="inline-flex items-center bg-black/20 rounded-full px-3 py-1 text-xs">
                <span className="mr-2">Now available in the App Store</span>
                <Button size="sm" className="bg-white text-black hover:bg-gray-100">GET</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


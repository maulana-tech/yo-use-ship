import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wallet, 
  TrendingUp, 
  Layers, 
  BarChart3, 
  Network, 
  Shield, 
  Zap, 
  Activity, 
  Coins, 
  Fingerprint, 
  KeyRound 
} from 'lucide-react';

const Web3BentoGridSection: React.FC = () => {
  return (
    <section className="scroll-snap-section py-20 bg-gradient-to-br from-[#16bc4e]/5 via-background to-[#65fe08]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-satoshi text-4xl sm:text-5xl font-black mb-6">
            <span className="text-gradient">Web3 Ecosystem</span> Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of decentralized technology with our cutting-edge Web3 solutions
          </p>
        </div>

        {/* Interactive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 h-auto">
          
          {/* Large Wallet Analytics Card */}
          <div className="md:col-span-3 lg:col-span-4 md:row-span-2 group relative overflow-hidden bg-gradient-to-br from-[#16bc4e]/10 to-[#65fe08]/20 border border-[#16bc4e]/20 rounded-3xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#16bc4e]/5 to-[#65fe08]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Wallet className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-satoshi text-2xl font-bold">Portfolio Analytics</h3>
                    <p className="text-sm text-muted-foreground">Real-time DeFi tracking</p>
                  </div>
                </div>
                <Badge className="bg-[#16bc4e]/20 text-[#16bc4e] border-[#16bc4e]/30">LIVE</Badge>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-3xl font-bold text-[#16bc4e]">$42,891.50</p>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-[#65fe08]" />
                    <span className="text-sm text-[#65fe08]">+12.5%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Active Positions</p>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-xs text-muted-foreground">Across 8 protocols</p>
                </div>
              </div>

              <div className="w-full h-20 bg-gradient-to-r from-[#16bc4e]/20 to-[#65fe08]/20 rounded-xl flex items-end space-x-1 p-3">
                {[65, 45, 78, 52, 89, 72, 45, 67, 54, 78, 92, 65].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-[#16bc4e] to-[#65fe08] rounded-sm flex-1 group-hover:scale-y-110 transition-transform duration-300"
                    style={{ height: `${height}%`, transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* NFT Collection Card */}
          <div className="md:col-span-3 lg:col-span-2 group bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-300/20 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Layers className="h-5 w-5 text-white" />
              </div>
              <Badge variant="outline" className="border-purple-300/30 text-purple-600">NFT</Badge>
            </div>
            <h3 className="font-satoshi text-lg font-bold mb-2">Digital Assets</h3>
            <p className="text-sm text-muted-foreground mb-4">Rare collectibles portfolio</p>
            <div className="flex -space-x-2 mb-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white"></div>
              ))}
              <div className="w-8 h-8 rounded-lg bg-muted border-2 border-white flex items-center justify-center text-xs font-bold">+7</div>
            </div>
            <p className="text-xs text-muted-foreground">Floor: 2.4 ETH</p>
          </div>

          {/* DeFi Yield Card */}
          <div className="md:col-span-3 lg:col-span-2 group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-300/20 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-[#65fe08] rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">Active</span>
              </div>
            </div>
            <h3 className="font-satoshi text-lg font-bold mb-2">DeFi Yield</h3>
            <p className="text-2xl font-bold text-blue-600 mb-1">127.5%</p>
            <p className="text-xs text-muted-foreground">APY across pools</p>
            <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" style={{ width: '78%' }}></div>
            </div>
          </div>

          {/* Blockchain Network Status */}
          <div className="md:col-span-2 lg:col-span-2 group bg-gradient-to-br from-[#16bc4e]/10 to-emerald-500/10 border border-[#16bc4e]/20 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#16bc4e] to-emerald-500 rounded-xl flex items-center justify-center">
                <Network className="h-5 w-5 text-white" />
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-[#65fe08] rounded-full animate-pulse"></div>
                <span className="text-xs text-[#16bc4e] font-medium">ONLINE</span>
              </div>
            </div>
            <h3 className="font-satoshi text-lg font-bold mb-2">Network</h3>
            <p className="text-sm text-muted-foreground mb-3">Multi-chain support</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span>Ethereum</span>
                <span className="text-[#16bc4e]">15.2s</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Polygon</span>
                <span className="text-[#16bc4e]">2.1s</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>BSC</span>
                <span className="text-[#16bc4e]">3.4s</span>
              </div>
            </div>
          </div>

          {/* Security Score */}
          <div className="md:col-span-2 lg:col-span-2 group bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-300/20 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <Badge variant="outline" className="border-orange-300/30 text-orange-600">SECURE</Badge>
            </div>
            <h3 className="font-satoshi text-lg font-bold mb-2">Security</h3>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">98%</div>
              <p className="text-xs text-muted-foreground">Security Score</p>
            </div>
          </div>

          {/* Gas Tracker */}
          <div className="md:col-span-2 lg:col-span-2 group bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-300/20 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </div>
            <h3 className="font-satoshi text-lg font-bold mb-2">Gas Tracker</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Standard</span>
                <span className="text-sm font-bold text-yellow-600">42 gwei</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Fast</span>
                <span className="text-sm font-bold text-orange-600">58 gwei</span>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="md:col-span-4 lg:col-span-4 group bg-gradient-to-br from-slate-500/10 to-gray-500/10 border border-slate-300/20 rounded-3xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-500 to-gray-500 rounded-xl flex items-center justify-center">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-satoshi text-lg font-bold">Recent Transactions</h3>
              </div>
              <Button variant="ghost" size="sm" className="text-[#16bc4e] hover:bg-[#16bc4e]/10">
                View All
              </Button>
            </div>
            
            <div className="space-y-3">
              {[
                { type: 'Swap', amount: '0.5 ETH → 1,245 USDC', status: 'success', time: '2m ago' },
                { type: 'Stake', amount: '100 MATIC', status: 'pending', time: '5m ago' },
                { type: 'Transfer', amount: '0.1 BTC', status: 'success', time: '1h ago' }
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-background/50 rounded-xl border border-border/50">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${tx.status === 'success' ? 'bg-[#65fe08]' : 'bg-yellow-500 animate-pulse'}`}></div>
                    <div>
                      <p className="text-sm font-medium">{tx.type}</p>
                      <p className="text-xs text-muted-foreground">{tx.amount}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{tx.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Staking Rewards */}
          <div className="md:col-span-2 lg:col-span-2 group bg-gradient-to-br from-[#65fe08]/10 to-lime-500/10 border border-[#65fe08]/20 rounded-3xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#65fe08] to-lime-500 rounded-xl flex items-center justify-center">
                <Coins className="h-5 w-5 text-black" />
              </div>
            </div>
            <h3 className="font-satoshi text-lg font-bold mb-2">Staking</h3>
            <p className="text-2xl font-bold text-[#65fe08] mb-1">+24.5</p>
            <p className="text-xs text-muted-foreground">Rewards earned today</p>
            <div className="mt-3 flex items-center space-x-1">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#65fe08] to-lime-500 rounded-full" style={{ width: '67%' }}></div>
              </div>
              <span className="text-xs text-muted-foreground">67%</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Web3BentoGridSection;


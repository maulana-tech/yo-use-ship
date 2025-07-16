// src/components/ProductCard.tsx

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Check,
  Download,
  Eye,
  ExternalLink,
  TrendingUp,
  Star,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// Disesuaikan dengan interface dari ProductPage.tsx
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

interface ProductCardProps {
  product: Product;
  IconComponent: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, IconComponent }) => {
  return (
    <Card
      key={product.id}
      className="group relative overflow-hidden transition-all duration-300 cursor-pointer h-full bg-white border-2 border-gray-100 hover:shadow-2xl hover:border-[#16bc4e]/50 hover:-translate-y-1 flex flex-col min-h-[520px]"
    >
      {/* Trending Badge */}
      {product.trending && (
        <div className="absolute top-5 left-5 z-20 bg-gradient-to-r from-black to-gray-800 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-2 shadow-lg">
          <TrendingUp className="h-3 w-3" />
          <span>Trending</span>
        </div>
      )}

      {/* Header dengan Ikon */}
      <CardHeader className="p-0 relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="bg-gradient-to-br from-[#16bc4e] to-[#65fe08] rounded-3xl flex items-center justify-center w-20 h-20 shadow-xl group-hover:scale-110 transition-transform duration-300">
            <IconComponent className="text-white h-10 w-10" />
          </div>
        </div>
        <div className="absolute top-5 right-5 bg-black/95 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-medium flex items-center space-x-3 shadow-lg">
          <Download className="h-3 w-3" />
          <span>{product.downloads}</span>
          <div className="w-px h-4 bg-gray-400"></div>
          <Star className="h-3 w-3 fill-current text-yellow-400" />
          <span>{product.rating}</span>
        </div>
      </CardHeader>

      {/* Konten Kartu */}
      <CardContent className="p-7 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-5">
          <div className="flex-1 pr-4">
            <CardTitle className="text-xl mb-3 text-foreground font-bold group-hover:text-[#16bc4e] transition-colors leading-tight">
              {product.name}
            </CardTitle>
            <CardDescription className="text-muted-foreground leading-relaxed text-sm line-clamp-2">
              {product.description}
            </CardDescription>
          </div>
          <Badge className="bg-foreground text-background font-bold px-5 py-2 rounded-full text-lg whitespace-nowrap">
            ${product.price}
          </Badge>
        </div>

        {/* Fitur */}
        <div className="mb-6 flex-1">
          <ul className="space-y-3">
            {product.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
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
              className="text-xs border-gray-300 dark:border-gray-700 text-muted-foreground bg-gray-50 dark:bg-gray-800 px-3 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Tombol Aksi */}
        <div className="flex space-x-3 mt-auto">
          <Button className="flex-1 bg-foreground hover:bg-foreground/80 text-background font-medium shadow-lg transition-all duration-300 py-3 text-base hover:shadow-xl">
            <Eye className="h-4 w-4 mr-2" />
            <span>Preview</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-input hover:bg-accent hover:text-accent-foreground transition-all duration-300 w-12 h-12 shadow-md hover:shadow-lg"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;


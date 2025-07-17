// src/components/ProductCard.tsx

import React from 'react';
import { Product } from '@/pages/ProductPage';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 flex gap-4 items-center">
      {product.imageUrl && (
        <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover rounded" />
      )}
      <div>
        <h2 className="font-bold text-lg">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <div className="font-semibold mt-2">Rp{product.price}</div>
        {product.category && <div className="text-xs text-gray-400">Category: {product.category}</div>}
        <div className="text-xs text-gray-400">Stock: {product.stock}</div>
      </div>
    </div>
  );
};

export default ProductCard;


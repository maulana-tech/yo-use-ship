// src/components/ProductCard.tsx

import React from 'react';

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  category?: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />}
      <h2 className="text-xl font-bold mb-1">{product.name}</h2>
      <div className="text-lg font-semibold mb-1">Rp{product.price}</div>
      <div className="mb-1 text-gray-600">{product.description}</div>
      {product.category && <div className="text-sm text-gray-400 mb-1">Category: {product.category}</div>}
      <div className="text-sm text-gray-400 mb-1">Stock: {product.stock}</div>
      <div className="text-xs text-gray-400">Created: {new Date(product.createdAt).toLocaleString()}</div>
      <div className="text-xs text-gray-400">Updated: {new Date(product.updatedAt).toLocaleString()}</div>
    </div>
  );
};

export default ProductCard;


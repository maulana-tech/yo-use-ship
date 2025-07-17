"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/src/components/ui/button';
// import { getProductById } from '@/actions/product_actions'; // Uncomment jika sudah ada actions

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

const ProductDetail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    // TODO: Ganti dengan fetch ke server actions
    // getProductById(id).then(setProduct).finally(() => setLoading(false));
    setTimeout(() => {
      setProduct({
        id,
        name: 'Demo Product',
        price: 100000,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        stock: 10,
      });
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => router.push('/product')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-12">
      <Button onClick={() => router.push('/product')} className="mb-4">Back to Products</Button>
      {product.imageUrl && (
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      )}
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <div className="text-lg font-semibold mb-2">Rp{product.price}</div>
      <div className="mb-2 text-gray-600">{product.description}</div>
      {product.category && <div className="text-sm text-gray-400 mb-2">Category: {product.category}</div>}
      <div className="text-sm text-gray-400 mb-2">Stock: {product.stock}</div>
      <div className="text-xs text-gray-400">Created: {new Date(product.createdAt).toLocaleString()}</div>
      <div className="text-xs text-gray-400">Updated: {new Date(product.updatedAt).toLocaleString()}</div>
    </div>
  );
};

export default ProductDetail;
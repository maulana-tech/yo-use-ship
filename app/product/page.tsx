"use client";
// ProductPage.tsx  (dengan smooth scrolling yang diperbaiki)
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';

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

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<Partial<Product>>({ name: '', price: 0 });

  useEffect(() => {
    // TODO: Ganti dengan fetch ke server actions
    setTimeout(() => {
      setProducts([
        { id: '1', name: 'Demo Product', price: 100000, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), stock: 10 },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const handleAdd = async () => {
    // TODO: Ganti dengan server action
    setProducts((prev) => [...prev, { id: Date.now().toString(), name: form.name || '', price: form.price || 0, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), stock: 0 }]);
    setForm({ name: '', price: 0 });
  };

  const handleDelete = async (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = async (id: string, updates: Partial<Product>) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {/* Form tambah produk */}
      <div className="flex gap-2 mb-6">
        <input
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Name"
          className="border px-2 py-1 rounded"
        />
        <input
          type="number"
          value={form.price}
          onChange={(e) => setForm((f) => ({ ...f, price: Number(e.target.value) }))}
          placeholder="Price"
          className="border px-2 py-1 rounded"
        />
        <Button onClick={handleAdd}>Add Product</Button>
      </div>
      {/* List produk */}
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center gap-4 border p-4 rounded">
            <div className="flex-1">
              <ProductCard product={product} />
            </div>
            <Button variant="destructive" onClick={() => handleDelete(product.id)}>Delete</Button>
            <Button
              variant="outline"
              onClick={() => {
                const name = prompt('Edit name:', product.name) || product.name;
                handleEdit(product.id, { name });
              }}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;


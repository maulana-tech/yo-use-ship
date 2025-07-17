import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Product } from './ProductPage';

const API_URL = 'http://localhost:4000';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`${API_URL}/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setProduct(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-12">
      <Button onClick={() => navigate('/products')} className="mb-4">Back to Products</Button>
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
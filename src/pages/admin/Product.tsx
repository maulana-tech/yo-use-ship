import React, { useEffect, useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { X, Eye, Edit, Trash2, LayoutGrid, List } from "lucide-react";

const API_URL = "http://localhost:4000";

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

const categories = ["all", "saas-kit", "ai-tools", "templates"];

const Product: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);
  const [perPage] = useState(6);
  const [selected, setSelected] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  // Filtered and searched products
  const filtered = useMemo(() => {
    let filtered = products;
    if (category !== "all") filtered = filtered.filter((p) => p.category === category);
    if (search) filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.description?.toLowerCase().includes(search.toLowerCase()) ?? false)
    );
    return filtered;
  }, [products, category, search]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  // Handlers
  const handleOpenModal = (product: Product) => {
    setSelected(product);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelected(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      {/* Search and Filter Bar */}
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:items-center">
        <Input
          className="w-full sm:w-64"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full sm:w-48" />
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {/* TODO: Add price/stock filters if needed */}
      </div>
      {/* Grid/List Toggle */}
      <div className="mb-4 flex gap-2">
        <Button variant={view === "grid" ? "default" : "outline"} onClick={() => setView("grid")}> <LayoutGrid className="w-4 h-4 mr-1" /> Grid </Button>
        <Button variant={view === "list" ? "default" : "outline"} onClick={() => setView("list")}> <List className="w-4 h-4 mr-1" /> List </Button>
      </div>
      {/* Product Cards/List */}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : filtered.length === 0 ? (
        <div className="border rounded p-4 text-center text-gray-400">No products found.</div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginated.map((product) => (
            <div key={product.id} className="relative group cursor-pointer" onClick={() => handleOpenModal(product)}>
              <ProductCard product={product} />
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="outline" onClick={e => { e.stopPropagation(); handleOpenModal(product); }}><Eye className="w-4 h-4" /></Button>
                <Button size="icon" variant="outline" onClick={e => e.stopPropagation()}><Edit className="w-4 h-4" /></Button>
                <Button size="icon" variant="destructive" onClick={e => e.stopPropagation()}><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {paginated.map((product) => (
            <div key={product.id} className="flex items-center gap-4 border p-4 rounded cursor-pointer group" onClick={() => handleOpenModal(product)}>
              <div className="flex-1">
                <ProductCard product={product} />
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button size="icon" variant="outline" onClick={e => { e.stopPropagation(); handleOpenModal(product); }}><Eye className="w-4 h-4" /></Button>
                <Button size="icon" variant="outline" onClick={e => e.stopPropagation()}><Edit className="w-4 h-4" /></Button>
                <Button size="icon" variant="destructive" onClick={e => e.stopPropagation()}><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex gap-2 justify-center mt-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button key={i} size="sm" variant={page === i + 1 ? "default" : "outline"} onClick={() => setPage(i + 1)}>{i + 1}</Button>
          ))}
        </div>
      )}
      {/* Product Detail Modal */}
      {showModal && selected && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
              <button className="absolute top-2 right-2 p-2" onClick={handleCloseModal}><X className="w-5 h-5" /></button>
              <div className="flex flex-col items-center">
                {selected.imageUrl && <img src={selected.imageUrl} alt={selected.name} className="w-48 h-48 object-cover rounded mb-4" />}
                <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
                <div className="text-lg font-semibold mb-2">Rp{selected.price}</div>
                <div className="mb-2 text-gray-600">{selected.description}</div>
                {selected.category && <div className="text-sm text-gray-400 mb-2">Category: {selected.category}</div>}
                <div className="text-sm text-gray-400 mb-2">Stock: {selected.stock}</div>
                <div className="text-xs text-gray-400">Created: {new Date(selected.createdAt).toLocaleString()}</div>
                <div className="text-xs text-gray-400">Updated: {new Date(selected.updatedAt).toLocaleString()}</div>
                {/* TODO: Add gallery, reviews, purchase options */}
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Product; 
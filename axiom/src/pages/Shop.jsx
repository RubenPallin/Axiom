import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useStore } from '../store';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { Filter, ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const products = useStore((state) => state.products);
  const categoria = searchParams.get('categoria');

  const filteredProducts = categoria
    ? products.filter(product => product.categoria === categoria)
    : products;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Tienda</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 md:hidden"
        >
          <Filter size={20} />
          Filtros
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar show={showFilters} onClose={() => setShowFilters(false)} />
        
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
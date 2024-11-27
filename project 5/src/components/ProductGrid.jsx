import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import ProductFilters from './ProductFilters';
import { useProducts } from '../context/ProductContext';

function ProductGrid({ onProductSelect, filters = {}, onFilterChange }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { products } = useProducts();

  const filteredProducts = [...Object.values(products).flat()].filter(product => {
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const searchFields = [
        product.name,
        product.category,
        product.description,
        ...(product.effects || []),
        ...(product.aromas || []),
        product.range
      ].map(field => field?.toLowerCase());
      
      if (!searchFields.some(field => field?.includes(searchTerm))) {
        return false;
      }
    }

    if (filters.category && product.category !== filters.category) return false;
    if (filters.range && product.range !== filters.range) return false;
    if (filters.maxPrice && product.prices?.['3.5']?.price > filters.maxPrice) return false;
    if (filters.effects?.length > 0 && !filters.effects.some(effect => product.effects?.includes(effect))) return false;
    if (filters.xTremCBD && !product.xTremCBD) return false;
    if (filters.zeroTHC && !product.zeroTHC) return false;
    return true;
  });

  return (
    <div>
      {/* Filter Button */}
      <button
        onClick={() => setIsFilterOpen(true)}
        className="mb-6 flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 border border-emerald-200"
      >
        <AdjustmentsHorizontalIcon className="h-5 w-5" />
        <span>Filtres</span>
        {Object.values(filters).some(value => 
          value && (Array.isArray(value) ? value.length > 0 : true)
        ) && (
          <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
            Actif
          </span>
        )}
      </button>

      {/* Filter Sidenav */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsFilterOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed inset-y-0 left-0 w-full sm:max-w-sm bg-white shadow-lg z-50"
            >
              <ProductFilters 
                filters={filters}
                onFilterChange={onFilterChange}
                onClose={() => setIsFilterOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProductCard 
              product={product} 
              onProductSelect={onProductSelect}
            />
          </motion.div>
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-8 text-gray-500">
            Aucun produit ne correspond à vos critères de recherche.
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductGrid;
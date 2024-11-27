import React, { createContext, useContext, useState } from 'react';
import { products as productData } from '../data/products.jsx';

const ProductContext = createContext();

// Convert nested object structure to flat array
const flattenProducts = (products) => {
  return Object.values(products).reduce((acc, categoryProducts) => {
    return [...acc, ...categoryProducts];
  }, []);
};

export function ProductProvider({ children }) {
  const [products] = useState(flattenProducts(productData));

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
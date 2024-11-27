import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSlider from './components/ProductSlider';
import IconSection from './components/IconSection';
import ProductGrid from './components/ProductGrid';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import UserAccount from './components/UserAccount';
import CartWishlistNav from './components/CartWishlistNav';
import ProductSidenav from './components/ProductSidenav';
import InfoSidenav from './components/InfoSidenav';
import Checkout from './components/Checkout';
import { Toast } from './components/Toast';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUserAccountOpen, setIsUserAccountOpen] = useState(false);
  const [cartWishlistNav, setCartWishlistNav] = useState({ isOpen: false, type: null });
  const [infoNav, setInfoNav] = useState({ isOpen: false, section: null });
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    range: '',
    effects: [],
    maxPrice: 200,
    xTremCBD: false,
    zeroTHC: false,
    search: ''
  });

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleSearch = (query) => {
    setFilters(prev => ({ ...prev, search: query }));
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleCategorySelect = (category) => {
    setFilters(prev => ({ ...prev, category }));
  };

  const handleInfoSection = (section) => {
    setInfoNav({ isOpen: true, section });
  };

  const handleCheckout = () => {
    setCartWishlistNav({ isOpen: false, type: null });
    setIsCheckoutOpen(true);
  };

  return (
    <ProductProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header 
            onUserClick={() => setIsUserAccountOpen(true)}
            onCartClick={() => setCartWishlistNav({ isOpen: true, type: 'cart' })}
            onWishlistClick={() => setCartWishlistNav({ isOpen: true, type: 'wishlist' })}
            onSearch={handleSearch}
            onAboutClick={() => handleInfoSection('about')}
            onContactClick={() => handleInfoSection('contact')}
          />
          
          {!isCheckoutOpen ? (
            <>
              <Hero />
              <main className="container mx-auto px-4">
                <ProductSlider onProductSelect={handleProductSelect} />
                
                <motion.section 
                  className="my-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-emerald-50 p-8 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4">
                      <span className="text-black">VOTRE AMI </span>
                      <span className="text-emerald-600">BIEN-ÊTRE</span>
                      <span className="text-black"> AU NATUREL</span>
                    </h2>
                    <div className="prose max-w-none text-gray-700 mb-8 space-y-4">
                      <p>
                        Ce petit miracle de la nature booste l'humeur, apaise les nerfs et soulage les douleurs, sans altérer votre clarté mentale.
                      </p>
                      <p>
                        Nous avons conçu une gamme de CBD pour répondre à tous les besoins. Pour les pros, les chauffeurs VTC et les actifs, notre CBD 0 % THC est le choix idéal.
                      </p>
                    </div>
                    <IconSection onCategorySelect={handleCategorySelect} />
                  </div>
                </motion.section>

                <section id="products-section" className="my-12">
                  <ProductGrid 
                    onProductSelect={handleProductSelect}
                    filters={filters}
                    onFilterChange={handleFilterChange}
                  />
                </section>

                <StatsSection />
              </main>
            </>
          ) : (
            <Checkout onClose={() => setIsCheckoutOpen(false)} />
          )}

          <Footer 
            onProductFilter={handleFilterChange}
            onInfoSection={handleInfoSection}
          />

          <ProductSidenav 
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />

          <UserAccount 
            isOpen={isUserAccountOpen}
            onClose={() => setIsUserAccountOpen(false)}
          />

          <CartWishlistNav 
            isOpen={cartWishlistNav.isOpen}
            type={cartWishlistNav.type}
            onClose={() => setCartWishlistNav({ isOpen: false, type: null })}
            onCheckout={handleCheckout}
          />

          <InfoSidenav
            isOpen={infoNav.isOpen}
            activeSection={infoNav.section}
            onClose={() => setInfoNav({ isOpen: false, section: null })}
          />

          <Toast />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}
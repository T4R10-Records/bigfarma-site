import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon, ShoppingBagIcon, HeartIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

function Header({ 
  onUserClick, 
  onAboutClick, 
  onContactClick, 
  onCartClick, 
  onWishlistClick,
  onSearch,
  initialSearchQuery = ''
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShowHeader, setShouldShowHeader] = useState(true);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide header when scrolling down and past threshold
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShouldShowHeader(false);
      } else {
        setShouldShowHeader(true);
      }

      setIsScrolled(currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
    setIsSearchOpen(false);
  };

  return (
    <>
      {/* Main Header - Always present but transforms based on scroll */}
      <header 
        className={`fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-all duration-300`}
        style={{
          transform: shouldShowHeader ? 'translateY(0)' : 'translateY(-100%)',
          opacity: shouldShowHeader ? 1 : 0
        }}
      >
        <div className="container mx-auto px-4">
          <div className="py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-600">Accueil</a>
              <button 
                onClick={onAboutClick}
                className="text-gray-700 hover:text-emerald-600"
              >
                À propos
              </button>
              <button 
                onClick={onContactClick}
                className="text-gray-700 hover:text-emerald-600"
              >
                Nous contacter
              </button>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-500"
                />
                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </button>
              </form>
            </div>

            {/* User Section */}
            <div className="flex items-center space-x-6">
              {/* User Info */}
              <button 
                onClick={onUserClick}
                className="hidden md:flex items-center space-x-2 hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors"
              >
                <span className="text-sm font-medium">Sébastien</span>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-gray-500">Rang Argent</span>
                  <img 
                    src="/silver-badge.svg" 
                    alt="Badge Argent" 
                    className="h-6 w-6"
                  />
                </div>
              </button>

              {/* Icons */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={onWishlistClick}
                  className="p-2 hover:bg-gray-100 rounded-full relative"
                >
                  <HeartIcon className="h-6 w-6 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    2
                  </span>
                </button>
                <button 
                  onClick={onCartClick}
                  className="p-2 hover:bg-gray-100 rounded-full relative"
                >
                  <ShoppingBagIcon className="h-6 w-6 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Bars3Icon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden py-4 border-t"
              >
                <nav className="space-y-4">
                  <a href="#" className="block text-gray-700 hover:text-emerald-600">Accueil</a>
                  <button 
                    onClick={onAboutClick}
                    className="block w-full text-left text-gray-700 hover:text-emerald-600"
                  >
                    À propos
                  </button>
                  <button 
                    onClick={onContactClick}
                    className="block w-full text-left text-gray-700 hover:text-emerald-600"
                  >
                    Nous contacter
                  </button>
                </nav>
                <div className="mt-4">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Rechercher..."
                      className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-500"
                    />
                    <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Floating Header Bubble - Only shows when main header is hidden */}
      <AnimatePresence>
        {isScrolled && !shouldShowHeader && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="fixed top-4 right-4 z-40"
          >
            <div className="bg-white rounded-2xl shadow-lg p-3">
              <div className="flex items-center gap-4">
                {/* User Info */}
                <button 
                  onClick={onUserClick}
                  className="flex items-center gap-2 hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors"
                >
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">Sébastien</span>
                    <span className="text-xs text-gray-500">Rang Argent</span>
                  </div>
                  <img 
                    src="/silver-badge.svg" 
                    alt="Badge Argent" 
                    className="h-8 w-8"
                  />
                </button>

                {/* Divider */}
                <div className="h-8 w-px bg-gray-200"></div>

                {/* Icons */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={onWishlistClick}
                    className="p-2 hover:bg-gray-100 rounded-full relative"
                  >
                    <HeartIcon className="h-5 w-5 text-gray-600" />
                    <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      2
                    </span>
                  </button>
                  <button 
                    onClick={onCartClick}
                    className="p-2 hover:bg-gray-100 rounded-full relative"
                  >
                    <ShoppingBagIcon className="h-5 w-5 text-gray-600" />
                    <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      3
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
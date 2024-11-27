import React from 'react';
import { useProducts } from '../context/ProductContext';
import { PRODUCT_CATEGORIES } from '../data/constants.jsx';

function Footer({ onProductFilter, onInfoSection }) {
  const { products } = useProducts();

  const scrollToProducts = (filter) => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (filter) {
      onProductFilter({
        category: filter.category || '',
        range: filter.range || '',
        effects: filter.effects || [],
        maxPrice: filter.maxPrice || 200,
        xTremCBD: filter.xTremCBD || false,
        zeroTHC: filter.zeroTHC || false
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-500 mb-4">CBD Shop</h3>
            <p className="text-gray-400 mb-4">
              Votre destination bien-être pour des produits CBD de qualité supérieure, 
              cultivés avec passion et expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">Facebook</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">Instagram</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">Twitter</a>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Nos Produits</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToProducts({})} 
                  className="text-left hover:text-emerald-500 transition-colors w-full"
                >
                  Tous nos produits
                </button>
              </li>
              {PRODUCT_CATEGORIES.map(category => (
                <li key={category.id}>
                  <button 
                    onClick={() => scrollToProducts({ category: category.name })} 
                    className="text-left hover:text-emerald-500 transition-colors w-full"
                  >
                    {category.name}s CBD
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => scrollToProducts({ range: 'Nouveauté' })} 
                  className="text-left hover:text-emerald-500 transition-colors w-full"
                >
                  Nouveautés
                </button>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Informations</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onInfoSection('about')}
                  className="text-left hover:text-emerald-500 transition-colors w-full"
                >
                  À propos de nous
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onInfoSection('guide')}
                  className="text-left hover:text-emerald-500 transition-colors w-full"
                >
                  Guide du CBD
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onInfoSection('blog')}
                  className="text-left hover:text-emerald-500 transition-colors w-full"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onInfoSection('faq')}
                  className="text-left hover:text-emerald-500 transition-colors w-full"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onInfoSection('contact')}
                  className="text-left hover:text-emerald-500 transition-colors w-full"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Mentions Légales</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onInfoSection('terms')}
                  className="text-left hover:text-emerald-500 transition-colors w-full"
                >
                  Conditions générales
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onInfoSection('privacy')}
                  className="text-left hover:text-emerald-500 transition-colors w-full"
                >
                  Politique de confidentialité
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} CBD Shop. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => onInfoSection('terms')}
                className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
              >
                Mentions légales
              </button>
              <button 
                onClick={() => onInfoSection('terms')}
                className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
              >
                CGV
              </button>
              <button 
                onClick={() => onInfoSection('privacy')}
                className="text-sm text-gray-400 hover:text-emerald-500 transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
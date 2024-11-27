import React, { useState } from 'react';
import { XMarkIcon, UserIcon, ShoppingBagIcon, GiftIcon, ArrowPathIcon, HeartIcon, CreditCardIcon, ChatBubbleLeftIcon, ArrowRightOnRectangleIcon, TrashIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import AccountSettings from './account/AccountSettings';
import OrdersPage from './account/OrdersPage';
import SubscriptionsPage from './account/SubscriptionsPage';
import FavoritesPage from './account/FavoritesPage';
import PaymentMethodsPage from './account/PaymentMethodsPage';
import LoyaltyPage from './account/LoyaltyPage';
import SupportPage from './account/SupportPage';
import { showToast } from './Toast';

const menuSections = [
  {
    title: 'Mon Profil',
    items: [
      { id: 'account', label: 'Paramètres du compte', icon: UserIcon, color: 'text-emerald-600' },
      { id: 'orders', label: 'Commandes et retours', icon: ShoppingBagIcon },
      { id: 'recurring', label: 'Abonnements', icon: ArrowPathIcon },
    ]
  },
  {
    title: 'Préférences',
    items: [
      { id: 'favorites', label: 'Liste de favoris', icon: HeartIcon },
      { id: 'cards', label: 'Moyens de paiement', icon: CreditCardIcon },
    ]
  },
  {
    title: 'Récompenses',
    items: [
      { id: 'benefits', label: 'Programme fidélité', icon: GiftIcon },
      { id: 'support', label: 'Assistance client', icon: ChatBubbleLeftIcon },
    ]
  },
  {
    title: 'Compte',
    items: [
      { id: 'logout', label: 'Se déconnecter', icon: ArrowRightOnRectangleIcon },
      { id: 'delete', label: 'Supprimer le compte', icon: TrashIcon, color: 'text-red-600' },
    ]
  }
];

function UserAccount({ isOpen, onClose }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activePage, setActivePage] = useState(null);

  const handleMenuItemClick = (itemId) => {
    setSelectedItem(itemId);
    
    switch(itemId) {
      case 'account':
        setActivePage('account-settings');
        break;
      case 'orders':
        setActivePage('orders');
        break;
      case 'recurring':
        setActivePage('subscriptions');
        break;
      case 'favorites':
        setActivePage('favorites');
        break;
      case 'cards':
        setActivePage('payment-methods');
        break;
      case 'benefits':
        setActivePage('loyalty');
        break;
      case 'support':
        setActivePage('support');
        break;
      case 'logout':
        showToast('Déconnexion réussie');
        onClose();
        break;
      case 'delete':
        if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
          showToast('Compte supprimé avec succès', 'error');
          onClose();
        }
        break;
      default:
        showToast('Cette fonctionnalité sera bientôt disponible !');
    }
  };

  const renderActivePage = () => {
    switch(activePage) {
      case 'account-settings':
        return <AccountSettings onClose={() => setActivePage(null)} />;
      case 'orders':
        return <OrdersPage onClose={() => setActivePage(null)} />;
      case 'subscriptions':
        return <SubscriptionsPage onClose={() => setActivePage(null)} />;
      case 'favorites':
        return <FavoritesPage onClose={() => setActivePage(null)} />;
      case 'payment-methods':
        return <PaymentMethodsPage onClose={() => setActivePage(null)} />;
      case 'loyalty':
        return <LoyaltyPage onClose={() => setActivePage(null)} />;
      case 'support':
        return <SupportPage onClose={() => setActivePage(null)} />;
      default:
        return (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-4 md:p-6 border-b">
              <h2 className="text-xl md:text-2xl font-bold">
                MON <span className="text-emerald-600">COMPTE</span>
              </h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
              {/* User Rank Progress */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#047857"
                      strokeWidth="8"
                      strokeDasharray="282.7"
                      strokeDashoffset="42.4"
                      transform="rotate(-90 50 50)"
                    />
                    <foreignObject x="15" y="15" width="70" height="70">
                      <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="text-sm md:text-base">RANG</div>
                        <div className="text-lg md:text-xl font-bold">ARGENT</div>
                        <div className="text-xs md:text-sm mt-1">1600 points sur 2000</div>
                      </div>
                    </foreignObject>
                  </svg>
                </div>
                <p className="text-center text-xs md:text-sm text-gray-500 mt-2">
                  *Le rang est réinitialisé après 2 mois sans achat
                </p>
              </motion.div>

              {/* Menu Sections */}
              <div className="space-y-6">
                {menuSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sectionIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <h3 className="text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item) => (
                        <motion.button
                          key={item.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleMenuItemClick(item.id)}
                          className={clsx(
                            'w-full p-3 text-left rounded-lg transition-all duration-200',
                            'flex items-center space-x-3',
                            'hover:bg-gray-50',
                            selectedItem === item.id && 'bg-emerald-50 text-emerald-600'
                          )}
                        >
                          <item.icon className={clsx('h-5 w-5', item.color || 'text-gray-500')} />
                          <span className={clsx('font-medium text-sm md:text-base', item.color)}>
                            {item.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div 
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => {
              if (!activePage) onClose();
              else setActivePage(null);
            }}
          />
          <motion.div 
            key="sidenav"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={clsx(
              'fixed inset-y-0 right-0 bg-white shadow-lg z-50',
              'w-full sm:max-w-md md:max-w-lg lg:max-w-xl',
              'flex flex-col'
            )}
          >
            {activePage && (
              <button
                onClick={() => setActivePage(null)}
                className="absolute left-4 top-5 md:top-6 text-gray-500 hover:text-gray-700"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
            )}
            {renderActivePage()}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default UserAccount;
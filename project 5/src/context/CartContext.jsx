import React, { createContext, useContext, useReducer } from 'react';
import { PRICE_RANGES } from '../data/pricing';
import { showToast } from '../components/Toast';

const CartContext = createContext();

const initialState = {
  items: [],
  freeItems: [
    { id: 'ocb', name: 'OCB Slim Long', type: 'papers', status: 'Offert' },
    { id: 'lighter', name: 'Briquet Rechargeable', type: 'accessory', status: 'Offert' }
  ]
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, weight, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.id === product.id && item.weight === weight
      );

      let newItems;
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) => 
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...state.items, { ...product, weight, quantity }];
      }

      // Check for packs after adding item
      const { items: processedItems } = checkForPacks(newItems);
      return { ...state, items: processedItems };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(
        item => !(item.id === action.payload.id && item.weight === action.payload.weight)
      );
      const { items: processedItems } = checkForPacks(newItems);
      return { ...state, items: processedItems };
    }

    case 'UPDATE_QUANTITY': {
      const { id, weight, change } = action.payload;
      const newItems = state.items.map(item => {
        if (item.id === id && item.weight === weight) {
          const newQuantity = Math.max(0, item.quantity + change);
          return newQuantity === 0 ? null : { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean);

      const { items: processedItems } = checkForPacks(newItems);
      return { ...state, items: processedItems };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

function checkForPacks(items) {
  // Group items by range and weight
  const itemsByRange = items.reduce((acc, item) => {
    if (item.weight === '3.5') {
      const range = item.range;
      if (!acc[range]) acc[range] = [];
      acc[range].push(item);
    }
    return acc;
  }, {});

  let packs = {};
  let updatedItems = [...items];

  // Check each range for potential packs
  Object.entries(itemsByRange).forEach(([range, rangeItems]) => {
    if (rangeItems.length >= 4) {
      const packId = `pack-${range.toLowerCase()}`;
      const packPrice = PRICE_RANGES[range].pack.price;
      const pricePerItem = packPrice / 4;

      // Create pack
      packs[packId] = {
        id: packId,
        name: `Pack ${range}`,
        range,
        items: rangeItems.slice(0, 4),
        totalPrice: packPrice,
        savings: rangeItems.slice(0, 4).reduce((total, item) => 
          total + (PRICE_RANGES[range].prices['3.5'].price - pricePerItem), 0
        )
      };

      // Update items with pack information
      updatedItems = updatedItems.map(item => {
        if (packs[packId].items.find(packItem => packItem.id === item.id)) {
          return {
            ...item,
            isPack: true,
            packId,
            packRange: range,
            originalPrice: PRICE_RANGES[range].prices['3.5'].price,
            packPrice: pricePerItem
          };
        }
        return item;
      });
    }
  });

  return { items: updatedItems, packs };
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product, weight, quantity) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, weight, quantity } });
    showToast(`${product.name} ajouté au panier`);
  };

  const removeItem = (id, weight) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, weight } });
    showToast('Produit retiré du panier');
  };

  const updateQuantity = (id, weight, change) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, weight, change } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getSubtotal = () => {
    return state.items.reduce((total, item) => {
      const price = item.isPack ? item.packPrice : item.prices[item.weight].price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getPackDiscounts = () => {
    return state.items.reduce((total, item) => {
      if (item.isPack) {
        return total + ((item.originalPrice - item.packPrice) * item.quantity);
      }
      return total;
    }, 0);
  };

  const getTotal = () => {
    return getSubtotal() - getPackDiscounts();
  };

  return (
    <CartContext.Provider value={{
      items: state.items,
      freeItems: state.freeItems,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getSubtotal,
      getPackDiscounts,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
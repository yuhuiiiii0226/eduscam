'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  isInCart: (itemId: string) => boolean;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  isInCart: () => false,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const newItems = [...prev, item];
      localStorage.setItem('cartItems', JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeItem = (itemId: string) => {
    setItems(prev => {
      const newItems = prev.filter(item => item.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(newItems));
      return newItems;
    });
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('cartItems');
  };

  const isInCart = (itemId: string) => {
    return items.some(item => item.id === itemId);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
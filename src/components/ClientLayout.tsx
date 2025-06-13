'use client';

import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <CustomCursor />
      <Navbar />
      {children}
      <Footer />
    </CartProvider>
  );
} 
 
 
'use client';

import Image from 'next/image';

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
}

export default function Cart({ items = [] }: { items: CartItem[] }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed right-4 top-20 w-[380px] bg-white">
      <div className="p-4">
        <h2 className="text-lg mb-4">購物車</h2>
        
        {/* Cart Items */}
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="relative w-[72px] h-[72px] bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-sm line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm mt-1">
                  NT${item.price.toLocaleString()}
                </p>
              </div>
              <button className="self-start p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mt-4 mb-4">
          <span className="text-base">總計</span>
          <span className="text-base">
            NT${total.toLocaleString()}
          </span>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button className="w-full bg-[#0066FF] text-white py-3 rounded-lg font-normal text-base">
            查看購物車
          </button>
          <button className="w-full bg-[#00C49A] text-white py-3 rounded-lg font-normal text-base">
            立即結帳
          </button>
        </div>
      </div>
    </div>
  );
} 
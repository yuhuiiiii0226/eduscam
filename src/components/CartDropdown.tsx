'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

export default function CartDropdown() {
  const { items, removeItem } = useCart();

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="relative inline-flex items-center p-2 text-gray-700 hover:text-gray-900">
        <span className="sr-only">購物車</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {items.length}
          </span>
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-[380px] origin-top-right bg-white">
          <div>
            <h3 className="p-4 text-base text-gray-900">購物車</h3>
            
            <div className="px-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-start py-4 border-t border-gray-100">
                  <div className="relative w-[72px] h-[72px] flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ml-3">
                    <h4 className="text-sm text-gray-900 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-900">
                      NT${item.price.toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-3 text-gray-700 hover:text-gray-900"
                  >
                    <span className="sr-only">移除</span>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-[#F5F8FF] mt-4">
              <div className="px-4 py-3 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">總計 {items.length} 項商品</span>
                  <span className="text-base font-medium text-gray-900">
                    NT${total.toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <Link
                  href="/cart"
                  className="block w-full py-3 px-4 rounded text-center text-white text-base bg-[#0066FF] hover:bg-[#0052CC]"
                >
                  前往購物車
                </Link>
              </div>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
} 
 
 
 
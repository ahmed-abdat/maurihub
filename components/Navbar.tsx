"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">MauriHub</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Features</Link>
            <Link href="#how-it-works" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">How It Works</Link>
            <Link href="#testimonials" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Testimonials</Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="outline" className="mr-2">Log In</Button>
            <Button>Sign Up</Button>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Features</Link>
            <Link href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">How It Works</Link>
            <Link href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Testimonials</Link>
            <Button variant="outline" className="w-full mt-2">Log In</Button>
            <Button className="w-full mt-2">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
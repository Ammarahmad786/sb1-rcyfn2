"use client";

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';

const categories = ['electronics', 'clothing', 'books', 'home'];

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          E-Shop
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/categories/${category}`} className="hover:text-blue-500 capitalize">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/cart">
          <Button variant="outline" className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5" />
            <span>{cart.length}</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}
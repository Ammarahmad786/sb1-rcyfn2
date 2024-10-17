"use client";

import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';

export default function ProductList({ products }: { products: Product[] }) {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 flex flex-col">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
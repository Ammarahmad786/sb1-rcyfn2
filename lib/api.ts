import { Product } from './types';

const products: Product[] = [
  { id: 1, name: 'Smartphone', description: 'Latest model smartphone', price: 699.99, category: 'electronics', image: 'https://source.unsplash.com/random/800x600/?smartphone' },
  { id: 2, name: 'Laptop', description: 'High-performance laptop', price: 1299.99, category: 'electronics', image: 'https://source.unsplash.com/random/800x600/?laptop' },
  { id: 3, name: 'T-shirt', description: 'Comfortable cotton t-shirt', price: 19.99, category: 'clothing', image: 'https://source.unsplash.com/random/800x600/?tshirt' },
  { id: 4, name: 'Jeans', description: 'Classic blue jeans', price: 49.99, category: 'clothing', image: 'https://source.unsplash.com/random/800x600/?jeans' },
  { id: 5, name: 'Novel', description: 'Bestselling fiction novel', price: 14.99, category: 'books', image: 'https://source.unsplash.com/random/800x600/?book' },
  { id: 6, name: 'Cookbook', description: 'Collection of gourmet recipes', price: 24.99, category: 'books', image: 'https://source.unsplash.com/random/800x600/?cookbook' },
  { id: 7, name: 'Coffee Maker', description: 'Automatic drip coffee maker', price: 79.99, category: 'home', image: 'https://source.unsplash.com/random/800x600/?coffeemaker' },
  { id: 8, name: 'Blender', description: 'High-speed blender for smoothies', price: 59.99, category: 'home', image: 'https://source.unsplash.com/random/800x600/?blender' },
];

export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return products;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return products.filter(product => product.category === category);
}
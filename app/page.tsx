import ProductList from '@/components/ProductList';
import { getProducts } from '@/lib/api';

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <ProductList products={products} />
    </div>
  );
}
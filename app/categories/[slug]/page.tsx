import { getProductsByCategory } from '@/lib/api';
import ProductList from '@/components/ProductList';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const products = await getProductsByCategory(params.slug);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 capitalize">{params.slug} Products</h1>
      <ProductList products={products} />
    </div>
  );
}
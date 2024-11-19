import Product from '@app/components/product';
import useSearchProducts from '@app/hooks/fetcher';
import { useSearchParams } from 'react-router-dom';

function Products() {
  const { products, isLoading } = useSearchProducts();
  const [urlSearchParams] = useSearchParams();

  const search = urlSearchParams.get('search');

  if (isLoading) {
    return <p className="min-h-60 text-center">loading...</p>;
  }

  if (!products.length) {
    return (
      <p className="min-h-60 text-center">
        Sorry, we couldn't find any products for "{search}"
      </p>
    );
  }

  return (
    <ul className="flex max-w-full flex-wrap justify-center gap-4 p-8">
      {products.map(product => (
        <li key={product.id}>
          <Product product={product.attributes} />
        </li>
      ))}
    </ul>
  );
}

export default Products;

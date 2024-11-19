import Pagination from '@app/components/pagination';
import Product from '@app/components/product';
import DebouncedSearch from '@app/components/search';
import useSearchProducts from '@app/hooks/fetcher';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Index() {
  const [urlSearchParams] = useSearchParams();

  const page = urlSearchParams.get('page') || '1';
  const { products, hasMore } = useSearchProducts();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [page]);

  return (
    <main className="p-8">
      <DebouncedSearch />
      <ul className="flex max-w-full flex-wrap justify-center gap-4 p-8">
        {products.map(product => (
          <li key={product.id}>
            <Product product={product.attributes} />
          </li>
        ))}
      </ul>
      <Pagination hasMore={hasMore} />
    </main>
  );
}

export default Index;

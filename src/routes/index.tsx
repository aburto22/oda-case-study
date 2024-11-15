import Pagination from '@app/components/pagination';
import Product from '@app/components/product';
import DebouncedSearch from '@app/components/search';
import useSearchProducts from '@app/hooks/fetcher';
import { useCallback, useEffect, useState } from 'react';

function Index() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const { products, hasMore } = useSearchProducts(search, page);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [page]);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
    setPage(1);
  }, []);

  return (
    <main>
      <DebouncedSearch onChange={handleSearchChange} />
      <ul className="flex max-w-full flex-wrap justify-center gap-4 p-8">
        {products.map(product => (
          <li key={product.id}>
            <Product product={product.attributes} />
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        next={() => setPage(page + 1)}
        prev={() => setPage(page - 1)}
        hasMore={hasMore}
      />
    </main>
  );
}

export default Index;

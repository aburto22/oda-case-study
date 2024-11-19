import Pagination from '@app/components/pagination';
import Products from '@app/components/products';
import DebouncedSearch from '@app/components/search';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Index() {
  const [urlSearchParams] = useSearchParams();

  const page = urlSearchParams.get('page') || '1';

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [page]);

  return (
    <main className="grid min-h-full grid-rows-[auto,1fr,auto] p-8">
      <DebouncedSearch />
      <Products />
      <Pagination />
    </main>
  );
}

export default Index;

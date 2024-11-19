import { fetchProducts } from '@app/clients/oda';
import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';

function useSearchProducts() {
  const [urlSearchParams] = useSearchParams();
  const search = urlSearchParams.get('search') || '';
  const page = urlSearchParams.get('page') || '1';

  const { data, isLoading } = useSWR(
    ['/search', search, page],
    ([, search, page]) => fetchProducts(search, Number(page)),
  );

  const products = data ? data.items : [];
  const hasMore = data ? data.attributes.has_more_items : false;

  return { products, hasMore, isLoading };
}

export default useSearchProducts;

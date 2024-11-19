import { fetchProducts } from '@app/clients/oda';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function useSearchProducts() {
  const [urlSearchParams] = useSearchParams();
  const [products, setProducts] = useState<ProductRes[]>([]);
  const [hasMore, setHasMore] = useState(false);

  const search = urlSearchParams.get('search') || '';
  const page = urlSearchParams.get('page') || '1';

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(search, Number(page));
      setHasMore(data.attributes.has_more_items);
      setProducts(data.items);
    };

    fetchData();
  }, [page, search]);

  return { products, hasMore };
}

export default useSearchProducts;

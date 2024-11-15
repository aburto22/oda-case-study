import { fetchProducts } from '@app/clients/oda';
import { useEffect, useState } from 'react';

function useSearchProducts(search: string, page: number) {
  const [products, setProducts] = useState<ProductRes[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(search, page);
      setHasMore(data.attributes.has_more_items);
      setProducts(data.items);
    };

    fetchData();
  }, [page, search]);

  return { products, hasMore };
}

export default useSearchProducts;

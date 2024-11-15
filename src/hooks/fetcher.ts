import { fetchProducts } from '@app/clients/oda';
import { useEffect, useRef, useState } from 'react';

function useSearchProducts(search: string) {
  const [products, setProducts] = useState<ProductRes[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts(search);
      setProducts(data.items);
    };

    const fetchWithDebouncing = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const id = setTimeout(() => fetchData(), 500);
      timeoutRef.current = id;
    };

    fetchWithDebouncing();
  }, [search]);

  return products;
}

export default useSearchProducts;

import Product from '@app/components/product';
import useSearchProducts from '@app/hooks/fetcher';
import { useState } from 'react';

function Index() {
  const [search, setSearch] = useState('');
  const products = useSearchProducts(search);

  return (
    <main>
      <label className="mx-auto flex max-w-64 flex-col gap-1 p-4">
        <span className="text-sm font-semibold">Search:</span>
        <input
          type="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="rounded border border-secondary-content bg-secondary p-1"
        />
      </label>
      <ul className="flex max-w-full flex-wrap justify-center gap-4 p-8">
        {products.map(product => (
          <li key={product.id}>
            <Product product={product.attributes} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Index;

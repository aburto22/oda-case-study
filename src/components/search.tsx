import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function DebouncedSearch() {
  const [urlSearchParams, setUrlSearchParam] = useSearchParams();
  const search = urlSearchParams.get('search') || '';

  const [value, setValue] = useState(search);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = useCallback(
    (value: string) => {
      setUrlSearchParam(current => {
        current.set('search', value);
        current.set('page', '1');
        return current;
      });
    },
    [setUrlSearchParam],
  );

  useEffect(() => {
    const handleChange = () => {
      if (value === search) return;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const id = setTimeout(() => handleSearch(value), 500);
      timeoutRef.current = id;
    };

    handleChange();
  }, [value, handleSearch, search]);

  return (
    <label className="mx-auto flex max-w-64 flex-col gap-1 p-4">
      <span className="text-sm font-semibold">Search:</span>
      <input
        type="search"
        value={value}
        onChange={e => setValue(e.target.value)}
        className="rounded border border-secondary-content bg-secondary p-1"
      />
    </label>
  );
}

export default DebouncedSearch;

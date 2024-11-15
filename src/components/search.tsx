import { useEffect, useRef, useState } from 'react';

type SearchProps = {
  onChange: (value: string) => void;
};

function DebouncedSearch({ onChange }: SearchProps) {
  const [value, setValue] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleChange = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const id = setTimeout(() => onChange(value), 500);
      timeoutRef.current = id;
    };

    handleChange();
  }, [value, onChange]);

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

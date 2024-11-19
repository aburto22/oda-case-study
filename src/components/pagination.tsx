import useSearchProducts from '@app/hooks/fetcher';
import { PropsWithChildren } from 'react';
import { useSearchParams } from 'react-router-dom';

type ButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

function Button({
  onClick,
  children,
  disabled,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-content disabled:cursor-not-allowed disabled:bg-secondary disabled:text-secondary-content disabled:opacity-70"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { hasMore } = useSearchProducts();
  const page = searchParams.get('page') || '1';

  const prevPage = () => {
    setSearchParams(current => {
      current.set('page', `${Number(page) - 1}`);
      return current;
    });
  };

  const nextPage = () => {
    setSearchParams(current => {
      current.set('page', `${Number(page) + 1}`);
      return current;
    });
  };

  return (
    <section className="flex items-center justify-center gap-2 p-2">
      <Button onClick={prevPage} disabled={Number(page) <= 1}>
        Prev
      </Button>
      Page {page}
      <Button onClick={nextPage} disabled={!hasMore}>
        Next
      </Button>
    </section>
  );
}

export default Pagination;

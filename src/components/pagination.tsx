import { PropsWithChildren } from 'react';

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

type PaginationProps = {
  page: number;
  next: () => void;
  prev: () => void;
  hasMore: boolean;
};

function Pagination({ page, prev, next, hasMore }: PaginationProps) {
  return (
    <section className="flex items-center justify-center gap-2 p-2">
      <Button onClick={prev} disabled={page <= 1}>
        My Previous
      </Button>
      Page {page}
      <Button onClick={next} disabled={!hasMore}>
        Next
      </Button>
    </section>
  );
}

export default Pagination;

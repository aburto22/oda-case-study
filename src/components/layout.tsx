import { PropsWithChildren } from 'react';

function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="flex h-32 flex-col items-center justify-end bg-secondary p-4">
        <h2 className="text-3xl text-primary">Case study for Oda</h2>
        <p>Search list</p>
      </header>
      {children}
    </>
  );
}

export default MainLayout;

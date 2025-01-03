import { PropsWithChildren } from 'react';

function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
      <header className="flex h-32 flex-col items-center justify-end bg-secondary p-4">
        <h2 className="text-3xl text-primary">Case study for Oda</h2>
        <p>Search list</p>
      </header>
      {children}
      <footer className="mt-auto flex min-h-28 items-center justify-center bg-primary text-sm text-primary-content">
        Created by Alejandro Aburto S.
      </footer>
    </div>
  );
}

export default MainLayout;

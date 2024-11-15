import { PropsWithChildren } from 'react';

function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="flex h-32 items-end justify-center bg-secondary p-4">
        I am a header
      </header>
      {children}
    </>
  );
}

export default MainLayout;

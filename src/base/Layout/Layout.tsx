import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='md:flex'>{children}</div>
  );
};

export const LayoutLeft = ({ children }: PropsWithChildren) => {
  return (
    <div className='md:w-1/3 p-4 max-h-screen md:sticky top-0 bg-white'>{children}</div>
  );
};

export const LayoutRight = ({ children }: PropsWithChildren) => {
  return (
    <div className="md:w-2/3 p-4 min-h-screen">{children}</div>
  );
};
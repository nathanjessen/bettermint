import { PropsWithChildren } from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='md:flex gap-4'>{children}</div>
  );
};

export const LayoutLeft = ({ children }: PropsWithChildren) => {
  return (
    <div className='md:w-1/3 p-4 max-h-screen md:sticky top-0'>{children}</div>
  );
};

export const LayoutRight = ({ children }: PropsWithChildren) => {
  return (
    <div className="md:w-2/3 p-4 bg-gray-200 min-h-screen">{children}</div>
  );
};
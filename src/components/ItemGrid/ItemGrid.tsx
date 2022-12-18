import Loader from '@/base/Loader';
import { IItem } from '@/typings/types';
import { Suspense } from 'react';
import ResultCard from '../ResultCard';

export interface IItemGridProps {
  contractAddress: string;
  items?: Array<IItem>;
  directory?: string;
}

export const ItemGrid = ({
  contractAddress,
  items,
  directory,
}: IItemGridProps) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
      <Suspense fallback={<Loader />}>
        {items?.map((item) => (
          <ResultCard
            key={`${contractAddress}-${item.mint}`}
            directory={directory}
            item={item}
          />
        ))}
      </Suspense>
    </div>
  );
};

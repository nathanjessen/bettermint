import { useEffect, useState } from 'react';
import { ICollection } from '../../typings/types';

export interface CollectionDetailsProps {
  collection: ICollection;
  explorer?: string;
}

export const CollectionDetails = ({ collection, explorer }: CollectionDetailsProps) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const curr = Number(collection?.current) || 0;
    const max = Number(collection?.max) || 10000;
    const val = Math.ceil(curr / max * 100);
    setProgress(val);

    return () => {
      setProgress(0);
    };
  }, [collection]);

  return (
    <div>
      <h1 className='text-3xl my-3'>{collection?.name}</h1>
      {explorer && (
        <a
          className="-ml-px relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          href={explorer} target="_blank" rel="noreferrer">View on Explorer</a>
      )}

      <h2 className="text-xl my-3">Mint Progress</h2>

      <div className="mt-6" aria-hidden="true">
        <div className="bg-gray-200 rounded-full overflow-hidden">
          <div className="h-2 bg-indigo-600 rounded-full" style={{ width: progress + '%' }} />
        </div>
        <div className="hidden sm:grid grid-cols-3 text-sm font-medium text-gray-600 mt-6">
          <div className="text-left">0</div>
          <div className="text-center text-xl text-indigo-600">{collection?.current}</div>
          <div className="text-right">{collection?.max}</div>
        </div>
      </div>
    </div>
  );
};

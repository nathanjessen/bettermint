import React from 'react';
import ReactLoading from "react-loading";
import { ResultCard } from "../ResultCard/ResultCard";

export interface ItemGridProps {
  loading?: boolean;
  recent?: Array<any>;
  upcoming?: Array<any>;
  collection?: any;
  directory?: string;
}

export const ItemGrid = ({ loading = true, recent, upcoming, collection, directory }: ItemGridProps) => {
  return (
    <div className='w-3/5 p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-gray-200 min-h-screen'>
      {loading ? (
        <ReactLoading
          type='bubbles'
          color='currentColor'
          className='text-blue-600 dark:text-blue-500'
        />
      ) : (
        <>
          {recent?.map((item) => (
            <ResultCard key={`${collection?.name}-${item.mint}`} directory={directory} item={item} />
          ))}
          {upcoming?.map((item) => (
            <ResultCard key={`${collection?.name}-${item.mint}`} directory={directory} item={item} />
          ))}
        </>
      )}
    </div>
  );
};

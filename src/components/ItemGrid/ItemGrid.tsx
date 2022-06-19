import { Suspense } from "react";
import { IItem } from "../../typings/types";
import Loader from "../Loader";
import ResultCard from "../ResultCard";

export interface ItemGridProps {
  contractAddress: string;
  recent?: Array<IItem>;
  upcoming?: Array<IItem>;
  directory?: string;
}

export const ItemGrid = ({ contractAddress, recent, upcoming, directory }: ItemGridProps) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      <Suspense fallback={<Loader />}>
        {recent?.map((item) => (
          <ResultCard key={`${contractAddress}-${item.mint}`} directory={directory} item={item} />
        ))}
        {upcoming?.map((item) => (
          <ResultCard key={`${contractAddress}-${item.mint}`} directory={directory} item={item} />
        ))}
      </Suspense>
    </div>
  );
};

import ReactLoading from "react-loading";
import { ICollection, IItem } from "../../typings/types";
import { ResultCard } from "../ResultCard/ResultCard";

export interface ItemGridProps {
  loading?: boolean;
  recent?: Array<IItem>;
  upcoming?: Array<IItem>;
  collection?: ICollection;
  directory?: string;
}

export const ItemGrid = ({ loading = true, recent, upcoming, collection, directory }: ItemGridProps) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
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

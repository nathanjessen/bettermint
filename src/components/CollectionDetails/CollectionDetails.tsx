import { ICollection } from '../../typings/types';
import ExplorerButton from '../ExplorerButton';
import MintProgress from '../MintProgress';

export interface CollectionDetailsProps {
  collection: ICollection;
}

export const CollectionDetails = ({ collection }: CollectionDetailsProps) => {
  return (
    <div>
      <h1 className='text-3xl'>{collection.name}</h1>
      <h2 className='text-base text-gray-700 font-semibold mb-3'>
        {collection.symbol}
      </h2>

      <div className="my-4">
        <ExplorerButton />
      </div>

      <h2 className="text-xl my-4">Mint Progress</h2>
      <MintProgress collection={collection} />
    </div>
  );
};

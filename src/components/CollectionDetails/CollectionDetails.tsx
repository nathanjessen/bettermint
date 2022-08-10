import Button from 'base/Button';
import { ICollection } from 'typings/types';
import MintProgress from '../MintProgress';

export interface ICollectionDetailsProps {
  collection: ICollection;
  explorerUrl?: string;
}

export const CollectionDetails = ({
  collection,
  explorerUrl = '',
}: ICollectionDetailsProps) => {
  return (
    <div>
      <h1 className='text-3xl'>{collection.name}</h1>
      <h2 className='text-base text-gray-700 font-semibold mb-3'>
        {collection.symbol}
      </h2>

      <div className='my-4'>
        <Button
          color='primary'
          as='a'
          href={explorerUrl}
          target='_blank'
          rel='noreferrer'>
          View on Explorer
        </Button>
      </div>

      <h2 className='text-xl my-4'>Mint Progress</h2>
      <MintProgress collection={collection} />
    </div>
  );
};

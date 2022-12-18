import Button from '@/base/Button';
import { ITier } from '@/typings/types';

export interface IPriceTierProps {
  tier: ITier;
}

export const PriceTier = ({ tier }: IPriceTierProps) => {
  return (
    <div className='card bg-white shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>{tier.name}</h2>
        <p className='flex-grow'>{tier.description}</p>
        <p className='my-4 flex-grow-0'>
          <span className='text-4xl font-extrabold'>{tier.price}</span>{' '}
          <span className='text-base font-medium'>ETH</span>
        </p>
        <div className='card-actions'>
          <Button color='primary' size='md' shape='block' type='button'>
            Buy {tier.name}
          </Button>
        </div>
      </div>
    </div>
  );
};

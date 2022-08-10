import { ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import Button from '../../base/Button';
import { ZERO_ADDRESS } from '../../constants';

export interface IPureContractSearchProps {
  contractAddress: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onClick?: () => void;
  onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const PureContractSearch = ({
  contractAddress,
  onSubmit,
  onClick,
  onChangeInput,
  onKeyPress,
}: IPureContractSearchProps) => {
  return (
    <div className='text-center max-w-xl w-full py-16 sm:py-24 self-center'>
      <h2 className='text-3xl md:text-5xl font-extrabold text-primary-content sm:text-4xl'>
        NFT Collection
      </h2>

      <form onSubmit={onSubmit}>
        <label
          htmlFor='contractAddress'
          className='text-2xl text-primary-content mt-2 md:mt-3 mb-6 block'>
          search by name or contract address
        </label>

        <div className='flex space-x-3'>
          <input
            type='text'
            name='contractAddress'
            id='contractAddress'
            value={contractAddress}
            placeholder={ZERO_ADDRESS}
            onChange={onChangeInput}
            onKeyPress={onKeyPress}
            className='input input-bordered w-full input-lg z-10'
          />
          <Button color='secondary' size='lg' onClick={onClick}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

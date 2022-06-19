import { ChangeEvent, KeyboardEvent, FormEvent } from "react";
import { ZERO_ADDRESS } from "../../constants";

export interface PureContractSearchProps {
  contractAddress: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onClick?: () => void;
  onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const PureContractSearch = ({ contractAddress, onSubmit, onClick, onChangeInput, onKeyPress }: PureContractSearchProps) => {
  return (
    <div className="text-center max-w-xl mx-auto py-16 sm:py-24">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white sm:text-4xl">
        NFT Collection
      </h2>

      <form onSubmit={onSubmit}>
        <label htmlFor="contractAddress" className="text-xl text-green-100 mt-2 md:mt-3 mb-6 block">
          search by name or contract address
        </label>

        <div className="flex">
          <input
            type="text"
            name="contractAddress"
            id="contractAddress"
            value={contractAddress}
            placeholder={ZERO_ADDRESS}
            onChange={onChangeInput}
            onKeyPress={onKeyPress}
            className="block rounded-md flex-grow shadow-sm mr-3 z-10 border-2 border-green-700 focus:border-green-800 focus:ring-2 focus:ring-white text-sm md:text-base"
          />
          <button
            type="button"
            onClick={onClick}
            className="py-3 px-6 md:px-8 md:py-4 rounded-md font-medium text-green-100 bg-green-800 border border-green-700 focus:border-green-800 hover:bg-green-900 focus:z-10 focus:outline-none focus:ring-2 focus:ring-white">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
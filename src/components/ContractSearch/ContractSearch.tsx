import { ChangeEvent, KeyboardEvent, FormEvent } from "react";
import Button from "../../base/Button";
import { ZERO_ADDRESS } from "../../constants";

export interface IPureContractSearchProps {
  contractAddress: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onClick?: () => void;
  onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const PureContractSearch = ({ contractAddress, onSubmit, onClick, onChangeInput, onKeyPress }: IPureContractSearchProps) => {
  return (
    <div className="text-center max-w-xl mx-auto py-16 sm:py-24">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white sm:text-4xl">
        NFT Collection
      </h2>

      <form onSubmit={onSubmit}>
        <label htmlFor="contractAddress" className="text-xl text-primary-100 mt-2 md:mt-3 mb-6 block">
          search by name or contract address
        </label>

        <div className="flex space-x-3">
          <input
            type="text"
            name="contractAddress"
            id="contractAddress"
            value={contractAddress}
            placeholder={ZERO_ADDRESS}
            onChange={onChangeInput}
            onKeyPress={onKeyPress}
            className="input input-bordered bg-white w-full input-lg z-10"
          />
          <Button color="secondary" size="lg" onClick={onClick}>
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};
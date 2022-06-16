import { useState, ChangeEvent, KeyboardEvent, FormEvent } from "react";
import { ZERO_ADDRESS } from "../../constants";

export interface ContractSearchProps {
  onSearch?: (T: string) => void;
}

export const ContractSearch = ({ onSearch }: ContractSearchProps) => {
  const [contractAddress, setContractAddress] = useState<string>('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  const onClick = () => onSearch?.(contractAddress);
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => setContractAddress(e.target.value);
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => onEnter(e);

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(contractAddress);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="contractAddress" className="block mb-2">
        Contract Address
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
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-l-md flex-grow z-10"
        />
        <button
          type="button"
          onClick={onClick}
          className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
          Go
        </button>
      </div>
    </form>
  );
};
import { ChangeEvent, KeyboardEvent, FormEvent } from "react";
import useContractAddress from "../../hooks/useContractAddress";
import { PureContractSearch } from "./ContractSearch";


const ContractSearch = () => {
  const { contractAddress, setContractAddress } = useContractAddress();

  const onSearch = (address: string) => setContractAddress(address);
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
    <PureContractSearch
      contractAddress={contractAddress}
      onSubmit={onSubmit}
      onClick={onClick}
      onChangeInput={onChangeInput}
      onKeyPress={onKeyPress}
    />
  );
};

export default ContractSearch;
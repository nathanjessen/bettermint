import { Dispatch, SetStateAction, useState } from "react";

interface ReturnType {
  contractAddress: string;
  resetContractAddress: () => void;
  setContractAddress: Dispatch<SetStateAction<string>>;
}

export default function useContractAddress(initialValue?: string): ReturnType {
  const [contractAddress, setContractAddress] = useState<string>(initialValue || "");

  const resetContractAddress = () => setContractAddress(initialValue || "");

  return { contractAddress, resetContractAddress, setContractAddress };
}

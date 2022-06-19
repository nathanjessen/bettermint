import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ZERO_ADDRESS } from "../constants";
import { getExplorerLink } from '../utils/explorer';

interface ReturnType {
  explorer: string;
  txExplorer: string;
  tokenExplorer: string;
  blockExplorer: string;
  addressExplorer: string;
  resetExplorer: () => void;
  setExplorer: Dispatch<SetStateAction<string>>;
}

export default function useExplorer(initialValue?: string): ReturnType {
  const [explorer, setExplorer] = useState<string>(initialValue || '');
  const [txExplorer, setTxExplorer] = useState<string>(initialValue || '');
  const [tokenExplorer, setTokenExplorer] = useState<string>(initialValue || '');
  const [blockExplorer, setBlockExplorer] = useState<string>(initialValue || '');
  const [addressExplorer, setAddressExplorer] = useState<string>(initialValue || '');
  // TODO: replace with web3 value
  const chainId = 250;

  const resetExplorer = () => setExplorer(initialValue || '');

  useEffect(() => {
    // const data = address;
    // getExplorerLink(chainId, data, "transaction")
    // getExplorerLink(chainId, data, "token")
    let url = getExplorerLink(chainId, ZERO_ADDRESS, "address");
    setAddressExplorer(url);
    // getExplorerLink(chainId, data, "block")
  }, []);

  return {
    explorer,
    txExplorer,
    tokenExplorer,
    blockExplorer,
    addressExplorer,
    resetExplorer,
    setExplorer
  };
}
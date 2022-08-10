export type Collection = {
  name: string;
  symbol: string;
  totalSupply?: number;
  directory?: string;
  current?: number;
};

export const collections: Array<Collection> = [
  {
    name: 'Binary Punks',
    symbol: 'PUNKS',
    totalSupply: 9999,
    directory:
      'https://ipfs.io/ipfs/QmSZqMMGcAosPVKRVTo6Jydo5ZwkXMDSvWmsKiJuWzXAQX',
    current: 426,
  },
];

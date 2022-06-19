import { Network, ChainId } from "./network";

export const EXPLORER_URL: { [chainId in ChainId]: string } = {
  [Network.Mainnet]: "https://etherscan.io",
  [Network.Ropsten]: "https://ropsten.etherscan.io",
  [Network.Rinkeby]: "https://rinkeby.etherscan.io",
  [Network.Goerli]: "https://goerli.etherscan.io",
  [Network.Kovan]: "https://kovan.etherscan.io",
  [Network.BSC]: "https://bscscan.com",
  [Network.BSC_Testnet]: "https://testnet.bscscan.com",
  [Network.Polygon]: "https://polygonscan.com",
  [Network.Fantom]: "https://ftmscan.com",
  [Network.Fuji]: "https://explorer.avax-test.network",
  [Network.Avalanche]: "https://cchain.explorer.avax.network",
};

export const EXPLORER_URL_TX: { [chainId in ChainId]: string } = {
  [Network.Mainnet]: "/tx/",
  [Network.Ropsten]: "/tx/",
  [Network.Rinkeby]: "/tx/",
  [Network.Goerli]: "/tx/",
  [Network.Kovan]: "/tx/",
  [Network.BSC]: "/tx/",
  [Network.BSC_Testnet]: "/tx/",
  [Network.Polygon]: "/tx/",
  [Network.Fantom]: "/tx/",
  [Network.Avalanche]: "/tx/",
  [Network.Fuji]: "/tx/",
};

export const EXPLORER_URL_TOKEN: { [chainId in ChainId]: string } = {
  [Network.Mainnet]: "/token/",
  [Network.Ropsten]: "/token/",
  [Network.Rinkeby]: "/token/",
  [Network.Goerli]: "/token/",
  [Network.Kovan]: "/token/",
  [Network.BSC]: "/token/",
  [Network.BSC_Testnet]: "/token/",
  [Network.Polygon]: "/token/",
  [Network.Fantom]: "/token/",
  [Network.Avalanche]: "/tokens/",
  [Network.Fuji]: "/tokens/",
};

export const EXPLORER_URL_BLOCK: { [chainId in ChainId]: string } = {
  [Network.Mainnet]: "/block/",
  [Network.Ropsten]: "/block/",
  [Network.Rinkeby]: "/block/",
  [Network.Goerli]: "/block/",
  [Network.Kovan]: "/block/",
  [Network.BSC]: "/block/",
  [Network.BSC_Testnet]: "/block/",
  [Network.Polygon]: "/block/",
  [Network.Fantom]: "/block",
  [Network.Avalanche]: "/blocks/",
  [Network.Fuji]: "/blocks/",
};

export const EXPLORER_URL_ADDRESS: { [chainId in ChainId]: string } = {
  [Network.Mainnet]: "/address/",
  [Network.Ropsten]: "/address/",
  [Network.Rinkeby]: "/address/",
  [Network.Goerli]: "/address/",
  [Network.Kovan]: "/address/",
  [Network.BSC]: "/address/",
  [Network.BSC_Testnet]: "/address/",
  [Network.Polygon]: "/address/",
  [Network.Fantom]: "/address/",
  [Network.Avalanche]: "/address/",
  [Network.Fuji]: "/address/",
};

// https://docs.opensea.io/docs/metadata-standards
export interface IMetadata {
  image?: string;
  image_data?: string;
  external_url?: string;
  description?: string;
  name?: string;
  attributes?: Array<any>;
  background_color?: string;
  animation_url?: string;
  youtube_url?: string;
}

export interface IItem {
  mint: string | number;
  data: IMetadata;
}

export interface ICollection {
  name: string;
  symbol: string;
  totalSupply?: string | number;
  tokenURI?: string;
  directory?: string;
  metadata?: string;
  api?: string;
  current?: string | number;
}

export interface ITier {
  name: string;
  description: string;
  price: number;
}

export interface IBenefit {
  title: string;
  description: string;
}

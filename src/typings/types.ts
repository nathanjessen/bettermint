export interface IItem {
    mint: string;
    data: any;
}

export interface ICollection {
    name: string;
    symbol: string;
    totalSupply?: string | number;
    description?: string;
    attributes?: any;
    current?: string | number;
    directory?: string;
    metadata?: string;
    api?: string;
}

export interface ITier {
    name: string;
    description: string;
    price: number;
}

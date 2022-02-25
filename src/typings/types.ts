export interface Item {
    mint: string;
    data: any;
}

export interface ICollection {
    name: string;
    description?: string;
    directory?: string;
    metadata?: string;
    api?: string;
    attributes?: any;
    current?: string | number;
    max?: string | number;
}

export interface ITier {
    name: string;
    description: string;
    price: number;
    href: string;
}

import { ITier } from '../typings/types';

export const tiers: Array<ITier> = [
  {
    name: 'Basic',
    description: 'View the upcoming 10 mints until minting is complete.',
    price: 0.1,
    href: '#',
  },
  {
    name: 'Standard',
    description: 'View the upcoming 25 mints until minting is complete.',
    price: 0.15,
    href: '#',
  },
  {
    name: 'Essential',
    description: 'View the upcoming 50 mints until minting is complete.',
    price: 0.2,
    href: '#',
  },
  {
    name: 'Premium',
    description: 'View all remaining mints.',
    price: 0.25,
    href: '#',
  },
];

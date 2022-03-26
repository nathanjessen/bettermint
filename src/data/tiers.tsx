import { ITier } from '../typings/types';

export const tiers: Array<ITier> = [
  {
    name: 'Free',
    description: 'View the upcoming 1 mint until minting is complete.',
    price: 0,
  },
  {
    name: 'Basic',
    description: 'View the upcoming 10 mints until minting is complete.',
    price: 0.05,
  },
  {
    name: 'Essential',
    description: 'View the upcoming 25 mints until minting is complete.',
    price: 0.075,
  },
  {
    name: 'Premium',
    description: 'View all remaining mints.',
    price: 0.2,
  },
];

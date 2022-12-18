import { collections } from '@/data/collections';
import { Meta } from '@storybook/react';
import { PureMintProgress } from './MintProgress';

export default {
  title: 'Components/PureMintProgress',
  component: PureMintProgress,
} as Meta;

export const Collection = {
  args: {
    collection: collections[0],
  },
};

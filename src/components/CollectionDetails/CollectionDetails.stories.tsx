import { collections } from '@/data/collections';
import { Meta } from '@storybook/react';
import { CollectionDetails } from './CollectionDetails';

export default {
  title: 'Components/CollectionDetails',
  component: CollectionDetails,
} as Meta;

export const Default = {
  args: {
    collection: collections[0],
  },
};

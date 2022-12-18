import { ZERO_ADDRESS } from '@/constants/index';
import { items } from '@/data/items';
import { Meta } from '@storybook/react';
import { ItemGrid } from './ItemGrid';

export default {
  title: 'Components/ItemGrid',
  component: ItemGrid,
  args: {
    contractAddress: ZERO_ADDRESS,
  },
} as Meta;

export const Default = {
  args: {},
};

export const RecentItems = {
  args: {
    items: items.slice(0, 5),
  },
};

export const Directory = {
  args: {
    directory: 'directoryname',
  },
};

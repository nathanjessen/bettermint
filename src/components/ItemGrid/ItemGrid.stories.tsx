import { Meta, Story } from '@storybook/react';
import { ZERO_ADDRESS } from '../../constants';
import { items } from '../../data/items';
import { IItemGridProps, ItemGrid } from './ItemGrid';

export default {
  title: 'Components/ItemGrid',
  component: ItemGrid,
  args: {
    contractAddress: ZERO_ADDRESS,
  },
} as Meta;

const Template: Story<IItemGridProps> = (args) => <ItemGrid {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const RecentItems = Template.bind({});
RecentItems.args = {
  items: items.slice(0, 5),
};

export const Directory = Template.bind({});
Directory.args = {
  directory: 'directoryname',
};

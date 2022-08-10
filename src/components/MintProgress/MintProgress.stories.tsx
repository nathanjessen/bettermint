import { Meta, Story } from '@storybook/react';
import { collections } from 'data/collections';
import { IPureMintProgressProps, PureMintProgress } from './MintProgress';

export default {
  title: 'Components/PureMintProgress',
  component: PureMintProgress,
} as Meta;

const Template: Story<IPureMintProgressProps> = (args) => (
  <PureMintProgress {...args} />
);

export const Collection = Template.bind({});
Collection.args = {
  collection: collections[0],
};

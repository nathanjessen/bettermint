import { Story, Meta } from '@storybook/react';
import { collections } from '../../data/collections';
import { PureMintProgress, IPureMintProgressProps } from './MintProgress';

export default {
  title: "Components/PureMintProgress",
  component: PureMintProgress,
} as Meta;

const Template: Story<IPureMintProgressProps> = (args) => <PureMintProgress {...args} />;

export const Collection = Template.bind({});
Collection.args = {
  collection: collections[0],
};

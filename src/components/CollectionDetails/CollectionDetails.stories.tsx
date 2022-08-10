import { Meta, Story } from '@storybook/react';

import { collections } from 'data/collections';
import {
  CollectionDetails,
  ICollectionDetailsProps,
} from './CollectionDetails';

export default {
  title: 'Components/CollectionDetails',
  component: CollectionDetails,
} as Meta;

const Template: Story<ICollectionDetailsProps> = (args) => (
  <CollectionDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  collection: collections[0],
};

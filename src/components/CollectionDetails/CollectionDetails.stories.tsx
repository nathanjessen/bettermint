import { Story, Meta } from '@storybook/react';

import { CollectionDetails, ICollectionDetailsProps } from './CollectionDetails';
import { collections } from '../../data/collections';

export default {
  title: "Components/CollectionDetails",
  component: CollectionDetails,
} as Meta;

const Template: Story<ICollectionDetailsProps> = (args) => <CollectionDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  collection: collections[0]
};

import { Story, Meta } from '@storybook/react';

import { unorderedList } from '../../../.storybook/decorators';
import { BenefitListItem, BenefitListItemProps } from './BenefitListItem';

export default {
  title: "Components/BenefitListItem",
  component: BenefitListItem,
  decorators: [unorderedList]
} as Meta;

const Template: Story<BenefitListItemProps> = (args) => <BenefitListItem {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const Content = Template.bind({});
Content.args = {
  title: 'Preview',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
};

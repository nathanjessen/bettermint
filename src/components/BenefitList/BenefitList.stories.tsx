import { Meta, Story } from '@storybook/react';

import { BenefitList, BenefitListProps } from './BenefitList';

export default {
  title: 'Components/BenefitList',
  component: BenefitList,
} as Meta;

const Template: Story<BenefitListProps> = (args) => <BenefitList {...args} />;

export const Default = Template.bind({});
Default.args = {};

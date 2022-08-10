import { Meta, Story } from '@storybook/react';

import { Pricing } from './Pricing';

export default {
  title: 'Pages/Pricing',
  component: Pricing,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = (args) => <Pricing {...args} />;

export const Default = Template.bind({});
Default.args = {};

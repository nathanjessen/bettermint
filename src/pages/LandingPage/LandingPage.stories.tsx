import { Meta, Story } from '@storybook/react';

import { LandingPage } from './LandingPage';

export default {
  title: 'Pages/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = (args) => <LandingPage {...args} />;

export const Default = Template.bind({});
Default.args = {};

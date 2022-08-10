import { Meta, Story } from '@storybook/react';
import { EmptyCard } from './EmptyCard';

export default {
  title: 'Components/EmptyCard',
  component: EmptyCard,
} as Meta;

const Template: Story = (args) => <EmptyCard {...args} />;

export const Default = Template.bind({});
Default.args = {};

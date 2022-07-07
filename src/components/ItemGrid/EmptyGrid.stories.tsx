import { Story, Meta } from '@storybook/react';
import { EmptyGrid } from './EmptyGrid';

export default {
  title: "Components/EmptyGrid",
  component: EmptyGrid,
} as Meta;

const Template: Story = (args) => <EmptyGrid {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Count = Template.bind({});
Count.args = {
  count: 5,
};

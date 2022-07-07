import { Story, Meta } from '@storybook/react';

import { SearchResults } from './SearchResults';

export default {
  title: "Pages/SearchResults",
  component: SearchResults,
  parameters: {
    layout: 'fullscreen',
  }
} as Meta;

const Template: Story = (args) => <SearchResults {...args} />;

export const Default = Template.bind({});
Default.args = {};

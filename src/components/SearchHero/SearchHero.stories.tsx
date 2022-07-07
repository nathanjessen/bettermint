import { Story, Meta } from '@storybook/react';

import { SearchHero } from './SearchHero';

export default {
  title: "Components/SearchHero",
  component: SearchHero,
} as Meta;

const Template: Story = (args) => <SearchHero {...args} />;

export const Default = Template.bind({});
Default.args = {};

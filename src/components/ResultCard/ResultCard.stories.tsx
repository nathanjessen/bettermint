import { Story, Meta } from '@storybook/react';
import { items } from '../../data/items';

import { ResultCard, IResultCardProps } from './ResultCard';

export default {
  title: "Components/ResultCard",
  component: ResultCard,
  args: {
    item: items[0]
  }
} as Meta;

const Template: Story<IResultCardProps> = (args) => <ResultCard {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Directory = Template.bind({});
Directory.args = {
  directory: 'directoryPath',
};

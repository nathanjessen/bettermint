import { Meta, Story } from '@storybook/react';
import { items } from '../../data/items';

import { IResultCardProps, ResultCard } from './ResultCard';

export default {
  title: 'Components/ResultCard',
  component: ResultCard,
  args: {
    item: items[0],
  },
} as Meta;

const Template: Story<IResultCardProps> = (args) => <ResultCard {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Directory = Template.bind({});
Directory.args = {
  directory: 'directoryPath',
};

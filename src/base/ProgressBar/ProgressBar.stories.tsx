import { Meta, Story } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
  title: 'Base/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ProgressSingle = Template.bind({});
ProgressSingle.args = {
  progress: 1,
};

export const ProgressHalf = Template.bind({});
ProgressHalf.args = {
  progress: 50,
};

export const Progress99 = Template.bind({});
Progress99.args = {
  progress: 99,
};

export const ProgressFull = Template.bind({});
ProgressFull.args = {
  progress: 100,
};

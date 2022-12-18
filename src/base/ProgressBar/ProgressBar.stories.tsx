import { Meta } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

export default {
  title: 'Base/ProgressBar',
  component: ProgressBar,
} as Meta;

export const Default = {
  args: {},
};

export const ProgressSingle = {
  args: {
    progress: 1,
  },
};

export const ProgressHalf = {
  args: {
    progress: 50,
  },
};

export const Progress99 = {
  args: {
    progress: 99,
  },
};

export const ProgressFull = {
  args: {
    progress: 100,
  },
};

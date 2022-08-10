import { DecoratorFn } from '@storybook/react';

export const unorderedList: DecoratorFn = (Story) => (
  <ul>
    <Story />
  </ul>
);

export const orderedList: DecoratorFn = (Story) => (
  <ol>
    <Story />
  </ol>
);

import { DecoratorFn } from '@storybook/react';
import { ThemeProvider } from '../src/state/ThemeContext';

export const themeProvider: DecoratorFn = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);

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

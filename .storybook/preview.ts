import '../src/styles/tailwind.output.css';

export const parameters = {
  backgrounds: { disable: true },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const tags = ['autodocs'];

import { themes } from "../src/constants/themes";
import "../src/styles/tailwind.output.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  // theme: {
  //   name: "Theme",
  //   description: "Global theme for components",
  //   defaultValue: "light",
  //   toolbar: {
  //     icon: "mirror",
  //     items: themes,
  //     showName: true,
  //   },
  // },
  themes: {
    defaultValue: themes,
  },
};

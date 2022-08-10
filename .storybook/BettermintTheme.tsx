import { create } from '@storybook/theming';
import colors from 'tailwindcss/colors';
// import BrandLogo from '../public/logo32.png';

export default create({
  base: 'light',

  colorPrimary: colors.green[500],
  colorSecondary: colors.indigo[500],

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  appBorderColor: colors.gray[100],
  appBorderRadius: 4,

  // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  // Branding
  brandTitle: 'Bettermint',
  // brandUrl: "https://bettermint.io",
  // brandImage: BrandLogo,
  brandTarget: '_self',
});

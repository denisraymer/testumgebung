import { create } from '@storybook/theming';

const palette = {
  accent: '#E52670',
  secondary: '#060606',
  main: '#030303',
  light: '#686868'
}

export default create({
  base: 'dark',

  colorPrimary: palette.accent,
  colorSecondary: palette.accent,

  appBg: palette.main,
  appBorderColor: palette.light,
  appContentBg: palette.secondary,

  barTextColor: '#fff',
  barSelectedColor: palette.accent,
  barBg: palette.main,
});

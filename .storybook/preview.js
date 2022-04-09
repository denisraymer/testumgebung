import { themes } from '@storybook/theming';

// import YourTheme from './YourTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  docs: {
    // theme: YourTheme,
    // theme: themes.dark,
    theme: themes.light,
  }
}

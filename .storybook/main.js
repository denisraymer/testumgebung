module.exports = {
  "stories": [
    "../shared/src/storybook/**/*.stories.mdx",
    "../shared/src/storybook/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  }
};

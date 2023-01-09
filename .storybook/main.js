const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.mdx",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/preset-scss"
  ],
  features: {
    storyStoreV7: true,
  },
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
      "@styles": path.resolve(__dirname, "../styles/"),
      "@atoms": path.resolve(__dirname, "../components/atoms/"),
      "@molecules": path.resolve(__dirname, "../components/molecules/"),
      "@organisms": path.resolve(__dirname, "../components/organisms/"),
    };
    
    return config;
  },
};

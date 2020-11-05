module.exports = ({ env = "js" }) => {
  return {
    env: {
      node: true,
      browser: true,
    },
    globals: {
      document: "readonly",
      navigator: "readonly",
      window: "readonly",
    },
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: "module",
      ...(env === "js" ? { ecmaFeatures: { jsx: true } } : {}),
    },
    settings: {
      react: {
        createClass: "createReactClass",
        pragma: "React",
        version: "detect",
      },
    },
  };
};

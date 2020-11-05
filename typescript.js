const getBaseOptions = require("./get-base-options");

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["./recommends", "./recommends/typescript"].map((e) =>
    require.resolve(e)
  ),
  ...getBaseOptions({ env: "ts" }),
  plugins: [
    "jsx-a11y",
    "react",
    "react-hooks",
    "import",
    "node",
    "promise",
    "standard",
    "@typescript-eslint",
  ],
  rules: {},
};

const configs = require("./index");

it("defines correct rules for React", () => {
  expect(configs.configs.react).toStrictEqual({
    env: { browser: true, es6: true },
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
    ],
    overrides: [
      { env: { jest: true }, files: ["**/*.test.tsx?", "**/*.spec.tsx?"] },
      {
        env: { node: true },
        files: ["jest.config.js", "next.config.js"],
        rules: { "@typescript-eslint/no-var-requires": "off" },
      },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: { jsx: true },
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: ["@typescript-eslint", "simple-import-sort", "prettier", "react"],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      eqeqeq: [2, "smart"],
      "import/order": "off",
      "react/prop-types": "off",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^\\u0000"], ["^@?\\w"], ["^@cazoo"], ["^[^.]"], ["^\\."]],
        },
      ],
      "sort-imports": "off",
    },
    settings: { react: { version: "detect" } },
  });
});

it("defines correct rules for Node", () => {
  expect(configs.configs.node).toStrictEqual({
    env: { es6: true, node: true },
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    overrides: [
      { env: { jest: true }, files: ["**/*.test.tsx?", "**/*.spec.tsx?"] },
      {
        env: { node: true },
        files: ["jest.config.js", "next.config.js"],
        rules: { "@typescript-eslint/no-var-requires": "off" },
      },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: 2018, sourceType: "module" },
    plugins: ["@typescript-eslint", "simple-import-sort", "prettier"],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      eqeqeq: [2, "smart"],
      "import/order": "off",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^\\u0000"], ["^@?\\w"], ["^@cazoo"], ["^[^.]"], ["^\\."]],
        },
      ],
      "sort-imports": "off",
    },
  });
});

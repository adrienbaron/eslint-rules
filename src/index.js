const deepMerge = require("deepmerge");

const baseConfig = {
  env: {
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "prettier"],
  rules: {
    eqeqeq: [2, "smart"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ["^@?\\w"],
          // Cazoo packages
          ["^@cazoo"],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything that does not start with a dot.
          ["^[^.]"],
          // Relative imports.
          // Anything that starts with a dot.
          ["^\\."],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.test.tsx?", "**/*.spec.tsx?"],
      env: {
        jest: true,
      },
    },
    {
      files: ["jest.config.js", "next.config.js"],
      env: {
        node: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};

module.exports = {
  configs: {
    react: deepMerge(baseConfig, {
      env: { browser: true },
      plugins: ["react"],
      rules: { "react/prop-types": "off" },
      extends: [
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    }),
    node: deepMerge(baseConfig, {
      env: {
        node: true,
      },
    }),
  },
};

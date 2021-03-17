const baseConfig = {
  "env": {
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "simple-import-sort", "prettier"],
  "rules": {
    "eqeqeq": [2, "smart"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/imports": ["error", {
      "groups": [
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
        ["^\\."]
      ]
    }]
  },
  "overrides": [
    {
      "files": ["**/*.test.tsx?", "**/*.spec.tsx?"],
      "env": {
        "jest": true
      },
    }
  ]
}

module.exports = {
  configs: {
    react: {
      ...baseConfig,
      "env": {
        ...baseConfig.env,
        "browser": true,
      },
      "extends": [
        ...baseConfig.extends,
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
      ],
      "parserOptions": {
        ...baseConfig.parserOptions,
        "ecmaFeatures": {
          "jsx": true
        },
      },
      "rules": {
        ...baseConfig.rules,
        "react/prop-types": "off",
      },
      "plugins": ["react", ...baseConfig.plugins],
      "settings": {
        "react": {
          "version": "detect"
        }
      }
    },
    node: {
      ...baseConfig,
      "env": {
        ...baseConfig.env,
        "node": true,
      },
    }
  }
}

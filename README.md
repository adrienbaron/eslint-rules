# Cazoo ESLint

## What's this?

It's an NPM package providing an opinionated ESLint configuration to use at Cazoo.
It exposes two ESLint presets:

- `plugin:@cazoo-uk/eslint/react` for React based applications
- `plugin:@cazoo-uk/eslint/node` for Node.js applications

## Why do we want this?

We have quite coherent dev stack at Cazoo (React/TypeScript/Node/Jest), and most projects are set up with ESLint and Prettier.
This package aims at avoiding all the duplication between teams.

This does not aim at being the true and only way.
Teams are more than welcome to extend this in their project and enable/disable rules.
PRs are also welcome if there are some useful rules/plugins that we could add to benefit everyone.

## What does it setup?

- [Prettier](https://prettier.io/) running as part of ESLint
- [TypeScript ESLint plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) for TypeScript support
- [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort) to automatically sort dependencies

When using React ⚛️:

- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) for rules regarding React
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) for rules regarding accessibility best practices

It also tells ESLint that `jest` exists in `.test.ts(x)` and `.spec.ts(x)` files. 

## How do I use it?

First install `@cazoo-uk/eslint-plugin-eslint` and `eslint` as dev dependencies:

```bash
npm i -D @cazoo-uk/eslint-plugin-eslint eslint@7
```

Then add an `.eslintrc.json` config file to the root of your project:

**For a React ⚛️ app use:**

```json
{
  "extends": [
    "plugin:@cazoo-uk/eslint/react"
  ]
}
```

**For a Node.js app (like an API) use:**

```json
{
  "extends": [
    "plugin:@cazoo-uk/eslint/node"
  ]
}
```

Finally, add a `lint` rule to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint --fix 'src/**/*.{ts,tsx}'"
  }
}
```

To lint and fix your project you can now run:

```bash
npm run lint
```

## Pre commit hooks

If you wish to enforce running ESLint before commits you can use [Husky 🐶](https://github.com/typicode/husky/tree/master).

First install `husky` as a dev dependency:

```bash
npm i -D husky@4
```

⚠️ Husky 5 licence doesn't allow use in non open-source project.
Please use Husky 4.x!

Then add `Husky` configuration in your `package.json`:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix"
    ]
  }
}
```

This will only run ESLint on the files that are about to be committed, so it should be quite fast ⚡️! 

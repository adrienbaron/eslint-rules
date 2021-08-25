# Releasing a new version

- Do your changes
- Increase the package version by running:
  
```bash
npm --no-git-tag-version version <patch|minor|major>
```

- Create PR with your changes

Once the PR is merged:

```
git checkout main && git pull
NEW_VERSION="$(npx -c 'echo "$npm_package_version"')"
git tag -a "v$NEW_VERSION" -m "v$NEW_VERSION"
git push --follow-tags
```

This will trigger a [build on CircleCI](https://app.circleci.com/pipelines/github/Cazoo-uk/cazoo-eslint) that will deploy the new npm package.

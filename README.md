## Discountor

a discount engine that applies various promotional discounts to a user's shopping cart based on a configurable set of rules.

## Requirements

This project requires:

- **Node.js**: >= 24
- **npm**: >= 11

Engine validation is enforced at three levels:

| Layer        | File                   | When Checked            | Description                                                 |
| ------------ | ---------------------- | ----------------------- | ----------------------------------------------------------- |
| Install-time | `.npmrc`               | `npm install`           | `engine-strict=true` makes npm fail if versions don't match |
| Manual       | `package.json` scripts | `npm run check:engines` | Runs version checks via npm scripts                         |
| Runtime      | `src/main.ts`          | App startup             | Validates engines before NestJS bootstraps                  |

The `packageManager` field is set to `npm@11.2.0` to ensure consistent package management across environments.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Git

This project uses three main branches:

| Branch    | Purpose             | Default |
| --------- | ------------------- | ------- |
| `develop` | Development         | ✅      |
| `staging` | Pre-production      | ❌      |
| `prod`    | Production releases | ❌      |

### Branch Protection Rules

All three branches have the following protections enabled:

- **Protected from deletion**
- **Linear history required**
- **Deployments must succeed**
- **Pull request required before merging**
- **Status checks must pass**
- **Force pushes blocked**
- **Branches must be up to date before merging**
- **Squash merge only**

### Rules

- PRs should target the `develop` branch only (the default branch).

### General Guidelines

- Commits and branches must be **atomic** — each should contain only one logical change.
- Commit messages should be **meaningful** and clearly describe the change.

### Tips for Faster PR Workflow

Install the [GitHub CLI](https://cli.github.com/) for faster PR management:

```bash
# Create a pull request
gh pr create

# Squash merge a pull request
gh pr merge --squash
```

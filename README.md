## Discountor

a discount engine that applies various promotional discounts to a user's shopping cart based on a configurable set of rules.

## Table of Contents

- [Requirements](#requirements)
- [Project setup](#project-setup)
- [Compile and run the project](#compile-and-run-the-project)
- [Run tests](#run-tests)
- [Git](#git)
- [VS Code Extensions](#vs-code-extensions)
- [VS Code Settings](#vs-code-settings)

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

### Using nvm (recommended)

For easier Node.js and npm version switching in non-containerized environments, use [nvm](https://github.com/nvm-sh/nvm):

```bash
# Install nvm (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Install and use the required Node.js and npm versions
nvm install
nvm use
```

The project includes an `.nvmrc` file, so nvm will automatically use the correct Node.js and npm versions.

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

### Starting a New Task

```bash
git checkout develop
git pull
npm install
git checkout -b your-branch-name
```

### Tips for Faster PR Workflow

Install the [GitHub CLI](https://cli.github.com/) for faster PR management:

```bash
# Create a pull request
gh pr create

# Squash merge a pull request
gh pr merge --squash
```

## VS Code Extensions

This project includes a `.vscode/extensions.json` file with recommended extensions for an optimal development experience. When you open the project in VS Code, you'll be prompted to install them.

| Extension                               | Purpose                                           |
| --------------------------------------- | ------------------------------------------------- |
| `streetsidesoftware.code-spell-checker` | Spell checking for code and comments              |
| `dbaeumer.vscode-eslint`                | ESLint integration for linting                    |
| `esbenp.prettier-vscode`                | Prettier integration for code formatting          |
| `eamodio.gitlens`                       | Enhanced Git capabilities and history             |
| `usernamehw.errorlens`                  | Inline display of errors and warnings             |
| `YoavBls.pretty-ts-errors`              | Improved TypeScript error messages                |
| `codeandstuff.package-json-upgrade`     | Shows available package updates in `package.json` |

## VS Code Settings

The `.vscode/settings.json` file configures consistent editor behavior across all contributors, including formatting, linting, and TypeScript preferences.

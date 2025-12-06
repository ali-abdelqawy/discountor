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

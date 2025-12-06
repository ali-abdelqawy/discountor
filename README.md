## Discountor

a discount engine that applies various promotional discounts to a user's shopping cart based on a configurable set of rules.

## Requirements (Non-Docker Setup)

For non-Docker setup, this project requires:

- **Node.js**: >= 24
- **npm**: >= 11

The `engines` field enforces these minimum versions, and `packageManager` is set to `npm@11.2.0` to ensure consistent package management across environments.

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

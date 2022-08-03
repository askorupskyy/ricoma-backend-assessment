# Overview

Simple store with minimum authentication and authorization implementation.
The store will consist of the following entities `users`, `stores`, `products`, `colors`, `sizes`.
A user can be a **store owner** or a **customer**. As a store owner you will be
allowed to run mutations against your stores and products and as a customer you will be able to read from them.
Each store will carry several products and each product will be related to one color and a size.

## Tech stack

- Typescript
- NestJs
- MySQL (You're free to choose a different connection type, however everything is setup for `mysql` for you!)
- TypeORM
- GraphQL

## What you need

- Make sure you have MySQL installed in your system
- NodeJs (This app was built and tested with v16.16.0. You can easily install it with [ nvm ](https://github.com/nvm-sh/nvm))
- [ yarn ](https://yarnpkg.com/) (You could use another package manager, however `yarn` is recommended!)

## Complete these steps before you get started

- create MySQL database e.g. ricoma_assessment (needed for the next step)
- rename .env.example -> .env and setup variables in accordance to your system (specially your db connection)
- `yarn`
- `yarn migration:run`
- `yarn commands:seed --once`

## Running app

`yarn start:dev`

## What's already built

We've completed the **user**, **store**, and **auth** services alongside with their resolvers.
Also a CLI application (Built with [nest commander](https://nest-commander.jaymcdoniel.dev/)) has been provided under `src/commands/`
you can use it to run initial seeds as well as add extra commands if necessary to seed other tables e.g. products, colors, sizes ...

## What needs to be built (Tasks)

+ Products (services, resolvers, entity, ...)
+ Colors (services, resolvers, entity, ...)
+ Sizes (services, resolvers, entity, ...)
+ Create migrations for new tables e.g. products, colors, sizes...
+ Add extra commands to CLI in order seed new tables e.g. products, colors, sizes...
+ Implement authorization to `user` resolvers as only users with `admin` role should have access
- Add authorization to `store` and `products`. Only store owners should be able to run mutations, other users should have read access.
  In order to achieve this you could use a lib such as [CASL](https://casl.js.org/v5/en/)
- **BONUS** Implement [GraphQL queries complexity](https://docs.nestjs.com/graphql/complexity)

## How to handle migrations

We've written the following commands to deal with migrations:

- `yarn run migration:create <migration name>`
- `yarn run migration:generate <migration name>`
- `yarn run migration:run`

> Migrations will be placed under src/database/migrations/

## How to send authorized request

The app implements a global guard that requires everyone to send an authorization token
in the headers of the request unless the resolvers are decorated with @Public() decorator.
You can see an example of its usage in the auth.resolver.ts.

In order to receive tokens you can call the `login` mutation with the user's email and password.
The returned payload will provide the access token required for each request. There's also a
refresh mutation in order to request a new access token before expiration.

> For those routes that require authorization send a token in the headers
> in the this format `Authorization: Bearer token`

## Tips

- You may find `TODO` annotations across the app in order to make it easier to follow requirements.
- The GraphQL playground can be accessed at `http://localhost:4000/graphql`. From this UI you'll be able
  to inspect the GraphQL schema, types, queries and mutations.

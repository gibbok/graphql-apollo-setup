# GraphQL with TypeScript and Apollo example

This is an example of GraphQL with TypeScript using Apollo tools.

It demostrated how to autogenerate Typescript types and custom React hooks in React applications with GraphQL Code Generator.

Futhermore this example demostarete a Turborepo setup.

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app
- `server`: GraphQL server implementation based on Apollo
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```shell
cd apps
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```shell
cd apps
npm run dev
```

### Developers tools

| Package  |Command  | Description  |
|---|---|---|
| server  | generate | Generate Types and Hooks from graphql schema  |
| server  | start | Run the server  |
| server  | compile | compile the server  |
| web  | start  | Run the Web app   |
| web  | build | Build the Web app   |

### Extensions

- [GraphQL: Language Feature Support](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
- [GraphQL: Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax)
- [Apollo Client Devtools](https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm)

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```shell
cd ./apps
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```shell
npx turbo link
```

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { Book, Resolvers } from './__generated__/types';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

// Note: this uses a path relative to the project's
// root directory, which is the current working directory
// if the server is executed using `npm run`.
const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf-8' });

const DATA_BOOKS: Array<Book> = [
    {
        id: 'b1',
        title: 'The Awakening',
        author: 'Kate Chopin',
        info: {
            reviewsCount: 2,
            score: 8
        }
    },
    {
        id: 'b2',
        title: 'City of Glass',
        author: 'Paul Auster',
        info: {
            reviewsCount: 2,
            score: 8
        }
    },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers: Resolvers = {
    Query: {
        books: () => DATA_BOOKS,
    },
};

export interface MyContext {
    // You can optionally create a TS interface to set up types
    // for your contextValue
    authScope?: String;
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
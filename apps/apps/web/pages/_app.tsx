import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, Operation, NextLink, SingleExecutionResult } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const BASE_URI = "http://localhost:4000/"

const httpLink = new HttpLink({ uri: BASE_URI });

const transformResponse = (operation: Operation, forward: NextLink) => {
    const observable = forward(operation).map((response) => {
        if (response.data) {
            switch (operation.operationName) {
                case 'GetBooks':
                    const responseUI = {
                        ...response,
                        data: {
                            books: response.data.books.map(x => ({
                                id: x.id,
                                title: x.title.toUpperCase(),
                                author: x.author,
                                score: x.info.score
                            }))
                        }
                    };
                    return responseUI
                case 'GetReaders':
                    return response
            }
        } else {
            return response;
        }
    });
    return observable

}

const link = ApolloLink.from([transformResponse, httpLink]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    customBooks: {
                        read(books, options) {
                            const booksFromCache = options.readField('books')
                            // TODO
                            return booksFromCache
                        }
                    }
                },
            },
        },
    }),
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (<ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>)
}
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, Operation, NextLink, SingleExecutionResult } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { Book } from '../../server/src/__generated__/queries';

const BASE_URI = "http://localhost:4000/"

const httpLink = new HttpLink({ uri: BASE_URI });

const transformResponse = (operation: Operation, forward: NextLink) => {
    const r = forward(operation).map((response: SingleExecutionResult<{ books: ReadonlyArray<Book> }>) => {
        if (response.data) {
            return {
                ...response,
                data: {
                    books: response.data.books.map(x => ({
                        ...x,
                        title: x.title.toUpperCase() + ' XXX'
                    }))
                }
            };
        } else {
            return response;
        }
    });
    debugger
    return r
};

const link = ApolloLink.from([transformResponse, httpLink]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (<ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>)
}
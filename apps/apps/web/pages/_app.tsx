import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (<ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>)
}
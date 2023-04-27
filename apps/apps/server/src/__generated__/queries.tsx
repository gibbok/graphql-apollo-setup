import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddBookMutationResponse = {
  __typename?: 'AddBookMutationResponse';
  book?: Maybe<Book>;
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  id: Scalars['ID'];
  info: Info;
  title: Scalars['String'];
};

export type Info = {
  __typename?: 'Info';
  reviewsCount: Scalars['Int'];
  score: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook?: Maybe<AddBookMutationResponse>;
};


export type MutationAddBookArgs = {
  author?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  customBooks?: Maybe<Array<Maybe<Book>>>;
  readers?: Maybe<Array<Maybe<Reader>>>;
};

export type Reader = {
  __typename?: 'Reader';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', id: string, author: string, title: string, info: { __typename?: 'Info', score: number } } | null> | null };

export type GetReadersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReadersQuery = { __typename?: 'Query', readers?: Array<{ __typename?: 'Reader', id: string, name?: string | null } | null> | null };

export type GetCustomBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomBooksQuery = { __typename?: 'Query', customBooks?: Array<{ __typename?: 'Book', id: string, title: string } | null> | null };


export const GetBooksDocument = gql`
    query GetBooks {
  books {
    id
    author
    title
    info {
      score
    }
  }
}
    `;
export type GetBooksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBooksQuery, GetBooksQueryVariables>, 'query'>;

    export const GetBooksComponent = (props: GetBooksComponentProps) => (
      <ApolloReactComponents.Query<GetBooksQuery, GetBooksQueryVariables> query={GetBooksDocument} {...props} />
    );
    
export type GetBooksProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBooksQuery, GetBooksQueryVariables>
    } & TChildProps;
export function withGetBooks<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBooksQuery,
  GetBooksQueryVariables,
  GetBooksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBooksQuery, GetBooksQueryVariables, GetBooksProps<TChildProps, TDataName>>(GetBooksDocument, {
      alias: 'getBooks',
      ...operationOptions
    });
};

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;
export const GetReadersDocument = gql`
    query GetReaders {
  readers {
    id
    name
  }
}
    `;
export type GetReadersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetReadersQuery, GetReadersQueryVariables>, 'query'>;

    export const GetReadersComponent = (props: GetReadersComponentProps) => (
      <ApolloReactComponents.Query<GetReadersQuery, GetReadersQueryVariables> query={GetReadersDocument} {...props} />
    );
    
export type GetReadersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetReadersQuery, GetReadersQueryVariables>
    } & TChildProps;
export function withGetReaders<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetReadersQuery,
  GetReadersQueryVariables,
  GetReadersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetReadersQuery, GetReadersQueryVariables, GetReadersProps<TChildProps, TDataName>>(GetReadersDocument, {
      alias: 'getReaders',
      ...operationOptions
    });
};

/**
 * __useGetReadersQuery__
 *
 * To run a query within a React component, call `useGetReadersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReadersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReadersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReadersQuery(baseOptions?: Apollo.QueryHookOptions<GetReadersQuery, GetReadersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReadersQuery, GetReadersQueryVariables>(GetReadersDocument, options);
      }
export function useGetReadersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReadersQuery, GetReadersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReadersQuery, GetReadersQueryVariables>(GetReadersDocument, options);
        }
export type GetReadersQueryHookResult = ReturnType<typeof useGetReadersQuery>;
export type GetReadersLazyQueryHookResult = ReturnType<typeof useGetReadersLazyQuery>;
export type GetReadersQueryResult = Apollo.QueryResult<GetReadersQuery, GetReadersQueryVariables>;
export const GetCustomBooksDocument = gql`
    query GetCustomBooks {
  customBooks @client {
    id
    title
  }
}
    `;
export type GetCustomBooksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCustomBooksQuery, GetCustomBooksQueryVariables>, 'query'>;

    export const GetCustomBooksComponent = (props: GetCustomBooksComponentProps) => (
      <ApolloReactComponents.Query<GetCustomBooksQuery, GetCustomBooksQueryVariables> query={GetCustomBooksDocument} {...props} />
    );
    
export type GetCustomBooksProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetCustomBooksQuery, GetCustomBooksQueryVariables>
    } & TChildProps;
export function withGetCustomBooks<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCustomBooksQuery,
  GetCustomBooksQueryVariables,
  GetCustomBooksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetCustomBooksQuery, GetCustomBooksQueryVariables, GetCustomBooksProps<TChildProps, TDataName>>(GetCustomBooksDocument, {
      alias: 'getCustomBooks',
      ...operationOptions
    });
};

/**
 * __useGetCustomBooksQuery__
 *
 * To run a query within a React component, call `useGetCustomBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomBooksQuery, GetCustomBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomBooksQuery, GetCustomBooksQueryVariables>(GetCustomBooksDocument, options);
      }
export function useGetCustomBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomBooksQuery, GetCustomBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomBooksQuery, GetCustomBooksQueryVariables>(GetCustomBooksDocument, options);
        }
export type GetCustomBooksQueryHookResult = ReturnType<typeof useGetCustomBooksQuery>;
export type GetCustomBooksLazyQueryHookResult = ReturnType<typeof useGetCustomBooksLazyQuery>;
export type GetCustomBooksQueryResult = Apollo.QueryResult<GetCustomBooksQuery, GetCustomBooksQueryVariables>;
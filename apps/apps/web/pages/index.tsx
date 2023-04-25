import { Button } from "ui";

import { useQuery, gql } from '@apollo/client';


const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      title
    }
  }
`;

export default function Web() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      {data.books.map(x => <div key={x.id}>{JSON.stringify(x)}</div>)}
    </div>
  );
}

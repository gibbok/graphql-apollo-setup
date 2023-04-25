import { useQuery, gql } from '@apollo/client';
import { useGetBooksQuery} from '../../server/src/__generated__/types'

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
  //  const { loading, error, data } = useGetBooksQuery();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      {data.books.map(x => <div key={x.author + x.title}>{JSON.stringify(x)}</div>)}
    </div>
  );
}

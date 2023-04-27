import { useQuery } from '@apollo/client';
import { ResultBooksUI } from '../ui-types';
import { GetBooksDocument } from '../../server/src/__generated__/queries';

export default function Web() {
  const { loading, error, data } = useQuery<ResultBooksUI>(GetBooksDocument); // with customer type because of the transform

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      <h1>Books</h1>
      {data.books.map(x => (
        <div key={x.id}>
          Title: {x.title} - Author: {x.author} - Score: {x.score}
        </div>
      ))}
    </div>
  );
}

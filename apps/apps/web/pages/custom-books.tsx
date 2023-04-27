import { useQuery } from '@apollo/client';
import { ResultBooksUI } from '../ui-types';
import { GetBooksDocument, useGetCustomBooksQuery } from '../../server/src/__generated__/queries';

export default function Web() {
  // using Apollo Link for transformation
  const { loading, error, data } = useGetCustomBooksQuery()
  console.log('data', data)

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      <h1>Custom Books</h1>
      {data.customBooks.map(x => (
        <div key={x.id}>
          Title: {x.title}
        </div>
      ))}
    </div>
  );
}

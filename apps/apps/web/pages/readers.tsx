import { useQuery } from '@apollo/client';
import { BooksUI, ResultBooksUI } from '../ui-types';
import { GetBooksDocument, GetReadersDocument, useGetReadersQuery } from '../../server/src/__generated__/queries';
// import { useGetBooksQuery } from '../../server/src/__generated__/queries'

export default function Web() {
  const { loading, error, data } = useGetReadersQuery(); 
  console.log(data)

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <div>
      <h1>Readers</h1>
      {data.readers.map(x => (
        <div key={x.id}>
          Name: {x.name}
        </div>
      ))}
    </div>
  );
}

import { useGetReadersQuery } from '../../server/src/__generated__/queries';

export default function Web() {
  // using hook automatically generated
  const { loading, error, data } = useGetReadersQuery(); 

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

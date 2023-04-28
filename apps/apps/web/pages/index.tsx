import { GetBooksQuery, useGetBooksQuery } from '../../server/src/__generated__/queries'

const enum Sentiment {
  Positive = 'positive',
  Negative = 'negative'
}

type BookUI = Readonly<{
  id: string;
  author: string;
  title: string;
  sentiment: Sentiment
}>

type BooksUI = ReadonlyArray<BookUI>

// transform data from the server to data suitable for the UI
const transformDataForUI = (data: GetBooksQuery): BooksUI =>
  data.books.map(x => ({
    id: x.id,
    title: x.title,
    author: x.author,
    sentiment: x.rating.score < 6 ? Sentiment.Negative : Sentiment.Positive
  }))



export default function Web() {
  const { loading, error, data } = useGetBooksQuery();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  const dataUI = transformDataForUI(data)

  return (
    <div>
      <h1>Books</h1>
      {dataUI.map(x => <div key={x.author + x.title}>{`${x.title} by: ${x.sentiment}`}</div>)}
    </div>
  );
}

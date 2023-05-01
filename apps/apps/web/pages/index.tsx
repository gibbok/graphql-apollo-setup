import { Book, GetBooksQuery, Maybe, Rating, useGetBooksQuery } from '../../server/src/__generated__/queries'

const enum Sentiment {
  Positive = 'positive',
  Negative = 'negative',
  Neutral = 'neutral'
}

type BookUI = Readonly<{
  id: string;
  author: string;
  title: string;
  sentiment: Sentiment
}>

type BooksUI = ReadonlyArray<BookUI>

const NOT_FOUND = 'Not found'

const getSentiment = (x?: Maybe<Rating> | null): Sentiment =>
  x?.score ? x.score === 5 ? Sentiment.Neutral : x.score > 5 ? Sentiment.Positive : Sentiment.Negative : Sentiment.Neutral


// transform data from the server to data suitable for the UI
const transformDataForUI = (data: GetBooksQuery | undefined): BooksUI =>
  data?.books ? data.books.map(x =>
  ({
    id: x.id,
    title: x.title ?? NOT_FOUND,
    author: x.author ?? NOT_FOUND,
    sentiment: getSentiment(x.rating)
  })
  ) : []




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

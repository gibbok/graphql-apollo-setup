export type BookUI = {
    id: string;
    title: string;
    author: string;
    score: number
}

export type BooksUI = ReadonlyArray<BookUI>
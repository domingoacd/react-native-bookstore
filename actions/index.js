export const fetchBooks = () => ({
  type: 'FETCH_BOOKS'
});

export const storeFetchedBooks = (data) => ({
  type: 'STORE_FETCHED_BOOKS',
  books: data
});
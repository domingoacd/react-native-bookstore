export const fetchAllBooks = async () => {
  const response = await fetch('https://600759db309f8b0017ee4725.mockapi.io/books');
  const books = await response.json();

  return books;
}
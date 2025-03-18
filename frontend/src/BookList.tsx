import { useEffect, useState } from 'react';
import { Book } from './types/Book';

function BookList() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('https://localhost:5001/api/Book');
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <>
      <h1>Book List</h1>
      <br />
      {books.map((book) => (
        <div id="bookCard">
          <h3>{book.title}</h3>
          <ul>
            <li>Author: {book.author}</li>
            <li>Publisher: {book.publisher}</li>
            <li>ISBN: {book.isbn}</li>
            <li>Classification: {book.classification}</li>
            <li>Category: {book.category}</li>
            <li>Page Count: {book.pageCount}</li>
            <li>Price: {book.price}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default BookList;

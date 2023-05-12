import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/features/books/booksSlice';
import Form from './Form';
import Book from './Book';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const { error, isLoading } = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(getBooks());
  }, []);



  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          itemId={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}

      <Form />
    </div>
  );
}

export default Books;

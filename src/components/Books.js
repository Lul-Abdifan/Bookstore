import { React } from "react";
import { useSelector } from "react-redux";

import Form from "./Form";
import Book from "./Book";

function Books() {
  const books = useSelector((state) => state.book.books);

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

import { useState, React } from "react";
import Form from "./Form.js";
import Book from "./Book";

function Books() {
  const [books, setBook] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" },
  ]);
  return (
    <div>
      {books.map((book) => 
        (<Book key={book.id} title={book.title} author={book.author} />)
      )}
      <Form />
    </div>
  );
}

export default Books;

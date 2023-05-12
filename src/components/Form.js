import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, postBook } from '../redux/features/books/booksSlice';

function Form() {
  const categories = ['Fiction', 'Novel', 'Education'];
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const addBookForm = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      ...book,
    };
    dispatch(postBook(newBook)).then(() => {
      dispatch(addBook(newBook));
    });
    setBook({
      title: '',
      author: '',
      category: '',
    });
  };

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form">
      <h3>Add New Book</h3>
      <form
        action=""
        className="newBook"
        onSubmit={(event) => addBookForm(event)}
      >
        <input
          type="text"
          name="title"
          placeholder="title"
          value={book.title}
          required
          onChange={(event) => handleChange(event)}
        />

        <input
          type="text"
          name="author"
          placeholder="author"
          value={book.author}
          required
          onChange={(event) => handleChange(event)}
        />
        <select
          name="category"
          value={book.category}
          onChange={(event) => handleChange(event)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;

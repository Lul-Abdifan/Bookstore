import React from 'react';
import PropTypes from 'prop-types';

function Book({
  id, title, author, setBook, books,
}) {
  const delBook = (id) => {
    setBook(books.filter((book) => book.id !== id));
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>

      <button type="submit" onClick={() => delBook(id)}>
        Delete
      </button>
    </div>
  );
}

export default Book;
Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  setBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

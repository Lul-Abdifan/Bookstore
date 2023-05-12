import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, deleteBook } from '../redux/features/books/booksSlice';

function Book({
  itemId, title, author, category,
}) {
  const dispatch = useDispatch();

  const remover = (itemId) => {
    dispatch(deleteBook(itemId)).then(() => dispatch(removeBook(itemId)));
  };
  return (
    <div>
      <p>{category}</p>
      <h2>{title}</h2>
      <p>{author}</p>

      <button type="submit" onClick={() => remover(itemId)}>
        Delete
      </button>
    </div>
  );
}

export default Book;
Book.propTypes = {
  itemId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

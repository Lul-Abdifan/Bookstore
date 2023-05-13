import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, deleteBook } from '../redux/features/books/booksSlice';

import 'react-circular-progressbar/dist/styles.css';

function Book({
  itemId, title, author, category,
}) {
  const [chapterNumber, setChapterNumber] = useState({
    chapter: 0,
    percent: 0,
  });
  const dispatch = useDispatch();

  const remover = (itemId) => {
    dispatch(deleteBook(itemId)).then(() => dispatch(removeBook(itemId)));
  };
  return (
    <div className="book-container">
      <div className="book-item-main">
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <button type="submit" className="button-show">
          Comments
        </button>
        <button
          type="submit"
          className="button-show remove"
          onClick={() => remover(itemId)}
          z
        >
          Remove
        </button>
        <button type="submit" className="button-show">
          Edit
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span>
          {chapterNumber.percent < 100 ? (
            <div className="progress-container">
              <CircularProgressbar
                className="circular-progressbar"
                value={chapterNumber.percent}
                text=""
              />
              <div className="percentage">
                {`${chapterNumber.percent}%`}

                <span className="completed">
                  Completed
                </span>
              </div>

            </div>
          ) : (
            <CircularProgressbar
              className="circular-progressbar"
              value={100}
              text=""
            />
          )}
        </span>

      </div>

      <div className="book-item">
        <h4 className="chapter chapter-header">Current Chapter</h4>
        {chapterNumber.chapter < 10 ? (
          <h2 className="chapter current-chapter">{`Chapter ${chapterNumber.chapter}`}</h2>
        ) : (
          <h2 className="completed">Completed</h2>
        )}

        <button
          type="submit"
          className="update"
          onClick={() => setChapterNumber({
            chapter: chapterNumber.chapter + 1,
            percent: chapterNumber.percent + 10,
          })}
        >
          UPDATE PROGRESS
        </button>
      </div>
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

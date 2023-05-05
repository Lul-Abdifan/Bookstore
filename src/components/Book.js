import React from "react";

function Book({ id, title, author }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button>Delete</button>
    </div>
  );
}

export default Book;

import React from 'react';

function Form() {
  return (
    <div className="form">
      <h3>Add New Book</h3>
      <form action="" className="AddForm">
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="author" placeholder="author" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;

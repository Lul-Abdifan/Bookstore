import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action) {
      const newBook = {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        categories: action.payload.categories,
      };
      state.books.push(newBook);
    },
    removeBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

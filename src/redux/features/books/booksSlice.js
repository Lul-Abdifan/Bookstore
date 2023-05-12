import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ID = 'X05dw8C99FTPjpO4h5Lo';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;

export const getBooks = createAsyncThunk(
  'books/fetchbook',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(URL);
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch user data');
    }
  },
);
export const postBook = createAsyncThunk('books/post', async (payload) => {
  const response = await axios.post(URL, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
});
export const deleteBook = createAsyncThunk('books/delete', async (itemId) => {
  const response = await axios.delete(`${URL}/${itemId}`);
  return response.data;
});

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      const newBook = {
        item_id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.books.push(newBook);
    },
    removeBook(state, action) {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        const apiData = action.payload;
        const books = Object.entries(apiData).map(([key, value]) => ({
          item_id: key,
          ...value[0],
        }));
        state.books = books;
        state.isLoading = false;
      });
  },
});
export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

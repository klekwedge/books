/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useFetch from '../hooks/useFetch';
import { IBook } from '../types';

const API_KEY = import.meta.env.VITE_API_KEY;

const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:art&orderBy=newest&maxResults=12&key=${API_KEY}`;

interface BooksState {
    books: IBook[];
    currentBook: null | IBook;
};

const initialState: BooksState = {
    books: [],
    currentBook: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', () => {
    const request = useFetch(baseUrl)
    return request;
});

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {

            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.books = action.payload.items
            })
            .addCase(fetchBooks.rejected, (state) => {

            })
    },
});


const { actions, reducer } = booksSlice;
// export const { } = actions;
export default reducer;
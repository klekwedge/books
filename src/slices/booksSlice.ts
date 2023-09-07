/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useFetch from '../hooks/useFetch';
import { IBook, ICurrentBook } from '../types';

const API_KEY = import.meta.env.VITE_API_KEY;

const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=subject:art&orderBy=newest&maxResults=20&key=${API_KEY}`;

interface BooksState {
    books: IBook[];
    currentBook: null | ICurrentBook;
};

const initialState: BooksState = {
    books: [],
    currentBook: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', () => {
    const request = useFetch(baseUrl)
    return request;
});

export const fetchCurrentBook = createAsyncThunk('books/fetchCurrentBook', (id: string) => {
    const request = useFetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
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
            .addCase(fetchCurrentBook.pending, (state) => {

            })
            .addCase(fetchCurrentBook.fulfilled, (state, action) => {
                state.currentBook = action.payload.volumeInfo
                console.log(action.payload);
            })
            .addCase(fetchCurrentBook.rejected, (state) => {

            })
    },
});


const { actions, reducer } = booksSlice;
// export const { } = actions;
export default reducer;
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useFetch from '../hooks/useFetch';


interface BooksState {
    books: []
};

const initialState: BooksState = {
    books: [],
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', (url: string) => {
    const request = useFetch(url);
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

            })
            .addCase(fetchBooks.rejected, (state) => {

            })
    },
});


const { actions, reducer } = booksSlice;
// export const { } = actions;
export default reducer;
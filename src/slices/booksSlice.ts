/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useFetch from '../hooks/useFetch';
import { IBook, ICurrentBook } from '../types';

const API_KEY = import.meta.env.VITE_API_KEY;

const baseUrl = 'https://www.googleapis.com/books/v1/volumes';

interface BooksState {
    books: IBook[];
    currentBook: null | ICurrentBook;
    search: string;
    category: string;
    sort: string;
    currentIndex: number;
};

const initialState: BooksState = {
    books: [],
    currentBook: null,
    search: '',
    category: 'all',
    sort: 'relevance',
    currentIndex: 0,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', () => {
    const request = useFetch(`${baseUrl}?q=subject:art&orderBy=newest&maxResults=20&key=${API_KEY}`)
    return request;
});

export const fetchCurrentBook = createAsyncThunk('books/fetchCurrentBook', (id: string) => {
    const request = useFetch(`${baseUrl}/${id}`)
    return request;
});

interface FetchBooksArgs {
    search: string;
    category: string;
    sort: string;
    currentIndex: number;
}

export const fetchFindBooks = createAsyncThunk('books/fetchFindBooks', ({ search, category, sort, currentIndex }: FetchBooksArgs) => {
    const bookCategory = (category === 'all') ? null : `subject:${category}`;
    const request = useFetch(`${baseUrl}?q=${search}+${bookCategory}&orderBy=${sort}&startIndex=${currentIndex}&maxResults=30&key=${API_KEY}`)
    return request;
});


const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload
        },
        setCategory(state, action) {
            state.category = action.payload
        },
        setSort(state, action) {
            state.sort = action.payload
        }
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

            })
            .addCase(fetchCurrentBook.rejected, (state) => {

            })
            .addCase(fetchFindBooks.pending, (state) => {

            })
            .addCase(fetchFindBooks.fulfilled, (state, action) => {
                console.log(state.currentIndex);
                if (state.currentIndex !== 0) {
                    state.books.push(...action.payload.items)
                }
                else {
                    state.books = action.payload.items
                }
                state.currentIndex += 30;
            })
            .addCase(fetchFindBooks.rejected, (state) => {

            })
    },
});


const { actions, reducer } = booksSlice;
export const { setSearch, setCategory, setSort } = actions;
export default reducer;
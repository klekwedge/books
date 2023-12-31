/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useFetch from '../hooks/useFetch';
import { IBook, ICurrentBook, Loading } from '../types';

const API_KEY = import.meta.env.VITE_API_KEY;

const baseUrl = 'https://www.googleapis.com/books/v1/volumes';

interface BooksState {
    books: IBook[];
    booksLoadingStatus: Loading;
    currentBook: null | ICurrentBook;
    currentBookLoadingStatus: Loading;
    search: string;
    category: string;
    sort: string;
    currentIndex: number;
    result: string;
    totalItems: number;
};

const initialState: BooksState = {
    books: [],
    booksLoadingStatus: 'loading',
    currentBook: null,
    currentBookLoadingStatus: 'loading',
    search: '',
    category: 'all',
    sort: 'relevance',
    currentIndex: 30,
    result: '',
    totalItems: 0
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', () => {
    const request = useFetch(`${baseUrl}?q=subject:computers&orderBy=relevance&maxResults=20&key=${API_KEY}`)
    return request;
});

export const fetchCurrentBook = createAsyncThunk('books/fetchCurrentBook', (id: string) => {
    const request = useFetch(`${baseUrl}/${id}`)
    return request;
});

interface FindBooksArgs {
    search: string;
    category: string;
    sort: string;
}

export const fetchFindBooks = createAsyncThunk('books/fetchFindBooks', ({ search, category, sort }: FindBooksArgs) => {
    const bookCategory = (category === 'all') ? null : `subject:${category}`;
    const request = useFetch(`${baseUrl}?q=${search}+${bookCategory}&orderBy=${sort}&startIndex=0&maxResults=30&key=${API_KEY}`)
    return request;
});

interface MoreBooksArgs extends FindBooksArgs {
    currentIndex: number;
}

export const fetchMoreBooks = createAsyncThunk('books/fetchMoreBooks', ({ search, category, sort, currentIndex }: MoreBooksArgs) => {
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
                state.booksLoadingStatus = 'loading'
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.books = action.payload.items
                state.booksLoadingStatus = 'idle'
            })
            .addCase(fetchBooks.rejected, (state) => {
                state.booksLoadingStatus = 'error'
            })
            .addCase(fetchCurrentBook.pending, (state) => {
                state.currentBookLoadingStatus = 'loading'
            })
            .addCase(fetchCurrentBook.fulfilled, (state, action) => {
                state.currentBook = action.payload.volumeInfo
                state.currentBookLoadingStatus = 'idle'
            })
            .addCase(fetchCurrentBook.rejected, (state) => {
                state.currentBookLoadingStatus = 'error'
            })
            .addCase(fetchFindBooks.pending, (state) => {
                state.booksLoadingStatus = 'loading'
            })
            .addCase(fetchFindBooks.fulfilled, (state, action) => {
                state.result = state.search;
                state.booksLoadingStatus = 'idle'
                state.totalItems = action.payload.totalItems;
                state.books = action.payload.items
            })
            .addCase(fetchFindBooks.rejected, (state) => {
                state.booksLoadingStatus = 'error'
            })
            .addCase(fetchMoreBooks.pending, (state) => {
                // state.booksLoadingStatus = 'loading'
            })
            .addCase(fetchMoreBooks.fulfilled, (state, action) => {
                state.books.push(...action.payload.items)
                // state.booksLoadingStatus = 'idle'
                state.currentIndex += 30;
            })
            .addCase(fetchMoreBooks.rejected, (state) => {
                // state.booksLoadingStatus = 'error'
            })
    },
});


const { actions, reducer } = booksSlice;
export const { setSearch, setCategory, setSort } = actions;
export default reducer;
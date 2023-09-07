import { configureStore } from '@reduxjs/toolkit';
import books from '../slices/booksSlice';

const store = configureStore({
  reducer: {
    books
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
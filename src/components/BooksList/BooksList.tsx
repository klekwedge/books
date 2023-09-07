import { useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchBooks } from '../../slices/booksSlice';

function BooksList() {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  console.log(books);
  return (
    <div>
      {/* {books.map((book) => (
        <BookCard />
      ))} */}
    </div>
  );
}

export default BooksList;

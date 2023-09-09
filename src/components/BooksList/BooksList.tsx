import { useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchBooks } from '../../slices/booksSlice';
import './BooksList.scss';
import LoadButton from '../LoadButton/LoadButton';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function BooksList() {
  const dispatch = useAppDispatch();
  const { books, totalItems, booksLoadingStatus } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (booksLoadingStatus === 'loading') {
    return <Spinner />;
  }

  if (booksLoadingStatus === 'error') {
    return <ErrorMessage />;
  }

  return (
    <>
      <div className="book__list">{books && books.map((book) => <BookCard key={book.id} book={book} />)}</div>
      {totalItems ? <LoadButton /> : ''}
    </>
  );
}

export default BooksList;

import { useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchBooks } from '../../slices/booksSlice';
import './BooksList.scss';
import LoadButton from '../LoadButton/LoadButton';
import Spinner from '../Spinner/Spinner';

function BooksList() {
  const dispatch = useAppDispatch();
  const { books, result, booksLoadingStatus, currentIndex } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (booksLoadingStatus === 'loading') {
    return <Spinner />;
  }

  return (
    <>
      <div className="book__list">{books && books.map((book) => <BookCard key={book.id} book={book} />)}</div>
      {/* {booksLoadingStatus === 'loading' ? <Spinner /> : ''} */}
      {result ? <LoadButton /> : ''}
    </>
  );
}

export default BooksList;

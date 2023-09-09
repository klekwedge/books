import { useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchBooks } from '../../slices/booksSlice';
import './BooksList.scss';
import LoadButton from '../LoadButton/LoadButton';

function BooksList() {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.books);

  // useEffect(() => {
  //   dispatch(fetchBooks());
  // }, []);

  console.log(books);


  return (
    <>
      <div className="book__list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <LoadButton />
    </>
  );
}

export default BooksList;

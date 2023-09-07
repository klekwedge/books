import { useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchBooks } from '../../slices/booksSlice';
import './BooksList.scss'

function BooksList() {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);


  return (
    <div className='book__list'>
      {books.map((book) => (
        <BookCard key={book.id} book={book}/>
      ))}
    </div>
  );
}

export default BooksList;

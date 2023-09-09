import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchCurrentBook } from '../../slices/booksSlice';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './BookInfo.scss';

function BookInfo() {
  const { currentBook, currentBookLoadingStatus } = useAppSelector((state) => state.books);
  const { bookId } = useParams();
  const dispatch = useAppDispatch();
  const imgUrl = `https://books.google.com/books/publisher/content/images/frontcover/${bookId}?fife=w480-h960`;

  useEffect(() => {
    if (bookId) {
      dispatch(fetchCurrentBook(bookId));
    }
  }, [bookId]);

  if (currentBookLoadingStatus === 'loading') {
    return <Spinner />;
  }

  if (currentBookLoadingStatus === 'error') {
    return <ErrorMessage />;
  }

  if (!currentBook) {
    return null;
  }

  return (
    <>
      <Link to="/" className='button-back'>Back</Link>
      <section className="info">
        <img src={imgUrl} alt={currentBook.title} />
        <div className="info__content">
          <h3>{currentBook.title}</h3>
          <h5>{currentBook.categories ? currentBook.categories[0] : 'N/A'}</h5>
          <h5>{currentBook.authors ? currentBook.authors.join(', ') : 'N/A'}</h5>
          <h5>
            {currentBook.publisher}, {currentBook.publishedDate}, {currentBook.printedPageCount} pages
          </h5>
          <div className="description">{currentBook.description ? parse(currentBook.description) : 'N/A'}</div>
        </div>
      </section>
    </>
  );
}

export default BookInfo;

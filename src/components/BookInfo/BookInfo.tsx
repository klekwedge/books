import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchCurrentBook } from '../../slices/booksSlice';
import './BookInfo.scss';

function BookInfo() {
  const { currentBook } = useAppSelector((state) => state.books);
  const { bookId } = useParams();
  const dispatch = useAppDispatch();
  const imgUrl = `https://books.google.com/books/publisher/content/images/frontcover/${bookId}?fife=w480-h960`;

  useEffect(() => {
    if (bookId) {
      dispatch(fetchCurrentBook(bookId));
    }
  }, [bookId]);

  if(!currentBook) {
    return null;
  }

  return (
    <section className="info">
      <img src={imgUrl} alt="" />
      <div>
        <h3>{currentBook.title}</h3>
        <h5>{currentBook.categories ? currentBook.categories[0] : 'N/A'}</h5>
        <h5>{currentBook.authors ? currentBook.authors.join(', ') : 'N/A'}</h5>
        <h5>
          {currentBook.publisher}, {currentBook.publishedDate}, {currentBook.printedPageCount} pages
        </h5>
        <div className="description">{currentBook.description ? currentBook.description : 'N/A'}</div>
      </div>
    </section>
  );
}

export default BookInfo;

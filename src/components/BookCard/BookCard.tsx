/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
import { useNavigate } from 'react-router-dom';
import { IBook } from '../../types';
import './BookCard.scss';

function BookCard({ book }: { book: IBook }) {
  const navigate = useNavigate();
  const imgUrl = `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w270`;

  const bookOnClick = () => {
    navigate(`/${book.id}`);
  };

  return (
    <div className="book__card" onClick={bookOnClick}>
      <img src={imgUrl} alt="" />
      <div>
        <h3>{book.volumeInfo.categories}</h3>
        <h2>
          {book.volumeInfo.title
            ? book.volumeInfo.title.length > 50
              ? `${book.volumeInfo.title.slice(0, 50)}...`
              : book.volumeInfo.title
            : 'N/A'}
        </h2>
        <h3>
          {book.volumeInfo.authors && book.volumeInfo.authors.length > 4
            ? `${book.volumeInfo.authors.slice(0, 4).join(', ')}...`
            : book.volumeInfo.authors
            ? book.volumeInfo.authors.join(', ')
            : 'N/A'}
        </h3>
      </div>
    </div>
  );
}

export default BookCard;

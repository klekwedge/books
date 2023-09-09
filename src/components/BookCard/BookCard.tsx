/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useNavigate } from 'react-router-dom';
import { IBook } from '../../types';
import './BookCard.scss';

interface BookCardProps {
  book: IBook;
}

function BookCard({ book }: BookCardProps) {
  const navigate = useNavigate();
  const imgUrl = `https://books.google.com/books/publisher/content/images/frontcover/${book.id}?fife=w270`;

  const bookOnClick = () => {
    navigate(`/${book.id}`);
  };

  return (
    <div className="book__card card" onClick={bookOnClick}>
      <img src={imgUrl} alt="" />
      <div>
        <h2>
          {book.volumeInfo.title
            ? book.volumeInfo.title.length > 50
              ? `${book.volumeInfo.title.slice(0, 50)}...`
              : book.volumeInfo.title
            : 'N/A'}
        </h2>
        <h3 className='card__authors'>
          {book.volumeInfo.authors && book.volumeInfo.authors.length > 4
            ? `${book.volumeInfo.authors.slice(0, 4).join(', ')}...`
            : book.volumeInfo.authors
            ? book.volumeInfo.authors.join(', ')
            : 'N/A'}
        </h3>
        <h3 className='card__categories'>{book.volumeInfo.categories}</h3>
      </div>
    </div>
  );
}

export default BookCard;

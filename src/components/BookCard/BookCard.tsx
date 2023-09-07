import './BookCard.scss'

function BookCard() {
  const id = 'gwJLEAAAQBAJ';
  const imgUrl = `https://books.google.com/books/publisher/content/images/frontcover/${id}?fife=w270`;

  return (
    <div className="card">
      <img src={imgUrl} alt="" />
      <div>
        <h2>example</h2>
        <h3>example</h3>
        <h3>example</h3>
      </div>
    </div>
  );
}

export default BookCard;

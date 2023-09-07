import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookInfo() {
  const { bookId } = useParams();
  const imgUrl = `https://books.google.com/books/publisher/content/images/frontcover/${bookId}?fife=w480-h960`;

  useEffect(() => {}, [])

  return (
    <section className="info">
      <img src={imgUrl} alt="" />
      <div>
        <h3>f</h3>
        {/* <h5>{categories ? categories[0] : 'N/A'}</h5>
        <h5>{authors ? authors.join(', ') : 'N/A'}</h5> */}
        {/* <h5>
          {publisher}, {publishedDate}, {printedPageCount} pages
        </h5> */}
        {/* <div className="description">{description ? parse(description) : 'N/A'}</div> */}
      </div>
    </section>
  );
}

export default BookInfo;

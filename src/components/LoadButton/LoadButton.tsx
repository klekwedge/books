import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchFindBooks } from '../../slices/booksSlice';
import './LoadButton.scss';

function LoadButton() {
  const dispatch = useAppDispatch();
  const { currentIndex, search, category, sort } = useAppSelector((state) => state.books);

  const handleClick = () => {
    dispatch(fetchFindBooks({ search, category, sort, currentIndex }));
  };

  return (
    <button type="button" className="load-button" onClick={() => handleClick()}>
      Load more
    </button>
  );
}

export default LoadButton;

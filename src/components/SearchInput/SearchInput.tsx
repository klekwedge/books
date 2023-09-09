/* eslint-disable jsx-a11y/no-autofocus */
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setSearch } from '../../slices/booksSlice';
import './SearchInput.scss';

function SearchInput() {
  const dispatch = useAppDispatch();
  const { search } = useAppSelector((state) => state.books);

  return (
    <input
      autoFocus
      name="search"
      value={search}
      onInput={(e) => {
        const target = e.target as HTMLInputElement;
        dispatch(setSearch(target.value));
      }}
    />
  );
}

export default SearchInput;

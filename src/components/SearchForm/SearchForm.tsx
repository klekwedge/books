/* eslint-disable jsx-a11y/label-has-associated-control */
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchFindBooks, setCategory, setSort } from '../../slices/booksSlice';
import SearchButton from '../SearchButton/SearchButton';
import SearchInput from '../SearchInput/SearchInput';
import SearchSelect from '../SearchSelect/SearchSelect';
import './SearchForm.scss';

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const sorting = ['relevance', 'newest'];

function SearchForm() {
  const dispatch = useAppDispatch();
  const { search, category, sort } = useAppSelector((state) => state.books);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchFindBooks({ search, category, sort }));
  };

  return (
    <div className="wrapper">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="search">
          <SearchInput />
          <SearchButton />
        </div>
        <div className="filters">
          <div>
            <label>Categories:</label>
            <SearchSelect setValue={setCategory} value={category} name="category" data={categories} />
          </div>
          <div>
            <label>Sorting by:</label>
            <SearchSelect setValue={setSort} value={sort} name="sort" data={sorting} />
          </div>
        </div>
      </form>
      {/* <h5 className="results">example</h5> */}
    </div>
  );
}

export default SearchForm;

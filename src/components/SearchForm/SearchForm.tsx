/* eslint-disable jsx-a11y/label-has-associated-control */
import { useAppDispatch } from '../../hooks/useRedux';
import { fetchFindBooks } from '../../slices/booksSlice';
import SearchButton from '../SearchButton/SearchButton';
import SearchInput from '../SearchInput/SearchInput';
import SearchSelect from '../SearchSelect/SearchSelect';
import './SearchForm.scss';

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const sorting = ['relevance', 'newest'];

function SearchForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const search = formData.get('search') as string;
    const category = formData.get('category') as string;
    const sort = formData.get('sort') as string;

    dispatch(fetchFindBooks({search, category, sort}))
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
            <SearchSelect name="category" values={categories} />
          </div>
          <div>
            <label>Sorting by:</label>
            <SearchSelect name="sort" values={sorting} />
          </div>
        </div>
      </form>
      <h5 className="results">example</h5>
    </div>
  );
}

export default SearchForm;

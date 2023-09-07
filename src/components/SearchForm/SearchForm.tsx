/* eslint-disable jsx-a11y/label-has-associated-control */
import SearchButton from '../SearchButton/SearchButton';
import SearchInput from '../SearchInput/SearchInput';
import SearchSelect from '../SearchSelect/SearchSelect';
import './SearchForm.scss';

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
const sort = ['relevance', 'newest'];

function SearchForm() {
  return (
    <div className="wrapper">
      <form>
        <div className="search">
          <SearchInput />
          <SearchButton />
        </div>
        <div className="filters">
          <div>
            <label>Categories:</label>
            <SearchSelect values={categories}/>
          </div>
          <div>
            <label>Sorting by:</label>
            <SearchSelect values={sort}/>
          </div>
        </div>
      </form>
      <h5 className="results">ff</h5>
    </div>
  );
}

export default SearchForm;

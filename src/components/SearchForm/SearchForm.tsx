/* eslint-disable jsx-a11y/label-has-associated-control */
import SearchButton from '../SearchButton/SearchButton';
import SearchInput from '../SearchInput/SearchInput';
import SearchSelect from '../SearchSelect/SearchSelect';
import './SearchForm.scss';

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
            <SearchSelect />
          </div>
          <div>
            <label>Sorting by:</label>
            <SearchSelect />
          </div>
        </div>
      </form>
      <h5 className="results">ff</h5>
    </div>
  );
}

export default SearchForm;

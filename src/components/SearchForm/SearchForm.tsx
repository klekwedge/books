/* eslint-disable jsx-a11y/label-has-associated-control */
import './SearchForm.scss';

function SearchForm() {
  return (
    <div className="wrapper">
      <form>
        <div className="search">
          <input />
          <button type="button">Search</button>
        </div>
        <div className="filters">
          <div>
            <label id="categories">Categories</label>
          </div>
          <div>
            <label id="sorting">Sorting&nbsp;by</label>
          </div>
        </div>
      </form>
      <h5 className="results">ff</h5>
    </div>
  );
}

export default SearchForm;
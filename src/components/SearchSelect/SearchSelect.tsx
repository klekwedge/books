import './SearchSelect.scss';

function SearchSelect({ values }: { values: string[] }) {
  return (
    <select name="select">
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default SearchSelect;

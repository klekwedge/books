import './SearchSelect.scss';

function SearchSelect({ values, name }: { values: string[], name:string }) {
  return (
    <select name={name}>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default SearchSelect;

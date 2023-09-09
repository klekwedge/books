import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../hooks/useRedux';
import './SearchSelect.scss';

interface SearchSelectProps {
  data: string[];
  name: string;
  value: string;
  setValue: ActionCreatorWithPayload<any>
}

function SearchSelect({ value, data, name, setValue }: SearchSelectProps) {
  const dispatch = useAppDispatch();

  return (
    <select
      name={name}
      value={value}
      onChange={(e) => {
        const target = e.target as HTMLSelectElement;
        dispatch(setValue(target.value));
      }}
    >
      {data.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default SearchSelect;

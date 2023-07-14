import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input onChange={handleFilter} placeholder="Enter name" />
    </div>
  );
};
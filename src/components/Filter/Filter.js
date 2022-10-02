import PropTypes from 'prop-types';
import { Label, FilterInput } from './Filter.styles';

export default function Filter({ filter, setFilter }) {
  return (
    <Label>
      Find contacts by name
      <FilterInput value={filter} onChange={e => setFilter(e.target.value)} />
    </Label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

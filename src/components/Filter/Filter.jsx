import { FilterLable, FilterField } from './Filter.Styled';

export const Filter = ({ value, onChange }) => {

  return (
    <form autoComplete="off">
      <FilterLable htmlFor="filter">Find contact by name</FilterLable>
      <FilterField
        name="filter"
        value={value}
        onChange={onChange}
        type="text"
        id="filter"
      />
    </form>
  );
};

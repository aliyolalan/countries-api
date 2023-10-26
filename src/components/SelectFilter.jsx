import PropTypes from "prop-types";

export function SelectFilter({ onChangeHandler }) {
  return (
    <div>
      <select name="selectRegion" defaultValue="" onChange={onChangeHandler}>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Americas">Americas</option>
      </select>
    </div>
  );
}

SelectFilter.propTypes = {
  onChangeHandler: PropTypes.func,
};

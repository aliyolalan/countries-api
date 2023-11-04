import PropTypes from 'prop-types';

export function SelectFilter({ onChangeHandler }) {
  return (
    <div>
      <select
        className="w-[200px] h-[56px] bg-[#2B3743] text-white text-sm px-6 py-[18px] outline-none"
        name="selectRegion"
        defaultValue=""
        onChange={onChangeHandler}
      >
        <option value="">Filter by Region</option>
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

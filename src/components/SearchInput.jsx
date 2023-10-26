import PropTypes from "prop-types";

export function SearchInput({ placeholder, onChangeHandler }) {
  return (
    <div>
      <input
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

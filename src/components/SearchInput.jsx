import PropTypes from 'prop-types';

export function SearchInput({ placeholder, onChangeHandler }) {
  return (
    <div>
      <input
        className="w-[480px] h-[56px] px-[30px] py-[17px] bg-[#2B3743] outline-none text-white text-sm"
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

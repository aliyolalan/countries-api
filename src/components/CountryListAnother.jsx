import Country from "./Country.jsx";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function CountryListAnother({ countryDataForList }) {
  return (
    <div className="container flex flex-wrap justify-start gap-x-[52.75px]">
      {countryDataForList.map((countryItem, countryIndex) => {
        return (
          <Link key={countryIndex} to={`/countries/${countryItem.countryKey}`}>
            <Country countryData={countryItem} />
          </Link>
        );
      })}
    </div>
  );
}

CountryListAnother.propTypes = {
  countryDataForList: PropTypes.any,
};

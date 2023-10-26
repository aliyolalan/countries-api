import Country from "./Country.jsx";
import { Fragment, useEffect, useState } from "react";
import { fetchAllCountries } from "../api/fetchAllCountries.js";
import { Link } from "react-router-dom";
import { SearchInput } from "./SearchInput.jsx";

export function CountryList() {
  const [countryData, setCountryData] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [searchField, setSearchField] = useState("");

  const getCountries = async () => {
    const response = await fetchAllCountries();
    setCountryData(response);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const onSearchChangeHandler = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredCountries = countryData.filter((countryItem) => {
      return countryItem.countryName.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCountry(newFilteredCountries);
  }, [countryData, searchField]);

  console.log(filteredCountry);

  return (
    <Fragment>
      <SearchInput
        placeholder="Search countries..."
        onChangeHandler={onSearchChangeHandler}
      />
      <div className="container flex flex-wrap justify-between">
        {countryData.map((countryItem, countryIndex) => (
          <Link to={`/countries/${countryItem.countryKey}`} key={countryIndex}>
            <Country
              key={countryIndex}
              countryFlag={countryItem.countryFlag}
              countryName={countryItem.countryName}
              countryCapital={countryItem.countryCapital}
              countryPopulation={countryItem.countryPopulation}
              countryRegion={countryItem.countryRegion}
              countryKey={countryItem.countryKey}
            />
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

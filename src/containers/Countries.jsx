import { CountryListAnother } from "../components/CountryListAnother.jsx";
import { useEffect, useState } from "react";
import { fetchAllCountries } from "../api/fetchAllCountries.js";
import { SearchInput } from "../components/SearchInput.jsx";
import { SelectFilter } from "../components/SelectFilter.jsx";

export default function Countries() {
  const [countryData, setCountryData] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredCountryRegion, setFilteredCountryRegion] = useState([]);

  // Fetch all countries...
  const getCountries = async () => {
    const response = await fetchAllCountries();
    setCountryData(response);
  };

  useEffect(() => {
    getCountries().then(() => console.log("All country data fetched."));
  }, []);

  // Search input operations...
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

  // Select region option operations...
  const onSelectChangeHandler = (event) => {
    const selectedCountryRegion = event.target.value;
    setSelectedRegion(selectedCountryRegion);
  };

  useEffect(() => {
    const newSelectedCountryRegion = filteredCountry.filter((countryItem) => {
      return countryItem.countryRegion.includes(selectedRegion);
    });
    setFilteredCountryRegion(newSelectedCountryRegion);
  }, [filteredCountry, selectedRegion]);

  return (
    <div className="container">
      <div className="container flex justify-between items-center mb-[47px]">
        <SearchInput
          placeholder="Search for a country..."
          onChangeHandler={onSearchChangeHandler}
        />
        <SelectFilter onChangeHandler={onSelectChangeHandler} />
      </div>
      <CountryListAnother countryDataForList={filteredCountryRegion} />
    </div>
  );
}

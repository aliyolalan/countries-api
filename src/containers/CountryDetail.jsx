import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllCountries } from "../api/fetchAllCountries.js";

export function CountryDetail() {
  const [countryData, setCountryData] = useState([]);
  const { countryID } = useParams();
  const getCountries = async () => {
    const response = await fetchAllCountries();
    setCountryData(response);
  };

  useEffect(() => {
    getCountries().then(() => console.log());
  }, []);

  const singleCountryData = countryData.filter(
    (countryItem) => countryItem.countryKey === countryID,
  );

  const borderCountries = countryData
    .filter((countryItem) => countryItem.countryKey === countryID)
    .map((countryItem) => countryItem.borderCountries);

  return (
    <div className="container text-white">
      <div>Country Details</div>
      {singleCountryData.map((countryItem, countryIndex) => (
        <div key={countryIndex}>
          <div>{countryItem.countryName}</div>
          <div>{countryItem.countryCapital}</div>
          <div>{countryItem.countryPopulation}</div>
          <div>{countryItem.countryRegion}</div>
          <div>{countryItem.countrySubRegion}</div>
          <div>{countryItem.countryTopLevelDomain}</div>
        </div>
      ))}
      <div>
        {borderCountries[0]?.map((borderItem, borderIndex) => (
          <div key={borderIndex}>{borderItem}</div>
        ))}
      </div>
    </div>
  );
}

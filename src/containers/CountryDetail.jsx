import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchAllCountries } from '../api/fetchAllCountries.js';
import { populationValueFormat } from '../utils/numberFormat.js';

export function CountryDetail() {
  const [countryData, setCountryData] = useState([]);
  const { countryID } = useParams();

  let navigateBack = useNavigate();

  const getCountries = async () => {
    const response = await fetchAllCountries();
    setCountryData(response);
  };

  useEffect(() => {
    getCountries().then(() => console.log());
  }, []);

  const singleCountryData = countryData.filter((countryItem) => countryItem.countryKey === countryID);

  // Selected country's border countries
  const borderCountries = countryData
    .filter((countryItem) => countryItem.countryKey === countryID)
    .map((countryItem) => countryItem.borderCountries);

  const formatPopulation = (value) => {
    return populationValueFormat(value);
  };

  // Country language lister.
  const languageLister = (value) => Object.values(value).toString().split(',').join(', ');

  // Country currency name.
  const countryCurrency = countryData
    .filter((countryItem) => countryItem.countryKey === countryID)
    .map((countryItem) => countryItem.countryCurrencies);

  let countryCurrencyName;
  if (countryCurrency[0]) {
    const currencyValues = Object.values(countryCurrency[0]);
    countryCurrencyName = currencyValues[0].name;
  }

  // Country native name.
  const countryNative = countryData
    .filter((countryItem) => countryItem.countryKey === countryID)
    .map((countryItem) => countryItem.nativeName);

  let countryNativeName;
  if (countryNative[0]) {
    const nativeName = Object.values(countryNative[0]);
    countryNativeName = nativeName[0].common;
  }

  return (
    <div className="container text-white">
      <button
        className="w-[135px] h-10 mt-[30px] mb-20 bg-[#26323D] shadow-lg rounded"
        onClick={() => navigateBack(-1)}
      >
        Back
      </button>
      <div className="max-w-7xl mx-auto">
        {singleCountryData.map((countryItem, countryIndex) => (
          <div className="flex items-center justify-between" key={countryIndex}>
            <img className="max-w-[555px] h-auto" src={countryItem.countryFlag} alt={countryItem.countryName} />
            <div className="max-w-[571px] w-full">
              <div>
                <h2 className="text-[32px] font-extrabold leading-[32px] mb-[33px]">{countryItem.countryName}</h2>
                <div className="flex flex-col flex-wrap h-[147px]">
                  <div className="text-base leading-[16px] mb-[13px]">Native Name: {countryNativeName}</div>
                  <div className="text-base leading-[16px] mb-[13px]">
                    Population: {formatPopulation(countryItem.countryPopulation)}
                  </div>
                  <div className="text-base leading-[16px] mb-[13px]">Region: {countryItem.countryRegion}</div>
                  <div className="text-base leading-[16px] mb-[13px]">Sub Region: {countryItem.countrySubRegion}</div>
                  <div className="text-base leading-[16px] mb-[13px]">Capital: {countryItem.countryCapital}</div>
                  <div className="text-base leading-[16px] mb-[13px]">
                    Top Level Domain: {countryItem.countryTopLevelDomain}
                  </div>
                  <div className="text-base leading-[16px] mb-[13px]">Currencies: {countryCurrencyName}</div>
                  <div className="text-base leading-[16px] mb-[13px]">
                    Languages: {languageLister(countryItem.countryLanguage)}
                  </div>
                </div>
              </div>
              <div className="mt-[76px]">
                <div className="flex flex-row flex-wrap items-center gap-[10px]">
                  <h2>Border Countries: </h2>
                  {borderCountries[0]?.map((borderItem, borderIndex) => (
                    <Link to={`/countries/${borderItem}`} key={borderIndex}>
                      <div className="text-[14px] bg-[#2B374380] shadow-lg rounded px-[27px] py-[5px] hover:bg-[#2B3743FF] transition-all">
                        {borderItem}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

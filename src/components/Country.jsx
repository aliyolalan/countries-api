import PropTypes from "prop-types";

export default function Country({ countryData }) {
  const {
    countryFlag,
    countryName,
    countryPopulation,
    countryCapital,
    countryRegion,
  } = countryData;
  return (
    <div className="bg-[#2B3743] rounded-md shadow-lg w-[265px] h-[335px] mb-12 text-white">
      <img src={countryFlag} alt={countryName} />
      <h1 className="text-xl">{countryName}</h1>
      <p>Population: {countryPopulation}</p>
      <p>Region: {countryRegion}</p>
      <p>Capital: {countryCapital}</p>
    </div>
  );
}

Country.propTypes = {
  countryData: PropTypes.any,
};

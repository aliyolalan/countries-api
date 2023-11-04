import PropTypes from 'prop-types';
import { populationValueFormat } from '../utils/numberFormat.js';

export default function Country({ countryData }) {
  const { countryFlag, countryName, countryPopulation, countryCapital, countryRegion } = countryData;
  const formattedPopulationValue = populationValueFormat(countryPopulation);

  return (
    <div className="bg-[#2B3743] rounded-md shadow-lg w-[265px] h-[335px] mb-12 text-white">
      <div className="flex items-center justify-center w-[265px] h-[159px] overflow-hidden">
        <img className="max-w-full min-h-[159px] object-cover" src={countryFlag} alt={countryName} />
      </div>
      <div className="px-6 mt-[27px]">
        <h1 className="text-lg leading-5 mb-[18px]">{countryName}</h1>
        <p className="text-sm leading-4 mb-2">
          Population: <span className="text-gray-400">{formattedPopulationValue}</span>
        </p>
        <p className="text-sm leading-4 mb-2">
          Region: <span className="text-gray-400">{countryRegion}</span>
        </p>
        <p className="text-sm leading-4">
          Capital: <span className="text-gray-400">{countryCapital}</span>
        </p>
      </div>
    </div>
  );
}

Country.propTypes = {
  countryData: PropTypes.any,
};

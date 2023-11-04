export async function fetchAllCountries() {
  const API_URL = 'https://restcountries.com/v3.1/all';

  try {
    const response = await fetch(API_URL);

    if (response.ok) {
      const data = await response.json();

      const countriesData = data.map((country) => {
        return {
          countryKey: country.cca3,
          countryName: country.name.common,
          nativeName: country.name.nativeName,
          countryFlag: country.flags.svg,
          countryPopulation: country.population,
          countryCapital: country.capital,
          countryRegion: country.region,
          countrySubRegion: country.subregion,
          countryTopLevelDomain: country.tld,
          countryCurrencies: country.currencies,
          countryLanguage: country.languages,
          borderCountries: country.borders,
        };
      });

      return countriesData;
    } else {
      console.error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}

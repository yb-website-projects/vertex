declare module 'react-select-country-list' {
  type Country = {
    value: string;
    label: string;
  };

  type CountryList = {
    getData: () => Country[];
  };

  function countryList(): CountryList;
  export default countryList;
}

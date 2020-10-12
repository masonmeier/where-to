import { remoteServerURL } from "components/QuizProvider";

const getCountryData = () => {
  const CountryData = fetch(remoteServerURL)
    .then((res) => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        throw error;
      }
    );
  // return Promise.resolve(CountryData);
  return CountryData;
};

export default getCountryData;

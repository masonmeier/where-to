import { remoteServerURL } from "constants/index";

export const getCountryData = () => {
  return fetch(remoteServerURL)
    .then((res) => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        throw error;
      }
    );
};

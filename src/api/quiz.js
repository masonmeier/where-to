import { remoteServerURL } from "providers/QuizProvider";

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

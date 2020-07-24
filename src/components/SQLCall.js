import React from 'react';

export default function getCountryData() {

  /*
  sql connection can go here.
  return new Promise((resolve, reject) => {
      connect({ sqlOptions: '' }, function (sqlError, sqlData) {
          if (sqlError) {
              reject(sqlError);
          }
          else {
              resolve(sqlData);
          }
      });
  });

   */
  const CountryData = fetch('http://localhost:3002')
    .then(res => res.json())
    .then(
      (result) => {
        console.log('countryData sanity check', result);
        return result;
      },
      (error) => {
        throw error;
      }
    );
  // return Promise.resolve(CountryData);
  return CountryData;
};
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
  const CountryData =
    fetch('http://ec2-54-190-70-0.us-west-2.compute.amazonaws.com:3002')
      .then(res => res.json())
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
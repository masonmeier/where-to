import React from 'react';

export default function getNewsData() {
  return fetch('http://localhost:3002/news')
    .then(res => res.json())
    .then(
      (result) => {
        console.log('news article sanity check', result);
        return result;
      },
      (error) => {
        throw error;
      }
    );
}
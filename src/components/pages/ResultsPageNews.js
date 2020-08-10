import React from 'react';
import ResultNavBar from '../Structure/ResultNavBar';
import NewsInformation from './ResultInformation/NewsInformation';

const ResultsPageNews = (props) => {
  const result = props.result;
  console.log('result iso2 sanity check', result.iso2);
  return (
    <div>
      <ResultNavBar/>

      <h2 className="newsHeader">See what's happening in your country!</h2>
      <NewsInformation result={result.country}/>
    </div>
  );
};

export default ResultsPageNews;
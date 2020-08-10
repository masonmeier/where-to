import React from 'react';
import ResultNavBar from '../Structure/ResultNavBar';


const ResultsPageStats = (props) => {
  const result = props.result;
  console.log(props.result.iso2, 'iso 2 sanity check');
  return (
    <div>
      <ResultNavBar/>
      <h1 className="statsHeader">{result.country}!</h1>
      <div className="flagHolder">
        {/*<img className="flag" alt="country flag" src={require(`images/flagssvg/${result.iso2}.svg`)}/>*/}
      </div>
    </div>
  )
    ;
};

export default ResultsPageStats;

// <img className="flag" alt="country flag" src={require(`images/flagssvg/${result.iso2}.svg`)}/>
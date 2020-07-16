import React, {useRef, useContext} from 'react';
import ResultsCalculator from './ResultsCalculator';

function ResultsPage(props) {
  return (
    <div className="questionBody">
      <h1>Results page text</h1>
      <ResultsCalculator/>
    </div>
  );
}

export default ResultsPage;
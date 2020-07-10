import React, {useRef, useContext} from 'react';
import ResultsCalculator from './ResultsCalculator';

function ResultsPage(props) {
  // const quizContext = useContext(QuizContext);

  return (
    <div className="questionBody">
      <h1>Your moms buck teeth</h1>
      <ResultsCalculator/>
    </div>
  );
}

export default ResultsPage;
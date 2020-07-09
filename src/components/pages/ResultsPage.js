import React, {useRef, useContext} from 'react';
import ResultsCalculator from './ResultsCalculator';

function ResultsPage(props) {
  // const quizContext = useContext(QuizContext);

  return (
    <div className="questionBody">
      <ResultsCalculator/>
    </div>
  );
}

export default ResultsPage;
import React, {useContext} from 'react';
import {QuizContext} from '../QuizProvider';

function ResultsCalculator(props) {
  const quizContext = useContext(QuizContext);
  const userAnswers = quizContext.getUserAnswers;
  console.log('user Answers object check', userAnswers);
  

  return (
    <h2>The user answer values are: {userAnswers}</h2>
  );

}

export default ResultsCalculator;
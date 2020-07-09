import React, { useContext } from 'react';
import {QuizContext} from '../../QuizProvider';
import { useHistory } from "react-router-dom";


function QuestionBody(props) {
  const quizContext = useContext(QuizContext);
  const questionNumber = quizContext.getCurrentQuestionNum();
  const questionObj = quizContext.getCurrentQuestionObj();

  return (
    <div className="questionBody">
      <h2>Question {questionNumber+1}</h2>
      <p>{questionObj.text}</p>
    </div>
  );
}

export default QuestionBody;
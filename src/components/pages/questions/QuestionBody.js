import React, { useContext } from 'react';
import {QuizContext} from '../../QuizProvider';
import { useHistory } from "react-router-dom";


function QuestionBody(props) {
  const quizContext = useContext(QuizContext);
  const questionNumber = quizContext.getCurrentQuestionNum();
  const questionText = quizContext.getCurrentQuestionInfo();
  console.log("question body context", questionNumber);

  return (
    <div className="questionBody">
      <h2>Question {questionNumber+1}</h2>
      <p>{questionText.text}</p>
    </div>
  );
}

export default QuestionBody;
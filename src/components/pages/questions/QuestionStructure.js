import React, {useRef, useContext} from 'react';
import {QuizContext} from '../../QuizProvider';
import NavBar from '../../Structure/NavBar';
import UserInput from './Input';
import QuestionBody from './QuestionBody';
import '../../../CSS/questionBody.css';


function QuestionStructure(props) {
  const quizContext = useContext(QuizContext);

  return (
    <div className="slideContainer">
      <NavBar/>
      <div className="advertisement">
        <h1 className="add-text">this is an add</h1>
      </div>
      <div className="questionContainer">
        <QuestionBody history={props.history}/>
        <UserInput history={props.history}/>
      </div>
    </div>
  );
}

export default QuestionStructure;
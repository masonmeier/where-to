import React from 'react';
import NavBar from '../../Structure/NavBar';
import UserInput from './Input';
import QuestionBody from './QuestionBody';
import '../../../CSS/questionBody.css';


function QuestionStructure(props) {
  return (
    <div className="slideContainer">
      <NavBar/>
      <div className="questionContainer">
        <QuestionBody history={props.history}/>
        <UserInput history={props.history}/>
      </div>
    </div>
  );
}

export default QuestionStructure;
import React, { useRef, useContext } from 'react';
import {QuizContext} from '../../QuizProvider';
import Signature from '../../Structure/Signature';
import Topbar from '../../Structure/Topbar';
import Title from '../../Structure/Title';
import UserInput from './Input';

function QuestionStructure(props) {
  const quizContext = useContext(QuizContext);

  return (
    <div className="slideContainer">
      <Topbar />
      <Title />
      <div className="questionContainer">
        {/*<QuestionBody />*/}
        <UserInput />
      </div>
      <Signature />
    </div>
  );
}

export default QuestionStructure;
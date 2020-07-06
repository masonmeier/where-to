import React, { useRef, useContext } from 'react';
import {QuizContext} from '../../QuizProvider';
import { useHistory } from "react-router-dom";

function Question1(props) {
  const quizContext = useContext(QuizContext);
  const qSlider = useRef(null);
  const history = useHistory();
  const inputId = this.props.inputId

  const nextQuestion = () => {
    const qVal = qSlider.current.valueAsNumber;
    quizContext.setQVal(qVal);

    //change to next question
    //
    //history.push("/q2")
  };

  return (
    <div className="inputContainer">
        <input type="range" id={inputId} ref={qSlider} />
        <button onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default Question1;
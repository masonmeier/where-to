import React, {useRef, useContext} from 'react';
import {QuizContext} from '../../QuizProvider';
import { useHistory } from "react-router-dom";

function Question2(props) {
  const quizContext = useContext(QuizContext);
  const q2Slider = useRef(null);

  const nextQuestion = () => {
    const q2Val = q2Slider.current.valueAsNumber;
    quizContext.setQ2Val(q2Val);

  };

  return (
    <div className="slideContainer">
      <h1>Question 2</h1>
      <input type="range" id="slider2" ref={q2Slider} />
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default Question2;
import React, { useRef, useContext } from 'react';
import {QuizContext} from '../../QuizProvider';
import { useHistory } from "react-router-dom";
import Signature from '../../Structure/Signature';
import Topbar from '../../Structure/Topbar';
import Title from '../../Structure/Title';

function Question1(props) {
  const quizContext = useContext(QuizContext);
  const q1Slider = useRef(null);
  const history = useHistory();

  const nextQuestion = () => {
    const q1Val = q1Slider.current.valueAsNumber;
    quizContext.setQ1Val(q1Val);
      history.push("/q2")
  };

    return (
        <div className="slideContainer">
          <Topbar />
          <Title />
          <div className="questionContainer">
            <input type="range" id="slider1" ref={q1Slider} />
            <button className="next" onClick={nextQuestion}>
              Next
            </button>
          </div>
          <Signature />
        </div>
      );
}

export default Question1;
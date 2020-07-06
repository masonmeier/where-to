import React, { useRef, useContext } from 'react';
import {QuizContext} from '../../QuizProvider';
// import { useHistory } from "react-router-dom";

function UserInput(props) {
  const quizContext = useContext(QuizContext);
  const qSlider = useRef(null);


  //when nextQuestion is called we are setting qVal as the current slider value of the input as a number 1-100
  //We are then calling setQVal and using that to push qVal to the answerValues array in quizContext
  //Then we will change the quiz question body value to the next value in the questionValues array
  const nextQuestion = () => {
    const qVal = qSlider.current.valueAsNumber;
    console.log("quiz context", quizContext);
    quizContext.setQVal(qVal);
    quizContext.setQBody();
    if (quizContext.getCurrentQuestionNum() >= quizContext.numberOfQuestions-1){
      props.history.push("/results");
    }
    };


  return (
    <div className="inputContainer">
        <input type="range" ref={qSlider} />
        <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default UserInput;
import React, { useRef, useContext } from 'react';
import {QuizContext} from '../../QuizProvider';
// import { useHistory } from "react-router-dom";

function UserInput(props) {
  const quizContext = useContext(QuizContext);
  const inputRef = useRef(null);
  const questionObj = quizContext.getCurrentQuestionObj();
  console.log("input sanity check", questionObj);

  //when nextQuestion is called we are setting qVal as the current slider value of the input as a number 1-100
  //We are then calling setQVal and using that to push qVal to the answerValues array in quizContext
  //Then we will change the quiz question body value to the next value in the questionValues array
  const nextQuestion = () => {
    const qVal = inputRef.current.valueAsNumber;
    quizContext.setQVal(qVal);
    quizContext.setQBody();
    if (quizContext.getCurrentQuestionNum() >= quizContext.numberOfQuestions-1){
      props.history.push("/results");
    }
    };

  console.log("input and ref check", questionObj);
  return (
    <div className="inputContainer">
        <input type={questionObj.inputType} ref={inputRef} />
        <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default UserInput;
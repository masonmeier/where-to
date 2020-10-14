import React, {useContext} from 'react';
import {QuizContext} from 'providers/QuizProvider';

// import { useHistory } from "react-router-dom";

function UserInput(props) {
  const [inputVal, setInputVal] = React.useState(0);
  const quizContext = useContext(QuizContext);
  const Question = quizContext.getCurrentQuestion();
  const numberOfQuestions = quizContext.questionValues.length;

  // when Question changes, re initialize the input value
  React.useEffect(() => {
    setInputVal(Question.value);
  }, [Question]);

  //when nextQuestion is called we are setting qVal as the current slider value of the input as a number 1-100
  //We are then calling setQVal and using that to push qVal to the answerValues array in quizContext
  //Then we will change the quiz question body value to the next value in the questionValues array
  const nextQuestion = () => {
    // store the input value in the Question
    Question.value = inputVal;
    quizContext.setQVal(Question);
    quizContext.setQBody();
    if (quizContext.getCurrentQuestionNum() >= numberOfQuestions - 1) {
      props.history.push('/results');
    }
  };

  return (
    <div className="inputContainer">
      <input
        className="userSlider"
        type="range"
        value={inputVal}
        onChange={(e) => setInputVal(parseInt(e.target.value))}
      />
      <br/>
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default UserInput;

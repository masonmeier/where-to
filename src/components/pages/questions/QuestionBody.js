import React, { useContext } from "react";
import { QuizContext } from "components/QuizProvider";
import economic from "images/QuestionIcons/economic.png";
import education from "images/QuestionIcons/education.png";
import environment from "images/QuestionIcons/environment.png";
import political from "images/QuestionIcons/political.png";
import social from "images/QuestionIcons/social.png";

//images are initialized into an object to allow react to read them
//for each re-render
const categoryToImage = {
  economic: economic,
  education: education,
  environment: environment,
  political: political,
  social: social,
};

function QuestionBody(props) {
  const quizContext = useContext(QuizContext);
  const questionObj = quizContext.getCurrentQuestionObj();

  return (
    <div className="questionBody">
      <div className="questionIconContainer">
        <img
          className="questionIcon"
          alt="question icon"
          src={categoryToImage[questionObj.visual]}
        />
      </div>
      <div className="questionTextHolder">
        <p className="questionText">{questionObj.text}</p>
      </div>
      <div className="leftInputValHolder">
        <p className="questionText">{questionObj.leftVal}</p>
      </div>
      <div className="rightInputValHolder">
        <p className="questionText">{questionObj.rightVal}</p>
      </div>
    </div>
  );
}

export default QuestionBody;

import React, { useContext } from "react";
import { QuizContext } from "components/QuizProvider";
import economic from "components/pages/images/QuestionIcons/economic.png";
import education from "components/pages/images/QuestionIcons/education.png";
import environment from "components/pages/images/QuestionIcons/environment.png";
import political from "components/pages/images/QuestionIcons/political.png";
import social from "components/pages/images/QuestionIcons/social.png";
import NavBar from "components/Structure/NavBar";
import UserInput from "components/pages/questions/Input";
import "CSS/webflow.css";
import "CSS/normalize.css";

const categoryToImage = {
  economic: economic,
  education: education,
  environment: environment,
  political: political,
  social: social,
};

// <QuestionBody history={props.history}/>

function QuestionStructure(props) {
  const quizContext = useContext(QuizContext);
  const questionObj = quizContext.getCurrentQuestionObj();
  const expHeader = questionObj.questionExplanationHeader;
  const expText = questionObj.questionExplanationText;
  const importanceHeader = questionObj.whyIsThisImportantHeader;
  const importanceText = questionObj.whyIsThisImportText;
  const questionNumber = questionObj.questionNumber;
  const questionText = questionObj.questionText;
  const fact = questionObj.questionFact;

  return (
    <div className="question-body">
      <NavBar />
      <div className="question-structure">
        <div className="w-row">
          <div className="question-explanation w-col w-col-3">
            <div className="rich-text-block w-richtext">
              <h2>{expHeader}</h2>
              <p className="question-embellish">{expText}</p>
              <h4>{importanceHeader}</h4>
              <p className="question-embellish">{importanceText}</p>
            </div>
          </div>
          <div className="question-interaction w-col w-col-9">
            <header id="hero" className="hero-2">
              <div className="flex-container w-container">
                <div className="primary-question-body">
                  <h1 className="question-number">Question {questionNumber}</h1>
                  <p className="question-text">
                    <strong>{questionText}</strong>
                  </p>
                  <div className="left-input-val-holder">
                    <p className="q-val">
                      <strong>{questionObj.leftVal}</strong>
                    </p>
                  </div>
                  <div className="right-input-val-holder">
                    <p className="q-val">
                      <strong>{questionObj.rightVal}</strong>
                    </p>
                  </div>
                  <UserInput history={props.history} />
                  <p className="question-fact">
                    <i>{fact}</i>
                  </p>
                </div>
                <div className="hero-image-mask">
                  <img
                    src={categoryToImage[questionObj.visual]}
                    alt=""
                    className="question-image"
                  />
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      <div className="signature-holder">
        <div className="signature">Mason Meier 2020</div>
      </div>
    </div>
  );
}

export default QuestionStructure;

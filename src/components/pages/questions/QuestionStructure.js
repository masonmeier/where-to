import React, {useContext} from 'react';
import {QuizContext} from 'providers/QuizProvider';
import economic from 'images/QuestionIcons/economic.png';
import education from 'images/QuestionIcons/education.png';
import environment from 'images/QuestionIcons/environment.png';
import political from 'images/QuestionIcons/political.png';
import social from 'images/QuestionIcons/social.png';
import NavBar from 'components/structure/NavBar';
import UserInput from 'components/pages/questions/Input';
import 'styles/webflow.css';
import 'styles/normalize.css';

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
  const Question = quizContext.getCurrentQuestion();
  const expHeader = Question.questionExplanationHeader;
  const expText = Question.questionExplanationText;
  const importanceHeader = Question.whyIsThisImportantHeader;
  const importanceText = Question.whyIsThisImportText;
  const questionNumber = Question.questionNumber;
  const questionText = Question.questionText;
  const fact = Question.questionFact;

  return (
    <div className="question-body">
      <NavBar/>
      <div className="question-structure">
        <div className="w-row">
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
                      <strong>{Question.leftVal}</strong>
                    </p>
                  </div>
                  <div className="right-input-val-holder">
                    <p className="q-val">
                      <strong>{Question.rightVal}</strong>
                    </p>
                  </div>
                  <UserInput history={props.history}/>
                  <p className="question-fact">
                    <i>{fact}</i>
                  </p>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="question-explanation w-col w-col-3">
          <div className="hero-image-mask">
            <img
              src={categoryToImage[Question.visual]}
              alt=""
              className="question-image"
            />
          </div>
          <div className="rich-text-block w-richtext">
            <h2>{expHeader}</h2>
            <p className="question-embellish">{expText}</p>
            <h4>{importanceHeader}</h4>
            <p className="question-embellish">{importanceText}</p>
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

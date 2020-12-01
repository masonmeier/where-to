import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {QuizContext} from 'providers/QuizProvider';
import titleimage from 'images/lpimages/title.png';

const NavBar = (props) => {
  const quizContext = useContext(QuizContext);
  const quizReset = quizContext.resetQuestionValues;
  let history = useHistory();
  const restart = () => {
    quizReset();
    history.push('/');
  };

  return (
    <div className="navBar">
      <header id="nav" className="sticky-nav">
        <nav className="w-container">
          <ul className="nav-grid">
            <li id="w-node-ded4bd0810a5-d3ab1131" className="logo-image-mask">
              <img
                src={titleimage}
                width="80"
                height="80"
                alt="title"
                className="nav-logo"
              />
            </li>
            <li className="nav-header-item">
              <a href="http://masonmeier.info" className="button w-button">Contact</a>
            </li>
            <li className="nav-header-item">
              <p onClick={restart} className="button w-button">
                Restart Quiz
              </p>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;

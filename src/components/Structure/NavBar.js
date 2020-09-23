import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom';
import {QuizContext} from '../QuizProvider';
import titleimage from '../pages/images/lpimages/title.png';


const NavBar = (props) => {
  const quizContext = useContext(QuizContext);
  const quizReset = quizContext.resetQuestionValues;
  let history = useHistory();
  const restart = () => {
    quizReset();
    history.push('/');
  };

  return (
    <div className='navBar'>
      <header id="nav" className="sticky-nav">
        <nav className="w-container">
          <ul className="nav-grid">
            <li id="w-node-ded4bd0810a5-d3ab1131" className="logo-image-mask">
              <img src={titleimage} width="80" height="80" alt="title image" className="nav-logo"/>
            </li>
            <li><a href="#" className="nav-link">Contact</a></li>
            <li className="restart-container"><a onClick={restart} className="button w-button">Restart Quiz</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;

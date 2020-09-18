import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/index.css';
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
          <ul className="nav-grid w-list-unstyled">
            <li id="w-node-ded4bd0810a5-d3ab1131"><a href="#" className="nav-logo-link w-inline-block">
              <img src={titleimage} width="80" height="80" af-el="nav-logo" alt="" className="nav-logo"/></a>
            </li>
            <li><a href="#" className="nav-link">Contact</a></li>
            <li><a onClick={restart} className="button w-button">Restart Quiz</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;

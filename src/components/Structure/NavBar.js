import React, {useContext} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/index.css';
import {useHistory} from 'react-router-dom';
import {QuizContext} from '../QuizProvider';


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
          <ul role="list" className="nav-grid w-list-unstyled">
            <li id="w-node-ded4bd0810a5-d3ab1131"><a href="#" className="nav-logo-link w-inline-block"><img
              src="images/7561-planet2.gif" width="80" height="80" alt="" className="nav-logo"/></a></li>
            <li><a href="#" className="nav-link"></a></li>
            <li><a href="#" className="nav-link">Contact</a></li>
            <li><a href="#" className="button w-button">Restart Quiz</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
